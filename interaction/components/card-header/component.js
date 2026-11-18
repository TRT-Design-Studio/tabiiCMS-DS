// Card Header. Başlık + alt başlık; Trailing: None, Badge (Status Success Small), Action (Button Secondary XSmall),
// Slot - H (sağda serbest içerik; örnek: Interactive Status), Slot - V (başlığın altında; Figma'daki gibi arama + Filters, Sort, Bulk Actions).
TDS.defineMenu('card-header-bulk', { label: 'Bulk actions', Width: 200, Items: [{ Label: 'Publish', Icon: 'CheckCircle' }, { Label: 'Archive', Icon: 'FolderSimple' }, { separator: true }, { Label: 'Delete', Icon: 'Trash', Destructive: true }] });
TDS.register('card-header', {
  defaults: { Trailing: 'None', Title: 'Card title', 'Show Subtitle': true, Subtitle: 'Supporting text', 'Badge Label': 'Complete', 'Action Label': 'See All' },
  render(p) {
    const t = TDS.slug(p.Trailing);
    const text = `<div class="tds-card-header-text"><span class="tds-card-header-title">${TDS.esc(p.Title)}</span>`
      + (p['Show Subtitle'] ? `<span class="tds-card-header-subtitle">${TDS.esc(p.Subtitle)}</span>` : '') + `</div>`;
    let trailing = '';
    if (t === 'badge') trailing = TDS.render('status', { Tone: 'Success', Size: 'Small', Label: p['Badge Label'] });
    else if (t === 'action') trailing = TDS.render('button', { Variant: 'Secondary', Size: 'XSmall', Label: p['Action Label'] });
    // Slot - H örneği: değiştirilebilir bir Status (Interactive, gerçek menü açar).
    else if (t === 'slot-h') trailing = `<div class="tds-card-header-slot">${TDS.render('status', { Tone: 'Neutral', Size: 'Small', Interactive: 'True', Label: 'Draft' })}</div>`;
    else if (t === 'slot-v') {
      trailing = `<div class="tds-card-header-slot">`
        + TDS.render('input', { Size: 'Small', 'Leading Icon': true, 'Leading Icon Swap': 'MagnifyingGlass', placeholder: 'Search title, content ID or person...', value: '', label: 'Search', width: '100%' })
        + TDS.render('button', { Variant: 'Secondary', Size: 'Small', Label: 'Filters', 'Icon Left': true, iconLeft: 'Funnel', 'Show Count': true, Count: '5' })
        + TDS.render('button', { Variant: 'Secondary', Size: 'Small', Label: 'Sort', 'Icon Left': true, iconLeft: 'SortAscending' })
        + TDS.render('button', { Variant: 'Secondary', Size: 'Small', Label: 'Bulk Actions', 'Icon Right': true, iconRight: 'CaretDown', menu: 'card-header-bulk', align: 'end' })
        + `</div>`;
    }
    return `<div class="tds-card-header" data-trailing="${t}">${text}${trailing}</div>`;
  },
});
