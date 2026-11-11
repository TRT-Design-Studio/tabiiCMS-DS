// components/menu-separator/spec.md → CSS.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  const [y, x] = [...s.padding.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  return `.tds-menu-separator { box-sizing: border-box; height: ${v.num(s.height)}px; padding: ${v.space(y)} ${v.space(x)}; }
.tds-menu-separator::after { content: ""; display: block; height: ${v.num(s.line)}px; background: ${v.color(v.first(s.line))}; }
`;
}
