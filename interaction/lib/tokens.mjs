// tokens/ klasöründeki DTCG JSON dosyalarından CSS değişkenleri üretir.
// Değerler elle yazılmaz: Figma → `figma senkron` → tokens/ → bu dosya → code layer.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const read = (root, f) => JSON.parse(readFileSync(join(root, 'tokens', f), 'utf8'));

// "{color.blue.200}" gibi referansları primitives içinde çözer.
function lookup(tree, ref) {
  return ref.replace(/[{}]/g, '').split('.').reduce((o, k) => (o ? o[k] : undefined), tree);
}

function colorToCss(value, prim) {
  if (typeof value === 'string' && value.startsWith('{')) return colorToCss(lookup(prim, value).$value, prim);
  if (value && value.hex) {
    if (value.alpha !== undefined && value.alpha < 1) {
      const [r, g, b] = value.components.map((c) => Math.round(c * 255));
      return `rgba(${r}, ${g}, ${b}, ${value.alpha})`;
    }
    return value.hex;
  }
  throw new Error('Çözülemeyen renk: ' + JSON.stringify(value));
}

// Figma adı → CSS değişken adı. "bg/interactive/hover" → "--bg-interactive-hover"
export const colorVar = (name) => '--' + name.replace(/\//g, '-');

function walkColors(node, prim, out) {
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$')) continue;
    if (v && v.$type === 'color') out.push([colorVar(v.$extensions['com.figma'].name), colorToCss(v.$value, prim)]);
    else if (v && typeof v === 'object') walkColors(v, prim, out);
  }
  return out;
}

export function buildTokensCss(root) {
  const prim = read(root, 'primitives.json');
  const light = walkColors(read(root, 'semantic.light.json'), prim, []);
  const dark = walkColors(read(root, 'semantic.dark.json'), prim, []);
  const typo = read(root, 'typography.json');
  const px = (d) => `${d.$value.value}px`;

  const lines = [];
  for (const [k, v] of Object.entries(prim.spacing)) if (!k.startsWith('$')) lines.push(`--spacing-${k.replace('_', '-')}: ${px(v)};`);
  for (const [k, v] of Object.entries(prim.radius)) if (!k.startsWith('$')) lines.push(`--rounded-${k}: ${px(v)};`);
  for (const [k, v] of Object.entries(prim['border-width'])) if (!k.startsWith('$')) lines.push(`--border-width-${k}: ${px(v)};`);
  for (const [k, v] of Object.entries(prim.opacity)) if (!k.startsWith('$')) lines.push(`--opacity-${k}: ${v.$value};`);
  const family = prim.font.family.sans.$value;
  lines.push(`--font-family: "${family}", ui-sans-serif, system-ui, sans-serif;`);
  // Yazı stilleri: "text-sm/medium" → --text-sm-medium: 500 14px/20px family
  for (const [size, weights] of Object.entries(typo)) {
    if (size.startsWith('$')) continue;
    for (const [w, st] of Object.entries(weights)) {
      if (w.startsWith('$')) continue;
      const fs = lookup(prim, st.$value.fontSize).$value.value;
      const fw = lookup(prim, st.$value.fontWeight).$value;
      const lh = Math.round(fs * st.$value.lineHeight);
      lines.push(`--${size}-${w}: ${fw} ${fs}px/${lh}px var(--font-family);`);
    }
  }
  // Gölgeler: "Shadow/shadow-lg" → --shadow-lg
  const shadows = read(root, 'shadows.json').shadow || {};
  for (const [k, s] of Object.entries(shadows)) {
    if (k.startsWith('$')) continue;
    const parts = s.$value.map((e) => `${e.inset ? 'inset ' : ''}${e.offsetX.value}px ${e.offsetY.value}px ${e.blur.value}px ${e.spread.value}px ${colorToCss(e.color, prim)}`);
    lines.push(`--shadow-${k}: ${parts.join(', ')};`);
  }
  const block = (pairs) => pairs.map(([k, v]) => `  ${k}: ${v};`).join('\n');
  return `/* tokens/ klasöründen üretildi. Elle düzenleme. */\n:root {\n${lines.map((l) => '  ' + l).join('\n')}\n${block(light)}\n}\n[data-theme="dark"] {\n${block(dark)}\n}\n`;
}
