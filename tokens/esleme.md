# Token eşleme tablosu

> ⚙️ Bu dosya `node scripts/tokenlari-uret.mjs` ile Figma verisinden otomatik üretilir. Elle düzenleme.
>
> Figma'daki her değişkenin kodda neye karşılık geldiğini gösterir. Kural: [token-isimlendirme.md](../rules/core/token-isimlendirme.md)

## Semantic renkler

| Figma | Tailwind class | CSS değişkeni | Light Mode | Dark Mode |
|---|---|---|---|---|
| `bg/base` | `bg-base` | `--color-bg-base` | neutral/50 | neutral/950 |
| `bg/surface` | `bg-surface` | `--color-bg-surface` | white | neutral/900 |
| `bg/subtle` | `bg-subtle` | `--color-bg-subtle` | neutral/100 | neutral/800 |
| `bg/raised` | `bg-raised` | `--color-bg-raised` | white | neutral/800 |
| `bg/inverse` | `bg-inverse` | `--color-bg-inverse` | neutral/900 | neutral/50 |
| `bg/overlay` | `bg-overlay` | `--color-bg-overlay` | black %50 | black %70 |
| `bg/disabled` | `bg-disabled` | `--color-bg-disabled` | neutral/100 | neutral/800 |
| `bg/interactive/hover` | `bg-interactive-hover` | `--color-bg-interactive-hover` | neutral/100 | neutral/800 |
| `bg/interactive/pressed` | `bg-interactive-pressed` | `--color-bg-interactive-pressed` | neutral/200 | neutral/700 |
| `bg/interactive/selected` | `bg-interactive-selected` | `--color-bg-interactive-selected` | neutral/100 | neutral/800 |
| `text/primary` | `text-primary` | `--color-text-primary` | neutral/900 | neutral/50 |
| `text/secondary` | `text-secondary` | `--color-text-secondary` | neutral/700 | neutral/300 |
| `text/tertiary` | `text-tertiary` | `--color-text-tertiary` | neutral/600 | neutral/400 |
| `text/inverse` | `text-inverse` | `--color-text-inverse` | neutral/50 | neutral/900 |
| `text/on-color` | `text-on-color` | `--color-text-on-color` | white | white |
| `text/disabled` | `text-disabled` | `--color-text-disabled` | neutral/400 | neutral/500 |
| `border/subtle` | `border-subtle` | `--color-border-subtle` | neutral/100 | neutral/800 |
| `border/default` | `border-default` | `--color-border-default` | neutral/200 | neutral/700 |
| `border/strong` | `border-strong` | `--color-border-strong` | neutral/300 | neutral/600 |
| `border/selected` | `border-selected` | `--color-border-selected` | neutral/900 | neutral/50 |
| `border/focus` | `border-focus` | `--color-border-focus` | blue/500 | blue/400 |
| `border/disabled` | `border-disabled` | `--color-border-disabled` | neutral/100 | neutral/800 |
| `action/primary/default` | `bg-action-primary` | `--color-action-primary-default` | neutral/900 | neutral/50 |
| `action/primary/hover` | `bg-action-primary-hover` | `--color-action-primary-hover` | neutral/800 | neutral/200 |
| `action/primary/pressed` | `bg-action-primary-pressed` | `--color-action-primary-pressed` | neutral/700 | neutral/300 |
| `action/secondary/default` | `bg-action-secondary` | `--color-action-secondary-default` | white | neutral/900 |
| `action/secondary/hover` | `bg-action-secondary-hover` | `--color-action-secondary-hover` | neutral/100 | neutral/800 |
| `action/secondary/pressed` | `bg-action-secondary-pressed` | `--color-action-secondary-pressed` | neutral/200 | neutral/700 |
| `action/danger/default` | `bg-action-danger` | `--color-action-danger-default` | red/700 | red/700 |
| `action/danger/hover` | `bg-action-danger-hover` | `--color-action-danger-hover` | red/800 | red/800 |
| `action/danger/pressed` | `bg-action-danger-pressed` | `--color-action-danger-pressed` | red/900 | red/900 |
| `feedback/success/bg` | `bg-feedback-success` | `--color-feedback-success-bg` | green/50 | green/950 |
| `feedback/success/text` | `text-feedback-success` | `--color-feedback-success-text` | green/700 | green/300 |
| `feedback/success/border` | `border-feedback-success` | `--color-feedback-success-border` | green/200 | green/800 |
| `feedback/success/dot` | `bg-feedback-success-dot` | `--color-feedback-success-dot` | green/500 | green/400 |
| `feedback/warning/bg` | `bg-feedback-warning` | `--color-feedback-warning-bg` | yellow/50 | yellow/950 |
| `feedback/warning/text` | `text-feedback-warning` | `--color-feedback-warning-text` | yellow/800 | yellow/300 |
| `feedback/warning/border` | `border-feedback-warning` | `--color-feedback-warning-border` | yellow/200 | yellow/800 |
| `feedback/warning/dot` | `bg-feedback-warning-dot` | `--color-feedback-warning-dot` | yellow/500 | yellow/400 |
| `feedback/danger/bg` | `bg-feedback-danger` | `--color-feedback-danger-bg` | red/50 | red/950 |
| `feedback/danger/text` | `text-feedback-danger` | `--color-feedback-danger-text` | red/700 | red/300 |
| `feedback/danger/border` | `border-feedback-danger` | `--color-feedback-danger-border` | red/200 | red/800 |
| `feedback/danger/dot` | `bg-feedback-danger-dot` | `--color-feedback-danger-dot` | red/500 | red/400 |
| `feedback/info/bg` | `bg-feedback-info` | `--color-feedback-info-bg` | blue/50 | blue/950 |
| `feedback/info/text` | `text-feedback-info` | `--color-feedback-info-text` | blue/700 | blue/300 |
| `feedback/info/border` | `border-feedback-info` | `--color-feedback-info-border` | blue/200 | blue/800 |
| `feedback/info/dot` | `bg-feedback-info-dot` | `--color-feedback-info-dot` | blue/500 | blue/400 |
| `feedback/neutral/bg` | `bg-feedback-neutral` | `--color-feedback-neutral-bg` | neutral/100 | neutral/800 |
| `feedback/neutral/text` | `text-feedback-neutral` | `--color-feedback-neutral-text` | neutral/700 | neutral/300 |
| `feedback/neutral/border` | `border-feedback-neutral` | `--color-feedback-neutral-border` | neutral/200 | neutral/700 |
| `feedback/neutral/dot` | `bg-feedback-neutral-dot` | `--color-feedback-neutral-dot` | neutral/400 | neutral/500 |
| `border/danger` | `border-danger` | `--color-border-danger` | red/600 | red/500 |
| `border/control` | `border-control` | `--color-border-control` | neutral/500 | neutral/500 |

Hover, focus gibi durumlar Tailwind önekleriyle yazılır: `hover:bg-action-primary-hover`, `dark:` gerekmez (renkler moda göre kendiliğinden değişir).

## Boşluk (Spacing)

Tailwind'in 4 px'lik ölçeği kullanılır. Figma'daki `Spacing/N` = kodda `p-N`, `m-N`, `gap-N`, `w-N`, `h-N`…

| Figma | Değer | Örnek class |
|---|---|---|
| `Spacing/0` | 0 px | `p-0` |
| `Spacing/px` | 1 px | `p-px` |
| `Spacing/0.5` | 2 px | `p-0.5` |
| `Spacing/1` | 4 px | `p-1` |
| `Spacing/1.5` | 6 px | `p-1.5` |
| `Spacing/2` | 8 px | `p-2` |
| `Spacing/2.5` | 10 px | `p-2.5` |
| `Spacing/3` | 12 px | `p-3` |
| `Spacing/3.5` | 14 px | `p-3.5` |
| `Spacing/4` | 16 px | `p-4` |
| `Spacing/4.5` | 18 px | `p-4.5` |
| `Spacing/5` | 20 px | `p-5` |
| `Spacing/6` | 24 px | `p-6` |
| `Spacing/7` | 28 px | `p-7` |
| `Spacing/8` | 32 px | `p-8` |
| `Spacing/9` | 36 px | `p-9` |
| `Spacing/10` | 40 px | `p-10` |
| `Spacing/11` | 44 px | `p-11` |
| `Spacing/12` | 48 px | `p-12` |
| `Spacing/14` | 56 px | `p-14` |
| `Spacing/16` | 64 px | `p-16` |
| `Spacing/20` | 80 px | `p-20` |
| `Spacing/24` | 96 px | `p-24` |
| `Spacing/28` | 112 px | `p-28` |
| `Spacing/32` | 128 px | `p-32` |
| `Spacing/36` | 144 px | `p-36` |
| `Spacing/40` | 160 px | `p-40` |
| `Spacing/44` | 176 px | `p-44` |
| `Spacing/48` | 192 px | `p-48` |
| `Spacing/52` | 208 px | `p-52` |
| `Spacing/56` | 224 px | `p-56` |
| `Spacing/60` | 240 px | `p-60` |
| `Spacing/64` | 256 px | `p-64` |
| `Spacing/72` | 288 px | `p-72` |
| `Spacing/80` | 320 px | `p-80` |
| `Spacing/96` | 384 px | `p-96` |

## Köşe yuvarlaklığı

| Figma | Değer | Class |
|---|---|---|
| `rounded-none` | 0 px | `rounded-none` |
| `rounded-xs` | 2 px | `rounded-xs` |
| `rounded-sm` | 4 px | `rounded-sm` |
| `rounded-md` | 6 px | `rounded-md` |
| `rounded-lg` | 8 px | `rounded-lg` |
| `rounded-xl` | 12 px | `rounded-xl` |
| `rounded-2xl` | 16 px | `rounded-2xl` |
| `rounded-3xl` | 24 px | `rounded-3xl` |
| `rounded-4xl` | 32 px | `rounded-4xl` |
| `rounded-full` | tam yuvarlak | `rounded-full` |

## Border kalınlığı

| Figma | Değer | Class |
|---|---|---|
| `border` | 1 px | `border` |
| `border-0` | 0 px | `border-0` |
| `border-2` | 2 px | `border-2` |
| `border-4` | 4 px | `border-4` |
| `border-8` | 8 px | `border-8` |

## Yazı

Font: **Geist** → `font-sans` (varsayılan).

| Figma yazı stili | Class | Boyut / satır |
|---|---|---|
| `text-xs/<ağırlık>` | `text-xs font-<ağırlık>` | 12 / 16 px |
| `text-sm/<ağırlık>` | `text-sm font-<ağırlık>` | 14 / 20 px |
| `text-base/<ağırlık>` | `text-base font-<ağırlık>` | 16 / 24 px |
| `text-lg/<ağırlık>` | `text-lg font-<ağırlık>` | 18 / 28 px |
| `text-xl/<ağırlık>` | `text-xl font-<ağırlık>` | 20 / 28 px |
| `text-2xl/<ağırlık>` | `text-2xl font-<ağırlık>` | 24 / 32 px |
| `text-3xl/<ağırlık>` | `text-3xl font-<ağırlık>` | 30 / 36 px |
| `text-4xl/<ağırlık>` | `text-4xl font-<ağırlık>` | 36 / 40 px |

Figma'da değişkeni olup yazı stili olmayan boyutlar kodda tanımlanmaz: `text-5xl`, `text-6xl`, `text-7xl`, `text-8xl`, `text-9xl`.

| Figma ağırlık | Değer | Class |
|---|---|---|
| `font-thin` | 100 | `font-thin` |
| `font-extralight` | 200 | `font-extralight` |
| `font-light` | 300 | `font-light` |
| `font-regular` | 400 | `font-normal` ⚠️ ad farklı |
| `font-medium` | 500 | `font-medium` |
| `font-semibold` | 600 | `font-semibold` |
| `font-bold` | 700 | `font-bold` |
| `font-extrabold` | 800 | `font-extrabold` |
| `font-black` | 900 | `font-black` |

## Gölgeler

| Figma stili | Class |
|---|---|
| `Shadow/shadow-2xs` | `shadow-2xs` |
| `Shadow/shadow-xs` | `shadow-xs` |
| `Shadow/shadow-sm` | `shadow-sm` |
| `Shadow/shadow-md` | `shadow-md` |
| `Shadow/shadow-lg` | `shadow-lg` |
| `Shadow/shadow-xl` | `shadow-xl` |
| `Shadow/shadow-2xl` | `shadow-2xl` |
| `Shadow/inset-shadow-2xs` | `inset-shadow-2xs` |
| `Shadow/inset-shadow-xs` | `inset-shadow-xs` |
| `Shadow/inset-shadow-sm` | `inset-shadow-sm` |

## Primitive renkler

Primitive bir rengin adı tek başına renktir (`neutral-100`). Tailwind'de bir class her zaman neyin boyanacağını söyleyen bir önek ister, bu yüzden renk adı her önekle kullanılır: `bg-neutral-100`, `text-neutral-100`, `border-neutral-100`…

> ⚠️ Primitive renkler Light/Dark moda göre **değişmez**. Komponentlerde önce semantic renkleri kullan, primitive'i sadece gerektiğinde kullan.

| Figma | Renk adı | Değer |
|---|---|---|
| `Colors/neutral/50` | `neutral-50` | `#fafafa` |
| `Colors/gray/50` | `gray-50` | `#f6f6f5` |
| `Colors/gray/100` | `gray-100` | `#e7e7e6` |
| `Colors/gray/200` | `gray-200` | `#d1d2cf` |
| `Colors/gray/300` | `gray-300` | `#b1b2ae` |
| `Colors/gray/400` | `gray-400` | `#8a8b85` |
| `Colors/gray/500` | `gray-500` | `#6a6b66` |
| `Colors/gray/600` | `gray-600` | `#5e5f5b` |
| `Colors/gray/700` | `gray-700` | `#50514d` |
| `Colors/gray/800` | `gray-800` | `#464644` |
| `Colors/gray/900` | `gray-900` | `#3d3d3c` |
| `Colors/gray/950` | `gray-950` | `#262725` |
| `Colors/yellow/50` | `yellow-50` | `#fefee8` |
| `Colors/blue/50` | `blue-50` | `#eef6ff` |
| `Colors/blue/100` | `blue-100` | `#d9e9ff` |
| `Colors/blue/200` | `blue-200` | `#bcdaff` |
| `Colors/blue/300` | `blue-300` | `#8ec3ff` |
| `Colors/blue/400` | `blue-400` | `#59a2ff` |
| `Colors/blue/500` | `blue-500` | `#2474ff` |
| `Colors/blue/600` | `blue-600` | `#1b5cf5` |
| `Colors/blue/700` | `blue-700` | `#1447e1` |
| `Colors/blue/800` | `blue-800` | `#173ab6` |
| `Colors/blue/900` | `blue-900` | `#19358f` |
| `Colors/blue/950` | `blue-950` | `#142257` |
| `Colors/yellow/100` | `yellow-100` | `#fdffc2` |
| `Colors/yellow/200` | `yellow-200` | `#ffff88` |
| `Colors/yellow/300` | `yellow-300` | `#fff743` |
| `Colors/yellow/400` | `yellow-400` | `#ffe910` |
| `Colors/yellow/500` | `yellow-500` | `#efcf03` |
| `Colors/yellow/600` | `yellow-600` | `#d2a500` |
| `Colors/yellow/700` | `yellow-700` | `#a47404` |
| `Colors/yellow/800` | `yellow-800` | `#875a0c` |
| `Colors/yellow/900` | `yellow-900` | `#734a10` |
| `Colors/yellow/950` | `yellow-950` | `#432705` |
| `Colors/red/50` | `red-50` | `#ffefef` |
| `Colors/red/100` | `red-100` | `#ffdcdc` |
| `Colors/red/200` | `red-200` | `#ffbfbf` |
| `Colors/red/300` | `red-300` | `#ff9292` |
| `Colors/red/400` | `red-400` | `#ff5454` |
| `Colors/red/500` | `red-500` | `#ff1f1f` |
| `Colors/red/600` | `red-600` | `#ff0000` |
| `Colors/red/700` | `red-700` | `#db0000` |
| `Colors/red/800` | `red-800` | `#af0000` |
| `Colors/red/900` | `red-900` | `#940808` |
| `Colors/red/950` | `red-950` | `#520000` |
| `Colors/neutral/100` | `neutral-100` | `#f5f5f5` |
| `Colors/neutral/200` | `neutral-200` | `#e5e5e5` |
| `Colors/neutral/300` | `neutral-300` | `#d4d4d4` |
| `Colors/neutral/400` | `neutral-400` | `#a1a1a1` |
| `Colors/neutral/500` | `neutral-500` | `#737373` |
| `Colors/neutral/600` | `neutral-600` | `#525252` |
| `Colors/neutral/700` | `neutral-700` | `#404040` |
| `Colors/neutral/800` | `neutral-800` | `#262626` |
| `Colors/neutral/900` | `neutral-900` | `#171717` |
| `Colors/neutral/950` | `neutral-950` | `#0a0a0a` |
| `Colors/green/50` | `green-50` | `#ebfef5` |
| `Colors/green/100` | `green-100` | `#d0fbe4` |
| `Colors/green/200` | `green-200` | `#a4f6ce` |
| `Colors/green/300` | `green-300` | `#6aebb6` |
| `Colors/green/400` | `green-400` | `#2fd897` |
| `Colors/green/500` | `green-500` | `#0abf80` |
| `Colors/green/600` | `green-600` | `#009b68` |
| `Colors/green/700` | `green-700` | `#007a55` |
| `Colors/green/800` | `green-800` | `#036245` |
| `Colors/green/900` | `green-900` | `#04503b` |
| `Colors/green/950` | `green-950` | `#012d22` |
| `Colors/white` | `white` | `#ffffff` |
| `Colors/black` | `black` | `#000000` |
