// components/tag-input/spec.md → CSS. Sizes ve States tablolarından üretilir. Tag'ler tag komponentidir.
// Alan 3 satıra kadar büyür, sonra kayar (spec). Live: odakta Focused, tekrar eden değerde Error.
export default function css(spec, v) {
  const states = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.state), r]));
  const look = (r) => `background: ${v.color(v.first(r.fill))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(r.border))};`;
  const width = v.num(/Width is (\d+) by default/.exec(spec.raw)[1]);
  const typing = v.num(/at least (\d+) px wide/.exec(spec.raw)[1]);
  let out = `.tds-tag-input { display: flex; flex-wrap: wrap; align-items: center; align-content: flex-start; box-sizing: border-box; width: ${width}px; max-width: 100%; overflow-y: auto; cursor: text; ${look(states.default)} transition: var(--tds-transition); }
.tds-tag-input-field { flex: 1 0 ${typing}px; min-width: ${typing}px; padding: 0; margin: 0; border: 0; outline: none; background: transparent; font: inherit; color: ${v.color(v.first(states.focused.text))}; }
.tds-tag-input-field::placeholder { color: ${v.color(v.first(states.default.text))}; opacity: 1; }
.tds-tag-input[data-state="disabled"], .tds-tag-input[data-state="disabled"] .tds-tag-input-field { cursor: not-allowed; }
.tds-tag-input[data-state="disabled"] .tds-tag-input-field::placeholder { color: ${v.color(v.first(states.disabled.text))}; }
.tds-tag-input:not([data-state])[data-invalid] { ${look(states.error)} }
`;
  for (const s of spec.table('Sizes')) {
    const k = v.slug(s.size);
    const pads = [...s.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    const [pv, ph] = pads.length > 1 ? pads : [pads[0], pads[0]];
    const gap = v.space(v.first(s.gap));
    const h = v.num(s.height);
    // 3 satır: satır yüksekliği = yükseklik − 2 × dikey boşluk (Tag Small, 20).
    out += `.tds-tag-input[data-size="${k}"] { min-height: ${h}px; max-height: calc(3 * (${h}px - 2 * ${v.space(pv)}) + 2 * ${gap} + 2 * ${v.space(pv)}); padding: ${v.space(pv)} ${v.space(ph)}; gap: ${gap}; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; }
.tds-tag-input[data-size="${k}"] .tds-tag-input-field { height: calc(${h}px - 2 * ${v.space(pv)}); }
`;
  }
  for (const [k, r] of Object.entries(states)) {
    const sel = k === 'focused' ? `.tds-tag-input[data-state="focused"], .tds-tag-input:not([data-state]):not([data-invalid]):focus-within` : `.tds-tag-input[data-state="${k}"]`;
    out += `${sel} { ${look(r)} }
`;
  }
  return out;
}
