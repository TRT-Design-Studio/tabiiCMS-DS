---
date: 2026-11-11
author: "@merveeceylaan"
branch: merveeceylaan/datepicker-dokumantasyonu
---

# Datepicker dokümantasyonu

`dokuman: Datepicker` ile ↪︎ Datepicker sayfası şablona göre dokümante edildi.

## Ne yapıldı?
- Figma'da sayfaya yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717` yapıldı.
- Üç asıl set (Calendar, Calendar Header, Calendar Day) Component Sets frame'indeki tablolara taşındı. Kopyalanmadı. Boşalan eski grup frame'i silindi.
- Calendar Day tablosunda satırlar State (12), sütunlar Week Edge (None, First, Last).
- Variants at a glance: Calendar tipleri, Calendar Day state'leri, aralık state'leri, Week Edge ve Calendar Header.
- Examples'a Playground'dan iki kullanım kopyalandı: açık takvimli tarih alanı, footer'lı Date & Time.
- Examples'taki kopyada alanın değeri 02.10.2026'dan 06.10.2026'ya çekildi; takvimde seçili gün 6. Playground'daki asıl ekrana dokunulmadı.
- "Date & Time with footer" örneğine 6–17 Ekim aralığı kondu (Merve'nin isteği): 6 Range Start, 7–16 In Range (11 Last, 12 First, 15 Today In Range), 17 Range End. Sadece dokümandaki kopya değişti.
- Kimlik kartları yazıldı: `components/calendar`, `components/calendar-header`, `components/calendar-day`.

## Alınan kararlar
- Calendar Day anatomisi 2× (önce 4× idi, Merve'nin isteğiyle küçüldü), Calendar anatomisi 1× gösterildi. Bant `bg/subtle` sahne zemininde görünmediği için günlerin arkasına `bg/surface` bir zemin kondu.

- Calendar ve Calendar Day açıklamaları sete göre güncellendi (Merve, 2026-11-11): "Range Preview" ve "Date Range" çıkarıldı. Aralığın Date tipinde, gün state'leriyle kurulduğu yazıldı.
- Today, Today In Range (None, First, Last) varyantlarında Mark'taki renksiz çizginin kalınlık ayarı kaldırıldı (Merve, 2026-11-11). Today sadece noktayla gösterilir; görünüm değişmedi.

## Açık sorular
- Eski set başlıklarında Header ve Calendar Header butonları "exposed" yazıyordu; artık exposed değiller (2026-11-05). Başlıklar grup frame'iyle birlikte silindi, açıklamalar ayrıca güncellenmeli mi?

## Sıradaki adım
- Kalan Form alt sayfaları `dokuman: <sayfa>` ile: Select, Textarea, Form Field, Number Stepper…
