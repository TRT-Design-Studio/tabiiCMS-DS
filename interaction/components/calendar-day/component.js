// Calendar Day. 32 × 32 hücre, 28'lik yuvarlak işaret, aralık bandı ve bugün noktası.
// İç kullanım (Calendar): date (YYYY-MM-DD), label (ekran okuyucu için tam tarih), tab (klavye sırasındaki gün).
TDS.register('calendar-day', {
  defaults: { State: 'Default', 'Week Edge': 'None', Day: '15', date: '', label: '', tab: null },
  render(p) {
    const st = TDS.slug(p.State);
    const edge = TDS.slug(p['Week Edge']);
    const today = /today/.test(st);
    const selected = /selected|range-start|range-end/.test(st);
    const off = st === 'disabled' || st === 'outside-month';
    return `<button type="button" class="tds-day" data-state="${st}"${edge !== 'none' ? ` data-edge="${edge}"` : ''}${p.date ? ` data-date="${p.date}"` : ''}`
      + `${p.label ? ` aria-label="${TDS.esc(p.label)}"` : ''}${selected ? ' aria-pressed="true"' : ''}${today ? ' aria-current="date"' : ''}${off ? ' disabled' : ''} ${p.tab == null ? '' : ` tabindex="${p.tab ? 0 : -1}"`}>`
      + `<span class="tds-day-band" aria-hidden="true"></span><span class="tds-day-mark">${TDS.esc(p.Day)}${today ? '<span class="tds-day-dot" aria-hidden="true"></span>' : ''}</span></button>`;
  },
});
