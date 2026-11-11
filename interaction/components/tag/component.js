// Tag. Removable'da X gerçek bir butondur; tıklanınca tag kaybolur (playground'da geri gelir).
TDS.register('tag', {
  defaults: { Type: 'Static', Size: 'Small', State: 'Live', Label: 'Drama', 'Leading Icon': false },
  render(p) {
    const type = TDS.slug(p.Type);
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const state = st ? ` data-state="${st}"` : '';
    const size = TDS.num(TDS.spec('tag', 'Sizes', 'size', p.Size).icon); // Small 12, Medium 14
    const lead = p['Leading Icon'] ? TDS.icon('Plus', size) : '';
    const label = `<span>${TDS.esc(p.Label)}</span>`;
    if (type === 'link') {
      const dis = st === 'disabled' ? ' aria-disabled="true"' : ' href="#"';
      return `<a class="tds-tag" data-type="link" data-size="${TDS.slug(p.Size)}"${state}${dis} onclick="return false">${lead}${label}</a>`;
    }
    const remove = type === 'removable'
      ? `<button type="button" class="tds-tag-remove" aria-label="Remove ${TDS.esc(p.Label)}"${st === 'disabled' ? ' disabled' : ''} onclick="this.closest('.tds-tag').style.visibility='hidden'">${TDS.icon('X', size)}</button>`
      : '';
    return `<span class="tds-tag" data-type="${type}" data-size="${TDS.slug(p.Size)}"${state}>${lead}${label}${remove}</span>`;
  },
});
