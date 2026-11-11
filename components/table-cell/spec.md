---
component: Table Cell
figma_page: "↪︎ Table"
figma_node: "284:1246"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Table Cell

Type: Text / Two Line / Slot / Checkbox · Interactive: False (static, no hover) / True (fill hover) / Link (Hover underlines Value) · State: Default / Hover / Selected / Selected Hover · Boolean: Show Image (Text and Two Line; nested Image, 16:9, 48 px tall (85x48), left of the text; replace its fill with the real image) · Row state: give every cell in the row the same State · Text: Value, Overline · Slot: Cell Slot

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Type | Text, Two Line, Slot, Checkbox | Text |
| Interactive | False, True, Link | False |
| State | Default, Hover, Selected, Selected Hover | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Value | Text | Cell value |
| Overline | Text | MOVIE |
| Cell Slot | Slot | empty |
| Show Image | Boolean | false |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 44 | `Spacing/4` (16) | `Spacing/3` (12) | `Spacing/2` (8) | 0 | `text-sm/regular` |

## States

| Type | Interactive | State | Background | Border | Text | Opacity |
|---|---|---|---|---|---|---|
| Text | False | Default | none | `border/default` | `text/primary` |  |
| Two Line | False | Default | none | `border/default` | `text/tertiary` |  |
| Slot | False | Default | none | `border/default` | — |  |
| Text | True | Default | none | `border/default` | `text/primary` |  |
| Text | True | Hover | `bg/surface` | `border/default` | `text/primary` |  |
| Two Line | True | Default | none | `border/default` | `text/tertiary` |  |
| Two Line | True | Hover | `bg/surface` | `border/default` | `text/tertiary` |  |
| Slot | True | Default | none | `border/default` | — |  |
| Slot | True | Hover | `bg/surface` | `border/default` | — |  |
| Text | False | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/primary` |  |
| Text | True | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/primary` |  |
| Two Line | False | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/tertiary` |  |
| Two Line | True | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/tertiary` |  |
| Slot | False | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | — |  |
| Slot | True | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | — |  |
| Text | Link | Default | none | `border/default` | `text/primary` |  |
| Text | Link | Hover | none | `border/default` | `text/primary` |  |
| Text | Link | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/primary` |  |
| Two Line | Link | Default | none | `border/default` | `text/tertiary` |  |
| Two Line | Link | Hover | none | `border/default` | `text/tertiary` |  |
| Two Line | Link | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/tertiary` |  |
| Checkbox | False | Default | none | `border/default` | — |  |
| Checkbox | False | Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | — |  |
| Text | True | Selected Hover | `bg/subtle` | `border/default` | `text/primary` |  |
| Two Line | True | Selected Hover | `bg/subtle` | `border/default` | `text/tertiary` |  |
| Slot | True | Selected Hover | `bg/subtle` | `border/default` | — |  |
| Text | Link | Selected Hover | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/primary` |  |
| Two Line | Link | Selected Hover | `bg/surface` + `bg/interactive/selected` 4% | `border/default` | `text/tertiary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Image | Image | 85.33 × 48 | image | no |
| Content | Frame | 63 × 20 | none | yes |

## Used in

Not nested in other components.
