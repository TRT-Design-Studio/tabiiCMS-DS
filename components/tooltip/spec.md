---
component: Tooltip
figma_page: "💬 Tooltip"
figma_node: "867:17726"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Tooltip

Short label shown on hover or keyboard focus after about 500 ms. Used for icon-only buttons (with shortcut), copy confirmations, truncated text and disabled-reason hints. The arrow points to the trigger; prefer Top. No interactive content inside.

## Variants

| Axis | Values | Default |
|---|---|---|
| Placement | Top, Bottom, Left, Right | Top |

## Properties

| Property | Type | Default |
|---|---|---|
| Text | Text | Bold |
| Show Shortcut | Boolean | true |
| Shortcut | Text | ⌘B |

## Sizes

| Part | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Container | hug | 0 | 0 | `Spacing/0` (0) | — | — |
| Bubble | 24 (one line) | `Spacing/2` (8) | `Spacing/1` (4) | `Spacing/1․5` (6) | `rounded-md` (6) | `text-xs/medium` (label), `text-xs/regular` (shortcut) |
| Arrow | 3.75 (8.66 × 3.75) | — | — | — | — | — |

Width hugs the text. The Container is an auto layout: vertical for Top and Bottom, horizontal for Left and Right. The bubble and the arrow sit next to each other with no gap and no overlap; the arrow is on the trigger side (under the bubble for Top, above for Bottom, right of it for Left, left of it for Right).

## States

Tooltip has no state axis. It is hidden by default, shown when the pointer rests on the trigger for about 500 ms or when the trigger gets keyboard focus.

| Part | Fill | Text | Effect |
|---|---|---|---|
| Bubble | `bg/inverse-overlay` | `text/inverse` | Background blur 2 px (not bound to a variable) |
| Shortcut | — | `text/inverse`, opacity 60% (not bound to a variable) | — |
| Arrow | `bg/inverse-overlay` | — | — |

## Used in

Not used inside other components. Playground uses: icon-only toolbar buttons (Top, with shortcut), the copy button of a read-only Input (Bottom, "Copy" / "Copied"), disabled-reason hint (Right, "Locked by RBAC").
