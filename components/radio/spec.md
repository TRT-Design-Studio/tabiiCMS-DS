---
component: Radio
figma_page: "↪︎ Checkbox & Radio"
figma_node: "281:900"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Radio

Radio control only (16 px). For a labelled radio, place a Label next to it; in lists use a Menu/Item with the radio in the Leading slot.

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Selected | False, True | False |
| State | Default, Hover, Focused, Disabled | Default |

## Properties

None.

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 16 | 0 | 0 | 0 | 0 | — |

## States

| Selected | State | Background | Border | Text | Opacity |
|---|---|---|---|---|---|
| False | Default | `bg/base` (Circle) | `border/default` | — |  |
| False | Hover | `bg/subtle` (Circle) | `border/strong` | — |  |
| False | Focused | `bg/base` (Circle) | `border/focus` | — |  |
| False | Disabled | `bg/base` (Circle) | `border/default` | — | 50% |
| True | Default | `bg/base` (Circle) | `border/selected` | — |  |
| True | Hover | `bg/subtle` (Circle) | `border/selected` | — |  |
| True | Focused | `bg/base` (Circle) | `border/focus` | — |  |
| True | Disabled | `bg/base` (Circle) | `border/selected` | — | 50% |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Circle | Frame | 16 × 16 | `bg/base` | yes |

## Used in

Not nested in other components.
