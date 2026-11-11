// Calendar Header. Oklar ayı değiştirir; Month ve Year gerçek Menu açar (aylar / yıllar).
// Calendar içinde kullanılınca seçimler takvimi günceller (calendar/component.js).
const CAL_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
TDS.defineMenu('calendar-month', (trigger) => ({
  label: 'Month', Width: 160,
  Items: CAL_MONTHS.map((m, i) => ({ Label: m, value: String(i), Check: String(i) === trigger.dataset.current })),
}));
TDS.defineMenu('calendar-year', (trigger) => {
  const y = Number(trigger.dataset.current);
  return { label: 'Year', Width: 120, Items: Array.from({ length: 7 }, (_, i) => y - 3 + i).map((n) => ({ Label: String(n), value: String(n), Check: n === y })) };
});
TDS.register('calendar-header', {
  defaults: { Month: 'October', Year: '2026', prevDisabled: false, nextDisabled: false },
  render(p) {
    const mi = Math.max(0, CAL_MONTHS.indexOf(p.Month));
    const arrow = (dir, icon, label, off) => TDS.render('icon-button', { Variant: 'Ghost', Shape: 'Square', Size: 'XSmall', Icon: icon, label, State: off ? 'Disabled' : 'Live' }).replace('<button', `<button data-cal-nav="${dir}"`);
    const title = (text, menu, current, label) => TDS.render('button', { Variant: 'Link', Size: 'XSmall', Label: text, 'Icon Right': true, iconRight: 'CaretDown', menu, attrs: `data-current="${current}" aria-label="${label}: ${TDS.esc(text)}"` });
    return `<div class="tds-calendar-header">`
      + arrow(-1, 'CaretLeft', 'Previous month', p.prevDisabled)
      + `<div class="tds-calendar-title" aria-live="polite">${title(CAL_MONTHS[mi], 'calendar-month', mi, 'Month')}${title(String(p.Year), 'calendar-year', p.Year, 'Year')}</div>`
      + arrow(1, 'CaretRight', 'Next month', p.nextDisabled)
      + `</div>`;
  },
});
