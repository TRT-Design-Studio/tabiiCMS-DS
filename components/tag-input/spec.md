---
component: Tag Input
figma_page: "↪︎ Tag Input"
figma_node: "738:12313"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Tag Input

Field that turns typed values into removable Tags (Enter or comma). Tags wrap to new lines and the field grows up to 3 lines, then scrolls. Same border and colors as Input. Error for duplicates or limit. Read-only shows Static tags. Small (32) for filter bars.

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Size | Small, Medium | Small |
| State | Default, Focused, Filled, Error, Disabled, Read-only | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Tags | Slot | empty |
| Placeholder | Text | Add tags… |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Small | 32 | `Spacing/2` (8) | `Spacing/1․5` (6) | `Spacing/1` (4) | `rounded-md` (6) | `text-sm/regular` |
| Medium | 36 | `Spacing/2` (8) | `Spacing/2` (8) | `Spacing/1` (4) | `rounded-lg` (8) | `text-sm/regular` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Default | `bg/surface` | `border/default` | `text/tertiary` |  |
| Focused | `bg/surface` | `border/selected` | `text/primary` |  |
| Filled | `bg/surface` | `border/default` | — |  |
| Error | `bg/surface` | `border/danger` | — |  |
| Disabled | `bg/disabled` | `border/default` | — |  |
| Read-only | `bg/base` | `border/default` | — |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Tags | Slot | 100 × 100 | none | no |
| Value | Text | 66 × 20 | `text-sm/regular` `text/tertiary` | yes |

## Used in

Not nested in other components.
