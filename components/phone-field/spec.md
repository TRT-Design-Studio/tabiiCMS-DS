---
component: Phone Field
figma_page: "↪︎ Phone Field"
figma_node: "1256:1149"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Phone Field

Phone number field with a country-code picker (flag + dialing code) in the Leading slot of a nested Input. The picker opens a list of countries; the number is formatted for the chosen country.

## Variants

| Axis | Values | Default |
|---|---|---|
| Size | Medium (36), Small (32) | Medium |

Medium stays first in the set so new instances come in as Medium.

## Properties

No own properties besides Size. Nested, exposed:

| Part | Exposed |
|---|---|
| Input | Value, State |
| Country Code (Button Ghost XSmall) | Label (e.g. +90); flag is a nested Flag/<code> instance |

## Sizes

| Size | Height | Radius | Value padding R | Leading box |
|---|---|---|---|---|
| Medium | 36 | `rounded-lg` (8) | `Spacing/3` (12) | `Spacing/1` (4) H, `bg/subtle`, right `border/default` 1 px |
| Small | 32 | `rounded-md` (6) | `Spacing/2․5` (10) | same |

Country code button 28 px in both sizes; flag 14 px round, caret 14 px. The nested Input fills the Phone Field width.

## States

Set on the nested Input: Default, Focused, Filled, Error, Disabled. Colors come from Input.

## Used in

Not nested in other components. Screens use it directly.
