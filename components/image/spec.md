---
component: Image
figma_page: "🖼️ Media"
figma_node: "1208:31"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Image

Image or video frame with a fixed aspect ratio. The default fill is the placeholder image (icon only); replace the fill with the real image. Resize the instance; the ratio stays locked. In code: `aspect-<w>/<h>` with `object-cover`.

## Variants

| Axis | Values | Default |
|---|---|---|
| Ratio | 16:9, 21:9, 3:2, 4:3, 5:4, 1:1, 4:5, 3:4, 2:3, 9:16 | 16:9 |

## Properties

| Property | Type | Default |
|---|---|---|
| Ratio | Variant | 16:9 |

## Sizes

| Ratio | Default size |
|---|---|
| 16:9 · 21:9 · 3:2 · 4:3 · 5:4 | 240×135 · 240×103 · 240×160 · 240×180 · 240×192 |
| 1:1 · 4:5 · 3:4 · 2:3 · 9:16 | 240×240 · 192×240 · 180×240 · 160×240 · 135×240 |

Radius `rounded-md` for every ratio. No border.

## States

No states. The fill is an image (placeholder PNG); it has no colour token and does not change in Dark mode.

## Used in

| Component | Where |
|---|---|
| [Table Cell](../table-cell/spec.md) | 16:9, 85 × 48, before the title when Show Image is on |
| Upload | File preview |
