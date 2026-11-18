// components/table-cell/spec.md → CSS. Sizes (Part) ve States tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const st = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.state), r]));
  const tok = (cell) => [...String(cell).matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const [width, boxWidth] = /Cells are (\d+) px wide[^;]*; Checkbox cells are (\d+) px wide/.exec(spec.raw).slice(1).map(Number);
  const t = size.text;
  const [pv, ph] = tok(t.padding);
  const boxPad = tok(size.checkbox.padding); // top/bottom, left, right (0): Checkbox hücresinin sağında boşluk yok
  const [valueColor, overColor] = tok(st.default.text);
  const border = v.color(tok(st.default.border)[0]);
  const [overFont, valueFont] = tok(size['two-line'].text);
  const [, lineGap] = tok(size['two-line'].gap);
  const [, slotGap] = tok(size.slot.gap);
  const [iw, ih] = /\((\d+) × (\d+)/.exec(size.image.height).slice(1);
  const inset = v.num(size['hover-layer'].height);
  const layer = (row) => v.color(tok(row.fill).slice(-1)[0]); // "… + inset layer `bg/interactive/selected` 4%"
  const fill = (row) => v.color(tok(row.fill)[0]);
  return `.tds-table-cell { position: relative; display: flex; align-items: center; box-sizing: border-box; width: ${width}px; min-height: ${v.num(t.height)}px; padding: ${v.space(pv)} ${v.space(ph)}; gap: ${v.space(v.first(t.gap))}; font: ${v.text(v.first(t.text))}; color: ${v.color(valueColor)}; box-shadow: inset 0 -1px 0 ${border}; transition: var(--tds-transition); }
.tds-table-cell::before { content: ""; position: absolute; inset: ${inset}px; border-radius: ${v.radius(v.first(size['hover-layer'].radius))}; background: transparent; pointer-events: none; transition: var(--tds-transition); }
.tds-table-cell > * { position: relative; }
.tds-table-cell[data-type="two-line"] { min-height: ${v.num(size['two-line'].height)}px; }
.tds-table-cell-lines { display: flex; flex-direction: column; gap: ${v.space(lineGap)}; min-width: 0; }
.tds-table-cell-overline { font: ${v.text(overFont)}; color: ${v.color(overColor)}; }
.tds-table-cell-value { font: ${v.text(valueFont)}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tds-table-cell[data-type="text"] .tds-table-cell-value { font: ${v.text(v.first(t.text))}; }
.tds-table-cell[data-type="slot"] { min-height: 0; gap: ${v.space(slotGap)}; }
.tds-table-cell[data-type="checkbox"] { width: ${boxWidth}px; min-height: ${v.num(size.checkbox.height)}px; padding: ${v.space(boxPad[0])} ${v.space(boxPad[2])} ${v.space(boxPad[0])} ${v.space(boxPad[1])}; }
.tds-table-cell-image { flex: none; width: ${iw}px; height: ${ih}px; border-radius: ${v.radius(v.first(size.image.radius))}; object-fit: cover; background: var(--bg-subtle); }
.tds-table-cell a.tds-table-cell-value { color: inherit; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: transparent; transition: var(--tds-transition); }
.tds-table-cell[data-interactive="link"] { cursor: pointer; }
.tds-table-cell[data-toggle] { cursor: pointer; }
.tds-table-cell[data-interactive]:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
.tds-table-cell[data-interactive="true"]:hover:not([data-state]):not([aria-selected="true"]), .tds-table-cell[data-state="hover"] { background: ${fill(st['hover-true'])}; }
.tds-table-cell[data-interactive="true"]:hover:not([data-state]):not([aria-selected="true"])::before, .tds-table-cell[data-state="hover"]::before { background: ${layer(st['hover-true'])}; }
.tds-table-cell[aria-selected="true"] { background: linear-gradient(${layer(st.selected)}, ${layer(st.selected)}), ${fill(st.selected)}; }
.tds-table-cell[data-interactive="true"][aria-selected="true"]:hover:not([data-state]), .tds-table-cell[data-interactive="true"][data-state="selected-hover"] { background: ${fill(st['selected-hover-true'])}; }
.tds-table-cell[data-interactive="true"][aria-selected="true"]:hover:not([data-state])::before, .tds-table-cell[data-interactive="true"][data-state="selected-hover"]::before { background: ${layer(st['selected-hover-true'])}; }
.tds-table-cell[data-interactive="link"]:hover:not([data-state]) a.tds-table-cell-value, .tds-table-cell[data-interactive="link"][data-state="hover"] a.tds-table-cell-value, .tds-table-cell[data-interactive="link"][data-state="selected-hover"] a.tds-table-cell-value { text-decoration-color: currentColor; }
.tds-table-cell[data-interactive="link"][data-state="hover"] { background: transparent; }
.tds-table-cell[data-interactive="link"][data-state="hover"]::before { background: transparent; }
`;
}
