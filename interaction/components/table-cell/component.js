// Table Cell. Type: Text, Two Line, Slot (Status), Checkbox. Interactive: False, True (hover), Link (değer bağlantı).
// Live: gerçek hover. Satır sadece Checkbox hücresiyle seçilir (spec); True sadece hover verir. İç kullanım: selected, slot (Slot içeriği HTML'i), width.
TDS.register('table-cell', {
  defaults: { Type: 'Text', Interactive: 'False', State: 'Live', Value: 'Cell value', Overline: 'MOVIE', 'Show Image': false, selected: false, slot: '', width: '', image: '' },
  render(p) {
    const type = TDS.slug(p.Type);
    const inter = type === 'checkbox' ? 'false' : TDS.slug(p.Interactive);
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const selected = p.selected || st === 'selected' || st === 'selected-hover';
    // Hover ve Selected Hover sadece Interactive True / Link'te var (spec → Variants).
    const state = st === 'hover' || st === 'selected-hover' ? (inter === 'false' ? '' : st) : '';
    const value = inter === 'link'
      ? `<a class="tds-table-cell-value" href="#" onclick="return false">${TDS.esc(p.Value)}</a>`
      : `<span class="tds-table-cell-value">${TDS.esc(p.Value)}</span>`;
    let body;
    if (type === 'checkbox') body = TDS.render('checkbox', { Checked: selected ? 'True' : 'False', label: 'Select row', static: true });
    else if (type === 'slot') body = p.slot || TDS.render('status', { Tone: 'Success', Label: 'Published' });
    else if (type === 'two-line') body = `<span class="tds-table-cell-lines"><span class="tds-table-cell-overline">${TDS.esc(p.Overline)}</span>${value}</span>`;
    else body = value;
    // image: görselin adresi. Verilmezse örnek (dummy) bir görsel gelir; Figma'daki yer tutucu PNG'nin renk token'ı yok.
    const src = p.image || `https://picsum.photos/seed/${encodeURIComponent(p.Value)}/170/96`;
    const image = p['Show Image'] && type !== 'checkbox' ? `<img class="tds-table-cell-image" src="${TDS.esc(src)}" alt="" loading="lazy">` : '';
    const attrs = `${inter !== 'false' ? ` data-interactive="${inter}"` : ''}${state ? ` data-state="${state}"` : ''}${selected ? ' aria-selected="true"' : ''}`
      + `${type === 'checkbox' ? ' data-toggle tabindex="0"' : ''}${p.width ? ` style="width:${TDS.esc(p.width)}"` : ''}`;
    return `<div class="tds-table-cell" role="gridcell" data-type="${type}"${attrs}>${image}${body}</div>`;
  },
});
// Tıklayınca veya Space / Enter ile seçim değişir. Tablo içindeyse aynı satırdaki bütün hücreler birlikte değişir.
(function () {
  const toggle = (cell) => {
    const row = cell.closest('[role="row"]');
    const on = cell.getAttribute('aria-selected') !== 'true';
    const cells = row ? row.querySelectorAll('.tds-table-cell') : [cell];
    cells.forEach((c) => {
      if (on) c.setAttribute('aria-selected', 'true'); else c.removeAttribute('aria-selected');
      const box = c.querySelector('.tds-checkbox');
      if (box) box.setAttribute('aria-checked', String(on)), box.innerHTML = on ? TDS.icon('Check', TDS.num(TDS.spec('checkbox', 'Sizes', 'part', 'Mark').size)) : '';
    });
    cell.dispatchEvent(new CustomEvent('tds-row-select', { bubbles: true }));
  };
  document.addEventListener('click', (e) => {
    const cell = e.target.closest('.tds-table-cell[data-toggle]');
    if (cell) toggle(cell);
  });
  document.addEventListener('keydown', (e) => {
    const cell = e.target.closest && e.target.closest('.tds-table-cell[data-toggle]');
    if (cell && (e.key === ' ' || e.key === 'Enter') && e.target === cell) { e.preventDefault(); toggle(cell); }
  });
})();
