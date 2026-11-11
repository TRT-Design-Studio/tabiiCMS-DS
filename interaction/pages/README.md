# Playground sayfaları

**Bu klasör ne?** Figma'daki her komponent sayfası için bir klasör. Her biri bir code layer olur.

| Dosya | İş |
|---|---|
| `page.json` | Sayfa adı ve kullandığı komponentler. İç içe olanlar yazılmaz, `meta.json` ile kendiliğinden eklenir |
| `page.js` | Sidebar'daki komponentler (ad, ikon) ve her birinin kontrolleri (select, anahtar, yazı) |

**Ne zaman dokunurum?** Bir komponente yeni bir property eklendiğinde kontrolü buraya eklemek için.

Sayfalar: [buttons](buttons/README.md) · [badges](badges/README.md) · [menu](menu/README.md)
