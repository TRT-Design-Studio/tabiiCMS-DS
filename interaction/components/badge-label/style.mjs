// components/badge-label/spec.md → CSS.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  let out = `.tds-badge-label { display: inline-flex; align-items: center; box-sizing: border-box; height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; }
`;
  for (const t of spec.table('Tones')) out += `.tds-badge-label[data-tone="${v.slug(t.tone)}"] { background: ${v.color(v.first(t.background))}; color: ${v.color(v.first(t.text))}; }
`;
  return out;
}
