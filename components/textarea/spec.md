---
component: Textarea
figma_page: "↪︎ Textarea"
figma_node: "281:810"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Textarea

Multi-line text field for longer copy. One size: 80 px tall (320 px wide by default, the width follows the layout).

## Variants

| Axis | Values | Default |
|---|---|---|
| State | Default, Focused, Filled, Error, Disabled, Read-only | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Value | Text | Write text here ... |
| Counter | Boolean | false |
| Counter Text | Text | 0/500 |

## Sizes

| Height | Padding | Gap | Radius | Text |
|---|---|---|---|---|
| `Spacing/20` (80) | `Spacing/3` (12) H, `Spacing/2․5` (10) V | `Spacing/2` (8) | `rounded-lg` (8) | `text-sm/regular` |

Border: 1 px inside, outside the layout. Counter `text-xs/regular`.

## States

| State | Background | Border | Value text | Counter |
|---|---|---|---|---|
| Default | `bg/surface` | `border/default` | `text/tertiary` (placeholder) | `text/tertiary` |
| Focused | `bg/surface` | `border/selected` | `text/primary` | `text/tertiary` |
| Filled | `bg/surface` | `border/default` | `text/primary` | `text/tertiary` |
| Error | `bg/surface` | `border/danger` | `text/primary` | `feedback/danger/text` |
| Disabled | `bg/disabled` | `border/default` | `text/primary`, 50% opacity | `text/tertiary`, 50% opacity |
| Read-only | `bg/base` | `border/default` | `text/primary` | `text/tertiary` |

## Used in

Form Field (Control=Textarea).
