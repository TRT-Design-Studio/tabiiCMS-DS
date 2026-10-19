# Token'lar

🔒 **Korumalı klasör. Buradaki dosyalar elle düzenlenmez.**

**Bu klasör ne?** Figma'daki değişkenlerin (renkler, boşluklar, yazı boyutları, köşe yuvarlaklıkları, gölgeler…) bilgisayarın ve kodun okuyabileceği hali. Hepsi Figma'dan **otomatik üretilir**. Böylece Figma'daki isim ile koddaki isim hep aynı kalır.

## Tasarımcıysan sana lazım olan tek dosya

👉 **[esleme.md](esleme.md)**: Figma'daki her değişkenin kodda hangi class'a karşılık geldiğini gösteren tablo. Örneğin `bg/surface` → `bg-surface`.

## Dosyalar

| Dosya | Ne var? | Kimin için? |
|---|---|---|
| `esleme.md` | Figma adı → Tailwind class → değer tablosu | İnsanlar |
| `tailwind.css` | Kodda kullanılan Tailwind teması | Kod (Storybook, videolar) |
| `primitives.json` | Ham değerler: renk paletleri, boşluklar, yazı boyutları… | Kod ve araçlar |
| `semantic.light.json` / `semantic.dark.json` | Anlamlı renkler (`bg/surface`, `text/primary`…), her mod için ayrı | Kod ve araçlar |
| `typography.json` | Yazı stilleri | Kod ve araçlar |
| `shadows.json` | Gölge stilleri | Kod ve araçlar |
| `figma-ham.json` | Figma'dan okunan ham veri. Diğer bütün dosyalar bundan üretilir | Script |

JSON dosyaları **W3C Design Tokens** formatındadır. Bu format tasarım araçları arasında ortak bir standarttır.

## Bir değeri nasıl değiştiririm?

1. Değeri **Figma'da** değiştir.
2. Yapay zekaya **`figma senkron`** yaz.
3. Yapay zeka değişikliği okur, buradaki dosyaları günceller ve ne değiştiğini sana anlatır. Ardından bir PR açar.

Kurallar: [rules/core/token-isimlendirme.md](../rules/core/token-isimlendirme.md)
