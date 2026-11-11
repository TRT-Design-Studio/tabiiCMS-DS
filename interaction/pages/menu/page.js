// Menu sayfasının playground'u: Menu (liste durumları) ve Menu Item (satır).
// "Open from a button" sekmesi menünün bir tetikleyiciden açılışını gösterir.
TDS.defineMenu('menu-demo', {
  label: 'Row actions',
  Items: [
    { group: 'Show' },
    { Label: 'Edit', Icon: 'PencilSimple', 'Show Trailing Text': true, 'Trailing Text': '⌘E' },
    { Label: 'Duplicate', Icon: 'Copy', 'Show Trailing Text': true, 'Trailing Text': '⌘D' },
    { Label: 'Move to', Icon: 'FolderSimple', Submenu: true },
    { separator: true },
    { Label: 'Delete', Icon: 'Trash', Destructive: true },
  ],
});
TDS.register('menu-trigger-demo', {
  defaults: { Size: 'Medium' },
  render(p) {
    return TDS.render('icon-button', { Variant: 'Secondary', Size: p.Size, Icon: 'DotsThree', label: 'Row actions', menu: 'menu-demo', align: 'end' });
  },
});
TDS.playground('#app', {
  title: 'Menu',
  components: [
    {
      name: 'menu', label: 'Menu',
      controls: [
        { key: 'State', type: 'select', options: ['Default', 'Loading', 'No Results', 'Error', 'Hint'], default: 'Default' },
        { key: 'Width', type: 'text', default: '240', label: 'Width (px)' },
      ],
    },
    {
      name: 'menu-item', label: 'Menu Item',
      controls: [
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Focused', 'Selected', 'Disabled'], default: 'Live' },
        { key: 'Destructive', type: 'select', options: ['False', 'True'], default: 'False', label: 'Destructive (Default, Hover, Focused)' },
        { key: 'Label', type: 'text', default: 'Menu item' },
        { key: 'Show Description', type: 'bool', default: false },
        { key: 'Description', type: 'text', default: 'Description', when: (s) => s['Show Description'] },
        { key: 'Leading Icon', type: 'bool', default: false },
        { key: 'Icon', type: 'select', options: TDS.iconNames(), default: 'Copy', label: 'Leading Icon Swap', when: (s) => s['Leading Icon'] },
        { key: 'Show Trailing Text', type: 'bool', default: false },
        { key: 'Trailing Text', type: 'text', default: '⌘D', when: (s) => s['Show Trailing Text'] },
        { key: 'Submenu', type: 'bool', default: false },
      ],
    },
    {
      name: 'menu-trigger-demo', label: 'Open from a button',
      controls: [{ key: 'Size', type: 'select', options: ['XSmall', 'Small', 'Medium', 'Large'], default: 'Medium' }],
    },
  ],
});
