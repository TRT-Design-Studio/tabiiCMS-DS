// wiki/index.md dosyasını frontmatter ve başlıklardan üretir.
// Kullanım: node scripts/index-olustur.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, walk, frontmatter, firstHeading, rel, byPath } from './lib.mjs';

export const INDEX_PATH = join(ROOT, 'wiki', 'index.md');

const isReadme = (p) => p.endsWith('/README.md') || p === 'README.md';

export function buildIndex() {
  const docs = walk()
    .files.filter((f) => f.endsWith('.md'))
    .map((f) => {
      const text = readFileSync(f, 'utf8');
      return { path: rel(f), fm: frontmatter(text) || {}, heading: firstHeading(text) };
    })
    .sort(byPath);

  const link = (d) => `[${d.fm.title || d.heading || d.path}](../${d.path})`;
  const rules = (layer) => docs.filter((d) => d.path.startsWith(`rules/${layer}/`) && !isReadme(d.path));
  const workflows = docs.filter((d) => d.path.startsWith('workflows/') && !isReadme(d.path));
  const components = docs.filter((d) => /^components\/[^/]+\/spec\.md$/.test(d.path));
  const proposals = docs.filter(
    (d) => d.path.startsWith('proposals/') && !isReadme(d.path) && !d.path.endsWith('/_sablon.md'),
  );

  const ruleTable = (list) =>
    list.length
      ? ['| Kural | id | Durum | Sürüm |', '|---|---|---|---|', ...list.map((d) => `| ${link(d)} | \`${d.fm.id || '-'}\` | ${d.fm.status || '-'} | ${d.fm.version || '-'} |`)]
      : ['_Henüz yok._'];
  const bullets = (list, extra = () => '') =>
    list.length ? list.map((d) => `- ${link(d)}${extra(d)}`) : ['_Henüz yok._'];

  return [
    '# İçindekiler',
    '',
    '> ⚙️ Bu dosya `node scripts/index-olustur.mjs` ile **otomatik üretilir.** Elle düzenleme. Çakışma çıkarsa scripti yeniden çalıştır.',
    '',
    '## Ana kurallar (core)',
    '',
    ...ruleTable(rules('core')),
    '',
    '## Ekip kuralları (team)',
    '',
    ...ruleTable(rules('team')),
    '',
    '## İş akışları',
    '',
    ...bullets(workflows),
    '',
    '## Komponentler',
    '',
    ...bullets(components, (d) => (d.fm.status ? ` · ${d.fm.status}` : '')),
    '',
    '## Öneriler',
    '',
    ...bullets(proposals, (d) => ` · ${d.fm.status || '-'}`),
    '',
    '## Oturum kayıtları',
    '',
    'Kayıtlar burada listelenmez (her oturumda değişir ve çakışma yaratır). En yenileri için `wiki/log/` klasörüne bak. Dosyalar tarihe göre sıralıdır.',
    '',
  ].join('\n');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeFileSync(INDEX_PATH, buildIndex());
  console.log('✓ wiki/index.md güncellendi.');
}
