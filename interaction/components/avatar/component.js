// Avatar. Baş harfler; renk Color'dan. Ekran okuyucu için ad: label (verilmezse baş harfler).
TDS.register('avatar', {
  defaults: { Size: 'Small', Color: 'Neutral', Initials: 'AC', label: '' },
  render(p) {
    return `<span class="tds-avatar" role="img" aria-label="${TDS.esc(p.label || p.Initials)}" data-size="${TDS.slug(p.Size)}" data-color="${TDS.slug(p.Color)}"><span aria-hidden="true">${TDS.esc(p.Initials)}</span></span>`;
  },
});
