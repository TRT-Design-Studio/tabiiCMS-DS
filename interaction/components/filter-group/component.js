// Filter Group. Başlığa tıklayınca açılır / kapanır. Satıra tıklamak seçer; seçilenler üste çıkar, sayaç (Badge Count)
// seçim sayısını gösterir, Clear sadece bu grubu temizler. Arama satırları süzer, sonuç yoksa Menu'nün No Results durumu.
// Options: "Ad:sayı" çiftleri, virgülle. Selected: seçili adlar, virgülle.
TDS.register('filter-group', {
  defaults: { State: 'Expanded', Title: 'Producer', Icon: 'User', 'Show Count': true, 'Show Clear': true, 'Show Search': true, Options: 'Ay Yapım:24, Tims&B:18, OGM Pictures:12, Most Production:9, D Productions:7', Selected: 'Ay Yapım, Tims&B', query: '' },
  render(p) {
    const size = (part) => TDS.num(TDS.spec('filter-group', 'Parts', 'part', part).size); // Icon 16, Chevron 16
    const selected = String(p.Selected).split(',').map((s) => s.trim()).filter(Boolean);
    const all = String(p.Options).split(',').map((s) => s.trim()).filter(Boolean).map((s) => { const [name, count] = s.split(':'); return { name: name.trim(), count: (count || '').trim() }; });
    const q = String(p.query || '').toLowerCase();
    const rows = all.filter((o) => o.name.toLowerCase().includes(q))
      .sort((a, b) => (selected.includes(b.name) ? 1 : 0) - (selected.includes(a.name) ? 1 : 0));
    const open = p.State === 'Expanded';
    const id = `fg-${TDS.slug(p.Title)}`;
    const count = selected.length && p['Show Count'] ? TDS.render('badge-count', { Tone: 'Neutral', Count: String(selected.length) }) : '';
    const clear = selected.length && p['Show Clear'] ? TDS.render('button', { Variant: 'Link', Size: 'XSmall', Label: 'Clear', attrs: `data-fg-clear aria-label="Clear ${TDS.esc(p.Title)} filter"` }) : '';
    const options = rows.length
      ? rows.map((o) => TDS.render('menu-item', { Label: o.name, value: o.name, 'Show Trailing Text': !!o.count, 'Trailing Text': o.count, leading: TDS.render('checkbox', { Checked: selected.includes(o.name) ? 'True' : 'False', label: o.name, static: true }) })
        .replace('role="menuitem" tabindex="-1"', `data-fg-option`)).join('')
      : TDS.render('menu', { State: 'No Results', Title: `No results for "${p.query}"`, Description: '' });
    return `<section class="tds-filter-group" data-state="${open ? 'expanded' : 'collapsed'}" data-tds-comp="filter-group"${TDS.props(p)}>`
      + `<div class="tds-filter-header" data-fg-header><button type="button" class="tds-filter-toggle" aria-expanded="${open}" aria-controls="${id}">`
      + TDS.icon(p.Icon, size('Icon')) + `<span class="tds-filter-title">${TDS.esc(p.Title)}</span>${count}</button>`
      + clear + TDS.icon('CaretUp', size('Chevron'), 'Regular', 'data-part="chevron"') + `</div>`
      + `<div class="tds-filter-body" id="${id}"${open ? '' : ' inert'}><div>`
      + (p['Show Search'] ? `<div class="tds-filter-search">${TDS.render('input', { Size: 'Small', State: 'Live', 'Leading Icon': true, 'Leading Icon Swap': 'MagnifyingGlass', value: p.query, placeholder: `Search ${String(p.Title).toLowerCase()}`, label: `Search ${p.Title}`, attrs: 'data-fg-search' })}</div>` : '')
      + `<div class="tds-filter-options" role="group" aria-label="${TDS.esc(p.Title)} options">${options}</div>`
      + `</div></div></section>`;
  },
});
(function () {
  const root = (el) => el.closest && el.closest('.tds-filter-group[data-tds-comp]');
  document.addEventListener('click', (e) => {
    const g = root(e.target);
    if (!g) return;
    const p = TDS.read(g);
    const sel = String(p.Selected).split(',').map((s) => s.trim()).filter(Boolean);
    if (e.target.closest('[data-fg-clear]')) { TDS.update(g, { Selected: '' }, '.tds-filter-toggle'); return; }
    if (e.target.closest('[data-fg-header]')) { TDS.update(g, { State: p.State === 'Expanded' ? 'Collapsed' : 'Expanded' }, '.tds-filter-toggle'); return; }
    const row = e.target.closest('[data-fg-option]');
    if (row) {
      const name = row.dataset.value;
      const next = sel.includes(name) ? sel.filter((s) => s !== name) : [...sel, name];
      TDS.update(g, { Selected: next.join(', ') }, `[data-fg-option][data-value="${CSS.escape(name)}"] .tds-checkbox`);
    }
  });
  document.addEventListener('input', (e) => {
    if (!e.target.matches || !e.target.matches('[data-fg-search]')) return;
    TDS.update(root(e.target), { query: e.target.value }, '[data-fg-search]');
  });
})();
