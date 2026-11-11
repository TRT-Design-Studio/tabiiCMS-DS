---
component: List Item
figma_page: "↪︎ List Item"
figma_node: "284:1205"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# List Item

Type: Issue / Activity (nested Avatar) / Note (nested Badge) / Slot · State: Default / Hover · Boolean: Show Description · Instance swap: Icon · Slot: Leading Slot · Text: Title, Description

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Type | Issue, Activity, Note, Slot | Issue |
| State | Default, Hover | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Title | Text | List item title |
| Description | Text | Supporting text |
| Show Description | Boolean | true |
| Icon | Instance swap | TrendUp |
| Leading Slot | Slot | empty |
| Trailing Slot | Slot | empty |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 68 | `Spacing/2` (8) | `Spacing/3` (12) | `Spacing/3` (12) | `rounded-lg` (8) | `text-sm/medium` |

## States

| Type | State | Background | Border | Text | Opacity |
|---|---|---|---|---|---|
| Issue | Default | `bg/subtle` (Icon Wrap) | none | `text/primary` |  |
| Issue | Hover | `bg/subtle` (Icon Wrap) | none | `text/primary` |  |
| Activity | Default | none | none | `text/primary` |  |
| Activity | Hover | none | none | `text/primary` |  |
| Note | Default | none | none | `text/primary` |  |
| Note | Hover | none | none | `text/primary` |  |
| Slot | Default | none | none | `text/primary` |  |
| Slot | Hover | none | none | `text/primary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Icon Wrap | Frame | 44 × 44 | `bg/subtle` | yes |
| Text | Frame | 235 × 42 | none | yes |
| Trailing Slot | Slot | 1 × 1 | none | yes |

## Used in

Not nested in other components.
