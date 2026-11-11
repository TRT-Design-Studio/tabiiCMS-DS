// Form Field. Label + kontrol (Input, Select, Textarea) + Field Message. State bir kez verilir ve üç parçaya geçer
// (spec → States). State=Default'ta kontrol canlıdır (yazılabilir / seçilebilir).
let formFieldId = 0;
TDS.register('form-field', {
  defaults: { Control: 'Input', State: 'Default', 'Show Label': true, 'Show Message': false, Label: 'Label', Required: false, Help: false, 'Message Tone': 'Helper', 'Message Text': 'Helper text', 'Show Counter': false },
  render(p) {
    const id = `ff-${++formFieldId}`;
    const st = TDS.slug(p.State);
    const control = { default: 'Live', error: 'Error', disabled: 'Disabled' }[st] || 'Live';
    const tone = st === 'error' ? 'Error' : p['Message Tone'];
    const msgId = p['Show Message'] ? `${id}-msg` : '';
    const ctl = p.Control === 'Select'
      ? TDS.render('select', { State: control, id, describedby: msgId, width: '100%' })
      : p.Control === 'Textarea'
        ? TDS.render('textarea', { State: control, id, describedby: msgId, Counter: p['Show Counter'], width: '100%' })
        : TDS.render('input', { State: control, id, describedby: msgId, value: '', placeholder: TDS.get('input').defaults.Value, Counter: p['Show Counter'], width: '100%' });
    return `<div class="tds-form-field" data-state="${st}">`
      + (p['Show Label'] ? TDS.render('label', { Label: p.Label, Required: p.Required, Help: p.Help, State: st === 'disabled' ? 'Disabled' : 'Default', htmlFor: id, fill: true }) : '')
      + ctl
      + (p['Show Message'] ? TDS.render('field-message', { Tone: tone, Text: p['Message Text'], id: msgId, fill: true }) : '')
      + `</div>`;
  },
});
