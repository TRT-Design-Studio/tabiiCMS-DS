// Icon Button. Button'un renk sınıfını (tds-button) paylaşır.
TDS.register('icon-button', {
  defaults: { Variant: 'Primary', Shape: 'Square', Size: 'Medium', State: 'Live', Icon: 'MagnifyingGlass', label: 'Search', corners: '', menu: '', align: '' },
  render(p) {
    const state = p.State && p.State !== 'Live' ? ` data-state="${TDS.slug(p.State)}"` : '';
    const dis = p.State === 'Disabled' ? ' disabled' : '';
    const corners = p.corners ? ` data-corners="${p.corners}"` : '';
    // menu: TDS.defineMenu ile tanımlanmış bir menünün adı; verilirse tıklayınca o menü açılır.
    const menu = p.menu ? ` data-tds-menu="${p.menu}" aria-haspopup="menu" aria-expanded="false"${p.align ? ` data-tds-align="${p.align}"` : ''}` : '';
    const size = TDS.num(TDS.spec('icon-button', 'Sizes', 'size', p.Size).icon); // 16 / 16 / 20 / 20
    return `<button type="button" class="tds-button tds-icon-button" aria-label="${TDS.esc(p.label)}" data-variant="${TDS.slug(p.Variant)}" data-shape="${TDS.slug(p.Shape)}" data-size="${TDS.slug(p.Size)}"${state}${corners}${menu}${dis}>${TDS.icon(p.Icon, size)}</button>`;
  },
});
