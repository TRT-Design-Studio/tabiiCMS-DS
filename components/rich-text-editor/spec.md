---
component: Rich Text Editor
figma_page: "↪︎ Rich Text Editor - bakılacak"
figma_node: "742:11550"
version: 1.0.0
status: draft
updated: 2026-11-11
---

# Rich Text Editor

Long Description editor. Border follows Textarea states. Toolbar is exposed; Content is a slot for the formatted text. Status bar shows block type and word/character count: warning color near the limit, Error border and red count over the limit (text is not cut, saving is blocked). Read-only hides the toolbar.

> Auto-generated from Figma on 2026-11-11. Not yet documented with `dokuman: <sayfa>`; values are read from the default variant of each row.

## Variants

| Axis | Values | Default (Figma) |
|---|---|---|
| State | Empty, Focused, Limit Warning, Limit Exceeded, Read-only | Empty |

## Properties

| Property | Type | Default |
|---|---|---|
| Content | Slot | empty |

## Sizes

| Size | Height | Padding H | Padding V | Gap | Radius | Text |
|---|---|---|---|---|---|---|
| Default | 200 | 0 | 0 | 0 | `rounded-lg` (8) | `text-sm/regular` |

## States

| State | Background | Border | Text | Opacity |
|---|---|---|---|---|
| Empty | `bg/surface` | `border/default` | `text/primary` |  |
| Focused | `bg/surface` | `border/selected` | `text/primary` |  |
| Limit Warning | `bg/surface` | `border/default` | `text/primary` |  |
| Limit Exceeded | `bg/surface` | `border/danger` | `text/primary` |  |
| Read-only | `bg/base` | `border/default` | `text/primary` |  |

## Parts

From the default variant. Hidden parts are turned on by a property.

| Part | Kind | Size | Fill | Shown |
|---|---|---|---|---|
| Toolbar | Rich Text Editor/Toolbar | 640 × 41 | none | yes |
| Content | Slot | 640 × 126 | none | yes |
| Status Bar | Frame | 640 × 33 | `bg/subtle` | yes |

## Used in

Not nested in other components.
