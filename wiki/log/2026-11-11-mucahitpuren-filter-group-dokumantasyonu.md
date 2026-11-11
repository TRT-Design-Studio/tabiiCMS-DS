---
date: 2026-11-11
author: "@mucahitpuren"
branch: mucahitpuren/filter-group-dokumantasyonu
---

# Filter Group dokümantasyonu

`↪︎ Filter Group` sayfası şablona göre dokümante edildi.

## Ne yapıldı?
- Yedi frame: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717`.
- Ana set Component Sets tablosuna taşındı (satırlar Expanded / Collapsed). Boşalan grup frame'i silindi.
- Examples: Playground'dan dört filtre paneli (açık grup, seçili seçenekler, arama yazılırken, sonuç yok).
- `components/filter-group/spec.md` elle düzenlendi ve `stable` oldu (otomatik draft'ın yerine).

## Açık sorular
- Ekranlarda Collapsed grup 44 px, komponentte 52 px. Ekranlardaki kopyalar elle küçültülmüş olabilir.
- Interaction frame'i için code layer henüz yok (`interaction: Filter Group`).

## Sıradaki adım
- Kalan sayfalar `dokuman: <sayfa>` ile.
