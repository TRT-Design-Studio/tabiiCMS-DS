---
date: 2026-11-11
author: "@merveeceylaan"
branch: merveeceylaan/page-header-avatar-media-cards-dokumantasyonu
---

# Page Header, Avatar, Media ve Cards dokümantasyonu

`dokuman: <sayfa>` ile dört sayfa şablona göre dokümante edildi.

## Ne yapıldı?
- Dört sayfaya da doküman frame'leri kuruldu. Sayfa zeminleri `#171717` yapıldı.
- Asıl setler Component Sets tablolarına taşındı, kopyalanmadı. Boşalan eski grup frame'leri silindi.
  - Page Header: Page Header.
  - Avatar: Avatar.
  - Media: Image, Logo.
  - Cards: Card, Card Header, Stat Card, Icon Stat, User Card.
- Examples (Playground): Shows ve Overview başlıkları, mobil Create Show başlığı; people picker satırı, kullanıcı menüsü; tablo satırında küçük görsel; Overview'daki Stat Card ve Card'lar.
- Dokuz kimlik kartı otomatik taslaktan dokümana göre yeniden yazıldı: `page-header`, `avatar`, `image`, `logo`, `card`, `card-header`, `stat-card`, `icon-stat`, `user-card`.

## Alınan kararlar
- Page Header, Avatar ve Media'da Interaction frame'i yok: etkileşimleri yok (Divider'daki karara göre). Cards'ta User Card menü açtığı için Interaction duruyor.
- State'i olmayan setlerde Component Sets'teki States tablosu kaldırıldı. Cards'ta sadece User Card için States tablosu var.
- Image tablosunda iki oran yan yana duruyor (10 oran, 5 satır); tek sütunda sayfa çok uzuyordu.
- Image ve Page Header anatomilerinde bileşen gri sahnede görünsün diye arkasına `bg/surface` zemin kondu (Image).
- Avatar Small'ın boyu `Spacing/7` (28) değişkenine bağlandı (Merve, 2026-11-11).
- Card'ın Body yer tutucusu İngilizce yapıldı: "Body slot — place content here" (Merve, 2026-11-11).
- Page Header, Card, Card Header, Icon Stat, User Card ve Logo açıklamaları kullanımı anlatacak şekilde yeniden yazıldı (Merve, 2026-11-11). Page Header'daki eski "Show Meta" adı kalktı.
- Icon Stat kullanılmasa da kalıyor (Merve, 2026-11-11).

## Açık sorular
- Yok.

## Sıradaki adım
- Kalan sayfalar `dokuman: <sayfa>` ile.
