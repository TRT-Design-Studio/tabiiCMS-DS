// Checkbox. role="checkbox" bir düğme; tıklayınca veya Space ile değişir. Indeterminate'ten tıklayınca True olur.
// İç kullanım: label (erişilebilir ad), id, static (tıklanınca kendisi değişmez; Filter Group satırı yönetir).
TDS.register('checkbox', {
  defaults: { Checked: 'False', State: 'Live', label: 'Checkbox', id: '', static: false },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const aria = { False: 'false', True: 'true', Indeterminate: 'mixed' }[p.Checked] || 'false';
    const size = TDS.num(TDS.spec('checkbox', 'Sizes', 'part', 'Mark').size); // 12
    const mark = aria === 'true' ? TDS.icon('Check', size) : aria === 'mixed' ? TDS.icon('Minus', size) : '';
    return `<button type="button" role="checkbox" class="tds-checkbox" aria-checked="${aria}"${p.label ? ` aria-label="${TDS.esc(p.label)}"` : ''}${p.id ? ` id="${TDS.esc(p.id)}"` : ''}`
      + `${st ? ` data-state="${st}"` : ''}${st === 'disabled' ? ' disabled' : ''}${p.static ? ' data-static' : ''}${st === 'focused' ? ' tabindex="0"' : ''}>${mark}</button>`;
  },
});
TDS.setChecked = (box, checked) => {
  const size = TDS.num(TDS.spec('checkbox', 'Sizes', 'part', 'Mark').size);
  box.setAttribute('aria-checked', checked ? 'true' : 'false');
  box.innerHTML = checked ? TDS.icon('Check', size) : '';
};
document.addEventListener('click', (e) => {
  const box = e.target.closest('.tds-checkbox');
  if (!box || box.disabled || box.hasAttribute('data-static') || box.dataset.state) return;
  TDS.setChecked(box, box.getAttribute('aria-checked') !== 'true');
});
