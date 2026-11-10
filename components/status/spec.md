---
component: Status
figma_page: "🏷️ Badges & Status"
figma_node: "725:10549"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Status

Where an object is in its lifecycle. Tone comes from the status → tone table.

## Variants

| Axis | Values | Default |
|---|---|---|
| Tone | Neutral, Info, Success, Warning, Danger | Neutral |
| Size | Small (20), Medium (28) | Small |
| Interactive | False, True (chevron, opens a menu) | False |
| State | Default, Hover (Interactive only) | Default |

## Properties

Label (Text) · Show dot (Boolean) · Show icon (Boolean) · Leading (Instance swap, source mark).

## Sizes

| Size | Height | Padding H | Padding V | Gap | Text |
|---|---|---|---|---|---|
| Small | 20 | `Spacing/2` | `Spacing/0․5` | `Spacing/1` | `text-xs/medium` |
| Medium | 28 | `Spacing/2․5` | `Spacing/1` | `Spacing/1․5` | `text-sm/medium` |

Radius `rounded-full`, 1 px inside border outside the layout.

## Tones

Background `feedback/<tone>/bg`, border `feedback/<tone>/border`, label `feedback/<tone>/text`, dot Badge Dot of the same tone. Hover adds `bg/interactive/hover`.

## Used in

Card Header, List Item.
