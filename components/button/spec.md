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

| Size | Height | Padding H | Padding V | Gap | Radius | Text | Icon |
|---|---|---|---|---|---|---|---|
| XSmall | 28 | `Spacing/2․5` | `Spacing/1․5` | `Spacing/1` | `rounded-md` | `text-xs/medium` | 14 |
| Small | 32 | `Spacing/3` | `Spacing/1․5` | `Spacing/1․5` | `rounded-md` | `text-sm/medium` | 16 |
| Medium | 36 | `Spacing/3․5` | `Spacing/2` | `Spacing/1․5` | `rounded-lg` | `text-sm/medium` | 16 |
| Large | 40 | `Spacing/4` | `Spacing/2` | `Spacing/2` | `rounded-lg` | `text-base/medium` | 20 |

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

| State | Token | Note |
|---|---|---|
| Focused | `border/focus` | 2 px ring outside |
| Disabled | `Opacity/opacity-50` | whole button |

## Motion

Code only; Figma variants show the end states. Icon Button and Split Button use the same motion.

| Property | Value | Note |
|---|---|---|
| Duration | 120 ms | Fill, border and scale; short enough not to feel slow |
| Easing | ease-out | |
| Pressed scale | 0.98 | The button shrinks by 0.1× while pressed |

With "reduce motion" turned on in the system, there is no animation and no scale.

## Used in

Split Button, Card Header, Menu, Filter Group, Calendar, Calendar Header, Pagination, Upload, Rich Text Editor/Toolbar.
