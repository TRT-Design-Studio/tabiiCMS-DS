// Filter Group sayfasının playground'u.
TDS.playground('#app', {
  title: 'Filter Group',
  components: [
    {
      name: 'filter-group', label: 'Filter Group',
      controls: [
        { key: 'State', type: 'select', options: ['Expanded', 'Collapsed'], default: 'Expanded' },
        { key: 'Title', type: 'text', default: 'Producer' },
        { key: 'Show Count', type: 'bool', default: true },
        { key: 'Show Clear', type: 'bool', default: true },
        { key: 'Show Search', type: 'bool', default: true },
        { key: 'Options', type: 'text', default: 'Ay Yapım:24, Tims&B:18, OGM Pictures:12, Most Production:9, D Productions:7', label: 'Options (name:count, comma separated)' },
      ],
    },
  ],
});
