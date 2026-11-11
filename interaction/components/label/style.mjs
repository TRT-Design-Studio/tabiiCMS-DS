// components/label/spec.md → CSS. Sizes ve States (Emphasis · State) tablolarından üretilir.
export default function css(spec, v) {
  const s = spec.table('Sizes')[0];
  const [labelText, smallText] = [...s.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  let out = `.tds-label { display: inline-flex; flex-direction: column; gap: ${v.space(v.first(s['line gap']))}; min-width: 0; transition: var(--tds-transition); }
.tds-label[data-fill] { display: flex; width: 100%; }
.tds-label-row { display: flex; align-items: center; gap: ${v.space(v.first(s['row gap']))}; min-height: ${v.num(s.height)}px; }
.tds-label-text, .tds-label-required { font: ${v.text(labelText)}; }
.tds-label-text { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tds-label-meta, .tds-label-desc { font: ${v.text(smallText)}; }
.tds-label-meta { margin-left: auto; padding-left: ${v.space(v.first(s['row gap']))}; white-space: nowrap; }
.tds-label-help { display: inline-flex; padding: 0; border: 0; margin: 0; background: transparent; color: inherit; cursor: help; border-radius: var(--rounded-full); transition: var(--tds-transition); }
.tds-label-help:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 1px; }
.tds-label-help .tds-icon { font-size: ${v.num(s.icon)}px; }
`;
  for (const r of spec.table('States')) {
    const [emphasis, state] = r.state.split('·').map((x) => v.slug(x));
    const sel = `.tds-label[data-emphasis="${emphasis}"][data-state="${state}"]`;
    const other = [...r['other parts'].matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    out += `${sel} .tds-label-text { color: ${v.color(v.first(r.label))}; }
`;
    if (/^Opacity\//.test(other[0] || '')) out += `${sel} { opacity: var(--${other[0].replace('Opacity/', '')}); }
`;
    else if (other.length >= 2) out += `${sel} .tds-label-required { color: ${v.color(other[0])}; }
${sel} .tds-label-help, ${sel} .tds-label-meta, ${sel} .tds-label-desc { color: ${v.color(other[1])}; }
`;
  }
  // "same" satırları (Subtle, Disabled) diğer parçaların renklerini ilk satırdan alır.
  const first = spec.table('States')[0];
  const other = [...first['other parts'].matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  out += `.tds-label .tds-label-required { color: ${v.color(other[0])}; }
.tds-label .tds-label-help, .tds-label .tds-label-meta, .tds-label .tds-label-desc { color: ${v.color(other[1])}; }
`;
  return out;
}
