// Field Message. Önündeki ikon Tone'a göre spec'teki States tablosundan gelir (Leading icon sütunu).
// İç kullanım: id (kontrolün aria-describedby'ı için), fill (genişliği doldurur).
TDS.register('field-message', {
  defaults: { Tone: 'Helper', 'Show Text': true, Text: 'Helper text', 'Leading Icon': true, 'Trailing Icon': false, 'Trailing Icon Swap': 'Question', 'Show Counter': false, 'Counter Text': '0/80', id: '', fill: false },
  render(p) {
    const size = TDS.num(TDS.spec('field-message', 'Sizes')[0]?.icon); // 14
    const lead = TDS.spec('field-message', 'States', 'tone', p.Tone)['leading icon'] || 'Info';
    const role = p.Tone === 'Error' ? ' role="alert"' : '';
    return `<div class="tds-field-message" data-tone="${TDS.slug(p.Tone)}"${p.id ? ` id="${TDS.esc(p.id)}"` : ''}${p.fill ? ' data-fill' : ''}${role}>`
      + `<span class="tds-field-message-body">`
      + (p['Leading Icon'] ? TDS.icon(lead, size) : '')
      + (p['Show Text'] ? `<span>${TDS.esc(p.Text)}</span>` : '')
      + (p['Trailing Icon'] ? TDS.icon(p['Trailing Icon Swap'], size) : '')
      + `</span>`
      + (p['Show Counter'] ? `<span class="tds-field-message-counter">${TDS.esc(p['Counter Text'])}</span>` : '')
      + `</div>`;
  },
});
