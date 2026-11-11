---
component: Field Message
figma_page: "↪︎ Labels & Helper"
figma_node: "717:10483"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Field Message

The line under a form field. Helper is a neutral hint. Error replaces Helper when validation fails. Warning does not block saving. Info is a system note. Success is only for server-validated values. Optional counter on the right turns red in Error.

## Variants

| Axis | Values | Default |
|---|---|---|
| Tone | Helper, Error, Warning, Info, Success | Helper |

## Properties

| Property | Type | Default |
|---|---|---|
| Show Text / Text | Boolean / Text | true / Helper text |
| Leading Icon | Boolean | true |
| Trailing Icon / Trailing Icon Swap | Boolean / Instance swap | false / Question |
| Show Counter / Counter Text | Boolean / Text | false / 0/80 |

## Sizes

| Width | Height | Message–counter gap | Icon–text gap | Text | Icon |
|---|---|---|---|---|---|
| 320 (fixed) | 16 | `Spacing/2` (8) | `Spacing/1` (4) | `text-xs/regular` | 14 (`Spacing/3․5`) |

## States

| Tone | Text and icon | Counter | Leading icon |
|---|---|---|---|
| Helper | `text/tertiary` | `text/tertiary` | Info |
| Error | `feedback/danger/text` | `feedback/danger/text` | WarningCircle |
| Warning | `feedback/warning/text` | `text/tertiary` | Warning |
| Info | `feedback/info/text` | `text/tertiary` | Info |
| Success | `feedback/success/text` | `text/tertiary` | CheckCircle |

## Used in

Form Field (under the control).
