// components/menu/spec.md → CSS. Sizes (Part | Value) ve States tablolarından üretilir.
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r.value]));
  let out = `.tds-menu { box-sizing: border-box; width: ${v.num(part.width)}px; padding: ${v.space(v.first(part.padding))}; border-radius: ${v.radius(v.first(part.radius))}; background: ${v.color(v.first(part.background))}; box-shadow: inset 0 0 0 ${v.num(part.border)}px ${v.color(v.first(part.border))}, ${v.shadow(v.first(part.effect))}; display: flex; flex-direction: column; color: var(--text-primary); }
.tds-menu-status { display: flex; flex-direction: column; }
.tds-menu-status-title { font: var(--text-sm-medium); color: var(--text-primary); }
.tds-menu-status-desc { font: var(--text-xs-regular); color: var(--text-tertiary); }
.tds-menu-hint { font: var(--text-sm-regular); color: var(--text-tertiary); }
.tds-menu-skeleton { height: 12px; border-radius: var(--rounded-sm); background: var(--bg-interactive-pressed); }
`;
  for (const r of spec.table('States', 1)) {
    const k = v.slug(r.state);
    out += `.tds-menu[data-state="${k}"] .tds-menu-status { padding: ${v.space(v.first(r['padding v']))} ${v.space(v.first(r['padding h']))}; gap: ${v.space(v.first(r.gap))};${r.align === 'center' ? ' align-items: center; text-align: center;' : ''} }
`;
    if (v.first(r.icon)) out += `.tds-menu[data-state="${k}"] .tds-menu-status .tds-icon { font-size: ${v.num(r.icon)}px; color: ${v.color(v.first(r.icon))}; }
`;
  }
  return out;
}
