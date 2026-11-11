// Menu Item. Menü içinde role="menuitem" olarak çizilir; klavye ve tıklama core.js'te.
TDS.register('menu-item', {
  defaults: { State: 'Live', Destructive: 'False', Label: 'Menu item', 'Show Description': false, Description: 'Description', 'Leading Icon': false, Icon: 'Copy', 'Show Trailing Text': false, 'Trailing Text': '⌘D', Submenu: false, Check: false, leading: '', value: '' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const destructive = p.Destructive === 'True';
    const disabled = st === 'disabled';
    // İkon boyutları spec'teki Icons tablosundan (Leading Icon 16, Submenu 16).
    const sz = (part) => TDS.num(TDS.spec('menu-item', 'Icons', 'part', part).size);
    // leading: Leading slot içeriği (HTML): bayrak, Checkbox, Radio, avatar…
    const lead = p.leading ? `<span class="tds-menu-item-leading">${p.leading}</span>`
      : p['Leading Icon'] ? TDS.icon(p.Icon, sz('Leading Icon'), 'Regular', 'data-part="leading-icon"') : '';
    const desc = p['Show Description'] ? `<span class="tds-menu-item-desc">${TDS.esc(p.Description)}</span>` : '';
    const trailing = p['Show Trailing Text'] ? `<span class="tds-menu-item-trailing">${TDS.esc(p['Trailing Text'])}</span>` : '';
    const check = p.Check || st === 'selected' ? TDS.icon('Check', sz('Submenu'), 'Regular', 'data-part="submenu"') : '';
    const sub = p.Submenu ? TDS.icon('CaretRight', sz('Submenu'), 'Regular', 'data-part="submenu"') : '';
    return `<div role="menuitem" tabindex="-1" class="tds-menu-item"${st ? ` data-state="${st}"` : ''}${destructive ? ' data-destructive="true"' : ''}${disabled ? ' aria-disabled="true"' : ''}${p.Submenu ? ' aria-haspopup="menu"' : ''}${p.value ? ` data-value="${TDS.esc(p.value)}"` : ''}>`
      + lead + `<span class="tds-menu-item-text"><span class="tds-menu-item-label">${TDS.esc(p.Label)}</span>${desc}</span>` + trailing + check + sub + `</div>`;
  },
});
