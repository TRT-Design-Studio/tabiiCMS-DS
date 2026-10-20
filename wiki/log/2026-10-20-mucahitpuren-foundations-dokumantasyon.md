---
date: 2026-10-20
author: "@mucahitpuren"
branch: mucahitpuren/foundations-dokumantasyon
---

# Foundations sayfaları ve dokümantasyonu (Figma)

## Ne yapıldı? (hepsi Figma'da)
- **Sayfa yapısı:** "Shadows & Borders" → **Borders** olarak yeniden adlandırıldı. Yeni sayfalar: **Shadows**, **Ratios**, **Layout Grid** (boş). Foundations sırası: Colors, Typography, Spacing, Layout Grid, Icons, Borders, Shadows, Ratios.
- **Ratio Placeholder** komponent seti (Ratios sayfasında):
  - 10 oran: 16:9, 21:9, 3:2, 4:3, 5:4, 1:1, 4:5, 3:4, 2:3, 9:16. Uzun kenar 240 px, varsayılan 16:9.
  - Oran her varyantta kilitli.
  - Property'ler: Ratio, Show Label, Icon.
  - Renkler değişkenlere bağlı: `bg/subtle`, `text/tertiary`. İkon boyutu Spacing/8.
- **Dokümantasyon** (komponent dokümanlarıyla aynı görünüm, bütün değerler değişkene ve stile bağlı):
  - **Colors:** Overview (53 semantic token, Light/Dark, Tailwind, kullanım), Primitives (68 renk), Usage (3 Do/Don't), Changelog
  - **Typography:** Overview (font ailesi, 9 ağırlık), Text styles (8 boyut), Usage (komponentlerin kullandığı 10 stil, Do/Don't), Changelog. Mevcut specimen frame korundu, Overview'un yanına taşındı.
  - **Spacing:** Overview (36 değer; çubuklar değişkene bağlı), Usage (komponent boşlukları, ikon boyutları, Do/Don't), Changelog
  - **Borders:** Overview (köşe yuvarlaklığı, kalınlık, border renkleri; "Used in" komponentlerden okundu), Focus (kural ve gerçek Focused instance'lar), Changelog
  - **Shadows:** Overview (7 drop, 3 inset; önizlemeler effect style'a bağlı; Layers tablosu **Draft**), Usage, Changelog
  - **Ratios:** Overview, Properties, Usage, Changelog
- **Referans frame'ler** Colors, Spacing ve Borders sayfalarında solda "Parked · Reference (not part of the system)" bölümlerine taşındı. Silinmedi.
- Icons sayfasına dokunulmadı.

## Alınan kararlar
- Shadows ve Borders ayrı sayfalar. Ratios sayfasında sadece oran placeholder'ları var. Motion ve Logos sayfaları şimdilik yok.
- Oranlar için yeni değişken yok. Kodda Tailwind `aspect-<w>/<h>` kullanılıyor (ör. `aspect-16/9`).
- Foundations dokümanlarının iskeleti: Overview + sayfaya özel frame'ler + Usage (Do/Don't) + Changelog. Dokümanlarda dil İngilizce.

## Açık sorular
- Layout Grid sayfası: kırılımlar ve grid kararı (muhtemel 1440 / 768 / 375).

## Sıradaki adım
- Faz 2: komponent doküman şablonunu kurala dökmek (`rules/core/dokumantasyon/sablon.md`) ve `dokuman: <komponent>` akışı. Bu oturumda foundations için kullanılan doküman yapı taşları bu akışın temeli olabilir.

## Güncelleme: Mücahit'in revizeleri
- **Genel kurallar** artık `rules/core/dokumantasyon/frame-duzeni.md` dosyasında:
  - frame sırası Overview → Changelog → diğerleri
  - Overview girişi: ortada 256 px kare, ortalanmış başlık ve meta
  - altında gizli 16:9 video alanı
  - ana komponentler doküman sayfasında durmaz
  - sayfa zemini #171717
- **Colors:** Overview sadece giriş ve gizli video. Semantic renkler ayrı **Semantic Colors** frame'ine taşındı. Usage silindi.
- **Typography:** Overview yeniden kuruldu. Text Styles ve Usage silindi. Sayfada Overview, Changelog ve Typography frame'i kaldı.
- **Spacing:** Ölçek tablosu ayrı **Scale** frame'ine taşındı. Usage silindi.
- **Borders:** **Corner Radius** ve **Border Width** ayrı frame'lere taşındı. Border colors ve Focus silindi.
- **Shadows:** Layers bölümü silindi. Drop ve inset tabloları Overview'da, gizli videonun altında. Usage duruyor.
- **Ratios:**
  - Ana komponent seti Playground → Component Sets frame'ine taşındı.
  - Dokümanda **Component Sets** frame'i var, varyantlar değil instance'lar.
  - Overview'da sadece All ratios tablosu kaldı. Usage silindi.
- Bütün foundations sayfalarının (Icons ve Layout Grid dahil) zemini #171717 yapıldı.

