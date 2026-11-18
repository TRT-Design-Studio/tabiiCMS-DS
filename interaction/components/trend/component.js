// Trend. İkon spec'teki States tablosundan (Positive: TrendUp, Negative: TrendDown, Neutral: Minus).
(function () {
  const draw = { TrendUp: (s) => TDS.icon('TrendUp', s), TrendDown: (s) => TDS.icon('TrendDown', s), Minus: (s) => TDS.icon('Minus', s) };
  TDS.register('trend', {
    defaults: { Direction: 'Positive', Value: '12', Context: 'vs last month', 'Show Context': true },
    render(p) {
      const row = TDS.spec('trend', 'States', 'direction', p.Direction);
      const size = TDS.num(TDS.spec('trend', 'Sizes', 'part', 'Icon').size); // 14
      const fn = draw[String(row.icon).trim()];
      if (!fn) throw new Error(`trend: spec'teki "${row.icon}" ikonu component.js'te yok`);
      return `<span class="tds-trend" data-direction="${TDS.slug(p.Direction)}">${fn(size)}<span class="tds-trend-value">${TDS.esc(p.Value)}</span>`
        + (p['Show Context'] ? `<span class="tds-trend-context">${TDS.esc(p.Context)}</span>` : '') + `</span>`;
    },
  });
})();
