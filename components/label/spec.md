---
component: Label
figma_page: "↪︎ Labels & Helper"
figma_node: "280:1259"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Label

Names a form field and sits above it. Emphasis: Default for form fields, Subtle for groups in panels. State follows the field; Disabled is 50% opacity. Optional parts: Required (red asterisk), Help (question icon that opens a Tooltip), Meta (Optional or a counter at the end of the row) and Description (a second line). In forms, use Form Field instead of placing Label by hand.

## Variants

| Axis | Values | Default |
|---|---|---|
| Emphasis | Default, Subtle | Default |
| State | Default, Disabled | Default |

## Properties

| Property | Type | Default |
|---|---|---|
| Label | Text | Label |
| Required | Boolean | false |
| Help | Boolean | false |
| Show Meta / Meta Text | Boolean / Text | false / Optional |
| Show Description / Description | Boolean / Text | false / Description |

## Sizes

| Height | Row gap | Line gap | Text | Icon |
|---|---|---|---|---|
| 20 (one line) · 38 with Description | `Spacing/1` (4) | `Spacing/0․5` (2) | `text-sm/medium` (label), `text-xs/regular` (meta, description) | Help 14 (`Spacing/3․5`) |

Width hugs the content. Meta is pushed to the end of the row.

## States

| State | Label | Other parts |
|---|---|---|
| Default · Default | `text/primary` | Required `feedback/danger/text`; Help, Meta, Description `text/tertiary` |
| Subtle · Default | `text/tertiary` | same |
| Default · Disabled | `text/primary` | whole label `Opacity/opacity-50` |
| Subtle · Disabled | `text/disabled` | whole label `Opacity/opacity-50` |

## Used in

Form Field (above the control).
