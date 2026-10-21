---
date: 2026-10-21
author: "@mucahitpuren"
branch: mucahitpuren/komponent-calismasi
---

# Referans dosyadan komponent çalışması: inceleme ve kararlar

## Ne yapıldı?
- **Component Sets frame'i yeniden gruplandı** (Figma, Playground). 47 set, sayfa mantığıyla 9 aile grubuna ayrıldı: Buttons, Badges & Status, Form, Avatar, Media, Navigation, Cards, Data Display, Layout. Komponentlere dokunulmadı, sadece yerleri değişti.
- **Referans Figma dosyasındaki 15 sayfa okundu.** Datepicker, Labels & Helper, Inputs, Textarea, File Upload, Checkbox & Radio, Tag Input, Autocomplete, Breadcrumb, Dropdown, Filter Panel, Content Sidebar, Rich Text Editor ve Badge/Status/Tag.
- **Referans parçalar değiştirilmeden Playground'a taşındı.** Atoms, Molecules ve Organisms frame'lerine, atomic design seviyesine göre yerleştirildi. Açıklama metinleri "for AI" frame'inde kaldı.
- **Revize planı yazıldı:** `wiki/raporlar/2026-10-20-komponent-revize-plani.md`. Bütün kararlar, uygulama sırası ve açık konular burada.

## Alınan kararlar
Ayrıntısı revize planında. En önemlileri:
- **Yükseklikler:** Button 28 / 32 / 36 / 40, Input 32 / 36 / 40. Ana Input 40'tan 36'ya iniyor. Tablolarda Input ile Button yan yana gelince eşit olmalı (shadcn de böyle).
- **Tek Menu ailesi:** Menu (kabuk) + Menu Item (satır, sol/sağ slot). Select, Autocomplete, Dropdown, Checkbox List hepsi bunu kullanır.
- **Input'a slot:** Slot içeriği yüksekliği değiştirmez. Slot'lu her komponentin dokümanında bütün slot örnekleri gösterilir.
- **Yazı:** Referanstaki 13 px'ler `text-sm`.
- **Focus:** Mavi (`border/focus`).
- **Badge / Status / Tag:** Var olan Badge ve Status Dot'un üzerine eklenir. Status pill, diğerleri 6 px. Tag: Static, Removable, Link.
- **Link Button:** Button'a `Variant=Link`, renk `text/primary`.
- **Kullanılmayacaklar:** Floating label, referanstaki Breadcrumb Item ve Switcher, Tag Selectable ve Operational, Calendar Preview end, Success Checking.

## Açık sorular
- Rich Text Editor'ün açılır alanları (color picker vb.) için Mücahit revize verecek. O zamana kadar kurulmayacak.

## Sıradaki adım
- Revize planındaki "Uygulama sırası"nın 1. adımı: Button ve Icon Button. Var olan komponentler değiştirilmeden önce değişiklik Mücahit'e gösterilir.
