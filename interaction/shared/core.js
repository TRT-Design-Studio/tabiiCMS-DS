// Tarayıcı tarafı temel: komponent kayıt defteri, ikonlar, spec okuma ve açılır menü.
// Kurallar: rules/core/interaction/code-layer.md
(function () {
  const comps = {};
  const menus = {};
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const TDS = {
    esc,
    slug,
    register(name, def) { comps[name] = def; },
    get(name) { return comps[name]; },
    // HTML string döndürür. İç içe komponentler birbirini bununla çağırır.
    render(name, props) {
      if (!comps[name]) throw new Error(`"${name}" komponenti bu sayfaya eklenmemiş (page.json → components)`);
      return comps[name].render({ ...comps[name].defaults, ...props });
    },

    // İkon: Figma'daki Icons sayfasıyla aynı paket (Phosphor), build sırasında SVG olarak gömülür.
    // Weight: "Regular" veya "Fill". Boyut verilmezse komponentin CSS'i (spec'teki Icon sütunu) belirler.
    // SVG'nin kendi boyutu 1em'dir: CSS yüklenmese bile ikon yazı boyutunu aşmaz.
    // attrs: ikonun kendisine eklenecek nitelikler (ör. 'data-part="submenu"'). İkon ekstra bir kutuya sarılmaz,
    // yoksa satır yüksekliği yüzünden 16×16 ikon 16×20 kutuda durur.
    icon(name, size, weight = 'Regular', attrs = '') {
      const st = size ? ` style="font-size:${size}px"` : '';
      const custom = (window.TDS_ICONS || {})[name];
      const paths = custom || ((window.TDS_PHOSPHOR || {})[weight] || {})[name];
      if (!paths) {
        console.warn(`TDS.icon: "${name}" (${weight}) bu sayfaya gömülmemiş. interaction/shared/icon-list.json dosyasına ekleyip build'i çalıştır.`);
        return `<span class="tds-icon" aria-hidden="true"${st} title="${esc(name)}"></span>`;
      }
      const viewBox = custom ? '0 0 32 32' : '0 0 256 256';
      // Boyut verildiyse SVG'ye px olarak yazılır: CSS'ten bağımsız, Figma'daki ikon boyutuyla birebir.
      const dim = size ? `${size}px` : '1em';
      const box = size ? ` style="width:${size}px;height:${size}px;font-size:${size}px"` : '';
      return `<span class="tds-icon"${attrs ? " " + attrs : ""} aria-hidden="true"${box}><svg width="${dim}" height="${dim}" viewBox="${viewBox}" fill="currentColor" focusable="false">${paths}</svg></span>`;
    },
    // Spec tablosu satırı: TDS.spec('button', 'Sizes', 'size', 'Medium') → { size, height, icon, ... }
    // Komponentler ikon boyutunu buradan alır, böylece Figma'daki komponentle aynı olur.
    spec(name, heading, key, value, index = 0) {
      const t = ((window.TDS_SPEC || {})[name] || {})[heading];
      const rows = (t && t[index]) || [];
      return key ? (rows.find((r) => String(r[key]).toLowerCase() === String(value).toLowerCase()) || {}) : rows;
    },
    // "16 (`Spacing/4`)" → 16
    num(cell) { return parseFloat(String(cell || '').replace(/[^\d.]/g, '')) || undefined; },
    iconNames(weight = 'Regular') { return Object.keys((window.TDS_PHOSPHOR || {})[weight] || {}); },
    // Bayrak: Figma'daki Flags (circle-flags). Kod: "TR", "DE"…
    flag(code, size = 14) {
      return `<img class="tds-flag" src="https://hatscripts.github.io/circle-flags/flags/${String(code).toLowerCase()}.svg" width="${size}" height="${size}" alt="">`;
    },

    // Açılır menü. Bir tetikleyiciye data-tds-menu="<isim>" verilir; menü içeriği TDS.menus ile tanımlanır.
    menus,
    defineMenu(name, props) { menus[name] = props; },
    closeMenu(returnFocus) {
      const open = document.querySelector('.tds-popover');
      if (!open) return;
      const trigger = open._trigger;
      open.remove();
      if (trigger) { trigger.setAttribute('aria-expanded', 'false'); if (returnFocus) trigger.focus(); }
    },
    openMenu(trigger) {
      TDS.closeMenu();
      const name = trigger.dataset.tdsMenu;
      const props = typeof menus[name] === 'function' ? menus[name](trigger) : menus[name];
      if (!props) return;
      const pop = document.createElement('div');
      pop.className = 'tds-popover';
      pop._trigger = trigger;
      pop.innerHTML = TDS.render('menu', props);
      document.body.appendChild(pop);
      const r = trigger.getBoundingClientRect();
      const gap = 4; // Menu spec: "Opens 4 px below its trigger"
      const align = trigger.dataset.tdsAlign || 'start';
      pop.style.top = `${r.bottom + gap + window.scrollY}px`;
      const left = align === 'end' ? r.right - pop.offsetWidth : r.left;
      pop.style.left = `${Math.max(8, left + window.scrollX)}px`;
      trigger.setAttribute('aria-expanded', 'true');
      const first = pop.querySelector('[role="menuitem"]:not([aria-disabled="true"])');
      if (first) first.focus();
    },

    // Playground arayüzü shared/playground.js dosyasında: TDS.playground(mount, page).
  };

  // Menü davranışı: tıklama, klavye (oklar, Enter, Escape, Tab) ve dışarı tıklama.
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-tds-menu]');
    if (trigger && !trigger.disabled) {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      if (isOpen) TDS.closeMenu(); else TDS.openMenu(trigger);
      return;
    }
    const item = e.target.closest('.tds-popover [role="menuitem"]');
    if (item) { if (item.getAttribute('aria-disabled') !== 'true') TDS.closeMenu(true); return; }
    if (!e.target.closest('.tds-popover')) TDS.closeMenu();
  });
  document.addEventListener('keydown', (e) => {
    const pop = document.querySelector('.tds-popover');
    if (!pop) return;
    const items = [...pop.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'Escape') { e.preventDefault(); TDS.closeMenu(true); }
    else if (e.key === 'Tab') TDS.closeMenu();
    else if (e.key === 'ArrowDown') { e.preventDefault(); (items[i + 1] || items[0])?.focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); (items[i - 1] || items[items.length - 1])?.focus(); }
    else if (e.key === 'Home') { e.preventDefault(); items[0]?.focus(); }
    else if (e.key === 'End') { e.preventDefault(); items[items.length - 1]?.focus(); }
    else if ((e.key === 'Enter' || e.key === ' ') && i >= 0) { e.preventDefault(); items[i].click(); }
  });

  window.TDS = TDS;
})();
