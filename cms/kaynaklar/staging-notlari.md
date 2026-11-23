---
kaynak: CMS staging (test) ortamı, tarayıcıdan gezildi
alindi: 2026-11-23
guvenilirlik: en güncel; canlıda olmayan test özellikleri de var
---

# Staging notları

CMS'in test ortamında görülenler. **Test ortamı canlıdan önde gider:** Game gibi bazı özellikler burada var ama canlıda henüz yok (Mücahit, 2026-11-23). Aşağıda böyle olduğu bilinenler *(test)* ile işaretli. Adres repoya yazılmaz (repo herkese açık); adresi ekipten iste. Gezerken **hiçbir kayıt değiştirilmez ve kaydedilmez**, sadece okunur. Test için bir şey oluşturmak gerekirse adı `TEST – <isim>` olur ve iş bitince silinir.

Bu dosyaya gerçek kullanıcı adı, içerik verisi veya ekran görüntüsü konmaz. Sadece yapı yazılır: menü, sekmeler, alanlar, seçenekler.

## Ana menü (sol, hamburger)

| Menü | Açıklama (ekranda) | Altındakiler |
|---|---|---|
| Create | "From articles to videos, this is the kitchen." | 25 oluşturma sayfası (aşağıdaki modüller) |
| Dashboards | "All available dashboards across the entire CMS." | Aynı 25 modülün liste sayfaları |
| Admin Dashboard | "Manage available roles/users." | Roles, Users |
| AssetHQ | "Manage images, all active events, and more." | Görsel kütüphanesi |
| lookup | "Manage available roles/users." (Admin ile aynı metin, muhtemelen hata) | — |

Altta CMS sürümü yazıyor (2026-11-23: v1.0.2).

**Modüller (Create ve Dashboards altında aynı sırayla):** Show, Livestream, Video, Person, Row, Queue, Category, Genre, Menu, Menu Item, Page, Page Item, Badge, Badges, Exclusive Badge, Parental Guide, Age Restriction, Avatar, Avatar Category, Subscription Package, Error Message, Agreement, License, Segment, Sponsor.

Her modülün iki sayfası var: **Dashboard** (liste) ve **Create** (form). Var olan bir kayıt, Create formunun dolu hali olarak açılır; kaydın tipi adreste yazar (Show için `movie`, `series`, `game`, `live-event`…).

## Tip seçimi (Create açılınca çıkan pencere)

Tipi olan modüllerde Create sayfası boş bir formun üstünde bir pencere (modal) açar; tip seçilmeden devam edilemez.

| Modül | Pencere başlığı · alan | Seçenekler |
|---|---|---|
| Show | Create Show · Video Type | Game *(test)*, Live Event, Movie, Series |
| Video | Create Video · Video Type | Episode, Game Video *(test)*, Single Video, Trailer & Clip-Up |
| Row | Create Row · Row Type | Banner, Cast, Continue Where You Left, EPG, Featured Content, Genre, Livestream, Promoter, Show, Specials, Sponsored, TV Guide, Top 10 (hepsi "… Row") |
| Page Item | Create Page-item · Page Item Type | Carousel, Content Promoter, Frequently Asked Questions, Image Component, Info Component, Intro Media, Livestream Promoter, Show Promoter, Subscription Category Info |

## Show sekmeleri (tipe göre)

| Tip | Sekmeler |
|---|---|
| Series | Master, Languages, Country Based Changes, Episodes, Trailers, Publish Management |
| Movie | Master, Languages, Country Based Changes, Videos, Trailers, Publish Management |
| Game *(test)* | Master, Languages, Country Based Changes, Videos, ScreenShots, Publish Management |
| Live Event | (Figma'ya göre) Master, Languages, Country Based Changes, Publish Management. Staging'de bakılmadı |

Ayrıntılar: [moduller/show.md](../moduller/show.md).
