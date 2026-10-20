---
id: core.dokuman-frame-duzeni
title: Doküman frame düzeni
owner: "@mucahitpuren"
status: active
version: 1
applies_to: docs
updated: 2026-10-20
---

# Doküman frame düzeni

## Amaç

Bütün dokümantasyon sayfaları (komponentler ve foundations) aynı sırayla ve aynı girişle açılsın. Okuyan kişi her sayfada nereye bakacağını bilsin.

## Kural

1. **Frame sırası soldan sağa:** `Overview` → `Changelog` → sayfaya özel frame'ler. Changelog her zaman Overview'un hemen yanındadır.
2. **Overview her zaman aynı girişle başlar.** Documentation Draft → Overview'daki gibi:
   - Doc Header (logo + "Tabii CMS Design System")
   - **Hero:** ortada 256 × 256 px'lik bir kare (`bg/subtle`, `rounded-2xl`). İçinde sayfanın konusunu anlatan komponent ya da görsel durur.
   - Altında ortalanmış başlık (`text-4xl/bold`) ve açıklama (`text-base/regular`, 720 px)
   - Ortalanmış **Meta**: Figma durumu, sürüm, son güncelleme
   - Ayırıcı çizgi
3. **Videosu gösterilebilecek her sayfada Hero'nun altında `Introduction` bölümü bulunur.** Bu bölümde 16:9 video alanı (`Video — 16:9`) yer alır. Video özelliği açılana kadar bu bölüm **gizlidir**. Silinmez, açılmaz.
4. Overview'da Hero ve video alanından sonra sadece gerçekten gerekli içerik olur. Tablolar ve uzun listeler kendi frame'lerinde durur (örneğin Colors → Primitives, Semantic Colors; Spacing → Scale).
5. **Şimdilik ana komponentler dokümantasyon sayfasında durmaz.** Dokümanda instance'lar gösterilir. Bütün komponentler önce Playground → Component Sets frame'inde toplanıyor, orada bölümlendirilip düzenleniyor. **Bu geçici bir kural:** komponentlerin hepsi hazır olunca her ana komponent kendi sayfasına taşınacak ve bu madde değişecek. O zamana kadar ana komponentleri taşıma.
6. **Dokümantasyon sayfalarının zemini #171717'dir.**
7. Usage (Do / Don't) frame'i sadece gerçekten gerekli olduğunda eklenir.

## Örnek

✅ Colors sayfası: `Overview` (Hero + gizli video) → `Changelog` → `Primitives` → `Semantic Colors`

❌ Changelog en sağda, Overview'da sola yaslı başlık ve uzun tablolar, ana komponent setinin doküman sayfasında durması.
