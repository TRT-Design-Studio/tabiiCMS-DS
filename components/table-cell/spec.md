---
component: Table Cell
figma_page: "↪︎ Table"
figma_node: "284:1246"
version: 1.0.0
status: stable
updated: 2026-11-17
---

# Table Cell

One data cell of a table. Cells stack into columns under a [Table Header Cell](../table-header-cell/spec.md); give every cell in a row the same State. Type sets what the cell holds; Interactive sets how it reacts to the pointer.

## Variants

| Axis | Values | Default |
|---|---|---|
| Type | Text, Two Line, Slot, Checkbox | Text |
| Interactive | False, True, Link | False |
| State | Default, Hover, Selected, Selected Hover | Default |

Hover and Selected Hover exist only for Interactive True and Link (Slot: True only). Checkbox has Default and Selected. 28 variants in all.

## Properties

| Property | Type | Default |
|---|---|---|
| Type | Variant | Text |
| Interactive | Variant | False |
| State | Variant | Default |
| Value | Text | Cell value |
| Overline | Text | MOVIE |
| Show Image | Boolean | false |
| Cell Slot | Slot | empty |

## Sizes

| Part | Height | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Text | 44 | `Spacing/3` (12) top/bottom, `Spacing/4` (16) sides | `Spacing/2` (8) | — | `text-sm/regular` |
| Two Line | 62 | same | `Spacing/2` (8); lines `Spacing/0․5` (2) | — | `text-xs/medium` + `text-sm/regular` |
| Slot | hugs content | same | `Spacing/0․5`; slot `Spacing/1․5` (6) | — | — |
| Checkbox | 44 | same | — | — | — |
| Image | 48 (85 × 48, 16:9) | — | — | `rounded-md` | — |
| Hover layer | inset 8 px | — | — | `rounded-md` | — |

Cells are 160 px wide in the set. On screens they fill their column, and the cells of one row are set to the same height.

## States

| State | Fill | Border | Text |
|---|---|---|---|
| Default | — | `border/default` bottom | Value `text/primary`, Overline `text/tertiary` |
| Hover (True) | `bg/surface` + inset layer `bg/interactive/selected` 4% | `border/default` bottom | same |
| Hover (Link) | — | `border/default` bottom | Value underlined |
| Selected | `bg/surface` + `bg/interactive/selected` 4% | `border/default` bottom | same |
| Selected Hover (True) | `bg/subtle` + inset layer `bg/interactive/selected` 4% | `border/default` bottom | same |
| Selected Hover (Link) | Selected fill | `border/default` bottom | Value underlined |

## Slots

| Slot | Used for |
|---|---|
| Cell Slot | Type Slot: Status, Avatar, Button, Icon Stat, a content ID with a copy Icon Button |

## Used in

Not nested in other components. On screens, columns of cells sit in the Body slot of a [Card](../card/spec.md).

Playground uses: Pending Content and Publish Calendar (Overview), Show library (Shows).
