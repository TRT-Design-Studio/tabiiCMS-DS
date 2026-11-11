---
component: Calendar Header
figma_page: "↪︎ Datepicker"
figma_node: "736:10699"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Calendar Header

Month and year bar of Calendar. Month and Year are Link buttons with a caret: each opens a Menu (months / allowed years). Arrows change the month; disable an arrow at min/max.

## Variants

No variants. Single component.

## Properties

No properties of its own. Previous, Month, Year and Next are nested instances and are not exposed.

## Sizes

| Part | Size | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Header | 224 × 28 | — | — | — | — |
| Previous, Next | Icon Button Ghost Square XSmall, 28 × 28 | `Spacing/1․5` (6) | — | `rounded-lg` | — |
| Title (Month + Year) | 28 high | — | `Spacing/3` (12) | — | Button Link XSmall |

## States

No state axis. Arrow and button states come from Icon Button and Button.

## Used in

| Component | Where |
|---|---|
| [Calendar](../calendar/spec.md) | Top of the grid area |
