// components/checkbox/spec.md → CSS. Sizes (Box, Mark) ve States (Checked · State) tablolarından üretilir.
// Live: gerçek hover ve klavye odağı; tıklayınca işaret değişir.
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r]));
  const ring = (r) => {
    const t = [...r.border.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    if (!t.length) return 'none';
    const w = /(\d+) px/.exec(r.border)?.[1] || '1';
    return `inset 0 0 0 ${w}px ${v.color(t[0])}`;
  };
  let out = `.tds-checkbox { display: inline-grid; place-items: center; flex: none; box-sizing: border-box; width: ${v.space(v.first(part.box.size))}; height: ${v.space(v.first(part.box.size))}; padding: 0; margin: 0; border: 0; border-radius: var(--${v.first(part.box.radius)}); cursor: pointer; outline: none; transition: var(--tds-transition); }
.tds-checkbox .tds-icon { font-size: ${v.num(part.mark.size)}px; }
.tds-checkbox:disabled { cursor: not-allowed; }
`;
  for (const r of spec.table('States')) {
    const [checked, state] = r['checked · state'].split('·').map((x) => x.trim());
    const keys = checked === 'Any' ? ['false', 'true', 'mixed'] : checked.split('/').map((x) => ({ False: 'false', True: 'true', Indeterminate: 'mixed' }[x.trim()]));
    const sel = (extra) => keys.map((k) => `.tds-checkbox[aria-checked="${k}"]${extra}`).join(', ');
    const s = v.slug(state);
    const target = s === 'default' ? sel('') : s === 'hover' ? sel(':hover:not(:disabled):not([data-state])') + ', ' + sel('[data-state="hover"]')
      : s === 'focused' ? sel(':focus-visible') + ', ' + sel('[data-state="focused"]') : sel('[data-state="disabled"]');
    if (/opacity/i.test(r.mark)) { out += `${target} { opacity: var(--${v.first(r.mark).replace('Opacity/', '')}); }
`; continue; }
    out += `${target} { background: ${v.color(v.first(r.fill))}; box-shadow: ${ring(r)};${v.first(r.mark) ? ` color: ${v.color(v.first(r.mark))};` : ''} }
`;
  }
  return out;
}
