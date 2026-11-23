---
date: 2026-11-23
author: "@mucahitpuren"
branch: mucahitpuren/interaction-sonrasi-duzeltmeler
---

# Interaction sonrası düzeltmeler

18 Kasım kaydındaki (`2026-11-18-mucahitpuren-sidebar-interaction.md`) açık konular kapatıldı.

## Durum (Mücahit, 2026-11-23)
- Code layer'lar Figma'daki Interaction frame'lerine elle yapıştırıldı.
- Code layer'lar tarayıcıda çalışıyor.
- Ajanın seçtiği değerler onaylandı: shimmer 1500 ms, Slide 200 ms, Published In tooltip'leri, örnek menü satırları, kart footer'ı.

## Ne yapıldı?
- **Tabs:** Tab Underline Properties tablosuna Trailing Icon ve Trailing Icon Swap satırları eklendi.
- **Pagination:** Properties tablosuna Show Total satırı eklendi.
- **Tooltip:** Anatomy'deki eski değerler düzeldi: blur 4 → 2 px; "ok balonun üstüne 1.25 px biniyor" yerine "boşluksuz ve üst üste binmeden yan yana".
- **Changelog v1.1.0 (23 November 2026):** Tabs, Pagination, Menu, Table, Tooltip. Bu sayfalardaki Doc Header ve Overview sürümleri v1.1.0 oldu. Değişen komponentlerin `spec.md` sürümü 1.1.0: tab-underline, pagination, menu, menu-item, table-cell, table-header-cell, tooltip.
- **Checkbox sütunu 48 → 36 px:** Table sayfasındaki Show library örneğinde ve Playground'daki dört tabloda (Shows ×2, Create Show ×2). Hücreler sütunu doldurduğu için 36 px oldu, tablo genişliği değişmedi.
- `NOW.md`: Figma Make yerine code layer akışı yazıldı; 3. madde güncellendi.

## Açık sorular
- Interaction frame'lerindeki eski yer tutucu metinler ("…built with Figma Make will be embedded here") code layer yapıştırıldıktan sonra hâlâ duruyor olabilir; bakılmadı.
- Bilgisayardaki eski `mucahitpuren/sidebar-interaction` branch'i silinemedi (izin verilmedi). Zararı yok.

## Sıradaki adım
- Top Bar, File Upload ve Rich Text Editor eksikleri tamamlanınca `dokuman: <sayfa>`.
