// Select sayfasının playground'u.
TDS.playground('#app', {
  title: 'Select',
  components: [
    {
      name: 'select', label: 'Select',
      controls: [
        { key: 'Size', type: 'select', options: ['Small', 'Medium', 'Large'], default: 'Medium' },
        { key: 'State', type: 'select', options: ["Live","Default","Focused","Filled","Error","Disabled","Read-only"], default: 'Live' },
        { key: 'Value', type: 'text', default: 'Select an option' },
        { key: 'Options', type: 'text', default: 'Drama, Comedy, Documentary, Kids', label: 'Options (comma separated)' },
        { key: 'Leading Icon', type: 'bool', default: false },
      ],
    },
  ],
});
