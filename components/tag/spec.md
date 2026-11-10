---
component: Tag
figma_page: "🏷️ Badges, Status & Tag"
figma_node: "725:10775"
version: 1.0.0
status: stable
updated: 2026-11-10
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
