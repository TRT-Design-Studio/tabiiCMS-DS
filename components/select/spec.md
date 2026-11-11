---
component: Select
figma_page: "↪︎ Select"
figma_node: "281:777"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Select

Field that opens a list of options and shows the chosen one. Height is fixed per size; the chevron on the right is always shown.

## Variants

| Axis | Values | Default |
|---|---|---|
| Size | Small (32), Medium (36), Large (40) | Medium |
| State | Default, Focused, Filled, Error, Disabled, Read-only | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Value | Text | Select an option |
| Leading Icon / Leading Icon Swap | Boolean / Instance swap | false / SquaresFour |
| Leading Content / Leading | Boolean / Slot | false / empty |

## Sizes

| Size | Height | Padding H | Gap | Radius | Text |
|---|---|---|---|---|---|
| Small | 32 | `Spacing/2․5` (10) | `Spacing/2` (8) | `rounded-md` (6) | `text-sm/regular` |
| Medium | 36 | `Spacing/3` (12) | `Spacing/2` (8) | `rounded-lg` (8) | `text-sm/regular` |
| Large | 40 | `Spacing/3` (12) | `Spacing/2` (8) | `rounded-lg` (8) | `text-sm/regular` |

Border: 1 px inside, outside the layout.

## Parts

| Part | Icon | Size | Empty | Filled |
|---|---|---|---|---|
| Leading Icon | SquaresFour (swap) | 16 | `text/tertiary` | `text/secondary` |
| Chevron | CaretDown | 16 | see States | see States |

In Figma only the Filled variant carries a Leading Icon color; when empty it follows Input (`text/tertiary`).

## States

| State | Background | Border | Value text | Chevron |
|---|---|---|---|---|
| Default | `bg/surface` | `border/default` | `text/tertiary` (placeholder) | `text/tertiary` |
| Focused | `bg/surface` | `border/selected` | `text/primary` | `text/secondary` |
| Filled | `bg/surface` | `border/default` | `text/primary` | `text/secondary` |
| Error | `bg/surface` | `border/danger` | `text/primary` | `text/secondary` |
| Disabled | `bg/disabled` | `border/default` | `text/primary`, 50% opacity | `text/secondary`, 50% opacity |
| Read-only | `bg/base` | `border/default` | `text/primary` | `text/tertiary` |

## Slots

- **Leading:** custom content before the value, such as a flag. No screen uses it yet.

## Used in

Form Field (Control=Select), Pagination (Size=Mobile, page number).
