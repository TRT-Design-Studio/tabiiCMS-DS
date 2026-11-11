---
component: Pagination Item
figma_page: "↪︎ Pagination"
figma_node: "301:4316"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Pagination Item

State: Default / Hover / Selected / Disabled · Boolean: Leading Icon, Trailing Icon · Text: Label (sayfa, …, Previous, Next)

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

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
| Hover | `bg/interactive/hover` 5% | `border/default` | `text/primary` |  |
| Selected | `bg/interactive/selected` 4% | `border/default` | `text/primary` |  |
| Disabled | `bg/surface` | `border/default` | `text/primary` | 50% |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Leading Icon | CaretLeft | 14 × 14 | none | no |
| Label | Text | 6 × 20 | `text-sm/medium` `text/primary` | yes |
| Trailing Icon | CaretRight | 14 × 14 | none | no |

## Used in

Pagination
