---
updated: 2026-11-02
---

# Şu an neredeyiz?

> Bu dosya projenin **genel odağını** gösterir. Sadece odak değiştiğinde güncellenir. Günlük ilerleme `wiki/log/` klasörüne yazılır.

**Aşama:** Faz 2, doküman kuralları ([ROADMAP.md](ROADMAP.md))

## Bilinmesi gerekenler (geçici durum, kural değil)

- **Komponentler kendi sayfalarında.** Figma'daki Components bölümünde amaca göre gruplanmış sayfalar var: Buttons, Badges & Status, Form, Menu, Tooltip, Navigation, Avatar, Media, Cards, Data Display, Layout. Gruplama boya göre değil amaca göre yapılır, küçük gruplar sorun değil. Boy ölçeği: Button 28/32/36/40 (hug), Input 32/36/40 (sabit, varsayılan 36).
- **Documentation Draft, Badge ve Input sayfalarındaki setler** dokümanın nasıl görüneceğini denemek için yapılmış kopyalar. Asıl setler değil, revizeler bunlara yapılmaz.
- **Playground'daki ekranlar** (Overview, Shows, Create Show bölümleri) referans tasarımların DS komponentleriyle kurulmuş halleri. Web 1440, tablet 768, mobil 375.
- **Foundations sayfaları:** Colors, Typography, Spacing, Layout Grid (boş, karar bekliyor: muhtemel kırılımlar 1440 / 768 / 375), Icons, Borders, Shadows, Ratios. Eski "Shadows & Borders" ikiye ayrıldı. Sistemden bağımsız referans frame'ler sayfaların solunda "Parked · Reference" bölümlerinde duruyor, silinmedi.
- **Dokümanların Overview frame'indeki Introduction (video) frame'i bilinçli olarak gizli.** Video sonra açılacak bir özellik. Açma, silme.
- Token'lar Figma'dan `figma senkron` ile alınır, elle düzenlenmez. Figma adı → class tablosu: [tokens/esleme.md](tokens/esleme.md)
- Figma dosyası: [Tabii CMS – Design System](https://www.figma.com/design/xdSquxB9G5GHgAe4s3QTho/Tabii-CMS---Design-System). Son tarama: [wiki/raporlar/2026-10-14-figma-ilk-tarama.md](wiki/raporlar/2026-10-14-figma-ilk-tarama.md)

## Sıradaki işler

1. **Komponent revizesi:** Playground → "Reference vs DS" frame'i üzerinden referanslarla karşılaştırma ve küçük revizeler. Açık konular: [revize planı](wiki/raporlar/2026-10-20-komponent-revize-plani.md) → "Karşılaştırmada çıkan revize konuları".
2. Faz 2: doküman şablonu (`rules/core/dokumantasyon/sablon.md`) ve "dokuman: <komponent>" akışı
3. İlk kuralların yazılması (Mücahit'ten gelecek)
4. Ekip arkadaşlarının (`@aysemioki`, `@merveeceylaan`) [README](README.md)'deki "ilk kez" adımlarıyla kurulum yapması
5. Ayşe ve Merve kendi 2FA'larını açınca organizasyonda 2FA zorunluluğunu açmak: [github-kurulumu.md](rehber/yonetici/github-kurulumu.md), Adım 1

## Açık kararlar

- Storybook nerede yayınlanacak? (Repo public olduğu için GitHub Pages ücretsiz. Varsayılan olarak bu)
