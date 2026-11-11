---
component: Checkbox
figma_page: "↪︎ Checkbox & Radio"
figma_node: "281:867"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Checkbox

Checkbox control only (16 px). For a labelled checkbox, place a Label next to it (8 px gap); in lists use a Menu Item with the checkbox in the Leading slot.

## Variants

| Axis | Values | Default |
|---|---|---|
| Checked | False, True, Indeterminate | False |
| State | Default, Hover, Focused, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Checked | Variant | False |
| State | Variant | Default |

## Sizes

| Part | Size | Border | Radius |
|---|---|---|---|
| Box | `Spacing/4` (16) | `border` 1 px; `border-2` when Focused; none when checked | `rounded-sm` |
| Mark | `Spacing/3` (12) | — | — |

Mark is the Check icon (True) or the Minus icon (Indeterminate), Regular weight.

## States

| Checked · State | Fill | Border | Mark |
|---|---|---|---|
| False · Default | `bg/base` | `border/default` | — |
| False · Hover | `bg/subtle` | `border/strong` | — |
| False · Focused | `bg/base` | `border/focus` 2 px | — |
| True / Indeterminate · Default | `action/primary/default` | — | `text/inverse` |
| True / Indeterminate · Hover | `action/primary/hover` | — | `text/inverse` |
| True / Indeterminate · Focused | `action/primary/default` | `border/focus` 2 px | `text/inverse` |
| Any · Disabled | as Default | as Default | `Opacity/opacity-50` on the control |

## Used in

| Component | Where |
|---|---|
| Table Header Cell | Type Checkbox: select all (exposed) |
| Table Cell | Type Checkbox: select one row (Selected = checked) |

Playground uses: next to a Label (Required, Help), in the Leading slot of Menu Item for filter lists and people pickers.
