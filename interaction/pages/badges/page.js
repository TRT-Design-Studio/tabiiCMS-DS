// Badges, Status & Tag sayfasının playground'u.
TDS.playground('#app', {
  title: 'Badges, Status & Tag',
  components: [
    {
      name: 'badge-count', label: 'Badge Count',
      controls: [
        { key: 'Tone', type: 'select', options: ['Neutral', 'Strong', 'Info', 'Danger'], default: 'Neutral' },
        { key: 'Count', type: 'text', default: '5', label: 'Count (above 99 shows 99+)' },
      ],
    },
    {
      name: 'badge-dot', label: 'Badge Dot',
      controls: [
        { key: 'Tone', type: 'select', options: ['Neutral', 'Strong', 'Info', 'Success', 'Warning', 'Danger'], default: 'Info' },
        { key: 'Size', type: 'select', options: ['Small', 'Medium'], default: 'Medium' },
      ],
    },
    {
      name: 'badge-label', label: 'Badge Label',
      controls: [
        { key: 'Tone', type: 'select', options: ['Strong', 'Info'], default: 'Strong' },
        { key: 'Label', type: 'text', default: 'New' },
      ],
    },
    {
      name: 'status', label: 'Status',
      controls: [
        { key: 'Tone', type: 'select', options: ['Neutral', 'Info', 'Success', 'Warning', 'Danger'], default: 'Neutral' },
        { key: 'Size', type: 'select', options: ['Small', 'Medium'], default: 'Small' },
        { key: 'Interactive', type: 'select', options: ['False', 'True'], default: 'False' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover'], default: 'Live', when: (s) => s.Interactive === 'True', label: 'State (Interactive only)' },
        { key: 'Label', type: 'text', default: 'Draft' },
        { key: 'Show dot', type: 'bool', default: true },
        { key: 'Show icon', type: 'bool', default: false, label: 'Show icon (replaces the dot)' },
      ],
    },
    {
      name: 'tag', label: 'Tag',
      controls: [
        { key: 'Type', type: 'select', options: ['Static', 'Removable', 'Link'], default: 'Static' },
        { key: 'Size', type: 'select', options: ['Small', 'Medium'], default: 'Small' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Disabled', 'Read-only'], default: 'Live', label: 'State (Read-only = Static only)' },
        { key: 'Label', type: 'text', default: 'Drama' },
        { key: 'Leading Icon', type: 'bool', default: false },
      ],
    },
  ],
});
