// Menu. Items slot'u menu-item, menu-group-label ve menu-separator komponentleriyle çizilir.
// Items: [{ Label, Icon, Destructive, ... } | { group: 'Başlık' } | { separator: true }]
TDS.register('menu', {
  defaults: {
    State: 'Default',
    Width: 240,
    Items: [{ Label: 'Menu item' }, { Label: 'Menu item' }, { Label: 'Menu item' }, { Label: 'Menu item' }],
    Title: 'No results for "xyzq"',
    Description: 'Check the spelling or search by Content ID.',
    ErrorTitle: "Couldn't load results",
    ErrorDescription: 'Check your connection and try again.',
    Hint: 'Type at least 2 characters',
    label: 'Options',
  },
  render(p) {
    const st = TDS.slug(p.State);
    let body = '';
    if (st === 'default') {
      body = p.Items.map((it) => it.separator ? TDS.render('menu-separator', {})
        : it.group ? TDS.render('menu-group-label', { Label: it.group })
          : TDS.render('menu-item', { ...it, 'Leading Icon': !!it.Icon, Destructive: it.Destructive ? 'True' : 'False' })).join('');
    } else if (st === 'loading') {
      body = `<div class="tds-menu-status" aria-busy="true" aria-label="Loading">${[208, 166, 125].map((w) => `<span class="tds-menu-skeleton" style="width:${w}px"></span>`).join('')}</div>`;
    } else if (st === 'no-results') {
      body = `<div class="tds-menu-status"><span class="tds-menu-status-title">${TDS.esc(p.Title)}</span><span class="tds-menu-status-desc">${TDS.esc(p.Description)}</span></div>`;
    } else if (st === 'error') {
      const errSize = TDS.num(TDS.spec('menu', 'States', 'state', 'Error', 1).icon); // 20
      body = `<div class="tds-menu-status" role="alert">${TDS.icon('WarningCircle', errSize)}<span class="tds-menu-status-title">${TDS.esc(p.ErrorTitle)}</span><span class="tds-menu-status-desc">${TDS.esc(p.ErrorDescription)}</span>${TDS.render('button', { Variant: 'Secondary', Size: 'Small', Label: 'Try again' })}</div>`;
    } else if (st === 'hint') {
      body = `<div class="tds-menu-status"><span class="tds-menu-hint">${TDS.esc(p.Hint)}</span></div>`;
    }
    return `<div class="tds-menu" role="menu" aria-label="${TDS.esc(p.label)}" data-state="${st}" style="width:${Number(p.Width) || 240}px">${body}</div>`;
  },
});
