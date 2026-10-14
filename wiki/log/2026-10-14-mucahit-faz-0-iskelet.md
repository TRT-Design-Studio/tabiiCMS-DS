---
date: 2026-10-14
author: "@mucahitpuren"
branch: main (ilk kurulum)
---

# Faz 0: proje iskeleti

## Ne yapıldı?
- Klasör yapısı kuruldu: `rules/`, `proposals/`, `workflows/`, `wiki/`, `rehber/`, `components/`, `tokens/`, `scripts/`.
- `AGENTS.md` ana talimat dosyası yazıldı. `CLAUDE.md` bu dosyaya yönlendiriyor.
- Sıfırdan başlayan biri için rehberler yazıldı (`rehber/01`–`06`, sözlük, GitHub Actions, sorun giderme, yönetici kurulumu).
- `basla`, `oturum-bitir` ve `gonder` iş akışları yazıldı.
- `scripts/kontrol.mjs` ve `.github/workflows/kontrol.yml` ile otomatik kontrol kuruldu.

## Alınan kararlar
- Repo **public** olacak ve organizasyonun altında duracak. Böylece ruleset ve CODEOWNERS ücretsiz geliyor, fork modeline gerek kalmıyor.
- Ekip üyeleri `tasarim` takımı üzerinden **Write** yetkisi alır. main ruleset ile korunur.
- Log kayıtları tek dosya değil, kayıt başına ayrı dosya. Çakışma olmasın diye.
- Araç bağımsızlığı: asıl talimatlar `AGENTS.md` ve `workflows/` içinde. Araca özel dosyalar sadece oraya yönlendirir.

## Açık sorular
- Yok. Organizasyon: `TRT-Design-Studio`, proje sahibi: `@mucahitpuren`.

## GitHub kurulumu (yapıldı)
- Repo: `TRT-Design-Studio/tabiiCMS-DS` (public). İlk kayıt main'e yüklendi, `kontrol` Actions'ı ✓ geçti.
- `tasarim` takımı kuruldu (`@aysemioki`, `@merveeceylaan`), repoda **Write** yetkisi var.
- PR ayarları: sadece squash merge, merge edilen branch'ler otomatik siliniyor.
- `main-koruma` kural seti: PR zorunlu, 1 onay, Code Owner onayı, `kontrol` geçmeli, force push ve silme engelli. Organization admin bypass modu "sadece PR ile".
- Bu güncellemeler ilk PR olarak gönderildi.

## Sıradaki adım
- Figma linki gelince Faz 1.
