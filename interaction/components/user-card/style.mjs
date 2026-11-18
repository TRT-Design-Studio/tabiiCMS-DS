// components/user-card/spec.md → CSS. Sizes (Layout) ve States tablolarından üretilir.
export default function css(spec, v) {
  const st = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.state), r]));
  const chevron = v.num(spec.table('Parts').find((r) => r.part === 'Chevron').size);
  let out = `.tds-user-card { display: inline-flex; align-items: center; box-sizing: border-box; margin: 0; border: 0; background: transparent; text-align: left; cursor: pointer; transition: var(--tds-transition); }
.tds-user-card:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 0; }
.tds-user-card-text { display: flex; flex-direction: column; flex: 1; min-width: 0; }
.tds-user-card-text span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tds-user-card .tds-icon { font-size: ${chevron}px; color: ${v.color(v.first(st.default.email))}; }
.tds-user-card-name { color: ${v.color(v.first(st.default.name))}; }
.tds-user-card-email { color: ${v.color(v.first(st.default.email))}; }
.tds-user-card:hover:not([data-state]), .tds-user-card[data-state="hover"] { background: ${v.color(v.first(st.hover.fill))}; }
`;
  for (const s of spec.table('Sizes')) {
    const [w, h] = /(\d+) × (\d+)/.exec(s.size).slice(1);
    const [nameFont, emailFont] = [...s.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    const gap = v.first(s.gap);
    out += `.tds-user-card[data-layout="${v.slug(s.layout)}"] { width: ${w}px; height: ${h}px; padding: ${v.space(v.first(s.padding))};${gap ? ` gap: ${v.space(gap)};` : ''} border-radius: ${v.radius(v.first(s.radius))}; }
`;
    if (nameFont) out += `.tds-user-card[data-layout="${v.slug(s.layout)}"] .tds-user-card-name { font: ${v.text(nameFont)}; }
.tds-user-card[data-layout="${v.slug(s.layout)}"] .tds-user-card-email { font: ${v.text(emailFont)}; }
`;
  }
  return out;
}
