// Split Button = Button (Action) + Icon Button (Menu). Menu düğmesi gerçek Menu komponentini açar
// (spec: "Menu opens a Menu aligned to the right edge"). Hiçbiri yeniden yazılmaz.
TDS.defineMenu('split-button', {
  label: 'More actions',
  Items: [
    { Label: 'Schedule', Icon: 'CalendarBlank' },
    { Label: 'Save as draft', Icon: 'FloppyDisk' },
    { separator: true },
    { Label: 'Delete', Icon: 'Trash', Destructive: true },
  ],
});
TDS.register('split-button', {
  defaults: { Variant: 'Primary', Size: 'Medium', State: 'Live', Label: 'Publish' },
  render(p) {
    const st = p.State;
    return `<span class="tds-split" role="group" aria-label="${TDS.esc(p.Label)}">`
      + TDS.render('button', { Variant: p.Variant, Size: p.Size, State: st, Label: p.Label, corners: 'left' })
      + TDS.render('icon-button', { Variant: p.Variant, Size: p.Size, State: st, Shape: 'Square', Icon: 'CaretDown', label: 'More actions', corners: 'right', menu: 'split-button', align: 'end' })
      + `</span>`;
  },
});
