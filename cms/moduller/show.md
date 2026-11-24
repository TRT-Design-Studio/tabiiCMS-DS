---
modul: Show
durum: incelendi
kaynaklar: [staging, figma, bilgi-mimarisi]
guncellendi: 2026-11-23
---

# Show

Platformdaki yapımın kendisi: bir dizi, film veya canlı etkinlik (oyun tipi test ortamında var, canlıda henüz yok). Videolar (bölüm, fragman), görseller, ülke ve dil ayarları bir Show'a bağlanır. CMS'in ana işi buradan geçer.

> Bu dosya **mevcut durumu** anlatır. Yeni tasarım için alınan kararlar [kararlar/](../kararlar/README.md) klasöründedir.

## Liste (Show Dashboard)

| Parça | Mevcut hali |
|---|---|
| Arama | Tek metin kutusu + arama butonu |
| Filtreler | Producer, Category, Type, Status (her biri açılır liste, tablonun üstünde yan yana) |
| Sağ üst | Bulk Actions (Export, Import, Edit), Create Show |
| Sütunlar | Seçim kutusu, Main Image, Title, Pgcode, Type, Publish Info, Status, Actions |
| Publish Info | "N Countries: Published" (Publish Management sekmesine gider) ve "N languages" |
| Status | İki katman: CMS durumu ve altında **tabii** durumu + tarih (bkz. "Durum modeli") |
| Actions | Edit, Delete (sadece Draft'ta), More (Publish, Unpublish, tabii Preview) |
| Sayfalama | "Total of N items", sayfa numaraları, Go to |

## Durum modeli

Mücahit'ten (2026-11-23):

1. **CMS durumu** dört tanedir: Draft, Published, Unpublished, Error.
2. CMS'te bir içerik **Published** olunca tabii tarafına bilgi gider: "CMS'te bir şey publish edildi."
3. tabii tarafı bu bilgiyi görür ve içeriği platformda **ayrıca** yayına alıp almamaya karar verir. Sonuç **tabii durumu** olur: **On tabii** veya **Not on tabii**.
4. **İki taraf birbirini doğrudan değiştirmez.** CMS'teki publish / unpublish tabii'deki durumu değiştirmez, sadece bilgi olarak gider. Listede bir kaydın Draft iken "Tabii Published" görünmesi bundandır.

- **Published bir içeriğe Edit denince içerik otomatik Draft'a döner;** değişiklikten sonra tekrar publish edilmesi gerekir.
- tabii kararının nerede verildiği bilinmiyor; sonucu CMS'e düşüyor.
- tabii durumu Show'a ve videolara (Episodes listesinde her bölümde "Tabii Published + tarih") aittir. **Diller sadece CMS durumu taşır.**
- **Master dışındaki alanlar Master'dan gelir.** Languages ve Country Based Changes'teki bir alana ayrıca veri girilmedikçe Master'daki değer kullanılır.

## Oluşturma akışı (sıfırdan Show)

1. **Create Show** → **Create Show** penceresi açılır. Tip seçilir (Series, Movie, Live Event…) → **Continue**.
2. Sadece **Master** sekmesi açıktır; diğer sekmeler görünmez. Zorunlu alan **Title**.
3. Kullanıcı sadece Title'ı girip kaydedebilir. Kayıttan sonra sayfa **kendiliğinden yenilenir** ve bütün sekmeler açılır. Neden: Show'un Show Dashboard'da görünmesi için en az bir kez kaydedilmesi gerekiyor (sistem kuralı).
4. Master'daki diğer alanlar doldurulur. İçerik kaydedilir (**Save**); kaydedildikten sonra **Publish** veya **Delete** edilebilir.

## Düzenleme akışı (var olan Show)

1. Dashboard'da **Edit** → Master sekmesi açılır, alanlar düzenlenir.
2. **Languages:** Diller farklı bir ekip tarafından, muhtemelen CMS dışından ayarlanır. Show'a tanımlanan diller editörün karşısına CMS'te doğrudan gelir. **Dil ekleme yetkiye bağlıdır;** yetkisi olmayan kullanıcı dil ekleyemez, sadece var olanları düzenler. Bir dile **Edit** denince sekmesiz tek bir pencere açılır. Dil Published ise bütün alanlar kapalı (disabled) gelir ve "bu içerik publish edildi, değiştirmek istiyorsan Edit'e bas" uyarısı çıkar.
3. **Country Based Changes:** Bütün kıtalar ve içlerinde ülkeler listelenir. Ülke bulunur (veya aranır) → **Edit** → o ülkeye ait **Master** ve **Languages** sekmeleri olan bir alan açılır.
   - **Ana sekme her zaman Master'dır.** Bir ülkedeki değişiklik kaydedilmedikçe veya Draft'ta kaldıkça o ülkede Master gösterilir. Değişiklik kaydedilip Draft'tan çıkınca o ülkeye özel içerik gösterilir.
   - Ülkenin Languages sekmesinde platformun dilleri görünür; o ülke için her dil ayrıca düzenlenebilir. Yani iç içe: **Show → Ülke → Dil**.
   - Bir ülkede yapılan değişiklik **kaydedilmezse silinir.** Draft'a düşmesi için kullanıcının kaydetmesi gerekir. Kaydedilen ülkeler **Edited Countries** grubunda görünür. (Test ortamında kaydedilmeyen değişiklik Draft'a düşüyor; bu bir hata.)
   - Ülkeler ayrıca publish edilmez: Show'un altındaki bir yapı oldukları için Show'un içinde "var" ya da "yok" sayılırlar.
   - Sorun: Hangi ülkenin düzenlendiği zor görünüyor. Ülkeler sadece tek tek düzenlenebiliyor; birçok ülkeyi hızlı düzenlemek gerekiyor.
4. **Episodes** (Series) / **Videos** (Movie): Dashboard'daki tablonun aynısı, sadece o Show'un bölümleriyle; filtreler var. Üstte **Create Video** ve **Bulk Import**.
   - **Create Video**, Create menüsündeki Video formunun birebir aynısını açar (staging'de adres `episode?set-show=…`, sayfa başlığı "Episode Dashboard"). Sadece Show (ve bağlama göre sezon) önceden dolu gelir; geri kalan bütün alanlar aynıdır: Media (Insert From MAM), Main Image, Show, Season, Episode, Title, Description, Display Title, Tags, SEO Title, SEO Description, First Broadcasted Datetime, Skip Intro Start / End Time, Credits Start Time.
   - Sorun alanlar değil, **bağlamın kopması:** kullanıcı Show'un içinden çıkıp Video akışına geçiyor, "Back to Dashboard" da Show'a dönmüyor. **Çözülmek istenen sorun.**
   - Her bölümün de kendi Master, Languages, Country Based Changes ve Publish Management sekmeleri vardır.
   - **Bulk Import** tıklanınca "Choose a file" çıkıyor; nasıl çalıştığı bilinmiyor, şimdilik önemli değil.
5. **Trailers:** Episodes ile aynı mantık.
6. **Publish Management:** İçeriğin hangi ülkede, hangi tarihler arasında yayınlanabileceği seçilir. Show'da belirlenen tarih (dizide) **bütün bölümlere uygulanır;** bir bölümün kendi Publish Management'ında ayrıca tarih ayarlanabilir. Ülkeler Country Based Changes'teki gibi kıtalara bölünmüş. Her ülkenin yanında **Date Selection** (Start Date, End Date, Air Date). Toplu seçim için yanda onay kutuları; seçilenlere ayrıca Date Selection yapılır. **Akış dengesiz ve verimsiz; iyileştirilecek.**

## Sekmeler ve alanlar

### Tiplere göre sekmeler

| Sekme | Series | Movie | Game *(test)* | Live Event |
|---|---|---|---|---|
| Master | ✓ | ✓ | ✓ | ✓ |
| Languages | ✓ | ✓ | ✓ | ✓ |
| Country Based Changes | ✓ | ✓ | ✓ (sekmede değişen ülke sayısı rozeti) | ✓ |
| Episodes | ✓ | — | — | — |
| Videos | — | ✓ | ✓ | — |
| Trailers | ✓ | ✓ | — | — |
| ScreenShots | — | — | ✓ | — |
| Publish Management | ✓ | ✓ | ✓ | ✓ |

### Master: görseller (sol sütun)

Her görsel için **Insert from Media** (AssetHQ'dan seç) veya **Upload** (bilgisayardan). Dolu görselde View ve Clear.

| Görsel | Series | Movie | Game *(test)* | Live Event |
|---|---|---|---|---|
| Main image with Logo | ✓ | ✓ | ✓ | ✓ |
| Cover Image | ✓ | ✓ | ✓ | ✓ |
| Vertical Image with Logo | ✓ | ✓ | ✓ | ✓ |
| Mobile Cover Image | ✓ | ✓ | ✓ | ✓ |
| Show Logo | ✓ | ✓ | ✓ | ✓ |
| About image | — | — | ✓ | — |

### Master: alanlar (sağ sütun, ekrandaki sırayla)

Kaynak: Series, Movie ve Game için staging; Live Event için bilgi mimarisi.

| Alan | Series | Movie | Game *(test)* | Live Event |
|---|---|---|---|---|
| Title (zorunlu) | ✓ | ✓ | ✓ | ✓ |
| License | ✓ | ✓ | ✓ | — |
| Display Title | ✓ | ✓ | ✓ | ✓ |
| Original Title | ✓ | ✓ | ✓ | ✓ |
| Short Description | — | — | ✓ | — |
| Long Description | ✓ | ✓ | ✓ | ✓ |
| Priority score | ✓ | ✓ | — | ✓ |
| Spot | ✓ | ✓ | — | ✓ |
| Announcement | ✓ | ✓ | — | ✓ |
| Tags | ✓ | ✓ | ✓ | ✓ |
| Category | ✓ | ✓ | ✓ | ✓ |
| Age Restriction | ✓ | ✓ | ✓ | — |
| Channel | ✓ | ✓ | — | ✓ |
| Main Trailer | ✓ | ✓ | — | — |
| Genre | ✓ | ✓ | ✓ | ✓ |
| Parental Guidance | ✓ | ✓ | ✓ | ✓ |
| Made Year | ✓ | ✓ | ✓ | — |
| Badges | ✓ | ✓ | ✓ | ✓ |
| Badge | ✓ | ✓ | — | — |
| Exclusive Badge | ✓ | ✓ | — | — |
| Cast (kişi + karakter, Add New) | ✓ | ✓ | — | — |
| Directors, Writers | ✓ | ✓ | — | — |
| Developer, Publisher | — | — | ✓ | — |
| Subscription Categories (AVOD, SVOD…) | ✓ | ✓ | ✓ | — |
| SEO Title, SEO Description | ✓ | ✓ | ✓ | ✓ |
| Similar / Similar Games | ✓ | ✓ | ✓ | — |
| Can Watch Offline, Offline Watch Validity Period | ✓ | ✓ | — | — |
| Can Play Offline | — | — | ✓ | — |
| Eligible for kids profile | ✓ | ✓ | ✓ | ✓ |
| Eligible for teen profile | — | — | ✓ | — |
| Special Event | ✓ | — | — | — |
| Platform, QR Code, iOS URL, Android URL | — | — | ✓ | — |
| Supported Languages | — | — | ✓ | — |
| Stat Items (tekrarlanır: görsel, Display Title, Description) | — | — | ✓ | — |
| Highlight Items (tekrarlanır: görsel, Display Title, Description, URL) | — | — | ✓ | — |
| Audio, Subtitles (tekrarlanır: Language, Type, Original) | ✓ | ✓ | — | — |

Altta: Created by / Created at, Edited by / Edited at.

### Languages

Dil başına bir satır: Language, Title, Status (Draft…), Action (Edit, More: Publish, Unpublish). Edit, dile özel alanları açar: görseller, Display Title, Long Description, Spot, Announcement, Tags, SEO Title, SEO Description.

### Country Based Changes

Ülkeye özel değişiklikler. Üstte arama ("Type at least 3 characters to search"). Ülkeler kıtalara göre açılır kapanır gruplarda (Edited Countries, Americas, Asia, Oceania, Europe, Africa, Antarctica); her ülkede **Edit**. Edit, ayrı bir sayfa açar ("Movie Country Specific Dashboard"): Master (görseller, Title, Display Title, Long Description, Announcement, Spot, Badges; bazı alanlarda "This field is empty" kutusu) ve Languages.

### Episodes / Videos / Trailers

Show'a bağlı videoların listesi. Üstte **Create Video** ve **Bulk Import**; filtreler Producer, Episode, Season. Sütunlar: Video, Pgcode, Season, Episode, Publish Info, Status, Actions. Create Video, Video modülünün formunu açar (Master: Media → Insert From MAM, Main Image, Show, Title, PG Code, Description, Display Title, Tags, SEO, Skip Intro / Credits zamanları).

### Publish Management

Hangi ülkede hangi tarihlerde yayında olacağı. Arama, Sort, **Clear Date**, **Date Selection**, Save. "Date&Time Settings will apply to all selected countries." Ülkeler gruplarda (All Countries, Published Countries, kıtalar, SVOD Countries), her grupta "0/55 Countries Selected for Date&Time Settings". Her ülke satırında saat dilimi (UTC +03:00), Start Date, Air Date, End Date ve Date Selection.

Movie'de Publish Management'tan **More Information** ile License kaydına gidiliyor (Figma'da "Publish Management - More Information" ekranları License Dashboard'u gösteriyor).

## Kaynaklar arası farklar

| Konu | Staging | Figma | Bilgi mimarisi |
|---|---|---|---|
| Game tipi | Var, ama sadece test ortamında; canlıda yok | Yok | Yok |
| Special Event (Series) | Var (canlıda olup olmadığı bilinmiyor) | Yok | Yok |
| Short Description, About image | Game'de var | Yok | Yok |
| Sekme adı | Trailers | Trailers | "Traliers" (yazım hatası) |
| Livestream ile Live Event | İkisi ayrı: Live Event bir Show tipi, Livestream ayrı modül | Aynı | Aynı |

## Gözlemler (karar değil)

Yeni tasarımda ele alınacak noktalar. Her biri bir karar konusu olabilir; karar verilince [kararlar/](../kararlar/README.md) klasörüne yazılır.

- **Master çok uzun.** Series'te 30'dan fazla alan tek sütunda alt alta; gruplama yok (künye, sınıflandırma, yayın hakları, SEO, ses/altyazı karışık).
- **İki ayrı durum katmanı** (içerik durumu ve tabii durumu) listede üst üste; farkı ekranda anlatılmıyor.
- **Benzer alanlar yan yana:** Badges, Badge ve Exclusive Badge üç ayrı alan.
- **Diğer sekmeler ilk kayıttan önce kapalı;** kayıttan sonra sayfa yenilenip açılıyor. Kullanıcı formun ne kadar uzun olduğunu baştan göremiyor.
- **Create Video kullanıcıyı Show'dan çıkarıyor** (Episodes, Videos, Trailers).
- **Tarih yönetimi ülke ülke.** 200'den fazla ülke kıtalara bölünmüş; toplu seçim var ama ne seçildiği zor izleniyor.
- **Country Based Changes ayrı bir sayfaya gidiyor;** Show bağlamı (üst başlık) kayboluyor ("Movie Country Specific Dashboard").
- **Yayınlanmış kayıt salt okunur;** düzenlemek için ayrıca Edit'e basmak gerekiyor.
