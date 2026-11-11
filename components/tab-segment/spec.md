---
component: Tab Segment
figma_page: "↪︎ Tabs"
figma_node: "282:723"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Tab Segment

One tab of Tabs Segmented. Use Disabled with the lock icon for sections that open later. The leading icon turns to Fill when Selected.

## Variants

| Axis | Values | Default |
|---|---|---|
| State | Default, Hover, Selected, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| State | Variant | Default |
| Label | Text | Tab |
| Leading Icon | Boolean | false |
| Leading Icon Swap | Instance swap | SquaresFour (Regular) |
| Leading Icon Active Swap | Instance swap | SquaresFour (Fill) |
| Trailing Icon | Boolean | false |
| Trailing Icon Swap | Instance swap | Lock (Regular) |

## Sizes

| Part | Size | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Container | 32 high | `Spacing/1․5` (6) top/bottom, `Spacing/3․5` (14) sides | `Spacing/1․5` (6) | `rounded-lg` | `text-sm/medium` |
| Leading Icon | `Spacing/4` (16) | — | — | — | — |
| Trailing Icon | `Spacing/3․5` (14) | — | — | — | — |

## States

| State | Fill | Border | Label |
|---|---|---|---|
| Default | — | — | `text/secondary` |
| Hover | `bg/interactive/hover` | — | `text/primary` |
| Selected | `bg/raised` | `border/default` 1 px | `text/primary` |
| Disabled | — | — | `text/secondary`, `Opacity/opacity-50` on the tab |

## Used in

| Component | Where |
|---|---|
| [Tabs](../tabs/spec.md) | Type Segmented: Tab 1–5 (Items) and Tabs Slot |
