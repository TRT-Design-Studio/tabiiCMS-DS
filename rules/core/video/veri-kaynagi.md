---
id: core.video-veri-kaynagi
title: Videodaki her şey Figma'dan gelir
owner: "@mucahitpuren"
status: active
version: 1
applies_to: video
updated: 2026-10-14
---

# Videodaki her şey Figma'dan gelir

## Amaç

Video, tasarım sisteminin bir parçasıdır, ondan bağımsız bir "tanıtım filmi" değildir. Videoda görülen her şey sistemin gerçeğini göstermeli. Figma değişince video da aynı kaynaktan yeniden üretilebilmeli.

## Kural

1. **Görsel olan her şey tasarım sistemi değişkenlerinden gelir.** Komponentin kendisi, arka plan, sahne kartları, başlıklar ve etiketler de dahil: renk, yazı stili, boşluk, köşe yuvarlaklığı, gölge. Videoya özel, sistemde olmayan bir renk veya yazı stili kullanılmaz.
2. **Videodaki bütün metinler İngilizcedir.** Başlıklar, açıklamalar, etiketler, sahne geçiş yazıları: ekranda görünen her şey.
3. **Bütün veriler Figma'dan gelir, elle yazılmaz.** Komponent adı, property adları, varyant adları, state adları, token adları ve bütün sayısal değerler (px, oran, süre…) Figma'daki tanımlardan okunur.
4. **Sahneler komponentin gerçek property'lerinden üretilir.** Komponentte olmayan bir property, varyant veya state videoda **gösterilmez.** Komponentte olan her property'nin ise videoda bir karşılığı olur.
5. **Figma'daki bir değer eksik veya hatalıysa** (örneğin bir state değişkene bağlı değilse) video yine de üretilmez. Önce proje sahibine uyarı verilir.

## Örnek

✅ Button'ın Figma'da `Size: sm | md | lg` property'si var → videoda üç boyutu gösteren bir sahne var. Sahnedeki etiketler `Size / sm`, `Size / md`, `Size / lg` olarak yazılı ve sistemdeki `text-sm` stiliyle gösteriliyor.

❌ Videoda Button için bir "Loading" sahnesi var ama Figma'daki komponent setinde böyle bir state yok.

❌ Sahne başlığı sistemde olmayan `#FF5500` renginde ve "Butonlar" (Türkçe) olarak yazılmış.
