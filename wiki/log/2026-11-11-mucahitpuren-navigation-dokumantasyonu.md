---
date: 2026-11-11
author: "@mucahitpuren"
branch: mucahitpuren/navigation-dokumantasyonu
---

# Breadcrumb, Pagination ve Stepper dokümantasyonu

`↪︎ Breadcrumb`, `↪︎ Pagination` ve `↪︎ Stepper` sayfaları şablona göre dokümante edildi.

## Ne yapıldı?
- Üç sayfaya da yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717`.
- Ana setler Component Sets tablolarına taşındı (kopyalanmadı). Boşalan eski grup frame'leri silindi.
- Breadcrumb Examples: Playground → "Reference vs DS · Revised" ekranlarından kopyalar. Hero'daki yollar kısaltıldı ("Shows › Winter Tale" ve geri butonlu hali).
- Pagination Examples: ayarlanmış instance'lar (Desktop tam, sadece sayfa numaraları, Mobile). Hero iki sıra Pagination Item gösteriyor; kesilen mobil örnek çıkarıldı. Geniş kartlar tam genişlik satırlara alındı.
- Stepper Examples: ayarlanmış Section Nav Item listesi (Empty, Current, Complete, Error). Hero etiketleri kısaltıldı ("Primary Info", "Media & Visuals").
- Interaction frame'leri "Coming soon" ve boş Figma Make alanıyla bırakıldı; code layer `interaction:` ile sonra.
- Kimlik kartları elle yazıldı, `stable` oldu: `breadcrumb`, `breadcrumb-item`, `pagination`, `pagination-item`, `section-nav-item`, `step-icon`.

## Alınan kararlar
- Pagination ve Stepper Playground ekranlarında kullanılmıyor. Examples bu yüzden ayarlanmış instance'lar; frame metninde bu yazıyor.

## Açık sorular
- Pagination ve Stepper Playground'daki bir ekrana (ör. Shows listesi, Create Show formu) eklensin mi?
- Üç sayfanın da code layer'ı yok (`interaction: <sayfa>` ile yapılacak).

## Sıradaki adım
- Kalan Navigation alt sayfaları `dokuman: <sayfa>` ile.

## Ek: Eski deneme sayfaları silindi
- Mücahit, Figma'da Documentation Draft, Badge ve Input deneme sayfalarını sildi.
- NOW.md ve `workflows/dokuman.md` güncellendi; görsel dil için artık dokümante edilmiş sayfalara bakılıyor.
- Mücahit'in onayıyla `rules/core/dokumantasyon/` güncellendi: sablon.md v5 (madde 3 ve ❌ örneği), frame-duzeni.md v3 (Overview örneği artık `↪︎ Input`), README.md.
