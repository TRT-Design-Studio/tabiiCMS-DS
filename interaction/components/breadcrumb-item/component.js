// Breadcrumb Item. Default / Hover / Focused gerçek bir bağlantı, Current tıklanmaz (aria-current="page").
// Collapsed: "More" Icon Button (Ghost, XSmall); tıklayınca gizlenen ara sayfaları gerçek Menu ile açar.
// İç kullanım: hidden (Collapsed'te menüde gösterilecek sayfalar, virgülle).
TDS.defineMenu('breadcrumb-more', (trigger) => ({
  label: 'Hidden pages',
  Width: 200,
  Items: (trigger.dataset.hidden || '').split(',').map((s) => s.trim()).filter(Boolean).map((l) => ({ Label: l })),
}));
TDS.register('breadcrumb-item', {
  defaults: { State: 'Live', Label: 'Page', Icon: false, Separator: true, hidden: 'Seasons, Episodes' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const part = (n) => TDS.num(TDS.spec('breadcrumb-item', 'Parts', 'part', n).size); // Icon 16, Separator 14
    const sep = p.Separator ? TDS.icon('CaretRight', part('Separator'), 'Regular', 'data-part="separator"') : '';
    let body;
    if (st === 'collapsed') {
      body = TDS.render('icon-button', { Variant: 'Ghost', Size: 'XSmall', Icon: 'DotsThree', label: 'Show hidden pages', menu: 'breadcrumb-more' })
        .replace('<button', `<button data-hidden="${TDS.esc(p.hidden)}"`);
    } else {
      const icon = p.Icon ? TDS.icon('House', part('Icon'), 'Regular', 'data-part="icon"') : '';
      const inner = `${icon}<span>${TDS.esc(p.Label)}</span>`;
      body = st === 'current'
        ? `<span class="tds-breadcrumb-link" aria-current="page">${inner}</span>`
        : `<a class="tds-breadcrumb-link" href="#" onclick="return false">${inner}</a>`;
    }
    return `<li class="tds-breadcrumb-item"${st ? ` data-state="${st}"` : ''}>${body}${sep}</li>`;
  },
});
