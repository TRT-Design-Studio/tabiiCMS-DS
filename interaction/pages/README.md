# Playground sayfaları

**Bu klasör ne?** Figma'daki her komponent sayfası için bir klasör. Her biri bir code layer olur.

| Dosya | İş |
|---|---|
| `page.json` | Sayfa adı ve kullandığı komponentler. İç içe olanlar yazılmaz, `meta.json` ile kendiliğinden eklenir |
| `page.js` | Sidebar'daki komponentler (ad, ikon) ve her birinin kontrolleri (select, anahtar, yazı) |

**Ne zaman dokunurum?** Bir komponente yeni bir property eklendiğinde kontrolü buraya eklemek için.

**İstisna:** `page.json` içinde `raw` alanı olan sayfa spec'ten üretilmez; o klasördeki elle yazılmış kod tek dosyada birleştirilir. Şu an sadece [sidebar](sidebar/README.md).

Sayfalar: [buttons](buttons/README.md) · [badges](badges/README.md) · [menu](menu/README.md) · [tooltip](tooltip/README.md) · [breadcrumb](breadcrumb/README.md) · [pagination](pagination/README.md) · [stepper](stepper/README.md) · [tabs](tabs/README.md) · [cards](cards/README.md) · [table](table/README.md) · [list-item](list-item/README.md) · [sidebar](sidebar/README.md) (istisna)
