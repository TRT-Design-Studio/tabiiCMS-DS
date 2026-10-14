// Projeyi denetler. Hata varsa 1 koduyla çıkar (GitHub'da kırmızı çarpı).
// Kullanım: node scripts/kontrol.mjs
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { walk, frontmatter, rel } from './lib.mjs';
import { buildIndex, INDEX_PATH } from './index-olustur.mjs';

const errors = [];
const fail = (where, message) => errors.push(`✗ ${where}: ${message}`);
const { files, dirs } = walk();
const mdFiles = files.filter((f) => f.endsWith('.md'));

// 1. Her klasörde README.md (komponent klasörlerinde spec.md) olmalı.
for (const dir of dirs) {
  if (!existsSync(join(dir, 'README.md')) && !existsSync(join(dir, 'spec.md'))) {
    fail(`${rel(dir)}/`, 'Bu klasörde README.md yok. Klasörün ne işe yaradığını anlatan bir README.md ekle (bkz. rules/core/readme-yazim-kurali.md).');
  }
}

// 2. Kural dosyalarında frontmatter ve zorunlu alanlar olmalı.
const REQUIRED = ['id', 'title', 'owner', 'status', 'version'];
const RULE_STATUSES = ['draft', 'active', 'deprecated'];
const seenIds = new Map();
for (const file of mdFiles) {
  const path = rel(file);
  if (!path.startsWith('rules/') || path.endsWith('/README.md')) continue;
  const fm = frontmatter(readFileSync(file, 'utf8'));
  if (!fm) {
    fail(path, 'En üstte bilgi bloğu (--- ile başlayıp biten frontmatter) yok. Bkz. rules/core/kural-yazim-formati.md');
    continue;
  }
  for (const key of REQUIRED) if (!fm[key]) fail(path, `frontmatter'da "${key}" alanı eksik.`);
  if (fm.status && !RULE_STATUSES.includes(fm.status)) {
    fail(path, `status "${fm.status}" geçersiz. Şunlardan biri olmalı: ${RULE_STATUSES.join(', ')}.`);
  }
  const layer = path.split('/')[1];
  if (fm.id && ['core', 'team'].includes(layer) && !fm.id.startsWith(`${layer}.`)) {
    fail(path, `id "${layer}." ile başlamalı (şu an: "${fm.id}").`);
  }
  if (fm.id) {
    if (seenIds.has(fm.id)) fail(path, `id "${fm.id}" zaten ${seenIds.get(fm.id)} dosyasında kullanılıyor.`);
    else seenIds.set(fm.id, path);
  }
}

// 3. Öneri dosyalarında geçerli bir status olmalı.
const PROPOSAL_STATUSES = ['open', 'accepted', 'rejected'];
for (const file of mdFiles) {
  const path = rel(file);
  if (!path.startsWith('proposals/') || path.endsWith('/README.md') || path.endsWith('/_sablon.md')) continue;
  const fm = frontmatter(readFileSync(file, 'utf8'));
  if (!fm || !PROPOSAL_STATUSES.includes(fm.status)) {
    fail(path, `frontmatter'da status şunlardan biri olmalı: ${PROPOSAL_STATUSES.join(', ')}. Şablon: proposals/_sablon.md`);
  }
}

// 4. Markdown içindeki göreli linkler var olan dosyaları göstermeli.
for (const file of mdFiles) {
  const text = readFileSync(file, 'utf8')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]*`/g, '');
  for (const [, target] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const path = decodeURI(target.split('#')[0]);
    if (path && !existsSync(resolve(dirname(file), path))) fail(rel(file), `kırık link: ${target}`);
  }
}

// 5. wiki/index.md güncel olmalı.
const current = existsSync(INDEX_PATH) ? readFileSync(INDEX_PATH, 'utf8') : '';
if (current !== buildIndex()) {
  fail('wiki/index.md', 'güncel değil. Düzeltmek için şunu çalıştır: node scripts/index-olustur.mjs');
}

if (errors.length) {
  console.log(`\n${errors.length} sorun bulundu:\n`);
  for (const e of errors) console.log(e);
  console.log('\nNe yapmalıyım? Yapay zekaya "kontrol hatalarını düzelt" yaz. Ayrıntı: rehber/github-actions-nedir.md\n');
  process.exit(1);
}
console.log('✓ Her şey yolunda, sorun bulunamadı.');
