// Input sayfasının playground'u.
TDS.playground('#app', {
  title: 'Input',
  components: [
    {
      name: 'input', label: 'Input',
      controls: [
        { key: 'Size', type: 'select', options: ['Small', 'Medium', 'Large'], default: 'Medium' },
        { key: 'State', type: 'select', options: ["Live","Default","Focused","Filled","Error","Success","Disabled","Read-only"], default: 'Live' },
        { key: 'Value', type: 'text', default: 'Placeholder text', label: 'Value (placeholder in Live)' },
        { key: 'Leading Icon', type: 'bool', default: false },
        { key: 'Trailing Icon', type: 'bool', default: false, label: 'Trailing Icon (clear)' },
        { key: 'Counter', type: 'bool', default: false },
        { key: 'Counter Text', type: 'text', default: '0/80', when: (s) => s.Counter },
      ],
    },
  ],
});
