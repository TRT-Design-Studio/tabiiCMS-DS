// components/filter-group/spec.md → CSS. Sizes (Part) tablosu ve açıklamadaki çizgi, yazı ve ikon token'ları.
// Parçalar: badge-count, button (Clear), input (Search), menu-item + checkbox (satırlar), menu (sonuç yok).
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r]));
  const toks = (cell) => [...String(cell).matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const note = /Width (\d+) by default[^\n]*/.exec(spec.raw)[0];
  const width = v.num(/Width (\d+)/.exec(note)[1]);
  const [line, titleText, titleColor, iconColor] = toks(note);
  const iconSize = v.num(/Icon and chevron (\d+) px/.exec(note)[1]);
  const rowH = v.num(/Menu Items \((\d+) px\)/.exec(note)[1]);
  const maxRows = v.num(/at most (\d+) rows/.exec(spec.raw)[1]);
  const [headerPad] = toks(part.header.padding);
  const [searchSide, searchBottom] = toks(part.search.padding);
  const [optSide, optBottom] = toks(part.options.padding);
  return `.tds-filter-group { box-sizing: border-box; width: ${width}px; max-width: 100%; box-shadow: inset 0 -1px 0 ${v.color(line)}; }
.tds-filter-header { display: flex; align-items: center; box-sizing: border-box; height: ${v.num(part.header.height)}px; padding: ${v.space(headerPad)}; gap: ${v.space(v.first(part.header.gap))}; cursor: pointer; }
.tds-filter-toggle { flex: 1; min-width: 0; display: flex; align-items: center; gap: ${v.space(v.first(part.header.gap))}; padding: 0; margin: 0; border: 0; background: transparent; cursor: pointer; text-align: left; border-radius: var(--rounded-sm); color: ${v.color(titleColor)}; font: ${v.text(titleText)}; }
.tds-filter-toggle:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.tds-filter-title { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tds-filter-header .tds-icon { font-size: ${iconSize}px; color: ${v.color(iconColor)}; }
.tds-filter-header .tds-icon[data-part="chevron"] { transition: transform var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-filter-group[data-state="collapsed"] .tds-icon[data-part="chevron"] { transform: rotate(180deg); }
.tds-filter-body { display: grid; grid-template-rows: 1fr; transition: grid-template-rows var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-filter-group[data-state="collapsed"] .tds-filter-body { grid-template-rows: 0fr; }
.tds-filter-body > div { min-height: 0; overflow: hidden; }
.tds-filter-search { box-sizing: border-box; height: ${v.num(part.search.height)}px; padding: 0 ${v.space(searchSide)} ${v.space(searchBottom)}; }
.tds-filter-search > .tds-input { width: 100%; }
.tds-filter-options { display: flex; flex-direction: column; max-height: ${rowH * maxRows}px; overflow-y: auto; padding: 0 ${v.space(optSide)} ${v.space(optBottom)}; scrollbar-width: thin; }
.tds-filter-options .tds-menu { width: auto !important; padding: 0; background: transparent; box-shadow: none; }
`;
}
