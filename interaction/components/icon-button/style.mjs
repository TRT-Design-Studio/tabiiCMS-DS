// components/icon-button/spec.md → CSS. Renkleri Button'dan alır (spec: "same as Button"),
// bu yüzden button sınıfını kullanır; burada sadece boyut, şekil ve Active üretilir.
export default function css(spec, v) {
  let out = `.tds-button.tds-icon-button { padding: 0; }
`;
  for (const s of spec.table('Sizes')) {
    const k = v.slug(s.size);
    out += `.tds-icon-button[data-size="${k}"] { width: ${v.num(s.height)}px; height: ${v.num(s.height)}px; padding: ${v.space(v.first(s.padding))}; }
.tds-icon-button[data-size="${k}"] .tds-icon { font-size: ${v.num(s.icon)}px; }
`;
  }
  for (const s of spec.table('Shapes')) out += `.tds-icon-button[data-shape="${v.slug(s.shape)}"] { border-radius: ${v.radius(v.first(s.radius))}; }
`;
  for (const s of spec.table('States')) out += `.tds-icon-button[data-variant="${v.slug(s.variant)}"][data-state="${v.slug(s.state)}"] { background: ${v.color(v.first(s.fill))}; }
`;
  return out;
}
