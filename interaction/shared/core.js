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
    // "16 (`Spacing/4`)" → 16, "`Spacing/3` (12)" → 12 (lib/spec.mjs → v.num ile aynı)
    num(cell) { const n = ((cell) => { const s = String(cell == null ? '' : cell).trim(); const lead = /^-?\d+(?:\.\d+)?/.exec(s); if (lead) return parseFloat(lead[0]); const par = /\((\d+(?:\.\d+)?)\)/.exec(s); if (par) return parseFloat(par[1]); const any = /\d+(?:\.\d+)?/.exec(s); return any ? parseFloat(any[0]) : NaN; })(cell); return Number.isFinite(n) ? n : undefined; },
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
    // Açılan katmanı (menü, tooltip) tetikleyicinin yanına koyar. Tetikleyici yakınlaştırılmış sahnedeyse
    // ([data-tds-layer]) katman da sahnenin içine girer, böylece aynı ölçekte durur ve yerinden kaymaz.
    place(trigger, el, fn) {
      const layer = trigger.closest('[data-tds-layer]');
      const box = layer || document.body;
      box.appendChild(el);
      const c = layer ? layer.getBoundingClientRect() : { top: -window.scrollY, left: -window.scrollX };
      const s = layer && layer.offsetWidth ? c.width / layer.offsetWidth : 1;
      const t = trigger.getBoundingClientRect();
      const r = { top: (t.top - c.top) / s, bottom: (t.bottom - c.top) / s, left: (t.left - c.left) / s, right: (t.right - c.left) / s, width: t.width / s, height: t.height / s };
      const pos = fn(r, { width: el.offsetWidth, height: el.offsetHeight });
      if (!layer) pos.left = Math.max(8, pos.left);
      return pos;
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
      const gap = 4; // Menu spec: "Opens 4 px below its trigger"
      const align = trigger.dataset.tdsAlign || 'start';
      const { top, left } = TDS.place(trigger, pop, (r, p) => ({ top: r.bottom + gap, left: align === 'end' ? r.right - p.width : r.left }));
      pop.style.top = `${top}px`;
      pop.style.left = `${left}px`;
      trigger.setAttribute('aria-expanded', 'true');
      const first = pop.querySelector('[role="menuitem"]:not([aria-disabled="true"])');
      if (first) first.focus();
    },

    // Durumlu komponentler (takvim, filtre grubu, tag input…): kök elemanda data-tds-comp ve data-tds-props durur.
    // TDS.update(el, { ... }) props'u değiştirip komponenti yeniden çizer ve odağı aynı parçaya geri verir.
    props(p) { return ` data-tds-props="${esc(JSON.stringify(p))}"`; },
    read(el) { return JSON.parse(el.dataset.tdsProps || '{}'); },
    update(el, patch, focus) {
      const name = el.dataset.tdsComp;
      const next = { ...TDS.read(el), ...patch };
      const tmp = document.createElement('div');
      tmp.innerHTML = TDS.render(name, next);
      const fresh = tmp.firstElementChild;
      el.replaceWith(fresh);
      if (focus) { const f = fresh.querySelector(focus); if (f) { f.focus(); if (f.setSelectionRange && f.value != null) f.setSelectionRange(f.value.length, f.value.length); } }
      return fresh;
    },

    // Tooltip: tetikleyiciye data-tds-tooltip="Metin" verilir. Üzerinde ~500 ms durunca veya klavye odağında açılır
    // (components/tooltip/spec.md). Çizimi tooltip komponenti yapar.
    tooltipDelay: 500,

    // Playground arayüzü shared/playground.js dosyasında: TDS.playground(mount, page).
  };

  // Tooltip davranışı.
  let tipTimer = null;
  const hideTip = () => { clearTimeout(tipTimer); document.querySelectorAll('.tds-tooltip-layer').forEach((t) => t.remove()); };
  const showTip = (trigger) => {
    hideTip();
    if (!comps.tooltip) return;
    const layer = document.createElement('div');
    layer.className = 'tds-tooltip-layer';
    const placement = trigger.dataset.tdsPlacement || 'Top';
    layer.innerHTML = TDS.render('tooltip', { Text: trigger.dataset.tdsTooltip, 'Show Shortcut': false, Placement: placement });
    const gap = 4;
    const pos = TDS.place(trigger, layer, (r, t) => ({
      Top: { left: r.left + r.width / 2 - t.width / 2, top: r.top - t.height - gap },
      Bottom: { left: r.left + r.width / 2 - t.width / 2, top: r.bottom + gap },
      Left: { left: r.left - t.width - gap, top: r.top + r.height / 2 - t.height / 2 },
      Right: { left: r.right + gap, top: r.top + r.height / 2 - t.height / 2 },
    }[placement]));
    layer.style.left = `${pos.left}px`;
    layer.style.top = `${pos.top}px`;
    requestAnimationFrame(() => layer.classList.add('is-open'));
  };
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('[data-tds-tooltip]');
    if (!t) return;
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => showTip(t), TDS.tooltipDelay);
  });
  document.addEventListener('pointerout', (e) => { if (e.target.closest('[data-tds-tooltip]')) hideTip(); });
  document.addEventListener('focusin', (e) => { const t = e.target.closest && e.target.closest('[data-tds-tooltip]'); if (t && t.matches(':focus-visible')) showTip(t); });
  document.addEventListener('focusout', (e) => { if (e.target.closest && e.target.closest('[data-tds-tooltip]')) hideTip(); });

  // Menü davranışı: tıklama, klavye (oklar, Enter, Escape, Tab) ve dışarı tıklama.
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-tds-menu]');
    if (trigger && !trigger.disabled) {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      if (isOpen) TDS.closeMenu(); else TDS.openMenu(trigger);
      return;
    }
    const item = e.target.closest('.tds-popover [role="menuitem"]');
    if (item) {
      if (item.getAttribute('aria-disabled') === 'true') return;
      // Seçilen satır tetikleyiciye bildirilir (Select, Phone Field, takvim başlığı değeri buradan alır).
      const trigger = item.closest('.tds-popover')._trigger;
      const value = item.dataset.value || item.querySelector('.tds-menu-item-label')?.textContent || '';
      TDS.closeMenu(true);
      if (trigger && trigger.isConnected) trigger.dispatchEvent(new CustomEvent('tds-menu-select', { bubbles: true, detail: { value } }));
      return;
    }
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
