---
component: Progress Bar
figma_page: "↪︎ Progress Bar"
figma_node: "281:973"
version: 1.0.0
status: stable
updated: 2026-11-17
---

# Progress Bar

How much of a task is done: a 6 px track with a fill. Value has five steps; the bar can take any width. Write the numbers next to it in text; the bar has no label of its own.

## Variants

| Axis | Values | Default |
|---|---|---|
| Value | 0, 25, 50, 75, 100 | 0 |

## Properties

| Property | Type | Default |
|---|---|---|
| Value | Variant | 0 |

## Sizes

| Part | Width | Height | Radius |
|---|---|---|---|
| Track | `Spacing/64` (256) | `Spacing/1․5` (6) | `rounded-full` |
| Fill · 25 | 25% of track | `Spacing/1․5` (6) | `rounded-full` |
| Fill · 50 | 50% of track | `Spacing/1․5` (6) | `rounded-full` |
| Fill · 75 | 75% of track | `Spacing/1․5` (6) | `rounded-full` |
| Fill · 100 | 100% of track | `Spacing/1․5` (6) | `rounded-full` |

The fill scales with the bar (absolute, Scale constraint): resize the bar and the fill keeps its percentage.

## States

No states.

| Part | Fill |
|---|---|
| Track | `bg/subtle` |
| Fill | `bg/inverse` |

## Used in

| Component | Where |
|---|---|
| Upload | Value 50 under the file name while a file uploads |

Playground uses: Overall Progress at the bottom of the Create Show section navigation (Value 75, 222 px wide).
