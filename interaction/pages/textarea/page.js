// Textarea sayfasının playground'u.
TDS.playground('#app', {
  title: 'Textarea',
  components: [
    {
      name: 'textarea', label: 'Textarea',
      controls: [
        { key: 'State', type: 'select', options: ["Live","Default","Focused","Filled","Error","Disabled","Read-only"], default: 'Live' },
        { key: 'Value', type: 'text', default: 'Write text here ...', label: 'Value (placeholder in Live)' },
        { key: 'Counter', type: 'bool', default: false },
        { key: 'Counter Text', type: 'text', default: '0/500', when: (s) => s.Counter },
      ],
    },
  ],
});
