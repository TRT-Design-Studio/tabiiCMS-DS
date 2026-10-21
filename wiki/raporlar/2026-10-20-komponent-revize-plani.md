---
date: 2026-10-20
updated: 2026-10-21
author: "@mucahitpuren"
figma_file: xdSquxB9G5GHgAe4s3QTho
reference_file: lWf9tBHKcRBBuWm7TSWnQj
---

# Komponent revize planı (referans dosyadan)

Başka bir Figma dosyasında komponentlerin daha detaylı halleri çizildi. Bu çizimler sistemin token'larını kullanmıyor, sadece yerleşim için referans. Bütün referans sayfalar Playground'a taşındı. Kararlar parça parça veriliyor. Bu dosya alınan kararları ve hâlâ açık olan konuları tutar.

## Çalışma kuralları

1. Referans parçalar Playground'daki Atoms / Molecules / Organisms frame'lerinde değiştirilmeden durur. Açıklama metinleri "for AI" frame'inde.
2. Komponentler sadece sistemin token ve stilleriyle Component Sets'te ilgili aile grubuna kurulur: Buttons, Badges & Status, Form, Avatar, Media, Navigation, Cards, Data Display, Layout.
3. Alt komponentte (nested instance) fark varsa revize edilmez, önce sorulur.
4. Gerektiğinde slot kullanılır. **Slot kullanılan her komponentin dokümanında o slota konabilecek bütün örnekler gösterilir.** Sisteme ilk kez giren biri, örneğin bir Input ile neler yapabileceğini dokümandan görebilmeli.
5. Slot içeriği komponentin yüksekliğini değiştirmez. İçerik, komponentin sabit yüksekliğine göre boyutlanır.
6. Border sadece bazı state'lerde varsa stroke içe hizalanır ve layout'a dahil edilmez.
7. Benzer komponentler mümkün olduğunca aynı grupta kalır.

---

## Kararlar

### Ortak kararlar

| # | Konu | Karar (2026-10-21) |
|---|---|---|
| O1 | Menu ailesi | Önerildiği gibi: tek bir **Menu** (kabuk) ve **Menu Item** (satır). Satırın sol ve sağ kısımları slot. Option (Autocomplete) ve Menu item (Dropdown) aynı komponent. Select, Tag Input önerileri, Breadcrumb "…" menüsü, Rich Text Editor menüleri ve takvimin yıl listesi bunu kullanır. Yükleniyor, Sonuç yok ve Hata halleri Menu'de. |
| O2 | Input'a slot | **Denenecek.** Input'un değer alanı ve sol/sağ kısımları slot olur. Date Field, Tag Input, Phone, Add-on, içte buton, Read-only + Copy ve File Input birer Input instance'ı olur. Slot içeriği Input'un yüksekliğini değiştirmez. Dokümanda bütün slot örnekleri gösterilir (kural 4). |
| O3 | Yazı boyu | Referanstaki 13 px'ler **`text-sm` (14 px)** olur. Sisteme yeni yazı stili eklenmez. |
| O4 | Input boyları | Net karar yok. Input, Select, Search ve Tag Input **32 / 36 / 40** boylarında kurulur. Kullanımda denenip revize verilecek. |
| O5 | Field Message | Önerildiği gibi: Helper, Error, Warning, Info ve sağda sayaç tek bir atom. Form Field bunu kullanır. Tonlar `feedback/*` token'larından. |
| O6 | Klavye odağı | Sistemdeki komponentler gibi **mavi** focus (`border/focus`). Referanstaki koyu Input kenarlığı kullanılmaz. |
| O7 | Badge / Status / Tag | **Doğru çalışan, var olan Badge ve Status Dot.** Yeni variant'lar bunların üzerine eklenir, gerektiği yerde nested component kullanılır. Eklenecekler: Badge / Count, Dot, Label · Status, Status / Select · Tag / Static, Removable, Link. **Selectable ve Operational eklenmez.** |
| O8 | Pattern'ler | Önerildiği gibi: Filter Panel, Content Sidebar ve Rich Text Editor'ün parçaları komponent olur, desenin kendisi örnek olarak kalır. Dışarıdan gelen biri için desenin nasıl kurulacağını gösteren **bir-iki kullanım örneği** de eklenir. |
| O9 | Yükseklikler | **Button: 28 / 32 / 36 / 40. Input: 32 / 36 / 40.** Ana Input 40'tan **36**'ya iner. Bütün değerler Spacing'de var (`Spacing/7`, `/8`, `/9`, `/10`). Gerekçe: tablolarda Input ile Button yan yana gelince boyları eşit olmalı. shadcn de böyle yapıyor (aşağıda). |

### Komponent kararları

| Komponent | Karar |
|---|---|
| Calendar Day | **Today**'in içinde, Today + Selected'daki gibi nokta olur. **Preview end** olmaz, aday gün Hover gibi davranır. Hücre **32×32** (referanstaki 34×32 hatalı), daire 28, yazı `text-sm`. Böylece her yöndeki boşluk eşit çalışır. |
| Calendar (A6) | Tek komponent. Başlık ve gün ızgarası sabit, **alt kısım slot**: Date'te boş, Date Range'te "Select end date" satırı, Date & Time'da Time Field + Done. |
| Calendar renkleri (A6) | Seçili gün → birincil aksiyon rengi (Primary Button zemini) · aralık bandı → `bg/subtle` · bugün halkası → `border/default` · hata → `border/danger`. |
| Time Field (A6) | Ayrı atom değil. **Small (32) Input instance'ı**, değer slotunda saat (O2). |
| Input · Success (A7) | Input'a `State=Success`: `feedback/success/border` kenarlık + sağda onay ikonu. Field Message'a Success tonu. Sadece sunucuda doğrulanan alanlarda. |
| Textarea sayacı (A7) | Limit aşılınca alan Error'a geçer, sayaç kırmızı olur. Metin kesilmez, kayıt engellenir. |
| Toolbar Button (A7) | Yeni atom değil. Icon Button'ın Ghost'una **`Active`** durumu eklenir. |
| Dropdown Trigger (A7) | Yeni durum yok. Açıkken Button'ın **`Pressed`** hali + chevron yukarı (CaretDown → CaretUp). |
| Badge / Status / Tag (A7) | Hepsi mevcut Badge boylarında: **Small 20 (`text-xs`), Medium 28 (`text-sm`).** Köşe: Badge / Label ve Tag **6 px** (mevcut), **Status pill** (`rounded-full`). |
| Number, Phone (A7) | Input instance'ı üzerine molecule. Number: − / + Icon Button'lar. Phone: sol slotta ülke kodu seçici. |
| Choice Label (A7) | Yeni komponent **kurulmaz.** Form içi kullanım: mevcut Checkbox ve Radio'ya açıklama satırı (boolean) ve zorunluluk * / ⓘ eklenir (Label'daki parçalar). Liste içi kullanım (sayı, avatar, satır hover'ı): **Menu Item**, sol slotta Checkbox/Radio, sağ slotta sayı. Checkbox List ve Radio Group Menu Item'larla kurulur. |
| Menu Item yüksekliği (A4) | Tek satırlık öğe **32 px**. Açıklamalı, avatarlı veya posterli öğeler içeriğe göre uzar (en az 32). |
| Input · Success | **Checking** olmaz. |
| Input · Floating label | **Kullanılmayacak.** Kurulmaz. |
| Breadcrumb Item | Referanstaki item **kullanılmaz.** Bizde current sayfa daha soluk, sistemdeki hiyerarşi kalır. |
| Breadcrumb · Switcher | **Kullanılmayacak.** |
| Breadcrumb "…" menüsü (S2) | **Kalır.** Switcher mantığı yok, ama "…"'ya tıklanınca gizlenen ara seviyeler bir Menu'de (O1) listelenir. |
| Rich Text Editor | **Yapıştırma bildirimi** olmaz. Altındaki **dil** ve **left to right** ibareleri olmaz. Açılan alanların (color picker vb.) iç detaylarına ayrıca revize gelecek (S3). |
| Tag | Sadece **Static, Removable, Link.** |
| Link Button (A1) | Button'a **`Variant=Link`** eklenir: zemin ve yatay iç boşluk yok, hover'da altı çizili, renk **`text/primary`**. "+N countries / Show less", "See all", "Add new person", "Clear" bununla yapılır. |
| Boy adları (A2) | Aynı ad aynı yükseklik: **XSmall 28** (sadece Button/Icon Button), **Small 32, Medium 36 (varsayılan), Large 40.** Bugünkü 28'lik Small buton XSmall olur. |
| İçte buton (A3) | 40'lık alanda 32'lik, 36'lık alanda 28'lik buton (kenardan 4 px). **32'lik Small alanda içte buton yok.** Small alanın içinde sadece ikon olur (büyüteç, ×, chevron). Buton gerekirse alanın yanına, aynı boyda (Small 32) konur. |

### O9 için shadcn araştırması

Kaynak kodu (`new-york-v4`, Ekim 2026) incelendi:
- Bütün kontroller (Button, Icon Button, Input, Select) aynı yükseklik basamaklarını kullanıyor: 24 / 32 / 36 / 40.
- Varsayılanlar eşit: Button, Input ve Select'in hepsi 36 px.
- Icon Button kare ve aynı basamaklarda.
- Yükseklik kenarlık dahil sabit.
- Input içindeki buton bir basamak küçük, köşesi alanın köşesinden küçük.
- Tablo araç çubuğu örneklerinde arama alanı ve butonlar aynı küçük boyda.

---

## Uygulama sırası

Her adımda değişecek var olan komponent önce Mücahit'e gösterilir (A5).

1. **Button, Icon Button:** 28 / 32 / 36 / 40, Link variant'ı, Ghost Active
2. **Input ailesi:**
   - Input: 32 / 36 / 40, slot'lar, Success, mavi focus
   - Select, Search, Textarea
3. **Field Message, Form Field**
4. **Menu, Menu Item**
5. **Badge / Status / Tag**
6. **Checkbox ve Radio eklemeleri**
7. **Datepicker:** Calendar Day, Calendar Header, Calendar, Date Field, Date Range Field, Time Field
8. **Kalan molecule'ler:**
   - Breadcrumb "…" menüsü
   - Upload durumları
   - File Input, Number, Phone, Tag Input, Comment Composer
9. **Organism'ler ve kullanım örnekleri:** Filter Panel, Content Sidebar, Rich Text Editor, Autocomplete
10. **Var olan komponentlerin güncellenmesi:** yeni boylar ve parçalar

## Açık konular

### A3 notu: Small alanda içte buton

**Neden 32'lik alanda içte buton olmaması sorun değil (A3 notu):** Small alanlar tablo filtreleri, pagination "Go to", toolbar ve filtre panelindeki aramada kullanılıyor. Bu yerlerin hiçbirinde alanın içinde buton yok:
- Aramadaki × ve büyüteç ikondur.
- "Go to"nun butonu alanın yanındadır.

İçte buton gerektiren alanlar (slug üret, kopyala, telefon ülke kodu) form alanları ve Medium boyda.

### A5. Var olan komponentlerin revizesi (onay gerekiyor)

Bu kararlar şu var olan komponentlerin değişmesi demek. Her biri uygulanmadan önce tek tek gösterilecek:
- **Button ve Icon Button:** yeni boylar (O9, A2), Link variant'ı (A1)
- **Input, Select, Textarea:**
  - 36 varsayılan, 32/36/40 boyları
  - slot'lar
  - mavi focus
  - Success
- **Badge, Status Dot:** yeni variant'lar (O7)
- **Breadcrumb:** "…" menüsü. Item'ın hiyerarşisi değişmez, sadece Hover ve Focused gerekip gerekmediği sorulacak.
- **Upload:** Hover, Drag over, Uploading, Uploaded, Error, Disabled
- **Form Field:** Field Message (O5), Label'da sağda meta (Optional / sayaç)
- **Bunları kullanan her şey:** Card, Pagination, Toolbar, Top Bar, Info Pair, List Item, Version Row, Card Header, Sidebar

### A8. Rich Text Editor açılır alanları (S3)

Revize gelene kadar color picker, vurgulama, görsel ekle ve tablo ekle menüleri kurulmaz.

---

## Playground'daki referans parçalar

| Frame | Parçalar |
|---|---|
| Atoms | Calendar Day, Time Field, Date Field, Label, Helper & Message, Input (+ Icon & Counter, Sizes, Success, Add-on & Inner Button, Floating Label), Search, Select, Textarea (+ Counter), Toolbar Button, Checkbox, Radio, Tag (chip), Option, Breadcrumb Item, Dropdown Trigger, Menu Item (+ Types), Badge · Status · Tag (10 main component, token'a bağlı değil) |
| Molecules | Calendar Header, Date Range Field, Field Composition, Select · Open, Read-only + Copy, Number, Phone, Comment Composer, Upload, File Input, Checkbox & Radio Label, Tag Input (+ Sizes), Country Tags & Overflow, Option · Types, Breadcrumb (+ Switcher, Status & Back, Truncation) |
| Organisms | Calendar Popover, Datepicker · Open States, Rich Text Editor (field), Media & Visual Assets, Checkbox List (filter), Radio Group, Tag Input · Suggestions, Autocomplete (Person Picker, Global Search, List States), Action Menu, Bulk Actions & Create Menu, User Menu & Language, Filter Panel (+ Added States), Content Sidebar (+ Publish Menu), Rich Text Editor (Toolbar, States, Link Flow, Menus) |

Kullanılmayacağı kararlaştırılan referans parçalar (Floating Label, Breadcrumb Item, Breadcrumb Switcher, Tag Selectable/Operational) Playground'da duruyor, kurulmayacak.

## Referanstaki davranış kuralları (Datepicker)

- Hafta Pazartesi başlar.
- Temizleme alanın içindeki × ile yapılır, ayrı Clear butonu yok.
- Date ve Date Range'te footer yok, seçim yapılınca popover kapanır. Date & Time'da tek aksiyon Done.
- Oklar sadece ayı değiştirir. Yıl, başlıktaki dropdown'dan seçilir. Min/max dışındaki yıllar listede yer almaz.
- Seçim rengi marka mavisi değil, birincil aksiyon rengi.
- Bilerek alınmayanlar: yıl/ay ızgarası, iki ay yan yana, Clear + Today butonları.
- Yayın penceresi kompozisyonu komponent değil, örnek olarak kalır (O8).
