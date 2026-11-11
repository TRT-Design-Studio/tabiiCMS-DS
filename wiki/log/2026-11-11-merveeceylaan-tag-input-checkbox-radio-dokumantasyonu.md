---
date: 2026-11-11
author: "@merveeceylaan"
branch: merveeceylaan/datepicker-dokumantasyonu
---

# Tag Input ve Checkbox & Radio dokümantasyonu

`dokuman: Tag Input` ve `dokuman: Checkbox & Radio` ile iki sayfa şablona göre dokümante edildi.

## Ne yapıldı?
- İki sayfaya da yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zeminleri `#171717` yapıldı.
- Asıl setler (Tag Input; Checkbox, Radio) Component Sets tablolarına taşındı. Kopyalanmadı. Boşalan eski grup frame'leri silindi.
- Tag Input tablosu: satırlar State (6), sütunlar Size (Small, Medium). Checkbox: satırlar State, sütunlar Checked. Radio: satırlar State, sütunlar Selected.
- Tag Input Examples (Playground'dan): öneri menüsü, tekrar eden değer hatası, iki satıra sarılan tag'ler.
- Checkbox & Radio Examples (Playground'dan): Label'lı Checkbox, açıklamalı Radio, filtre listesinde Checkbox, avatarlı Checkbox.
- Kimlik kartları yazıldı: `components/tag-input`, `components/checkbox`, `components/radio`.

## Alınan kararlar
- Anatomi sahneleri: Tag Input 1.5×, Checkbox ve Radio 3× (önce 2× ve 6× idi, fazla büyüktü; Merve, 2026-11-11).
- Tag Input ekip varsayılanı Medium (Merve, 2026-11-11). Figma'da panelden eklenince Small geliyor; tablodaki sıra Small → Medium kalıyor.
- Tag Input içindeki tag'ler iki boyda da Small kalıyor: iç yükseklik 20 px, Small tag tam sığıyor. Medium tag (28) alanı 44 px yapar, Input'tan uzun olur.

- Checkbox ve Radio açıklamalarındaki eski ad "Menu/Item", "Menu Item" yapıldı (Merve, 2026-11-11). Bütün komponent açıklamaları tarandı. Eski adı taşıyan tek açıklama Status'tu; orada "Status/Select" bilerek, kaldırılan eski seti anlatmak için duruyor. Ona dokunulmadı.

## Açık sorular
- Yok.

## Sıradaki adım
- Kalan Form alt sayfaları `dokuman: <sayfa>` ile: Select, Textarea, Form Field, Number Stepper…
