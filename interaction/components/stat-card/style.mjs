// components/stat-card/spec.md → CSS. Sizes ve States (Part) tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [v.slug(r.part), r]));
  const st = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.part), r]));
  const c = size.container;
  const [w, h] = /(\d+) × (\d+)/.exec(c.size).slice(1);
  return `.tds-stat-card { display: flex; flex-direction: column; box-sizing: border-box; width: ${w}px; /* yükseklik içeriğe göre: Trend'le ${h} px, Trend kapalıyken boşluk kalmaz */ padding: ${v.space(v.first(c.padding))}; gap: ${v.space(v.first(c.gap))}; border-radius: ${v.radius(v.first(c.radius))}; background: ${v.color(v.first(st.container.fill))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(st.container.border))}; }
.tds-stat-card-label { font: ${v.text(v.first(size.label.text))}; color: ${v.color(v.first(st['label-value'].text))}; }
.tds-stat-card-value { font: ${v.text(v.first(size.value.text))}; color: ${v.color(v.first(st['label-value'].text))}; }
`;
}
