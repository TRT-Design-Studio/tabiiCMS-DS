// List Item sayfasının playground'u.
TDS.playground('#app', {
  title: 'List Item',
  components: [
    {
      name: 'list-item', label: 'List Item',
      controls: [
        { key: 'Type', type: 'select', options: ['Issue', 'Activity', 'Note', 'Slot'], default: 'Issue' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover'], default: 'Live' },
        { key: 'Title', type: 'text', default: 'List item title' },
        { key: 'Show Description', type: 'bool', default: true },
        { key: 'Description', type: 'text', default: 'Supporting text', when: (s) => s['Show Description'] },
        { key: 'Icon', type: 'select', options: TDS.iconNames(), default: 'TrendUp', when: (s) => s.Type === 'Issue' },
        { key: 'Initials', type: 'text', default: 'AC', label: 'Avatar · Initials', when: (s) => s.Type === 'Activity' },
        { key: 'Note Tag', type: 'text', default: 'Lisans Yenileme', label: 'Status tag', when: (s) => s.Type === 'Note' },
      ],
    },
  ],
});
