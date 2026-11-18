// components/tab-underline/spec.md → CSS. Sizes (Part) ve States tablolarından üretilir.
// Tabs içinde Slide hareketi için gösterge (.tds-tabs-indicator) Selected çizgisini taşır.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const c = size.container;
  const [pv, ph] = [...c.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const [font, selectedFont] = [...c.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const states = spec.table('States');
  const w = v.num(states.find((r) => v.first(r.indicator)).indicator); // 2 px
  const selectedLine = v.color(v.first(states.find((r) => v.slug(r.state) === 'selected').indicator));
  let out = `.tds-tab-underline { display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; height: ${v.num(c.size)}px; padding: ${v.space(pv)} ${v.space(ph)}; gap: ${v.space(v.first(c.gap))}; margin: 0; border: 0; border-radius: 0; background: transparent; font: ${v.text(font)}; white-space: nowrap; cursor: pointer; box-shadow: inset 0 -${w}px 0 transparent; transition: var(--tds-transition); }
.tds-tab-underline:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
.tds-tab-underline [data-part="leading-icon"] { font-size: ${v.num(size['leading-icon'].size)}px; }
.tds-tab-underline [data-part="trailing-icon"] { font-size: ${v.num(size['trailing-icon'].size)}px; }
.tds-tab-underline[aria-selected="true"] { font: ${v.text(selectedFont)}; }
`;
  for (const r of states) {
    const k = v.slug(r.state);
    const sel = k === 'default' ? '.tds-tab-underline'
      : k === 'hover' ? '.tds-tab-underline:hover:not(:disabled):not([aria-selected="true"]):not([data-state]), .tds-tab-underline[data-state="hover"]'
        : k === 'selected' ? '.tds-tab-underline[aria-selected="true"]'
          : '.tds-tab-underline:disabled';
    const ind = v.first(r.indicator);
    const [fg, op] = [...r.label.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    out += `${sel} {${ind ? ` box-shadow: inset 0 -${v.num(r.indicator)}px 0 ${v.color(ind)};` : ''} color: ${v.color(fg)};${op ? ` opacity: var(--${op.replace('Opacity/', '')}); cursor: not-allowed;` : ''} }
`;
  }
  // Tabs içindeki denemeler: Fill genişlikte tab'ler eşit bölünür, yazı sola ya da ortaya hizalanır.
  out += `.tds-tabs[data-type="underline"][data-fill] .tds-tab-underline { flex: 1 1 0; min-width: 0; }
.tds-tabs[data-type="underline"][data-align="left"] .tds-tab-underline { justify-content: flex-start; }
.tds-tabs[data-type="underline"][data-motion="slide"] .tds-tab-underline[aria-selected="true"] { box-shadow: inset 0 -${w}px 0 transparent; }
.tds-tabs-indicator { position: absolute; left: 0; pointer-events: none; transition: transform var(--tds-slide-duration) var(--tds-motion-easing), width var(--tds-slide-duration) var(--tds-motion-easing); }
.tds-tabs[data-type="underline"] .tds-tabs-indicator { bottom: 0; height: ${w}px; background: ${selectedLine}; }
`;
  return out;
}
