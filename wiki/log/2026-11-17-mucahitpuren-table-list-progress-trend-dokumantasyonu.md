---
date: 2026-11-17
author: "@mucahitpuren"
branch: mucahitpuren/table-list-progress-trend-dokumantasyonu
---

# Table, List Item, Progress Bar ve Trend dokümantasyonu

Data Display grubundaki dört sayfa (`↪︎ Table`, `↪︎ List Item`, `↪︎ Progress Bar`, `↪︎ Trend`) şablona göre dokümante edildi.

## Ne yapıldı?
- Table ve List Item'a yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Progress Bar ve Trend'de Interaction yok (etkileşimleri yok, Divider'daki karara göre).
- Sayfa zeminleri `#171717`. Ana setler Component Sets tablolarına taşındı, kopyalanmadı. Boşalan eski grup frame'leri silindi.
- Component Sets tabloları:
  - Table Header Cell: satırlar Type · Sort, sütunlar State.
  - Table Cell: 28 varyant tek tabloda; satırlar Interactive · Type (9 satır), sütunlar State. Set içindeki varyantlar tabloya göre yeniden dizildi.
  - List Item: satırlar Type, sütunlar State. Progress Bar: satırlar Value (0 → 100). Trend: satırlar Direction.
- Examples (Playground'dan kopya):
  - Table: Pending Content (Overview) ve Show library (Shows). Show library kartı 1144 px olduğu için 1038 px'e daraltıldı; Show sütunu doldurduğu için tablo bozulmadı.
  - List Item: SEO & Discoverability, Notes & Handoff, Recent Activity.
  - Progress Bar: Create Show'daki Overall Progress ve Upload (Uploading).
  - Trend: Overview'daki Total Content (Positive) ve Content Missing SEO (Negative) Stat Card'ları.
- Kimlik kartları otomatik taslaktan yeniden yazıldı ve `stable` oldu: `table-cell`, `table-header-cell`, `list-item`, `progress-bar`, `trend`.

## Alınan kararlar
- Küçük komponentlerin anatomisi büyütülerek gösterildi: Table hücreleri 2×, Progress Bar 1.5×, Trend 2× (ilk 3× çok büyüktü; Mücahit'in isteğiyle küçültülüp sahnede ortalandı). List Item 1× (dashed çizgi kapsayıcıyı gösteriyor).
- Progress Bar ve List Item'ın glance kartları satırda 2 (çubuk 256 px, satır 340 px; 4'lü kartlara sığmıyor).

## Düzeltmeler (Mücahit'in isteğiyle)
- **Progress Bar Fill artık yüzdeye göre uzuyor.** Fill sabit genişlikteydi (`Spacing/16`…`Spacing/64`); çubuk daraltılınca oran bozuluyordu (Create Show'daki Value 75 %86 görünüyordu). Fill'in genişlik bağı kaldırıldı, auto layout dışına alındı (absolute) ve yatayda Scale kısıtı verildi. Dosyadaki 14 kullanımın hepsi kontrol edildi: oranlar doğru (%25/50/75/100).
- **Progress Bar Value sırası 0 → 100.** Figma'da seçenek sırası 50, 0, 25, 75, 100'dü. Plugin API'de sıralama yok; bir değeri geçici olarak başka bir değerle aynı yapıp geri almak onu sona taşıyor. Bu yolla 50, 75, 100 sırayla sona alındı.
- **Beş komponentin açıklaması yeniden yazıldı** (Table Cell, Table Header Cell, List Item, Progress Bar, Trend): property listesi yerine kullanım. Trend'deki olmayan "Instance swap: Icon" ve List Item'daki "Badge" (aslında Status) düzeldi.
- **Table Cell %4 kontrolü:** Sorun yok. `bg/interactive/selected` token'ının kendisi %4 saydam (dark modda %6). Figma bağlı dolguda bu saydamlığı opaklık olarak gösteriyor; mod değişince token'la birlikte değişiyor.

## Alınan kararlar (devam)
- Table Cell'in Hover katmanı `bg/interactive/selected` (%4) token'ında kalıyor; `bg/interactive/hover` (%5) kullanılmayacak (Mücahit, 2026-11-17).

## Açık sorular
- Table ve List Item için code layer yok (`interaction: <sayfa>`).

## Sıradaki adım
- Top Bar, File Upload ve Rich Text Editor eksikleri tamamlanınca `dokuman: <sayfa>`.
