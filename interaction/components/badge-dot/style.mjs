// components/badge-dot/spec.md → CSS.
export default function css(spec, v) {
  let out = `.tds-badge-dot { display: inline-block; flex: none; border-radius: var(--rounded-full); }
`;
  for (const s of spec.table('Sizes')) out += `.tds-badge-dot[data-size="${v.slug(s.size)}"] { width: ${v.num(s.diameter)}px; height: ${v.num(s.diameter)}px; }
`;
  for (const t of spec.table('Tones')) out += `.tds-badge-dot[data-tone="${v.slug(t.tone)}"] { background: ${v.color(v.first(t.fill))}; }
`;
  return out;
}
