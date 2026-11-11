// Number Stepper. Eksi / artı Icon Button (Secondary, Square, Medium) ve ortada Input (Medium, ortalı).
// Live: butonlar değeri değiştirir, Min ve Max'ta ilgili buton Disabled olur (spec → States). Yazarak da değişir.
TDS.register('number-stepper', {
  defaults: { State: 'Live', Value: '3', Min: '1', Max: '10', label: 'Value' },
  render(p) {
    const st = TDS.slug(p.State || 'Live');
    const min = Number(p.Min), max = Number(p.Max);
    const n = Number(p.Value);
    // State tablosu: hangi parça hangi state'te (Default / Disabled / Filled / Error).
    const row = st === 'live'
      ? { decrease: n <= min ? 'Disabled' : 'Live', value: 'Filled', increase: n >= max ? 'Disabled' : 'Live' }
      : TDS.spec('number-stepper', 'States', 'state', p.State);
    const btn = (part, icon, label, dir) => TDS.render('icon-button', { Variant: 'Secondary', Shape: 'Square', Size: 'Medium', Icon: icon, label, State: row[part] === 'Default' ? 'Live' : row[part] });
    const valueState = st === 'live' ? 'Live' : row.value;
    const props = st === 'live' ? TDS.props({ ...p }) : '';
    return `<div class="tds-number-stepper" role="group" aria-label="${TDS.esc(p.label)}" data-tds-comp="number-stepper"${props}>`
      + btn('decrease', 'Minus', 'Decrease', -1).replace('<button', '<button data-step="-1"')
      + TDS.render('input', { Size: 'Medium', State: valueState, Value: p.Value, value: p.Value, align: 'center', inputmode: 'numeric', label: p.label, attrs: st === 'live' ? 'data-stepper-value' : '' })
      + btn('increase', 'Plus', 'Increase', 1).replace('<button', '<button data-step="1"')
      + `</div>`;
  },
});
document.addEventListener('click', (e) => {
  const b = e.target.closest('.tds-number-stepper [data-step]');
  if (!b || b.disabled) return;
  const root = b.closest('.tds-number-stepper');
  if (!root.dataset.tdsProps) return;
  const p = TDS.read(root);
  const next = Math.min(Number(p.Max), Math.max(Number(p.Min), Number(p.Value) + Number(b.dataset.step)));
  const fresh = TDS.update(root, { Value: String(next) });
  // Sınıra gelince düğme kapanır; odak diğer düğmeye ya da aynı düğmeye geçer.
  const same = fresh.querySelector(`[data-step="${b.dataset.step}"]`);
  (same && !same.disabled ? same : fresh.querySelector('[data-step]:not(:disabled)'))?.focus();
});
document.addEventListener('change', (e) => {
  const f = e.target.closest && e.target.closest('[data-stepper-value]');
  if (!f) return;
  const root = f.closest('.tds-number-stepper');
  const p = TDS.read(root);
  const n = Number(f.value);
  const next = Number.isFinite(n) ? Math.min(Number(p.Max), Math.max(Number(p.Min), Math.round(n))) : Number(p.Value);
  TDS.update(root, { Value: String(next) });
});
