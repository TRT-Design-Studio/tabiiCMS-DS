// components/card/spec.md → CSS. Sizes (Part), States (Style · Part) ve Placeholder tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part.replace(/\(.*\)/, '')), r]));
  const st = Object.fromEntries(spec.table('States').map((r) => [v.slug(r['style · part']), r]));
  const ph = spec.table('Placeholder')[0];
  const width = v.num(spec.table('Sizes')[0].part); // "Container (560 wide by default)"
  const [fv, fh] = [...size.footer.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  let out = `.tds-card { display: flex; flex-direction: column; box-sizing: border-box; width: ${width}px; max-width: 100%; overflow: hidden; border-radius: ${v.radius(v.first(size.container.radius))}; }
.tds-card-body { display: flex; flex-direction: column; padding: ${v.space(v.first(size.body.padding))}; gap: ${v.space(v.first(size.body.gap))}; }
.tds-card-footer { display: flex; align-items: center; padding: ${v.space(fv)} ${v.space(fh)}; gap: ${v.space(v.first(size.footer.gap))}; box-shadow: inset 0 1px 0 ${v.color(v.first(st.footer.border))}; }
.tds-card-footer { justify-content: flex-end; }
.tds-card[data-flush] > .tds-card-body, .tds-card[data-flush] > .tds-card-footer { padding: 0; }
.tds-card[data-flush] > .tds-card-footer > * { flex: 1; }
.tds-card-row { display: flex; gap: ${v.space(v.first(size.body.gap))}; }
.tds-card-row > .tds-stat-card { flex: 1 1 0; width: auto; min-width: 0; }
.tds-card-body > .tds-list-item { width: 100%; }
.tds-card-placeholder { font: ${v.text(v.first(ph.text))}; color: ${v.color(v.first(ph.color))}; }
`;
  // Çizgi bütün kartın etrafında: gerçek border (içerideki header dolgusu üstüne binmez).
  for (const k of ['default', 'subtle']) out += `.tds-card[data-style="${k}"] { background: ${v.color(v.first(st[k].fill))}; border: 1px solid ${v.color(v.first(st[k].border))}; }
`;
  return out;
}
