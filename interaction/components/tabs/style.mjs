// components/tabs/spec.md → CSS. Sizes, States (Type → Fill, Border) ve Motion tablolarından üretilir.
export default function css(spec, v) {
  const states = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.type), r]));
  const motion = Object.fromEntries(spec.table('Motion').map((r) => [v.slug(r.property), r.value]));
  const slideMs = v.num(/([\d.]+) ms for Slide/.exec(motion.duration)[1]);
  let out = `.tds-tabs { position: relative; display: inline-flex; align-items: center; box-sizing: border-box; --tds-slide-duration: ${slideMs}ms; }
`;
  for (const s of spec.table('Sizes')) {
    const k = v.slug(s.type);
    const pad = [...s.padding.matchAll(/`([^`]+)`/g)].map((m) => v.space(m[1]));
    const st = states[k];
    const radius = v.first(s.radius);
    const fill = v.first(st.fill);
    const border = v.first(st.border);
    const line = /bottom/.test(st.border) ? `inset 0 -1px 0 ${v.color(border)}` : `inset 0 0 0 1px ${v.color(border)}`;
    // Underline'da tab'ler arası boşluk denenebilir (--tds-tabs-gap); varsayılan spec'teki değer.
    const gap = k === 'underline' ? `var(--tds-tabs-gap, ${v.space(v.first(s.gap))})` : v.space(v.first(s.gap));
    // Underline: satırın iki ucundaki boşluk (--tds-tabs-pad-x) değiştirilebilir; alttaki çizgi yine bütün genişliği kaplar.
    const padding = k === 'underline' && pad.length === 2 ? `${pad[0]} var(--tds-tabs-pad-x, ${pad[1]})` : pad.join(' ');
    out += `.tds-tabs[data-type="${k}"] { height: ${v.num(s.height)}px; padding: ${padding}; gap: ${gap};${radius ? ` border-radius: ${v.radius(radius)};` : ''}${fill ? ` background: ${v.color(fill)};` : ''} box-shadow: ${line};${k === 'segmented' ? ` --tds-tabs-pad-top: ${pad[0]};` : ''} }
`;
  }
  return out;
}
