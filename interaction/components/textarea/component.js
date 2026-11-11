// Textarea. Gerçek bir <textarea>. Counter açıkken yazdıkça sayar ("0/500"), sınırı aşınca Error rengine geçer.
// State=Live: boş alan, Value placeholder olarak görünür. İç kullanım: id, describedby, width.
TDS.register('textarea', {
  defaults: { State: 'Live', Value: 'Write text here ...', Counter: false, 'Counter Text': '0/500', id: '', describedby: '', width: '' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const empty = !st || st === 'default';
    const value = empty ? '' : p.Value;
    const max = TDS.num(String(p['Counter Text']).split('/')[1]);
    const counter = p.Counter ? `<div class="tds-textarea-footer"><span class="tds-textarea-counter" aria-live="polite">${TDS.esc(st ? p['Counter Text'] : `0/${max || ''}`)}</span></div>` : '';
    const width = p.width ? ` style="width:${TDS.esc(p.width)}${/^\d+$/.test(p.width) ? 'px' : ''}"` : '';
    return `<label class="tds-textarea"${st ? ` data-state="${st}"` : ''}${width}>`
      + `<textarea class="tds-textarea-field"${p.id ? ` id="${TDS.esc(p.id)}"` : ''} placeholder="${TDS.esc(empty ? p.Value : '')}"${max && p.Counter ? ` data-max="${max}"` : ''}`
      + `${p.describedby ? ` aria-describedby="${TDS.esc(p.describedby)}"` : ''}${st === 'error' ? ' aria-invalid="true"' : ''}${st === 'disabled' ? ' disabled' : ''}${st === 'read-only' ? ' readonly' : ''}>${TDS.esc(value)}</textarea>`
      + counter + `</label>`;
  },
});
document.addEventListener('input', (e) => {
  const field = e.target.closest && e.target.closest('.tds-textarea-field[data-max]');
  if (!field) return;
  const box = field.closest('.tds-textarea');
  const max = Number(field.dataset.max);
  box.querySelector('.tds-textarea-counter').textContent = `${field.value.length}/${max}`;
  box.toggleAttribute('data-over', field.value.length > max);
});
