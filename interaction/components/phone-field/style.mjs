// components/phone-field/spec.md → CSS. Input'un Leading slot'una ülke kodu kutusu konur (Sizes → Leading box).
export default function css(spec, v) {
  let out = '';
  for (const s of spec.table('Sizes')) {
    const k = v.slug(s.size);
    out += `.tds-phone-field[data-size="${k}"] > .tds-input { width: 100%; padding-left: 0; padding-right: ${v.space(v.first(s['value padding r']))}; border-radius: ${v.radius(v.first(s.radius))}; }
.tds-phone-field[data-size="${k}"] .tds-input-leading { border-radius: calc(${v.radius(v.first(s.radius))} - var(--border-width-default)) 0 0 calc(${v.radius(v.first(s.radius))} - var(--border-width-default)); }
`;
  }
  const box = spec.table('Sizes')[0]['leading box'];
  const [pad, bg, line] = [...box.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  out += `.tds-phone-field { display: flex; width: 320px; max-width: 100%; }
.tds-phone-field .tds-input-leading { padding: 0 ${v.space(pad)}; background: ${v.color(bg)}; box-shadow: inset calc(-1 * var(--border-width-default)) 0 0 ${v.color(line)};
  /* Input çerçevesi (inset gölge) kutunun altında kalmasın diye kutu çerçevenin içinde durur. */
  margin: var(--border-width-default) 0 var(--border-width-default) var(--border-width-default); }
.tds-phone-field .tds-input-leading .tds-flag { display: block; }
`;
  return out;
}
