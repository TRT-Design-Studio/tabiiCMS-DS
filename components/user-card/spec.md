---
component: User Card
figma_page: "🗂️ Cards"
figma_node: "287:1036"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# User Card

The signed-in person; opens the user menu. Full shows avatar, name, email and a caret (expanded sidebar). Compact shows only the avatar (Rail sidebar, top bar). Hover fills bg/interactive/hover.

## Variants

| Axis | Values | Default |
|---|---|---|
| Layout | Full, Compact | Full |
| State | Default, Hover | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Layout | Variant | Full |
| State | Variant | Default |
| Name | Text | A person name |
| Email | Text | An email address |

## Sizes

| Layout | Size | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Full | 224 × 52 | `Spacing/2` (8) | `Spacing/2․5` (10) | `rounded-lg` | `text-sm/medium` (name), `text-xs/regular` (email) |
| Compact | 48 × 48 | `Spacing/2` (8) | — | `rounded-lg` | — |

Avatar: Medium. Chevron: CaretDown, `Spacing/4` (16).

## States

| State | Fill | Name | Email |
|---|---|---|---|
| Default | — | `text/primary` | `text/tertiary` |
| Hover | `bg/interactive/hover` | `text/primary` | `text/tertiary` |

## Used in

| Component | Where |
|---|---|
| [Sidebar](../sidebar/spec.md) | Footer: Full when expanded, Compact in Rail |

Playground uses: user menu trigger (Compact).
