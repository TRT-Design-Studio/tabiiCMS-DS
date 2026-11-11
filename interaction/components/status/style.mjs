// components/status/spec.md → CSS. Nokta badge-dot komponentinden gelir.
export default function css(spec, v) {
  const hover = v.first(spec.table('Tones', 1)[0].overlay);
  let out = `.tds-status { display: inline-flex; align-items: center; box-sizing: border-box; border: 0; margin: 0; border-radius: var(--rounded-full); white-space: nowrap; transition: var(--tds-transition); }
button.tds-status { cursor: pointer; }
.tds-status:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 0; }
`;
  for (const s of spec.table('Sizes')) {
    const k = v.slug(s.size);
    out += `.tds-status[data-size="${k}"] { height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; font: ${v.text(v.first(s.text))}; }
.tds-status[data-size="${k}"] .tds-icon { font-size: ${v.num(s.icon)}px; }
`;
  }
  for (const t of spec.table('Tones', 0)) {
    const k = v.slug(t.tone);
    const bg = v.color(v.first(t.background));
    const ring = `inset 0 0 0 1px ${v.color(v.first(t.border))}`;
    // Hover katmanı (overlay) ikinci bir inset gölge: arka plan rengiyle birlikte yumuşakça açılır.
    out += `.tds-status[data-tone="${k}"] { background: ${bg}; color: ${v.color(v.first(t.label))}; box-shadow: ${ring}, inset 0 0 0 999px transparent; }
button.tds-status[data-tone="${k}"]:hover:not([data-state]), .tds-status[data-tone="${k}"][data-state="hover"] { box-shadow: ${ring}, inset 0 0 0 999px ${v.color(hover)}; }
`;
  }
  return out;
}
