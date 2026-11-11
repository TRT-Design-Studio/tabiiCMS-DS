// Tag Input sayfasının playground'u.
TDS.playground('#app', {
  title: 'Tag Input',
  components: [
    {
      name: 'tag-input', label: 'Tag Input',
      controls: [
        { key: 'Size', type: 'select', options: ['Small', 'Medium'], default: 'Medium' },
        { key: 'State', type: 'select', options: ["Live","Default","Focused","Filled","Error","Disabled","Read-only"], default: 'Live' },
        { key: 'Tags', type: 'text', default: 'Drama, Comedy', label: 'Tags (comma separated)' },
        { key: 'Placeholder', type: 'text', default: 'Add tags…' },
      ],
    },
  ],
});
