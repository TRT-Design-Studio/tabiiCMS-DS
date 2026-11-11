// Select. Tıklayınca gerçek Menu komponentini açar; seçilen satır değere yazılır (Live).
// Seçenekler: Options (virgülle). İç kullanım: id, width, leading (slot HTML'i), menuWidth, label, describedby.
TDS.defineMenu('select', (trigger) => {
  const current = trigger.dataset.value || '';
  return {
    label: trigger.getAttribute('aria-label') || 'Options',
    Width: Number(trigger.dataset.menuWidth) || trigger.offsetWidth,
    Items: (trigger.dataset.options || '').split(',').map((s) => s.trim()).filter(Boolean)
      .map((l) => ({ Label: l, value: l, Check: l === current })),
  };
});
TDS.register('select', {
  defaults: { Size: 'Medium', State: 'Live', Value: 'Select an option', Options: 'Drama, Comedy, Documentary, Kids', 'Leading Icon': false, 'Leading Icon Swap': 'SquaresFour', 'Leading Content': false, id: '', width: '', leading: '', menuWidth: '', label: '', describedby: '', chosen: '' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const size = TDS.num(TDS.spec('select', 'Parts', 'part', 'Leading Icon').size); // 16
    const chev = TDS.num(TDS.spec('select', 'Parts', 'part', 'Chevron').size); // 16
    const locked = st === 'disabled' || st === 'read-only';
    const menu = locked ? '' : ` data-tds-menu="select" aria-haspopup="menu" aria-expanded="false"`;
    const chosen = p.chosen || '';
    const shown = st ? p.Value : (chosen || p.Value);
    const width = p.width ? ` style="width:${TDS.esc(p.width)}${/^\d+$/.test(p.width) ? 'px' : ''}"` : '';
    return `<button type="button" class="tds-select" data-size="${TDS.slug(p.Size)}"${st ? ` data-state="${st}"` : ''}${chosen && !st ? ' data-filled' : ''}`
      + `${p.id ? ` id="${TDS.esc(p.id)}"` : ''}${menu} data-options="${TDS.esc(p.Options)}" data-value="${TDS.esc(chosen)}"${p.menuWidth ? ` data-menu-width="${p.menuWidth}"` : ''}`
      + `${p.label ? ` aria-label="${TDS.esc(p.label)}"` : ''}${p.describedby ? ` aria-describedby="${TDS.esc(p.describedby)}"` : ''}${st === 'error' ? ' aria-invalid="true"' : ''}${st === 'disabled' ? ' disabled' : ''}${width}>`
      + (p['Leading Icon'] ? TDS.icon(p['Leading Icon Swap'], size, 'Regular', 'data-part="leading-icon"') : '')
      + (p.leading ? `<span class="tds-select-leading">${p.leading}</span>` : '')
      + `<span class="tds-select-value">${TDS.esc(shown)}</span>`
      + TDS.icon('CaretDown', chev, 'Regular', 'data-part="chevron"')
      + `</button>`;
  },
});
// Menüden seçilen değer Select'e yazılır ve Filled görünümüne geçer.
document.addEventListener('tds-menu-select', (e) => {
  const sel = e.target.closest && e.target.closest('.tds-select');
  if (!sel) return;
  sel.dataset.value = e.detail.value;
  sel.querySelector('.tds-select-value').textContent = e.detail.value;
  if (!sel.dataset.state || sel.dataset.state === 'default') { sel.removeAttribute('data-state'); sel.setAttribute('data-filled', ''); }
  sel.dispatchEvent(new CustomEvent('tds-change', { bubbles: true, detail: { value: e.detail.value } }));
});
