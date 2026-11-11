#!/usr/bin/env node
// Code layer'ları üretir: tokens/ + components/<isim>/spec.md + interaction/components → interaction/layers/<sayfa>/index.html
// Kullanım:
//   node interaction/build.mjs           bütün sayfaları üretir
//   node interaction/build.mjs buttons   sadece bir sayfayı üretir
//   node interaction/build.mjs --check   layers güncel değilse hata verir (spec değişip build unutulduysa)
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { buildTokensCss } from './lib/tokens.mjs';
import { readSpec, v } from './lib/spec.mjs';
import { buildIconsJs } from './lib/icons.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const args = process.argv.slice(2);
const check = args.includes('--check');
const only = args.filter((a) => !a.startsWith('--'));
const rd = (...p) => readFileSync(join(here, ...p), 'utf8');

const pages = readdirSync(join(here, 'pages')).filter((p) => existsSync(join(here, 'pages', p, 'page.json')) && (!only.length || only.includes(p)));
// Ortak hareket: components/button/spec.md → Motion. Hover ve state geçişleri her komponentte bununla yumuşar
// (kural: rules/core/interaction/code-layer.md, madde 5). Ölçek sadece butonlarda.
const motionRows = readSpec(root, 'button').table('Motion');
const motion = Object.fromEntries(motionRows.map((r) => [r.property.toLowerCase(), r.value]));
const motionCss = `:root { --tds-motion-duration: ${v.num(motion.duration)}ms; --tds-motion-easing: ${motion.easing.trim()};
  --tds-transition: background-color var(--tds-motion-duration) var(--tds-motion-easing), color var(--tds-motion-duration) var(--tds-motion-easing), box-shadow var(--tds-motion-duration) var(--tds-motion-easing), border-color var(--tds-motion-duration) var(--tds-motion-easing), opacity var(--tds-motion-duration) var(--tds-motion-easing), text-decoration-color var(--tds-motion-duration) var(--tds-motion-easing); }
`;
const tokensCss = buildTokensCss(root) + motionCss;
let stale = [];

for (const page of pages) {
  const cfg = JSON.parse(rd('pages', page, 'page.json'));
  let css = tokensCss + rd('shared', 'base.css');
  let js = rd('shared', 'icons.js') + rd('shared', 'core.js') + rd('shared', 'playground.js');
  // İç içe komponentler meta.json → uses ile otomatik eklenir; önce kullanılanlar gelir.
  const order = [];
  const visit = (n, trail = []) => {
    if (order.includes(n)) return;
    if (trail.includes(n)) throw new Error(`Döngüsel bağımlılık: ${[...trail, n].join(' → ')}`);
    const metaPath = join(here, 'components', n, 'meta.json');
    if (!existsSync(metaPath)) throw new Error(`interaction/components/${n}/meta.json yok`);
    for (const d of JSON.parse(readFileSync(metaPath, 'utf8')).uses) visit(d, [...trail, n]);
    order.push(n);
  };
  cfg.components.forEach((n) => visit(n));
  // Spec tabloları JS'e de geçer: komponentler ikon boyutu gibi değerleri buradan okur (TDS.spec).
  const specData = {};
  for (const name of order) {
    const style = await import(pathToFileURL(join(here, 'components', name, 'style.mjs')).href);
    const spec = readSpec(root, name);
    specData[name] = spec.tables;
    css += `\n/* ${name}: components/${name}/spec.md */\n` + style.default(spec, v);
    js += `\n// ${name}\n` + rd('components', name, 'component.js');
  }
  js = `window.TDS_SPEC = ${JSON.stringify(specData)};\n` + js;
  js += `\n// page\n` + rd('pages', page, 'page.js');
  // İkonlar SVG olarak gömülür (Phosphor, Figma Icons sayfasıyla aynı geometri). Sadece bu sayfada geçenler.
  const iconFiles = [...order.map((n) => join(here, 'components', n, 'component.js')), join(here, 'shared', 'playground.js'), join(here, 'pages', page, 'page.js')];
  js = (await buildIconsJs(here, iconFiles)) + js;
  const html = `<!doctype html>
<!-- Bu dosya \`node interaction/build.mjs\` ile üretilir. Elle düzenleme. Kaynak: interaction/ ve components/*/spec.md -->
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${cfg.title} · Tabii CMS Design System</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${css}
</style>
</head>
<body>
<div id="app"></div>
<script>
${js}
</script>
</body>
</html>
`;
  const out = join(here, 'layers', page, 'index.html');
  if (check) {
    if (!existsSync(out) || readFileSync(out, 'utf8') !== html) stale.push(page);
    continue;
  }
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  writeFileSync(join(dirname(out), 'README.md'), `# ${cfg.title} code layer\n\n**Bu klasör ne?** Figma'daki "${cfg.figmaPage}" sayfasının Interaction frame'ine konan dosya. \`node interaction/build.mjs\` ile üretilir, elle düzenlenmez.\n\n**Nasıl kullanılır?** \`index.html\` dosyasının içeriğini Figma'daki code layer'a yapıştır. Adımlar: [interaction/README.md](../../README.md).\n\nKomponentler: ${order.join(', ')}.\n`);
  console.log(`✓ interaction/layers/${page}/index.html (${order.join(', ')})`);
}

if (check) {
  if (stale.length) { console.error(`✗ Güncel değil: ${stale.join(', ')}. Çalıştır: node interaction/build.mjs`); process.exit(1); }
  console.log('✓ Bütün code layer dosyaları spec\'lerle aynı.');
}
