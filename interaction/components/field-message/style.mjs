// components/field-message/spec.md → CSS. Sizes ve States (Tone) tablolarından üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  let out = `.tds-field-message { display: flex; align-items: flex-start; justify-content: space-between; box-sizing: border-box; width: ${v.num(s.width)}px; max-width: 100%; min-height: ${v.num(s.height)}px; gap: ${v.space(v.first(s['message–counter gap']))}; font: ${v.text(v.first(s.text))}; transition: var(--tds-transition); }
.tds-field-message[data-fill] { width: 100%; }
.tds-field-message-body { display: flex; align-items: center; gap: ${v.space(v.first(s['icon–text gap']))}; min-width: 0; }
.tds-field-message .tds-icon { font-size: ${v.num(s.icon)}px; }
.tds-field-message-counter { flex: none; margin-left: auto; font-variant-numeric: tabular-nums; }
`;
  for (const r of spec.table('States')) {
    const k = v.slug(r.tone);
    out += `.tds-field-message[data-tone="${k}"] { color: ${v.color(v.first(r['text and icon']))}; }
.tds-field-message[data-tone="${k}"] .tds-field-message-counter { color: ${v.color(v.first(r.counter))}; }
`;
  }
  return out;
}
