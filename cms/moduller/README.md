# Modüller

**Bu klasör ne?** Mevcut CMS'in her modülü (Show, Video, Row…) için bir dosya. Her dosya modülün **bugünkü halini** anlatır: listesi, oluşturma akışı, sekmeleri, alanları, kaynaklar arasındaki farklar ve gözlenen sorunlar.

**Ne zaman dokunurum?** Bir modülü incelerken (`cms incele: <modül>`) veya mevcut sistemde bir şeyin değiştiğini fark ettiğinde. Yeni tasarımın kararları buraya değil, [kararlar/](../kararlar/README.md) klasörüne yazılır.

## Modül dosyası nasıl yazılır?

[show.md](show.md) örnektir. Dosya adı modülün adıdır (küçük harf, tireli): `page-item.md`. En üstte bilgi bloğu:

```yaml
---
modul: Page Item
durum: incelendi        # incelenmedi | taslak | incelendi
kaynaklar: [staging, figma, bilgi-mimarisi]
guncellendi: 2026-11-23
---
```

Bölümler: modülün ne olduğu (1–2 cümle) · Liste · Oluşturma akışı · sekmeler ve alanlar · Kaynaklar arası farklar · Gözlemler (karar değil).

## Bütün modüller

Sıra, staging'deki menü sırasıdır. Durum `incelenmedi` olanların dosyası henüz yok.

| Modül | Ne? | Tipler (staging) | Figma ekranı | Durum |
|---|---|---|---|---|
| [Show](show.md) | Dizi, film, canlı etkinlik | Live Event, Movie, Series (+ Game, sadece test) | 39 | incelendi |
| Livestream | Canlı yayın kanalı (TV, Radyo) | — | 8 | incelenmedi |
| Video | Show'a bağlı video | Episode, Single Video, Trailer & Clip-Up (+ Game Video, sadece test) | 27 | incelenmedi |
| Person | Oyuncu, yönetmen, yazar | — | 4 | incelenmedi |
| Row | Ana sayfadaki içerik sırası | 13 tip (Banner, Cast, Continue Where You Left, EPG, Featured Content, Genre, Livestream, Promoter, Show, Specials, Sponsored, TV Guide, Top 10) | 35 | incelenmedi |
| Queue | Elle seçilmiş içerik listesi | — | 10 | incelenmedi |
| Category | İçerik kategorisi | — | 6 | incelenmedi |
| Genre | Tür | — | 5 | incelenmedi |
| Menu | Uygulama menüsü | — | 4 | incelenmedi |
| Menu Item | Menüdeki bağlantı | — | 5 | incelenmedi |
| Page | Sayfa | — | 3 | incelenmedi |
| Page Item | Sayfadaki bileşen | 9 tip (Carousel, Content Promoter, FAQ, Image Component, Info Component, Intro Media, Livestream Promoter, Show Promoter, Subscription Category Info) | 32 | incelenmedi |
| Badge | Rozet | — | 5 | incelenmedi |
| Badges | Rozet (ikinci set) | — | 6 | incelenmedi |
| Exclusive Badge | Özel rozet | — | 5 | incelenmedi |
| Parental Guide | Ebeveyn rehberi | — | 4 | incelenmedi |
| Age Restriction | Yaş sınırı | — | 5 | incelenmedi |
| Avatar | Profil avatarı | — | 3 | incelenmedi |
| Avatar Category | Avatar grubu | — | 5 | incelenmedi |
| Subscription Package | Abonelik paketi | — | 4 | incelenmedi |
| Error Message | Uygulamadaki hata metni | — | 6 | incelenmedi |
| Agreement | Sözleşme metni | — | 4 | incelenmedi |
| License | Yayın hakkı / lisans | — | 8 | incelenmedi |
| Segment | Kullanıcı segmenti | — | 2 | incelenmedi |
| Sponsor | Sponsor | — | 2 | incelenmedi |
| Admin Dashboard | Roller ve kullanıcılar | — | 16 | incelenmedi |
| AssetHQ | Görsel kütüphanesi | — | 5 | incelenmedi |
| lookup | Bilinmiyor | — | 0 | incelenmedi |

"Ne?" sütunu adlardan çıkarılmış tahmindir; modül incelenince düzeltilir.
