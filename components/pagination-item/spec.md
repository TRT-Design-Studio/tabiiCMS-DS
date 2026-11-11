---
component: Pagination Item
figma_page: "↪︎ Pagination"
figma_node: "301:4316"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Pagination Item

One cell of the Pagination items group: a page number, "…" or Previous / Next with a caret. Selected marks the current page. Disabled is used for Previous on the first page and Next on the last.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| State | Default, Hover, Selected, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | 1 |
| Leading Icon | Boolean | false |
| Trailing Icon | Boolean | false |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 32 | `Spacing/3` (12) | `Spacing/1․5` (6) | `Spacing/1` (4) | 0 | `text-sm/medium` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Default | `bg/surface` | `border/default` | `text/primary` |  |
| Hover | `bg/interactive/hover` | `border/default` | `text/primary` |  |
| Selected | `bg/interactive/selected` | `border/default` | `text/primary` `text-sm/semibold` |  |
| Disabled | `bg/surface` | `border/default` | `text/primary` | 50% |

## Parts

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Leading Icon | CaretLeft | 14 × 14 | `text/primary` | Leading Icon |
| Label | Text | hug × 20 | `text-sm/medium` `text/primary` | yes |
| Trailing Icon | CaretRight | 14 × 14 | `text/primary` | Trailing Icon |

## Used in

Pagination.
