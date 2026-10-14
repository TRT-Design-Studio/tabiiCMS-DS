---
id: core.video-dagitim
title: Videolar nerede durur?
owner: "@mucahitpuren"
status: active
version: 1
applies_to: video
updated: 2026-10-14
---

# Videolar nerede durur?

## Amaç

Repo hafif ve hızlı kalsın, videolar da herkesin kolayca ulaşabileceği bir yerde dursun.

## Kural

1. **Render edilmiş videolar (MP4) git'e girmez.** Git bir dosyanın her sürümünü sonsuza kadar saklar. Her güncellemede yeniden render edilen 1080p60 videolar repoyu kısa sürede gigabaytlarca büyütür.
2. **Git'e giren, videonun tarifidir.** Remotion kodu ve sahne tanımları git'te durur. Bunlar küçük metin dosyalarıdır. Aynı tariften video her zaman yeniden üretilebilir.
3. **Render çıktısı `out/` klasörüne yazılır.** Bu klasör `.gitignore` dosyasında listelidir, yani git'e hiç gönderilmez.
4. **Paylaşım GitHub Releases üzerinden yapılır.** Releases, repoya bağlı bir indirme rafıdır. Bir tasarım sistemi sürümü yayınlanınca o sürümün videoları release'e dosya olarak eklenir. Dokümantasyon bu dosyaların linkini verir.

## İstisnalar

- İnceleme için tek bir video paylaşmak gerekiyorsa PR'a yorum olarak sürükleyip bırakılabilir. GitHub, PR yorumlarına video yüklenmesine izin verir ve bu video git'e girmez.
