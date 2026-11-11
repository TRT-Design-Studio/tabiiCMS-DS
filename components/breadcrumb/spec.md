---
component: Breadcrumb
figma_page: "↪︎ Breadcrumb"
figma_node: "282:1074"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Breadcrumb

Shows where the page sits in the hierarchy and links back to its parents. A row of Breadcrumb Items; the last one is Current and not clickable. Long trails use the Collapsed variant: the middle items fold into a "More" button. Show Back adds a back button before the trail. Used in the Top Bar.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Content | Items, Slot, Collapsed | Items |

- Items: Item 1 › Item 2 › Current. Show Middle hides Item 2 for a two-level trail.
- Slot: free Breadcrumb Slot for any number of Breadcrumb Items.
- Collapsed: first item › More (collapsed item) › Current.

## Properties

| Property | Type | Default |
|---|---|---|
| Show Back | Boolean | false |
| Show Middle | Boolean | true |
| Breadcrumb Slot | Slot | empty |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 20 | 0 | 0 | `Spacing/2` (8) | 0 | `text-sm/regular` |

## Parts

| Part | Kind | Size | Shown |
|---|---|---|---|
| Back | Icon Button (Secondary, XSmall) | — | Show Back |
| Item 1 | Breadcrumb Item (Default) | 132 × 20 | yes |
| Item 2 | Breadcrumb Item (Default) | 65 × 20 | Show Middle |
| Current | Breadcrumb Item (Current, no separator) | 83 × 20 | yes |

## Used in

Top Bar.
