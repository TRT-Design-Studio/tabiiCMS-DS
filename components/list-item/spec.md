---
component: List Item
figma_page: "↪︎ List Item"
figma_node: "284:1205"
version: 1.0.0
status: stable
updated: 2026-11-17
---

# List Item

One row in a short list inside a card: an issue to fix, a recent activity or a note. Type sets what leads the row. Hover underlines the title.

## Variants

| Axis | Values | Default |
|---|---|---|
| Type | Issue, Activity, Note, Slot | Issue |
| State | Default, Hover | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Type | Variant | Issue |
| State | Variant | Default |
| Title | Text | List item title |
| Description | Text | Supporting text |
| Show Description | Boolean | true |
| Icon | Instance swap | TrendUp |
| Leading Slot | Slot | empty |
| Trailing Slot | Slot | empty |

## Sizes

| Part | Height | Padding | Gap | Radius | Text |
|---|---|---|---|---|---|
| Issue | 68 | `Spacing/3` (12) top/bottom, `Spacing/2` (8) sides | `Spacing/3` (12) | `rounded-lg` | `text-sm/medium` + `text-sm/regular` |
| Activity | 62 | same | `Spacing/3` (12) | `rounded-lg` | `text-sm/medium` + `text-xs/regular` |
| Note | 74 | same | `Spacing/2․5` (10), vertical | `rounded-lg` | `text-sm/regular` + `text-xs/regular` |
| Slot | hugs the slot | same | `Spacing/3` (12) | `rounded-lg` | `text-sm/medium` + `text-sm/regular` |
| Icon Wrap | 44 | `Spacing/1․5` (6) | — | `rounded-full` | — |
| Inner circle | 32 | `Spacing/1․5` (6) | — | `rounded-full` | — |
| Icon | 18 | — | — | — | — |
| Title + description | hug | — | `Spacing/0․5` (2) | — | — |

The set is 320 px wide; on screens the item fills the card body (340).

## States

| State | Fill | Title |
|---|---|---|
| Default | — | `text/primary` |
| Hover | — | `text/primary`, underlined |

| Part | Fill | Border | Text |
|---|---|---|---|
| Icon Wrap | `bg/subtle` | `border/subtle` | — |
| Inner circle | `bg/surface` | `border/default` | — |
| Icon | `text/primary` | — | — |
| Description | — | — | `text/tertiary` |
| Note tag | [Status](../status/spec.md) Danger, Small | — | — |

## Slots

| Slot | Used for |
|---|---|
| Leading Slot | Type Slot: any component before the title |
| Trailing Slot | Issue, Activity, Slot: any component at the end of the row |

Nested: Activity has an [Avatar](../avatar/spec.md) (Medium); Note has a [Status](../status/spec.md) tag.

## Used in

Not nested in other components. On screens, List Items sit in the Body slot of a [Card](../card/spec.md).

Playground uses: SEO & Discoverability and Recent Activity (Issue), Notes & Handoff (Note) on Overview.
