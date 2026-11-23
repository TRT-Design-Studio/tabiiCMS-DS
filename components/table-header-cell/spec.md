---
component: Table Header Cell
figma_page: "↪︎ Table"
figma_node: "284:1234"
version: 1.1.0
status: stable
updated: 2026-11-23
---

# Table Header Cell

Column title of a table, above a column of [Table Cell](../table-cell/spec.md). Sortable shows the sort icon; Sort marks the column the table is sorted by. Type Checkbox selects every row.

## Variants

| Axis | Values | Default |
|---|---|---|
| Type | Label, Checkbox | Label |
| Sort | None, Ascending, Descending | None |
| State | Default, Hover | Default |

Checkbox has only Sort None, State Default. 7 variants in all.

## Properties

| Property | Type | Default |
|---|---|---|
| Type | Variant | Label |
| Sort | Variant | None |
| State | Variant | Default |
| Label | Text | COLUMN |
| Sortable | Boolean | true |
| Divider | Boolean | false |

## Sizes

| Part | Size | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Container | 36 high | `Spacing/2․5` (10) top/bottom, `Spacing/5` (20) sides; Checkbox: `Spacing/5` (20) left, `Spacing/0` (0) right | `Spacing/1` (4) | — | `text-xs/medium` |
| Sort Icon | `Spacing/3` (12) | — | — | — | — |
| Divider | 1 × 36 | — | — | — | — |

Cells are 160 px wide in the set; Checkbox cells are 36 px wide (hug, no right padding). On screens they fill their column.

## States

| State | Fill | Border | Label · icon |
|---|---|---|---|
| Default | `bg/surface` | `border/default` bottom | `text/tertiary` |
| Hover | `bg/base` | `border/default` bottom | `text/tertiary` |
| Sorted (Ascending, Descending) | `bg/surface` (Hover `bg/base`) | `border/default` bottom | `text/primary` |

| Part | Value |
|---|---|
| Sort icon | CaretUpDown (None), ArrowUp (Ascending), ArrowDown (Descending) |
| Divider | `border/default`, right edge |

## Used in

Not nested in other components. On screens, each column starts with one Table Header Cell inside the Body slot of a [Card](../card/spec.md).

Playground uses: Label with Sortable off and Divider on (off in the last column); Checkbox above the row checkboxes in Show library.
