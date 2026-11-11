---
component: Section Nav Item
figma_page: "↪︎ Stepper"
figma_node: "282:1005"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Section Nav Item

Status: Empty / Current / Complete / Error (nested StepIcon) · State: Default / Hover · Boolean: Show Counter · Text: Label, Counter

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Status | Empty, Current, Complete, Error | Empty |
| State | Default, Hover | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | Section |
| Counter | Text | 0/4 |
| Show Counter | Boolean | true |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 40 | `Spacing/3` (12) | `Spacing/2․5` (10) | `Spacing/2․5` (10) | `rounded-lg` (8) | `text-sm/medium` |

## States

| Status | State | Background | Border | Text | Opacity |
|---|---|---|---|---|---|
| Empty | Default | `bg/surface` | `border/default` | `text/secondary` |  |
| Empty | Hover | `bg/interactive/hover` 5% | `border/default` | `text/secondary` |  |
| Current | Default | `bg/surface` | `border/selected` | `text/primary` |  |
| Current | Hover | `bg/interactive/hover` 5% | `border/selected` | `text/primary` |  |
| Complete | Default | `bg/surface` | `border/default` | `text/secondary` |  |
| Complete | Hover | `bg/interactive/hover` 5% | `border/default` | `text/secondary` |  |
| Error | Default | `bg/surface` | `border/default` | `text/secondary` |  |
| Error | Hover | `bg/interactive/hover` 5% | `border/default` | `text/secondary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Step | Step Icon | 16 × 16 | none | yes |
| Label | Text | 159 × 20 | `text-sm/medium` `text/secondary` | yes |
| Counter | Text | 21 × 16 | `text-xs/regular` `text/tertiary` | yes |

## Used in

Not nested in other components.
