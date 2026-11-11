---
component: Tag
figma_page: "🏷️ Badges, Status & Tag"
figma_node: "725:10775"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Tag

Content data the user added. Neutral only.

## Variants

| Axis | Values | Default |
|---|---|---|
| Type | Static, Removable, Link | Static |
| Size | Small (20), Medium (28) | Small |
| State | Default, Hover, Disabled; Read-only (Static only) | Default |

## Properties

Label (Text) · Leading Icon (Boolean) · Leading Icon Swap (Instance swap).

## Sizes

| Size | Height | Padding H | Padding V | Gap | Text | Icon |
|---|---|---|---|---|---|---|
| Small | 20 | `Spacing/2` | `Spacing/0․5` | `Spacing/1` | `text-xs/medium` | 12 |
| Medium | 28 | `Spacing/2․5` | `Spacing/1` | `Spacing/1․5` | `text-sm/medium` | 14 |

Link has no horizontal padding. The remove icon (X) is `text/secondary`, `text/disabled` when disabled.

## Colors

| Type · State | Background | Border | Label |
|---|---|---|---|
| Static · Default | `bg/subtle` | none | `text/primary` |
| Static · Read-only | `bg/surface` | `border/default` | `text/primary` |
| Removable · Default | `bg/subtle` | none | `text/primary` |
| Removable · Hover | `bg/interactive/pressed` | none | `text/primary` |
| Removable · Disabled | `bg/surface` | none | `text/disabled` |
| Link · Default | none | none | `text/primary` (underline on hover) |
| Link · Disabled | none | none | `text/disabled` |

Radius `rounded-md`. Used in Tag Input.
