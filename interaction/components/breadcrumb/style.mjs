// components/breadcrumb/spec.md → CSS. Sizes tablosundan üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  return `.tds-breadcrumb ol { display: flex; align-items: center; gap: ${v.space(v.first(s.gap))}; min-height: ${v.num(s.height)}px; margin: 0; padding: 0; font: ${v.text(v.first(s.text))}; white-space: nowrap; }
.tds-breadcrumb-back { display: inline-flex; padding-right: ${v.space(v.first(s.gap))}; list-style: none; }
`;
}
