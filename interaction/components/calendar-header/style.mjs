// components/calendar-header/spec.md → CSS. Parçalar icon-button ve button komponentleri (Sizes → Header, Title).
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.split(' (')[0].toLowerCase(), r]));
  const [w, h] = part.header.size.split('×').map((x) => v.num(x));
  return `.tds-calendar-header { display: flex; align-items: center; justify-content: space-between; width: ${w}px; max-width: 100%; height: ${h}px; }
.tds-calendar-title { display: flex; align-items: center; gap: ${v.space(v.first(part.title.gap))}; }
`;
}
