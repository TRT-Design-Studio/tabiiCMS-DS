// Badge Dot. Status bu komponenti tonun noktası olarak kullanır.
TDS.register('badge-dot', {
  defaults: { Size: 'Medium', Tone: 'Info' },
  render(p) {
    return `<span class="tds-badge-dot" data-size="${TDS.slug(p.Size)}" data-tone="${TDS.slug(p.Tone)}" role="img" aria-label="${TDS.esc(p.Tone)} indicator"></span>`;
  },
});
