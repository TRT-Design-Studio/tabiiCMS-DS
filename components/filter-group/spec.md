---
component: Filter Group
figma_page: "↪︎ Filter Group"
figma_node: "742:11724"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Filter Group

One group of the filter panel. Header: icon, title, selected count (Badge Count), Clear (clears only this group) and chevron. Expanded shows a Small search (Show Search, on by default; turn off for short lists) and an Options slot of Menu Items with a Checkbox in the Leading slot and the result count as Trailing Text. Selected options move to the top; show at most 8 rows, then scroll.

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| State | Expanded, Collapsed | Expanded |

## Properties

| Property | Type | Default |
|---|---|---|
| Options | Slot | empty |
| Title | Text | Producer |
| Show Count | Boolean | true |
| Show Clear | Boolean | true |
| Icon | Instance swap | User |
| Show Search | Boolean | true |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 261 | 0 | 0 | 0 | 0 | `text-sm/medium` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Expanded | none | `border/subtle` | `text/primary` |  |
| Collapsed | none | `border/subtle` | `text/primary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Header | Frame | 320 × 52 | none | yes |
| Search | Frame | 320 × 40 | none | yes |
| Options | Slot | 320 × 168 | none | yes |

## Used in

Not nested in other components.
