// Badge Label.
TDS.register('badge-label', {
  defaults: { Tone: 'Strong', Label: 'New' },
  render(p) {
    return `<span class="tds-badge-label" data-tone="${TDS.slug(p.Tone)}">${TDS.esc(p.Label)}</span>`;
  },
});
