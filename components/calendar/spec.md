---
component: Calendar
figma_page: "↪︎ Datepicker"
figma_node: "736:11267"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Calendar

Popover calendar under a Date Field. Week starts Monday. Date and Date Range close when the selection is complete (no footer); Date &amp; Time confirms with Done. Selection color is the primary action color. Footer is a slot.

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Type | Date, Date & Time | Date |

## Properties

| Property | Type | Default |
|---|---|---|
| Footer | Slot | empty |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 286 | `Spacing/0` (0) | `Spacing/0` (0) | `Spacing/0` (0) | `rounded-lg` (8) | `text-xs/medium` |

## States

| Type | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Date | `bg/raised` | `border/default` | `text/primary` |  |
| Date & Time | `bg/raised` | `border/default` | `text/tertiary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Calendar | Frame | 248 × 284 | none | yes |
| Time | Frame | 248 × 125 | none | no |

## Used in

Not nested in other components.
