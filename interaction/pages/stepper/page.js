// Stepper sayfasının playground'u: Section Nav Item (adım), Step Icon (durum ikonu) ve birlikte bir form stepper'ı.
// "Form stepper": Back / Next ile veya bir bölüme tıklayarak adım adım geçilir. Öncekiler Complete, bulunulan Current,
// sonrakiler Empty olur. Error ile seçilen bölüm (geçildiyse) Error görünür. Bölümler Figma Examples'taki gibi.
TDS.register('stepper-demo', {
  defaults: { Sections: 'Primary Information, Media & Visual Assets, Rights & Licensing, SEO & Metadata', Current: 1, Error: '', 'Show Counter': true },
  render(p) {
    const names = String(p.Sections).split(',').map((s) => s.trim()).filter(Boolean);
    const cur = Math.min(names.length, Math.max(1, Number(p.Current) || 1));
    const err = Number(p.Error) || 0;
    const items = names.map((Label, i) => {
      const n = i + 1;
      const Status = n === cur ? 'Current' : n < cur ? (n === err ? 'Error' : 'Complete') : 'Empty';
      const Counter = Status === 'Complete' ? '4/4' : Status === 'Error' ? '3/4' : Status === 'Current' ? '2/4' : '0/4';
      return TDS.render('section-nav-item', { Status, Label, Counter, 'Show Counter': p['Show Counter'] }).replace('<button', `<button data-step="${n}"`);
    }).join('');
    const btn = (Label, Variant, step, off) => TDS.render('button', { Label, Variant, Size: 'Small', State: off ? 'Disabled' : 'Live', attrs: `data-goto-step="${step}"` });
    return `<div class="pg-stepper" data-tds-comp="stepper-demo"${TDS.props({ ...p, Current: cur })} style="display:flex;flex-direction:column;gap:var(--spacing-4)">`
      + `<nav class="tds-section-nav" aria-label="Form sections">${items}</nav>`
      + `<div style="display:flex;justify-content:space-between">${btn('Back', 'Secondary', cur - 1, cur <= 1)}${btn('Next', 'Primary', cur + 1, cur >= names.length)}</div></div>`;
  },
});
document.addEventListener('click', (e) => {
  const t = e.target.closest('.pg-stepper [data-step], .pg-stepper [data-goto-step]');
  if (!t || t.disabled) return;
  const root = t.closest('.pg-stepper');
  const n = Number(t.dataset.step || t.dataset.gotoStep);
  TDS.update(root, { Current: n }, t.dataset.step ? `[data-step="${n}"]` : `.tds-button[data-variant="${t.dataset.variant}"]`);
});
TDS.playground('#app', {
  title: 'Stepper',
  components: [
    {
      name: 'stepper-demo', label: 'Form stepper',
      controls: [
        { key: 'Sections', type: 'text', default: 'Primary Information, Media & Visual Assets, Rights & Licensing, SEO & Metadata', label: 'Sections (comma separated)' },
        { key: 'Error', type: 'text', default: '', label: 'Section with an error (number)' },
        { key: 'Show Counter', type: 'bool', default: true },
      ],
    },
    {
      name: 'section-nav-item', label: 'Section Nav Item',
      controls: [
        { key: 'Status', type: 'select', options: ['Empty', 'Current', 'Complete', 'Error'], default: 'Current' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover'], default: 'Live' },
        { key: 'Label', type: 'text', default: 'Section' },
        { key: 'Show Counter', type: 'bool', default: true },
        { key: 'Counter', type: 'text', default: '0/4', when: (s) => s['Show Counter'] },
      ],
    },
    {
      name: 'step-icon', label: 'Step Icon',
      controls: [{ key: 'Status', type: 'select', options: ['Empty', 'Current', 'Complete', 'Error'], default: 'Empty' }],
    },
  ],
});
