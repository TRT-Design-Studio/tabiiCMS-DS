// components/card-header/spec.md → CSS. Sizes (Part) ve States (Part) tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const st = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.part), r]));
  const c = size.container;
  const [pv, ph] = [...c.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const [titleFont, subFont] = [...size['title-subtitle'].text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  return `.tds-card-header { display: flex; align-items: flex-start; box-sizing: border-box; width: 100%; padding: ${v.space(pv)} ${v.space(ph)}; gap: ${v.space(v.first(c.gap))}; background: ${v.color(v.first(st.container.fill))}; box-shadow: inset 0 -1px 0 ${v.color(v.first(st.container.border))}; }
.tds-card-header[data-trailing="slot-v"] { flex-direction: column; align-items: stretch; }
.tds-card-header-text { display: flex; flex-direction: column; flex: 1; min-width: 0; gap: ${v.space(v.first(size['title-subtitle'].gap))}; }
.tds-card-header-title { font: ${v.text(titleFont)}; color: ${v.color(v.first(st.title.text))}; }
.tds-card-header-subtitle { font: ${v.text(subFont)}; color: ${v.color(v.first(st.subtitle.text))}; }
.tds-card-header-slot { display: flex; align-items: center; gap: ${v.space(v.first(size['trailing-slot'].gap))}; }
.tds-card-header-slot .tds-input { flex: 1; }
.tds-card-header > .tds-status, .tds-card-header > .tds-button { flex: none; }
`;
}
