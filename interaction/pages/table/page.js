// Table sayfasının playground'u: Table Cell, Table Header Cell ve Figma'daki "Show library" tablosu (Card içinde).
// Show library: Show sütunu Interactive Link, Published In sütunu Interactive True; Published In'deki her
// Icon Stat'ın üzerine gelince Tooltip açılır. Satır checkbox'ı veya True hücreye tıklamak satırı seçer,
// başlıktaki checkbox hepsini seçer. Actions gerçek menü açar. İçerik Figma'daki tablodan alındı.
const SHOWS = [
  ['MOVIE', "Temel: Sümela'nın Şifresi Yeniden", 'PGLCFL535796', [3, 2, 3, 1], 'Draft', false, '23 June 2026', 'Ayşe Çavdar'],
  ['SERIES', 'Dünya Kupasında Efsaneler', 'PGLCKD537887', [5, 5, 3, 1], 'Published', true, '23 June 2026', 'Merve Ceylan'],
  ['MOVIES', 'Çöl Kütüphaneleri', 'PGLCFL540108', [5, 5, 3, 1], 'Unpublished', false, '22 June 2026', 'Mücahit Püren'],
  ['MOVIES', 'Sertaç Abi Gezen Bilir', 'PGLCFL540358', [5, 5, 3, 1], 'Error', false, '22 June 2026', 'Ali Burak Yılmaz', true],
  ['SERIES', "Tunus'ta Bir Divan", 'PGLCFL589810', [5, 5, 3, 1], 'Published', true, '21 June 2026', 'Muzaffer Yüceli'],
  ['MOVIE', 'Sight Extended', 'PGLCFL535796', [5, 5, 3, 1], 'Published', true, '21 June 2026', 'Selin Dizgin'],
  ['LIVE EVENT', 'Maria', 'PGLCFL511412', [5, 5, 3, 1], 'Published', true, '21 June 2026', 'Saadet Şerefli'],
  ['LIVE EVENT', 'Dünya Kupasında Efsaneler', 'PGLCFL589810', [5, 5, 3, 1], 'Unpublished', false, '20 June 2026', 'Mustafa Budak'],
  ['MOVIE', "Temel: Sümela'nın Şifresi Yeniden", 'PGLCFL535796', [5, 5, 3, 1], 'Draft', false, '23 June 2026', 'Ayşe Çavdar'],
  ['MOVIES', 'Çöl Kütüphaneleri', 'PGLCFL540108', [5, 5, 3, 1], 'Error', false, '22 June 2026', 'Ali Burak Yılmaz'],
];
// Sütunlar: en küçük genişlik Figma'daki tablodan (yan padding 16 → 20 olduğu için +8; Checkbox 36, hug).
// Tablo responsive: kart en fazla 1144 px; dar ekranda sütunlar en küçük genişliğe kadar daralır, sonra tablo
// yatayda kayar. Geniş ekranda 1144'ten büyümez; aradaki boşluk sütunlara oranla dağılır.
const COLS = [['', 36], ['SHOW', 198], ['CONTENT ID', 181], ['PUBLISHED IN', 122], ['CMS', 143], ['TABII', 137], ['LAST UPDATED', 144], ['ACTIONS', 121]];
const MAX_WIDTH = 1144;
const TEMPLATE = COLS.map(([, m], i) => (i === 0 ? `${m}px` : `minmax(${m}px, ${m}fr)`)).join(' ');
const MIN_WIDTH = COLS.reduce((n, [, m]) => n + m, 0);
// Published In ikonları (Figma: Rows, ListBullets, Globe, Translate). Tooltip metni Figma'da sadece ilki için var ("Queue").
const PUBLISHED = [{ Icon: 'Rows', tip: 'Queue' }, { Icon: 'ListBullets', tip: 'Lists' }, { Icon: 'Globe', tip: 'Countries' }, { Icon: 'Translate', tip: 'Languages' }];
const CMS_TONE = { Draft: 'Neutral', Published: 'Success', Unpublished: 'Warning', Error: 'Danger' };
TDS.defineMenu('table-row-actions', { label: 'Row actions', Width: 200, Items: [{ Label: 'Edit', Icon: 'PencilSimple' }, { Label: 'Duplicate', Icon: 'Copy' }, { separator: true }, { Label: 'Delete', Icon: 'Trash', Destructive: true }] });
TDS.register('table-demo', {
  defaults: { 'Show Image': true },
  render(p) {
    const w = () => '';
    const head = `<div role="row" class="pg-table-row">`
      + COLS.map(([Label], i) => (i === 0
        ? TDS.render('table-header-cell', { Type: 'Checkbox', checked: 'Indeterminate', width: w(i) })
        : TDS.render('table-header-cell', { Label, Sortable: false, Divider: i < COLS.length - 1, width: w(i) }))).join('')
      + `</div>`;
    const rows = SHOWS.map(([over, title, id, counts, cms, onTabii, date, person, selected]) => {
      const published = PUBLISHED.map((x, k) => `<span data-tds-tooltip="${x.tip}" style="display:inline-flex">${TDS.render('icon-stat', { Icon: x.Icon, Value: String(counts[k]) })}</span>`).join('');
      const cells = [
        TDS.render('table-cell', { Type: 'Checkbox', width: w(0), selected }),
        TDS.render('table-cell', { Type: 'Two Line', Interactive: 'Link', Overline: over, Value: title, 'Show Image': p['Show Image'], width: w(1), selected }),
        TDS.render('table-cell', { Type: 'Slot', width: w(2), selected, slot: `<span class="tds-table-cell-value">${id}</span><span data-tds-tooltip="Copy" style="display:inline-flex">${TDS.render('icon-button', { Variant: 'Ghost', Size: 'XSmall', Icon: 'Copy', label: `Copy ${id}` })}</span>` }),
        TDS.render('table-cell', { Type: 'Slot', Interactive: 'True', width: w(3), selected, slot: published }),
        TDS.render('table-cell', { Type: 'Slot', width: w(4), selected, slot: TDS.render('status', { Tone: CMS_TONE[cms], Label: cms, 'Show dot': false, 'Show icon': true, Leading: 'Stack' }) }),
        TDS.render('table-cell', { Type: 'Slot', width: w(5), selected, slot: TDS.render('status', { Tone: onTabii ? 'Success' : 'Neutral', Label: onTabii ? 'On tabii' : 'Not on tabii', 'Show dot': false, 'Show icon': true, Leading: 'TabiiIcon' }) }),
        TDS.render('table-cell', { Type: 'Two Line', Overline: date, Value: person, width: w(6), selected }),
        TDS.render('table-cell', { Type: 'Slot', width: w(7), selected, slot: TDS.render('button', { Variant: 'Secondary', Size: 'XSmall', Label: 'Actions', 'Icon Right': true, iconRight: 'CaretDown', menu: 'table-row-actions', align: 'end' }) }),
      ];
      return `<div role="row" class="pg-table-row">${cells.join('')}</div>`;
    }).join('');
    // Yerleşim: her satır aynı grid şablonunu kullanır; hücreler kendi sütununu doldurur.
    const css = `<style>
.pg-table-fluid { display: flex; justify-content: center; width: 100%; }
.pg-table-fluid > .tds-card { width: 100%; max-width: ${MAX_WIDTH}px; }
.pg-table-scroll { overflow-x: auto; }
.pg-table { min-width: ${MIN_WIDTH}px; }
.pg-table-row { display: grid; grid-template-columns: ${TEMPLATE}; }
.pg-table-row > .tds-table-cell, .pg-table-row > .tds-table-header-cell { width: auto; min-width: 0; min-height: 0; }
.pg-table-fluid .tds-card-footer { overflow-x: auto; }
</style>`;
    const table = `${css}<div class="pg-table-scroll"><div role="grid" aria-label="Show library" class="pg-table">${head}${rows}</div></div>`;
    return `<div class="pg-table-fluid" data-pg-fluid="${MAX_WIDTH}">` + TDS.render('card', {
      Trailing: 'Slot - V', Title: 'Show library', Subtitle: 'in order of criticality, published first',
      body: table, Footer: true, footer: TDS.render('pagination', {}), flush: true,
    }) + `</div>`;
  },
});
// Başlıktaki checkbox: bütün satırlar seçilir / kaldırılır. Satır seçimi değişince başlık True / Indeterminate / False olur.
document.addEventListener('click', (e) => {
  const box = e.target.closest('.pg-table .tds-table-header-cell[data-type="checkbox"]');
  if (!box) return;
  const table = box.closest('.pg-table');
  const rows = [...table.querySelectorAll('[role="row"]')].slice(1);
  const on = !rows.every((r) => r.querySelector('.tds-table-cell').getAttribute('aria-selected') === 'true');
  rows.forEach((r) => { const c = r.querySelector('.tds-table-cell'); if ((c.getAttribute('aria-selected') === 'true') !== on) c.click(); });
});
document.addEventListener('tds-row-select', (e) => {
  const table = e.target.closest && e.target.closest('.pg-table');
  if (!table) return;
  const rows = [...table.querySelectorAll('[role="row"]')].slice(1);
  const n = rows.filter((r) => r.querySelector('.tds-table-cell').getAttribute('aria-selected') === 'true').length;
  const head = table.querySelector('.tds-table-header-cell[data-type="checkbox"]');
  const checked = n === 0 ? 'False' : n === rows.length ? 'True' : 'Indeterminate';
  const tmp = document.createElement('div');
  tmp.innerHTML = TDS.render('table-header-cell', { Type: 'Checkbox', checked, width: head.style.width });
  head.replaceWith(tmp.firstElementChild);
});
TDS.playground('#app', {
  title: 'Table',
  components: [
    {
      name: 'table-demo', label: 'Show library',
      controls: [{ key: 'Show Image', type: 'bool', default: true, label: 'Show column · Show Image' }],
    },
    {
      name: 'table-cell', label: 'Table Cell',
      controls: [
        { key: 'Type', type: 'select', options: ['Text', 'Two Line', 'Slot', 'Checkbox'], default: 'Text' },
        { key: 'Interactive', type: 'select', options: ['False', 'True', 'Link'], default: 'False', when: (s) => s.Type !== 'Checkbox' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover', 'Selected', 'Selected Hover'], default: 'Live', label: 'State (Hover: Interactive True, Link)' },
        { key: 'Value', type: 'text', default: 'Cell value', when: (s) => s.Type === 'Text' || s.Type === 'Two Line' },
        { key: 'Overline', type: 'text', default: 'MOVIE', when: (s) => s.Type === 'Two Line' },
        { key: 'Show Image', type: 'bool', default: false, when: (s) => s.Type !== 'Checkbox' },
      ],
    },
    {
      name: 'table-header-cell', label: 'Table Header Cell',
      controls: [
        { key: 'Type', type: 'select', options: ['Label', 'Checkbox'], default: 'Label' },
        { key: 'Sort', type: 'select', options: ['None', 'Ascending', 'Descending'], default: 'None', when: (s) => s.Type === 'Label' },
        { key: 'State', type: 'select', options: ['Live', 'Default', 'Hover'], default: 'Live', when: (s) => s.Type === 'Label' },
        { key: 'Label', type: 'text', default: 'COLUMN', when: (s) => s.Type === 'Label' },
        { key: 'Sortable', type: 'bool', default: true, when: (s) => s.Type === 'Label' },
        { key: 'Divider', type: 'bool', default: false },
      ],
    },
  ],
});
