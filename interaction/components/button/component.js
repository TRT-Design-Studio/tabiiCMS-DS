// Button. Badge Count'u (Show Count) kendisi çizmez, badge-count komponentini kullanır.
// İç kullanım için ek props: iconLeft / iconRight (ikon adı), before (ikonun yerine HTML, ör. bayrak),
// menu (TDS.defineMenu adı, tıklayınca açılır), align (menünün hizası), attrs (ek nitelikler).
TDS.register('button', {
  defaults: { Variant: 'Primary', Size: 'Medium', State: 'Live', Label: 'Button', 'Icon Left': false, 'Icon Right': false, 'Show Count': false, Count: '5', corners: '', iconLeft: 'Plus', iconRight: 'CaretDown', before: '', menu: '', align: '', attrs: '' },
  render(p) {
    // İkon boyutu spec'teki Sizes tablosundan (Icon sütunu): XSmall 14, Small 16, Medium 16, Large 20.
    const size = TDS.num(TDS.spec('button', 'Sizes', 'size', p.Size).icon);
    const icon = (n) => TDS.icon(n, size);
    const state = p.State && p.State !== 'Live' ? ` data-state="${TDS.slug(p.State)}"` : '';
    const dis = p.State === 'Disabled' ? ' disabled' : '';
    const corners = p.corners ? ` data-corners="${p.corners}"` : '';
    const menu = p.menu ? ` data-tds-menu="${p.menu}" aria-haspopup="menu" aria-expanded="false"${p.align ? ` data-tds-align="${p.align}"` : ''}` : '';
    return `<button type="button" class="tds-button" data-variant="${TDS.slug(p.Variant)}" data-size="${TDS.slug(p.Size)}"${state}${corners}${menu}${p.attrs ? ' ' + p.attrs : ''}${dis}>`
      + (p.before || (p['Icon Left'] ? icon(p.iconLeft) : ''))
      + `<span class="tds-button-label">${TDS.esc(p.Label)}</span>`
      + (p['Show Count'] ? TDS.render('badge-count', { Tone: 'Neutral', Count: p.Count }) : '')
      + (p['Icon Right'] ? icon(p.iconRight) : '')
      + `</button>`;
  },
});
