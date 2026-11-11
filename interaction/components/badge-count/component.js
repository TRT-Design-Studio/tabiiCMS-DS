// Badge Count. 99'dan büyük sayılar 99+ olarak gösterilir (spec).
TDS.register('badge-count', {
  defaults: { Tone: 'Neutral', Count: '5' },
  render(p) {
    const n = Number(p.Count);
    const text = Number.isFinite(n) && n > 99 ? '99+' : p.Count;
    return `<span class="tds-badge-count" data-tone="${TDS.slug(p.Tone)}">${TDS.esc(text)}</span>`;
  },
});
