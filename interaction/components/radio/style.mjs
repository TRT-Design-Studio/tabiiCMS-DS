// components/radio/spec.md → CSS. Sizes (Circle, Dot) ve States (Selected · State) tablolarından üretilir.
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r]));
  const ring = (r) => {
    const t = v.first(r.border);
    const w = /(\d+) px/.exec(r.border)?.[1] || '1';
    return t ? `inset 0 0 0 ${w}px ${v.color(t)}` : 'none';
  };
  let out = `.tds-radio { position: relative; display: inline-grid; place-items: center; flex: none; box-sizing: border-box; width: ${v.space(v.first(part.circle.size))}; height: ${v.space(v.first(part.circle.size))}; padding: 0; margin: 0; border: 0; border-radius: var(--${v.first(part.circle.radius)}); cursor: pointer; outline: none; transition: var(--tds-transition); }
.tds-radio::after { content: ""; width: ${v.space(v.first(part.dot.size))}; height: ${v.space(v.first(part.dot.size))}; border-radius: var(--${v.first(part.dot.radius)}); background: transparent; transform: scale(0); transition: transform var(--tds-motion-duration) var(--tds-motion-easing), background-color var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-radio[aria-checked="true"]::after { transform: scale(1); }
.tds-radio:disabled { cursor: not-allowed; }
`;
  for (const r of spec.table('States')) {
    const [selected, state] = r['selected · state'].split('·').map((x) => x.trim());
    const keys = selected === 'Any' ? ['false', 'true'] : [selected.toLowerCase()];
    const sel = (extra) => keys.map((k) => `.tds-radio[aria-checked="${k}"]${extra}`).join(', ');
    const s = v.slug(state);
    const target = s === 'default' ? sel('') : s === 'hover' ? sel(':hover:not(:disabled):not([data-state])') + ', ' + sel('[data-state="hover"]')
      : s === 'focused' ? sel(':focus-visible') + ', ' + sel('[data-state="focused"]') : sel('[data-state="disabled"]');
    if (/opacity/i.test(r.dot)) { out += `${target} { opacity: var(--${v.first(r.dot).replace('Opacity/', '')}); }
`; continue; }
    out += `${target} { background: ${v.color(v.first(r.fill))}; box-shadow: ${ring(r)}; }
`;
    if (v.first(r.dot)) out += `${target.split(', ').map((x) => x + '::after').join(', ')} { background: ${v.color(v.first(r.dot))}; }
`;
  }
  return out;
}
