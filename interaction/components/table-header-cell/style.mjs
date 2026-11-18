// components/table-header-cell/spec.md → CSS. Sizes (Part) ve States tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const st = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.state).replace(/-.*/, ''), r]));
  const part = Object.fromEntries(spec.table('States', 1).map((r) => [v.slug(r.part), r]));
  const tok = (cell) => [...String(cell).matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const c = size.container;
  const [pv, ph, boxL, boxR] = tok(c.padding); // Checkbox: sol Spacing/5, sağ 0
  const [width, boxWidth] = /Cells are (\d+) px wide[^;]*; Checkbox cells are (\d+) px wide/.exec(spec.raw).slice(1).map(Number);
  const [sortedFill, sortedHover] = tok(st.sorted.fill);
  return `.tds-table-header-cell { position: relative; display: flex; align-items: center; box-sizing: border-box; width: ${width}px; height: ${v.num(c.size)}px; padding: ${v.space(pv)} ${v.space(ph)}; gap: ${v.space(v.first(c.gap))}; margin: 0; border: 0; font: ${v.text(v.first(c.text))}; text-align: left; white-space: nowrap; background: ${v.color(tok(st.default.fill)[0])}; color: ${v.color(tok(st.default['label · icon'])[0])}; box-shadow: inset 0 -1px 0 ${v.color(tok(st.default.border)[0])}; transition: var(--tds-transition); }
button.tds-table-header-cell { cursor: pointer; }
button.tds-table-header-cell:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
button.tds-table-header-cell:hover:not([data-state]), .tds-table-header-cell[data-state="hover"] { background: ${v.color(tok(st.hover.fill)[0])}; }
.tds-table-header-cell[aria-sort="ascending"], .tds-table-header-cell[aria-sort="descending"] { background: ${v.color(sortedFill)}; color: ${v.color(tok(st.sorted['label · icon'])[0])}; }
button.tds-table-header-cell[aria-sort="ascending"]:hover:not([data-state]), button.tds-table-header-cell[aria-sort="descending"]:hover:not([data-state]), .tds-table-header-cell[aria-sort][data-state="hover"] { background: ${v.color(sortedHover)}; }
.tds-table-header-cell[data-type="checkbox"] { width: ${boxWidth}px; padding-left: ${v.space(boxL)}; padding-right: ${v.space(boxR)}; }
.tds-table-header-cell .tds-icon { font-size: ${v.num(size['sort-icon'].size)}px; }
.tds-table-header-cell[data-divider]::after { content: ""; position: absolute; right: 0; top: 0; width: 1px; height: ${v.num(size.divider.size.split('×')[1])}px; background: ${v.color(tok(part.divider.value)[0])}; }
`;
}
