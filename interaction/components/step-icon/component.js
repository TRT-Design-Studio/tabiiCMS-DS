// Step Icon. Hangi ikon ve kalınlık spec'teki States tablosundan okunur (Empty: Circle Regular, Current: RadioButton Fill…).
// Çizim fonksiyonları ikon adlarını açıkça yazar, böylece build onları SVG olarak gömer.
(function () {
  const draw = {
    'Circle:Regular': (s) => TDS.icon('Circle', s),
    'RadioButton:Fill': (s) => TDS.icon('RadioButton', s, 'Fill'),
    'CheckCircle:Fill': (s) => TDS.icon('CheckCircle', s, 'Fill'),
    'XCircle:Fill': (s) => TDS.icon('XCircle', s, 'Fill'),
  };
  TDS.register('step-icon', {
    defaults: { Status: 'Empty' },
    render(p) {
      const row = TDS.spec('step-icon', 'States', 'status', p.Status);
      const size = TDS.num(TDS.spec('step-icon', 'Sizes', 'size', 'Default').height); // 16
      const [, name, weight] = /^(\w+) \((Regular|Fill)\)/.exec(row.icon || '') || [];
      const fn = draw[`${name}:${weight}`];
      if (!fn) throw new Error(`step-icon: spec'teki "${row.icon}" ikonu component.js'te yok`);
      return `<span class="tds-step-icon" data-status="${TDS.slug(p.Status)}" aria-hidden="true">${fn(size)}</span>`;
    },
  });
})();
