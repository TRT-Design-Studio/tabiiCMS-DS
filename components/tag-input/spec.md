---
component: Tag Input
figma_page: "↪︎ Tag Input"
figma_node: "738:12313"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Tag Input

Field that turns typed values into removable Tags (Enter or comma). Tags wrap to new lines and the field grows up to 3 lines, then scrolls. Same border and colors as Input. Error for duplicates or limit. Read-only shows Static tags. Small (32) for filter bars.

## Variants

| Axis | Values | Default |
|---|---|---|
| Size | Small, Medium | Medium (team default; Figma adds Small from the panel) |
| State | Default, Focused, Filled, Error, Disabled, Read-only | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Size | Variant | Medium |
| State | Variant | Default |
| Tags | Slot | Two Removable Tags (Small) |
| Placeholder | Text | Add tags… |

## Sizes

| Size | Height | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Small | 32 | `Spacing/1․5` (6) top/bottom, `Spacing/2` (8) sides | `Spacing/1` (4), lines `Spacing/1` | `rounded-md` | `text-sm/regular` |
| Medium | 36 | `Spacing/2` (8) | `Spacing/1` (4), lines `Spacing/1` | `rounded-lg` | `text-sm/regular` |

Width is 320 by default. The typing area (Value) is at least 66 px wide; when it does not fit after the tags it moves to the next line. Both sizes use Tag Small (20 high): it fills the inner height exactly (Medium 36 − 2 × 8 = 20; Small 32 − 2 × 6 = 20), so Tag Input stays as tall as Input. Tag Medium (28) would make the field 44 high.

## States

| State | Fill | Border | Text | Tags |
|---|---|---|---|---|
| Default | `bg/surface` | `border/default` | `text/tertiary` (placeholder) | — |
| Focused | `bg/surface` | `border/selected` | `text/primary` (typed) | Removable · Default |
| Filled | `bg/surface` | `border/default` | — | Removable · Default |
| Error | `bg/surface` | `border/danger` | — | Removable · Default |
| Disabled | `bg/disabled` | `border/default` | `text/disabled` | Removable · Disabled |
| Read-only | `bg/base` | `border/default` | `text/primary` | Static · Read-only |

## Slots

| Slot | Default content |
|---|---|
| Tags | Tag instances (Small). Removable while editing, Static · Read-only in Read-only. |

## Used in

Not used inside other components. Playground uses: suggestions Menu under a focused field, Error with a Field Message, tags wrapping to two lines.
