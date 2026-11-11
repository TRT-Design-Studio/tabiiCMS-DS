---
component: Tab Segment
figma_page: "↪︎ Tabs"
figma_node: "282:723"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Tab Segment

State: Default / Hover / Selected / Disabled · Boolean: Leading Icon, Trailing Icon (lock) · Instance swap: Leading/Trailing Icon Swap · Text: Label · Leading Icon Active Swap (Fill, in selected state)

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| State | Default, Hover, Selected, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | Tab |
| Leading Icon | Boolean | false |
| Trailing Icon | Boolean | false |
| Leading Icon Swap | Instance swap | SquaresFour |
| Trailing Icon Swap | Instance swap | Lock |
| Leading Icon Active Swap | Instance swap | SquaresFour |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 32 | `Spacing/3․5` (14) | `Spacing/1․5` (6) | `Spacing/1․5` (6) | `rounded-lg` (8) | `text-sm/medium` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Default | none | none | `text/secondary` |  |
| Hover | `bg/interactive/hover` 5% | none | `text/primary` |  |
| Selected | `bg/raised` | `border/default` | `text/primary` |  |
| Disabled | `text/disabled` (Vector) | none | `text/secondary` | 50% |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Leading Icon | SquaresFour | 16 × 16 | none | no |
| Label | Text | 24 × 20 | `text-sm/medium` `text/secondary` | yes |
| Trailing Icon | Lock | 14 × 14 | none | no |

## Used in

Tabs
