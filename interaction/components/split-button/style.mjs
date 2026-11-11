// components/split-button/spec.md → CSS. Parçalar button ve icon-button komponentleridir.
export default function css(spec, v) {
  const gap = /`([^`]+)`/.exec(spec.raw.match(/Gap between the parts:[^\n]*/)[0])[1];
  return `.tds-split { display: inline-flex; gap: ${v.space(gap)}; }
.tds-button[data-corners="left"] { border-top-right-radius: 0; border-bottom-right-radius: 0; }
.tds-button[data-corners="right"] { border-top-left-radius: 0; border-bottom-left-radius: 0; }
`;
}
