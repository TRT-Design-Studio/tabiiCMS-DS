---
component: Calendar Day
figma_page: "↪︎ Datepicker"
figma_node: "735:10917"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Calendar Day

One day cell in Calendar. 32 × 32 cell with a 28 px round mark. The range band continues across cells; start and end cells round it off. Today has a dot. Week Edge rounds the band at the first or last day of a week row (in code: `:first-child` / `:last-child` of the week row).

## Variants

| Axis | Values | Default |
|---|---|---|
| State | Default, Hover, Today, Focused, Selected, Today Selected, Range Start, In Range, Today In Range, Range End, Disabled, Outside Month | Default |
| Week Edge | None, First, Last | None |

First and Last exist only for In Range and Today In Range (16 variants in total).

## Properties

| Property | Type | Default |
|---|---|---|
| State | Variant | Default |
| Week Edge | Variant | None |
| Day | Text | 15 |

## Sizes

| Part | Size | Radius | Text |
|---|---|---|---|
| Cell | `Spacing/8` (32) | — | — |
| Band | 32 × 32 | `rounded-full` on the start or end side | — |
| Mark | `Spacing/7` (28) | `rounded-full` | `text-sm/regular`; `text-sm/medium` when selected |
| Today Dot | `Spacing/1` (4) | — | — |
| Focus ring | `border-2` | — | — |

## States

| State | Fill | Border | Text |
|---|---|---|---|
| Default | — | — | `text/primary` |
| Hover | `bg/interactive/hover` (mark) | — | `text/primary` |
| Today | — | — | `text/primary` + dot `text/primary` |
| Focused | — | `border/focus` 2 px | `text/primary` |
| Selected | `action/primary/default` | — | `text/inverse` |
| Today Selected | `action/primary/default` | — | `text/inverse` + dot `text/inverse` |
| Range Start | mark `action/primary/default`, band `bg/subtle` (left rounded) | — | `text/inverse` |
| In Range | band `bg/subtle` | — | `text/primary` |
| Today In Range | band `bg/subtle` | — | `text/primary` + dot `text/primary` |
| Range End | mark `action/primary/default`, band `bg/subtle` (right rounded) | — | `text/inverse` |
| Disabled | — | — | `text/disabled` |
| Outside Month | — | — | `text/tertiary` |

## Used in

| Component | Where |
|---|---|
| [Calendar](../calendar/spec.md) | Days grid, 42 cells |
