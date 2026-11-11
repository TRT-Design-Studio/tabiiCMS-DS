// Datepicker sayfasının playground'u.
TDS.playground('#app', {
  title: 'Datepicker',
  components: [
    {
      name: 'calendar', label: 'Calendar',
      controls: [
        { key: 'Type', type: 'select', options: ['Date', 'Date & Time'], default: 'Date' },
        { key: 'Selection', type: 'select', options: ['Single', 'Range'], default: 'Single' },
      ],
    },
    {
      name: 'calendar-header', label: 'Calendar Header',
      controls: [
        { key: 'Month', type: 'select', options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], default: 'October' },
        { key: 'Year', type: 'text', default: '2026' },
      ],
    },
    {
      name: 'calendar-day', label: 'Calendar Day',
      controls: [
        { key: 'State', type: 'select', options: ['Default', 'Hover', 'Today', 'Focused', 'Selected', 'Today Selected', 'Range Start', 'In Range', 'Today In Range', 'Range End', 'Disabled', 'Outside Month'], default: 'Default' },
        { key: 'Week Edge', type: 'select', options: ['None', 'First', 'Last'], default: 'None', when: (s) => /In Range/.test(s.State) },
        { key: 'Day', type: 'text', default: '15' },
      ],
    },
  ],
});
