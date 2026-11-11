// Status. Interactive=True bir buton olur, sağında chevron vardır ve gerçek Menu komponentini açar.
// Nokta badge-dot komponentinden gelir.
TDS.defineMenu('status', (trigger) => ({
  label: 'Change status',
  Width: 200,
  Items: ['Draft', 'In review', 'Published', 'Archived'].map((l) => ({ Label: l, Check: l === trigger.dataset.label })),
}));
TDS.register('status', {
  defaults: { Tone: 'Neutral', Size: 'Small', Interactive: 'False', State: 'Live', Label: 'Draft', 'Show dot': true, 'Show icon': false },
  render(p) {
    const interactive = p.Interactive === 'True';
    const tag = interactive ? 'button' : 'span';
    const state = interactive && p.State && p.State !== 'Live' ? ` data-state="${TDS.slug(p.State)}"` : '';
    const menu = interactive ? ` type="button" data-tds-menu="status" data-label="${TDS.esc(p.Label)}" aria-haspopup="menu" aria-expanded="false"` : '';
    const dot = p['Show dot'] ? TDS.render('badge-dot', { Size: 'Small', Tone: p.Tone }).replace(' role="img"', ' aria-hidden="true"').replace(/ aria-label="[^"]*"/, '') : '';
    const size = TDS.num(TDS.spec('status', 'Sizes', 'size', p.Size).icon); // Small 12, Medium 14
    const lead = p['Show icon'] ? TDS.icon('Plus', size) : dot;
    return `<${tag}${menu} class="tds-status" data-tone="${TDS.slug(p.Tone)}" data-size="${TDS.slug(p.Size)}"${state}>`
      + lead + `<span>${TDS.esc(p.Label)}</span>` + (interactive ? TDS.icon('CaretDown', size) : '') + `</${tag}>`;
  },
});
