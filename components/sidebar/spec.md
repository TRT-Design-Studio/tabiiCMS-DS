---
component: Sidebar
figma_page: "↪︎ Sidebar"
figma_node: "287:1369"
version: 1.0.0
status: stable
updated: 2026-11-10
---

# Sidebar

Main navigation of the CMS. Expanded on desktop; Rail (icons only) on tablet and in the Create Show editor.

## Variants

| Axis | Values | Default |
|---|---|---|
| Type | Expanded (248), Rail (68) | Expanded |

## Properties

Type only. The selected item, labels and icons are set on the nested Nav Item instances.

## Sizes

| Part | Size | Padding | Gap |
|---|---|---|---|
| Header | 56 | `Spacing/3․5` V, `Spacing/7` H (Rail: no H) | — |
| Navigation | Fill | `Spacing/4` | `Spacing/3` (Rail: `Spacing/0․5`) |
| Group | Hug | — | `Spacing/0․5` |
| Group heading | 28 | `Spacing/1․5` V, `Spacing/2․5` H, `text-xs/medium` `text/tertiary` | — |
| Footer | 84 | `Spacing/4` (Rail: `Spacing/4․5` V, `Spacing/2․5` H) | — |

Background `bg/base`, 1 px right border `border/default`. Header has a bottom border, Footer a top border, both `border/default`.

## States

| Type | Content |
|---|---|
| Expanded | Logo Full, Nav Item Item and SubItem with labels, group headings, User Card Full |
| Rail | Logo Mark, Nav Item Rail, no group headings, User Card Compact |

## Slots

None.

## Used in

No other component. Used on every Playground screen: Expanded on 1440 screens, Rail on 768 screens and on the 1440 Create Show screen.

## Interaction

A working Sidebar code layer ("Sidebar Interaction") is embedded in the Interaction frame of the doc.
