---
component: Number Stepper
figma_page: "↪︎ Number Stepper"
figma_node: "738:12074"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Number Stepper

Number with minus and plus buttons for small stepped values (season count, order). One component, no variants, 122 × 36.

## Variants

None.

## Properties

No own properties. Nested, exposed:

| Part | Component | Exposed |
|---|---|---|
| Decrease | Icon Button, Secondary, Square, Medium, Minus | State |
| Value | Input, Medium, Filled, 42 px, centred text | Value, State, Trailing Content / Trailing |
| Increase | Icon Button, Secondary, Square, Medium, Plus | State |

## Sizes

| Part | Size | Padding / gap | Radius | Fill / border |
|---|---|---|---|---|
| Container | 122 × 36 | gap `Spacing/1` (4) | — | none |
| Buttons | 36 × 36 | `Spacing/2` (8) | `rounded-lg` | `action/secondary/default`, `border/default` |
| Value | 42 × 36 | `Spacing/3` (12) H | `rounded-lg` | `bg/surface`, `border/default` |

## States

| State | Decrease | Value | Increase |
|---|---|---|---|
| Default | Default | Filled | Default |
| At minimum | Disabled | Filled | Default |
| At maximum | Default | Filled | Disabled |
| Error | Default | Error | Default |
| Disabled | Disabled | Disabled | Disabled |

## Slots

- **Value → Trailing:** a unit.

## Used in

Not nested in other components. Screens use it directly.
