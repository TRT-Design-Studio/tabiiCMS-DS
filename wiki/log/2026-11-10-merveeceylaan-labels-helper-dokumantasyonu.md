---
date: 2026-11-10
author: "@merveeceylaan"
branch: merveeceylaan/labels-helper-dokumantasyonu
---

# Labels & Helper dokümantasyonu

`dokuman: Labels & Helper` ile ↪︎ Labels & Helper sayfası şablona göre dokümante edildi.

## Ne yapıldı?
- Figma'da sayfaya yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717` yapıldı.
- Ana setler (Label, Field Message) Component Sets frame'indeki tablolara taşındı. Kopyalanmadı. Boşalan eski grup frame'i silindi.
- Variants at a glance: Label emphasis/state ve içerik halleri, Field Message tonları ve içerik halleri.
- Examples'ta Playground'dan iki kullanım var: Form Field'da hata ve Input altında Success. (İlk sürümdeki altı örnekten dördü Merve tarafından çıkarıldı.)
- Kimlik kartları yazıldı: `components/label`, `components/field-message`.

## Alınan kararlar
- Helper ikonu olduğu gibi kalıyor (Merve, 2026-11-10).
- Subtle · Disabled Label'daki çift soluklaşma (`text/disabled` + %50 opaklık) şimdilik olduğu gibi kalıyor (Merve, 2026-11-10).
- Label tablosunda satırlar State, sütunlar Emphasis. Field Message tablosunda satırlar Tone.
- Label setinin Figma açıklaması yeniden yazıldı: Emphasis, State, Required, Help, Meta ve Description anlatılıyor.
- Anatomi sahnelerinde Label 2×, Field Message 1.5× büyütüldü (önce 3× ve 2× idi, fazla büyüktü). Notta yazıyor.

## Açık sorular
- Yok.

## Sıradaki adım
- Kalan Form alt sayfaları `dokuman: <sayfa>` ile: Select, Textarea, Form Field, Number Stepper…
