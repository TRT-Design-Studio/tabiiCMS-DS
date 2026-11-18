// Tab Segment. role="tab" bir düğme. Selected'ta öndeki ikon Fill olur (Leading Icon Active Swap).
// Live: gerçek hover; Tabs içinde tıklayınca seçilir (tabs/component.js). İç kullanım: selected.
TDS.register('tab-segment', {
  defaults: { State: 'Live', Label: 'Tab', 'Leading Icon': false, 'Leading Icon Swap': 'SquaresFour', 'Trailing Icon': false, 'Trailing Icon Swap': 'Lock', selected: false },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const sel = p.selected || st === 'selected';
    const size = (part) => TDS.num(TDS.spec('tab-segment', 'Sizes', 'part', part).size); // 16, 14
    const lead = p['Leading Icon'] ? TDS.icon(p['Leading Icon Swap'], size('Leading Icon'), sel && (window.TDS_PHOSPHOR.Fill || {})[p['Leading Icon Swap']] ? 'Fill' : 'Regular', 'data-part="leading-icon"') : '';
    const trail = p['Trailing Icon'] ? TDS.icon(p['Trailing Icon Swap'], size('Trailing Icon'), 'Regular', 'data-part="trailing-icon"') : '';
    return `<button type="button" role="tab" class="tds-tab-segment" aria-selected="${sel}" tabindex="${sel ? 0 : -1}"${st === 'hover' ? ' data-state="hover"' : ''}${st === 'disabled' ? ' disabled' : ''}>`
      + `${lead}<span>${TDS.esc(p.Label)}</span>${trail}</button>`;
  },
});
