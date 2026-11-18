// components/pagination/spec.md → CSS. Sizes ve Parts tablolarından üretilir.
export default function css(spec, v) {
  const parts = Object.fromEntries(spec.table('Parts').map((r) => [v.slug(r.part), r]));
  const mobile = Object.fromEntries(spec.table('Parts', 1).map((r) => [v.slug(r.part), r]));
  const items = parts.items.kind; // "Pagination Items, `border/default` stroke, radius 8"
  const radius = v.num(/radius ([\d.]+)/.exec(items)[1]);
  const controlsGap = v.num(/gap ([\d.]+)/.exec(mobile.controls.kind)[1]);
  const ctl = Object.fromEntries(spec.table('Controls').map((r) => [v.slug(r.part), r]));
  const tokens = (cell) => [...cell.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const [totalFont, totalColor] = tokens(parts.total.fill);
  const [labelFont, labelColor] = tokens(ctl['per-page'].text);
  let out = `.tds-pagination { display: flex; align-items: center; box-sizing: border-box; }
.tds-pagination-total { font: ${v.text(totalFont)}; color: ${v.color(totalColor)}; white-space: nowrap; }
.tds-pagination-items { display: flex; overflow: hidden; border-radius: ${radius}px; border: 1px solid ${v.color(v.first(items))}; }
.tds-pagination-items .tds-pagination-item:last-child { box-shadow: none; }
.tds-pagination-group { display: flex; align-items: center; gap: ${v.space(v.first(ctl['per-page'].gap))}; white-space: nowrap; font: ${v.text(labelFont)}; color: ${v.color(labelColor)}; }
.tds-pagination-mobile { gap: ${controlsGap}px; }
.tds-pagination-goto .tds-input { width: ${v.num(ctl['go-to'].width)}px; }
.tds-pagination-mobile .tds-select { width: ${v.num(ctl['page-select'].width)}px; }
`;
  for (const s of spec.table('Sizes')) {
    out += `.tds-pagination[data-size="${v.slug(s.size)}"] { min-height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; }
`;
  }
  return out;
}
