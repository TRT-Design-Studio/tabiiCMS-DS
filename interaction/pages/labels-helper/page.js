// Labels & Helper sayfasının playground'u.
TDS.playground('#app', {
  title: 'Labels & Helper',
  components: [
    {
      name: 'label', label: 'Label',
      controls: [
        { key: 'Emphasis', type: 'select', options: ['Default', 'Subtle'], default: 'Default' },
        { key: 'State', type: 'select', options: ['Default', 'Disabled'], default: 'Default' },
        { key: 'Label', type: 'text', default: 'Label' },
        { key: 'Required', type: 'bool', default: false },
        { key: 'Help', type: 'bool', default: false },
        { key: 'HelpText', type: 'text', default: 'Help text', label: 'Help tooltip', when: (s) => s.Help },
        { key: 'Show Meta', type: 'bool', default: false },
        { key: 'Meta Text', type: 'text', default: 'Optional', when: (s) => s['Show Meta'] },
        { key: 'Show Description', type: 'bool', default: false },
        { key: 'Description', type: 'text', default: 'Description', when: (s) => s['Show Description'] },
      ],
    },
    {
      name: 'field-message', label: 'Field Message',
      controls: [
        { key: 'Tone', type: 'select', options: ['Helper', 'Error', 'Warning', 'Info', 'Success'], default: 'Helper' },
        { key: 'Show Text', type: 'bool', default: true },
        { key: 'Text', type: 'text', default: 'Helper text', when: (s) => s['Show Text'] },
        { key: 'Leading Icon', type: 'bool', default: true },
        { key: 'Trailing Icon', type: 'bool', default: false },
        { key: 'Show Counter', type: 'bool', default: false },
        { key: 'Counter Text', type: 'text', default: '0/80', when: (s) => s['Show Counter'] },
      ],
    },
  ],
});
