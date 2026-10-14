// Ortak yardımcılar: dosya tarama ve frontmatter okuma. Dış bağımlılık yok.
import { readdirSync, statSync } from 'node:fs';
import { join, relative, dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Gizli klasörler (.git, .github, .claude) ve üretilen çıktılar taranmaz.
const SKIP_DIRS = new Set(['node_modules', 'dist', 'storybook-static', 'out', 'build']);

export function walk(dir = ROOT) {
  const files = [];
  const dirs = [];
  for (const name of readdirSync(dir).sort()) {
    if (name.startsWith('.') || SKIP_DIRS.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      dirs.push(path);
      const sub = walk(path);
      files.push(...sub.files);
      dirs.push(...sub.dirs);
    } else {
      files.push(path);
    }
  }
  return { files, dirs };
}

// Basit "anahtar: değer" frontmatter okuyucu. Frontmatter yoksa null döner.
export function frontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*?)\s*(#.*)?$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return data;
}

export function firstHeading(text) {
  const match = text.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

export const rel = (path) => relative(ROOT, path).split(sep).join('/');

export const byPath = (a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
