---
component: Filter Group
figma_page: "↪︎ Filter Group"
figma_node: "742:11724"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Filter Group

One group of a filter panel. Header: icon, title, selected count (Badge Count), Clear (clears only this group) and chevron. Expanded shows an optional Small search and an Options slot of Menu Items with a Checkbox in the Leading slot and the result count as Trailing Text. Selected options move to the top; show at most 8 rows, then scroll. Groups stack in a column to form the panel; one is open at a time.

## Variants

| Axis | Values | Default |
|---|---|---|
| State | Expanded, Collapsed | Expanded |

## Properties

| Property | Type | Default |
|---|---|---|
| Title | Text | Producer |
| Icon | Instance swap | User |
| Show Count | Boolean | true |
| Show Clear | Boolean | true |
| Show Search | Boolean | true |
| Options | Slot | 5 Menu Items |

## Sizes

| Part | Height | Padding | Gap |
|---|---|---|---|
| Header | 52 | `Spacing/3` (12) all sides | `Spacing/2` (8) |
| Search | 40 | `Spacing/3` (12) sides, `Spacing/2` (8) bottom | — |
| Options | Hug | `Spacing/1` (4) sides, `Spacing/2` (8) bottom | — |

Width 320 by default; the group fills the panel. Bottom border 1 px `border/subtle` (inside), no fill. Title `text-sm/medium` `text/primary`. Icon and chevron 16 px, `text/secondary`. Rows are Menu Items (32 px).

## States

| State | Shows | Chevron |
|---|---|---|
| Expanded | Header, Search (if Show Search), Options | CaretUp |
| Collapsed | Header only | CaretDown |

## Parts

| Part | Component | Size | Controlled by |
|---|---|---|---|
| Icon | Icon (User) | 16 | Icon |
| Title | Text | — | Title |
| Count | Badge Count, Neutral | 20 | Show Count |
| Clear | Button, Link, XSmall | 28 | Show Clear |
| Chevron | CaretUp / CaretDown | 16 | State |
| Search | Input, Small, Leading Icon MagnifyingGlass | 32 | Show Search (nested Input exposed) |
| Options | Slot of Menu Items: Checkbox in Leading, count as Trailing Text | 32 per row | Options |

## Slots

- **Options:** Menu Items. Leading slot holds a Checkbox (Checked = selected); Trailing Text holds the result count. A short message replaces the rows when the search finds nothing.

## Used in

Not nested in other components. Screens stack it in the filter panel (Shows table filters).
