// Code layer'da kullanılan ikonları toplar ve SVG olarak gömer.
// Kaynak: Figma'daki Icons sayfasıyla aynı paket, Phosphor (@phosphor-icons/core). Geometri Figma ile aynı:
// Figma'da 32'lik kutu, paketde 256'lık kutu (Plus: 4→28 / 32→224, ikisi de %75).
// İndirilen SVG'ler interaction/shared/phosphor/ altında saklanır; sonraki build'ler internetsiz çalışır.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

export const PHOSPHOR_CORE = '2.1.1';
const kebab = (n) => n.replace(/(?<!^)([A-Z])/g, '-$1').toLowerCase();

// component.js ve page.js içinde geçen ikon adlarını bulur: TDS.icon('Plus'), Icon: 'Trash', icon: 'X'
export function collectIconNames(here, files) {
  const names = new Map(); // "Regular:Plus"
  for (const f of files) {
    const src = readFileSync(f, 'utf8');
    for (const m of src.matchAll(/TDS\.icon\(\s*'([A-Za-z0-9]+)'(?:\s*,\s*[^,)]*\s*,\s*'(Regular|Fill)')?/g)) names.set(`${m[2] || 'Regular'}:${m[1]}`, 1);
    for (const m of src.matchAll(/\b(?:Icon|icon)\s*:\s*'([A-Z][A-Za-z0-9]+)'/g)) names.set(`Regular:${m[1]}`, 1);
    // page.js: sidebar'daki komponent ikonu seçiliyken Fill olur.
    for (const m of src.matchAll(/\bicon:\s*'([A-Z][A-Za-z0-9]+)'/g)) names.set(`Fill:${m[1]}`, 1);
    for (const m of src.matchAll(/options:\s*\[([^\]]+)\][^}]*iconOptions/g)) for (const o of m[1].matchAll(/'([A-Z][A-Za-z0-9]+)'/g)) names.set(`Regular:${o[1]}`, 1);
  }
  const extra = join(here, 'shared', 'icon-list.json');
  if (existsSync(extra)) for (const n of JSON.parse(readFileSync(extra, 'utf8')).icons) names.set(n.includes(':') ? n : `Regular:${n}`, 1);
  return [...names.keys()].sort();
}

export async function buildIconsJs(here, files) {
  const out = { Regular: {}, Fill: {} };
  const missing = [];
  for (const key of collectIconNames(here, files)) {
    const [weight, name] = key.split(':');
    const file = weight === 'Fill' ? `${kebab(name)}-fill.svg` : `${kebab(name)}.svg`;
    const dir = join(here, 'shared', 'phosphor', weight.toLowerCase());
    const path = join(dir, file);
    if (!existsSync(path)) {
      const url = `https://unpkg.com/@phosphor-icons/core@${PHOSPHOR_CORE}/assets/${weight.toLowerCase()}/${file}`;
      const res = await fetch(url).catch(() => null);
      if (!res || !res.ok) { missing.push(name); continue; }
      mkdirSync(dir, { recursive: true });
      writeFileSync(path, await res.text());
    }
    const svg = readFileSync(path, 'utf8');
    out[weight][name] = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  }
  if (missing.length) throw new Error(`Phosphor'da bulunamayan ikon(lar): ${missing.join(', ')}. Adı Figma'daki Icons sayfasıyla karşılaştır.`);
  return `window.TDS_PHOSPHOR = ${JSON.stringify(out)};\n`;
}

export const cachedCount = (here) => ['regular', 'fill'].reduce((n, w) => {
  const d = join(here, 'shared', 'phosphor', w);
  return n + (existsSync(d) ? readdirSync(d).length : 0);
}, 0);
