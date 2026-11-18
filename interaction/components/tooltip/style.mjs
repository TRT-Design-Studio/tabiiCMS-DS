// components/tooltip/spec.md → CSS. Sizes (Container, Bubble, Arrow) ve States (Part) tablolarından üretilir.
// Figma'daki gibi: kap bir auto layout (Top/Bottom dikey, Left/Right yatay), balon ve ok arasında boşluk yok.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r]));
  const part = Object.fromEntries(spec.table('States').map((r) => [r.part.toLowerCase(), r]));
  const b = size.bubble;
  const [label, shortcut] = [...b.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const blur = v.num(/blur ([\d.]+)/i.exec(part.bubble.effect)[1]);
  const shortcutOpacity = v.num(/opacity ([\d.]+)%/.exec(part.shortcut.text)[1]) / 100;
  const [aw, ah] = /\(([\d.]+) × ([\d.]+)\)/.exec(size.arrow.height).slice(1).map(Number); // 8.66 × 3.75
  const fill = v.color(v.first(part.arrow.fill));
  return `.tds-tooltip-layer { position: absolute; z-index: 1100; pointer-events: none; opacity: 0; transition: opacity var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-tooltip-layer.is-open { opacity: 1; }
.tds-tooltip { display: inline-flex; align-items: center; gap: ${v.space(v.first(size.container.gap))}; }
.tds-tooltip[data-placement="top"] { flex-direction: column; }
.tds-tooltip[data-placement="bottom"] { flex-direction: column-reverse; }
.tds-tooltip[data-placement="left"] { flex-direction: row; }
.tds-tooltip[data-placement="right"] { flex-direction: row-reverse; }
.tds-tooltip-bubble { display: inline-flex; align-items: center; box-sizing: border-box; min-height: ${v.num(b.height)}px; padding: ${v.space(v.first(b['padding v']))} ${v.space(v.first(b['padding h']))}; gap: ${v.space(v.first(b.gap))}; border-radius: ${v.radius(v.first(b.radius))}; background: ${v.color(v.first(part.bubble.fill))}; color: ${v.color(v.first(part.bubble.text))}; font: ${v.text(label)}; white-space: nowrap; -webkit-backdrop-filter: blur(${blur}px); backdrop-filter: blur(${blur}px); }
.tds-tooltip-shortcut { font: ${v.text(shortcut)}; opacity: ${shortcutOpacity}; }
.tds-tooltip-arrow { flex: none; width: ${aw}px; height: ${ah}px; background: ${fill}; }
.tds-tooltip[data-placement="top"] .tds-tooltip-arrow { clip-path: polygon(0 0, 100% 0, 50% 100%); }
.tds-tooltip[data-placement="bottom"] .tds-tooltip-arrow { clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.tds-tooltip[data-placement="left"] .tds-tooltip-arrow, .tds-tooltip[data-placement="right"] .tds-tooltip-arrow { width: ${ah}px; height: ${aw}px; }
.tds-tooltip[data-placement="left"] .tds-tooltip-arrow { clip-path: polygon(0 0, 100% 50%, 0 100%); }
.tds-tooltip[data-placement="right"] .tds-tooltip-arrow { clip-path: polygon(100% 0, 100% 100%, 0 50%); }
`;
}
