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

1. ✅ **Button, Icon Button:** 28 / 32 / 36 / 40, Link variant'ı, Ghost Active (2026-10-21). Eski Small → XSmall olarak yeniden adlandırıldı, mevcut instance'lar 28 px kaldı. Butonlar **hug** (sarar), yükseklik sabitlenmez. 28/32/36/40, Spacing'e bağlı iç boşluklarla elde edilir (Mücahit'in kararı). Large Button 44 → 40 (Screens'te 4 instance).
2. ✅ **Input ailesi** (2026-10-21):
   - **Input:** Small 32 / Medium 36 / Large 40. **Yükseklik sabit**, Spacing'e bağlı. Mevcut 40 px'lik variant'lar Large oldu, instance'lar aynen kaldı.
     - Durumlar: Default, Hover, Focused, Filled, Error, **Success** (yeni), Disabled, Read-only.
     - Slot'lar: Leading, Content (`Show Value` kapatılınca Value'nun yerine geçer), Trailing. Her biri boolean ile açılır.
     - Yeni `Trailing Icon Swap` property'si eklendi.
   - **Select:** Aynı boylar, Leading slot.
   - **Textarea:** Kenarlık layout'tan hariç. Başka değişiklik yok.
   - **Search ayrı set değil**, Input'un kullanımı olarak dokümanda gösterilecek.
   - **Yeni token `border/success`** (Light: green/600, Dark: green/500). Input Success'te kullanılıyor. Colors dokümanı (Semantic Colors tablosu, Changelog v1.1.0, sürüm ve tarih) güncellendi, `tokens/` yeniden üretildi.
   - Focused'daki 2 px kenarlık artık içeriği kaydırmıyor.
3. ✅ **Field Message, Form Field** (2026-10-21):
   - **Field Message** (yeni):
     - Tone: Helper, Error, Warning, Info, Success
     - Property'ler: `Show Text`, `Text`, `Show Counter`, `Counter Text`
     - Sayaç tek başına da sağda durur.
   - **Label:** `Show Meta` ve `Meta Text` eklendi ("Optional" / sayaç, sağa yaslı).
   - **Form Field:**
     - Hint frame'i yerine Field Message geldi. `Hint Text` silindi, `Hint` → `Show Message` oldu. Ekranlarda Hint kullanan instance yoktu.
     - Label, Control ve Message nested instance olarak dışarı açıldı (boy, durum ve ton Form Field'dan ayarlanır).
4. ✅ **Menu ailesi** (2026-10-21, Component Sets → Navigation grubu):
   - **Menu/Item**
     - Durumlar: Default, Hover, Focused, Selected (✓ + medium yazı), Disabled. Destructive (Default, Hover, Focused).
     - Label, Description, Leading Icon / Leading slot, Trailing Text (kısayol / sayı), Submenu ›, Trailing slot.
     - Tek satır 32 px.
   - **Menu**
     - `bg/raised`, `border/default`, `rounded-lg`, `shadow-lg`.
     - Items slotu.
     - Durumlar: Default, Loading (iskelet), No Results, Error (Link "Try again"), Hint (min. karakter).
   - **Menu/Group Label**, **Menu/Separator**
5. ✅ **Badge / Status / Tag** (2026-10-21, Badges & Status grubu):
   - **Badge:** Strong tonu eklendi (`bg/inverse`).
   - **Badge/Count:** Yeni, tam yuvarlak, 4 ton.
   - **Badge/Dot:** Yeni, 6/8 px, 6 ton.
   - **Status:** Yeni, pill. Noktası nested Badge/Dot.
   - **Status/Select:** Yeni, chevron'lu. Hover zemini `feedback/*/border`.
   - **Tag:** Yeni tek set. Static, Removable, Link × Small/Medium × durumlar.
   - **Status Dot:** Değişmedi.
6. ✅ **Checkbox ve Radio** (2026-10-22):
   - `Required` (*), `Help` (ⓘ), `Show Description` ve `Description` eklendi.
   - Yapı: Main satırı (kontrol + etiket) ve kontrolün hizasından içeride başlayan açıklama satırı.
   - Ekranlardaki 71 yazısız instance 16×16 kaldı.
7. ✅ **Datepicker** (2026-10-22, Form grubu):
   - **Calendar/Day:** 32×32, 12 durum. Today noktalı, aralık bandı var, Preview end yok.
   - **Calendar/Header:** Ghost XSmall Icon Button'lar ve Ghost XSmall yıl butonu, nested ve dışarı açık.
   - **Calendar:**
     - Tipler: Date, Date Range, Date & Time.
     - Pazartesi başlar.
     - Footer slot: Date'te yok, Date Range'te "Select end date", Date & Time'da Small Input (saat), GMT+3 ve Done.
   - **Date Range Field:** İki Form Field (dışarı açık) ve ok.
   - **Date Field ve Time Field ayrı set değil:** Input instance'ı olarak kullanılır, örnekleri dokümantasyonda.
8. ✅ **Kalan molecule'ler** (2026-10-22):
   - **Breadcrumb/Item:** Focused ve Collapsed ("…" Ghost Icon Button) eklendi.
   - **Breadcrumb:** Content=Collapsed eklendi, `Show Back` ve `Show Status` eklendi.
   - **Upload:** Drag Over, Uploading (Progress Bar + Cancel) ve Uploaded (Thumbnail + Replace/Remove) eklendi. Hepsi en az 124 px. `File Name` ve `File Meta` property'leri var.
   - **Yeni komponentler** (Form grubu): Number Stepper, Phone Field, Tag Input (Small/Medium, sarar ve uzar), Comment Composer.
   - **File Input ve Read-only + Copy ayrı set değil:** Input instance'ı olarak kullanılır, dokümantasyonda gösterilecek.
9. ✅ **Organism parçaları** (2026-10-22, Form grubu):
   - **Rich Text Editor/Toolbar:** Ghost XSmall Icon Button'lar, hepsi dışarı açık.
   - **Rich Text Editor:**
     - Durumlar: Empty, Focused (Bold Active), Limit Warning, Limit Exceeded, Read-only (toolbar yok).
     - Content slot ve durum satırı.
   - **Filter Group:** Expanded/Collapsed. Başlık, Badge/Count, Clear (Link), chevron, Small arama ve Options slot (Menu/Item + Checkbox + sayı).
   - **Content Sidebar komponent olmayacak** (tek ekranda kullanılıyor). Mevcut parçalarla kurulabiliyor: Tabs, Badge/Count, Status, Field Message, Button, Menu, Info Pair. Eksik tek parça: **Split Button** (Publish ▾), bkz. A10.
10. ✅ **Var olan komponentlerin ve ekranların geçişi** (2026-10-22):
   - **Split Button** (yeni, Buttons grubu): Button ve Icon Button, aralarında 1 px boşluk.
   - **Button içindeki sayaç** Badge → Badge/Count (100 parça).
   - **Durum etiketleri:** 205 Badge → Status (Draft → Warning, Published → Success, Unpublished → Neutral, Going live / Coming down → Info). "Current", "Lisans Yenileme" ve "Unpublish Notu" Badge olarak kaldı.
   - **Input ve Select:** Large (40) → Medium (36), ekranlarda ve Form Field'da.
   - **Toolbar ve Pagination:** Input, Button ve Pagination/Item Small (32), yan yana eşit.
11. ✅ **Reference vs DS frame'i** (Playground, Doc Kit'in sağında):
   - 66 satır. Her satırda solda referansın kopyası, sağda sistemle kurulmuş hali, altında İngilizce notlar.
   - Kurulmayanlar gerekçesiyle "Not built" diye işaretli.
12. ✅ **Dokümantasyon örnekleri ve notlar:** 11. adımla birleştirildi, aynı örnekler iki yerde tekrar etmesin diye. Atoms'taki ilk örnek satırı bu frame'e taşındı.

## Dokümantasyon notları

**Kural: Her referans bölümünün yanında "Built with DS components" satırı olur.** Playground'daki her referans parçanın altında, aynı örneklerin sistemin komponentleriyle (instance + slot) kurulmuş hali durur. Böylece referanstaki her şeyin sistemle üretilebildiği görülür.

**Ne zaman:** Bütün komponentler bittikten sonra, en sonda (uygulama sırası 11. adım). Komponentler kurulurken örnek satırı kurulmaz.

**Biçim örneği:** Atoms → Input · Add-on & Inner Button altındaki "Built with DS components" satırı. Diğerleri bu biçimle kurulur.

Playground'daki referans parçalar (Atoms / Molecules / Organisms) dokümantasyonda **kullanım örneği** olarak kullanılacak. Komponent kurulurken fark edilen ve dokümana yazılması gereken notlar:

- **Input · içte buton:** Buton alt ve üst kenara 4 px, sağ kenara 12 px uzak. Bunun nedeni Input'un sabit yan boşluğu. Bilinçli olarak böyle bırakıldı, dokümanda örnekle gösterilecek.
- **Input · Content slot:** `Show Value` kapatılıp `Custom Content` açılınca Value'nun yerine geçer. Dokümanda örnekler: Tag chip'leri, iki tonlu tarih, saat, dosya adı.
- **Input · Small (32):** İçinde buton yok, sadece ikon. Buton gerekiyorsa alanın yanına Small (32) buton konur.
- **Search:** Ayrı komponent değil. Leading'de büyüteç, Trailing'de × olan Input. Dokümanda Default ve Small örnekleriyle gösterilecek.
- **Success:** Sadece sunucuda doğrulanan alanlarda (slug, Content ID). Sıradan dolu alanlar yeşil olmaz.

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

### A10. Split Button ✅

Karar (b): ayrı bir Split Button komponenti. Kuruldu.

### Karşılaştırmada çıkan revize konuları (Reference vs DS)

- ~~Textarea sayacı Error'da hâlâ gri.~~ ✅ Revize turu 1'de düzeltildi.
- Filter Group başlığının hover hali yok.
- ~~İkon setinde bayrak yok.~~ ✅ 2026-10-27'de circle-flags eklendi.
- ~~Calendar: Range Preview ve In Range bantları neredeyse aynı tonda.~~ ✅ Range Preview kaldırıldı.
- ~~Status/Select hover'ı bazı tonlarda fazla doygun.~~ ✅ Revize turu 2'de düzeltildi.
- ~~Input prefix'inin gri kutu görünümü (A9).~~ ✅ Add-on yapısı kuruldu (Revize turu 1).
- Rich Text Editor'ün renk, vurgu, görsel ve tablo menüleri (S3) revize bekliyor.

### A9. Input prefix (add-on) görünümü

Referansta prefix'in kenara kadar uzanan gri bir kutusu ve ayırıcı çizgisi var. Bizim Input'ta prefix, Leading slotunda gri yazı olarak duruyor. Seçenekler:
- (a) Böyle kalsın.
- (b) Input'a kenara uzanan ayrı bir Add-on yapısı eklensin. Bu, Input'un bir kez daha revizesi demek.

Dokümantasyon aşamasında karar verilecek.

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

---

## Revize turu 1 (2026-10-26, Mücahit ve ekip, Reference vs DS üzerinden)

Revizeler sistemdeki gerçek komponentlere uygulanır. Bitince "Reference vs DS" frame'inin yanına revize edilmiş hallerle yeni bir karşılaştırma frame'i konur.

### Net kararlar (doğrudan uygulanacak)

| Komponent | Karar |
|---|---|
| Field Message | Her tonda açılıp kapanan **sol ve sağ ikon** (Helper dahil). |
| Textarea | Error'da sayaç da kırmızı olur, kenarlıkla birlikte. |
| **Tooltip** (yeni) | Sistemde yok, kurulacak. Toolbar butonları ve Copy ("Copied") gibi yerlerde kullanılacak. |
| Checkbox, Radio | **Sadece kontrolün kendisi.** Etiket, Required, Help ve Description kaldırılır. Etiketli kullanım = Label + Checkbox/Radio, elle bir araya getirilir. |
| Label | Altına açıklama (Description) satırı eklenebilmeli. Checkbox/Radio yanında kullanım için. |
| Calendar Day | Today'de çerçeve (stroke) yok, sadece nokta. **Range Preview kaldırılır.** |
| Calendar | **Date Range tipi kaldırılır.** Date & Time footer'ının auto layout'u düzeltilecek. |
| Date Range Field | **Komponent silinir.** İki Input yan yana, elle kurulur. |
| Comment Composer | **Komponent silinir** (şimdilik yok). |
| Upload | Dokunulmaz. Mücahit elle düzenleyecek, sonra geri bildirim verecek. |
| Input · Inner button | İçte Secondary buton kullanılmaz. |
| Input · Prefix | Mücahit'in Figma'da hazırladığı "input from me" örneği esas alınır: prefix'in kendi zemini ve padding'i olan hali. Phone'daki ülke kodu da aynı yapıyla. Dokümanda gösterilecek. |
| File Input | Filled halinde × (temizle) ikonu da olur, dokümanda gösterilir. |
| Option · Types | Aramada eşleşen kısım kalın gösterilir ("Alice Hari" → **Alice Hari**kalar Diyarında). Komponent özelliği değil, dokümanda örnekle gösterilir. |
| Breadcrumb | **Show Status kaldırılır.** Back butonu Secondary olur ve item'lardan daha uzakta durur. |
| Breadcrumb · Truncation | "Collapse · open" örneğinde "…" butonu Hover halinde gösterilir (Mücahit elle düzeltti). |
| Rich Text Editor | Read-only'de araç çubuğu görünür ama butonlar Disabled. Warning sarısı okunmuyor, düzeltilecek. |
| Radio Group | Seçili satırda ✓ gerekmez (radio zaten seçili). Seçili satır zemini ile içindeki Badge aynı tonda, ayrışmalı. |
| Autocomplete · Error | Hata durumu hata gibi görünmüyor, UX olarak iyileştirilecek. |
| Action Menu | Dokümanda iç içe açılan menü (alt menü) örneği gösterilecek. |
| Menu/Item | Slot içine konunca yüksekliği **hug** olmalı (şu an 32'de sabit kalıyor). |
| Content Sidebar | Karşılaştırmadan çıkarılır (komponent değil). |
| Filter Group | **Netleşmedi.** Açık/kapalı halini görmek gerekiyor. Şimdilik duruyor. |

### Konuşulanlar ve kararlar (2026-10-26)

| # | Konu | Karar |
|---|---|---|
| R1 | Yazı renkleri | Light: text/secondary neutral/700 → **neutral/600**, text/tertiary neutral/600 → **neutral/500**. Dark aynı. Test edilecek. |
| R2 | Focus | **Input ailesi** (Input, Select, Textarea, Tag Input, Rich Text Editor) Focused kenarlığı **`border/selected`** (siyah). Button, Checkbox, Menu gibi klavye odak halkaları **mavi kalır** (erişilebilirlik). |
| R3 | Input Hover | **Kaldırıldı** (Input, Select, Textarea, Tag Input). |
| R4 | Label soluk hali | Label'a **`Emphasis = Default / Subtle`** (Subtle = text/secondary). Elle renk değiştirilmez. |
| R5 | Benzer zemin çakışması | `bg/interactive/hover`, `pressed`, `selected` **yarı saydam** (Light siyah %5 / %10 / %7, Dark beyaz %6 / %12 / %9). **Disabled = komponentin kendi görünümü + `Opacity/opacity-50`.** |
| R6 | Calendar Header | Ay ve yıl, sağında ok olan **Link butonlar**. Yan boşluk yok, başlık simetrik. Her biri bir Menu açar. |
| — | İçte buton | **Primary** XSmall. |
| — | Radio Group | `Show Check` eklenmedi. Menu/Item Selected'daki gömülü ✓ kaldırıldı, gerektiğinde Trailing slota ✓ konur. |

### Uygulananlar (2026-10-26)

- **Token'lar:** R1 ve R5 uygulandı, `Opacity/opacity-50` eklendi.
  - Üretici script'i opaklığı ve yarı saydam renkleri (`rgb(0 0 0 / 0.05)`) destekliyor.
  - `rules/core/token-isimlendirme.md` v3 oldu (madde 10–11).
  - Colors dokümanı v1.2.0 oldu, `tokens/` yeniden üretildi.
- **Button ve Icon Button:**
  - Link'in Hover ve Pressed alt çizgisi geri geldi. Alt çizgi yazı ayarı değil, 1 px alt çizgi katmanı.
  - Disabled %50 opak. Boylar kontrol edildi (hug, 28/32/36/40).
- **Input ailesi:** Hover kaldırıldı, focus siyah, Disabled %50 opak. Textarea'da Error'da sayaç kırmızı.
- **Label:** Emphasis (Subtle) ve Description eklendi.
- **Field Message:** Her tonda açılıp kapanan sol ikon ve swap'lanabilir sağ ikon.
- **Checkbox ve Radio:** Sadece kontrol. Etiketli kullanım = Label + kontrol.
- **Tooltip** (yeni, Layout grubu): Top / Bottom / Left / Right, Text, Shortcut.
- **Datepicker:**
  - Today çerçevesiz. Range Preview ve Calendar · Date Range silindi.
  - Date & Time footer'ı düzeltildi.
  - Header'da ay ve yıl Link butonlar.
- **Silinen komponentler:** Date Range Field, Comment Composer.
- **Breadcrumb:** Show Status kaldırıldı. Back Secondary, item'lardan 16 px uzakta.
- **Rich Text Editor:** Focus siyah, Read-only'de pasif araç çubuğu, Warning ve Exceeded'de ikon.
- **Menu ve Menu/Item:**
  - Menu/Item hug (içerikle uzar), Selected'da ✓ yok.
  - Menu Error durumu: ikon, başlık, açıklama ve "Try again" Secondary.
  - Aynı sabit yükseklik hatası Field Message, Group Label ve editör toolbar'ında da düzeltildi.
- **Phone Field:** Prefix add-on yapısı (gri kutu + ayırıcı).
- **Reference vs DS · Revised:**
  - Eski frame'in sağında, 61 satır, revize edilmiş halleriyle.
  - Dokümantasyon örnekleri dahil: prefix/suffix add-on, Primary iç buton, Label + Checkbox birleşimleri, kalın eşleşme, iç içe menü, Hover'daki "…", × ikonlu File Input.
  - Content Sidebar çıkarıldı.
  - Not: Eski "Reference vs DS" frame'i canlı instance'lardan oluştuğu için o da revizelerle güncellendi. Silinen komponentlerin yerleri orada boş.

### Hâlâ açık

- **Upload:** Mücahit elle düzenleyecek.
- **Filter Group:** Komponent mi kalsın, elle mi kurulsun? Netleşmedi.
- **Rich Text Editor menüleri (S3):** Renk, vurgu, görsel ve tablo menüleri.
- ~~İkon setinde bayrak yok.~~ ✅ 2026-10-27: circle-flags (MIT) eklendi. 265 bayrak, `Flag/<kod>` komponentleri Icons sayfasında. Phone Field ve ülke etiketleri bayrak kullanıyor. Icons Overview'da iki paketin kaynağı yazıyor, Changelog v1.1.0 var. (Ayrı lisans frame'i Mücahit'in isteğiyle kaldırıldı.)
- ~~**R1 testi:** Yeni yazı renkleri ekranlarda değerlendirilecek.~~ ✅ Revize turu 2'de tertiary soluklaştırıldı.
- **Soft buton adı:** Gri dolgulu yeni varyantın adı şimdilik `Soft`. İstenirse değiştirilebilir.
- **Avatar renkleri:** Blue / Purple / Green / Orange ham hex. Dark modda açık pastel kalıyor. Token'a bağlanması için karar gerekiyor. (2026-11-02: sonraya bırakıldı.)
- **Tertiary kontrastı:** neutral/400 beyaz zeminde 2.6:1. Placeholder ve yardımcı metin için bilerek seçildi. Tab/Underline'ın seçili olmayan sekmeleri de tertiary; okunurluk ekranda bakılacak.

### Revize turu 2 (2026-10-27) ✅

- Metin renkleri: tertiary Light neutral/400, Dark neutral/500. Secondary Dark neutral/400. Label Subtle → tertiary.
- Input ailesi: siyah focus 1 px, Read-only bg/base + border/default, clip content. Inner button: yan padding = üst/alt boşluk.
- Yeni token'lar: `border/warning`, `action/soft/*`. Button ve Icon Button'a `Soft` varyantı. File Input "Choose file" Soft.
- `bg/interactive/selected` açıldı (Light %4, Dark %6). Radio Group'ta Current badge Strong.
- Dark mode taraması: Status/Select hover kontrastı düzeltildi.
- Date Picker'a dokunulmadı (Mücahit elle revize ediyor).
