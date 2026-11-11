// Phone Field. Input'un Leading slot'unda ülke kodu düğmesi (Button Ghost XSmall: bayrak + kod + caret).
// Düğme gerçek Menu'yü açar, ülke seçilince bayrak ve kod değişir; numara seçilen ülkenin düzenine göre yazılır.
const PHONE_COUNTRIES = [
  { code: 'TR', name: 'Türkiye', dial: '+90', mask: '### ### ## ##' },
  { code: 'DE', name: 'Germany', dial: '+49', mask: '### #######' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', mask: '#### ######' },
  { code: 'US', name: 'United States', dial: '+1', mask: '### ### ####' },
];
const phoneFormat = (digits, mask) => {
  let out = '', i = 0;
  for (const ch of mask) { if (i >= digits.length) break; if (ch === '#') out += digits[i++]; else out += ch; }
  return out;
};
TDS.defineMenu('phone-country', (trigger) => ({
  label: 'Country code',
  Width: 240,
  Items: PHONE_COUNTRIES.map((c) => ({ Label: c.name, value: c.code, leading: TDS.flag(c.code, TDS.num(TDS.spec('phone-field', 'Parts', 'part', 'Flag').size)), 'Show Trailing Text': true, 'Trailing Text': c.dial, Check: c.code === trigger.dataset.country })),
}));
TDS.register('phone-field', {
  defaults: { Size: 'Medium', State: 'Live', Country: 'TR', Value: '532 123 45 67' },
  render(p) {
    const c = PHONE_COUNTRIES.find((x) => x.code === p.Country) || PHONE_COUNTRIES[0];
    const st = p.State && p.State !== 'Live' ? TDS.slug(p.State) : '';
    const locked = st === 'disabled' || st === 'read-only';
    // Ülke kodu düğmesi: Button Ghost XSmall, bayrak 14, caret 14 (spec → Parts).
    const flagSize = TDS.num(TDS.spec('phone-field', 'Parts', 'part', 'Flag').size); // 14
    const country = TDS.render('button', { Variant: 'Ghost', Size: 'XSmall', Label: c.dial, before: TDS.flag(c.code, flagSize), 'Icon Right': true, iconRight: 'CaretDown', State: st === 'disabled' ? 'Disabled' : 'Live', menu: locked ? '' : 'phone-country', attrs: `data-country="${c.code}" aria-label="Country code ${TDS.esc(c.dial)}, ${TDS.esc(c.name)}"` });
    const value = st === 'default' ? '' : phoneFormat(String(p.Value).replace(/\D/g, ''), c.mask);
    return `<div class="tds-phone-field" data-size="${TDS.slug(p.Size)}" data-tds-comp="phone-field"${TDS.props(p)}>`
      + TDS.render('input', { Size: p.Size, State: p.State, value, placeholder: c.mask.replace(/#/g, '0'), inputmode: 'tel', label: 'Phone number', leading: country, attrs: 'data-phone-value' })
      + `</div>`;
  },
});
// Yazarken numara ülkenin düzenine göre boşluklanır.
document.addEventListener('input', (e) => {
  const f = e.target.closest && e.target.closest('[data-phone-value]');
  if (!f) return;
  const root = f.closest('.tds-phone-field');
  const c = PHONE_COUNTRIES.find((x) => x.code === TDS.read(root).Country) || PHONE_COUNTRIES[0];
  const digits = f.value.replace(/\D/g, '').slice(0, c.mask.split('#').length - 1);
  f.value = phoneFormat(digits, c.mask);
  root.dataset.tdsProps = JSON.stringify({ ...TDS.read(root), Value: digits });
});
document.addEventListener('tds-menu-select', (e) => {
  const root = e.target.closest && e.target.closest('.tds-phone-field');
  if (!root) return;
  const fresh = TDS.update(root, { Country: e.detail.value });
  fresh.querySelector('[data-phone-value]')?.focus();
});
