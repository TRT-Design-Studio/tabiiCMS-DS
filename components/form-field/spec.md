---
component: Form Field
figma_page: "↪︎ Form Field"
figma_node: "284:923"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Form Field

Label, control and message stacked into one form field. State is set once on Form Field and passed to all three nested parts.

## Variants

| Axis | Values | Default |
|---|---|---|
| Control | Input, Select, Textarea | Input |
| State | Default, Error, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Show Label | Boolean | true |
| Show Message | Boolean | false |

Nested, exposed: **Label** (Label, Required, Help, Show Meta / Meta Text, Show Description / Description), **Control** (all properties of the chosen control), **Message** (Tone, Text, Show Text, Leading Icon, Trailing Icon, Show Counter / Counter Text).

## Sizes

| Control | Height | With message | Gap |
|---|---|---|---|
| Input | 64 | 88 | `Spacing/2` (8) |
| Select | 64 | 88 | `Spacing/2` (8) |
| Textarea | 108 | 132 | `Spacing/2` (8) |

Width 320 by default; fills the form column. Label 20, message 16, control 36 (Textarea 80).

## States

| State | Label | Control | Message |
|---|---|---|---|
| Default | State=Default | State=Default | Tone=Helper |
| Error | State=Default | State=Error | Tone=Error |
| Disabled | State=Disabled (50%) | State=Disabled | Tone=Helper |

Warning, Info and Success are message tones: set Tone on the nested Message.

## Used in

Not nested in other components. Screens use it directly.
