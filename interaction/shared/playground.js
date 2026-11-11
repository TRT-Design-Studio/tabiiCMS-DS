// Playground arayüzü. Yapı ve hareket interaction/reference/sidebar/ (Sidebar Interaction code layer) ile aynı:
// solda Sidebar (Expanded, daralmaz), her komponent bir Nav Item; tıklanınca altında Nav Sub Group gibi açılır
// ve içinde o komponentin property'leri bulunur. Sağda kalan alanın tamamı sahne; köşede yakınlaştırma.
(function () {
  const { esc, slug } = TDS;
  const ZOOMS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];

  // tabii logosu (Logo, Type=Full). Renkler token: işaret bg/inverse + text/inverse, yazı text/primary.
  const LOGO = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M22 0H6C2.686 0 0 2.686 0 6V22C0 25.314 2.686 28 6 28H22C25.314 28 28 25.314 28 22V6C28 2.686 25.314 0 22 0Z" fill="var(--bg-inverse)"/><path d="M22.451 14.024L24 10.099L19.634 8.397L17.897 4L14 5.56L10.056 4L8.366 8.35L4 10.099L5.549 14.024L4 17.948L8.366 19.65L10.056 24L13.953 22.44L17.85 24L19.54 19.65L23.906 17.948L22.451 14.024ZM14.845 16.955L14 19.083L13.155 16.955L9.728 18.326L11.089 14.875L8.977 14.024L11.089 13.173L9.728 9.721L13.155 11.092L14 8.965L14.845 11.092L18.272 9.721L16.911 13.173L19.024 14.024L16.911 14.875L18.272 18.326L14.845 16.955Z" fill="var(--text-inverse)"/></svg>
<svg class="pg-wordmark" width="46" height="28" viewBox="36 0 46 28" fill="none" aria-label="tabii"><path d="M72.993 6.059V9.406H76.454V6.059H72.993ZM72.993 10.427V22.569H76.454V10.427H72.993Z" fill="var(--text-primary)"/><path d="M78.27 6.059V9.406H81.73V6.059H78.27ZM78.27 10.427V22.569H81.73V10.427H78.27Z" fill="var(--text-primary)"/><path d="M42.809 13.376V10.199H39.461V6H36V19.333C36 21.092 37.418 22.511 39.177 22.511H42.752V19.333H39.404V13.376H42.809Z" fill="var(--text-primary)"/><path d="M53.305 10.197V11.559C52.283 10.651 50.978 10.141 49.56 10.141C46.269 10.141 43.659 12.978 43.659 16.495C43.659 20.013 46.326 22.85 49.56 22.85C50.978 22.85 52.283 22.339 53.305 21.431V22.623H56.766V10.197H53.305ZM53.305 19.389H47.29V13.375H53.305V19.389Z" fill="var(--text-primary)"/><path d="M65.56 10.144C64.142 10.144 62.837 10.654 61.816 11.562V6.059H58.355V22.569H61.816V21.378C62.837 22.286 64.142 22.796 65.56 22.796C68.851 22.796 71.461 19.959 71.461 16.442C71.461 12.981 68.794 10.144 65.56 10.144ZM67.83 19.392H61.816V13.378H67.83V19.392Z" fill="var(--text-primary)"/></svg>`;

  TDS.playground = function (mount, page) {
    const root = typeof mount === 'string' ? document.querySelector(mount) : mount;
    const state = {};
    page.components.forEach((c) => { state[c.name] = Object.fromEntries(c.controls.map((k) => [k.key, k.default])); });
    let active = page.components[0].name;
    const open = new Set([active]);
    let zoom = 1;

    const visible = (c, k) => !k.when || k.when(state[c.name]);
    const control = (c, k) => {
      const val = state[c.name][k.key];
      const id = `ctl-${c.name}-${slug(k.key)}`;
      const label = esc(k.label || k.key);
      if (k.type === 'bool') {
        return `<label class="pg-check" for="${id}"><span>${label}</span><input id="${id}" type="checkbox" role="switch" data-comp="${c.name}" data-key="${esc(k.key)}" ${val ? 'checked' : ''}></label>`;
      }
      if (k.type === 'select') {
        return `<label class="pg-field" for="${id}"><span>${label}</span><span class="pg-select">${'<select id="' + id + '" data-comp="' + c.name + '" data-key="' + esc(k.key) + '">'}${k.options.map((o) => `<option ${o === val ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>${TDS.icon('CaretDown', 16)}</span></label>`;
      }
      return `<label class="pg-field" for="${id}"><span>${label}</span><input id="${id}" type="text" data-comp="${c.name}" data-key="${esc(k.key)}" value="${esc(val)}"></label>`;
    };
    const controls = (c) => c.controls.filter((k) => visible(c, k)).map((k) => control(c, k)).join('');

    const navItem = (c) => {
      const isOpen = open.has(c.name);
      return `<button type="button" class="item${c.name === active ? ' selected' : ''}${isOpen ? '' : ' closed'}" data-item="${c.name}" aria-expanded="${isOpen}" aria-controls="sub-${c.name}"${c.name === active ? ' aria-current="page"' : ''}>`
        + TDS.icon(c.icon || 'Cube', 20, c.name === active ? 'Fill' : 'Regular')
        + `<span class="text">${esc(c.label)}</span><span class="caret">${TDS.icon('CaretUp', 16)}</span></button>`
        + `<div class="sub${isOpen ? '' : ' shut'}" id="sub-${c.name}"><div><div class="sub-wrap"><div class="sub-list" data-controls="${c.name}">${controls(c)}</div></div></div></div>`;
    };

    const shell = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      root.innerHTML = `
        <div class="pg-app">
          <aside class="sidebar" aria-label="${esc(page.title)} components">
            <div class="sb-header"><a class="logo" href="#" aria-label="tabii CMS Design System" onclick="return false">${LOGO}</a></div>
            <nav class="sb-nav"><div class="sb-group">
              <div class="group-label"><p>${esc(page.title.toUpperCase())}</p></div>
              ${page.components.map(navItem).join('')}
            </div></nav>
            <div class="sb-footer">
              <button type="button" class="item" data-theme-toggle aria-pressed="${dark}">${TDS.icon(dark ? 'Sun' : 'Moon', 20)}<span class="text">${dark ? 'Light mode' : 'Dark mode'}</span></button>
            </div>
          </aside>
          <main class="pg-stage" aria-label="Preview" tabindex="-1">
            <div class="pg-canvas"><div class="pg-preview" style="--zoom:${zoom}">${TDS.render(active, state[active])}</div></div>
            <div class="pg-zoom" role="group" aria-label="Zoom">
              <button type="button" data-zoom="out" aria-label="Zoom out"${zoom <= ZOOMS[0] ? ' disabled' : ''}>${TDS.icon('Minus', 16)}</button>
              <button type="button" data-zoom="reset" class="pg-zoom-value" aria-label="Reset zoom to 100%">${Math.round(zoom * 100)}%</button>
              <button type="button" data-zoom="in" aria-label="Zoom in"${zoom >= ZOOMS[ZOOMS.length - 1] ? ' disabled' : ''}>${TDS.icon('Plus', 16)}</button>
            </div>
          </main>
        </div>`;
    };

    // Sadece sahneyi yeniler (kontroller yerinde kalır, odak kaybolmaz).
    const renderStage = () => {
      TDS.closeMenu();
      root.querySelector('.pg-preview').innerHTML = TDS.render(active, state[active]);
    };
    const setZoom = (z) => {
      zoom = Math.min(ZOOMS[ZOOMS.length - 1], Math.max(ZOOMS[0], z));
      root.querySelector('.pg-preview').style.setProperty('--zoom', zoom);
      root.querySelector('.pg-zoom-value').textContent = `${Math.round(zoom * 100)}%`;
      root.querySelector('[data-zoom="out"]').disabled = zoom <= ZOOMS[0];
      root.querySelector('[data-zoom="in"]').disabled = zoom >= ZOOMS[ZOOMS.length - 1];
    };
    const step = (dir) => {
      const i = ZOOMS.findIndex((z) => z >= zoom - 1e-6);
      setZoom(dir > 0 ? ZOOMS[Math.min(ZOOMS.length - 1, ZOOMS[i] > zoom + 1e-6 ? i : i + 1)] : ZOOMS[Math.max(0, i - 1)]);
    };

    const refreshControls = (name) => {
      const c = page.components.find((x) => x.name === name);
      root.querySelector(`[data-controls="${name}"]`).innerHTML = controls(c);
    };

    root.addEventListener('click', (e) => {
      const item = e.target.closest('[data-item]');
      if (item) {
        const name = item.dataset.item;
        if (name !== active) {
          // Başka bir komponent seçildi: onu göster ve aç, diğerlerini kapat.
          active = name;
          for (const o of [...open]) {
            open.delete(o);
            const b = root.querySelector(`[data-item="${o}"]`);
            b.classList.add('closed'); b.setAttribute('aria-expanded', 'false');
            root.querySelector(`#sub-${o}`).classList.add('shut');
          }
          open.add(name);
          root.querySelectorAll('[data-item]').forEach((b) => {
            const on = b.dataset.item === name;
            b.classList.toggle('selected', on);
            if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
            const c = page.components.find((x) => x.name === b.dataset.item);
            b.querySelector('.tds-icon').outerHTML = TDS.icon(c.icon || 'Cube', 20, on ? 'Fill' : 'Regular');
          });
          renderStage();
        } else if (open.has(name)) open.delete(name); else open.add(name);
        const isOpen = open.has(name);
        item.classList.toggle('closed', !isOpen);
        item.setAttribute('aria-expanded', String(isOpen));
        root.querySelector(`#sub-${name}`).classList.toggle('shut', !isOpen);
        return;
      }
      if (e.target.closest('[data-theme-toggle]')) {
        const d = document.documentElement; d.dataset.theme = d.dataset.theme === 'dark' ? 'light' : 'dark';
        shell();
        return;
      }
      const z = e.target.closest('[data-zoom]');
      if (z) { if (z.dataset.zoom === 'reset') setZoom(1); else step(z.dataset.zoom === 'in' ? 1 : -1); }
    });
    root.addEventListener('input', (e) => {
      const el = e.target.closest('[data-key]');
      if (!el || el.type !== 'text') return;
      state[el.dataset.comp][el.dataset.key] = el.value;
      if (el.dataset.comp === active) renderStage();
    });
    root.addEventListener('change', (e) => {
      const el = e.target.closest('[data-key]');
      if (!el || el.type === 'text') return;
      const name = el.dataset.comp;
      state[name][el.dataset.key] = el.type === 'checkbox' ? el.checked : el.value;
      const focusKey = el.dataset.key;
      refreshControls(name); // "when" ile görünen kontroller değişebilir
      const again = root.querySelector(`[data-comp="${name}"][data-key="${focusKey}"]`);
      if (again) again.focus();
      if (name !== active) {
        active = name;
        root.querySelectorAll('[data-item]').forEach((b) => b.classList.toggle('selected', b.dataset.item === name));
      }
      renderStage();
    });
    // Sahnede Ctrl/⌘ + tekerlek veya + / − / 0 tuşları ile yakınlaştırma.
    root.addEventListener('wheel', (e) => {
      if (!(e.ctrlKey || e.metaKey) || !e.target.closest('.pg-stage')) return;
      e.preventDefault(); step(e.deltaY < 0 ? 1 : -1);
    }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (e.target.closest && e.target.closest('input, select, textarea')) return;
      if (e.key === '+' || e.key === '=') step(1);
      else if (e.key === '-') step(-1);
      else if (e.key === '0') setZoom(1);
    });

    shell();
  };
})();
