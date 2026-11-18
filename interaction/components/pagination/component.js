// Pagination. Durumlu: sayfaya tıklayınca, Previous / Next ile, "Go to" alanına yazıp Enter'a basınca
// veya Mobile'da Select'ten seçince sayfa değişir. İlk sayfada Previous, son sayfada Next Disabled olur.
// Per page düğmesi gerçek Menu açar (10, 20, 50, 100). Sayfa sayısı Total Items ÷ Per Page (yukarı yuvarlanır).
// Show Total kapalıysa "Total: …" yazısı gizlenir.
TDS.defineMenu('pagination-per-page', (trigger) => ({
  label: 'Rows per page',
  Width: 120,
  Items: ['10', '20', '50', '100'].map((l) => ({ Label: l, value: l, Check: l === trigger.dataset.perPage })),
}));
TDS.register('pagination', {
  defaults: { Size: 'Desktop', 'Total Items': '958', 'Show Total': true, 'Show Per Page': true, 'Show Go To': true, Page: 3, 'Per Page': '10' },
  render(p) {
    const count = Math.max(0, Math.round(Number(p['Total Items'])) || 0);
    const last = Math.max(1, Math.ceil(count / (Number(p['Per Page']) || 10)));
    const page = Math.min(last, Math.max(1, Number(p.Page) || 1));
    const item = (props) => TDS.render('pagination-item', props);
    const total = p['Show Total'] ? `<span class="tds-pagination-total">Total: ${count}</span>` : '';
    const props = TDS.props({ ...p, Page: page, Pages: last });
    if (TDS.slug(p.Size) === 'mobile') {
      const pages = Array.from({ length: last }, (_, i) => String(i + 1)).join(', ');
      return `<nav class="tds-pagination" data-size="mobile" aria-label="Pagination" data-tds-comp="pagination"${props}>${total}`
        + `<div class="tds-pagination-group tds-pagination-mobile">`
        + TDS.render('icon-button', { Variant: 'Secondary', Size: 'Small', Icon: 'CaretLeft', label: 'Previous page', State: page <= 1 ? 'Disabled' : 'Live' }).replace('<button', `<button data-page="${page - 1}"`)
        + TDS.render('select', { Size: 'Small', Value: String(page), chosen: String(page), Options: pages, label: 'Page', menuWidth: '96' })
        + TDS.render('icon-button', { Variant: 'Secondary', Size: 'Small', Icon: 'CaretRight', label: 'Next page', State: page >= last ? 'Disabled' : 'Live' }).replace('<button', `<button data-page="${page + 1}"`)
        + `</div></nav>`;
    }
    // Görünen sayfalar: Figma'daki gibi 11 hücre (Previous, sayfalar, …, Next).
    let nums;
    if (last <= 10) nums = Array.from({ length: last }, (_, i) => i + 1);
    else if (page <= 6) nums = [1, 2, 3, 4, 5, 6, 7, 8, '…', last];
    else if (page >= last - 5) nums = [1, '…', ...Array.from({ length: 8 }, (_, i) => last - 7 + i)];
    else nums = [1, '…', page - 2, page - 1, page, page + 1, page + 2, '…', last];
    const cells = [
      item({ Label: 'Previous', 'Leading Icon': true, State: page <= 1 ? 'Disabled' : 'Live', page: page - 1 }),
      ...nums.map((n) => (n === '…' ? item({ Label: '…' }) : item({ Label: String(n), page: n, current: n === page }))),
      item({ Label: 'Next', 'Trailing Icon': true, State: page >= last ? 'Disabled' : 'Live', page: page + 1 }),
    ];
    const per = p['Show Per Page'] ? `<div class="tds-pagination-group">${TDS.render('button', { Variant: 'Secondary', Size: 'Small', Label: p['Per Page'], 'Icon Right': true, iconRight: 'CaretDown', menu: 'pagination-per-page', attrs: `data-per-page="${TDS.esc(p['Per Page'])}" aria-label="Rows per page: ${TDS.esc(p['Per Page'])}"` })}<span>per page</span></div>` : '';
    const go = p['Show Go To'] ? `<label class="tds-pagination-group tds-pagination-goto"><span>Go to</span>${TDS.render('input', { Size: 'Small', align: 'center', placeholder: '123', value: '', inputmode: 'numeric', label: 'Go to page', attrs: 'data-goto' })}<span>Page</span></label>` : '';
    return `<nav class="tds-pagination" data-size="desktop" aria-label="Pagination" data-tds-comp="pagination"${props}>${total}${per}`
      + `<div class="tds-pagination-items">${cells.join('')}</div>${go}</nav>`;
  },
});
(function () {
  const go = (root, n, focus) => { const p = TDS.read(root); TDS.update(root, { Page: Math.min(p.Pages, Math.max(1, n)) }, focus); };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.tds-pagination [data-page]');
    if (!b || b.disabled || b.hasAttribute('data-ellipsis')) return;
    go(b.closest('.tds-pagination'), Number(b.dataset.page), '[aria-current="page"]');
  });
  document.addEventListener('keydown', (e) => {
    const f = e.target.closest && e.target.closest('.tds-pagination [data-goto]');
    if (!f || e.key !== 'Enter') return;
    const n = Math.round(Number(f.value));
    if (Number.isFinite(n) && n > 0) go(f.closest('.tds-pagination'), n, '[data-goto]');
  });
  document.addEventListener('tds-menu-select', (e) => {
    const root = e.target.closest && e.target.closest('.tds-pagination');
    if (!root) return;
    if (e.target.closest('[data-per-page]')) TDS.update(root, { 'Per Page': e.detail.value, Page: 1 }, '[data-per-page]');
    else if (e.target.closest('.tds-select')) go(root, Number(e.detail.value), '.tds-select');
  });
})();
