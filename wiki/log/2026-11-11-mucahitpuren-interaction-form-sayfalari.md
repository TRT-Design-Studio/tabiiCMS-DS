---
date: 2026-11-11
author: "@mucahitpuren"
branch: mucahitpuren/interaction-form-sayfalari
---

# Form sayfalarının code layer'ları

Labels & Helper, Input, Select, Textarea, Form Field, Number Stepper, Phone Field, Datepicker, Tag Input, Checkbox & Radio ve Filter Group için Interaction playground'ları yazıldı (`interaction/layers/<sayfa>/index.html`).

## Ne yapıldı?
- 16 yeni komponent kodu: tooltip, label, field-message, input, select, textarea, form-field, number-stepper, phone-field, calendar, calendar-header, calendar-day, tag-input, checkbox, radio, filter-group. Hepsi spec tablolarından ve token'lardan; iç içe olanlar var olan kodu kullanıyor (ör. Form Field → label + input/select/textarea + field-message).
- Hepsi canlı: yazılıyor, menüler açılıyor, takvimde gün / aralık seçiliyor, Tag Input'ta Enter ile tag ekleniyor, Filter Group'ta seçilenler üste çıkıyor.
- Yumuşak geçiş: bütün state değişiklikleri Button'ın Motion tablosundaki süre ve easing ile (120 ms, ease-out). Badges ve Menu sayfalarına da eklendi; menü açılışı da yumuşak.
- Sidebar'daki komponent ikonları kaldırıldı.
- Menu'deki kırmızı (Destructive) satırların ikonu artık kırmızı.
- Yakınlaştırılmış sahnede menüler ve tooltip'ler yerinden kaymıyor, aynı ölçekte açılıyor.
- Hata düzeltmesi: "`Spacing/3` (12)" gibi hücrelerden sayı okuyan fonksiyon 312 okuyordu; artık parantezdeki sayıyı alıyor.
- Kontrol: 14 sayfa jsdom ile denendi (her kontrol, her değer; 46 davranış testi) ve Chrome'da açık / koyu modda ekran görüntüsüyle bakıldı.

## Spec'lere eklenenler (Figma'dan okundu)
- Input: Parts tablosu (ikon renkleri boş / dolu, Success'te CheckCircle, sayaç).
- Select: Parts tablosu (Leading Icon, Chevron).
- Menu Item: Destructive satırın ikonu `feedback/danger/text`.
- Phone Field: Parts tablosu (bayrak 14, caret 14).
- Calendar: saat alanı (88 × 32, Clock) ve saat dilimi rengi (`text/tertiary`).
- Calendar Day: bugün noktasının yeri (işaretin altından 3 px).
- Tag Input: yazma alanı en az 66 px.
- Filter Group: Parts tablosuna Size sütunu, ikon rengi `text/secondary`. Spec PR #16'daki son halinden alındı.

## Alınan kararlar
- Ana kural `rules/core/interaction/code-layer.md` v5 (Mücahit'in isteğiyle): state geçişleri yumuşak; kendi Motion tablosu olmayan komponent Button'ınkini kullanır. Sidebar'da komponent ikonu yok.

## Açık sorular
- Figma'da Menu Item'ın Destructive varyantlarında ikon boş (çizim yok). Kodda yazının rengi verildi; Figma'da da düzeltilmeli.
- Figma'da Input'un Focused, Error, Disabled varyantlarında ikonların çizimi boş; renkler Default ve Filled'dan okundu.
- Phone Field ülke listesi (TR, DE, GB, US) ve numara düzenleri örnek; gerçek liste kararı bekliyor.

## Sıradaki adım
- Code layer'ları Figma'daki Interaction frame'lerine yapıştırmak (elle, [interaction/README.md](../../interaction/README.md)).
