// tokens/.parcalar/ içindeki parçaları birleştirip tokens/figma-ham.json dosyasını yazar, sonra parçaları siler.
// Kullanım: node scripts/figma/parcalari-birlestir.mjs   Tarif: workflows/figma-senkron.md
import { readFileSync, writeFileSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from '../lib.mjs';

const DIR = join(ROOT, 'tokens', '.parcalar');
const OUT = join(ROOT, 'tokens', 'figma-ham.json');

if (!existsSync(DIR)) {
  console.log('✗ tokens/.parcalar/ klasörü yok. Önce Figma\'dan parçaları oku (workflows/figma-senkron.md).');
  process.exit(1);
}

const parts = readdirSync(DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(DIR, f), 'utf8')))
  .sort((a, b) => a.parca - b.parca);

const total = parts[0]?.toplamParca;
const missing = [];
for (let i = 0; i < total; i++) if (!parts.some((p) => p.parca === i)) missing.push(i);
if (!parts.length || missing.length || parts.some((p) => p.toplamParca !== total)) {
  console.log(`✗ Parçalar eksik veya uyumsuz. Beklenen: ${total}, eksik: ${missing.join(', ') || '-'}`);
  process.exit(1);
}

const raw = { collections: [], textStyles: [], effectStyles: [] };
for (const { kind, ...item } of parts.flatMap((p) => p.items)) {
  if (kind === 'collection') raw.collections.push({ ...item, variables: [] });
  else if (kind === 'variable') {
    const { collection, ...v } = item;
    const c = raw.collections.find((x) => x.name === collection);
    if (!c) throw new Error(`"${v.name}" değişkeninin koleksiyonu (${collection}) bulunamadı.`);
    c.variables.push(v);
  } else if (kind === 'textStyle') raw.textStyles.push(item);
  else if (kind === 'effectStyle') raw.effectStyles.push(item);
  else throw new Error(`Bilinmeyen kayıt türü: ${kind}`);
}

writeFileSync(OUT, JSON.stringify(raw, null, 2) + '\n');
rmSync(DIR, { recursive: true });
const vars = raw.collections.map((c) => `${c.name}: ${c.variables.length}`).join(', ');
console.log(`✓ tokens/figma-ham.json yazıldı. Değişkenler (${vars}), yazı stilleri: ${raw.textStyles.length}, gölge stilleri: ${raw.effectStyles.length}.`);
