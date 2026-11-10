---
component: Menu Item
figma_page: "📋 Menu"
figma_node: "720:10572"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Menu Item

One row of a Menu. Single line is 32 px; rows with Description (48 px) or larger Leading content grow.

## Variants

| Axis | Values | Default |
|---|---|---|
| State | Default, Hover, Focused, Selected, Disabled | Default |
| Destructive | False, True (Default, Hover, Focused only) | False |

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | Menu item |
| Show Description / Description | Boolean / Text | false / Description |
| Leading Icon / Leading Icon Swap | Boolean / Instance swap | false / Copy |
| Leading Content / Leading | Boolean / Slot | false / empty |
| Show Trailing Text / Trailing Text | Boolean / Text | false / ⌘D |
| Submenu | Boolean | false |
| Trailing Content / Trailing | Boolean / Slot | false / empty |

## Sizes

| Height | Padding H | Padding V | Gap | Radius | Text | Icon |
|---|---|---|---|---|---|---|
| 32 (one line) | `Spacing/2` (8) | `Spacing/1․5` (6) | `Spacing/2` (8) | `rounded-md` (6) | `text-sm/regular` | 16 (`Spacing/4`) |

Description and Trailing Text `text-xs/regular`, `text/tertiary`. Icons `text/secondary`.

## States

| State | Fill | Border | Label |
|---|---|---|---|
| Default | none | none | `text/primary` |
| Hover | `bg/interactive/hover` | none | `text/primary` |
| Focused | `bg/interactive/hover` | 2 px inside `border/focus` | `text/primary` |
| Selected | `bg/interactive/selected` | none | `text/primary`, `text-sm/medium` |
| Disabled | none | none | 50% opacity (`opacity-50`) |
| Destructive Default | none | none | `feedback/danger/text` |
| Destructive Hover | `feedback/danger/bg` | none | `feedback/danger/text` |
| Destructive Focused | `feedback/danger/bg` | 2 px inside `border/focus` | `feedback/danger/text` |

## Slots

- **Leading:** Avatar, poster image, flag, Checkbox, Radio.
- **Trailing:** check icon on the selected row, external link icon.

## Used in

Menu (default content of the Items slot), Filter Group.
