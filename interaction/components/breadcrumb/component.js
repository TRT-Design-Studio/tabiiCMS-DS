// Breadcrumb. Satırlar breadcrumb-item ile, Back düğmesi icon-button (Secondary, XSmall, CaretLeft) ile çizilir.
// Items: Item 1 › (Show Middle) Item 2 › Current. Collapsed: Item 1 › More › Item 2 › Current; More gizli sayfaları açar.
// Slot: Figma'daki serbest slot; burada Slot Items (virgülle) ile istediğin kadar sayfa.
TDS.register('breadcrumb', {
  defaults: { Content: 'Items', 'Show Back': false, 'Show Middle': true, 'Item 1': 'Show Dashboard', 'Item 2': 'Shows', Current: 'Create Show', 'Slot Items': 'Shows, Drama, Season 1, Episode 4' },
  render(p) {
    const it = (Label, extra = {}) => TDS.render('breadcrumb-item', { Label, ...extra });
    let items = [];
    const content = TDS.slug(p.Content);
    if (content === 'slot') {
      const all = String(p['Slot Items']).split(',').map((s) => s.trim()).filter(Boolean);
      items = all.map((l, i) => (i === all.length - 1 ? it(l, { State: 'Current', Separator: false }) : it(l)));
    } else {
      items.push(it(p['Item 1']));
      if (content === 'collapsed') items.push(TDS.render('breadcrumb-item', { State: 'Collapsed' }));
      if (content === 'collapsed' || p['Show Middle']) items.push(it(p['Item 2']));
      items.push(it(p.Current, { State: 'Current', Separator: false }));
    }
    const back = p['Show Back'] ? `<li class="tds-breadcrumb-back">${TDS.render('icon-button', { Variant: 'Secondary', Size: 'XSmall', Icon: 'CaretLeft', label: 'Back' })}</li>` : '';
    return `<nav class="tds-breadcrumb" aria-label="Breadcrumb"><ol>${back}${items.join('')}</ol></nav>`;
  },
});
