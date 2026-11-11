---
component: Breadcrumb Item
figma_page: "↪︎ Breadcrumb"
figma_node: "282:1028"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Breadcrumb Item

State: Default / Hover / Current · Boolean: Icon, Separator · Text: Label

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

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
| Default | `text/tertiary` (Vector) | none | `text/secondary` |  |
| Hover | none | none | `text/primary` |  |
| Current | `text/tertiary` (Vector) | none | `text/tertiary` |  |
| Focused | none | `border/focus` | `text/primary` |  |
| Collapsed | `text/secondary` (Vector) | none | — |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Icon | House | 16 × 16 | none | no |
| Label | Text | 33 × 20 | `text-sm/regular` `text/secondary` | yes |
| Separator | CaretRight | 14 × 14 | none | yes |

## Used in

Breadcrumb
