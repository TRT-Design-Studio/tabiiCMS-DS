---
no: "002"
baslik: Show formunda Episodes, Trailers ve Publish Management
durum: oneri
moduller: [Show, Video]
oneren: "@mucahitpuren"
tarih: 2026-11-24
karar_tarihi:
onceki:
yerine:
---

# 002 · Show formunda Episodes, Trailers ve Publish Management

## Sorun

Bugünkü sistemde ([moduller/show.md](../moduller/show.md) → "Düzenleme akışı"):

- **Create Video** Show'un içinden basılsa da kullanıcıyı ayrı bir "Episode Dashboard" sayfasına götürüyor. Show bağlamı kopuyor; "Back to Dashboard" Show'a dönmüyor.
- **Publish Management** ülkeleri kıta kıta listeliyor; her ülkenin yanında ayrı Date Selection var, toplu seçim ayrı bir adım. Hangi ülkede hangi tarihlerin geçerli olduğu bir bakışta görülmüyor.

## Karar (öneri)

**Final yön** (2026-11-24, Mücahit ve Merve). Figma: Playground → **Revizeler**, "Episodes - Final", "Trailers - Final", "Publish Management - Final". Aşağıdaki "Show Test" maddeleri bunun öncesindeki öneridir.

- **Episodes:** Merve'nin ekranı temel. Bölüm numarası kısa yazılır (S01 · E01). New episode ve bölümün kendi sekmeleri şimdilik yok; sonra düşünülecek.
- **Bulk Import** tablonun kartı içinde, araç çubuğunda (Filters'ın yanında) kalıyor. Neden: seçime bağlı olmayan, bütün tabloyu ilgilendiren işlemler tablo araç çubuğunda durur; seçime bağlı işlemler (Bulk Actions) sadece satır seçilince çıkar (PatternFly, Maersk). Staging'de Bulk Import tablonun üstünde, Create Video'nun yanında.
- **Trailers:** Episodes'ın birebir aynısı; satırda tür yazar (S01 · Main Trailer).
- **Publish Management:**
  - Sol panel Country Based ile aynı. Varsayılan: **bütün ülkeler seçili** (194); kullanıcı istemediklerinin seçimini kaldırır (exclude).
  - Ülke başlığı Country Based'deki gibi; sol alttaki seçim özeti yok.
  - Publish window Merve'nin yapısında: Start, End, Air yan yana, altında saat dilimi notu, **Clear dates** ve **Apply to 194 countries**. Ülkeye göre "Mixed" mesajı kaldırıldı; 10 ülke seçilince okunmuyordu.
  - Tarihler **Apply'a basınca** uygulanır; otomatik kayıt yok.
  - Scheduled countries tablosu: onay kutusu, bayrak + ülke + saat dilimi, Start, Air, End, Window (Live, Scheduled).

Figma: Playground → **Show Test** bölümü. Hepsi güncel Master ekranından türetildi; Show'un sekmeleri ve sağ paneli her ekranda aynı kalıyor.

**Episodes** ("DS · Web 1440 · Episodes")

- Show'un bölümleri, Shows listesindeki tablonun aynısıyla: bölüm (görsel, sezon · bölüm, ad), PG Code, Publish Info, CMS ve tabii durumu, Actions.
- Üstte sezon filtresi (All seasons, Season 1, Season 2), **Bulk Import** ve **New episode**.

**New episode** ("DS · Web 1440 · Episodes · New episode")

- Bölüm, **Episodes sekmesi açıkken Show'un içinde** oluşturulur. Başlık "New episode", üstünde "Kış Masalı / Episodes".
- Show, Season ve Episode en üstte: Show salt okunur, Season ve Episode bağlamdan dolu gelir.
- Bölümün kendi sekmeleri (Master, Languages, Country Based, Publish Management) bu bloğun içinde. Show'daki gibi ilk kayıttan sonra açılır.
- Alanlar Video formunun aynısı, kartlara ayrılmış: Episode info, Media (Insert from MAM, Main Image), SEO, Playback markers.
- Not: "Publish dates come from the show until you set the episode's own" (Show'un tarihleri bölümlere iner).

**Trailers** ("DS · Web 1440 · Trailers")

- Episodes ile aynı düzen. Satırda tür ve sezon yazar (Main Trailer, Trailer, Clip-Up). **New trailer** aynı şekilde Show'un içinde açılır (çizilmedi).

**Publish Management** ("DS · Web 1440 · Publish Management")

- Solda Country Based ile **aynı ülke paneli**: arama, All / Scheduled filtresi, tarih atanmış ülkeler en üstte, kıtalar ve onay kutuları.
- Sağda seçilen ülkelere birlikte uygulanan **Publish window**: Start Date, End Date, Air Date. Ülkeler arasında farklı olan alan "Mixed" yazar; altında hangi ülkede ne olduğu görünür. **Clear dates** seçili ülkelerin tarihlerini temizler.
- Altında **Scheduled countries** tablosu: ülke ve saat dilimi, pencere durumu (Live, Scheduled, Ended), tarihler.
- Açıklama: tarihler bütün bölümlere uygulanır; bölüm kendi Publish Management'ında ayrıca ayarlanabilir; her ülke kendi saat dilimini kullanır.

**Country Based → Languages** ("DS · Web 1440 · Country Based · Languages")

- Country Based'in alt sekmesi. Ülke seçimi aynı kalır; altına **dil seçici** gelir (Turkish, English, Arabic, Urdu, Spanish).
- Form seçili dilin alanlarını gösterir. Boş alan Show'un o dildeki değerini gösterir ("Others use the show's English value.").
- Mixed kuralı Master alt sekmesiyle aynıdır.

**Bölümün kendi sekmeleri** ("DS · Web 1440 · Episode · Languages", "… · Episode · Country Based", "… · Episode · Publish Management")

- Kayıtlı bir bölüm ("Kış Masalı 1. Bölüm") Show'un **Episodes sekmesi içinde** açılır. Başlığın üstünde "Kış Masalı / Episodes" yazar.
- Show sekmelerinin altında bölümün sekmeleri durur: Master, Languages, Country Based, Publish Management. Her sekme Show'daki karşılığının aynı düzenidir; sadece bölümün verisiyle çalışır.
- Languages: boş alan **bölümün Master değerini** gösterir.
- Country Based: değişiklik sadece bu bölüme uygulanır.
- Publish Management: sadece kendi tarihi olan ülkeler listelenir (**Own dates**). Kendi tarihi olmayan ülkeler Show'un tarihlerini kullanır.
- Sağ panelde Content Type "Episode" yazar.

**Languages ve Country Based revizyonu** (aynı bölümde, 001'in devamı)

- Sağ paneldeki buton içerik Draft'tayken **Publish**. Altında "tabii status is set by the tabii team." yazar.
- Languages'ta boş alanlar Master değerini gri gösterir.
- Country Based'de: "Save to keep changes; unsaved changes are discarded."

## Neden

- Kullanıcı bölüm eklerken Show'dan çıkmaz; hangi dizinin hangi sezonunda olduğunu hep görür.
- Ülke seçimi tek bir kalıpla çalışır (Country Based ve Publish Management aynı panel).
- Tarihler tek formda toplu girilir; sonuç tabloda ülke ülke görünür.

## Etkisi

- "Live / Scheduled / Ended" pencere durumları tarihlerden hesaplanan bir gösterim önerisi; mevcut sistemde yok.
- Doğrulanması gerekenler:
  - Bölümün kendi sekmeleri ilk kayıttan önce kapalı mı?
  - Show'daki tarih değişince, kendi tarihi olan bölümler ne olur?
  - Publish Management'ta "Mixed" alana yazınca bütün seçili ülkelere uygulanması kabul mü?
  - Ülke + dil alanı boşken önce Show'un o dildeki değeri mi gelir, yoksa doğrudan Master mı? (Ekranda Show'un dil değeri varsayıldı.)
  - Bölümün dil alanı boşken bölümün Master'ı mı gelir? Show'un Country Based değişiklikleri bölümlere iner mi?
  - Publish Management: sol panel (seçim) ile alttaki tablo (sonuç) aynı ülkeleri iki kez gösteriyor. Öneri: tablo sol paneldeki seçime göre süzülsün; seçim değişince tablo da değişsin. Ekiple konuşulacak.
  - Tablodaki onay kutusu ile sol paneldeki seçim aynı seçim mi?
- Çizilmeyenler: New trailer formu, trailer'ın kendi sekmeleri, tek ülke seçiliyken Publish window, Bulk Import.
