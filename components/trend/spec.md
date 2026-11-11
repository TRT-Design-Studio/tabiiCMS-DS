---
component: Trend
figma_page: "↪︎ Trend"
figma_node: "284:996"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Trend

Direction: Positive / Negative / Neutral — color follows meaning, not direction · Boolean: Show Context · Instance swap: Icon · Text: Value, Context

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| Direction | Positive, Negative, Neutral | Positive |

## Properties

| Property | Type | Default |
|---|---|---|
| Value | Text | 12 |
| Context | Text | vs last month |
| Show Context | Boolean | true |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 16 | 0 | 0 | `Spacing/1` (4) | 0 | `text-xs/medium` |

## States

| Direction | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Positive | `feedback/success/text` (Vector) | none | `feedback/success/text` |  |
| Negative | `feedback/danger/text` (Vector) | none | `feedback/danger/text` |  |
| Neutral | `text/secondary` (Vector) | none | `text/secondary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Icon | TrendUp | 14 × 14 | none | yes |
| Value | Text | 13 × 16 | `text-xs/medium` `feedback/success/text` | yes |
| Context | Text | 75 × 16 | `text-xs/regular` `text/tertiary` | yes |

## Used in

Stat Card
