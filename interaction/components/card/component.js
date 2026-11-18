// Card. Üstte Card Header (card-header, açık property'leri buradan geçer), Body slot ve isteğe bağlı Footer slot.
// Body Content: Placeholder (Figma'daki yer tutucu yazı), List Items (3 List Item) veya Stat Cards (2 Stat Card).
// Footer açıkken örnek olarak Secondary ve Primary butonlar durur. İç kullanım: body / footer (slot HTML'i).
TDS.register('card', {
  defaults: { Style: 'Default', Header: true, Footer: false, Trailing: 'Action', Title: 'Card title', 'Show Subtitle': true, Subtitle: 'Supporting text', 'Body Content': 'Placeholder', body: '', footer: '', flush: false, width: '' },
  render(p) {
    const header = p.Header ? TDS.render('card-header', { Trailing: p.Trailing, Title: p.Title, 'Show Subtitle': p['Show Subtitle'], Subtitle: p.Subtitle }) : '';
    const content = TDS.slug(p['Body Content']);
    const body = p.body
      || (content === 'list-items' ? ['TrendUp', 'WarningCircle', 'Clock'].map((Icon) => TDS.render('list-item', { Icon })).join('')
        : content === 'stat-cards' ? `<div class="tds-card-row">${TDS.render('stat-card', {})}${TDS.render('stat-card', { Direction: 'Negative', 'Trend Value': '4' })}</div>`
          : '<span class="tds-card-placeholder">Body slot — place content here</span>');
    const footer = p.Footer ? `<div class="tds-card-footer">${p.footer || TDS.render('button', { Variant: 'Secondary', Size: 'Small', Label: 'Cancel' }) + TDS.render('button', { Variant: 'Primary', Size: 'Small', Label: 'Save' })}</div>` : '';
    // flush: tablo gibi kenara kadar uzanan içerikte Body ve Footer padding'i kalkar (Figma'daki Show library örneği).
    return `<section class="tds-card" data-style="${TDS.slug(p.Style)}"${p.flush ? ' data-flush' : ''}${p.width ? ` style="width:${TDS.esc(p.width)}px"` : ''}>${header}<div class="tds-card-body">${body}</div>${footer}</section>`;
  },
});
