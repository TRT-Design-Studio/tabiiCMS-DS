// Tag Input. Yazılan değer Enter veya virgülle Tag olur (tag komponenti, Small). X ve boş alanda Backspace siler.
// Aynı değer tekrar yazılırsa alan Error görünümüne geçer (spec). Read-only'de Static, Disabled'da Disabled tag'ler.
TDS.register('tag-input', {
  defaults: { Size: 'Medium', State: 'Live', Placeholder: 'Add tags…', Tags: 'Drama, Comedy', invalid: false, draft: '' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const tags = st === 'default' ? [] : String(p.Tags).split(',').map((s) => s.trim()).filter(Boolean);
    // States → Tags sütunu: Read-only Static · Read-only, Disabled Removable · Disabled, diğerleri Removable.
    const tagProps = st === 'read-only' ? { Type: 'Static', State: 'Read-only' } : st === 'disabled' ? { Type: 'Removable', State: 'Disabled' } : { Type: 'Removable', State: 'Live' };
    const live = !st;
    const locked = st === 'disabled' || st === 'read-only';
    return `<div class="tds-tag-input" data-size="${TDS.slug(p.Size)}"${st ? ` data-state="${st}"` : ''}${p.invalid ? ' data-invalid' : ''} role="group" aria-label="Tags"${live ? ` data-tds-comp="tag-input"${TDS.props({ ...p, invalid: false })}` : ''}>`
      + tags.map((t, i) => TDS.render('tag', { ...tagProps, Size: 'Small', Label: t }).replace('class="tds-tag"', `class="tds-tag" data-index="${i}"`)).join('')
      + (locked && tags.length ? '' : `<input class="tds-tag-input-field" type="text" value="${TDS.esc(p.draft || '')}" placeholder="${tags.length ? '' : TDS.esc(p.Placeholder)}" aria-label="Add tag"${p.invalid ? ' aria-invalid="true"' : ''}${st === 'disabled' ? ' disabled' : ''}${st === 'read-only' ? ' readonly' : ''}>`)
      + `</div>`;
  },
});
(function () {
  const root = (el) => el.closest && el.closest('.tds-tag-input[data-tds-comp]');
  const list = (p) => String(p.Tags).split(',').map((s) => s.trim()).filter(Boolean);
  const add = (box, value) => {
    const p = TDS.read(box);
    const v = value.trim();
    if (!v) return;
    const tags = list(p);
    if (tags.some((t) => t.toLowerCase() === v.toLowerCase())) { TDS.update(box, { invalid: true, draft: v }, '.tds-tag-input-field'); return; }
    TDS.update(box, { Tags: [...tags, v].join(', '), draft: '' }, '.tds-tag-input-field');
  };
  document.addEventListener('keydown', (e) => {
    const box = root(e.target);
    if (!box || !e.target.matches('.tds-tag-input-field')) return;
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(box, e.target.value); }
    else if (e.key === 'Backspace' && !e.target.value) {
      const p = TDS.read(box);
      const tags = list(p);
      if (tags.length) { e.preventDefault(); TDS.update(box, { Tags: tags.slice(0, -1).join(', ') }, '.tds-tag-input-field'); }
    }
  });
  document.addEventListener('input', (e) => {
    const box = root(e.target);
    if (!box) return;
    // Error, yazmaya devam edince kalkar.
    if (box.hasAttribute('data-invalid')) { box.removeAttribute('data-invalid'); e.target.removeAttribute('aria-invalid'); }
  });
  document.addEventListener('click', (e) => {
    const box = root(e.target);
    if (!box) return;
    const rm = e.target.closest('.tds-tag-remove');
    if (rm && !rm.disabled) {
      e.stopPropagation();
      const i = Number(rm.closest('.tds-tag').dataset.index);
      const tags = list(TDS.read(box));
      tags.splice(i, 1);
      TDS.update(box, { Tags: tags.join(', ') }, '.tds-tag-input-field');
      return;
    }
    if (!e.target.closest('.tds-tag')) box.querySelector('.tds-tag-input-field')?.focus();
  }, true);
})();
