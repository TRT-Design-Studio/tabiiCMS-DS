---
updated: 2026-10-20
---

# Şu an neredeyiz?

> Bu dosya projenin **genel odağını** gösterir. Sadece odak değiştiğinde güncellenir. Günlük ilerleme `wiki/log/` klasörüne yazılır.

**Aşama:** Faz 2, doküman kuralları ([ROADMAP.md](ROADMAP.md))

## Bilinmesi gerekenler (geçici durum, kural değil)

- **Plan:** Projeye daha fazla komponent eklenecek. Hepsi önce Component Sets'te toplanıyor, bölümlendirme ve düzenleme orada bitince her komponent kendi sayfasına taşınacak. Component Sets'teki başlık ve property özet metinleri (bazıları Türkçe) o düzenlemeye kadar olduğu gibi kalır.
- **Asıl komponent setleri şimdilik Playground sayfasındaki Component Sets frame'inde.** Documentation Draft, Badge ve Input sayfalarındaki setler, dokümanın nasıl görüneceğini denemek için yapılmış kopyalar ve silinecek. Komponent revizyonları Component Sets'te yapılır. Hedef: her komponentin asıl seti kendi sayfasında olacak.
- **Foundations sayfaları:** Colors, Typography, Spacing, Layout Grid (boş, karar bekliyor: muhtemel kırılımlar 1440 / 768 / 375), Icons, Borders, Shadows, Ratios. Eski "Shadows & Borders" ikiye ayrıldı. Sistemden bağımsız referans frame'ler sayfaların solunda "Parked · Reference" bölümlerinde duruyor, silinmedi. Ratio Placeholder'ın ana komponenti de diğerleri gibi Component Sets frame'inde.
- **Dokümanların Overview frame'indeki Introduction (video) frame'i bilinçli olarak gizli.** Video sonra açılacak bir özellik. Açma, silme.
- Token'lar Figma'dan `figma senkron` ile alınır, elle düzenlenmez. Figma adı → class tablosu: [tokens/esleme.md](tokens/esleme.md)
- Figma dosyası: [Tabii CMS – Design System](https://www.figma.com/design/xdSquxB9G5GHgAe4s3QTho/Tabii-CMS---Design-System). Son tarama: [wiki/raporlar/2026-10-14-figma-ilk-tarama.md](wiki/raporlar/2026-10-14-figma-ilk-tarama.md)

## Sıradaki işler

1. Faz 2: doküman şablonu (`rules/core/dokumantasyon/sablon.md`) ve "dokuman: <komponent>" akışı
2. İlk kuralların yazılması (Mücahit'ten gelecek)
3. Ekip arkadaşlarının (`@aysemioki`, `@merveeceylaan`) [README](README.md)'deki "ilk kez" adımlarıyla kurulum yapması
4. Ayşe ve Merve kendi 2FA'larını açınca organizasyonda 2FA zorunluluğunu açmak: [github-kurulumu.md](rehber/yonetici/github-kurulumu.md), Adım 1

## Açık kararlar

- Storybook nerede yayınlanacak? (Repo public olduğu için GitHub Pages ücretsiz. Varsayılan olarak bu)
