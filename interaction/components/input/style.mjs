// components/input/spec.md → CSS. Sizes, Parts ve States tablolarından üretilir.
// Live: odaklanınca Focused görünümü (:focus-within), boşken ikonlar Empty rengini alır (:placeholder-shown).
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Parts').map((r) => [r.part.split(' (')[0].toLowerCase(), r]));
  const states = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.state), r]));
  const filled = states.filled;
  let out = `.tds-input { position: relative; display: flex; align-items: center; box-sizing: border-box; width: 320px; max-width: 100%; margin: 0; cursor: text;
  background: ${v.color(v.first(states.default.background))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(states.default.border))}; transition: var(--tds-transition); }
.tds-input-field { flex: 1; min-width: 0; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; outline: none; background: transparent; font: inherit; color: ${v.color(v.first(filled['value text']))}; text-overflow: ellipsis; }
.tds-input-field::placeholder { color: ${v.color(v.first(states.default['value text']))}; opacity: 1; }
.tds-input[data-align="center"] .tds-input-field { text-align: center; }
.tds-input .tds-icon { flex: none; transition: color var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-input-leading, .tds-input-trailing { display: flex; align-items: center; flex: none; align-self: stretch; }
.tds-input-clear { display: inline-flex; flex: none; padding: 0; border: 0; margin: 0; background: transparent; color: inherit; cursor: pointer; border-radius: var(--rounded-sm); }
.tds-input-clear:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 1px; }
.tds-input-counter { flex: none; font: ${v.text(v.first(part.counter.size))}; color: ${v.color(v.first(part.counter.filled))}; font-variant-numeric: tabular-nums; }
.tds-input[data-state="disabled"] { cursor: not-allowed; }
.tds-input[data-state="disabled"] .tds-input-field { cursor: not-allowed; }
`;
  for (const s of spec.table('Sizes')) {
    const k = v.slug(s.size);
    out += `.tds-input[data-size="${k}"] { height: ${v.num(s.height)}px; padding: 0 ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; }
`;
  }
  // İkonlar: Empty (placeholder görünüyor) ve Filled renkleri.
  for (const [name, cls] of [['leading icon', 'leading-icon'], ['trailing icon', 'trailing-icon']]) {
    const r = part[name];
    out += `.tds-input .tds-icon[data-part="${cls}"] { font-size: ${v.num(r.size)}px; color: ${v.color(v.first(r.filled))}; }
.tds-input:has(.tds-input-field:placeholder-shown) .tds-icon[data-part="${cls}"] { color: ${v.color(v.first(r.empty))}; }
`;
  }
  out += `.tds-input .tds-icon[data-part="status-icon"] { font-size: ${v.num(part['status icon'].size)}px; color: ${v.color(v.first(part['status icon'].filled))}; }
`;
  // State'ler. Live'da (data-state yok) odak Focused görünümünü verir.
  for (const [k, r] of Object.entries(states)) {
    const sel = k === 'focused' ? `.tds-input[data-state="focused"], .tds-input:not([data-state]):focus-within` : `.tds-input[data-state="${k}"]`;
    out += `${sel} { background: ${v.color(v.first(r.background))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(r.border))}; }
`;
    if (/opacity/i.test(r['value text'])) out += `.tds-input[data-state="${k}"] > * { opacity: var(--opacity-${v.num(r['value text'].split(',')[1])}); }
`;
  }
  return out;
}
