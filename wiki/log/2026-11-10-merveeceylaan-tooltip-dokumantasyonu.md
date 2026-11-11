---
date: 2026-11-10
author: "@merveeceylaan"
branch: merveeceylaan/tooltip-dokumantasyonu
---

# Tooltip dokümantasyonu

`dokuman: Tooltip` ile 💬 Tooltip sayfası şablona göre dokümante edildi.

## Ne yapıldı?
- Figma'da 💬 Tooltip sayfasına yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717` yapıldı.
- Ana set (Tooltip) Component Sets frame'indeki tabloya taşındı. Kopyalanmadı. Boşalan eski "Tooltip" grup frame'i silindi.
- Variants at a glance: dört placement ve iki içerik hali (sadece metin, metin + kısayol).
- Examples'a Playground → "Reference vs DS · Revised" ekranlarından dört kullanım kopyalandı: ikon buton kısayolu, disabled nedeni, Copy butonu, Copied onayı.
- Kimlik kartı yazıldı: `components/tooltip`.

## Alınan kararlar
- Tooltip'te state ekseni yok. Tabloda tek satır ("Default"), sütunlar Placement değerleri.
- States tablosu görünürlüğü anlatır: Hidden, Visible on hover (~500 ms), Visible on focus.
- Examples'ta tooltip'ler auto layout'tan çıkarıldı. Her örnekte tetikleyici ve tooltip ayrı duruyor, konumları constraint ile sabit. Tooltip tetikleyiciden 4 px uzakta.
- Disabled reason örneğine tetikleyici eklendi: Secondary, Small, Disabled bir "Publish" butonu. Tooltip butonun sağında.
- Anatomi sahnesindeki instance okunabilsin diye 3× büyütüldü. Not metninde yazıyor.

## Açık sorular
- Bubble'daki 4 px background blur bir değişkene bağlı değil.
- Gizlenme gecikmesi ve en fazla genişlik komponentte yok. Uzun metinde ne olacağı belli değil.
- Show Shortcut Figma'da varsayılan olarak açık. Ekip varsayılanı kapalı mı olmalı?

## Sıradaki adım
- Kalan sayfalar `dokuman: <sayfa>` ile: Form alt sayfaları, Navigation'ın diğer alt sayfaları, Page Header, Avatar, Media, Cards, Data Display.
