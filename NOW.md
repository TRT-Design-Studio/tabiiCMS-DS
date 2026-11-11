---
updated: 2026-11-10
---

# Şu an neredeyiz?

> Bu dosya projenin **genel odağını** gösterir. Sadece odak değiştiğinde güncellenir. Günlük ilerleme `wiki/log/` klasörüne yazılır.

**Aşama:** Faz 2, komponent dokümantasyonu. Şablon hazır; Input, Select, Textarea, Form Field, Number Stepper, Phone Field, Buttons, Badges, Status & Tag, Menu, Sidebar, Tooltip, Labels & Helper, Filter Group dokümante edildi ([ROADMAP.md](ROADMAP.md))

## Bilinmesi gerekenler (geçici durum, kural değil)

- **Komponentler kendi sayfalarında.** Düzen Flowbite Pro'daki gibi: Components bölümünde amaca göre gruplar var. Büyük gruplar (Form, Navigation, Data Display) boş bir başlık sayfası ve altındaki `--- <Aile>` alt sayfalarından oluşur (Form → Input, Select, Datepicker…; Navigation → Sidebar, Top Bar, Divider…). Diğer gruplar (Buttons, Badges, Status & Tag, Menu, Tooltip, Page Header, Avatar, Media, Cards) tek sayfadır. Action Bar ve Toolbar komponent değil, elle kurulur. Boy ölçeği: Button 28/32/36/40 (hug), Input 32/36/40 (sabit, varsayılan 36), Avatar 28/32/40.
- **Status / Badge / Tag ayrımı anlama göre (2026-11-04).** İçeriğin durumu → Status (tek set; Interactive açıkken chevron + hover). Arayüzde dikkat çekme → Badge Count, Badge Dot, Badge Label. Kullanıcının eklediği içerik verisi → Tag (Static, Removable, Link; Default, Hover, Disabled; Static için Read-only). Eski Badge, Status/Select ve Status Dot silindi.
- **Documentation Draft, Badge ve Input sayfalarındaki setler** dokümanın nasıl görüneceğini denemek için yapılmış kopyalar. Asıl setler değil, revizeler bunlara yapılmaz.
- **Playground'daki ekranlar** (Overview, Shows, Create Show bölümleri) referans tasarımların DS komponentleriyle kurulmuş halleri. Web 1440, tablet 768, mobil 375.
- **Foundations sayfaları:** Colors, Typography, Spacing, Layout Grid (boş, karar bekliyor: muhtemel kırılımlar 1440 / 768 / 375), Icons, Borders, Shadows, Ratios. Eski "Shadows & Borders" ikiye ayrıldı. Sistemden bağımsız referans frame'ler sayfaların solunda "Parked · Reference" bölümlerinde duruyor, silinmedi.
- **Dokümantasyon başladı (2026-11-10).** Her komponent kendi sayfasında dokümante edilir, ana set dokümanın Component Sets frame'inde durur. Komut: `dokuman: <sayfa>`, şablon: [rules/core/dokumantasyon/sablon.md](rules/core/dokumantasyon/sablon.md). İlk dokümante edilen: Input. Documentation Draft, Badge ve Input deneme sayfaları bütün komponentler dokümante edilince silinecek.
- **Storybook ve video rafta (2026-11-10).** `spec.md` kayıtları yine yazılır. Çalışan komponent, Figma Make ile dokümandaki Interaction frame'ine gömülecek (sonraki aşama).
- **Dokümanların Overview frame'indeki Introduction (video) frame'i bilinçli olarak gizli.** Video sonra açılacak bir özellik. Açma, silme.
- **Komponent adlarında eğik çizgi yok (2026-11-10).** "Nav Item", "Table Cell", "Badge Count" gibi; alt komponentler de ana adla boşlukla yazılır.
- Token'lar Figma'dan `figma senkron` ile alınır, elle düzenlenmez. Figma adı → class tablosu: [tokens/esleme.md](tokens/esleme.md)
- Figma dosyası: [Tabii CMS – Design System](https://www.figma.com/design/xdSquxB9G5GHgAe4s3QTho/Tabii-CMS---Design-System). Son tarama: [wiki/raporlar/2026-10-14-figma-ilk-tarama.md](wiki/raporlar/2026-10-14-figma-ilk-tarama.md)

## Sıradaki işler

1. **Komponent revizesi:** Playground → "Reference vs DS" frame'i üzerinden referanslarla karşılaştırma ve küçük revizeler. Açık konular: [revize planı](wiki/raporlar/2026-10-20-komponent-revize-plani.md) → "Karşılaştırmada çıkan revize konuları".
2. Faz 2: kalan komponent sayfalarını `dokuman: <sayfa>` ile tek tek dokümante etmek. Bitenler: Input, Select, Textarea, Form Field, Number Stepper, Phone Field, Buttons, Badges, Status & Tag, Menu, Sidebar, Tooltip, Labels & Helper, Filter Group. Top Bar, File Upload ve Rich Text Editor eksikleri tamamlanınca dokümante edilecek.
3. Dokümanlardaki Interaction frame'lerine Figma Make ile çalışan komponentleri gömmek (sonraki aşama)
4. İlk kuralların yazılması (Mücahit'ten gelecek)
5. Ekip arkadaşlarının (`@aysemioki`, `@merveeceylaan`) [README](README.md)'deki "ilk kez" adımlarıyla kurulum yapması
6. Ayşe ve Merve kendi 2FA'larını açınca organizasyonda 2FA zorunluluğunu açmak: [github-kurulumu.md](rehber/yonetici/github-kurulumu.md), Adım 1

## Açık kararlar

- Komponentlerin ekip varsayılan boyutu: Input için Medium (Figma panelden Small ekliyor). Button, Icon Button, Split Button (Figma: XSmall), Status ve Tag (Figma: Small) için karar bekleniyor.
- Storybook yayını rafta; plan değişirse yeniden konuşulacak.
