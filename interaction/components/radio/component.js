// Radio. role="radio" bir düğme. Aynı name'e sahip radyolardan sadece biri seçilir; oklar arada gezer.
// İç kullanım: name (grup), label (erişilebilir ad), id.
TDS.register('radio', {
  defaults: { Selected: 'False', State: 'Live', name: '', label: 'Radio', id: '' },
  render(p) {
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const on = p.Selected === 'True';
    return `<button type="button" role="radio" class="tds-radio" aria-checked="${on}"${p.name ? ` data-name="${TDS.esc(p.name)}"` : ''}${p.label ? ` aria-label="${TDS.esc(p.label)}"` : ''}${p.id ? ` id="${TDS.esc(p.id)}"` : ''}`
      + `${st ? ` data-state="${st}"` : ''}${st === 'disabled' ? ' disabled' : ''}></button>`;
  },
});
(function () {
  const group = (r) => r.dataset.name ? [...document.querySelectorAll(`.tds-radio[data-name="${CSS.escape(r.dataset.name)}"]:not(:disabled)`)] : [r];
  const pick = (r) => {
    group(r).forEach((x) => { x.setAttribute('aria-checked', String(x === r)); x.tabIndex = x === r ? 0 : -1; });
    r.focus();
  };
  document.addEventListener('click', (e) => {
    const r = e.target.closest('.tds-radio');
    if (!r || r.disabled || r.dataset.state) return;
    pick(r);
  });
  document.addEventListener('keydown', (e) => {
    const r = e.target.closest && e.target.closest('.tds-radio[data-name]');
    if (!r || r.dataset.state) return;
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const g = group(r);
    pick(g[(g.indexOf(r) + step + g.length) % g.length]);
  });
})();
