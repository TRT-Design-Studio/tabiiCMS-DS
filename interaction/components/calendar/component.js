// Calendar. Hafta pazartesi başlar, ızgara her zaman 6 satır (spec). Bugün gerçek tarihten gelir.
// Live: oklar ve Month / Year menüleri ayı değiştirir; güne tıklamak seçer. Selection=Range'de ilk tık başlangıç,
// ikinci tık bitiş olur. Oklar günler arasında gezer, Enter seçer, PageUp / PageDown ay değiştirir.
const calIso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const calParse = (s) => { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, m - 1, d); };
TDS.register('calendar', {
  defaults: { Type: 'Date', Selection: 'Single', view: '', start: '', end: '', focus: '', Time: '10 : 35', Zone: 'GMT+3' },
  render(p) {
    const today = calIso(new Date());
    const view = p.view ? calParse(p.view + '-01') : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const y = view.getFullYear(), m = view.getMonth();
    const first = new Date(y, m, 1);
    const offset = (first.getDay() + 6) % 7; // pazartesi = 0
    const cursor = new Date(y, m, 1 - offset);
    const range = p.Selection === 'Range' && p.start && p.end;
    const focusDay = p.focus || p.start || (today.startsWith(`${y}-${String(m + 1).padStart(2, '0')}`) ? today : calIso(first));
    const weeks = [];
    for (let w = 0; w < 6; w++) {
      const cells = [];
      for (let d = 0; d < 7; d++) {
        const iso = calIso(cursor);
        const inMonth = cursor.getMonth() === m;
        const isToday = iso === today;
        let state = 'Default';
        if (!inMonth) state = 'Outside Month';
        else if (range && iso === p.start) state = 'Range Start';
        else if (range && iso === p.end) state = 'Range End';
        else if (range && iso > p.start && iso < p.end) state = isToday ? 'Today In Range' : 'In Range';
        else if (!range && iso === p.start) state = isToday ? 'Today Selected' : 'Selected';
        else if (isToday) state = 'Today';
        const label = cursor.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        cells.push(TDS.render('calendar-day', { State: state, Day: String(cursor.getDate()), date: iso, label, tab: inMonth && iso === focusDay }));
        cursor.setDate(cursor.getDate() + 1);
      }
      weeks.push(`<div class="tds-calendar-week" role="row">${cells.join('')}</div>`);
    }
    const header = TDS.render('calendar-header', { Month: CAL_MONTHS[m], Year: String(y) });
    const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const full = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const time = p.Type === 'Date & Time'
      ? `<div class="tds-calendar-time"><div class="tds-calendar-divider" role="separator"></div><div class="tds-calendar-footer">`
        + `<div class="tds-calendar-time-area">${TDS.render('input', { Size: 'Small', State: 'Live', value: p.Time, 'Leading Icon': true, 'Leading Icon Swap': 'Clock', label: 'Time' })}<span class="tds-calendar-zone">${TDS.esc(p.Zone)}</span></div>`
        + TDS.render('button', { Variant: 'Tertiary', Size: 'Small', Label: 'Done', attrs: 'data-cal-done' })
        + `</div></div>`
      : '';
    return `<div class="tds-calendar" role="dialog" aria-label="Choose date" data-tds-comp="calendar"${TDS.props({ ...p, view: `${y}-${String(m + 1).padStart(2, '0')}` })}>`
      + `<div class="tds-calendar-grid">${header}`
      + `<div class="tds-calendar-weekdays" role="row">${weekdays.map((d, i) => `<abbr title="${full[i]}" role="columnheader">${d}</abbr>`).join('')}</div>`
      + `<div class="tds-calendar-days" role="grid" aria-label="${CAL_MONTHS[m]} ${y}">${weeks.join('')}</div></div>`
      + time + `</div>`;
  },
});

(function () {
  const shift = (view, n) => { const d = calParse(view + '-01'); d.setMonth(d.getMonth() + n); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; };
  document.addEventListener('click', (e) => {
    const cal = e.target.closest('.tds-calendar[data-tds-comp]');
    if (!cal) return;
    const p = TDS.read(cal);
    const nav = e.target.closest('[data-cal-nav]');
    if (nav && !nav.disabled) { TDS.update(cal, { view: shift(p.view, Number(nav.dataset.calNav)), focus: '' }, `[data-cal-nav="${nav.dataset.calNav}"]`); return; }
    const day = e.target.closest('.tds-day[data-date]');
    if (day && !day.disabled) {
      const d = day.dataset.date;
      let patch;
      if (p.Selection === 'Range') {
        if (!p.start || p.end || d < p.start) patch = { start: d, end: '' };
        else patch = { end: d };
      } else patch = { start: d, end: '' };
      TDS.update(cal, { ...patch, focus: d }, `.tds-day[data-date="${d}"]`);
    }
  });
  document.addEventListener('tds-menu-select', (e) => {
    const cal = e.target.closest && e.target.closest('.tds-calendar[data-tds-comp]');
    if (!cal) return;
    const p = TDS.read(cal);
    const [y, m] = p.view.split('-');
    const isMonth = e.target.dataset.tdsMenu === 'calendar-month';
    const view = isMonth ? `${y}-${String(Number(e.detail.value) + 1).padStart(2, '0')}` : `${e.detail.value}-${m}`;
    TDS.update(cal, { view, focus: '' }, `[data-tds-menu="${e.target.dataset.tdsMenu}"]`);
  });
  // Klavye: oklar gün / hafta, PageUp / PageDown ay.
  document.addEventListener('keydown', (e) => {
    const day = e.target.closest && e.target.closest('.tds-calendar .tds-day[data-date]');
    if (!day || document.querySelector('.tds-popover')) return;
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
    const months = { PageUp: -1, PageDown: 1 }[e.key];
    if (!step && !months) return;
    e.preventDefault();
    const cal = day.closest('.tds-calendar');
    const d = calParse(day.dataset.date);
    if (step) d.setDate(d.getDate() + step); else d.setMonth(d.getMonth() + months);
    const iso = calIso(d);
    const target = cal.querySelector(`.tds-day[data-date="${iso}"]:not([data-state="outside-month"])`);
    if (target) { cal.querySelectorAll('.tds-day[tabindex="0"]').forEach((b) => b.setAttribute('tabindex', '-1')); target.setAttribute('tabindex', '0'); target.focus(); return; }
    TDS.update(cal, { view: iso.slice(0, 7), focus: iso }, `.tds-day[data-date="${iso}"]`);
  });
})();
