// Tooltip sayfasının playground'u: Tooltip (balon) ve bir tetikleyicide gerçek açılış.
// "On a trigger": üzerine gelince ~500 ms sonra veya klavye odağında açılır (core.js → data-tds-tooltip).
TDS.register('tooltip-trigger-demo', {
  defaults: { Placement: 'Top', Text: 'Bold' },
  render(p) {
    return `<span style="display:inline-flex" data-tds-tooltip="${TDS.esc(p.Text)}" data-tds-placement="${TDS.esc(p.Placement)}">`
      + TDS.render('icon-button', { Variant: 'Secondary', Size: 'Medium', Icon: 'TextB', label: p.Text })
      + `</span>`;
  },
});
TDS.playground('#app', {
  title: 'Tooltip',
  components: [
    {
      name: 'tooltip', label: 'Tooltip',
      controls: [
        { key: 'Placement', type: 'select', options: ['Top', 'Bottom', 'Left', 'Right'], default: 'Top' },
        { key: 'Text', type: 'text', default: 'Bold' },
        { key: 'Show Shortcut', type: 'bool', default: true },
        { key: 'Shortcut', type: 'text', default: '⌘B', when: (s) => s['Show Shortcut'] },
      ],
    },
    {
      name: 'tooltip-trigger-demo', label: 'On a trigger',
      controls: [
        { key: 'Placement', type: 'select', options: ['Top', 'Bottom', 'Left', 'Right'], default: 'Top' },
        { key: 'Text', type: 'text', default: 'Bold' },
      ],
    },
  ],
});
