// components/tab-segment/spec.md → CSS. Sizes (Part) ve States tablolarından üretilir.
// Tabs içinde Slide hareketi için gösterge (.tds-tabs-indicator) Selected dolgusunu ve çizgisini taşır.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const c = size.container;
  const [pv, ph] = [...c.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  let out = `.tds-tab-segment { position: relative; display: inline-flex; align-items: center; box-sizing: border-box; height: ${v.num(c.size)}px; padding: ${v.space(pv)} ${v.space(ph)}; gap: ${v.space(v.first(c.gap))}; margin: 0; border: 0; border-radius: ${v.radius(v.first(c.radius))}; background: transparent; font: ${v.text(v.first(c.text))}; white-space: nowrap; cursor: pointer; transition: var(--tds-transition); }
.tds-tab-segment:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 0; }
.tds-tab-segment [data-part="leading-icon"] { font-size: ${v.num(size['leading-icon'].size)}px; }
.tds-tab-segment [data-part="trailing-icon"] { font-size: ${v.num(size['trailing-icon'].size)}px; }
`;
  let selFill = ''; let selBorder = '';
  for (const r of spec.table('States')) {
    const k = v.slug(r.state);
    const sel = k === 'default' ? '.tds-tab-segment'
      : k === 'hover' ? '.tds-tab-segment:hover:not(:disabled):not([aria-selected="true"]):not([data-state]), .tds-tab-segment[data-state="hover"]'
        : k === 'selected' ? '.tds-tab-segment[aria-selected="true"]'
          : '.tds-tab-segment:disabled';
    const fill = v.first(r.fill); const border = v.first(r.border);
    if (k === 'selected') { selFill = v.color(fill); selBorder = v.color(border); }
    const [fg, op] = [...r.label.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    out += `${sel} {${fill ? ` background: ${v.color(fill)};` : ''}${border ? ` box-shadow: inset 0 0 0 1px ${v.color(border)};` : ''} color: ${v.color(fg)};${op ? ` opacity: var(--${op.replace('Opacity/', '')}); cursor: not-allowed;` : ''} }
`;
  }
  out += `.tds-tabs[data-type="segmented"][data-motion="slide"] .tds-tab-segment[aria-selected="true"] { background: transparent; box-shadow: none; }
.tds-tabs[data-type="segmented"] .tds-tabs-indicator { top: var(--tds-tabs-pad-top, 0); height: ${v.num(c.size)}px; border-radius: ${v.radius(v.first(c.radius))}; background: ${selFill}; box-shadow: inset 0 0 0 1px ${selBorder}; z-index: 0; }
.tds-tabs[data-type="segmented"] .tds-tab-segment { z-index: 1; }
`;
  return out;
}
