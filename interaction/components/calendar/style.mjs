// components/calendar/spec.md → CSS. Sizes (Part) ve States (Part) tablolarından üretilir.
// Günler calendar-day, başlık calendar-header, saat alanı input ve button komponentleri.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.split(' (')[0].toLowerCase(), r]));
  const look = Object.fromEntries(spec.table('States', 0).map((r) => [r.part.toLowerCase(), r]));
  const c = size.container;
  const width = v.num(c.size);
  const grid = size.calendar;
  const tok = (cell) => [...String(cell).matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const [, cellW, weekH] = /(\d+) × (\d+), (\d+) high/.exec(size.weekdays.size).slice(1).map(Number); // 7 × 32, 24 high
  const timeW = v.num(size['time input'].size);
  return `.tds-calendar { box-sizing: border-box; width: ${width}px; display: flex; flex-direction: column; border-radius: ${v.radius(v.first(c.radius))};
  background: ${v.color(v.first(look.container.fill))}; box-shadow: inset 0 0 0 1px ${v.color(v.first(look.container.border))}, ${v.shadow(tok(look.container.effect)[0])}; }
.tds-calendar-grid { display: flex; flex-direction: column; padding: ${v.space(v.first(grid.padding))}; gap: ${v.space(v.first(grid.gap))}; }
.tds-calendar-weekdays, .tds-calendar-week { display: grid; grid-template-columns: repeat(7, ${cellW}px); }
.tds-calendar-weekdays { height: ${weekH}px; align-items: center; }
.tds-calendar-weekdays abbr { text-align: center; text-decoration: none; font: ${v.text(v.first(size.weekdays.text))}; color: ${v.color(v.first(look.weekday.text))}; }
.tds-calendar-days { display: flex; flex-direction: column; }
.tds-calendar-time { display: flex; flex-direction: column; gap: ${v.space(v.first(size.time.gap))}; padding-bottom: ${v.space(v.first(size.time.padding))}; }
.tds-calendar-divider { height: 1px; background: ${v.color(v.first(look.divider.fill))}; }
.tds-calendar-footer { display: flex; align-items: center; justify-content: space-between; min-height: ${v.num(size.footer.size)}px; padding: 0 ${v.space(v.first(size.footer.padding))}; gap: ${v.space(v.first(size.footer.gap))}; }
.tds-calendar-time-area { display: flex; align-items: center; gap: ${v.space(v.first(size['time input'].gap))}; }
.tds-calendar-time-area > .tds-input { width: ${timeW}px; }
.tds-calendar-zone { font: ${v.text(v.first(size.footer.text))}; color: ${v.color(v.first(look['time zone'].text))}; }
`;
}
