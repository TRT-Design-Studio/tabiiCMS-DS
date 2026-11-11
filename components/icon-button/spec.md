---
component: Icon Button
figma_page: "🔘 Buttons"
figma_node: "280:1169"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Icon Button

Icon-only button, equal padding. Same heights as Button.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Variant | Primary, Secondary, Tertiary, Ghost | Primary |
| Shape | Square (`rounded-lg`), Circle (`rounded-full`) | Square |
| Size | XSmall 28, Small 32, Medium 36, Large 40 | XSmall |
| State | Default, Hover, Pressed, Focused, Disabled, Active (Ghost only) | Default |

## Properties

Icon (Instance swap).

## Sizes

| Size | Height | Padding | Icon |
|---|---|---|---|
| XSmall | 28 | `Spacing/1․5` | 16 |
| Small | 32 | `Spacing/2` | 16 |
| Medium | 36 | `Spacing/2` | 20 |
| Large | 40 | `Spacing/2․5` | 20 |

## Shapes

| Shape | Radius |
|---|---|
| Square | `rounded-lg` |
| Circle | `rounded-full` |

## States

Colors per variant (Default, Hover, Pressed, Focused, Disabled) are the same as Button; the icon takes the Button label color.

| State | Variant | Fill |
|---|---|---|
| Active | Ghost | `bg/interactive/selected` |

## Used in

Split Button, Breadcrumb, Breadcrumb Item, Pagination, Number Stepper, Upload, Rich Text Editor/Toolbar, Calendar Header, Sidebar, Top Bar.
