// Menu Group Label.
TDS.register('menu-group-label', {
  defaults: { Label: 'Group' },
  render(p) { return `<div class="tds-menu-group-label" role="presentation">${TDS.esc(p.Label)}</div>`; },
});
