---
component: Checkbox
figma_page: "↪︎ Checkbox & Radio"
figma_node: "281:867"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Checkbox

Checkbox control only (16 px). For a labelled checkbox, place a Label next to it (8 px gap); in lists use a Menu/Item with the checkbox in the Leading slot.

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Checked | False, True, Indeterminate | False |
| State | Default, Hover, Focused, Disabled | Default |

## Properties

None.

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 16 | 0 | 0 | 0 | 0 | — |

## States

| Checked | State | Background | Border | Text | Opacity |
|---|---|---|---|---|---|
| False | Default | `bg/base` (Box) | `border/default` | — |  |
| False | Hover | `bg/subtle` (Box) | `border/strong` | — |  |
| False | Focused | `bg/base` (Box) | `border/focus` | — |  |
| False | Disabled | `bg/base` (Box) | `border/default` | — | 50% |
| True | Default | `action/primary/default` (Box) | none | — |  |
| True | Hover | `action/primary/hover` (Box) | none | — |  |
| True | Focused | `action/primary/default` (Box) | `border/focus` | — |  |
| True | Disabled | `action/primary/default` (Box) | none | — | 50% |
| Indeterminate | Default | `action/primary/default` (Box) | none | — |  |
| Indeterminate | Hover | `action/primary/hover` (Box) | none | — |  |
| Indeterminate | Focused | `action/primary/default` (Box) | `border/focus` | — |  |
| Indeterminate | Disabled | `action/primary/default` (Box) | none | — | 50% |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Box | Frame | 16 × 16 | `bg/base` | yes |

## Used in

Table Cell, Table Header Cell
