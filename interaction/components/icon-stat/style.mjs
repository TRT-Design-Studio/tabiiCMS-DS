// components/icon-stat/spec.md → CSS. Sizes ve States (Part → Color) tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const color = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.part), v.color(v.first(r.color))]));
  return `.tds-icon-stat { display: inline-flex; align-items: center; gap: ${v.space(v.first(size.container.gap))}; font: ${v.text(v.first(size.container.text))}; color: ${color.value}; white-space: nowrap; }
.tds-icon-stat[data-layout="vertical"] { flex-direction: column; }
.tds-icon-stat .tds-icon { font-size: ${v.num(size.icon.size)}px; color: ${color.icon}; }
`;
}
