---
component: Page Header
figma_page: "📄 Page Header"
figma_node: "287:1386"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Page Header

Opens every page: optional eyebrow, page title, short description and page actions. Desktop puts the actions on the right; Mobile stacks them under the text. Turn Eyebrow, Description and Actions on or off from the panel. Put buttons in the Actions slot, primary action last.

## Variants

| Axis | Values | Default |
|---|---|---|
| Size | Desktop, Mobile | Desktop |

## Properties

| Property | Type | Default |
|---|---|---|
| Size | Variant | Desktop |
| Show Eyebrow | Boolean | false |
| Eyebrow | Text | Eyebrow Content |
| Show Title | Boolean | true |
| Title | Text | Page title |
| Show Description | Boolean | true |
| Description | Text | Meta information |
| Show Actions | Boolean | true |
| Actions | Slot | — |

## Sizes

| Size | Layout | Gap | Title |
|---|---|---|---|
| Desktop (1024 by default) | Text left, Actions right | `Spacing/6` (24) text to actions; `Spacing/1` (4) inside the text | `text-3xl/bold` |
| Mobile (352 by default) | Text, then Actions | `Spacing/4` (16) text to actions; `Spacing/1` (4) inside the text | `text-2xl/bold` |
| Actions | Row | `Spacing/2` (8) | — |

## States

No states.

| Part | Text | Style |
|---|---|---|
| Eyebrow | `text/secondary` | `text-sm/regular` |
| Title | `text/primary` | `text-3xl/bold` (Desktop), `text-2xl/bold` (Mobile) |
| Description | `text/tertiary` | `text-sm/regular` |

## Slots

| Slot | Default content |
|---|---|
| Actions | Empty. Page buttons; primary action last. |

## Used in

Not used inside other components. Every Playground screen starts with one (Shows, Overview, Create Show; web, tablet, mobile).
