---
component: Avatar
figma_page: "👤 Avatar"
figma_node: "281:952"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Avatar

A person shown with their initials. Color is not picked per screen: code chooses it from the palette by hashing the user ID (`hash(id) % 4` → Blue, Purple, Teal, Pink), so a person always gets the same colour. Neutral is for system and unknown users.

## Variants

| Axis | Values | Default |
|---|---|---|
| Size | Small, Medium, Large | Small |
| Color | Neutral, Blue, Purple, Teal, Pink | Neutral |

## Properties

| Property | Type | Default |
|---|---|---|
| Size | Variant | Small |
| Color | Variant | Neutral |
| Initials | Text | AC |

## Sizes

| Size | Size | Radius | Text |
|---|---|---|---|
| Small | `Spacing/7` (28) | `rounded-md` | `text-xs/medium` |
| Medium | `Spacing/8` (32) | `rounded-lg` | `text-sm/medium` |
| Large | `Spacing/10` (40) | `rounded-lg` | `text-base/medium` |

## States

No states.

| Color | Fill | Border | Initials |
|---|---|---|---|
| Neutral | `bg/subtle` | `border/default` 1 px | `text/primary` |
| Blue | `avatar/blue/bg` | — | `avatar/blue/text` |
| Purple | `avatar/purple/bg` | — | `avatar/purple/text` |
| Teal | `avatar/teal/bg` | — | `avatar/teal/text` |
| Pink | `avatar/pink/bg` | — | `avatar/pink/text` |

## Used in

| Component | Where |
|---|---|
| [User Card](../user-card/spec.md) | Medium avatar before the name |
| [List Item](../list-item/spec.md) | Small avatar in activity and note rows |
| Top Bar | The current user |

Playground uses: people picker rows (Menu Item with checkbox and avatar), user menu trigger.
