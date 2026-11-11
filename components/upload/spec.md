---
component: Upload
figma_page: "↪︎ File Upload - bakılacak"
figma_node: "284:976"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Upload

State: Default / Hover (dragging) / Error / Disabled · Boolean: Actions · Nested: IconButton × 2 · Text: Title, Hint

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| State | Default, Hover, Error, Disabled, Drag Over, Uploading, Uploaded | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Title | Text | Click to insert or upload |
| Hint | Text | SVG, PNG or JPEG (max. 800x400) |
| Actions | Boolean | true |
| File Name | Text | poster-final.jpg |
| File Meta | Text | 1920 × 1080 · 2.4 MB |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 124 | `Spacing/4` (16) | `Spacing/6` (24) | `Spacing/1` (4) | `rounded-lg` (8) | `text-xs/medium` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Default | `bg/surface` | `border/default` | `text/secondary` |  |
| Hover | `bg/interactive/hover` 5% | `border/strong` | `text/secondary` |  |
| Error | `bg/surface` | `border/danger` | `text/secondary` |  |
| Disabled | `bg/disabled` | `border/disabled` | `text/disabled` |  |
| Drag Over | `bg/subtle` | `border/selected` | `text/primary` |  |
| Uploading | `bg/surface` | `border/default` | `text/primary` |  |
| Uploaded | `bg/surface` | `border/default` | `text/primary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Title | Text | 208 × 16 | `text-xs/medium` `text/secondary` | yes |
| Hint | Text | 208 × 16 | `text-xs/regular` `text/tertiary` | yes |
| Actions | Frame | 68 × 40 | none | yes |

## Used in

Not nested in other components.
