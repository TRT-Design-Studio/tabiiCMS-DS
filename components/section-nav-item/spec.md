---
component: Section Nav Item
figma_page: "↪︎ Stepper"
figma_node: "282:1005"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Section Nav Item

One step of the stepper on long forms. Shows the section status (Step Icon), its name and how many required fields are filled (Counter, like 2/4). Current is the section in view; clicking an item jumps to that section.

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
| Empty | Hover | `bg/interactive/hover` | `border/default` | `text/secondary` |  |
| Current | Default | `bg/surface` | `border/selected` | `text/primary` |  |
| Current | Hover | `bg/interactive/hover` | `border/selected` | `text/primary` |  |
| Complete | Default | `bg/surface` | `border/default` | `text/secondary` |  |
| Complete | Hover | `bg/interactive/hover` | `border/default` | `text/secondary` |  |
| Error | Default | `bg/surface` | `border/default` | `text/secondary` |  |
| Error | Hover | `bg/interactive/hover` | `border/default` | `text/secondary` |  |

## Parts

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Step | Step Icon (same Status) | 16 × 16 | none | yes |
| Label | Text, fills the width | fill × 20 | `text-sm/medium` | yes |
| Counter | Text | hug × 16 | `text-xs/regular` `text/tertiary` | Show Counter |

## Used in

Not nested in other components.
