// Table Header Cell. Sortable açıkken bir düğmedir: tıklayınca None → Ascending → Descending → None.
// Type Checkbox bütün satırları seçer (tablo içindeyse). İkonlar spec'teki "Sort icon" satırından.
(function () {
  const draw = { CaretUpDown: (s) => TDS.icon('CaretUpDown', s), ArrowUp: (s) => TDS.icon('ArrowUp', s), ArrowDown: (s) => TDS.icon('ArrowDown', s) };
  // "CaretUpDown (None), ArrowUp (Ascending), ArrowDown (Descending)" → { none: 'CaretUpDown', … }
  const sortIcons = () => Object.fromEntries([...String(TDS.spec('table-header-cell', 'States', 'part', 'Sort icon', 1).value).matchAll(/(\w+) \((\w+)\)/g)].map((m) => [m[2].toLowerCase(), m[1]]));
  TDS.register('table-header-cell', {
    defaults: { Type: 'Label', Sort: 'None', State: 'Live', Label: 'COLUMN', Sortable: true, Divider: false, checked: 'False', width: '' },
    render(p) {
      const st = p.State === 'Hover' ? ' data-state="hover"' : '';
      const width = p.width ? ` style="width:${TDS.esc(p.width)}"` : '';
      const divider = p.Divider ? ' data-divider' : '';
      if (TDS.slug(p.Type) === 'checkbox') {
        return `<div class="tds-table-header-cell" role="columnheader" data-type="checkbox"${divider}${width}>${TDS.render('checkbox', { Checked: p.checked, label: 'Select all rows', static: true })}</div>`;
      }
      const sort = TDS.slug(p.Sort);
      const aria = sort === 'none' ? '' : ` aria-sort="${sort}"`;
      if (!p.Sortable) return `<div class="tds-table-header-cell" role="columnheader"${aria}${st}${divider}${width}><span>${TDS.esc(p.Label)}</span></div>`;
      const size = TDS.num(TDS.spec('table-header-cell', 'Sizes', 'part', 'Sort Icon').size); // 12
      const icon = draw[sortIcons()[sort]];
      return `<button type="button" class="tds-table-header-cell" role="columnheader" data-tds-comp="table-header-cell"${TDS.props(p)}${aria}${st}${divider}${width}><span>${TDS.esc(p.Label)}</span>${icon ? icon(size) : ''}</button>`;
    },
  });
  const next = { None: 'Ascending', Ascending: 'Descending', Descending: 'None' };
  document.addEventListener('click', (e) => {
    const cell = e.target.closest('button.tds-table-header-cell');
    if (!cell) return;
    const p = TDS.read(cell);
    // Tablo içindeyse diğer sütunların sıralaması kalkar.
    const row = cell.closest('[role="row"]');
    if (row) row.querySelectorAll('button.tds-table-header-cell[aria-sort]').forEach((o) => { if (o !== cell) TDS.update(o, { Sort: 'None' }); });
    TDS.update(cell, { Sort: next[p.Sort] || 'Ascending' }, null).focus();
  });
})();
