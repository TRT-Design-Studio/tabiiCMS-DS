---
component: Tabs
figma_page: "↪︎ Tabs"
figma_node: "282:893"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Tabs

Switches between views of the same page. Segmented: main sections of a screen. Underline: panels and smaller areas. Items holds up to 5 tabs; use Slot for more. Only one tab is Selected.

## Variants

| Axis | Values | Default |
|---|---|---|
| Type | Segmented, Underline | Segmented |
| Content | Items, Slot | Items |

## Properties

| Property | Type | Default |
|---|---|---|
| Type | Variant | Segmented |
| Content | Variant | Items |
| Show Tab 3, Show Tab 4, Show Tab 5 | Boolean | true |
| Tabs Slot | Slot | 5 Tab instances (Content = Slot) |

Nested tabs (Tab 1–5) are exposed in Items.

## Sizes

| Type | Height | Padding | Gap | Radius |
|---|---|---|---|---|
| Segmented | 40 | `Spacing/1` (4) | `Spacing/1` (4) | `rounded-xl` |
| Underline | 40 | `Spacing/0` top/bottom, `Spacing/1` (4) sides | `Spacing/6` (24) | — |

Width hugs the tabs.

## States

Tabs has no state axis. Tab states live in [Tab Segment](../tab-segment/spec.md) and [Tab Underline](../tab-underline/spec.md).

| Type | Fill | Border |
|---|---|---|
| Segmented | `bg/subtle` | `border/subtle` 1 px |
| Underline | — | `border/subtle` 1 px bottom |

## Slots

| Slot | Default content |
|---|---|
| Tabs Slot | Tab Segment (Segmented) or Tab Underline (Underline) instances |

## Used in

Not used inside other components. Playground uses: Create Show sections (Segmented, Items, locked tabs), six sections (Segmented, Slot), side panel (Underline, Items, 2 tabs).
