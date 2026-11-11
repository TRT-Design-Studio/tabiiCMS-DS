---
component: Menu
figma_page: "📋 Menu"
figma_node: "721:10568"
version: 1.0.0
status: stable
updated: 2026-11-11
---

# Menu

Floating list for dropdowns, Select, autocomplete and filters. Rows go in the Items slot. Opens 4 px below its trigger.

## Variants

| Axis | Values | Default |
|---|---|---|
| State | Default, Loading, No Results, Error, Hint | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Items | Slot | 4 Menu Item |
| Title | Text (No Results) | No results for "xyzq" |
| Description | Text (No Results) | Check the spelling or search by Content ID. |

## Sizes

| Part | Value |
|---|---|
| Width | 240 px by default; set it to the trigger or the content |
| Padding | `Spacing/1` (4) |
| Radius | `rounded-lg` (8) |
| Border | 1 px inside, `border/default` |
| Background | `bg/raised` |
| Effect | `Shadow/shadow-lg` |
| List state content | Padding `Spacing/3` (Error: `Spacing/4` top and bottom), gap `Spacing/1` or `Spacing/2` |

## States

| State | Shows |
|---|---|
| Default | The Items slot |
| Loading | Three skeleton lines, `bg/interactive/pressed`, `rounded-sm` |
| No Results | Title `text-sm/medium` `text/primary`, Description `text-xs/regular` `text/tertiary` |
| Error | WarningCircle 20 px, title, description, Button Secondary Small "Try again" |
| Hint | One line `text-sm/regular` `text/tertiary` |

| State | Padding V | Padding H | Gap | Align | Icon |
|---|---|---|---|---|---|
| Loading | `Spacing/3` | `Spacing/3` | `Spacing/2` | start | none |
| No Results | `Spacing/3` | `Spacing/3` | `Spacing/1` | start | none |
| Error | `Spacing/4` | `Spacing/3` | `Spacing/2` | center | WarningCircle 20, `feedback/danger/text` |
| Hint | `Spacing/3` | `Spacing/3` | `Spacing/1` | start | none |

Loading skeleton lines: 12 px tall, 208 / 166 / 125 px wide.

## Slots

- **Items:** Menu Item, Menu Group Label, Menu Separator. Destructive rows go last, after a separator.

## Used in

No other component. Used on screens for Select, autocomplete, Tag Input suggestions, Phone country code, Datepicker month and year, Breadcrumb, Rich Text Editor, row actions and the user menu.
