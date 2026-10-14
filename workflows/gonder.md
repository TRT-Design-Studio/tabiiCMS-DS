# gonder: işi GitHub'a yükleyip pull request açmak

> Ajan için tarif. Kullanıcı `gonder`, "yükle" veya "pull request aç" dediğinde uygula.

## Adımlar

1. **Branch kontrolü.** `git branch --show-current` çalıştır.
   - Sonuç `main` ise **dur.** Kullanıcıya sade dille "Şu an ana projenin üstündesin, değişiklikleri önce kendi çalışma alanına taşıyalım" de. Ardından `git switch -c <kullanici-adi>/<is-adi>` ile değişiklikleri yeni bir branch'e taşı.

2. **Oturum kaydı var mı?** Bu branch'te `wiki/log/` altına yeni bir kayıt eklenmediyse önce [oturum-bitir.md](oturum-bitir.md) adımlarını uygula.

3. **Kontrol.**
   ```
   node scripts/index-olustur.mjs
   ```
   ```
   node scripts/kontrol.mjs
   ```
   Hata varsa düzelt ve kontrolü tekrar çalıştır. Düzeltemediğin bir hata varsa kullanıcıya göster ve sor.

4. **Korumalı dosya uyarısı.** `git status --porcelain` çıktısında `rules/core/`, `AGENTS.md`, `CLAUDE.md`, `.github/`, `scripts/` veya `tokens/` varsa kullanıcıyı uyar: "Bu değişiklik proje sahibinin onayını bekleyecek."

5. **Özet ve onay.** Değişen dosyaları **sade dille** listele (örnek: "Badge dokümantasyonu eklendi, sözlüğe 2 kelime eklendi") ve sor: "Göndereyim mi?" Onay gelmeden devam etme.

6. **Kaydet ve yükle.**
   ```
   git add -A
   ```
   ```
   git commit -m "<Kısa Türkçe açıklama>"
   ```
   ```
   git push -u origin HEAD
   ```

7. **Pull request aç.** Başlık commit mesajıyla aynı olsun. Açıklama `.github/pull_request_template.md` şablonuna göre doldurulsun.
   ```
   gh pr create --title "<başlık>" --body "<açıklama>"
   ```
   Bu branch için açık bir PR zaten varsa yenisini açma. Yükleme o PR'ı kendiliğinden günceller.

8. **Kullanıcıya bildir.** PR linkini ver ve sıradaki adımı söyle:
   > Pull request açıldı: <link>. Birkaç saniye içinde otomatik kontrol çalışacak (yeşil tik ✓ bekliyoruz). Sonra bir ekip arkadaşının onaylaması gerekiyor. Onay beklerken yeni bir işe `basla` diyerek geçebilirsin.
