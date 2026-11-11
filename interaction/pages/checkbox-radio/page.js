// Checkbox & Radio sayfasının playground'u.
// "With Label": kontrolün yanına Label konur (spec: 8 px aralık). Etikete tıklamak kontrolü değiştirir.
TDS.register('choice-with-label', {
  defaults: { Control: 'Checkbox', Label: 'Label', 'Show Description': false, Description: 'Description' },
  render(p) {
    const row = (ctl, id, text) => `<div class="pg-choice">${ctl}${TDS.render('label', { Label: text, 'Show Description': p['Show Description'], Description: p.Description, htmlFor: id })}</div>`;
    if (p.Control === 'Checkbox') return row(TDS.render('checkbox', { id: 'choice-cb', label: '' }).replace(' aria-label=""', ''), 'choice-cb', p.Label);
    return `<div class="pg-choices" role="radiogroup" aria-label="${TDS.esc(p.Label)}">` + [1, 2, 3].map((n) => row(TDS.render('radio', { id: `choice-r${n}`, name: 'choice', label: '', Selected: n === 1 ? 'True' : 'False' }).replace(' aria-label=""', ''), `choice-r${n}`, `${p.Label} ${n}`)).join('') + '</div>';
  },
});
// Label'a tıklamak bağlı kontrole tıklamak gibi çalışır (düğmeler <label for> ile de tıklanır).
TDS.playground('#app', {
  title: 'Checkbox & Radio',
  components: [
    {
      name: 'checkbox', label: 'Checkbox',
      controls: [
        { key: 'Checked', type: 'select', options: ['False', 'True', 'Indeterminate'], default: 'False' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Focused', 'Disabled'], default: 'Live' },
      ],
    },
    {
      name: 'radio', label: 'Radio',
      controls: [
        { key: 'Selected', type: 'select', options: ['False', 'True'], default: 'False' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Focused', 'Disabled'], default: 'Live' },
      ],
    },
    {
      name: 'choice-with-label', label: 'With Label',
      controls: [
        { key: 'Control', type: 'select', options: ['Checkbox', 'Radio group'], default: 'Checkbox' },
        { key: 'Label', type: 'text', default: 'Label' },
        { key: 'Show Description', type: 'bool', default: false },
        { key: 'Description', type: 'text', default: 'Description', when: (s) => s['Show Description'] },
      ],
    },
  ],
});
