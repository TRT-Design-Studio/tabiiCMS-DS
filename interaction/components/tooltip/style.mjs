// components/tooltip/spec.md → CSS. Sizes (Bubble, Arrow) ve States (Part) tablolarından üretilir.
export default function css(spec, v) {
  const size = Object.fromEntries(spec.table('Sizes').map((r) => [r.part.toLowerCase(), r]));
  const part = Object.fromEntries(spec.table('States').map((r) => [r.part.toLowerCase(), r]));
  const b = size.bubble;
  const [label, shortcut] = [...b.text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const blur = v.num(/blur ([\d.]+)/i.exec(part.bubble.effect)[1]);
  const [aw, ah] = /\((\d+) × (\d+)\)/.exec(size.arrow.height).slice(1).map(Number); // 10 × 5
  const overlap = Number(/overlaps the bubble by ([\d.]+)/.exec(spec.raw)[1]);
  return `.tds-tooltip-layer { position: absolute; z-index: 1100; pointer-events: none; opacity: 0; transition: opacity var(--tds-motion-duration) var(--tds-motion-easing); }
.tds-tooltip-layer.is-open { opacity: 1; }
.tds-tooltip { position: relative; display: inline-flex; align-items: center; box-sizing: border-box; min-height: ${v.num(b.height)}px; padding: ${v.space(v.first(b['padding v']))} ${v.space(v.first(b['padding h']))}; gap: ${v.space(v.first(b.gap))}; border-radius: ${v.radius(v.first(b.radius))}; background: ${v.color(v.first(part.bubble.fill))}; color: ${v.color(v.first(part.bubble.text))}; font: ${v.text(label)}; white-space: nowrap; -webkit-backdrop-filter: blur(${blur}px); backdrop-filter: blur(${blur}px); }
.tds-tooltip-shortcut { font: ${v.text(shortcut)}; }
.tds-tooltip::after { content: ""; position: absolute; width: ${aw}px; height: ${ah}px; background: ${v.color(v.first(part.arrow.fill))}; }
.tds-tooltip[data-placement="top"]::after { top: calc(100% - ${overlap}px); left: calc(50% - ${aw / 2}px); clip-path: polygon(0 0, 100% 0, 50% 100%); }
.tds-tooltip[data-placement="bottom"]::after { bottom: calc(100% - ${overlap}px); left: calc(50% - ${aw / 2}px); clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.tds-tooltip[data-placement="left"]::after { left: calc(100% - ${overlap}px); top: calc(50% - ${aw / 2}px); width: ${ah}px; height: ${aw}px; clip-path: polygon(0 0, 100% 50%, 0 100%); }
.tds-tooltip[data-placement="right"]::after { right: calc(100% - ${overlap}px); top: calc(50% - ${aw / 2}px); width: ${ah}px; height: ${aw}px; clip-path: polygon(100% 0, 100% 100%, 0 50%); }
`;
}
