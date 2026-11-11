// components/menu-group-label/spec.md → CSS.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  const [x, bottom] = [...s.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const [text, color] = [...s.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  return `.tds-menu-group-label { box-sizing: border-box; min-height: ${v.num(s.height)}px; padding: ${v.space(x)} ${v.space(x)} ${v.space(bottom)}; font: ${v.text(text)}; color: ${v.color(color)}; }
`;
}
