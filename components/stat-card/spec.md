---
component: Stat Card
figma_page: "🗂️ Cards"
figma_node: "1206:8382"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Stat Card

Single metric with an optional trend. Show Trend toggles the nested Trend; its Direction, Value and Context are edited on the nested Trend (exposed).

## Variants

No variants. Single component.

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | Metric label |
| Value | Text | 847 |
| Show Trend | Boolean | true |

## Sizes

| Part | Size | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Container | 256 × 128 | `Spacing/5` (20) | `Spacing/2` (8) | `rounded-xl` | — |
| Label | — | — | — | — | `text-sm/medium` |
| Value | — | — | — | — | `text-3xl/semibold` |

## States

No states.

| Part | Fill | Border | Text |
|---|---|---|---|
| Container | `bg/surface` | `border/default` 1 px | — |
| Label, Value | — | — | `text/primary` |

## Used in

Not used inside other components. Uses [Trend](../trend/spec.md). Playground uses: four Stat Cards at the top of Overview.
