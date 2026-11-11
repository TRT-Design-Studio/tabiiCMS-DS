// components/<isim>/spec.md dosyasını okur. Tablolar ve token'lar buradan code layer'a gider.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const cells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

// Başlığa göre tablolar: { "Sizes": [ { size: "XSmall", height: "28", ... } ] }
export function readSpec(root, name) {
  const md = readFileSync(join(root, 'components', name, 'spec.md'), 'utf8');
  const tables = {};
  let heading = '_';
  const lines = md.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const h = /^#{2,3}\s+(.+)/.exec(lines[i]);
    if (h) { heading = h[1].trim(); continue; }
    if (lines[i].startsWith('|') && lines[i + 1] && /^\|[\s:|-]+\|$/.test(lines[i + 1].trim())) {
      const head = cells(lines[i]).map((c) => c.toLowerCase());
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].startsWith('|')) {
        const c = cells(lines[i]);
        rows.push(Object.fromEntries(head.map((k, j) => [k, c[j] || ''])));
        i++;
      }
      i--;
      (tables[heading] ||= []).push(rows);
    }
  }
  const table = (h, n = 0) => {
    const t = tables[h] && tables[h][n];
    if (!t) throw new Error(`${name}/spec.md: "${h}" tablosu bulunamadı`);
    return t;
  };
  return { name, raw: md, tables, table };
}

// Hücredeki `token` adlarını döndürür.
export const tokensIn = (cell) => [...(cell || '').matchAll(/`([^`]+)`/g)].map((m) => m[1]);

// Token adı → CSS değeri.
export const v = {
  color: (t) => (t ? `var(--${t.replace(/\//g, '-')})` : 'transparent'),
  space: (t) => `var(--spacing-${t.replace(/^Spacing\//, '').replace(/[\u2024.]/g, '-')})`,
  radius: (t) => `var(--${t})`,
  shadow: (t) => `var(--${t.replace(/^Shadow\//, '')})`,
  text: (t) => `var(--${t.replace('/', '-')})`,
  first: (cell) => tokensIn(cell)[0],
  // "16 (`Spacing/4`)" → 16, "`Spacing/3` (12)" → 12, "120 ms" → 120
  num: (cell) => { const s = String(cell == null ? '' : cell).trim(); const lead = /^-?\d+(?:\.\d+)?/.exec(s); if (lead) return parseFloat(lead[0]); const par = /\((\d+(?:\.\d+)?)\)/.exec(s); if (par) return parseFloat(par[1]); const any = /\d+(?:\.\d+)?/.exec(s); return any ? parseFloat(any[0]) : NaN; },
  slug: (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
};
