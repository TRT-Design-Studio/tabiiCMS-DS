// components/number-stepper/spec.md → CSS. Parçalar icon-button ve input komponentleri; burada sadece
// kapsayıcı aralığı ve değer alanının genişliği (Sizes: Container, Value).
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r]));
  const valueWidth = v.num(part.value.size.split('×')[0]);
  return `.tds-number-stepper { display: inline-flex; align-items: center; gap: ${v.space(v.first(part.container['padding / gap']))}; }
.tds-number-stepper > .tds-input { width: ${valueWidth}px; padding-left: ${v.space(v.first(part.value['padding / gap']))}; padding-right: ${v.space(v.first(part.value['padding / gap']))}; }
.tds-number-stepper .tds-input-field { font-variant-numeric: tabular-nums; }
`;
}
