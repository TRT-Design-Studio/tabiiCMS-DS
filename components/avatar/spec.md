---
component: Avatar
figma_page: "👤 Avatar"
figma_node: "281:952"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Avatar

Size: Small (28) / Medium (32) / Large (40) · Color: Neutral / Blue / Purple / Teal / Pink · Text: Initials. Color is not picked per screen: code chooses it from the palette by hashing the user ID (hash(id) % 4 → Blue, Purple, Teal, Pink), so a person always gets the same colour. Neutral is outside the palette: unknown user or system. Colours come from avatar/* tokens (Light and Dark).

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Size | Small, Medium, Large | Small |
| Color | Neutral, Blue, Purple, Teal, Pink | Neutral |

## Properties

| Property | Type | Default |
|---|---|---|
| Initials | Text | AC |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Small | 28 | 0 | 0 | 0 | `rounded-md` (6) | `text-xs/medium` |
| Medium | 32 | 0 | 0 | 0 | `rounded-lg` (8) | `text-sm/medium` |
| Large | 40 | 0 | 0 | 0 | `rounded-lg` (8) | `text-base/medium` |

## States

| Color | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Neutral | `bg/subtle` | `border/default` | `text/primary` |  |
| Blue | `avatar/blue/bg` | none | `avatar/blue/text` |  |
| Purple | `avatar/purple/bg` | none | `avatar/purple/text` |  |
| Teal | `avatar/teal/bg` | none | `avatar/teal/text` |  |
| Pink | `avatar/pink/bg` | none | `avatar/pink/text` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Initials | Text | 17 × 16 | `text-xs/medium` `text/primary` | yes |

## Used in

List Item, Top Bar, User Card
