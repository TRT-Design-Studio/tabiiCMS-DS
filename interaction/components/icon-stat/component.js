// Icon Stat. İkon + sayı; Vertical'da alt alta, Horizontal'da yan yana.
TDS.register('icon-stat', {
  defaults: { Layout: 'Vertical', Icon: 'Globe', Value: '3' },
  render(p) {
    const size = TDS.num(TDS.spec('icon-stat', 'Sizes', 'part', 'Icon').size); // 16
    return `<span class="tds-icon-stat" data-layout="${TDS.slug(p.Layout)}">${TDS.icon(p.Icon, size)}<span>${TDS.esc(p.Value)}</span></span>`;
  },
});
