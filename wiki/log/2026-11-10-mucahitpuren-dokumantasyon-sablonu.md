---
date: 2026-11-10
author: "@mucahitpuren"
branch: mucahitpuren/dokumantasyon-sablonu
---

# Komponent revizeleri (devam) ve dokümantasyon şablonu

PR #7'den sonraki iş: komponent revizeleri, token bağlamaları, isimlendirme, doküman şablonu ve ilk üç sayfanın dokümanı.

## Ne yapıldı?
- Doküman şablonu ve akışı: `rules/core/dokumantasyon/sablon.md`, `frame-duzeni.md` v2, `workflows/dokuman.md`, KOMUTLAR'a `dokuman: <sayfa>`.
- Figma'da dokümante edilen sayfalar: `↪︎ Input`, `🔘 Buttons`, `🏷️ Badges & Status`. Kimlik kartları `components/*/spec.md` (9 komponent).
- Komponent adlarından eğik çizgi kaldırıldı (13 set), eksik token bağlamaları yapıldı, Nav Item ikonları 20 px.
- Storybook ve video rafa kalktı; çalışan örnekler Figma Make ile dokümanın Interaction frame'ine gömülecek.

## Alınan kararlar
- Doküman komponentin kendi sayfasında; ana set Component Sets tablosunda — Mücahit, 2026-11-10.
- Frame sırası: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties; Do/Don't yok — Mücahit.
- Kart önizlemeleri: dolgu gizli, `border/default` çizgi; Examples'ta instance gerçek genişlikte — Mücahit'in düzeltmesi.
- Component Sets sütunları doğal sırada (Small → Medium → Large); dokümandaki varsayılan ekibin kararı (Input: Medium) — Mücahit.

## Açık sorular
- Button, Icon Button, Split Button, Status ve Tag için ekip varsayılan boyutu (Figma şu an XSmall / Small).
- Dokümanlarda koyu mod kontrolü yapılmadı.
- Repodaki `tokens/` Figma'nın gerisinde: `figma senkron` çalıştırılmalı.

## Sıradaki adım
- `dokuman: <sayfa>` ile kalan sayfalar (Form alt sayfaları, Menu, Tooltip, Navigation, Avatar, Media, Cards, Data Display).
- Top Bar, File Upload ve Rich Text Editor eksiklerinin tamamlanması.

## Ayrıntılı kayıt
## 2026-11-03 · Checkbox ve Radio ton revizesi

Playground'daki referans "Checkbox input" setinin ton mantığı bizim token'larla uygulandı (renk mavi değil, sistemdeki gibi):
- Seçili olmayan hal: zemin `bg/base`, kenarlık `border/default` (eskiden `bg/surface` + koyu `border/control`). Input'un Read-only haliyle aynı ton.
- Hover: zemin `bg/subtle`, kenarlık `border/strong`.
- Radio seçili: zemin `bg/base`, kenarlık `border/selected`, nokta değişmedi. Hover'da zemin `bg/subtle`.
- Checkbox'ın işaretli halleri, Focused (mavi halka) ve Disabled (%50 opaklık) kuralı değişmedi.
- Not: Yumuşak kenarlık beyaz zeminde 3:1 kontrast şartını karşılamıyor (referansta da öyle). Bilinçli tercih.

### 2026-11-03 · Komponent sayfaları alt sayfalara ayrıldı

Mücahit'in verdiği Flowbite Pro dosyasındaki düzen esas alındı:
- Grup sayfaları (Buttons, Badges & Status, Form, Navigation, Avatar, Media, Cards, Data Display, Layout) artık boş başlık sayfaları. Her komponent ailesi altındaki `--- <Aile>` alt sayfasında: toplam 42 alt sayfa.
- Form: Labels & Helper, Input, Select, Textarea, Number Stepper, Phone Field, Tag Input, Checkbox & Radio, Datepicker, File Upload, Rich Text Editor, Filter Group.
- Menu ve Tooltip tek aileli olduğu için alt sayfasız kaldı.
- Komponentler kopyalanmadan taşındı, ekranlardaki instance'lar bağlı kaldı. Layout'taki Sidebar denemeleri `--- Sidebar`, Data Display'deki List Item denemesi `--- List Item` sayfasına taşındı.
- Checkbox ve Radio başlıklarındaki eski property özeti (Label, Required, Help…) güncellendi.
- Revize (Mücahit): Alt sayfa sadece Form, Navigation, Data Display ve Layout'ta kaldı (30 alt sayfa). Buttons, Badges & Status, Avatar, Media ve Cards yeniden tek sayfa oldu.
- Layout grubu kaldırıldı (Mücahit): Top Bar ve Divider Navigation altına alındı, Sidebar ile Sidebar Nav tek alt sayfa (`--- Sidebar`) oldu, Logo Media sayfasına taşındı, Page Header kendi sayfası oldu.
- **Action Bar ve Toolbar komponentleri silindi:** Ekip bu yapıları elle kuruyor. Kullanıldıkları iki yer (Create Show · Mobil V1'deki Action Bar ve Card Header'ın dikey slot varyantındaki Toolbar) silmeden önce detach edildi, görünüm değişmedi.

### 2026-11-03 · Nav/Rail, Nav/Item'a katıldı

- Nav/Rail ayrı bir komponent olmaktan çıktı. Nav/Item'ın `Level` seçeneğine **Rail** eklendi (sadece ikon, daraltılmış sidebar için): Default, Hover, Selected, Disabled.
- Rail varyantları Nav/Item'ın Item varyantlarından türetildi: aynı renkler (Selected: zemin + kenarlık + dolu ikon), aynı 18px ikon. Boyut 36×36 (eski Nav/Rail 40×40, 20px ikondu); daraltılmış sidebar biraz sıkılaştı.
- 60 Nav/Rail kullanımı (Sidebar komponentinin Rail tipi ve Sidebar sayfasındaki denemeler) ile Playground'daki Tablet V2 ekranında elle değiştirilmiş iki ikon Nav/Item Rail'e geçirildi; seçili ikonlar korundu. Sonra Nav/Rail seti silindi.
- Sidebar sayfasındaki set sayısı 3 oldu; Nav/Item ve Sidebar açıklamaları güncellendi.

### 2026-11-03 · Sidebar Rail, Expanded ile hizalandı

- Mücahit Sidebar'ın Expanded halini yeniden düzenledi; Rail hali buna göre baştan kuruldu (yeni kopya değil, aynı varyant üzerinde, ekranlardaki override'lar korundu).
- Expanded'dan alınanlar: header 56px + alt çizgi, Navigation iç boşluğu 16 ve gruplar arası 12, grup içi 2, footer 84px + üst çizgi, toplam yükseklik aynı (1048). Genişlik 68 (36 ikon + 2×16).
- Gruplar Expanded'la aynı: Favoriler, İçerik Yönetimi, Kürasyon & Vitrin, Yönetim. Grup başlığının yerinde aynı yükseklikte (28px) bir Divider var, böylece ikonlar Expanded'daki satırlarla aynı hizada.
- İkon hatası düzeltildi: Nav/Item Rail varyantlarında ikonun swap bağlantısı kopmuştu, bu yüzden bütün ikonlar varsayılan (Stack) görünüyordu. Bağlantı geri kuruldu, her öğe kendi ikonunu gösteriyor.
- Playground'daki 8 Rail sidebar kendi boyutlarında (72×940) kaldı, içerik sığıyor; boyutlarına dokunulmadı.
- Renk kopukluğu düzeltildi: Rail öğelerinin ikon rengi öğenin üstüne sabit yazılmıştı (Nav/Rail'den geçiş sırasında oluşmuştu), bu yüzden Default'ta `text/primary` görünüyor ve state değişince renk değişmiyordu. Sabitlemeler temizlendi, ikonlar özellik üzerinden yeniden atandı. Test: 321 Nav/Item kullanımının hepsinde state değişince ikon rengi doğru değişiyor; tek istisna aşağıda.
- Kalan istisna: Playground ekranlarındaki 8 daraltılmış sidebar'da "Content" öğesinin ikon rengi ekran seviyesinde sabitlenmiş. Şu an Selected olduğu için doğru görünüyor; state değiştirilirse renk siyah kalır. Düzeltmek o ekranlardaki sidebar'ın bütün override'larını sıfırlamayı gerektirdiği için dokunulmadı.

### 2026-11-03 · List Item hover revizesi

- List Item'ın Hover varyantlarında (Issue, Activity, Note, Slot) arka plan kaldırıldı, Default ile birebir aynı. Tek fark: Title'ın altı çizili.
- Teknik not: Figma API'si, yazı stiline bağlı bir metne alt çizgi verince bunu aynı stili kullanan bütün metinlere yayıyor. Bu yüzden Hover Title'larında `text-sm/medium` stili kaldırıldı; boyut, kalınlık, font ve satır yüksekliği değişkenlere bağlı kalmaya devam ediyor, görünüm Default ile aynı.
- Issue tipindeki ikon `Icon` özelliğine bağlandı (bağlantı kopuktu): artık instance'ta ikon değiştirilebiliyor ve state değişince seçilen ikon korunuyor.

### 2026-11-04 · Badges & Status revizesi (Status / Badge / Tag)

Takımın 💡 Status / Badge / Tag sayfasındaki hiyerarşi ve göç tablosu esas alındı (o sayfaya dokunulmadı). Renk ve boyutlar değil, property ve yapı alındı.

- **Status** tek set: Tone × Size × State (Default/Hover) = 20 varyant. Yeni property'ler: Show dot (nokta Tone'u izler), Show icon + Leading (ikon veya tabii işareti), Interactive (chevron). Hover zemini eski Status/Select'ten alındı.
- **Badge** ailesi: Badge/Count, Badge/Dot ve yeni **Badge/Label** (Tone: Strong / Info, Text: Label; New, Beta gibi). Info zemini için ayrı bir dolu token yok, `feedback/info/dot` kullanıldı.
- **Tag**: Type Static / Removable / Link, State Default / Hover / Disabled. Focused ve Error state'leri kaldırıldı (6 kullanım Default'a geçti). Link: zemin yok, ok ikonu yok, hover'da alt çizgi (stil bağlantısı API sorunu yüzünden kaldırıldı, değişkenler bağlı).
- **Silinen setler:** eski Badge (yazılı), Status/Select, Status Dot. 378 kullanım (iç içe olanlar dahil) önce Status'a, Strong tonlu iki tanesi Badge/Label'a geçirildi; yazılar, ton, boyut, nokta ve ikon ayarları korundu.
- Not: Documentation Draft sayfasındaki deneme Button'larında eski Badge sayaç ("5") olarak kullanılıyordu, şimdi Status. Bu sayfa zaten temizlenecek.
- Revize (Mücahit): Status'ta hover sadece açılabilen (sağında chevron olan) halde olmalı. `Interactive` boolean'dan varyanta çevrildi: Interactive=False yalnızca Default (solda nokta/ikon, hover yok); Interactive=True Default + Hover (sağda chevron). 30 varyant. Interactive açık 4 kullanım True'ya geçti, diğerleri False kaldı.

### 2026-11-04 · Cards revizesi

- **Stat Card** varyantsız tek komponent oldu. `Trend` varyantı (Positive / Negative / None) kaldırıldı; yerine `Show Trend` boolean'ı geldi. İçteki Trend instance'ı "exposed" yapıldı: Direction, Value ve Context Stat Card'ın panelinden değiştirilebiliyor. 24 kullanım taşındı (18 Positive, 6 Negative korundu), eski set silindi.
- **Card açık ton denemesi:** Card Header zemini ve Card'ın Subtle stili `bg/subtle` yerine bir ton açık `bg/base` oldu (Light: neutral/50). Mücahit'in isteğiyle deneme; beğenilmezse geri alınır.

### 2026-11-04 · Media: Thumbnail + Ratio Placeholder → Image

- Thumbnail (Type: Image / Placeholder × Size) ve Ratio Placeholder tek set oldu: **Image**, `Ratio` varyantı (16:9, 21:9, 3:2, 4:3, 5:4, 1:1, 4:5, 3:4, 2:3, 9:16). Boyut varyantı yok; instance yeniden boyutlanır, oran kilitli.
- Placeholder artık bir görsel: oran yazısı olmayan, ortasında sadece görsel ikonu olan PNG, varsayılan fill olarak basıldı. Gerçek görsel fill değiştirilerek konur. Not: görsel olduğu için koyu temada renkleri değişmez.
- Köşe yuvarlaklığı ve kenarlık Thumbnail Medium'dan (radius 6, `border/subtle`).
- 89 kullanım taşındı (78 Thumbnail, 11 Ratio Placeholder); gerçek görsel konmuş 40 kullanımın görseli ve hepsinin boyutu korundu. Eski iki set silindi. Ratios sayfasındaki dokümanda komponent adı Image yapıldı (changelog satırı tarihi olduğu için değişmedi).

### 2026-11-04 · Avatar renkleri token'a bağlandı

- Karar (Mücahit): yeni primitive eklenmez; Avatar renkleri Themes koleksiyonunda `avatar/<renk>/bg` ve `avatar/<renk>/text` semantic token'ları olur (Light + Dark). Renk seçimi Claude'a bırakıldı.
- Palet: Neutral (değişmedi, paletin dışında) + Blue, Purple, Teal, Pink. Green ve Orange çıktı (kullanımı yoktu; yeşil "başarılı", turuncu "uyarı" gibi okunabiliyordu), yerlerine Teal ve Pink geldi.
- Blue primitive'e bağlı (Light 100/700, Dark 900/200). Purple açık tema değerleri eskisiyle aynı; Purple, Teal ve Pink token içinde hex.
- Kod kuralı Avatar açıklamasına yazıldı: renk ekranda seçilmez, kullanıcı ID'sinin hash'iyle paletten seçilir (hash(id) % 4).
- `rules/core/tailwind-temel.md` (istisna metni) ve `rules/core/token-isimlendirme.md` (eşleme tablosu: `bg-avatar-blue`, `text-avatar-blue`) Mücahit'in onayıyla güncellendi. `tokens/` henüz yeniden üretilmedi; sonraki "figma senkron"da gelecek.
- Small avatar 24 → 28px (Mücahit'in seçimi): 12px'lik iki harf ("MC" 20px, "MW" 23px) 24px'te kenara çok yaklaşıyordu. Boy ölçeği artık 28 / 32 / 40. 42 Small kullanımı yeni boyuta geçti.
- User Card, Avatar sayfasından Cards sayfasına taşındı (Mücahit). Kopyalanmadı, 6 kullanım bağlı kaldı. Avatar sayfasında sadece Avatar seti var.

### 2026-11-04 · Section Nav Item: iç Step Icon kilitlendi

- Section Nav Item'ın içindeki Step Icon "exposed" idi; panelde Status'u ayrıca değiştirilebiliyordu (Error bir öğenin ikonu Success yapılabiliyordu). 8 varyantta da exposed kapatıldı. İkonun durumu artık sadece Section Nav Item'ın `Status`'undan geliyor.
- 23 kullanım tarandı: hiçbirinde ikon durumu ana Status'tan farklı değildi, düzeltme gerekmedi.
- Genel ilke: iç içe komponent, dıştaki komponentin bir property'si tarafından belirleniyorsa exposed yapılmaz (Stat Card'daki Trend gibi bağımsız ayarlanması gerekenler exposed kalır).

### 2026-11-04 · Pagination: sayfa kutusu 4 haneye göre

- "Go to … Page" kutusu 64 → 60px. Metin alanı 40px: 14px Geist'te 4 sabit genişlikli rakam (her rakam ≈ "0" genişliği, 9,5px) sığıyor; 1–3 haneli sayılar da yazılabiliyor.
- Sabit genişlikli rakamlar (tabular figures) Figma eklenti arayüzünden açılamıyor (API'de salt okunur). Mücahit Figma'da elle açacak: Pagination > Page input > Value metni → Type details → Numbers → Tabular. Kodda karşılığı `tabular-nums`.
- Pagination Mobile yeniden kuruldu (Mücahit'in taslağına göre): solda Total, sağda Icon Button (Secondary, Small, CaretLeft) · Select (Small, Filled, sayfa numarası) · Icon Button (CaretRight). Taslaktaki boş etiketli Pagination/Item ve chevron'lu Input yerine sistemdeki Icon Button ve Select kullanıldı. Select 84px: 4 haneli sayfa numarası sığıyor (Desktop'taki kutuyla aynı mantık). Select exposed, sayfa numarası panelden değişiyor. Varyant aynı kaldığı için 4 kullanım bağlı kaldı. Taslak frame sayfada duruyor.
- Form Field seti Labels & Helper sayfasından Input sayfasına taşındı (Mücahit: asıl form alanı). Kopyalanmadı, 67 kullanım bağlı kaldı. Labels & Helper'da Label ve Field Message kaldı.
- Breadcrumb/Item Hover: yazı `text/primary` + altı çizili (Mücahit). Alt çizgi için yazı stili bağlantısı kaldırıldı (API'de stile bağlı metne alt çizgi bütün stile yayılıyor), font değerleri değişkenlere bağlı.

### 2026-11-04 · Tooltip yarı saydam

- Tooltip zemini (Bubble + Arrow) `bg/inverse` token'ında kaldı, dolgu saydamlığı %85 oldu; Bubble'a 4px arka plan bulanıklığı (background blur) eklendi, alttaki yazı tooltip metnine karışmıyor. Açık ve koyu temada yazının üstünde denendi, okunuyor. Kodda: `bg-inverse/85 backdrop-blur-sm`.
- Ok ile baloncuk eskiden 2px üst üste biniyordu; saydam zeminde bu bölge koyu şerit yapacağı için aralık -1,25px yapıldı (ok tam sınırda birleşiyor, üst üste binme yok).
- Düzeltme: `bg/inverse` token'ının kendisi değiştirilmedi (bilerek; başka komponentler de kullanıyor), saydamlık sadece Tooltip'in dolgusunda. Playground'daki 11 Tooltip kullanımı ana komponentteki %85'i almamıştı; dolguları ana komponentle eşitlendi (artık %85 + blur).
- `bg/inverse` kullananlar: Tooltip, Badge/Count (Strong), Badge/Dot (Strong), Badge/Label (Strong), Nav/Item (Selected'daki gösterge çizgisi), Logo (Full ve Mark), Progress Bar; ayrıca Icons, Documentation Draft, Badge ve Input sayfalarındaki doküman/deneme frame'leri.
- **Düzeltme (Mücahit fark etti):** Önceki %85 tutmamıştı. Figma eklenti arayüzü token'a bağlı dolgunun opaklığını kalıcı kaydetmiyor; ana komponentte %85 okunuyor ama kopyalara ve Figma ekranına %100 gidiyordu. Çözüm (Mücahit'in seçimi): yeni token `bg/inverse-overlay` (Themes; Light #171717, Dark #FAFAFA, ikisi de %85 opak, değer token'ın içinde). Tooltip'in Bubble ve Arrow'u buna bağlandı; ana komponent, yeni kopya ve 11 mevcut kopya kontrol edildi. `bg/inverse` değişmedi. Kural: `rules/core/token-isimlendirme.md` madde 11'e eklendi. Kodda: `bg-inverse-overlay backdrop-blur-sm`. `tokens/` bir sonraki "figma senkron"da güncellenecek.

### 2026-11-04 · Colors dokümanı v1.4.0

- Semantic Colors: Background tablosuna `bg/inverse-overlay` satırı (bg/inverse'ün altına), Feedback'in altına yeni **Avatar** bölümü (8 token: blue, purple, teal, pink × bg/text; Light/Dark, Tailwind class, kullanım). Giriş metnine "primitive yoksa değerin kendisi gösterilir" eklendi.
- Changelog'a v1.4.0 (4 November 2026) girişi; doküman başlıkları v1.3.0 → v1.4.0; Overview'da sürüm v1.4.0, son güncelleme 4 Nov 2026. Semantic renk sayısı 67 (Figma'da doğrulandı).

### 2026-11-04 · Menu Loading koyu temada görünür oldu

- Sorun: Menu zemini `bg/raised`, iskelet çubukları `bg/subtle`; koyu temada ikisi de neutral/800, çubuklar kayboluyordu.
- Etki taraması: `bg/subtle` veya `bg/disabled`'ın `bg/raised` üstünde durduğu başka komponent yok; çakışma sadece Menu Loading'de. `bg/subtle` token'ı değiştirilmedi (çok yerde kullanılıyor).
- Çözüm: iskelet çubukları `bg/interactive/pressed` oldu (Light siyah %10, Dark beyaz %12). Saydam olduğu için her zeminde görünür. 2 kullanım yeni rengi aldı.
- Menu sayfası adları (Mücahit): `Menu/Item` → **Menu Item**, `Menu/Group Label` → **Menu Group Label**, `Menu/Separator` → **Menu Separator**. Eğik çizgili adda Figma instance'ı sadece son parçayla ("Item") adlandırıyordu; artık instance adı komponent adıyla aynı. 328 + 13 + 34 kullanımın adı "Menu Item / Menu Group Label / Menu Separator" oldu; sayfa başlıkları ve Menu açıklaması güncellendi.
- 2026-11-05: Labels & Helper sayfası Navigation grubundan Form grubuna, Input'un üstüne taşındı (Mücahit).
- 2026-11-05: Filter Group'a `Show Search` boolean'ı eklendi (varsayılan açık); Expanded'daki arama alanını aç/kapa yapıyor, kapatınca grup 40px kısalıyor. Mevcut kullanımlar değişmedi. Özet metni ve açıklama güncellendi (Menu/Item → Menu Item dahil).

### 2026-11-05 · Rich Text Editor + Tag Input renk çalışması

- RTE Limit Warning: çerçeve `border/warning` → `border/default` (Empty ile aynı); uyarı sadece alttaki sayaçta. Toolbar ve içindeki 14 buton artık exposed değil (RTE'de Toolbar, `Rich Text Editor/Toolbar` ana komponentinde butonlar); panel sadeleşti. 5 varyantta yeni kopya ile doğrulandı: exposed 0.
- Tag Input Disabled/Read-only renk sorunu için **komponente dokunmadan** sayfanın sağına çalışma panosu kondu ("Study · Tag Input disabled & read-only colours"): Mevcut / A (tag tarafı: beyaz + çerçeveli chip) / B (alan tarafı: Disabled = Filled görünüm %50, Read-only = beyaz alan + kesikli çerçeve), Light ve Dark.
- Bulgular: Disabled'da alan (`bg/disabled`) ve tag (`bg/subtle`) ikisi de neutral/100 (Dark: 800); ayrıca tag'ler iki kat soluk (slot %50 × tag %50 = %25). Read-only alan `bg/base` (neutral/50), tag'den bir ton farklı. `bg/disabled` sadece 5 komponentte (Input, Select, Textarea, Tag Input, Upload) kullanılıyor; `bg/base` ise sayfa zemini, Sidebar, Top Bar, Card, Checkbox/Radio'da da var, o token değişmemeli. Karar bekleniyor.
- Tag Input çalışma panosuna A seçeneği için 6 Disabled varyasyonu eklendi (D1–D6, Light/Dark). Öneri: D1 (gri alan, Read-only A ile aynı beyaz + çerçeveli chip, %50 opaklık tek kez). Komponente dokunulmadı; karar bekleniyor.
- **Karar (Mücahit): Tag Disabled = D2.** Removable ve Link Disabled: opaklık yok (%100), Removable zemini `bg/surface`, yazı ve ikonlar `text/disabled`. Static Disabled kaldırıldı (etkileşimsiz tag'in disabled hali anlamsız); 1 kullanım Static Default'a geçti. Tag Input Disabled: çift soluklaştırma (slot %50 × tag %50) kaldırıldı, yazı `text/disabled`; 23 kullanım güncellendi. Kural istisnası `rules/core/token-isimlendirme.md` madde 10'a eklendi. Read-only (A) için karar henüz yok; çalışma panosu Tag Input sayfasında duruyor.
- **Karar (Mücahit): Tag'e Read-only durumu.** Static için `State=Read-only` (Small, Medium): beyaz zemin `bg/surface` + `border/default` çerçeve. Tag Input Read-only varyantları ve 10 kullanımı bu tag'e geçti; alan (`bg/base`) değişmedi. Not: set içinde klonlanan varyantta Label ve Leading Icon property bağlantıları kopmuştu, elle yeniden bağlandı (etiketler "Drama, Comedy" olarak geri geldi). Çalışma panosu kaldırıldı.

### 2026-11-05 · Datepicker: aralık çubuğu hafta kenarı testi

- Sorun: Calendar/Day'de aralık çubuğu (Band) hücre başına çiziliyor; In Range hücresi satırın ilk/son günü olduğunu bilmediği için uzun aralıklarda satır kenarı düz kesiliyor.
- Test (komponente dokunulmadan): Datepicker sayfasının altına ayrı set **Calendar/Day · Test** (Calendar/Day kopyası + `Week Edge: None / First / Last`, sadece In Range ve Today In Range için yuvarlak uçlu varyantlar; boolean köşe yuvarlaklığını değiştiremediği için varyant). Yanında 6–17 aralığıyla mevcut ve test karşılaştırması, Light/Dark. Kodda karşılığı: hafta satırında `:first-child` / `:last-child` için çubuğun köşesini yuvarlamak.
- **Karar (Mücahit): Week Edge asıl komponente.** Calendar/Day'e `Week Edge: None / First / Last` eklendi (In Range ve Today In Range için yuvarlak uçlu 4 varyant; toplam 16). Mevcut kullanımlar None'da kaldı; aralık içeren takvimlerde satırın ilk/son hücresi otomatik First/Last yapıldı (13 hücre). Test seti ve pano silindi.
- Calendar: Header (Calendar'da) ve Calendar/Header içindeki Previous, Month, Year, Next artık exposed değil; iki varyantta yeni kopyayla doğrulandı (0). Date & Time varyantında saat alanının (Footer) üstüne Divider eklendi; kullanımlara yansıdı.
- Calendar yapısı (iki varyant aynı): kök (boşluk 0) → **Calendar** (Header, Weekdays, Days; aralık 8 = `Spacing/2`, iç boşluk 12 = `Spacing/3`) + **Time** (Divider kenardan kenara, Divider–saat aralığı 12 = `Spacing/3`, alt boşluk 12; saat satırının yan boşluğu 12). Date varyantında Time gizli. Date & Time 335 → 343px. Playground'daki bir kopyanın eski sabit yüksekliği (326) içeriğe göre uzayacak şekilde düzeltildi.

### 2026-11-05 · Phone Field Small

- Önce yanlış anlaşılmayla Form Field ve Label'a `Size: Small` eklendi; Mücahit'in isteğiyle ikisi de eski haline döndü (Small varyantlar silindi, isimler ve açıklamalar geri alındı, kullanılmıyorlardı).
- **Phone Field** tek komponentten sete çevrildi: `Size: Medium (36) / Small (32)`. Sorun: içteki Input elle Small yapılınca Input'un üzerindeki ayarlar (sol boşluk 0, ülke kodu alanının gri zemini, sağ çizgisi, iç boşlukları) sıfırlanıyor, ülke kodu bloğu kayıyordu. Small varyantında bu ayarlar Medium'dan aynen taşındı. Mevcut 10 kullanım Medium'da, bağlantıları korundu.

### 2026-11-05 · Form Field ayrı sayfa
- Form Field, Input alt sayfasından çıkarılıp Form grubunda Input'un hemen altına açılan yeni "↪︎ Form Field" alt sayfasına taşındı (aynı grup frame düzeni: Group Title + Sets). Input sayfasının sayacı "1 component set" oldu. Set taşındı, kopyalanmadı; 67 kullanımın bağlantısı korundu.

### 2026-11-05 · Table hücreleri
- Flowbite Pro'nun "Advanced tables" sayfası incelendi: tablolar sütun (Column) frame'leriyle kurulu; satır (Row) frame'i sadece açılır detaylı "Data expanded" örneğinde var. Hücre setinde Hover state var ama hiçbir tabloda kullanılmamış; seçili satır örneği yok.
- Table/Header Cell: Hover dolgusu `bg/interactive/hover` → `bg/base` (kartlarla aynı ton).
- Table/Cell: Status'taki gibi `Interactive: False / True` eklendi. False = statik (dolgu yok, hover yok; mevcut 12 kullanım burada). True = `State: Default / Hover`, Hover dolgusu `bg/interactive/selected`.
- Mücahit sütun düzenini seçti. Table/Row seti silindi; satır durumu, o satırdaki bütün hücrelere aynı State verilerek gösterilir.
- Table/Cell: alt çizgi (border/default, içte, layout dışı) hücrenin kendisine geldi. `State: Selected` eklendi (iki dolgu üst üste: bg/surface + bg/interactive/selected; eski Row'daki gibi). `Interactive: Link` eklendi: Hover'da sadece Value'nun altı çizilir (stil bağlantısı o metinde kaldırıldı). Yeni `Type: Checkbox` (48 px; Selected'da işaretli, nested Checkbox exposed değil).
- Table/Header Cell: kendi zemini (bg/surface) ve alt çizgisi geldi; `Type: Label / Checkbox` eklendi (tümünü seç kutusu, nested Checkbox exposed).
- Table sayfasına sütun düzeninde örnek tablo (Example) kuruldu: 2. satır Selected, 3. satırda başlıkta Link hover.
- Table/Cell'e `State: Selected Hover` eklendi (2026-11-06). Interactive=True: bg/surface + bg/interactive/selected + bg/interactive/hover (üç dolgu). Link: Selected dolgusu + Value altı çizili. Statik ve Checkbox hücrede yok. Açık konu: True hücrede Hover ile Selected aynı görünüyor (ikisi de %4).
- Karar (Mücahit, 2026-11-06): hücre bazlı iki hover kalıyor. Dolgulu hover (Interactive=True) metinsiz özel bir alan için; metinli hücrelerde Link (alt çizgi) kullanılır. Satır düzeyine taşınmayacak.
- Mücahit hücre renklerinde kendisi değişiklik yaptı (Hover varyantlarına "Hover" katmanı, Selected Hover'a bg/subtle); bunlara dokunulmadı.
- Table/Cell Text ve Two Line hücrelerine (bütün Interactive/State varyantları) solda Image eklendi: 16:9, 85x48 (Mücahit: yükseklik 48), `Show Image` boolean'ı ile, varsayılan gizli, exposed değil. Hücre yatay düzene geçti (Image + Content, aralık Spacing/2); yazılar "Content" frame'inde, property bağlantıları korundu. Görsel açıkken Text ve Two Line hücresi 72 px.
- `feedback/{success,warning,danger,info}/border` hiçbir yerde kullanılmıyordu. Light değerleri 200 → 300 yapıldı (50 zeminde 200 seçilmiyordu; açık/koyu karşılaştırma panosuyla seçildi). Dark (800) ve neutral (300/600) aynı. Status'un 30 varyantına 1 px içte kenarlık (`feedback/<tone>/border`, layout dışı; yükseklik 20/28 korundu). Colors dokümanı v1.5.0: tablo değerleri, açıklamalar ve changelog. Repo `tokens/` henüz eski değerde: "figma senkron" gerekiyor.
- Badges & Status sayfasının sağına "Status test · Shows table" kuruldu (statü testi için): Playground › Shows › Orijinal'deki tablo DS komponentleriyle (Table/Cell, Header Cell, Status Small + Stack/tabiiIcon, Button, Icon Button, Input, Pagination). Sütun düzeninde; SHOW ve TITLE tek "Title" sütununda (Show Image'lı Two Line Link hücre), küçük görseller orijinalden kopyalandı.
- Test tablosunda CMS status ikonları siyahtı: Stack (Fill) ikonu 3 ayrı vektörden oluşuyordu, Status ise ikonun sadece ilk vektörünü renklendiriyor. Icons sayfasında Stack/Fill tek vektöre birleştirildi (text/primary bağlı; Sidebar'daki 4 kullanımı etkilenmedi). Test tablosundaki CMS status'ları yeniden yerleştirildi, ikonlar artık tonun yazı rengini alıyor.
- File Upload sayfasında Upload setinin sağına ilham panosu: "Animated File Upload · inspiration" (kaynak: shadcn registry Surajmaurya1/easyui/animated-file-upload, kodu okunarak). Komponent değil, DS token'larıyla auto layout: Drop zone (Standard/Compact × Default/Hover/Drag Over/Disabled), File item (Uploading/Processing/Complete/Error), dosya türü ikonları, tam kompozisyon. Animasyonlar not olarak yazıldı.
- 2026-11-09 · File Upload sayfasına "Dropzone flow · image & video" panosu çizildi (affectUI Dropzone'dan ilhamla, komponent değil): Default → Hover → Drag Over. PDF/PNG kağıtlarının yerine Image ve VideoCamera ikonlu kağıtlar. Renkler DS token'ı: Hover bg/base + border/strong, Drag Over feedback/info/bg + border/focus. İkonlar görünsün diye kağıtlar referanstan daha açık (24 px, Drag Over 36 px).
- File Upload grubuna yeni komponent seti: **File Sheet** (32x40, döndürülmemiş). `Type: Image / Video / Audio / Archive / Code / Document / Other` · `State: Default / Active`. İkon Type'a bağlı, exposed değil; Active'de ikon feedback/info/text. Sayfa frame'i büyüdüğü için alttaki serbest frame'lere binmesin diye yukarı doğru kaydırıldı.
- Dropzone flow panosundaki elle çizilmiş kağıtlar File Sheet instance'larıyla değiştirildi (6 adet; Default/Hover'da State=Default, Drag Over'da State=Active). File Sheet'te ikon ortada olduğu için Default/Hover açıklığı 24 → 28 px.
- File Upload sayfası, "This file format is not supported" halindeki illüstrasyon: kağıtlar kartın arkasına alındı (9 px dışarıda, 16° eğim), karttaki ikon UploadSimple → Prohibit (feedback/danger/text). Dropzone flow'da Default/Hover kağıt açıklığı son olarak 22 px.
- File Upload, "7 · Yükleniyor" hali: ilerleme bloğu referans görseldeki hiyerarşiye çevrildi (dosya adı, altında "boyut · kalan süre", sağda X, altta tam genişlik çubuk). Sağ üstteki "İptal" rozeti kaldırıldı, iptal artık satırdaki X (Icon Button Ghost XSmall).
- "7 · Yükleniyor": alana örnek yerel önizleme eklendi (%60 opak), ilerleme bloğu görselin üstünde okunabilsin diye yüzen panele alındı (bg/surface, border/default, rounded-lg, shadow-sm, kenardan 8 px). Çubuk zemini bg/subtle. Gradient yerine panel seçildi: her görselde ve iki temada okunur.
- "7 · Yükleniyor" yeniden düzenlendi (Mücahit: yükleme sonrası ayar modülü açılacağı için önizleme gereksiz): yerel önizleme, placeholder ve panel kaldırıldı; ilerleme bloğu 320 px genişlikte alanın ortasında, alan görünümü "1 · Default" ile aynı. Nesne notu güncellendi.
- File Upload sayfasına Figma Motion denemesi: "File Sheet · upload loop" (3 sn). File Sheet'ler (Image, Video, Document) sırayla belirir, kesikli yoldan HardDrives ikonlu sunucu kartına gider; her varışta kart %6 büyüyüp geri döner. Başta ve sonda sahne boş, döngü dikişsiz.
- Upload loop revizesi: sunucu kartının zemini, çizgisi ve gölgesi kaldırıldı (sadece HardDrives ikonu, 32 px). Kağıtlar artık kavisli gidiyor (24 px yükselip iner), kesikli yol da kavisli çizildi.
- Upload loop: sunucu kartı geri geldi (bg/surface, border/default, shadow-sm), ikon HardDrives Fill 24 px; kağıtlar yine kartın arkasına giriyor, kavis kaldı.
- Upload loop renk denemeleri (Mücahit'in boyut ayarlarına dokunulmadı): orijinalin sağına 4 kopya (A ikon+yol, B açık mavi sunucu, C dolu mavi sunucu, D mavi alan). Hepsi File Sheet State=Active, yol border/focus. Karar bekliyor.

### 2026-11-10 · Token bağlamaları ve isimler
- Güncel tarama: 45 setin hepsinde açıklama var, renkler token'lı, kopuk kopya yok. Eksikler token'sız boşluk/köşe ve eğik çizgili isimlerdi.
- Nav Item: Item ve Rail ikonları 18 → 20 px; Rail iç boşluğu 9 → 8 (Spacing/2), boy 36. Sidebar içindeki kopyalarda ikona bağlı 18 px boyut (Spacing/4․5) kaldırıldı.
- Token'a bağlananlar: Sidebar (13; değer değişmedi), Badge Label (16), Image (40 köşe → rounded-md), Calendar (10), Pagination (1), List Item (2). Table Cell'deki görseller Image'dan aldı. Sidebar Header alt boşluğu 13 px: ölçekte karşılığı yok, bağlanmadı.
- 13 set yeniden adlandırıldı, eğik çizgi kaldırıldı: Badge Count/Dot/Label, Calendar Header/Day, Tab Segment/Underline, Breadcrumb Item, Pagination Item, Nav Item, Nav Sub Group, Table Cell, Table Header Cell. Sayfa yazıları ve açıklamalar güncellendi; Sidebar sayfasındaki interaktif kod klonuna dokunulmadı.
- Eklenebilecek komponentler revize planına not düşüldü.

### 2026-11-10 · Doküman şablonu ve Input dokümanı
- Mücahit'in tarifiyle şablon yazıldı: `rules/core/dokumantasyon/sablon.md` (yeni), `frame-duzeni.md` v2 (ana set dokümanda durur, Do/Don't yok, tam frame sırası), `workflows/dokuman.md` ve KOMUTLAR'a `dokuman: <sayfa>`. Storybook ve video rafa kalktı; spec kayıtları sürüyor (`components/README.md` formatı).
- `↪︎ Input` dokümante edildi: Overview (gizli Introduction, Variants at a glance), Changelog v1.0.0, Interaction (Figma Make yer tutucusu), Component Sets (gerçek Input seti buraya taşındı, eski grup frame'i silindi), Anatomy & Specs (değerler setten okundu), Properties + Used in, Examples (Playground'dan 8 slot kullanımı). Sayfa zemini #171717. `components/input/spec.md` yazıldı.
- Input Component Sets, Documentation Draft'taki gibi tabloya çevrildi: STATE sütunu + SMALL · 32 / MEDIUM · 36 / LARGE · 40 sütunları, ana set tablonun içinde, varyantlar satırlara hizalı. Şablon kuralı (sablon.md v2) buna göre güncellendi.
- Input'un varsayılan varyantı Size=Medium, State=Default yapıldı (Mücahit: varsayılan boyut Medium). Mevcut kopyalar değişmedi; Properties tablosu ve spec.md güncellendi.
- Not: Figma varsayılan varyantı sıradan değil konumdan seçiyor (en üst satır, sonra en sol). Input'ta Medium sütunu ilk sıraya alındı: MEDIUM · 36 | SMALL · 32 | LARGE · 40. Kural sablon.md'ye eklendi.
- Mücahit: sütunlar Small → Medium → Large sırasında kalmalı, varsayılan yine Medium. Sıra geri alındı; dokümanda ve spec.md'de varsayılan Medium. Figma'nın panelden eklediği varyant konum gereği Small kalıyor. sablon.md buna göre düzeltildi.
- Mücahit'in Input dokümanı düzeltmeleri şablona işlendi (sablon.md v3): kart önizlemelerinde bg/subtle dolgu gizli + 1 px border/default çizgi (Overview 13, Examples 8 kart); Examples'taki instance'lar gerçek genişlikte.
- Mücahit Examples frame'ini Interaction'ın yanına aldı. Yeni sıra: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties (sablon.md v4, frame-duzeni, KOMUTLAR güncellendi).
- Buttons ve Badges & Status sayfaları şablona göre dokümante edildi (7 frame, sayfa zemini #171717, ana setler Component Sets tablolarına taşındı, eski grup frame'leri silindi). spec.md: button, icon-button, split-button, status, badge-count, badge-dot, badge-label, tag.
- Bu sırada düzeltilen komponent hataları: Interactive Status'ta Label yazısı property'ye bağlı değildi (20 varyant, bağlandı); Tag Read-only çizgisi yüksekliği 20/28 yerine 22/30 yapıyordu (layout dışına alındı); Badge Label seti auto layout'luydu (kaldırıldı).
