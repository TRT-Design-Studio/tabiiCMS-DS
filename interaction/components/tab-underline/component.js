// Tab Underline. role="tab" bir düğme. Hover ve Selected'ı 2 px çizgi gösterir; Selected'ta öndeki ikon Fill olur.
// Trailing Icon (Lock) kilitli tab için (Tab Segment ile aynı). Live: gerçek hover. İç kullanım: selected.
TDS.register('tab-underline', {
  defaults: { State: 'Live', Label: 'Tab', 'Leading Icon': false, 'Leading Icon Swap': 'SquaresFour', 'Trailing Icon': false, 'Trailing Icon Swap': 'Lock', selected: false },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const sel = p.selected || st === 'selected';
    const size = (part) => TDS.num(TDS.spec('tab-underline', 'Sizes', 'part', part).size); // 16, 14
    const fill = sel && (window.TDS_PHOSPHOR.Fill || {})[p['Leading Icon Swap']] ? 'Fill' : 'Regular';
    const lead = p['Leading Icon'] ? TDS.icon(p['Leading Icon Swap'], size('Leading Icon'), fill, 'data-part="leading-icon"') : '';
    const trail = p['Trailing Icon'] ? TDS.icon(p['Trailing Icon Swap'], size('Trailing Icon'), 'Regular', 'data-part="trailing-icon"') : '';
    return `<button type="button" role="tab" class="tds-tab-underline" aria-selected="${sel}" tabindex="${sel ? 0 : -1}"${st === 'hover' ? ' data-state="hover"' : ''}${st === 'disabled' ? ' disabled' : ''}>`
      + `${lead}<span>${TDS.esc(p.Label)}</span>${trail}</button>`;
  },
});
