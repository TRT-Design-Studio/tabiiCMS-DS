// Figma'dan alınan ham veriyi (tokens/figma-ham.json) token dosyalarına, Tailwind temasına ve eşleme tablosuna dönüştürür.
// Kullanım: node scripts/tokenlari-uret.mjs   Kural: rules/core/token-isimlendirme.md
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT } from './lib.mjs';

export const RAW_PATH = join(ROOT, 'tokens', 'figma-ham.json');
const NOTE = 'Bu dosya `node scripts/tokenlari-uret.mjs` ile Figma verisinden otomatik üretilir. Elle düzenleme.';

// Figma'daki yazı stili adı → CSS font-weight sayısı.
const WEIGHT = { Thin: 100, ExtraLight: 200, Light: 300, Regular: 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900 };
// Figma ağırlık adı → Tailwind class adı. İstisna: rules/core/tailwind-temel.md
const TW_WEIGHT = { regular: 'normal' };

// Tailwind'in kendi utility'leriyle çakışmaması gereken adlar.
const RESERVED = {
  bg: ['fixed', 'local', 'scroll', 'repeat', 'no-repeat', 'cover', 'contain', 'auto', 'center', 'top', 'bottom', 'left', 'right', 'none', 'inherit', 'current', 'transparent'],
  text: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', 'left', 'center', 'right', 'justify', 'start', 'end', 'wrap', 'nowrap', 'balance', 'pretty', 'clip', 'ellipsis', 'inherit', 'current', 'transparent'],
  border: ['0', '2', '4', '8', 'x', 'y', 's', 'e', 't', 'r', 'b', 'l', 'solid', 'dashed', 'dotted', 'double', 'hidden', 'none', 'collapse', 'separate', 'spacing', 'inherit', 'current', 'transparent'],
};
const PROPERTY = { bg: 'background-color', text: 'color', border: 'border-color' };

const num = (n) => +n.toFixed(4);
const rem = (px) => `${num(px / 16)}rem`;
const cssLen = (n) => (n === 0 ? '0' : `${n}px`);
const hex = (c) => '#' + c.slice(0, 3).map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
const colorValue = (c) => ({ colorSpace: 'srgb', components: c.slice(0, 3), ...(c[3] < 1 ? { alpha: c[3] } : {}), hex: hex(c) });
const dim = (n) => ({ value: n, unit: 'px' });
const json = (o) => JSON.stringify(o, null, 2) + '\n';
const clean = (name) => name.replace(/․/g, '.'); // Figma isimde nokta kabul etmediği için "․" kullanılmış

function setPath(obj, path, value) {
  let o = obj;
  for (const key of path.slice(0, -1)) o = o[key] ??= {};
  if (o[path.at(-1)]) throw new Error(`Aynı token yolu iki kez üretildi: ${path.join('.')}`);
  o[path.at(-1)] = value;
}

// Primitive Figma adı → token yolu. Tanınmayan bir grup gelirse durur: eşlemeyi proje sahibi onaylamalı.
function primitivePath(name) {
  const s = clean(name).split('/');
  if (s[0] === 'Colors') return ['color', ...s.slice(1)];
  if (s[0] === 'Spacing' && s.length === 2) return ['spacing', s[1].replace('.', '_')];
  if (s[0] === 'Border' && s[1] === 'border-radius') return ['radius', s[2].replace(/^rounded-?/, '') || 'default'];
  if (s[0] === 'Border' && s[1] === 'border-width') return ['border-width', s[2].replace(/^border-?/, '') || 'default'];
  if (s[0] === 'Font' && s[1] === 'family') return ['font', 'family', 'sans'];
  if (s[0] === 'Font' && s[1] === 'size') return ['font', 'size', s[2]];
  if (s[0] === 'Font' && s[1] === 'weight') return ['font', 'weight', s[2].replace(/^font-/, '')];
  if (s[0] === 'Font' && s[1] === 'line-height') return ['font', 'line-height', s[2].replace(/^leading-/, '')];
  throw new Error(`"${name}" için eşleme kuralı yok. rules/core/token-isimlendirme.md güncellenmeli (proje sahibine sor).`);
}
const ref = (name) => `{${primitivePath(name).join('.')}}`;
const primitiveVar = (name) => `--color-${primitivePath(name).slice(1).join('-')}`;

// Semantic renk → Tailwind utility. Önek Figma kapsamından gelir, grup adı tekrar edilmez.
function semanticUtility(v) {
  const sc = v.scopes;
  const prefix = sc.includes('STROKE_COLOR') ? 'border' : sc.includes('TEXT_FILL') ? 'text' : sc.some((x) => x === 'FRAME_FILL' || x === 'SHAPE_FILL') ? 'bg' : null;
  if (!prefix) throw new Error(`"${v.name}" kapsamından (${sc.join(', ') || 'boş'}) utility türü çıkarılamıyor.`);
  let segs = v.name.split('/');
  if (PROPERTY[segs[0]]) {
    if (segs[0] !== prefix) throw new Error(`"${v.name}" adı "${segs[0]}" diyor ama kapsamı "${prefix}" için. Figma'da ad veya kapsam düzeltilmeli.`);
    segs = segs.slice(1);
  }
  if (segs.length > 1 && (segs.at(-1) === 'default' || segs.at(-1) === prefix)) segs = segs.slice(0, -1);
  const suffix = segs.join('-');
  if (RESERVED[prefix].includes(suffix)) throw new Error(`"${v.name}" → "${prefix}-${suffix}" Tailwind'in kendi class'ıyla çakışıyor.`);
  return { prefix, utility: `${prefix}-${suffix}` };
}

export function buildTokens(raw) {
  const warnings = [];
  const prim = raw.collections.find((c) => c.name === 'Primitives');
  const theme = raw.collections.find((c) => c.name === 'Themes');
  if (!prim || !theme) throw new Error('Figma verisinde "Primitives" veya "Themes" koleksiyonu yok.');
  const primMode = prim.modes[0];
  const P = Object.fromEntries(prim.variables.map((v) => [v.name, v]));
  const val = (name) => P[name].values[primMode];
  const figmaExt = (v) => ({ 'com.figma': { variableId: v.id, name: v.name, scopes: v.scopes } });

  // ---------- primitives.json ----------
  const primitives = { $description: NOTE };
  for (const v of prim.variables) {
    const path = primitivePath(v.name);
    const raw = v.values[primMode];
    let token;
    if (v.type === 'COLOR') token = { $type: 'color', $value: colorValue(raw.color) };
    else if (path[0] === 'font' && path[1] === 'weight') {
      if (!WEIGHT[raw]) throw new Error(`"${v.name}" için bilinmeyen ağırlık: ${raw}`);
      token = { $type: 'fontWeight', $value: WEIGHT[raw] };
    } else if (path[0] === 'font' && path[1] === 'family') token = { $type: 'fontFamily', $value: raw };
    else token = { $type: 'dimension', $value: dim(raw) };
    token.$extensions = figmaExt(v);
    setPath(primitives, path, token);
  }

  // ---------- semantic.<mod>.json ve CSS değişkenleri ----------
  const modes = theme.modes.map((m) => ({ name: m, slug: m.toLowerCase().replace(/\s*mode$/, '').trim() }));
  const semanticFiles = {};
  const semanticRows = [];
  const cssByMode = Object.fromEntries(modes.map((m) => [m.slug, []]));
  const utilities = [];
  const seenUtility = new Map();
  for (const m of modes) semanticFiles[m.slug] = { $description: NOTE };
  for (const v of theme.variables) {
    if (v.type !== 'COLOR') throw new Error(`Themes'te renk olmayan değişken var: ${v.name}`);
    const cssVar = v.codeSyntax?.WEB?.match(/var\((--[\w-]+)\)/)?.[1] ?? `--color-${v.name.replaceAll('/', '-')}`;
    if (!v.codeSyntax?.WEB) warnings.push(`"${v.name}" için Figma'da code syntax yok, "${cssVar}" kullanıldı.`);
    const { prefix, utility } = semanticUtility(v);
    if (seenUtility.has(utility)) throw new Error(`"${v.name}" ve "${seenUtility.get(utility)}" aynı class'a (${utility}) düşüyor.`);
    seenUtility.set(utility, v.name);
    utilities.push(`@utility ${utility} {\n  ${PROPERTY[prefix]}: var(${cssVar});\n}`);
    const row = { name: v.name, cssVar, utility, values: {} };
    for (const m of modes) {
      const x = v.values[m.name];
      let token, css, shown;
      if (x.alias && x.opacity !== undefined) {
        const base = val(x.alias).color;
        token = { $type: 'color', $value: colorValue([...base.slice(0, 3), x.opacity / 100]) };
        css = `color-mix(in srgb, var(${primitiveVar(x.alias)}) ${x.opacity}%, transparent)`;
        shown = `${clean(x.alias).replace('Colors/', '')} %${x.opacity}`;
      } else if (x.alias) {
        if (!P[x.alias]) throw new Error(`"${v.name}" Primitives'te olmayan bir değişkene bağlı: ${x.alias}`);
        token = { $type: 'color', $value: ref(x.alias) };
        css = `var(${primitiveVar(x.alias)})`;
        shown = clean(x.alias).replace('Colors/', '');
      } else {
        warnings.push(`"${v.name}" (${m.name}) bir primitive'e bağlı değil, değer doğrudan yazılmış.`);
        token = { $type: 'color', $value: colorValue(x.color) };
        css = hex(x.color);
        shown = hex(x.color);
      }
      token.$extensions = figmaExt(v);
      setPath(semanticFiles[m.slug], v.name.split('/'), token);
      cssByMode[m.slug].push(`  ${cssVar}: ${css};`);
      row.values[m.slug] = shown;
    }
    semanticRows.push(row);
  }

  // ---------- typography.json ----------
  const typography = { $description: NOTE };
  const lineHeightBySize = {};
  for (const s of raw.textStyles) {
    const [size, weight] = s.name.split('/');
    if (s.lineHeight.unit !== 'PIXELS') throw new Error(`"${s.name}" satır yüksekliği piksel değil (${s.lineHeight.unit}).`);
    if (s.letterSpacing.value !== 0) warnings.push(`"${s.name}" harf aralığı 0 değil (${s.letterSpacing.value} ${s.letterSpacing.unit}).`);
    const key = size.replace(/^text-/, '');
    if (lineHeightBySize[key] !== undefined && lineHeightBySize[key] !== s.lineHeight.value) throw new Error(`text-${key} için iki farklı satır yüksekliği var.`);
    lineHeightBySize[key] = s.lineHeight.value;
    setPath(typography, [size, weight], {
      $type: 'typography',
      $value: {
        fontFamily: s.bound.fontFamily ? ref(s.bound.fontFamily) : s.fontFamily,
        fontSize: s.bound.fontSize ? ref(s.bound.fontSize) : dim(s.fontSize),
        fontWeight: s.bound.fontStyle ? ref(s.bound.fontStyle) : WEIGHT[s.fontStyle],
        lineHeight: num(s.lineHeight.value / s.fontSize),
        letterSpacing: dim(0),
      },
      $extensions: { 'com.figma': { styleId: s.id, name: s.name, lineHeightVariable: s.bound.lineHeight ?? null } },
    });
    for (const k of ['fontFamily', 'fontSize', 'fontStyle', 'lineHeight']) if (!s.bound[k]) warnings.push(`"${s.name}" stilinde ${k} bir değişkene bağlı değil.`);
  }

  // ---------- shadows.json ----------
  const shadows = { $description: NOTE };
  const shadowCss = [];
  for (const s of raw.effectStyles) {
    const name = s.name.split('/').at(-1);
    const m = name.match(/^(inset-shadow|shadow)-(.+)$/);
    if (!m) throw new Error(`"${s.name}" gölge stili adı Tailwind'e uymuyor (shadow-* veya inset-shadow-* olmalı).`);
    setPath(shadows, [m[1], m[2]], {
      $type: 'shadow',
      $value: s.effects.map((e) => ({ color: colorValue(e.color), offsetX: dim(e.x), offsetY: dim(e.y), blur: dim(e.blur), spread: dim(e.spread), inset: e.type === 'INNER_SHADOW' })),
      $extensions: { 'com.figma': { styleId: s.id, name: s.name } },
    });
    const value = s.effects.map((e) => `${e.type === 'INNER_SHADOW' ? 'inset ' : ''}${cssLen(e.x)} ${cssLen(e.y)} ${cssLen(e.blur)} ${cssLen(e.spread)} rgb(0 0 0 / ${e.color[3]})`).join(', ');
    if (s.effects.some((e) => e.color.slice(0, 3).some((c) => c !== 0))) warnings.push(`"${s.name}" siyah olmayan bir gölge rengi içeriyor, CSS'te siyah yazıldı.`);
    shadowCss.push(`  --${m[1]}-${m[2]}: ${value};`);
  }

  // ---------- Tailwind karşılaştırması ----------
  const spacing = prim.variables.filter((v) => v.name.startsWith('Spacing/'));
  const unit = val('Spacing/1');
  for (const v of spacing) {
    const n = clean(v.name).split('/')[1];
    if (n === 'px') { if (v.values[primMode] !== 1) warnings.push(`Spacing/px 1 px değil.`); continue; }
    if (+n * unit !== v.values[primMode]) warnings.push(`${clean(v.name)} = ${v.values[primMode]} px, ama Tailwind'de ${+n * unit} px.`);
  }
  const borderWidths = prim.variables.filter((v) => v.name.startsWith('Border/border-width/'));
  for (const v of borderWidths) {
    const n = primitivePath(v.name)[1];
    const expected = n === 'default' ? 1 : +n;
    if (v.values[primMode] !== expected) warnings.push(`${v.name} = ${v.values[primMode]} px, ama Tailwind'de ${expected} px.`);
  }

  // ---------- tailwind.css ----------
  const radius = prim.variables.filter((v) => v.name.startsWith('Border/border-radius/')).map((v) => [primitivePath(v.name)[1], v.values[primMode]]);
  const sizes = prim.variables.filter((v) => v.name.startsWith('Font/size/')).map((v) => [primitivePath(v.name)[2], v.values[primMode]]);
  const weights = prim.variables.filter((v) => v.name.startsWith('Font/weight/')).map((v) => [primitivePath(v.name)[2], WEIGHT[v.values[primMode]]]);
  const colors = prim.variables.filter((v) => v.type === 'COLOR');
  const lightSlug = modes.find((m) => m.slug === 'light')?.slug ?? modes[0].slug;

  const css = [
    `/* ${NOTE} */`,
    '/* Kural: rules/core/token-isimlendirme.md · Eşleme tablosu: tokens/esleme.md */',
    '',
    '@custom-variant dark (&:where(.dark, .dark *));',
    '',
    '@theme {',
    '  /* Tailwind\'in varsayılanları kapatılır, sadece sistemdeki değerler kalır. */',
    '  --color-*: initial;',
    '  --font-*: initial;',
    '  --text-*: initial;',
    '  --radius-*: initial;',
    '  --shadow-*: initial;',
    '  --inset-shadow-*: initial;',
    '',
    `  --spacing: ${rem(unit)};`,
    `  --font-sans: "${val('Font/family/font-family')}", sans-serif;`,
    ...weights.map(([n, w]) => `  --font-weight-${TW_WEIGHT[n] ?? n}: ${w};`),
    ...sizes.filter(([n]) => lineHeightBySize[n] !== undefined).flatMap(([n, px]) => [`  --text-${n}: ${rem(px)};`, `  --text-${n}--line-height: calc(${lineHeightBySize[n]} / ${px});`]),
    ...radius.filter(([n]) => n !== 'none' && n !== 'full').map(([n, px]) => `  --radius-${n}: ${rem(px)};`),
    ...shadowCss,
    '}',
    '',
    '/* Primitive renkler: utility üretmez, sadece semantic renkler kullanır (Figma\'da da seçicilerde gizli). */',
    ':root {',
    ...colors.map((v) => `  ${primitiveVar(v.name)}: ${hex(val(v.name).color)};`),
    '}',
    '',
    ...modes.flatMap((m) => [`${m.slug === lightSlug ? ':root' : `.${m.slug}`} {`, ...cssByMode[m.slug], '}', '']),
    '/* Semantic renk class\'ları: Figma\'daki grup adı class\'ın önekidir (bg-, text-, border-). */',
    ...utilities.flatMap((u) => [u, '']),
  ].join('\n');

  // ---------- esleme.md ----------
  const skippedSizes = sizes.filter(([n]) => lineHeightBySize[n] === undefined).map(([n]) => `text-${n}`);
  const md = [
    '# Token eşleme tablosu',
    '',
    `> ⚙️ ${NOTE}`,
    '>',
    '> Figma\'daki her değişkenin kodda neye karşılık geldiğini gösterir. Kural: [token-isimlendirme.md](../rules/core/token-isimlendirme.md)',
    '',
    '## Semantic renkler',
    '',
    `| Figma | Tailwind class | CSS değişkeni | ${modes.map((m) => m.name).join(' | ')} |`,
    `|---|---|---|${modes.map(() => '---').join('|')}|`,
    ...semanticRows.map((r) => `| \`${r.name}\` | \`${r.utility}\` | \`${r.cssVar}\` | ${modes.map((m) => r.values[m.slug]).join(' | ')} |`),
    '',
    'Hover, focus gibi durumlar Tailwind önekleriyle yazılır: `hover:bg-action-primary-hover`, `dark:` gerekmez (renkler moda göre kendiliğinden değişir).',
    '',
    '## Boşluk (Spacing)',
    '',
    'Tailwind\'in 4 px\'lik ölçeği kullanılır. Figma\'daki `Spacing/N` = kodda `p-N`, `m-N`, `gap-N`, `w-N`, `h-N`…',
    '',
    '| Figma | Değer | Örnek class |',
    '|---|---|---|',
    ...spacing.map((v) => { const n = clean(v.name).split('/')[1]; return `| \`${clean(v.name)}\` | ${v.values[primMode]} px | \`p-${n}\` |`; }),
    '',
    '## Köşe yuvarlaklığı',
    '',
    '| Figma | Değer | Class |',
    '|---|---|---|',
    ...radius.map(([n, px]) => `| \`rounded-${n}\` | ${n === 'full' ? 'tam yuvarlak' : `${px} px`} | \`rounded-${n}\` |`),
    '',
    '## Border kalınlığı',
    '',
    '| Figma | Değer | Class |',
    '|---|---|---|',
    ...borderWidths.map((v) => { const n = primitivePath(v.name)[1]; const cls = n === 'default' ? 'border' : `border-${n}`; return `| \`${v.name.split('/').at(-1)}\` | ${v.values[primMode]} px | \`${cls}\` |`; }),
    '',
    '## Yazı',
    '',
    `Font: **${val('Font/family/font-family')}** → \`font-sans\` (varsayılan).`,
    '',
    '| Figma yazı stili | Class | Boyut / satır |',
    '|---|---|---|',
    ...sizes.filter(([n]) => lineHeightBySize[n] !== undefined).map(([n, px]) => `| \`text-${n}/<ağırlık>\` | \`text-${n} font-<ağırlık>\` | ${px} / ${lineHeightBySize[n]} px |`),
    '',
    skippedSizes.length ? `Figma\'da değişkeni olup yazı stili olmayan boyutlar kodda tanımlanmaz: ${skippedSizes.map((s) => `\`${s}\``).join(', ')}.` : '',
    '',
    '| Figma ağırlık | Değer | Class |',
    '|---|---|---|',
    ...weights.map(([n, w]) => `| \`font-${n}\` | ${w} | \`font-${TW_WEIGHT[n] ?? n}\`${TW_WEIGHT[n] ? ' ⚠️ ad farklı' : ''} |`),
    '',
    '## Gölgeler',
    '',
    '| Figma stili | Class |',
    '|---|---|',
    ...raw.effectStyles.map((s) => `| \`${s.name}\` | \`${s.name.split('/').at(-1)}\` |`),
    '',
    '## Primitive renkler',
    '',
    'Primitive renkler kodda class olarak **kullanılamaz** (Figma\'da da seçicilerde gizli). Sadece semantic renklerin değeri olarak kullanılırlar. CSS değişkeni olarak vardırlar: `--color-<renk>-<ton>`.',
    '',
    '| Figma | CSS değişkeni | Değer |',
    '|---|---|---|',
    ...colors.map((v) => `| \`${v.name}\` | \`${primitiveVar(v.name)}\` | \`${hex(val(v.name).color)}\` |`),
    '',
  ].join('\n');

  const files = {
    'tokens/primitives.json': json(primitives),
    ...Object.fromEntries(modes.map((m) => [`tokens/semantic.${m.slug}.json`, json(semanticFiles[m.slug])])),
    'tokens/typography.json': json(typography),
    'tokens/shadows.json': json(shadows),
    'tokens/tailwind.css': css,
    'tokens/esleme.md': md,
  };
  return { files, warnings };
}

export function readRaw() {
  return existsSync(RAW_PATH) ? JSON.parse(readFileSync(RAW_PATH, 'utf8')) : null;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const raw = readRaw();
  if (!raw) {
    console.log('✗ tokens/figma-ham.json yok. Önce Figma senkronu yapılmalı (workflows/figma-senkron.md).');
    process.exit(1);
  }
  const { files, warnings } = buildTokens(raw);
  for (const [path, content] of Object.entries(files)) writeFileSync(join(ROOT, path), content);
  console.log(`✓ ${Object.keys(files).length} dosya üretildi: ${Object.keys(files).join(', ')}`);
  if (warnings.length) {
    console.log(`\n⚠️ ${warnings.length} uyarı (Tailwind'den farklılık veya eksik bağ). Proje sahibine göster:\n`);
    for (const w of warnings) console.log(`- ${w}`);
  }
}
