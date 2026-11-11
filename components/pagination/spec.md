---
component: Pagination
figma_page: "↪︎ Pagination"
figma_node: "301:4472"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Pagination

Footer bar for long lists and tables. Shows the total count, a per-page selector, the page items and a "Go to" field. Mobile keeps only previous / next and a page Select.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Size | Desktop, Mobile | Desktop |

## Properties

| Property | Type | Default |
|---|---|---|
| Total | Text | Total: 958 |
| Show Per Page | Boolean | true |
| Show Go To | Boolean | true |

Show Per Page and Show Go To apply to Desktop only.

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Desktop | 72 | `Spacing/6` (24) | `Spacing/5` (20) | `Spacing/4` (16) | 0 | `text-sm/medium` |
| Mobile | 72 | `Spacing/4` (16) | `Spacing/5` (20) | `Spacing/4` (16) | 0 | `text-sm/medium` |

## Parts

Desktop:

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Total | Text | hug × 20 | `text-sm/medium` `text/primary` | yes |
| Per page | Button (Secondary, Small) + "per page" | 126 × 32 | none | Show Per Page |
| Items | Pagination Items, `border/default` stroke, radius 8 | 472 × 32 | none | yes |
| Go to | "Go to" + Input (Small, Filled) + "Page" | 140 × 32 | none | Show Go To |

Mobile:

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Total | Text | hug × 20 | `text-sm/medium` `text/primary` | yes |
| Controls | Icon Button (Previous) + Select (Small) + Icon Button (Next), gap 8 | — | none | yes |

## Used in

Not nested in other components.
