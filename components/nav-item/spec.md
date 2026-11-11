---
component: Nav Item
figma_page: "↪︎ Sidebar"
figma_node: "282:938"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Nav Item

One link of the Sidebar.

## Variants

| Axis | Values | Default |
|---|---|---|
| Level | Item (36), SubItem (32), Rail (36 × 36) | Item |
| State | Default, Hover, Selected, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | Nav item |
| Leading Icon / Leading Icon Swap | Boolean / Instance swap | true / Stack |
| Icon Active | Instance swap | Stack (Fill) |
| Trailing Icon / Trailing Icon Swap | Boolean / Instance swap | false / CaretDown |
| Show Indicator | Boolean | false |

## Sizes

| Level | Height | Padding | Gap | Radius | Text | Icon |
|---|---|---|---|---|---|---|
| Item | 36 | `Spacing/2` V, `Spacing/2․5` H | `Spacing/2․5` | `rounded-lg` | `text-sm/medium` | 20 |
| SubItem | 32 | `Spacing/1․5` V, `Spacing/4` left, `Spacing/3` right | `Spacing/2․5` | `rounded-lg` | `text-sm/regular` | none |
| Rail | 36 × 36 | `Spacing/2` | — | `rounded-lg` | — | 20 |

Trailing caret 16 px (`Spacing/4`).

## States

| State | Fill | Border | Label and icon |
|---|---|---|---|
| Default | none | none | `text/secondary` |
| Hover | `bg/interactive/hover` | none | `text/primary` |
| Selected (Item, Rail) | `bg/surface` | 1 px `border/default` | `text/primary`, icon from Icon Active |
| Selected (SubItem) | none | none | `text/primary`, `text-sm/medium`; optional indicator: 2 × 32 `bg/inverse` line on the left edge, hidden by default (Show Indicator) |
| Disabled | none | none | 50% opacity (`opacity-50`) |

## Slots

None.

## Used in

Sidebar, Nav Sub Group (SubItem).
