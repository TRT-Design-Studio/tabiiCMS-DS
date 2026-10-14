---
date: 2026-10-14
author: "@mucahitpuren"
branch: mucahitpuren/tailwind-ve-video-kurallari
---

# Tailwind ve video kuralları

## Ne yapıldı?
- `rules/core/tailwind-temel.md`: Tailwind v4 varsayılan teması bütün ölçeklerin kaynağı. Figma ile Tailwind arasındaki farklar düzeltilmez, uyarı olarak sunulur.
- `rules/core/video/`: teknik özellikler (1080p, 60fps, sessiz, 45–60 sn), veri kaynağı (her şey Figma değişkenlerinden, metinler İngilizce, sadece var olan property'ler), dağıtım (MP4 git'e girmez, GitHub Releases).
- `AGENTS.md`: insanlara yönelik metinde Figma node ID'si kullanılmaz, onun yerine sayfa ve frame adı yazılır.
- `.gitignore`: video dosyaları git'e girmez.

## Alınan kararlar
- MP4 git'e girmez, GitHub Releases'ta durur. Git her sürümü sakladığı için tekrar tekrar render edilen videolar repoyu şişirirdi.
- İlk video kurgusunu yapay zeka önerir. Proje sahibi beğenmezse örnek bir video gönderecek.

## Açık sorular
- Dokümantasyonun dili (Türkçe mi İngilizce mi)? Video metinleri İngilizce.

## Sıradaki adım
- Figma linki gelince dosyanın tamamını taramak (Faz 1). Gerçek komponentler Component Sets ve Screens frame'lerinde. Playground'daki atoms/molecules/organisms/templates, Colors referans frame'i, Spacing ve Shadow/Borders sayfaları referans.
