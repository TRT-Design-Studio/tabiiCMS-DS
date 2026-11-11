// Buttons sayfasının playground'u: Button, Icon Button, Split Button.
const STATES = ['Live', 'Default', 'Hover', 'Pressed', 'Focused', 'Disabled'];
const SIZES = ['XSmall', 'Small', 'Medium', 'Large'];
TDS.playground('#app', {
  title: 'Buttons',
  components: [
    {
      name: 'button', label: 'Button',
      controls: [
        { key: 'Variant', type: 'select', options: ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Danger', 'Link'], default: 'Primary' },
        { key: 'Size', type: 'select', options: SIZES, default: 'Medium' },
        { key: 'State', type: 'select', options: STATES, default: 'Live', label: 'State (Live = real hover and press)' },
        { key: 'Label', type: 'text', default: 'Button' },
        { key: 'Icon Left', type: 'bool', default: false },
        { key: 'Icon Right', type: 'bool', default: false },
        { key: 'Show Count', type: 'bool', default: false },
        { key: 'Count', type: 'text', default: '5', when: (s) => s['Show Count'] },
      ],
    },
    {
      name: 'icon-button', label: 'Icon Button',
      controls: [
        { key: 'Variant', type: 'select', options: ['Primary', 'Secondary', 'Tertiary', 'Ghost'], default: 'Primary' },
        { key: 'Shape', type: 'select', options: ['Square', 'Circle'], default: 'Square' },
        { key: 'Size', type: 'select', options: SIZES, default: 'Medium' },
        { key: 'State', type: 'select', options: [...STATES, 'Active'], default: 'Live', label: 'State (Active = Ghost only)' },
      ],
    },
    {
      name: 'split-button', label: 'Split Button',
      controls: [
        { key: 'Variant', type: 'select', options: ['Primary', 'Secondary'], default: 'Primary' },
        { key: 'Size', type: 'select', options: SIZES, default: 'Medium' },
        { key: 'State', type: 'select', options: STATES, default: 'Live' },
        { key: 'Label', type: 'text', default: 'Publish' },
      ],
    },
  ],
});
