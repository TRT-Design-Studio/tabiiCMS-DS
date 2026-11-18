// Section Nav Item. Bir düğme: Step Icon (aynı Status), bölüm adı ve sayaç. Current, aria-current="step" alır.
TDS.register('section-nav-item', {
  defaults: { Status: 'Empty', State: 'Live', Label: 'Section', Counter: '0/4', 'Show Counter': true },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const status = TDS.slug(p.Status);
    return `<button type="button" class="tds-section-nav-item" data-status="${status}"${st ? ` data-state="${st}"` : ''}${status === 'current' ? ' aria-current="step"' : ''}>`
      + TDS.render('step-icon', { Status: p.Status })
      + `<span class="tds-section-nav-label">${TDS.esc(p.Label)}</span>`
      + (p['Show Counter'] ? `<span class="tds-section-nav-counter">${TDS.esc(p.Counter)}</span>` : '')
      + `</button>`;
  },
});
