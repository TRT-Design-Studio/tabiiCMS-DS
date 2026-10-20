---
id: core.token-isimlendirme
title: Token isimlendirme ve Figma → kod eşlemesi
owner: "@mucahitpuren"
status: active
version: 2
applies_to: tokens
updated: 2026-10-20
---

# Token isimlendirme ve Figma → kod eşlemesi

## Amaç

Figma'daki her değişkenin kodda neye karşılık geldiği tek bir kurala bağlı olsun. Tasarımcı Figma'da `bg/surface` görür, geliştirici kodda `bg-surface` yazar ve ikisi hep aynı değeri gösterir.

## Kural

1. **Tek kaynak Figma'dır.** `tokens/` klasöründeki dosyalar elle düzenlenmez. Bir değer değişecekse önce Figma'da değişir, sonra [figma senkron](../../workflows/figma-senkron.md) çalıştırılır.
2. **Akış:**
   ```
   Figma → tokens/figma-ham.json → node scripts/tokenlari-uret.mjs → token dosyaları + tailwind.css + esleme.md
   ```
3. **Token dosyaları W3C Design Tokens (DTCG) formatındadır:**
   - `primitives.json`
   - `semantic.light.json` ve `semantic.dark.json`
   - `typography.json`
   - `shadows.json`
4. **Primitive değişkenler** Tailwind'in kendi adlarıyla kodlanır:

   | Figma grubu | Token yolu | Kodda |
   |---|---|---|
   | `Spacing/N` | `spacing.N` | `p-N`, `gap-N`, `w-N`… (`--spacing` × N) |
   | `Border/border-radius/rounded-X` | `radius.X` | `rounded-X` |
   | `Border/border-width/border-N` | `border-width.N` | `border-N` (`border` = 1 px) |
   | `Font/family/font-family` | `font.family.sans` | `font-sans` |
   | `Font/size/X` | `font.size.X` | `text-X` |
   | `Font/weight/font-X` | `font.weight.X` | `font-X` |
   | `Font/line-height/leading-N` | `font.line-height.N` | `leading-N` |
   | `Colors/<renk>/<ton>` | `color.<renk>.<ton>` | Renk adı `<renk>-<ton>`, her önekle: `bg-neutral-100`, `text-red-600`… (madde 6) |

5. **Semantic renklerde grup adı class'ın önekidir.**
   - **Önek Figma'daki kapsamdan (scope) gelir:**
     - Stroke → `border-`
     - Text fill → `text-`
     - Frame veya Shape fill → `bg-`
   - **Figma adının ilk kelimesi önekle aynıysa tekrar yazılmaz:** `bg/surface` → `bg-surface`, `bg-bg-surface` değil.
   - **Son kelime `default` ise ya da önekle aynıysa düşer:**
     - `action/primary/default` → `bg-action-primary`
     - `feedback/success/bg` → `bg-feedback-success`

   | Figma | Class |
   |---|---|
   | `bg/surface` | `bg-surface` |
   | `text/primary` | `text-primary` |
   | `border/default` | `border-default` |
   | `action/primary/default` / `hover` | `bg-action-primary` / `hover:bg-action-primary-hover` |
   | `feedback/success/bg` / `text` / `border` / `dot` | `bg-feedback-success` / `text-feedback-success` / `border-feedback-success` / `bg-feedback-success-dot` |

   - **CSS değişkeninin adı** Figma'daki code syntax'tır. Örnek: `var(--color-bg-surface)`. Böylece Dev Mode'da görünen ad ile koddaki ad aynı olur.
   - **Bir class Tailwind'in kendi class'larıyla ya da bir primitive rengin adıyla çakışırsa üretici durur.** Örnek: `text-xs`, `bg-white`.
6. **Primitive renklerin adı, rengin kendisidir.** `Colors/neutral/100` → `neutral-100`. Bir renk bir kullanıma bağlı olmadığı için her önekle kullanılabilir: `bg-neutral-100`, `text-neutral-100`, `border-neutral-100`, saydamlıkla `bg-neutral-100/50`.
   - Tailwind'de bir class her zaman neyin boyanacağını söyleyen bir önek ister. Bu yüzden tek başına `neutral-100` diye bir class yoktur.
   - ⚠️ Primitive renkler Light/Dark moda göre **değişmez**. Komponentlerde önce semantic renkler kullanılır, primitive sadece gerektiğinde kullanılır.
7. **Tailwind'in varsayılanları kapatılır.** Renkler, fontlar, yazı boyutları, köşe yuvarlaklıkları ve gölgeler sadece Figma'dan gelir. Paletimizde olmayan bir renk (`bg-purple-500` gibi) çalışmaz. `bg-blue-500` ise Figma'daki bizim mavimizi verir, Tailwind'inkini değil.
8. **Yazı boyutları:** Sadece Figma'da yazı stili olan boyutlar (`text-xs` … `text-4xl`) kodda tanımlanır. Satır yüksekliği yazı stilinden gelir.
9. **Dark mode:** Sayfanın kök elemanına `.dark` sınıfı eklenince semantic renkler Dark Mode değerlerine geçer. Class adları değişmez.
10. **Yeni bir değişken grubu veya kuralın kapsamadığı bir ad gelirse üretici durur.** Eşleme bu dosyaya eklenmeden (proje sahibi onayıyla) devam edilmez.

## Örnek

✅ Figma'da `bg/surface` Dark modda `neutral/900`'den `neutral/800`'e alındı → figma senkron → `tokens/tailwind.css` güncellendi → kodda `bg-surface` kullanan her yer kendiliğinden değişti.

❌ `tokens/tailwind.css` dosyasında bir renk elle değiştirildi. Bir sonraki senkronda bu değişiklik silinir. Kontrol de PR'ı kırmızıya düşürür.

## İstisnalar

- `font-regular` (Figma) → `font-normal` (kod). Bkz. [tailwind-temel.md](tailwind-temel.md)
- Figma isimde nokta kabul etmediği için `Spacing/0․5` gibi adlarda benzer görünen başka bir karakter var. DTCG formatı da token adında nokta kabul etmez. Bu yüzden JSON'da `spacing.0_5` yazılır, kodda yine `p-0.5` kullanılır.

## Kontrol

`node scripts/kontrol.mjs`, `tokens/` içindeki üretilmiş dosyaların `figma-ham.json` ile güncel olduğunu denetler. Tam eşleme listesi: [tokens/esleme.md](../../tokens/esleme.md)
