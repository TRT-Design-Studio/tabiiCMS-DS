// components/pagination-item/spec.md → CSS. Sizes, States ve Parts tablolarından üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  const part = Object.fromEntries(spec.table('Parts').map((r) => [v.slug(r.part), r]));
  let out = `.tds-pagination-item { display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; margin: 0; border: 0; border-radius: 0; font: ${v.text(v.first(s.text))}; white-space: nowrap; cursor: pointer; transition: var(--tds-transition); }
.tds-pagination-item:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
.tds-pagination-item:disabled, .tds-pagination-item[aria-disabled="true"] { cursor: not-allowed; }
.tds-pagination-item[data-ellipsis] { cursor: default; }
.tds-pagination-item .tds-icon { font-size: ${v.num(part['leading-icon'].size)}px; color: ${v.color(v.first(part['leading-icon'].fill))}; }
`;
  for (const r of spec.table('States')) {
    const k = v.slug(r.state);
    const [fg, font] = [...r.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    const sel = k === 'default' ? '.tds-pagination-item'
      : k === 'hover' ? '.tds-pagination-item:hover:not(:disabled):not([aria-current]):not([data-ellipsis]):not([data-state]), .tds-pagination-item[data-state="hover"]'
        : k === 'selected' ? '.tds-pagination-item[aria-current="page"], .tds-pagination-item[data-state="selected"]'
          : '.tds-pagination-item:disabled, .tds-pagination-item[data-state="disabled"]';
    const op = v.num(r.opacity);
    if (k === 'default') out += `.tds-pagination-item { box-shadow: inset -1px 0 0 ${v.color(v.first(r.border))}; }
`;
    // Çizgi her state'te aynı (border/default); state kuralları çizgiye dokunmaz, böylece grubun son hücresinde
    // (Next) hover'da fazladan çizgi çıkmaz.
    out += `${sel} { background: ${v.color(v.first(r.background))}; color: ${v.color(fg)};${font ? ` font: ${v.text(font)};` : ''}${Number.isFinite(op) ? ` opacity: var(--opacity-${op});` : ''} }
`;
  }
  return out;
}
