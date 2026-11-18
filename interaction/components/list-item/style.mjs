// components/list-item/spec.md → CSS. Sizes (Part) ve iki States tablosundan (State, Part) üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const part = Object.fromEntries(spec.table('States', 1).map((r) => [v.slug(r.part), r]));
  const title = v.color(v.first(spec.table('States')[0].title));
  const tok = (cell) => [...String(cell).matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const width = v.num(/The set is (\d+) px wide/.exec(spec.raw)[1]);
  const [pv, ph] = tok(size.issue.padding);
  let out = `.tds-list-item { display: flex; align-items: center; box-sizing: border-box; width: ${width}px; padding: ${v.space(pv)} ${v.space(ph)}; border-radius: ${v.radius(v.first(size.issue.radius))}; color: inherit; text-decoration: none; }
.tds-list-item:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 0; }
.tds-list-item-text { display: flex; flex-direction: column; flex: 1; min-width: 0; gap: ${v.space(v.first(size['title-description'].gap))}; }
.tds-list-item-title, .tds-list-item-desc { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tds-list-item-title { color: ${title}; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: transparent; transition: var(--tds-transition); }
a.tds-list-item:hover:not([data-state]) .tds-list-item-title, .tds-list-item[data-state="hover"] .tds-list-item-title { text-decoration-color: currentColor; }
.tds-list-item-desc { color: ${v.color(v.first(part.description.text))}; }
.tds-list-item-wrap { display: flex; flex: none; padding: ${v.space(v.first(size['icon-wrap'].padding))}; border-radius: ${v.radius(v.first(size['icon-wrap'].radius))}; background: ${v.color(v.first(part['icon-wrap'].fill))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(part['icon-wrap'].border))}; }
.tds-list-item-inner { display: flex; padding: ${v.space(v.first(size['inner-circle'].padding))}; border-radius: ${v.radius(v.first(size['inner-circle'].radius))}; background: ${v.color(v.first(part['inner-circle'].fill))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(part['inner-circle'].border))}; color: ${v.color(v.first(part.icon.fill))}; }
.tds-list-item-inner .tds-icon { font-size: ${v.num(size.icon.height)}px; }
.tds-list-item-meta { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.tds-list-item-slot { display: flex; flex: none; }
`;
  for (const t of ['issue', 'activity', 'note', 'slot']) {
    const s = size[t];
    const [titleFont, descFont] = tok(s.text);
    const vertical = /vertical/.test(s.gap);
    out += `.tds-list-item[data-type="${t}"] { gap: ${v.space(v.first(s.gap))};${vertical ? ' flex-direction: column; align-items: flex-start;' : ''}${/^\d/.test(s.height) ? ` min-height: ${v.num(s.height)}px;` : ''} }
.tds-list-item[data-type="${t}"] .tds-list-item-title { font: ${v.text(titleFont)}; }
.tds-list-item[data-type="${t}"] .tds-list-item-desc { font: ${v.text(descFont)}; }
`;
  }
  return out;
}
