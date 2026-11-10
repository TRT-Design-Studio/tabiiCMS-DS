---
date: 2026-11-10
author: "@merveeceylaan"
branch: merveeceylaan/menu-dokumantasyonu
---

# Menu dokümantasyonu

`dokuman: Menu` ile 📋 Menu sayfası şablona göre dokümante edildi.

## Ne yapıldı?
- Figma'da 📋 Menu sayfasına yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717` yapıldı.
- Ana setler (Menu, Menu Item) ile Menu Group Label ve Menu Separator, Component Sets frame'indeki tablolara taşındı. Kopyalanmadı, instance bağlantıları korundu. Boşalan eski "Menu" grup frame'i silindi.
- Variants at a glance bölümünde şunlar var: Menu'nün beş liste state'i, Menu Item'ın state'leri, destructive halleri ve içerik seçenekleri, Group Label ve Separator.
- Examples'a Playground → "Reference vs DS · Revised" ekranlarından 14 farklı kullanım kopyalandı: Select, bulk actions, create menu, row actions, user menu, global search, person picker, tag suggestions, country code, month/year, block type, breadcrumb, filter count, external link.
- Kimlik kartları yazıldı: `components/menu`, `menu-item`, `menu-group-label`, `menu-separator`.

## Alınan kararlar
- Menu setinin tek ekseni State olduğundan tabloda satırlar state, tek sütun 240 px genişlik oldu. Menu Item'da sütunlar Destructive False / True. True'da olmayan Selected ve Disabled hücreleri "—" ile gösterildi.
- "Used in" listesine bileşen içindeki kullanımlar girdi: Menu (Items slot'unun varsayılan içeriği) ve Filter Group. Ekranlardaki kullanımlar Examples'ta gösterildi.

## Açık sorular
- Menu'nün ekip varsayılan genişliği: Figma'da 240 px. Ekranlarda 120 ile 360 px arasında değişiyor.
- Destructive Menu Item'ın ikon rengi değişkene bağlı okunamadı. Dokümanda sadece etiket rengi (`feedback/danger/text`) yazıldı.

## Sıradaki adım
- Kalan sayfaları `dokuman: <sayfa>` ile dokümante etmek: Tooltip, Form alt sayfaları, Navigation, Avatar, Media, Cards, Data Display.
