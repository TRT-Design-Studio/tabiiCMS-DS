// Breadcrumb sayfasının playground'u: Breadcrumb (iz) ve Breadcrumb Item (tek adım).
TDS.playground('#app', {
  title: 'Breadcrumb',
  components: [
    {
      name: 'breadcrumb', label: 'Breadcrumb',
      controls: [
        { key: 'Content', type: 'select', options: ['Items', 'Slot', 'Collapsed'], default: 'Items' },
        { key: 'Show Back', type: 'bool', default: false },
        { key: 'Show Middle', type: 'bool', default: true, when: (s) => s.Content === 'Items' },
        { key: 'Item 1', type: 'text', default: 'Show Dashboard', when: (s) => s.Content !== 'Slot' },
        { key: 'Item 2', type: 'text', default: 'Shows', when: (s) => s.Content === 'Collapsed' || (s.Content === 'Items' && s['Show Middle']) },
        { key: 'Current', type: 'text', default: 'Create Show', when: (s) => s.Content !== 'Slot' },
        { key: 'Slot Items', type: 'text', default: 'Shows, Drama, Season 1, Episode 4', label: 'Slot items (comma separated)', when: (s) => s.Content === 'Slot' },
      ],
    },
    {
      name: 'breadcrumb-item', label: 'Breadcrumb Item',
      controls: [
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Current', 'Focused', 'Collapsed'], default: 'Live' },
        { key: 'Label', type: 'text', default: 'Page', when: (s) => s.State !== 'Collapsed' },
        { key: 'Icon', type: 'bool', default: false, when: (s) => s.State !== 'Collapsed' },
        { key: 'Separator', type: 'bool', default: true },
      ],
    },
  ],
});
