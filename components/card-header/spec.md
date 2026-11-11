---
component: Card Header
figma_page: "🗂️ Cards"
figma_node: "284:1092"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Card Header

Title bar of Card. Title with an optional subtitle. Trailing: None, Badge (a Status), Action (Secondary XSmall button), Slot - H (free content on the right) or Slot - V (free content under the title).

## Variants

| Axis | Values | Default |
|---|---|---|
| Trailing | None, Badge, Action, Slot - H, Slot - V | None |

## Properties

| Property | Type | Default |
|---|---|---|
| Trailing | Variant | None |
| Title | Text | Card title |
| Show Subtitle | Boolean | true |
| Subtitle | Text | Supporting text |
| Trailing Slot | Slot | — (Slot - H, Slot - V) |

## Sizes

| Part | Size | Padding | Gap | Text |
|---|---|---|---|---|
| Container | 78 high with subtitle | `Spacing/4` (16) top/bottom, `Spacing/5` (20) sides | `Spacing/4` (16) | — |
| Title / Subtitle | — | — | `Spacing/0․5` (2) | `text-lg/semibold` / `text-xs/regular` |
| Trailing Slot | — | — | `Spacing/2` (8) | — |

## States

No states.

| Part | Fill | Border | Text |
|---|---|---|---|
| Container | `bg/base` | `border/default` bottom | — |
| Title | — | — | `text/primary` |
| Subtitle | — | — | `text/tertiary` |

Trailing: Badge = Status (Success, Small); Action = Button (Secondary, XSmall).

## Used in

| Component | Where |
|---|---|
| [Card](../card/spec.md) | Header (exposed) |
