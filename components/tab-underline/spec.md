---
component: Tab Underline
figma_page: "↪︎ Tabs"
figma_node: "282:744"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Tab Underline

State: Default / Hover / Selected / Disabled · Boolean: Leading Icon · Instance swap: Leading Icon Swap · Text: Label · Leading Icon Active Swap (Fill, in selected state)

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
| Leading Icon Swap | Instance swap | SquaresFour |
| Leading Icon Active Swap | Instance swap | SquaresFour |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 40 | `Spacing/1` (4) | `Spacing/2․5` (10) | `Spacing/1․5` (6) | 0 | `text-sm/medium` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Default | none | none | `text/tertiary` |  |
| Hover | none | `border/strong` | `text/primary` |  |
| Selected | none | `border/selected` | `text/primary` |  |
| Disabled | none | none | `text/tertiary` | 50% |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Leading Icon | SquaresFour | 16 × 16 | none | no |
| Label | Text | 24 × 20 | `text-sm/medium` `text/tertiary` | yes |

## Used in

Tabs
