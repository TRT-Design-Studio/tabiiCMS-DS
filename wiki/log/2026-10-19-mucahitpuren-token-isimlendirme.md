---
date: 2026-10-19
author: "@mucahitpuren"
branch: mucahitpuren/token-isimlendirme
---

# Token isimlendirme ve Figma senkronu (Faz 1 sonu)

## Ne yapıldı?
- Figma'daki bütün değişkenler (151 primitive, 53 semantic), 72 yazı stili ve 10 gölge stili okundu → `tokens/figma-ham.json`.
- `scripts/tokenlari-uret.mjs` ile DTCG token dosyaları, `tokens/tailwind.css` ve `tokens/esleme.md` üretildi. Uyarı çıkmadı: spacing ve border kalınlıkları Tailwind ile birebir.
- `tokens/tailwind.css` Tailwind 4.3.3 ile geçici bir klasörde derlenip denendi. Semantic class'lar, `hover:`/`dark:` önekleri, `p-4.5`, `rounded-4xl` çalışıyor. `bg-blue-500`, `text-5xl`, `font-regular`, `bg-bg-surface` üretilmiyor.
- Kural: `rules/core/token-isimlendirme.md`. Akış: `workflows/figma-senkron.md` (+ `.claude/skills/figma-senkron`).
- `kontrol.mjs` artık token dosyalarının `figma-ham.json` ile güncel olduğunu da denetliyor.

## Alınan kararlar
- Semantic renklerde grup adı class öneki (seçenek b): `bg/surface` → `bg-surface`. Önek Figma kapsamından gelir.
- Primitive renkler kodda class üretmez (Figma'da da seçicilerde gizli).
- Tailwind varsayılanları (renk, font, yazı boyutu, radius, gölge) kapatıldı.
- Yazı boyutlarından sadece yazı stili olanlar (xs–4xl) kodda tanımlı.
- Dark mode: kök elemana `.dark` sınıfı.
- Figma tek seferde 20 KB döndürebildiği için okuma 45'erli parçalarla yapılıyor (`tokens/.parcalar/`, git'e girmez).

## Açık sorular
- Yok.

## Sıradaki adım
- Faz 2: doküman şablonu ve "dokuman: <komponent>" akışı.
