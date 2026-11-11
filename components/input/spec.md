---
component: Input
figma_page: "↪︎ Input"
figma_node: "281:730"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Input

Single-line text field. Height is fixed per size, so slot content never changes it.

## Variants

| Axis | Values | Default |
|---|---|---|
| Size | Small (32), Medium (36), Large (40) | Medium |
| State | Default, Focused, Filled, Error, Success, Disabled, Read-only | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Value | Text | Placeholder text |
| Show Value | Boolean | true |
| Leading Icon / Leading Icon Swap | Boolean / Instance swap | false / MagnifyingGlass |
| Trailing Icon / Trailing Icon Swap | Boolean / Instance swap | false / X |
| Counter / Counter Text | Boolean / Text | false / 0/80 |
| Leading Content / Leading | Boolean / Slot | false / empty |
| Custom Content / Content | Boolean / Slot | false / empty |
| Trailing Content / Trailing | Boolean / Slot | false / empty |

## Sizes

| Size | Height | Padding H | Gap | Radius | Text | Inner button |
|---|---|---|---|---|---|---|
| Small | 32 | `Spacing/2․5` (10) | `Spacing/2` (8) | `rounded-md` (6) | `text-sm/regular` | none |
| Medium | 36 | `Spacing/3` (12) | `Spacing/2` (8) | `rounded-lg` (8) | `text-sm/regular` | Button XSmall (28) |
| Large | 40 | `Spacing/3` (12) | `Spacing/2` (8) | `rounded-lg` (8) | `text-sm/regular` | Button Small (32) |

Border: 1 px inside, outside the layout.

## Parts

Empty: the placeholder is showing (State Default). Filled: any other state.

| Part | Icon | Size | Empty | Filled |
|---|---|---|---|---|
| Leading Icon | MagnifyingGlass (swap) | 16 | `text/tertiary` | `text/secondary` |
| Trailing Icon | X (swap) | 16 | `text/tertiary` | `text/secondary` |
| Status Icon (Success only) | CheckCircle | 16 | `feedback/success/text` | `feedback/success/text` |
| Counter | — | `text-xs/regular` | `text/tertiary` | `text/tertiary` |

In Figma only the Default and Filled variants carry icon colors; the other states use the Filled colors. Trailing Icon has no color in the Default variant, so it follows Leading Icon.

## States

| State | Background | Border | Value text |
|---|---|---|---|
| Default | `bg/surface` | `border/default` | `text/tertiary` (placeholder) |
| Focused | `bg/surface` | `border/selected` | `text/primary` |
| Filled | `bg/surface` | `border/default` | `text/primary` |
| Error | `bg/surface` | `border/danger` | `text/primary` |
| Success | `bg/surface` | `border/success` | `text/primary` |
| Disabled | `bg/disabled` | `border/default` | `text/primary`, 50% opacity |
| Read-only | `bg/base` | `border/default` | `text/primary` |

## Slots

- **Leading:** prefix text, country code, file button.
- **Content:** replaces the value (chips, two-tone date, time, file name). Turn off Show Value.
- **Trailing:** clear button, unit, inner button.

## Used in

Form Field, Phone Field, Number Stepper, Pagination (Go to), Calendar (time), Filter Group (search), Card Header (search).
