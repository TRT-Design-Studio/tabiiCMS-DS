# Yol haritası

Büyük resim: Figma'da tek bir kaynak var, diğer her şey ondan türüyor.

```
Figma (değişkenler + komponent setleri)
   │  Figma MCP ile senkron
   ▼
tokens/                      → Figma değişkenlerinin JSON hali
   ▼
components/<isim>/spec.md    → komponentin kimlik kartı
   ├──► dokümantasyon        (Figma'da, komponentin kendi sayfasında; `dokuman: <sayfa>`)
   ├──► Figma Make           (çalışan komponent, dokümanın Interaction frame'ine gömülür)
   ├╌╌► Storybook            (rafta, 2026-11-10)
   └╌╌► Remotion videoları   (rafta, 2026-11-10)
```

| Faz | Ne yapılacak | Çıktı | Durum |
|---|---|---|---|
| **0. İskelet** | Klasör yapısı, AGENTS.md, rehberler, `basla` / `gonder` akışları, GitHub ayarları | Ekibin çalışabildiği repo | ✅ |
| **1. Figma denetimi** | Değişkenleri okumak, isimlendirme kurallarını çıkarmak, silinecek referans sayfaları listelemek, token JSON | `tokens/`, `rules/core/token-isimlendirme.md`, `workflows/figma-senkron.md` | ✅ |
| **2. Doküman kuralları** | Documentation Draft, Icons, Badge ve Input sayfalarından şablonu ve kuralları çıkarmak. "Butonun dokümanını yap" tek cümlesiyle çalışan akış | `rules/core/dokumantasyon/sablon.md`, `workflows/dokuman.md`. Dokümante edilenler: Input, Buttons, Badges & Status | 🟡 |
| **3. Kod + Storybook** | Button / Badge / Input (Tailwind teması Faz 1'de hazırlandı: `tokens/tailwind.css`), Storybook, backend'siz demo sayfaları | Çalışan Storybook | ⏸ Rafta |
| **4. Video** | Remotion şablonu: `spec.md`'deki state'leri sırayla gösteren 45–60 sn kurgu | `workflows/video-uret.md` | ⏸ Rafta |
| **5. Senkron** | Token senkronu hazır (Faz 1). Kalan: Phosphor ikon güncelleme scripti, Storybook'un otomatik yayını | Değişiklikler kendiliğinden her yere yayılır | ⚪ |

## Bilinen kısıtlar

- Figma'nın değişkenleri dışarıdan okuma API'si sadece Enterprise planda var. Bu yüzden senkronu yapay zeka Figma MCP üzerinden yapar (`figma senkron`).
- Tailwind v4'te `p-2` = 8px. Bu, bizim `spacing/2` = 8px tanımımızla aynı. Renk ve metin stili isimleri Figma'dan **üretilerek** eşlenir: [tokens/esleme.md](tokens/esleme.md)
- İkonlar: [Phosphor Icons](https://phosphoricons.com), sadece `regular` ve `fill` ağırlıkları.
- Bayraklar: [circle-flags](https://github.com/HatScripts/circle-flags), 265 ülke bayrağı. Figma'da Icons sayfasında, her biri `Flag/<ülke kodu>` komponenti. Renklendirilmez.
