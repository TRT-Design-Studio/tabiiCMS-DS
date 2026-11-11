---
component: Divider
figma_page: "↪︎ Divider"
figma_node: "281:959"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Divider

1 px line that separates groups of content. Horizontal splits stacked sections; Vertical splits items in a row. No padding or margin of its own: the space around it comes from the parent's auto layout gap.

## Variants

| Axis | Values | Default |
|---|---|---|
| Orientation | Horizontal, Vertical | Horizontal |

## Properties

| Property | Type | Default |
|---|---|---|
| Orientation | Variant | Horizontal |

## Sizes

| Orientation | Width | Height |
|---|---|---|
| Horizontal | `Spacing/60` (240) by default; usually fills the container | `Spacing/px` (1) |
| Vertical | `Spacing/px` (1) | `Spacing/6` (24) by default; match the row height |

## States

No states.

| Part | Fill |
|---|---|
| Line | `border/default` |

## Used in

| Component | Where |
|---|---|
| [Sidebar](../sidebar/spec.md) | Horizontal, in the Rail type: in place of each group title |
| [Calendar](../calendar/spec.md) | Horizontal, above the time footer in Date & Time |
| Top Bar | Vertical, between the sidebar toggle and the breadcrumb or the actions |

Playground uses: under section titles in the Create Show side panel.
