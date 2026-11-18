// components/step-icon/spec.md → CSS. Sizes ve States (Status → Color) tablolarından üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  let out = `.tds-step-icon { display: inline-flex; flex: none; width: ${v.num(s.height)}px; height: ${v.num(s.height)}px; transition: var(--tds-transition); }
`;
  for (const r of spec.table('States')) out += `.tds-step-icon[data-status="${v.slug(r.status)}"] { color: ${v.color(v.first(r.color))}; }
`;
  return out;
}
