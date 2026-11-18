// List Item. Bir bağlantı satırı; hover'da başlık altı çizilir.
// Issue: ikon (iki halkalı); Activity: Avatar (Medium); Note: başlık + Status etiketi (Danger, Small) ve açıklama;
// Slot: başlıktan önce serbest içerik. Trailing Slot Figma'da boş. İç kullanım: leading, trailing (slot HTML'i).
TDS.register('list-item', {
  defaults: { Type: 'Issue', State: 'Live', Title: 'List item title', Description: 'Supporting text', 'Show Description': true, Icon: 'TrendUp', 'Note Tag': 'Lisans Yenileme', Initials: 'AC', leading: '', trailing: '' },
  render(p) {
    const type = TDS.slug(p.Type);
    const st = p.State === 'Hover' ? ' data-state="hover"' : '';
    const title = `<span class="tds-list-item-title">${TDS.esc(p.Title)}</span>`;
    const desc = p['Show Description'] ? `<span class="tds-list-item-desc">${TDS.esc(p.Description)}</span>` : '';
    const trailing = p.trailing ? `<span class="tds-list-item-slot">${p.trailing}</span>` : '';
    let body;
    if (type === 'note') {
      body = title + `<span class="tds-list-item-meta">${TDS.render('status', { Tone: 'Danger', Size: 'Small', Label: p['Note Tag'], 'Show dot': false })}${desc}</span>`;
    } else {
      const size = TDS.num(TDS.spec('list-item', 'Sizes', 'part', 'Icon').height); // 18
      const lead = type === 'issue' ? `<span class="tds-list-item-wrap" aria-hidden="true"><span class="tds-list-item-inner">${TDS.icon(p.Icon, size)}</span></span>`
        : type === 'activity' ? TDS.render('avatar', { Size: 'Medium', Color: 'Blue', Initials: p.Initials })
          : p.leading ? `<span class="tds-list-item-slot">${p.leading}</span>` : '';
      body = `${lead}<span class="tds-list-item-text">${title}${desc}</span>${trailing}`;
    }
    return `<a class="tds-list-item" href="#" onclick="return false" data-type="${type}"${st}>${body}</a>`;
  },
});
