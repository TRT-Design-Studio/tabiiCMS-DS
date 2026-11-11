// components/menu-item/spec.md → CSS. Sizes, States ve Icons tablolarından üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  let out = `.tds-menu-item { display: flex; align-items: center; box-sizing: border-box; width: 100%; min-height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; border: 0; margin: 0; background: transparent; text-align: left; cursor: pointer; outline: none; transition: var(--tds-transition); }
.tds-menu-item .tds-icon { transition: color var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-menu-item-leading { display: inline-flex; flex: none; align-items: center; }
.tds-menu-item .tds-icon { font-size: ${v.num(s.icon)}px; }
.tds-menu-item-text { display: flex; flex-direction: column; flex: 1; min-width: 0; }
.tds-menu-item-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tds-menu-item-desc, .tds-menu-item-trailing { font: var(--text-xs-regular); color: var(--text-tertiary); }
`;
  for (const i of spec.table('Icons')) out += `${/\(Destructive\)/.test(i.part) ? '.tds-menu-item[data-destructive="true"]' : '.tds-menu-item'} .tds-icon[data-part="${v.slug(i.part.replace(/\s*\(Destructive\)/, ''))}"] { color: ${v.color(v.first(i.color))}; width: ${v.num(i.size)}px; height: ${v.num(i.size)}px; font-size: ${v.num(i.size)}px; }
`;
  for (const r of spec.table('States')) {
    const destructive = /^Destructive /.test(r.state);
    const state = v.slug(r.state.replace(/^Destructive /, ''));
    const base = `.tds-menu-item${destructive ? '[data-destructive="true"]' : ':not([data-destructive="true"])'}`;
    const sel = state === 'default' ? base
      : state === 'hover' ? `${base}:hover:not([aria-disabled="true"]):not([data-state]), ${base}[data-state="hover"]`
        : state === 'focused' ? `${base}:focus-visible, ${base}[data-state="focused"]`
          : `${base}[data-state="${state}"]`;
    const fill = v.first(r.fill);
    const border = /border\/focus/.test(r.border) ? `inset 0 0 0 ${v.num(r.border)}px ${v.color('border/focus')}` : '';
    const label = tokensOf(r.label);
    const color = label.find((t) => /\//.test(t) && !/^text-/.test(t));
    const font = label.find((t) => /^text-/.test(t));
    const op = label.find((t) => /^opacity-/.test(t));
    out += `${sel} {${fill ? ` background: ${v.color(fill)};` : ''}${border ? ` box-shadow: ${border};` : ''}${color ? ` color: ${v.color(color)};` : ''}${op ? ` opacity: var(--${op}); cursor: not-allowed;` : ''} }
`;
    if (font) out += `${sel.split(',').map((x) => x.trim() + ' .tds-menu-item-label').join(', ')} { font: ${v.text(font)}; }
`;
  }
  return out;
}
const tokensOf = (cell) => [...(cell || '').matchAll(/`([^`]+)`/g)].map((m) => m[1]);
