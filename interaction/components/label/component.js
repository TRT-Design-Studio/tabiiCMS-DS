// Label. Help ikonu gerçek bir Tooltip açar (data-tds-tooltip, tooltip komponenti).
// İç kullanım: htmlFor (bağlı kontrolün id'si), fill (genişliği doldurur; Form Field'da Meta sağa yaslanır).
TDS.register('label', {
  defaults: { Emphasis: 'Default', State: 'Default', Label: 'Label', Required: false, Help: false, HelpText: 'Help text', 'Show Meta': false, 'Meta Text': 'Optional', 'Show Description': false, Description: 'Description', htmlFor: '', fill: false },
  render(p) {
    const size = TDS.num(TDS.spec('label', 'Sizes')[0]?.icon); // Help 14
    const tag = p.htmlFor ? `label for="${TDS.esc(p.htmlFor)}"` : 'span';
    const help = p.Help ? `<button type="button" class="tds-label-help" aria-label="Help: ${TDS.esc(p.HelpText)}" data-tds-tooltip="${TDS.esc(p.HelpText)}">${TDS.icon('Question', size)}</button>` : '';
    return `<div class="tds-label" data-emphasis="${TDS.slug(p.Emphasis)}" data-state="${TDS.slug(p.State)}"${p.fill ? ' data-fill' : ''}>`
      + `<div class="tds-label-row"><${tag} class="tds-label-text">${TDS.esc(p.Label)}</${tag.split(' ')[0]}>`
      + (p.Required ? '<span class="tds-label-required" aria-hidden="true">*</span>' : '')
      + help
      + (p['Show Meta'] ? `<span class="tds-label-meta">${TDS.esc(p['Meta Text'])}</span>` : '')
      + `</div>`
      + (p['Show Description'] ? `<span class="tds-label-desc">${TDS.esc(p.Description)}</span>` : '')
      + `</div>`;
  },
});
