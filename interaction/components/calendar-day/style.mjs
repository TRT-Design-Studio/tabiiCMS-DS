// components/calendar-day/spec.md → CSS. Sizes (Part) ve States tablolarından üretilir.
// Fill hücresinde "mark …" ve "band …" ayrı okunur; Text hücresinde "+ dot …" noktanın rengidir.
export default function css(spec, v) {
  const part = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r]));
  const [regular, medium] = [...part.mark.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const cell = v.first(part.cell.size);
  const mark = v.first(part.mark.size);
  const dot = v.first(part['today dot'].size);
  const ring = v.first(part['focus ring'].size); // border-2
  let out = `.tds-day { position: relative; display: inline-grid; place-items: center; width: ${v.space(cell)}; height: ${v.space(cell)}; padding: 0; margin: 0; border: 0; background: transparent; cursor: pointer; font: ${v.text(regular)}; outline: none; }
.tds-day-band { position: absolute; inset: 0; background: transparent; transition: var(--tds-transition); }
.tds-day-mark { position: relative; display: grid; place-items: center; width: ${v.space(mark)}; height: ${v.space(mark)}; border-radius: var(--rounded-full); transition: var(--tds-transition); }
.tds-day-dot { position: absolute; left: calc(50% - ${v.space(dot)} / 2); bottom: ${v.num(part['today dot offset'].size)}px; width: ${v.space(dot)}; height: ${v.space(dot)}; border-radius: var(--rounded-full); background: currentColor; }
.tds-day:disabled, .tds-day[data-state="disabled"], .tds-day[data-state="outside-month"] { cursor: default; }
.tds-day:focus-visible .tds-day-mark { box-shadow: 0 0 0 var(--${ring.replace('border-', 'border-width-')}) var(--border-focus); }
.tds-day[data-edge="first"] .tds-day-band, .tds-day:first-child[data-state*="in-range"] .tds-day-band { border-top-left-radius: var(--rounded-full); border-bottom-left-radius: var(--rounded-full); }
.tds-day[data-edge="last"] .tds-day-band, .tds-day:last-child[data-state*="in-range"] .tds-day-band { border-top-right-radius: var(--rounded-full); border-bottom-right-radius: var(--rounded-full); }
`;
  const hoverable = [];
  for (const r of spec.table('States')) {
    const k = v.slug(r.state);
    const sel = `.tds-day[data-state="${k}"]`;
    const fill = r.fill;
    const markFill = /mark `([^`]+)`/.exec(fill)?.[1] || (/band/.test(fill) ? '' : v.first(fill));
    const bandFill = /band `([^`]+)`/.exec(fill)?.[1];
    const [text, dotColor] = [...r.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
    const selected = /^action\//.test(markFill || '');
    if (k === 'focused') { out += `${sel} .tds-day-mark { box-shadow: 0 0 0 var(--${ring.replace('border-', 'border-width-')}) ${v.color(v.first(r.border))}; }
`; }
    else if (markFill) out += `${sel} .tds-day-mark { background: ${v.color(markFill)}; }
`;
    if (bandFill) {
      const side = /left rounded/.test(fill) ? 'left' : /right rounded/.test(fill) ? 'right' : '';
      out += `${sel} .tds-day-band { background: ${v.color(bandFill)};${side ? ` border-top-${side}-radius: var(--rounded-full); border-bottom-${side}-radius: var(--rounded-full);` : ''} }
`;
    }
    out += `${sel} { color: ${v.color(text)};${selected ? ` font: ${v.text(medium)};` : ''} }
`;
    if (dotColor) out += `${sel} .tds-day-dot { background: ${v.color(dotColor)}; }
`;
    if (!markFill && !bandFill && !/disabled|outside/.test(k)) hoverable.push(k);
  }
  // Live hover: seçili olmayan günlerde işaret Hover rengine geçer.
  const hover = /`([^`]+)`/.exec(spec.table('States').find((r) => r.state === 'Hover').fill)[1];
  out += `${hoverable.map((k) => `.tds-day[data-state="${k}"]:hover .tds-day-mark`).join(', ')}, .tds-day[data-state*="in-range"]:hover .tds-day-mark { background: ${v.color(hover)}; }
`;
  return out;
}
