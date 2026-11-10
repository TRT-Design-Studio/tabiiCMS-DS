---
component: Button
figma_page: "🔘 Buttons"
figma_node: "280:984"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Button

Hug width. Padding tokens give heights that match Input of the same size.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Variant | Primary, Secondary, Tertiary, Ghost, Danger, Link | Primary |
| Size | XSmall (28), Small (32), Medium (36), Large (40) | XSmall |
| State | Default, Hover, Pressed, Focused, Disabled | Default |

## Properties

Label (Text) · Icon Left / Left Icon (Boolean / swap, Plus) · Icon Right / Right Icon (Boolean / swap, CaretDown) · Show Count (Boolean, nested Badge Count).

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| XSmall | 28 | `Spacing/2․5` | `Spacing/1․5` | `Spacing/1` | `rounded-md` | `text-xs/medium` |
| Small | 32 | `Spacing/3` | `Spacing/1․5` | `Spacing/1․5` | `rounded-md` | `text-sm/medium` |
| Medium | 36 | `Spacing/3․5` | `Spacing/2` | `Spacing/1․5` | `rounded-lg` | `text-sm/medium` |
| Large | 40 | `Spacing/4` | `Spacing/2` | `Spacing/2` | `rounded-lg` | `text-base/medium` |

Link: no fill, no horizontal padding, underline on hover.

## States

| Variant | Default | Hover | Pressed | Border | Label |
|---|---|---|---|---|---|
| Primary | `action/primary/default` | `action/primary/hover` | `action/primary/pressed` | none | `text/inverse` |
| Secondary | `action/secondary/default` | `action/secondary/hover` | `action/secondary/pressed` | `border/default` | `text/primary` |
| Tertiary | `action/soft/default` | `action/soft/hover` | `action/soft/pressed` | none | `text/primary` |
| Ghost | none | `bg/interactive/hover` | `bg/interactive/pressed` | none | `text/primary` |
| Danger | `action/danger/default` | `action/danger/hover` | `action/danger/pressed` | none | `text/on-color` |
| Link | none | none (underline) | none | none | `text/primary` |

Focused: `border/focus` outline. Disabled: 50% opacity.

## Used in

Split Button, Card Header, Menu, Filter Group, Calendar, Calendar Header, Pagination, Upload, Rich Text Editor/Toolbar.
