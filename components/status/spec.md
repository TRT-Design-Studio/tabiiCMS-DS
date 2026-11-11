---
component: Status
figma_page: "🏷️ Badges, Status & Tag"
figma_node: "725:10549"
version: 1.0.0
status: stable
updated: 2026-11-11
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

| Size | Height | Padding H | Padding V | Gap | Text | Icon |
|---|---|---|---|---|---|---|
| Small | 20 | `Spacing/2` | `Spacing/0․5` | `Spacing/1` | `text-xs/medium` | 12 |
| Medium | 28 | `Spacing/2․5` | `Spacing/1` | `Spacing/1․5` | `text-sm/medium` | 14 |

Radius `rounded-full`, 1 px inside border outside the layout. The dot is Badge Dot Small of the same tone. The icon and the chevron take the label color.

## Tones

| Tone | Background | Border | Label | Dot |
|---|---|---|---|---|
| Neutral | `feedback/neutral/bg` | `feedback/neutral/border` | `feedback/neutral/text` | Neutral |
| Info | `feedback/info/bg` | `feedback/info/border` | `feedback/info/text` | Info |
| Success | `feedback/success/bg` | `feedback/success/border` | `feedback/success/text` | Success |
| Warning | `feedback/warning/bg` | `feedback/warning/border` | `feedback/warning/text` | Warning |
| Danger | `feedback/danger/bg` | `feedback/danger/border` | `feedback/danger/text` | Danger |

| State | Overlay | Note |
|---|---|---|
| Hover | `bg/interactive/hover` | Interactive=True only, on top of the tone background |

## Used in

Card Header, List Item.
