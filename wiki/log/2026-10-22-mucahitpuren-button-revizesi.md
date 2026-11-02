---
date: 2026-10-22
author: "@mucahitpuren"
branch: mucahitpuren/button-revizesi
---

# Komponent revizesi: uygulama (adım 1–12)

Kararlar ve ayrıntılar: `wiki/raporlar/2026-10-20-komponent-revize-plani.md`. Bütün iş Figma'da, Playground sayfasında.

## Ne yapıldı?
- **Button ve Icon Button:**
  - Boylar: 28 / 32 / 36 / 40 (XSmall, Small, Medium, Large). Hug yapı korundu, boylar padding ile elde ediliyor.
  - Button'a Link variant'ı, Icon Button'a Ghost Active durumu eklendi.
  - Yeni Split Button.
- **Input ailesi:**
  - Input ve Select: 32 / 36 / 40, yükseklik sabit.
  - Input'a slot'lar (Leading, Content, Trailing) ve Success durumu.
  - Yeni token `border/success`. Colors dokümanı v1.1.0 olarak güncellendi, `tokens/` yeniden üretildi.
- **Field Message** (yeni). Label'a meta, Form Field'a Field Message eklendi, iç parçalar dışarı açıldı.
- **Menu ailesi:** Menu, Menu/Item, Menu/Group Label, Menu/Separator.
- **Badge ailesi:**
  - Badge'e Strong tonu.
  - Yeni: Badge/Count, Badge/Dot, Status, Status/Select, Tag.
- **Checkbox ve Radio:** Required, Help ve Description eklendi.
- **Datepicker:** Calendar/Day, Calendar/Header, Calendar, Date Range Field.
- **Kalan molecule'ler:**
  - Breadcrumb'a "…" (Collapsed), Back ve Status eklendi.
  - Upload'a Drag Over, Uploading ve Uploaded eklendi.
  - Yeni: Number Stepper, Phone Field, Tag Input, Comment Composer.
- **Organism parçaları:** Rich Text Editor (+ Toolbar), Filter Group.
- **Geçiş:**
  - Button sayacı → Badge/Count.
  - 205 durum etiketi → Status.
  - Input ve Select 40 → 36.
  - Toolbar ve Pagination 32'ye eşitlendi.
- **Reference vs DS frame'i:** 66 satır, referans ve sistemle kurulmuş hali yan yana, altında notlar.

## Alınan kararlar
- **Butonlar:** Hug kalır, yükseklik sabitlenmez.
- **Input:** Yükseklik sabittir, slot içeriği boyu değiştirmez.
- **Ayrı set olmayanlar:** Search, Date Field, Time Field, File Input, Read-only + Copy. Hepsi Input instance'ı.
- **Content Sidebar:** Komponent olmaz, tek ekranda kullanılıyor. Mevcut parçalarla kurulabiliyor.
- **Dokümantasyon örnekleri:** Karşılaştırma frame'iyle birleştirildi.
- **Komponent içi frame'ler:** clipsContent kapalı olmalı, yoksa focus halkası kesiliyor.

## Açık sorular
- Revize planındaki "Karşılaştırmada çıkan revize konuları" listesi: Textarea sayacı rengi, Filter Group hover, bayrak ikonları, Range Preview tonu, Status/Select hover, prefix kutusu, RTE menüleri.

## Sıradaki adım
- Mücahit "Reference vs DS" frame'i üzerinden revize verecek.

## Güncelleme: Revize turu 1 (2026-10-26)
- Mücahit ve ekip "Reference vs DS" üzerinden revize verdi. Kararlar ve uygulananlar revize planında: "Revize turu 1".
- **Token'lar:**
  - Light'ta yazı renkleri bir ton açıldı.
  - Hover, pressed ve selected yarı saydam oldu.
  - Disabled artık %50 opaklık (`Opacity/opacity-50`).
  - Üretici ve `token-isimlendirme` kuralı (v3) buna göre güncellendi.
- **Komponentler:**
  - Input ailesinde Hover kaldırıldı, focus siyah.
  - Label'a Subtle eklendi.
  - Field Message'a ikonlar eklendi.
  - Checkbox ve Radio sadece kontrol oldu.
  - Yeni Tooltip.
  - Datepicker sadeleşti.
  - Date Range Field ve Comment Composer silindi.
  - Breadcrumb, Rich Text Editor, Menu ve Phone Field revize edildi.
- **Yeni frame:** "Reference vs DS · Revised" (61 satır).
- **Ders:** Ortak TEXT property'sine bağlı variant'larda yazı stili değiştirmek bütün variant'lara yayılıyor. Button etiketleri bu yüzden bozuldu ve onarıldı.
- **Sıradaki adım:** Mücahit yeni frame'i ve yazı renklerini değerlendirecek. Açık konular: Upload, Filter Group, RTE menüleri, bayraklar.

## Güncelleme: Bayraklar ve düzeltmeler (2026-10-27)
- **Ana komponentlerde siyah görünen renkler:** Renk bağlarken yedek renk siyah kalmıştı. Component Sets'te 100 yerde yedek, token'ın gerçek değeriyle değiştirildi.
- **Bayraklar:**
  - circle-flags (HatScripts, MIT, commit 379588b) eklendi: 265 ülke bayrağı, her biri `Flag/<ISO kodu>` komponenti.
  - Icons sayfasında, Flags frame'inde duruyor.
  - SVG'ler Figma upload aracıyla olduğu gibi aktarıldı.
- **Icons dokümanı:**
  - Yeni Sources & Licenses frame'i: Phosphor (MIT) ve circle-flags (MIT) için kaynak, lisans, sürüm, adlandırma ve kullanım kuralları.
  - Overview güncellendi, Changelog'a v1.1.0 eklendi.
- **Bayrakların kullanımı:** Phone Field ve ülke Tag'leri bayrak kullanıyor.
  - Bayrak içindeki katmanlar `Flag Mask` ve `Flag Shape` olarak adlandırıldı. Yoksa ikon yuvalarının "Vector" boyaması maskeyi griye çevirip bayrağı soluklaştırıyordu.
- **Link butonlar ve UI kütüphaneleri:** shadcn, Chakra ve Ant'ta Link butonu buton boyunu koruyor. Radix, MUI ve Carbon'da ayrı bir metin Link komponenti var. Öneri: Button · Link kalsın, ayrıca boşluksuz bir Link komponenti eklensin. Mücahit'in kararı bekleniyor.

- Icons sayfası: Flags ve Icons frame'leri doküman frame düzenine alındı (Doc Header, başlık, açıklama, token'lı arka plan/kenarlık/boşluk). Komponentlere dokunulmadı; Icons kategorileri "Categories" adlı iç frame'e taşındı.

## 2026-10-27 · Revize turu 2

- Metin renkleri: `text/tertiary` Light neutral/400, Dark neutral/500 (daha soluk); `text/secondary` Dark neutral/400. Label Subtle → text/tertiary.
- Input ailesi (Input, Select, Textarea, Tag Input, Rich Text Editor): siyah focus kenarlığı 2 px → 1 px; Read-only dolgu bg/base + border/default; içerik köşeye göre kırpılıyor (clip content). Phone Field bundan faydalandı.
- Yeni token'lar: `border/warning` (yellow/600 | yellow/500), `action/soft/default|hover|pressed` (neutral 100/200/300 | 800/700/600). RTE Limit Warning artık border/warning.
- Button ve Icon Button'a `Variant=Soft` (gri dolgulu) eklendi. File Input "Choose file" Soft oldu.
- Inner button kuralı: butonlu input'ta yan padding = butonun üst/alt boşluğu (Medium 36 + XSmall 28 → 4 px).
- `bg/interactive/selected` Light %4, Dark %6 (açıldı). Radio Group'ta Current badge Strong tonda.
- Dark mode testi: kontrast taraması yapıldı. Tek gerçek sorun Status/Select hover'dı (danger metni zeminle düşük kontrast); hover artık ton zemini + bg/interactive/hover. Avatar renkli varyantları ham hex, dark'ta açık pastel kalıyor (karar bekliyor).
- Date Picker'a dokunulmadı (Mücahit elle revize edecek).

## 2026-10-27 · Komponentler kendi sayfalarına taşındı

- Denetim: referans karşılaştırma frame'lerinde ve Screens'te kullanılan bütün DS instance'larının ana komponenti Component Sets'teydi. Dışarıda kalanlar bilinçli: referans kopyaları (Playground > Atoms), ikonlar (Icons sayfası), silinmiş komponentlerin eski frame'deki 3 instance'ı (Calendar/Date Range, Date Range Field, Comment Composer).
- Yeniden gruplama: Progress Bar ve Trend → Data Display. Menu ailesi ve Tooltip ayrı sayfalar oldu. İlk denemede Menu + Tooltip (Overlays) ve Avatar + Media birleştirilmişti; Mücahit amaçları farklı olduğu için geri ayırttı. **Kural: gruplar boyuta göre değil, komponentin amacına göre kurulur; küçük grup sorun değil.**
- Components bölümünün altına 11 sayfa açıldı: Buttons, Badges & Status, Form, Menu, Tooltip, Navigation, Avatar, Media, Cards, Data Display, Layout. 68 komponent seti taşındı, 5.980 instance bağlı kaldı. Dokümantasyon yapılmadı.
- Playground'daki Component Sets frame'inde sadece başlık kaldı.

## 2026-10-27 · Revize turu 3

- Input, Select, Textarea, Tag Input Disabled: zemin bg/disabled; saydamlık artık kutunun kendisinde değil, içerikte (metin, ikon, slot %50). Default'tan ve Read-only'den ayrışıyor.
- Nötr pill bir ton koyulaştı: `feedback/neutral/bg` neutral/200 | neutral/700, `feedback/neutral/border` 300 | 600, `feedback/neutral/dot` 500 | 400. Etkilenenler sadece rozet tipi parçalar (Badge, Badge/Count, Status, Status/Select, Filter Group ve Version Row sayaçları, Button Count).
- Radio Group'ta Current badge tekrar Neutral (Strong istenmedi).
- Dark mode: düzenlenen komponentler bakıldı; Disabled zemini koyu modda Default'tan açık, Read-only'den farklı; Version Row'da seçili satırda badge ayrışıyor.

- Soft buton bir ton koyulaştı: `action/soft` default/hover/pressed = neutral 200/300/400 (Dark 700/600/500). Disabled File Input'ta buton artık gri zeminden ayrışıyor. Yazı kontrastı tüm hallerde 4.5 üstü.
- Soft koyulaştırma geri alındı (100/200/300 | 800/700/600). Yerine: Soft Disabled zemini action/soft/hover; input Disabled hallerinde Leading/Trailing slot artık soluklaştırılmıyor, içindeki buton kendi Disabled haline alınıyor (çift saydamlık olmasın). Revize frame'inde Phone ve File Input disabled örneklerinde buton Disabled yapıldı.

## 2026-10-27 · Referans ekranlar DS ile kuruldu

- Playground'da "Referans Ekranlar · DS" section'ı: Overview, Shows, Create Show; Desktop 1440 / Tablet 768 / Mobile 375; her biri Light ve Dark (Dark = aynı frame'in Themes Dark modlu kopyası). Eski "Screens" frame'ine dokunulmadı (Mücahit: eskileri kopyalama, referanstan kur).
- Komponent hataları (ekranda override ile geçildi, düzeltme onay bekliyor):
  1. Nav/Item Selected: "Icon Active" katmanı property'ye bağlı değil, seçili öğe hep Stack ikonu gösteriyor.
  2. Trend Negative: varsayılan ikon TrendUp (TrendDown olmalı).
  3. Button Primary: varsayılan ikon instance'ında "Vector" katmanı yok; ikon değiştirilince beyaz renk override'ı taşınmıyor, ikon görünmüyor.
  4. Thumbnail Image varyantı görsel taşımıyor (düz dolgu); poster görselleri instance'a override edildi.
- Eksikler: tabii kaynak ikonu (Status / tabii), tablo başlığında sütun ayırıcı, sağ yan panel (docked panel), bölüm etiketi (BÜYÜK HARF etiket + çizgi), mobil tablo satırı, iki satırlı eşit ağırlıklı hücre, Page Header Mobile'da eyebrow yok, Tabs taşma/scroll davranışı, Avatar renkli varyantlar ham hex.
- Mücahit düzeni değiştirdi: Playground'daki "Screens" frame'i ve "Referans Ekranlar" section'ı silindi. Yerine Overview, Shows ve Create Show adında 3 section var; her birinde referans ekran, v1 (ilk oturumdaki eski ekran) ve v2 (bu oturumda DS ile kurulan) yan yana. Tablet ve mobilde referans yok, sadece v1 ve v2.

## 2026-10-28 · Komponent hataları ve Icons sayfası

- Bütün komponent setleri tarandı (varyantlar arası kopuk property bağlantısı). Düzeltilen: Nav/Item Selected ikon katmanı "Leading Icon" adıyla Leading Icon (aç/kapa) ve Icon Active (ikon) property'lerine bağlandı; Tag Input'ta gizli Value katmanları Placeholder'a bağlandı. Upload'daki bağsız metinlere dokunulmadı (Mücahit elle revize ediyor). Kalan farklar tip varyantlarından (Table/Cell tipleri, Menu durumları vb.), tasarım gereği.
- Trend: set'e bağlı tek Icon property'si kaldırıldı; Positive TrendUp, Negative TrendDown, Neutral Minus.
- Button Primary ikon rengi: komponentte hata yok. Hata, ekran kurarken ikonu açma ve değiştirmeyi tek setProperties çağrısında yapmaktan çıkıyordu.
- Icons sayfası v1.2.0: Custom Icons frame'i doküman düzenine alındı (tabiiIcon), Phosphor Icons başlığı, Overview kaynakları ve Changelog güncellendi.
- Table/Header Cell ve Table/Row Header: zemin beyaz (bg/surface), Hover/Selected üstüne katman. Header Cell'e `Divider` boolean'ı eklendi.
- Page Header: `Show Title`, `Show Actions` eklendi; Meta → Description, Show Meta → Show Description.
- V2 ekranlarında: Create Show panel başlıkları Label Subtle, Overview tablo başlıklarında Divider açık.
- Playground section'larında (Overview, Shows, Create Show) sadece açık tema V1/V2 var; koyu tema kopyaları yeni düzende yok.
- Table/Row elden geçirildi: renk ve çizgi satırın işi, hücreler şeffaf. Header Cell'de yalnızca Hover'da sütun katmanı (bg/interactive/hover). Satır zeminleri: Header/Body bg/surface, Group bg/subtle; Hover/Selected bunun üstüne katman. Bütün satır alt çizgileri border/default (Body önce border/subtle idi, görünmüyordu).
- V2 ekranlarında "On tabii / Not on tabii" rozetleri Badge + tabiiIcon oldu (Success / Neutral).

## 2026-11-02 · Primitive renk değişikliği kontrolü

- Mücahit Figma'da iki primitive'i değiştirdi: neutral/200 #E5E5E5 → #E8E8E8, neutral/800 #262626 → #212121. Değişken adı, sayısı (152 + 58) ve tema eşleşmeleri aynı; kırık bağlantı yok.
- Repo: tokens/figma-ham.json güncellendi, token'lar yeniden üretildi.
- Colors sayfası v1.3.0: Primitives hex yazıları; Semantic Colors tablosu 26 Ekim'den beri yapılan değişikliklerle eşlendi (text/secondary·tertiary, selected %4/%6, feedback/neutral, kullanım metinleri) ve 4 eksik satır eklendi (border/warning, action/soft ×3) → 58 satır; Changelog v1.3.0.

## 2026-11-02 · Sistem taraması ve PR öncesi kararlar

- 11 komponent sayfasında 68 set tarandı (bağlanmamış renk, açıklama, kırık instance, yazı stili). Sadece Avatar (ve onu kullanan List Item) ham hex kullanıyor.
- `NOW.md` güncel sayfa düzenine göre yenilendi. Revize planında çözülmüş beş madde ✅ işaretlendi.
- Mücahit'in kararları:
  - "💡 Status / Badge / Tag" sayfası ekip tarafından elle kurulan bir deneme alanı. Taşınmaz, dokunulmaz.
  - Avatar renkleri sonraya kaldı.
  - Documentation Draft, Badge ve Input sayfalarındaki kopyalar iş bitince toplu temizlikte ele alınacak.
  - Layout Grid şimdilik boş kalır.
  - Playground'daki tek başına duran V2 frame'i ekibin denemesi. Dokunulmadı.
  - Koyu tema kopyaları gerekmez, frame üzerinden Appearance ile kontrol ediliyor.
  - tabii ikonunun rengi sorun değil.
