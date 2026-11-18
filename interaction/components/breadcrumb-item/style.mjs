// components/breadcrumb-item/spec.md → CSS. Sizes, States ve Parts tablolarından üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  const st = Object.fromEntries(spec.table('States').map((r) => [v.slug(r.state), r]));
  const part = Object.fromEntries(spec.table('Parts').map((r) => [v.slug(r.part), r]));
  const focus = st.focused.border; // "`border/focus` 2 px outside, radius 4"
  const fw = v.num(/([\d.]+) px/.exec(focus)[1]);
  const fr = v.num(/radius ([\d.]+)/.exec(focus)[1]);
  const text = (k) => v.color(v.first(st[k].text));
  return `.tds-breadcrumb-item { display: inline-flex; align-items: center; height: ${v.num(s.height)}px; gap: ${v.space(v.first(s.gap))}; font: ${v.text(v.first(s.text))}; list-style: none; margin: 0; padding: 0; }
.tds-breadcrumb-link { display: inline-flex; align-items: center; gap: ${v.space(v.first(s.gap))}; color: ${text('default')}; text-decoration: none; border-radius: ${fr}px; transition: var(--tds-transition); }
.tds-breadcrumb-link span { text-decoration: underline; text-underline-offset: 3px; text-decoration-color: transparent; transition: var(--tds-transition); }
a.tds-breadcrumb-link:hover, .tds-breadcrumb-item[data-state="hover"] .tds-breadcrumb-link { color: ${text('hover')}; }
a.tds-breadcrumb-link:hover span, .tds-breadcrumb-item[data-state="hover"] .tds-breadcrumb-link span { text-decoration-color: currentColor; }
a.tds-breadcrumb-link:focus-visible, .tds-breadcrumb-item[data-state="focused"] .tds-breadcrumb-link { color: ${text('focused')}; outline: ${fw}px solid ${v.color(v.first(focus))}; outline-offset: ${fw}px; }
.tds-breadcrumb-item[data-state="current"] .tds-breadcrumb-link { color: ${text('current')}; cursor: default; }
.tds-breadcrumb-item .tds-icon[data-part="icon"] { font-size: ${v.num(part.icon.size)}px; }
.tds-breadcrumb-item .tds-icon[data-part="separator"] { color: ${v.color(v.first(part.separator.fill))}; }
`;
}
