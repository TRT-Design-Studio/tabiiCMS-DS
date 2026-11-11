---
component: Tab Underline
figma_page: "↪︎ Tabs"
figma_node: "282:744"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Tab Underline

One tab of Tabs Underline. A 2 px line shows Hover and Selected; the label turns semibold when Selected. The leading icon turns to Fill when Selected.

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

## Sizes

| Part | Size | Padding | Gap | Text |
|---|---|---|---|---|
| Container | 40 high | `Spacing/2․5` (10) top/bottom, `Spacing/1` (4) sides | `Spacing/1․5` (6) | `text-sm/medium`; `text-sm/semibold` when Selected |
| Leading Icon | `Spacing/4` (16) | — | — | — |
| Indicator | `border-2` bottom | — | — | — |

## States

| State | Indicator | Label |
|---|---|---|
| Default | — | `text/tertiary` |
| Hover | `border/strong` 2 px | `text/primary` |
| Selected | `border/selected` 2 px | `text/primary`, semibold |
| Disabled | — | `text/tertiary`, `Opacity/opacity-50` on the tab |

## Used in

| Component | Where |
|---|---|
| [Tabs](../tabs/spec.md) | Type Underline: Tab 1–5 (Items) and Tabs Slot |

Playground uses: Content Sidebar tabs.
