// Phone Field sayfasının playground'u.
TDS.playground('#app', {
  title: 'Phone Field',
  components: [
    {
      name: 'phone-field', label: 'Phone Field',
      controls: [
        { key: 'Size', type: 'select', options: ['Medium', 'Small'], default: 'Medium' },
        { key: 'State', type: 'select', options: ["Live","Default","Focused","Filled","Error","Disabled"], default: 'Live' },
        { key: 'Country', type: 'select', options: ['TR', 'DE', 'GB', 'US'], default: 'TR' },
        { key: 'Value', type: 'text', default: '532 123 45 67' },
      ],
    },
  ],
});
