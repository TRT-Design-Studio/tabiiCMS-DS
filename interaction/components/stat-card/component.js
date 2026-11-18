// Stat Card. Etiket, büyük sayı ve isteğe bağlı Trend (trend komponenti; Direction, Value, Context ona geçer).
TDS.register('stat-card', {
  defaults: { Label: 'Metric label', Value: '847', 'Show Trend': true, Direction: 'Positive', 'Trend Value': '12', Context: 'vs last month', 'Show Context': true },
  render(p) {
    const trend = p['Show Trend'] ? TDS.render('trend', { Direction: p.Direction, Value: p['Trend Value'], Context: p.Context, 'Show Context': p['Show Context'] }) : '';
    return `<div class="tds-stat-card"><span class="tds-stat-card-label">${TDS.esc(p.Label)}</span><span class="tds-stat-card-value">${TDS.esc(p.Value)}</span>${trend}</div>`;
  },
});
