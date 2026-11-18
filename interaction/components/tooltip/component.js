// Tooltip. Tek başına çizilebilir (playground) ya da bir tetikleyicinin data-tds-tooltip niteliğiyle açılır (core.js).
// Yapı Figma ile aynı: Container (auto layout) → Bubble + Arrow.
TDS.register('tooltip', {
  defaults: { Placement: 'Top', Text: 'Bold', 'Show Shortcut': true, Shortcut: '⌘B' },
  render(p) {
    const sc = p['Show Shortcut'] ? `<span class="tds-tooltip-shortcut">${TDS.esc(p.Shortcut)}</span>` : '';
    return `<div class="tds-tooltip" role="tooltip" data-placement="${TDS.slug(p.Placement)}"><span class="tds-tooltip-bubble"><span>${TDS.esc(p.Text)}</span>${sc}</span><span class="tds-tooltip-arrow" aria-hidden="true"></span></div>`;
  },
});
