// components/trend/spec.md → CSS. Sizes (Part) ve States (Direction) tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  let out = `.tds-trend { display: inline-flex; align-items: center; height: ${v.num(size.container.size)}px; gap: ${v.space(v.first(size.container.gap))}; white-space: nowrap; }
.tds-trend .tds-icon { font-size: ${v.num(size.icon.size)}px; }
.tds-trend-value { font: ${v.text(v.first(size.value.text))}; }
.tds-trend-context { font: ${v.text(v.first(size.context.text))}; }
`;
  for (const r of spec.table('States')) {
    const k = v.slug(r.direction);
    out += `.tds-trend[data-direction="${k}"] { color: ${v.color(v.first(r['icon · value']))}; }
.tds-trend[data-direction="${k}"] .tds-trend-context { color: ${v.color(v.first(r.context))}; }
`;
  }
  return out;
}
