// tabii CMS Sidebar: Expanded / Rail with drag to resize. Under 160 px it settles to the 68 px icon rail.
// The default width is also the maximum: the sidebar can only be narrowed and opened back up.
const RAIL = 68, SNAP = 160, DEFAULT = 248, MAX = DEFAULT, DUR = 400;

const SECTIONS = [
  { items: [{ label: 'Overview', icon: 'ph ph-squares-four' }] },
  { title: 'FAVORİLER', items: [
    { label: 'Asset HQ', icon: 'ph ph-folder-open' },
    { label: 'Publish Management', icon: 'ph ph-monitor-play' } ] },
  { title: 'İÇERİK YÖNETİMİ', items: [
    { label: 'Content', icon: 'ph-fill ph-stack', sub: ['Shows', 'Movies', 'Episodes', 'Persons'] },
    { label: 'Live & Fast', icon: 'ph ph-broadcast' },
    { label: 'Categories & Genres', icon: 'ph ph-tag' } ] },
  { title: 'KÜRASYON & VİTRİN', items: [
    { label: 'Rows', icon: 'ph ph-rows' },
    { label: 'Queues', icon: 'ph ph-flow-arrow' },
    { label: 'Menu Items', icon: 'ph ph-list-bullets' },
    { label: 'Menus', icon: 'ph ph-list' } ] },
  { title: 'YÖNETİM', items: [
    { label: 'Users & Roles', icon: 'ph ph-users-three' },
    { label: 'Audit Log', icon: 'ph ph-clipboard-text' },
    { label: 'RBAC', icon: 'ph ph-shield-check' },
    { label: 'Settings', icon: 'ph ph-gear' },
    { label: 'Help', icon: 'ph ph-question' } ] },
];

const MODE_TEXT = {
  ease: 'Drag inward to collapse to icons, outward to expand. Labels fade at once while the width glides over 0.4s.',
  cascade: 'Drag inward to collapse to icons, outward to expand. Past 160px the labels drift left and fade from the top down.',
  scrub: 'Drag inward to collapse to icons, outward to expand. Labels fade with the width as it glides over 0.4s.',
};

const $ = (s) => document.querySelector(s);
const app = $('#app'), sidebar = $('#sidebar'), nav = $('#nav'), handle = $('#handle'), tip = $('#tip');
const resetBtn = $('#reset'), toggleBtn = $('#toggle'), toggleText = $('#toggleText'), toggleArrow = $('#toggleArrow');

// ---------- Build the navigation ----------
let subEl = null, contentItem = null;
for (const s of SECTIONS) {
  const g = document.createElement('div');
  g.className = 'sb-group';
  if (s.title) g.insertAdjacentHTML('beforeend', `<div class="group-label"><p class="label">${s.title}</p></div>`);
  for (const it of s.items) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'item';
    b.dataset.title = it.label;
    b.setAttribute('aria-label', it.label);
    b.innerHTML = `<i class="${it.icon}"></i><span class="text label">${it.label}</span>` +
      (it.sub ? '<span class="caret label"><i class="ph ph-caret-up"></i></span>' : '');
    g.appendChild(b);
    if (it.sub) {
      contentItem = b;
      b.setAttribute('aria-expanded', 'true');
      subEl = document.createElement('div');
      subEl.className = 'sub';
      subEl.innerHTML = `<div><div class="sub-wrap"><div class="sub-list">${it.sub.map((x) =>
        `<button type="button" class="sub-item">${x}</button>`).join('')}</div></div></div>`;
      g.appendChild(subEl);
    }
  }
  nav.appendChild(g);
}
// Top-down order for the cascade
document.querySelectorAll('.sidebar .label').forEach((n, i) => n.style.setProperty('--d', `${i * 14}ms`));

// ---------- Selection: a sub item also selects its parent branch ----------
function select(item, sub = null) {
  nav.querySelectorAll('.item, .sub-item').forEach((n) => {
    const on = n === item || n === sub;
    n.classList.toggle('selected', on);
    if (on && (n === sub || !sub)) n.setAttribute('aria-current', 'page'); else n.removeAttribute('aria-current');
  });
}
nav.addEventListener('click', (e) => {
  const sub = e.target.closest('.sub-item');
  if (sub) return select(contentItem, sub);
  const item = e.target.closest('.item');
  if (!item) return;
  if (item === contentItem) {
    if (isRail()) return toggle(); // in Rail, the branch first opens the sidebar
    const open = subEl.classList.toggle('shut') === false;
    item.classList.toggle('closed', !open);
    item.setAttribute('aria-expanded', String(open));
    return;
  }
  select(item);
});
select(contentItem, subEl.querySelector('.sub-item'));

// ---------- Motion ----------
// cubic-bezier(0.32, 0.72, 0, 1), the same curve the CSS uses
function bezier(x1, y1, x2, y2) {
  const f = (a, b, t) => 3 * a * t * (1 - t) ** 2 + 3 * b * t * t * (1 - t) + t ** 3;
  return (x) => {
    let lo = 0, hi = 1, t = x;
    for (let i = 0; i < 20; i++) { t = (lo + hi) / 2; if (f(x1, x2, t) < x) lo = t; else hi = t; }
    return f(y1, y2, t);
  };
}
const ease = bezier(0.32, 0.72, 0, 1);
console.assert(ease(0) < 0.01 && ease(1) > 0.99 && ease(0.5) > 0.8, 'ease curve');

let mode = 'ease', width = DEFAULT, anim = null;
const isRail = () => width < SNAP;
const target = () => (anim ? anim.to : width);

function render() {
  sidebar.style.width = `${width}px`;
  // Ease out commits to the destination at once; Cascade and Scrub react to the width as it passes 160.
  const rail = (mode === 'ease' ? target() : width) < SNAP;
  sidebar.classList.toggle('narrow', rail);
  sidebar.classList.toggle('rail', rail);
  sidebar.style.setProperty('--scrub', Math.max(0, Math.min(1, (width - 100) / 100)).toFixed(3));
  sidebar.querySelectorAll('[data-title]').forEach((n) => (rail ? n.title = n.dataset.title : n.removeAttribute('title')));
  subEl.querySelectorAll('button').forEach((b) => (b.tabIndex = rail ? -1 : 0));
  const closed = target() < SNAP;
  toggleText.textContent = closed ? 'Open sidebar' : 'Close sidebar';
  toggleArrow.setAttribute('d', closed ? 'M10 7.5 11.5 9 10 10.5' : 'M11.5 7.5 10 9l1.5 1.5');
  toggleBtn.setAttribute('aria-expanded', String(!closed));
  handle.setAttribute('aria-valuenow', String(Math.round(width)));
  resetBtn.disabled = Math.round(target()) === DEFAULT;
}
const clamp = (w) => Math.max(RAIL, Math.min(MAX, w));

function stop() { if (anim) { cancelAnimationFrame(anim.raf); clearTimeout(anim.timer); anim = null; } }
// Glide to a width over 0.4s. Every frame goes through render(), exactly like a drag.
function glideTo(to) {
  stop();
  to = clamp(to);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { width = to; return render(); }
  const from = width, t0 = performance.now(), a = (anim = { to });
  const finish = () => { if (anim !== a) return; anim = null; width = to; render(); };
  const step = (t) => {
    if (anim !== a) return;
    const p = Math.min(1, (t - t0) / DUR);
    width = from + (to - from) * ease(p);
    if (p < 1) { render(); a.raf = requestAnimationFrame(step); } else finish();
  };
  render();
  a.raf = requestAnimationFrame(step);
  a.timer = setTimeout(finish, DUR + 80); // throttled frames still end on the target
}

// ---------- Modes ----------
const modeButtons = document.querySelectorAll('#modes button');
function setMode(m) {
  mode = m;
  app.classList.remove('mode-ease', 'mode-cascade', 'mode-scrub');
  app.classList.add(`mode-${m}`);
  modeButtons.forEach((b) => b.setAttribute('aria-selected', String(b.dataset.mode === m)));
  $('#modeText').textContent = MODE_TEXT[m];
  render();
}
modeButtons.forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));

// ---------- Drag ----------
let dragging = false;
function showTip(y) {
  tip.style.left = `${sidebar.getBoundingClientRect().right + 12}px`;
  tip.style.top = `${y}px`;
  tip.classList.add('show');
}
handle.addEventListener('pointerenter', (e) => showTip(e.clientY));
handle.addEventListener('pointerleave', () => { if (!dragging) tip.classList.remove('show'); });
// No in-between widths: dragging inward collapses to the rail, dragging outward expands to full width.
const DRAG_THRESHOLD = 12;
let anchorX = 0;
handle.addEventListener('pointerdown', (e) => {
  dragging = true;
  anchorX = e.clientX;
  try { handle.setPointerCapture(e.pointerId); } catch (_) { /* synthetic pointers have no capture */ }
  app.classList.add('dragging');
});
handle.addEventListener('pointermove', (e) => {
  showTip(e.clientY);
  if (!dragging) return;
  const dx = e.clientX - anchorX, closed = target() < SNAP;
  if (!closed && dx < -DRAG_THRESHOLD) { glideTo(RAIL); anchorX = e.clientX; }
  else if (closed && dx > DRAG_THRESHOLD) { glideTo(DEFAULT); anchorX = e.clientX; }
  else if ((closed && dx < 0) || (!closed && dx > 0)) anchorX = e.clientX; // reversing counts from the furthest point
});
function endDrag() {
  if (!dragging) return;
  dragging = false;
  app.classList.remove('dragging');
  tip.classList.remove('show');
}
handle.addEventListener('pointerup', endDrag);
handle.addEventListener('pointercancel', endDrag);
handle.addEventListener('lostpointercapture', endDrag);

// Keyboard on the handle: arrows resize, Enter toggles
handle.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault();
    glideTo(e.key === 'ArrowRight' ? DEFAULT : RAIL);
  } else if (e.key === 'Enter') toggle();
});

// ---------- Toggle, shortcut, reset ----------
function toggle() { glideTo(target() < SNAP ? DEFAULT : RAIL); }
toggleBtn.addEventListener('click', toggle);
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') { e.preventDefault(); toggle(); }
});
resetBtn.addEventListener('click', () => glideTo(DEFAULT));

handle.setAttribute('aria-valuemin', String(RAIL));
handle.setAttribute('aria-valuemax', String(MAX));
setMode('ease');
