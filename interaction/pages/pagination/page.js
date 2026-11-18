// Pagination sayfasının playground'u: Pagination (çubuk, gerçekten sayfa değiştirir) ve Pagination Item (tek hücre).
TDS.playground('#app', {
  title: 'Pagination',
  components: [
    {
      name: 'pagination', label: 'Pagination',
      controls: [
        { key: 'Size', type: 'select', options: ['Desktop', 'Mobile'], default: 'Desktop' },
        { key: 'Total Items', type: 'text', default: '958', label: 'Total items (pages = total ÷ per page)' },
        { key: 'Show Total', type: 'bool', default: true },
        { key: 'Show Per Page', type: 'bool', default: true, when: (s) => s.Size === 'Desktop' },
        { key: 'Show Go To', type: 'bool', default: true, when: (s) => s.Size === 'Desktop' },
      ],
    },
    {
      name: 'pagination-item', label: 'Pagination Item',
      controls: [
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Selected', 'Disabled'], default: 'Live' },
        { key: 'Label', type: 'text', default: '1' },
        { key: 'Leading Icon', type: 'bool', default: false },
        { key: 'Trailing Icon', type: 'bool', default: false },
      ],
    },
  ],
});
