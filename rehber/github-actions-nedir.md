# GitHub Actions nedir?

## Kısaca

GitHub Actions, **GitHub'ın bilgisayarlarında otomatik çalışan bir yardımcı robottur.** Bir olay olduğunda (örneğin biri PR açtığında) uyanır, kendisine verilen tarifi uygular ve sonucu söyler.

Tarifler `.github/workflows/` klasöründeki dosyalarda yazar. Bu dosyaları sen yazmazsın ve değiştirmezsin.

```
Olay                →  Robot uyanır  →  Tarifi uygular            →  Sonuç
"PR açıldı"            GitHub'da        "kurallar doğru formatta     ✓ veya ✗
                                         mı kontrol et"
```

Repo public olduğu için GitHub Actions **ücretsizdir.**

## Bu projede ne yapıyor?

| Tarif | Ne zaman çalışır? | Ne yapar? |
|---|---|---|
| **kontrol** | Her PR açıldığında ve her güncellendiğinde | Kural dosyalarında bilgi bloğu (frontmatter) var mı, her klasörde README var mı, linkler kırık mı, içindekiler listesi güncel mi, bakar |
| *(ileride)* Storybook yayını | main'e her merge'de | Storybook'u internete yükler |
| *(ileride)* Video üretimi | Bir komponent değiştiğinde | O komponentin videosunu yeniden üretir |

## Senin yapman gereken

**Hiçbir şey.** Sadece PR sayfasındaki sonuca bak:

- ✓ **Yeşil tik:** Her şey yolunda.
- 🟡 **Sarı nokta:** Kontrol hâlâ çalışıyor. Birkaç saniye bekle.
- ✗ **Kırmızı çarpı:** Bir sorun var.

## Kırmızı çarpı görürsem?

**En kolay yol:** Yapay zekaya şunu yaz:

```
PR'daki kontrol neden kırmızı, düzelt
```

**Kendin bakmak istersen:**
1. PR sayfasının altında, kırmızı çarpılı satırdaki **Details** linkine tıkla.
2. Hata mesajları Türkçedir ve neyin eksik olduğunu söyler. Örnek:
   `✗ rules/team/ornek.md: frontmatter'da "owner" alanı eksik.`

**Aynı kontrolü kendi bilgisayarında çalıştırmak için:** Terminal'de proje klasöründeyken şunu yaz:

```
node scripts/kontrol.mjs
```
