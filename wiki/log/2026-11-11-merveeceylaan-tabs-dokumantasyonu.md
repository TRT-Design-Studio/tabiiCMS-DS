---
date: 2026-11-11
author: "@merveeceylaan"
branch: merveeceylaan/tabs-dokumantasyonu
---

# Tabs dokümantasyonu

`dokuman: Tabs` ile ↪︎ Tabs sayfası şablona göre dokümante edildi.

## Ne yapıldı?
- Sayfaya yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717` yapıldı.
- Üç asıl set (Tabs, Tab Segment, Tab Underline) Component Sets tablolarına taşındı. Kopyalanmadı. Boşalan eski grup frame'i silindi.
- Tabs tablosu tek sütun: satırlar Type · Content (4 varyant). Tab Segment ve Tab Underline: satırlar State.
- Examples (Playground → Create Show): kilitli bölümlerle Segmented Items, altı bölümle Segmented Slot, yan panelde Underline.
- Segmented Tabs 550 px, Slot örneği 740 px olduğu için bu iki örnek kartı tam genişlikte (1102) duruyor; şablondaki "satırda 2 kart" kuralına sığmıyorlardı.
- Kimlik kartları yazıldı: `components/tabs`, `components/tab-segment`, `components/tab-underline`.

## Alınan kararlar
- Anatomi: Tabs 1×, Tab Segment ve Tab Underline 2×. Segmented track sahne zemininde (`bg/subtle`) görünmediği için arkasına `bg/surface` bir zemin kondu.

- Tabs, Tab Segment ve Tab Underline açıklamaları yeniden yazıldı (Merve, 2026-11-11). Eskiden sadece property listesiydi. Artık hangisinin ne zaman kullanılacağını anlatıyor. Aynı metin spec.md dosyalarında da var.

## Açık sorular
- Yok.

## Sıradaki adım
- Kalan sayfalar `dokuman: <sayfa>` ile.
