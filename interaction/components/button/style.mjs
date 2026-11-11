// components/button/spec.md → CSS. Spec'teki Sizes ve States tablolarından üretilir.
export default function css(spec, v) {
  const sizes = spec.table('Sizes');
  const colors = spec.table('States', 0);
  const extra = Object.fromEntries(spec.table('States', 1).map((r) => [r.state, v.first(r.token)]));
  const focus = v.color(extra.Focused);
  const disabled = `var(--opacity-${extra.Disabled.replace(/\D/g, '')})`;
  const motion = Object.fromEntries(spec.table('Motion').map((r) => [r.property.toLowerCase(), r.value]));
  const dur = `${v.num(motion.duration)}ms`;
  const ease = motion.easing.trim();
  const scale = v.num(motion['pressed scale']);
  let out = `.tds-button { display: inline-flex; align-items: center; justify-content: center; border: 0; margin: 0; cursor: pointer; white-space: nowrap; text-decoration: none; background: transparent; transition: background-color ${dur} ${ease}, box-shadow ${dur} ${ease}, color ${dur} ${ease}, transform ${dur} ${ease}; }
.tds-button:active:not(:disabled):not([data-state]), .tds-button[data-state="pressed"] { transform: scale(${scale}); }
@media (prefers-reduced-motion: reduce) { .tds-button { transition: none; } .tds-button:active:not(:disabled):not([data-state]), .tds-button[data-state="pressed"] { transform: none; } }
.tds-button:focus-visible, .tds-button[data-state="focused"] { outline: 2px solid ${focus}; outline-offset: 0; }
.tds-button:disabled, .tds-button[data-state="disabled"] { opacity: ${disabled}; cursor: not-allowed; }
`;
  for (const s of sizes) {
    const k = v.slug(s.size);
    out += `.tds-button[data-size="${k}"] { height: ${v.num(s.height)}px; padding: ${v.space(v.first(s['padding v']))} ${v.space(v.first(s['padding h']))}; gap: ${v.space(v.first(s.gap))}; border-radius: ${v.radius(v.first(s.radius))}; font: ${v.text(v.first(s.text))}; }
.tds-button[data-size="${k}"] .tds-icon { font-size: ${v.num(s.icon)}px; }
`;
  }
  for (const r of colors) {
    const k = v.slug(r.variant);
    const live = ':not(:disabled):not([data-state])';
    const border = v.first(r.border);
    out += `.tds-button[data-variant="${k}"] { background: ${v.color(v.first(r.default))}; color: ${v.color(v.first(r.label))};${border ? ` box-shadow: inset 0 0 0 1px ${v.color(border)};` : ''} }
`;
    if (v.first(r.hover)) out += `.tds-button[data-variant="${k}"]:hover${live}, .tds-button[data-variant="${k}"][data-state="hover"] { background: ${v.color(v.first(r.hover))}; }
`;
    if (v.first(r.pressed)) out += `.tds-button[data-variant="${k}"]:active${live}, .tds-button[data-variant="${k}"][data-state="pressed"] { background: ${v.color(v.first(r.pressed))}; }
`;
    if (/underline/i.test(r.hover)) out += `.tds-button[data-variant="${k}"] { padding-left: 0; padding-right: 0; }
.tds-button[data-variant="${k}"]:hover${live} .tds-button-label, .tds-button[data-variant="${k}"][data-state="hover"] .tds-button-label { text-decoration: underline; text-underline-offset: 3px; }
`;
  }
  return out;
}
