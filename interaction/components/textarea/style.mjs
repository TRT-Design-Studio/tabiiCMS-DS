// components/textarea/spec.md → CSS. Sizes ve States tablolarından üretilir.
// Live: odakta Focused (:focus-within); sayaç sınırı aşınca Error rengini alır.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  const [padH, padV] = [...s.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const states = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.state), r]));
  const counterText = /Counter `([^`]+)`/.exec(spec.raw)[1];
  const look = (r) => `background: ${v.color(v.first(r.background))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(r.border))};`;
  let out = `.tds-textarea { display: flex; flex-direction: column; box-sizing: border-box; width: 320px; max-width: 100%; min-height: ${v.space(v.first(s.height))}; padding: ${v.space(padV)} ${v.space(padH)}; gap: ${v.space(v.first(s.gap))}; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; cursor: text; ${look(states.default)} transition: var(--tds-transition); }
.tds-textarea-field { flex: 1; display: block; width: 100%; min-height: 0; padding: 0; margin: 0; border: 0; outline: none; resize: none; background: transparent; font: inherit; color: ${v.color(v.first(states.filled['value text']))}; }
.tds-textarea-field::placeholder { color: ${v.color(v.first(states.default['value text']))}; opacity: 1; }
.tds-textarea-footer { display: flex; justify-content: flex-end; }
.tds-textarea-counter { font: ${v.text(counterText)}; color: ${v.color(v.first(states.default.counter))}; font-variant-numeric: tabular-nums; transition: color var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-textarea[data-over] .tds-textarea-counter { color: ${v.color(v.first(states.error.counter))}; }
.tds-textarea:not([data-state])[data-over] { box-shadow: inset 0 0 0 1px ${v.color(v.first(states.error.border))}; }
.tds-textarea[data-state="disabled"], .tds-textarea[data-state="disabled"] .tds-textarea-field { cursor: not-allowed; }
`;
  for (const [k, r] of Object.entries(states)) {
    const sel = k === 'focused' ? `.tds-textarea[data-state="focused"], .tds-textarea:not([data-state]):not([data-over]):focus-within` : `.tds-textarea[data-state="${k}"]`;
    out += `${sel} { ${look(r)} }
.tds-textarea[data-state="${k}"] .tds-textarea-counter { color: ${v.color(v.first(r.counter))}; }
`;
    if (/opacity/i.test(r['value text'])) out += `.tds-textarea[data-state="${k}"] > * { opacity: var(--opacity-${v.num(r['value text'].split(',')[1])}); }
`;
  }
  return out;
}
