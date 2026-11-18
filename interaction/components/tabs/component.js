// Tabs. role="tablist". Tab'lar tab-segment (Segmented) veya tab-underline (Underline) ile çizilir.
// Labels (virgülle) kaç tab yazılırsa o kadar tab çizilir (Figma'daki Slot gibi). Locked: kilitli tab numaraları (ör. "3, 5").
// Tıklayınca veya ← → Home End ile seçim değişir; Disabled atlanır.
// Motion: Fade (seçim yerinde söner / yanar) veya Slide (dolgu ya da çizgi yeni tab'e kayar). Spec → Motion.
// Underline denemeleri: Gap, Row Padding (ilk tab'den önce ve son tab'den sonra kenara boşluk; alt çizgi
// yine bütün satırı kaplar, Figma'daki gibi), Tab Width (Hug / Fill) ve Text Align.
TDS.register('tabs', {
  defaults: { Type: 'Segmented', Labels: 'Tab, Tab, Tab, Tab, Tab', Selected: 1, 'Leading Icon': false, 'Leading Icon Swap': 'SquaresFour', Locked: '', Motion: 'Fade', Gap: 'Spacing/6', 'Row Padding': 'Spacing/1', 'Tab Width': 'Hug', 'Text Align': 'Center', Width: '560', label: 'Tabs' },
  render(p) {
    const type = TDS.slug(p.Type);
    const labels = String(p.Labels).split(',').map((x) => x.trim()).filter(Boolean);
    const locked = String(p.Locked).split(',').map((x) => Number(x.trim())).filter(Boolean);
    const name = type === 'underline' ? 'tab-underline' : 'tab-segment';
    let selected = Math.min(labels.length, Math.max(1, Number(p.Selected) || 1));
    if (locked.includes(selected)) selected = labels.findIndex((_, i) => !locked.includes(i + 1)) + 1 || selected;
    const tabs = labels.map((Label, i) => {
      const lock = locked.includes(i + 1);
      const props = { Label, 'Leading Icon': p['Leading Icon'], 'Leading Icon Swap': p['Leading Icon Swap'], selected: i + 1 === selected, State: lock ? 'Disabled' : 'Live', 'Trailing Icon': lock };
      return TDS.render(name, props).replace('<button', `<button data-index="${i + 1}"`);
    });
    const motion = TDS.slug(p.Motion);
    // Underline denemeleri token'larla: boşluk ve yan padding Spacing token'ı, genişlik Fill ise tab'ler eşit bölünür.
    const sp = (t) => `var(--spacing-${String(t).replace(/^Spacing\//, '').replace(/[\u2024.]/g, '-')})`;
    const fill = type === 'underline' && p['Tab Width'] === 'Fill';
    const style = type === 'underline'
      ? ` style="--tds-tabs-gap:${sp(p.Gap)};--tds-tabs-pad-x:${sp(p['Row Padding'])};${fill ? `width:${Number(p.Width) || 560}px;` : ''}"`
      : '';
    const attrs = `${fill ? ' data-fill' : ''}${type === 'underline' ? ` data-align="${TDS.slug(p['Text Align'])}"` : ''}`;
    return `<div class="tds-tabs" role="tablist" aria-label="${TDS.esc(p.label)}" data-type="${type}" data-motion="${motion}"${attrs} data-tds-comp="tabs"${TDS.props(p)}${style}>`
      + `${tabs.join('')}${motion === 'slide' ? '<span class="tds-tabs-indicator" aria-hidden="true"></span>' : ''}</div>`;
  },
});
(function () {
  // Slide: gösterge seçili tab'in yerine ve genişliğine oturur. from verilirse oradan kayarak gelir.
  const place = (root, from) => {
    const ind = root.querySelector(':scope > .tds-tabs-indicator');
    const tab = root.querySelector('[role="tab"][aria-selected="true"]');
    if (!ind || !tab) return;
    const to = { left: tab.offsetLeft, width: tab.offsetWidth };
    if (from) {
      ind.style.transition = 'none';
      ind.style.transform = `translateX(${from.left}px)`; ind.style.width = `${from.width}px`;
      void ind.offsetWidth; // tarayıcı eski yeri çizsin, sonra kaysın
      ind.style.transition = '';
    }
    ind.style.transform = `translateX(${to.left}px)`; ind.style.width = `${to.width}px`;
  };
  const pick = (tab) => {
    const root = tab.closest('.tds-tabs');
    const ind = root.querySelector(':scope > .tds-tabs-indicator');
    const old = root.querySelector('[role="tab"][aria-selected="true"]');
    const from = ind && old ? { left: old.offsetLeft, width: old.offsetWidth } : null;
    const fresh = TDS.update(root, { Selected: Number(tab.dataset.index) }, `[data-index="${tab.dataset.index}"]`);
    if (fresh.dataset.motion === 'slide') place(fresh, from);
  };
  // İlk çizimde (playground sahnesi) göstergeyi yerine koy.
  const scan = () => document.querySelectorAll('.tds-tabs[data-motion="slide"]').forEach((r) => { if (!r._placed) { r._placed = true; place(r); } });
  new MutationObserver(() => requestAnimationFrame(scan)).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tds-tabs [role="tab"]');
    if (tab && !tab.disabled && tab.getAttribute('aria-selected') !== 'true') pick(tab);
  });
  document.addEventListener('keydown', (e) => {
    const tab = e.target.closest && e.target.closest('.tds-tabs [role="tab"]');
    if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    const tabs = [...tab.closest('.tds-tabs').querySelectorAll('[role="tab"]:not(:disabled)')];
    const i = tabs.indexOf(tab);
    const next = { ArrowLeft: tabs[i - 1] || tabs[tabs.length - 1], ArrowRight: tabs[i + 1] || tabs[0], Home: tabs[0], End: tabs[tabs.length - 1] }[e.key];
    e.preventDefault();
    if (next) pick(next);
  });
})();
