---
component: Radio
figma_page: "↪︎ Checkbox & Radio"
figma_node: "281:900"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Radio

Radio control only (16 px). For a labelled radio, place a Label next to it; in lists use a Menu Item with the radio in the Leading slot.

## Variants

| Axis | Values | Default |
|---|---|---|
| Selected | False, True | False |
| State | Default, Hover, Focused, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Selected | Variant | False |
| State | Variant | Default |

## Sizes

| Part | Size | Border | Radius |
|---|---|---|---|
| Circle | `Spacing/4` (16) | `border` 1 px; `border-2` when Focused | `rounded-full` |
| Dot | `Spacing/2` (8) | — | `rounded-full` |

## States

| Selected · State | Fill | Border | Dot |
|---|---|---|---|
| False · Default | `bg/base` | `border/default` | — |
| False · Hover | `bg/subtle` | `border/strong` | — |
| False · Focused | `bg/base` | `border/focus` 2 px | — |
| True · Default | `bg/base` | `border/selected` | `action/primary/default` |
| True · Hover | `bg/subtle` | `border/selected` | `action/primary/default` |
| True · Focused | `bg/base` | `border/focus` 2 px | `action/primary/default` |
| Any · Disabled | as Default | as Default | `Opacity/opacity-50` on the control |

## Used in

Not used inside other components. Playground uses: next to a Label with a Description.
