---
component: Card
figma_page: "🗂️ Cards"
figma_node: "284:1121"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Card

Groups related content on a surface. Card Header on top (exposed), Body slot, optional Footer slot. Default is white on the page; Subtle is one step darker, for cards inside a white area. Cards take the width of their grid column.

## Variants

| Axis | Values | Default |
|---|---|---|
| Style | Default, Subtle | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Style | Variant | Default |
| Header | Boolean | true |
| Footer | Boolean | false |
| Body | Slot | Placeholder "Body slot — place content here" |
| Footer Slot | Slot | — |

## Sizes

| Part | Padding | Gap | Radius |
|---|---|---|---|
| Container (560 wide by default) | — | — | `rounded-xl` |
| Header | see [Card Header](../card-header/spec.md) | | |
| Body | `Spacing/5` (20) | `Spacing/4` (16) | — |
| Footer | `Spacing/3` (12) top/bottom, `Spacing/5` (20) sides | `Spacing/2` (8) | — |

Cards take the width of their grid column.

## States

No states.

| Style · Part | Fill | Border |
|---|---|---|
| Default | `bg/surface` | `border/default` 1 px |
| Subtle | `bg/base` | `border/default` 1 px |
| Footer | — | `border/default` top |

## Slots

| Slot | Default content |
|---|---|
| Body | Placeholder text |
| Footer Slot | Empty, hidden |

## Used in

Not used inside other components. Playground uses: Overview dashboard cards (Publish Calendar, Pending Content, SEO, Notes, Recent Activity) and Create Show sections.
