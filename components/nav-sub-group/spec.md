---
component: Nav Sub Group
figma_page: "↪︎ Sidebar"
figma_node: "311:10171"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Nav Sub Group

Sub-items under an open Sidebar item. A 1 px `border/default` line on the left runs the full height of the group.

## Variants

| Axis | Values | Default |
|---|---|---|
| Content | Items, Slot | Items |

## Properties

| Property | Type | Default |
|---|---|---|
| Show Item 3 | Boolean (Items) | true |
| Show Item 4 | Boolean (Items) | true |
| Items Slot | Slot (Slot) | 4 Nav Item SubItem |

## Sizes

| Part | Padding | Gap |
|---|---|---|
| Group | `Spacing/1․5` V, `Spacing/4․5` left | — |
| Items | `Spacing/2` left (after the line) | `Spacing/0․5` |

## States

None.

## Slots

- **Items Slot:** Nav Item at SubItem level, any number of rows.

## Used in

Sidebar.
