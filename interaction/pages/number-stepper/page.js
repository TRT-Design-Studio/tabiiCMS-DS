// Number Stepper sayfasının playground'u.
TDS.playground('#app', {
  title: 'Number Stepper',
  components: [
    {
      name: 'number-stepper', label: 'Number Stepper',
      controls: [
        { key: 'State', type: 'select', options: ['Live', 'Default', 'At minimum', 'At maximum', 'Error', 'Disabled'], default: 'Live' },
        { key: 'Value', type: 'text', default: '3' },
        { key: 'Min', type: 'text', default: '1', label: 'Min (Live)', when: (s) => s.State === 'Live' },
        { key: 'Max', type: 'text', default: '10', label: 'Max (Live)', when: (s) => s.State === 'Live' },
      ],
    },
  ],
});
