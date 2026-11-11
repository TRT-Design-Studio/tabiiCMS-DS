// components/tag/spec.md → CSS. "Type · State" satırlarından üretilir.
export default function css(spec, v) {
  let out = `.tds-tag { display: inline-flex; align-items: center; box-sizing: border-box; border: 0; margin: 0; border-radius: var(--rounded-md); white-space: nowrap; background: transparent; }
.tds-tag-remove { display: inline-flex; padding: 0; border: 0; background: transparent; color: var(--text-secondary); cursor: pointer; border-radius: var(--rounded-xs); }
.tds-tag-remove:focus-visible, a.tds-tag:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 0; }
.tds-tag[data-state="disabled"] .tds-tag-remove { color: var(--text-disabled); cursor: not-allowed; }
a.tds-tag { color: inherit; text-decoration: none; cursor: pointer; }
.tds-tag[data-type="link"] { padding-left: 0 !important; padding-right: 0 !important; }
a.tds-tag[data-type="link"]:not([data-state]):hover span, .tds-tag[data-type="link"][data-state="hover"] span { text-decoration: underline; text-underline-offset: 3px; }
`;
  for (const s of spec.table('Sizes')) {
    const k = v.slug(s.size);
    out += `.tds-tag[data-size="${k}"] { height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; font: ${v.text(v.first(s.text))}; }
.tds-tag[data-size="${k}"] .tds-icon { font-size: ${v.num(s.icon)}px; }
`;
  }
  for (const r of spec.table('Colors')) {
    const [type, state] = r['type · state'].split('·').map((x) => v.slug(x));
    const sel = state === 'default'
      ? `.tds-tag[data-type="${type}"]`
      : state === 'hover'
        ? `.tds-tag[data-type="${type}"]:hover:not([data-state]), .tds-tag[data-type="${type}"][data-state="hover"]`
        : `.tds-tag[data-type="${type}"][data-state="${state}"]`;
    const bg = v.first(r.background); const bd = v.first(r.border); const fg = v.first(r.label);
    out += `${sel} {${bg ? ` background: ${v.color(bg)};` : ''}${bd ? ` box-shadow: inset 0 0 0 1px ${v.color(bd)};` : ''}${fg ? ` color: ${v.color(fg)};` : ''} }
`;
  }
  return out;
}
