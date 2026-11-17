---
component: Trend
figma_page: "↪︎ Trend"
figma_node: "284:996"
version: 1.0.0
status: stable
updated: 2026-11-17
---

# Trend

How a number changed since the last period: an icon, the change and an optional context. Direction follows meaning, not the arrow: a rise in missing items is Negative.

## Variants

| Axis | Values | Default |
|---|---|---|
| Direction | Positive, Negative, Neutral | Positive |

## Properties

| Property | Type | Default |
|---|---|---|
| Direction | Variant | Positive |
| Value | Text | 12 |
| Context | Text | vs last month |
| Show Context | Boolean | true |

## Sizes

| Part | Size | Gap | Text |
|---|---|---|---|
| Container | 16 high, hugs content | `Spacing/1` (4) | — |
| Icon | `Spacing/3․5` (14) | — | — |
| Value | hug | — | `text-xs/medium` |
| Context | hug | — | `text-xs/regular` |

## States

No states.

| Direction | Icon | Icon · Value | Context |
|---|---|---|---|
| Positive | TrendUp | `feedback/success/text` | `text/tertiary` |
| Negative | TrendDown | `feedback/danger/text` | `text/tertiary` |
| Neutral | Minus | `text/secondary` | `text/tertiary` |

## Used in

| Component | Where |
|---|---|
| [Stat Card](../stat-card/spec.md) | Under the number, with Context "vs last month" |
