// User Card. Bir düğme: Avatar (Medium), ad, e-posta ve chevron (Full) ya da sadece avatar (Compact).
// Tıklayınca gerçek Menu açılır (kullanıcı menüsü).
TDS.defineMenu('user-card', {
  label: 'User menu',
  Width: 224,
  Items: [{ Label: 'Profile', Icon: 'User' }, { Label: 'Settings', Icon: 'Gear' }, { separator: true }, { Label: 'Sign out', Icon: 'SignOut' }],
});
TDS.register('user-card', {
  defaults: { Layout: 'Full', State: 'Live', Name: 'Ayse Cavdar', Email: 'ayse.cavdar@trt.net.tr', Initials: 'AC', Color: 'Neutral' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const full = TDS.slug(p.Layout) === 'full';
    const avatar = TDS.render('avatar', { Size: 'Medium', Color: p.Color, Initials: p.Initials, label: p.Name });
    const chevron = TDS.num(TDS.spec('user-card', 'Parts', 'part', 'Chevron').size); // 16
    const body = full ? `<span class="tds-user-card-text"><span class="tds-user-card-name">${TDS.esc(p.Name)}</span><span class="tds-user-card-email">${TDS.esc(p.Email)}</span></span>${TDS.icon('CaretDown', chevron)}` : '';
    return `<button type="button" class="tds-user-card" data-layout="${TDS.slug(p.Layout)}"${st ? ` data-state="${st}"` : ''}`
      + ` data-tds-menu="user-card" aria-haspopup="menu" aria-expanded="false"${full ? '' : ` aria-label="${TDS.esc(p.Name)}"`}>${avatar}${body}</button>`;
  },
});
