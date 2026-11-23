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
| Status | İki katman: içerik durumu (Draft, Published, Unpublished) ve altında **tabii** durumu (Tabii Published / Unpublished + tarih) |
| Actions | Edit, Delete (sadece Draft'ta), More (Publish, Unpublish, tabii Preview) |
| Sayfalama | "Total of N items", sayfa numaraları, Go to |

## Oluşturma akışı

1. **Create Show** → boş form açılır, üstünde **Create Show** penceresi çıkar.
2. **Video Type** seçilir: Live Event, Movie, Series (test ortamında ayrıca Game). Seçmeden devam edilemez.
3. Tipe göre sekmeli form açılır. İlk sekme **Master**; diğer sekmeler kayıt yapılmadan açılmaz (Figma'da soluk görünüyor).
4. Üstte **Save**, **Draft** (durum değiştirme menüsü) ve **Back to Dashboard**.
5. Yayınlanmış bir kayıt açılınca yeşil bir uyarı çıkar: "This content is Published. If you want to override it, click on the edit button on the right." Form salt okunurdur; **Edit** ile düzenlenir.

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
- **Diğer sekmeler ilk kayıttan önce kapalı.** Kullanıcı formun ne kadar uzun olduğunu baştan göremiyor.
- **Tarih yönetimi ülke ülke.** 200'den fazla ülke kıtalara bölünmüş; toplu seçim var ama ne seçildiği zor izleniyor.
- **Country Based Changes ayrı bir sayfaya gidiyor;** Show bağlamı (üst başlık) kayboluyor ("Movie Country Specific Dashboard").
- **Yayınlanmış kayıt salt okunur;** düzenlemek için ayrıca Edit'e basmak gerekiyor.
