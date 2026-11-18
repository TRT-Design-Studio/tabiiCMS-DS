// components/section-nav-item/spec.md → CSS. Sizes, States (Status · State) ve Parts tablolarından üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  const part = Object.fromEntries(spec.table('Parts').map((r) => [v.slug(r.part), r]));
  const [cFont, cColor] = [...part.counter.fill.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  let out = `.tds-section-nav-item { display: flex; align-items: center; box-sizing: border-box; width: ${v.num(s.width)}px; height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; margin: 0; border: 0; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; text-align: left; cursor: pointer; transition: var(--tds-transition); }
.tds-section-nav-item:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 0; }
.tds-section-nav-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tds-section-nav-counter { font: ${v.text(cFont)}; color: ${v.color(cColor)}; white-space: nowrap; }
.tds-section-nav { display: flex; flex-direction: column; gap: ${v.space(v.first(spec.table('Stack')[0].gap))}; }
`;
  for (const r of spec.table('States')) {
    const st = v.slug(r.status); const state = v.slug(r.state);
    const base = `.tds-section-nav-item[data-status="${st}"]`;
    const sel = state === 'default' ? base : `${base}:hover:not([data-state]), ${base}[data-state="hover"]`;
    out += `${sel} { background: ${v.color(v.first(r.background))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(r.border))}; color: ${v.color(v.first(r.text))}; }
`;
  }
  return out;
}
