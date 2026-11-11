---
component: Breadcrumb Item
figma_page: "↪︎ Breadcrumb"
figma_node: "282:1028"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Breadcrumb Item

One step of the Breadcrumb: an optional House icon, the label and a caret separator. Default and Hover are links; Current is the page you are on and is not clickable. Collapsed is a "More" Icon Button that stands for the hidden middle items.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| State | Default, Hover, Current, Focused, Collapsed | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | Page |
| Icon | Boolean | false |
| Separator | Boolean | true |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 20 | 0 | 0 | `Spacing/2` (8) | 0 | `text-sm/regular` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Default | none | none | `text/secondary` |  |
| Hover | none | none | `text/primary` (underline) |  |
| Current | none | none | `text/tertiary` |  |
| Focused | none | `border/focus` 2 px outside, radius 4 | `text/primary` |  |
| Collapsed | Icon Button (Ghost, XSmall) | none | — |  |

The separator is always `text/tertiary`.

## Parts

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Icon | House | 16 × 16 | label color | Icon |
| Label | Text | hug × 20 | `text-sm/regular` | yes |
| Separator | CaretRight | 14 × 14 | `text/tertiary` | Separator |

## Used in

Breadcrumb.
