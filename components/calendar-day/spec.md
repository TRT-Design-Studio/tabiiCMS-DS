---
component: Calendar Day
figma_page: "↪︎ Datepicker"
figma_node: "735:10917"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Calendar Day

One day cell in Calendar. 32×32 cell with a 28 px round mark. Range band continues across cells; start and end cells round it off. Today has a dot. While choosing an end date, cells up to the pointer show Range Preview; the candidate day behaves like Hover. Week Edge (In Range, Today In Range): None / First / Last. First = first day of a week row, the band starts rounded; Last = last day of a week row, the band ends rounded. In code: round the band on :first-child / :last-child of the week row.

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| State | Default, Hover, Today, Focused, Selected, Today Selected, Range Start, In Range, Range End, Disabled, Outside Month, Today In Range | Default |
| Week Edge | None, First, Last | None |

## Properties

| Property | Type | Default |
|---|---|---|
| Day | Text | 15 |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 32 | — | — | — | 0 | `text-sm/regular` |

## States

| State | Week Edge | Background | Border | Text | Opacity |
|---|---|---|---|---|---|
| Default | None | none | none | `text/primary` |  |
| Hover | None | `bg/interactive/hover` 5% (Mark) | none | `text/primary` |  |
| Today | None | `text/primary` (Today Dot) | none | `text/primary` |  |
| Focused | None | none | none | `text/primary` |  |
| Selected | None | `action/primary/default` (Mark) | none | `text/inverse` |  |
| Today Selected | None | `action/primary/default` (Mark) | none | `text/inverse` |  |
| Range Start | None | `bg/subtle` (Band) | none | `text/inverse` |  |
| In Range | None | `bg/subtle` (Band) | none | `text/primary` |  |
| Today In Range | None | `bg/subtle` (Band) | none | `text/primary` |  |
| Range End | None | `bg/subtle` (Band) | none | `text/inverse` |  |
| Disabled | None | none | none | `text/disabled` |  |
| Outside Month | None | none | none | `text/tertiary` |  |
| In Range | First | `bg/subtle` (Band) | none | `text/primary` |  |
| In Range | Last | `bg/subtle` (Band) | none | `text/primary` |  |
| Today In Range | First | `bg/subtle` (Band) | none | `text/primary` |  |
| Today In Range | Last | `bg/subtle` (Band) | none | `text/primary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Mark | Frame | 28 × 28 | none | yes |

## Used in

Calendar
