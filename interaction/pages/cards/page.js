// Cards sayfasının playground'u: Card, Card Header, Stat Card (Trend ile), Icon Stat ve User Card (menü açar).
const trailing = ['None', 'Badge', 'Action', 'Slot - H', 'Slot - V'];
TDS.playground('#app', {
  title: 'Cards',
  components: [
    {
      name: 'card', label: 'Card',
      controls: [
        { key: 'Style', type: 'select', options: ['Default', 'Subtle'], default: 'Default' },
        { key: 'Header', type: 'bool', default: true },
        { key: 'Trailing', type: 'select', options: trailing, default: 'Action', label: 'Header · Trailing', when: (s) => s.Header },
        { key: 'Title', type: 'text', default: 'Card title', label: 'Header · Title', when: (s) => s.Header },
        { key: 'Show Subtitle', type: 'bool', default: true, label: 'Header · Show Subtitle', when: (s) => s.Header },
        { key: 'Subtitle', type: 'text', default: 'Supporting text', label: 'Header · Subtitle', when: (s) => s.Header && s['Show Subtitle'] },
        { key: 'Body Content', type: 'select', options: ['Placeholder', 'List Items', 'Stat Cards'], default: 'List Items', label: 'Body slot content' },
        { key: 'Footer', type: 'bool', default: false },
      ],
    },
    {
      name: 'card-header', label: 'Card Header',
      controls: [
        { key: 'Trailing', type: 'select', options: trailing, default: 'None' },
        { key: 'Title', type: 'text', default: 'Card title' },
        { key: 'Show Subtitle', type: 'bool', default: true },
        { key: 'Subtitle', type: 'text', default: 'Supporting text', when: (s) => s['Show Subtitle'] },
      ],
    },
    {
      name: 'stat-card', label: 'Stat Card',
      controls: [
        { key: 'Label', type: 'text', default: 'Metric label' },
        { key: 'Value', type: 'text', default: '847' },
        { key: 'Show Trend', type: 'bool', default: true },
        { key: 'Direction', type: 'select', options: ['Positive', 'Negative', 'Neutral'], default: 'Positive', label: 'Trend · Direction', when: (s) => s['Show Trend'] },
        { key: 'Trend Value', type: 'text', default: '12', label: 'Trend · Value', when: (s) => s['Show Trend'] },
        { key: 'Show Context', type: 'bool', default: true, label: 'Trend · Show Context', when: (s) => s['Show Trend'] },
        { key: 'Context', type: 'text', default: 'vs last month', label: 'Trend · Context', when: (s) => s['Show Trend'] && s['Show Context'] },
      ],
    },
    {
      name: 'icon-stat', label: 'Icon Stat',
      controls: [
        { key: 'Layout', type: 'select', options: ['Vertical', 'Horizontal'], default: 'Vertical' },
        { key: 'Icon', type: 'select', options: TDS.iconNames(), default: 'Globe' },
        { key: 'Value', type: 'text', default: '3' },
      ],
    },
    {
      name: 'user-card', label: 'User Card',
      controls: [
        { key: 'Layout', type: 'select', options: ['Full', 'Compact'], default: 'Full' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover'], default: 'Live' },
        { key: 'Name', type: 'text', default: 'Ayse Cavdar', when: (s) => s.Layout === 'Full' },
        { key: 'Email', type: 'text', default: 'ayse.cavdar@trt.net.tr', when: (s) => s.Layout === 'Full' },
        { key: 'Initials', type: 'text', default: 'AC', label: 'Avatar · Initials' },
        { key: 'Color', type: 'select', options: ['Neutral', 'Blue', 'Purple', 'Teal', 'Pink'], default: 'Neutral', label: 'Avatar · Color' },
      ],
    },
  ],
});
