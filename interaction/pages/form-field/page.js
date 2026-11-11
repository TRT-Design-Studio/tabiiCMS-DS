// Form Field sayfasının playground'u.
TDS.playground('#app', {
  title: 'Form Field',
  components: [
    {
      name: 'form-field', label: 'Form Field',
      controls: [
        { key: 'Control', type: 'select', options: ['Input', 'Select', 'Textarea'], default: 'Input' },
        { key: 'State', type: 'select', options: ['Default', 'Error', 'Disabled'], default: 'Default' },
        { key: 'Show Label', type: 'bool', default: true },
        { key: 'Label', type: 'text', default: 'Label', when: (s) => s['Show Label'] },
        { key: 'Required', type: 'bool', default: false, when: (s) => s['Show Label'] },
        { key: 'Help', type: 'bool', default: false, when: (s) => s['Show Label'] },
        { key: 'Show Message', type: 'bool', default: false },
        { key: 'Message Tone', type: 'select', options: ['Helper', 'Warning', 'Info', 'Success'], default: 'Helper', label: 'Message Tone (Error comes from State)', when: (s) => s['Show Message'] },
        { key: 'Message Text', type: 'text', default: 'Helper text', when: (s) => s['Show Message'] },
        { key: 'Show Counter', type: 'bool', default: false, label: 'Counter (Input, Textarea)', when: (s) => s.Control !== 'Select' },
      ],
    },
  ],
});
