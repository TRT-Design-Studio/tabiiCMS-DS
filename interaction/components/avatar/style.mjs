// components/avatar/spec.md → CSS. Sizes ve States (Color → Fill, Border, Initials) tablolarından üretilir.
export default function css(spec, v) {
  let out = `.tds-avatar { display: inline-flex; align-items: center; justify-content: center; flex: none; box-sizing: border-box; overflow: hidden; user-select: none; }
`;
  for (const s of spec.table('Sizes')) {
    const px = v.num(s['width / height']);
    out += `.tds-avatar[data-size="${v.slug(s.size)}"] { width: ${px}px; height: ${px}px; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; }
`;
  }
  for (const r of spec.table('States')) {
    const bd = v.first(r.border);
    out += `.tds-avatar[data-color="${v.slug(r.color)}"] { background: ${v.color(v.first(r.fill))}; color: ${v.color(v.first(r.initials))};${bd ? ` box-shadow: inset 0 0 0 1px ${v.color(bd)};` : ''} }
`;
  }
  return out;
}
