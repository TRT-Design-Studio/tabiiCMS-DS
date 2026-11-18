// Pagination Item. Gerçek bir düğme: sayfa numarası, Previous / Next (caret ile) veya "…" (tıklanmaz).
// Live: gerçek hover; Selected (aria-current) ve Disabled dışarıdan verilir.
// İç kullanım: page (tıklanınca gidilecek sayfa), current (seçili sayfa).
TDS.register('pagination-item', {
  defaults: { State: 'Live', Label: '1', 'Leading Icon': false, 'Trailing Icon': false, page: '', current: false },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const size = (n) => TDS.num(TDS.spec('pagination-item', 'Parts', 'part', n).size); // 14
    const ellipsis = p.Label === '…';
    const current = p.current || st === 'selected';
    const dis = st === 'disabled' ? ' disabled' : '';
    const attrs = `${st && st !== 'selected' ? ` data-state="${st}"` : ''}${current ? ' aria-current="page"' : ''}${ellipsis ? ' data-ellipsis aria-hidden="true" tabindex="-1"' : ''}${p.page ? ` data-page="${p.page}"` : ''}${dis}`;
    return `<button type="button" class="tds-pagination-item"${attrs}>`
      + (p['Leading Icon'] ? TDS.icon('CaretLeft', size('Leading Icon')) : '')
      + `<span>${TDS.esc(p.Label)}</span>`
      + (p['Trailing Icon'] ? TDS.icon('CaretRight', size('Trailing Icon')) : '')
      + `</button>`;
  },
});
