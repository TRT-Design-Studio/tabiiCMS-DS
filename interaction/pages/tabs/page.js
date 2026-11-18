// Tabs sayfasının playground'u: Tabs (gerçekten seçim değiştirir), Tab Segment ve Tab Underline.
// Tabs: tab'ler Labels alanından gelir (Figma'daki Slot gibi, istediğin kadar). Locked: kilitli tab numaraları.
const SPACING = ['Spacing/0', 'Spacing/1', 'Spacing/2', 'Spacing/3', 'Spacing/4', 'Spacing/6'];
TDS.playground('#app', {
  title: 'Tabs',
  components: [
    {
      name: 'tabs', label: 'Tabs',
      controls: [
        { key: 'Type', type: 'select', options: ['Segmented', 'Underline'], default: 'Segmented' },
        { key: 'Labels', type: 'text', default: 'Tab, Tab, Tab, Tab, Tab', label: 'Tab labels (comma separated)' },
        { key: 'Locked', type: 'text', default: '', label: 'Locked tabs (numbers, e.g. 3, 5)' },
        { key: 'Leading Icon', type: 'bool', default: false },
        { key: 'Leading Icon Swap', type: 'select', options: TDS.iconNames(), default: 'SquaresFour', when: (s) => s['Leading Icon'] },
        { key: 'Motion', type: 'select', options: ['Fade', 'Slide'], default: 'Fade', label: 'Selection motion' },
        { key: 'Gap', type: 'select', options: SPACING, default: 'Spacing/6', label: 'Gap between tabs', when: (s) => s.Type === 'Underline' },
        { key: 'Row Padding', type: 'select', options: SPACING, default: 'Spacing/1', label: 'Row padding (before first, after last tab)', when: (s) => s.Type === 'Underline' },
        { key: 'Tab Width', type: 'select', options: ['Hug', 'Fill'], default: 'Hug', when: (s) => s.Type === 'Underline' },
        { key: 'Width', type: 'text', default: '560', label: 'Tabs width (px, Fill)', when: (s) => s.Type === 'Underline' && s['Tab Width'] === 'Fill' },
        { key: 'Text Align', type: 'select', options: ['Center', 'Left'], default: 'Center', when: (s) => s.Type === 'Underline' && s['Tab Width'] === 'Fill' },
      ],
    },
    {
      name: 'tab-segment', label: 'Tab Segment',
      controls: [
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Selected', 'Disabled'], default: 'Live' },
        { key: 'Label', type: 'text', default: 'Tab' },
        { key: 'Leading Icon', type: 'bool', default: false },
        { key: 'Leading Icon Swap', type: 'select', options: TDS.iconNames(), default: 'SquaresFour', when: (s) => s['Leading Icon'] },
        { key: 'Trailing Icon', type: 'bool', default: false },
        { key: 'Trailing Icon Swap', type: 'select', options: TDS.iconNames(), default: 'Lock', when: (s) => s['Trailing Icon'] },
      ],
    },
    {
      name: 'tab-underline', label: 'Tab Underline',
      controls: [
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Selected', 'Disabled'], default: 'Live' },
        { key: 'Label', type: 'text', default: 'Tab' },
        { key: 'Leading Icon', type: 'bool', default: false },
        { key: 'Leading Icon Swap', type: 'select', options: TDS.iconNames(), default: 'SquaresFour', when: (s) => s['Leading Icon'] },
        { key: 'Trailing Icon', type: 'bool', default: false },
        { key: 'Trailing Icon Swap', type: 'select', options: TDS.iconNames(), default: 'Lock', when: (s) => s['Trailing Icon'] },
      ],
    },
  ],
});
