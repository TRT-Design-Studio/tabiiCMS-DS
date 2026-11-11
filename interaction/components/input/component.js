// Input. Gerçek bir <input>: yazılabilir, Trailing Icon (X) alanı temizler, Counter yazdıkça sayar.
// State=Live: boş alan, Value placeholder olarak görünür; yazınca Filled, odakta Focused olur.
// Sabit state'lerde Default placeholder'ı, diğerleri Value'yu değer olarak gösterir.
// İç kullanım (diğer komponentler): id, width, align ('center'), leading / trailing (slot HTML'i),
// placeholder, value, inputmode, describedby, invalid, attrs.
TDS.register('input', {
  defaults: { Size: 'Medium', State: 'Live', Value: 'Placeholder text', 'Show Value': true, 'Leading Icon': false, 'Leading Icon Swap': 'MagnifyingGlass', 'Trailing Icon': false, 'Trailing Icon Swap': 'X', Counter: false, 'Counter Text': '0/80', id: '', width: '', align: '', leading: '', trailing: '', placeholder: '', value: null, inputmode: '', describedby: '', label: '', attrs: '' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const size = (part) => TDS.num(TDS.spec('input', 'Parts', 'part', part).size); // 16
    const empty = st === 'default';
    const value = p.value != null ? p.value : (st && !empty ? p.Value : '');
    const placeholder = p.placeholder || (empty || !st ? p.Value : '');
    const dis = st === 'disabled' ? ' disabled' : '';
    const ro = st === 'read-only' ? ' readonly' : '';
    const max = TDS.num(String(p['Counter Text']).split('/')[1]);
    const count = p.Counter ? `<span class="tds-input-counter" aria-live="polite">${TDS.esc(st ? p['Counter Text'] : `${value.length}/${max || ''}`)}</span>` : '';
    const trailingIcon = !p['Trailing Icon'] ? ''
      : p['Trailing Icon Swap'] === 'X'
        ? `<button type="button" class="tds-input-clear" data-tds-clear aria-label="Clear"${dis || ro ? ' disabled' : ''}>${TDS.icon('X', size('Trailing Icon'), 'Regular', 'data-part="trailing-icon"')}</button>`
        : TDS.icon(p['Trailing Icon Swap'], size('Trailing Icon'), 'Regular', 'data-part="trailing-icon"');
    const aria = [p.label ? ` aria-label="${TDS.esc(p.label)}"` : '', p.describedby ? ` aria-describedby="${TDS.esc(p.describedby)}"` : '', st === 'error' || p.invalid ? ' aria-invalid="true"' : ''].join('');
    const field = p['Show Value'] ? `<input class="tds-input-field" type="text"${p.id ? ` id="${TDS.esc(p.id)}"` : ''} value="${TDS.esc(value)}" placeholder="${TDS.esc(placeholder)}"${p.inputmode ? ` inputmode="${p.inputmode}"` : ''}${max && p.Counter ? ` data-max="${max}"` : ''}${aria}${dis}${ro}${p.attrs ? ' ' + p.attrs : ''}>` : '';
    const width = p.width ? ` style="width:${TDS.esc(p.width)}${/^\d+$/.test(p.width) ? 'px' : ''}"` : '';
    return `<label class="tds-input" data-size="${TDS.slug(p.Size)}"${st ? ` data-state="${st}"` : ''}${p.align ? ` data-align="${p.align}"` : ''}${width}>`
      + (p['Leading Icon'] ? TDS.icon(p['Leading Icon Swap'], size('Leading Icon'), 'Regular', 'data-part="leading-icon"') : '')
      + (p.leading ? `<span class="tds-input-leading">${p.leading}</span>` : '')
      + field
      + count
      + (st === 'success' ? TDS.icon('CheckCircle', size('Status Icon'), 'Regular', 'data-part="status-icon"') : '')
      + trailingIcon
      + (p.trailing ? `<span class="tds-input-trailing">${p.trailing}</span>` : '')
      + `</label>`;
  },
});

// Temizle düğmesi ve canlı sayaç.
document.addEventListener('click', (e) => {
  const clear = e.target.closest('[data-tds-clear]');
  if (!clear) return;
  e.preventDefault();
  const field = clear.closest('.tds-input').querySelector('.tds-input-field');
  if (!field) return;
  field.value = '';
  field.dispatchEvent(new Event('input', { bubbles: true }));
  field.focus();
});
document.addEventListener('input', (e) => {
  const field = e.target.closest && e.target.closest('.tds-input-field[data-max]');
  if (!field) return;
  const c = field.closest('.tds-input').querySelector('.tds-input-counter');
  if (c) c.textContent = `${field.value.length}/${field.dataset.max}`;
});
