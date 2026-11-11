---
component: Calendar
figma_page: "↪︎ Datepicker"
figma_node: "736:11267"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Calendar

Popover calendar under a date field. Week starts Monday. Type: Date closes when a day is picked; Date & Time adds a Footer and confirms with Done. For a date range, use Date and set the Calendar Day states inside it (Range Start, In Range, Range End). Selection color is the primary action color. Footer is a slot.

## Variants

| Axis | Values | Default |
|---|---|---|
| Type | Date, Date & Time | Date |

## Properties

| Property | Type | Default |
|---|---|---|
| Type | Variant | Date |
| Footer | Slot | Time Input (Small, Filled), time zone text, Button Tertiary Small "Done" |

## Sizes

| Part | Size | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Container | 250 × 286 (Date), 250 × 343 (Date & Time) | `Spacing/0` | `Spacing/0` | `rounded-lg` | — |
| Calendar (grid area) | 248 wide | `Spacing/3` (12) | `Spacing/2` (8) | — | — |
| Weekdays | 7 × 32, 24 high | — | — | — | `text-xs/medium` |
| Days | 6 rows × 7 cells, 224 × 192 | — | — | — | — |
| Time | Divider + Footer | bottom `Spacing/3` (12) | `Spacing/3` (12) | — | — |
| Footer | 32 high | sides `Spacing/3` (12) | `Spacing/2` (8) | — | `text-xs/regular` (time zone) |
| Time input | 88 × 32, Input Small, Leading Icon Clock | — | `Spacing/2` (8) to the time zone | — | — |

The grid always has 6 week rows, so the popover does not change height between months.

## States

Calendar has no state axis. Day states live in [Calendar Day](../calendar-day/spec.md).

| Part | Fill | Border | Text | Effect |
|---|---|---|---|---|
| Container | `bg/raised` | `border/default` 1 px | — | `Shadow/shadow-lg` |
| Weekday | — | — | `text/tertiary` | — |
| Time zone | — | — | `text/tertiary` | — |
| Divider | `border/default` | — | — | — |

## Slots

| Slot | Where | Default content |
|---|---|---|
| Footer | Under the Divider, Date & Time only | Time Area (Input Small + "GMT+3") and a Done button |

## Used in

Not used inside other components. Uses [Calendar Header](../calendar-header/spec.md) and 42 [Calendar Day](../calendar-day/spec.md) cells. Playground uses: under a focused date Input (Date) and Date & Time with footer.
