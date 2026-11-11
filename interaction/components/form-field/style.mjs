// components/form-field/spec.md → CSS. Sizes tablosundaki Gap; parçalar label, kontrol ve field-message komponentleri.
export default function css(spec, v) {
  const gap = v.first(spec.table('Sizes')[0].gap);
  const width = v.num(/Width (\d+) by default/.exec(spec.raw)[1]);
  return `.tds-form-field { display: flex; flex-direction: column; gap: ${v.space(gap)}; box-sizing: border-box; width: ${width}px; max-width: 100%; }
.tds-form-field > .tds-input, .tds-form-field > .tds-select, .tds-form-field > .tds-textarea { width: 100%; }
`;
}
