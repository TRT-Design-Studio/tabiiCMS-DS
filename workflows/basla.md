# basla: yeni bir işe başlamak

> Ajan için tarif. Kullanıcı `basla`, `basla: <iş>` veya "yeni işe başlıyorum" dediğinde uygula. Kullanıcıya her adımı sade Türkçeyle, teknik terim kullanmadan (ya da açıklayarak) anlat.

## Adımlar

1. **İşi öğren.** Kullanıcı ne yapacağını yazmadıysa sor. İşten kısa bir ad üret: küçük harf, ASCII, tireli, en fazla 5 kelime. Örnek: "Badge dokümantasyonu" → `badge-dokumantasyonu`

2. **Yarım kalmış değişiklik var mı?** `git status --porcelain` çalıştır.
   - Çıktı boşsa → 3. adıma geç.
   - Doluysa → kullanıcıya hangi dosyaların değiştiğini listele ve sor: "Bunlar önceki bir işten kalmış. (a) Önce onları gönderelim mi, (b) bir kenara kaldırayım mı (`git stash`), (c) bu yeni işe mi dahil?" Kullanıcı cevap vermeden devam etme.

3. **Güncel hali çek.**
   ```
   git switch main
   ```
   ```
   git pull --ff-only
   ```
   Hata alırsan kullanıcıya sade dille anlat ve [rehber/sorun-giderme.md](../rehber/sorun-giderme.md) dosyasına bak.

   **Eski branch'leri temizle.** PR'ı merge edilen branch'ler GitHub'da kendiliğinden silinir ama bilgisayarda kalır.
   ```
   git fetch --prune
   ```
   ```
   git branch -vv
   ```
   Çıktıda `: gone]` yazan branch'leri `git branch -D <ad>` ile sil ve kullanıcıya tek cümleyle söyle: "İşi biten 2 eski çalışma alanını temizledim."

4. **Kullanıcı adını bul.**
   ```
   gh api user --jq .login
   ```
   Komut çalışmazsa kullanıcıya GitHub kullanıcı adını sor.

5. **Branch aç.**
   ```
   git switch -c <kullanici-adi>/<is-adi>
   ```

6. **Bağlamı yükle.** [NOW.md](../NOW.md) dosyasını, `wiki/log/` içindeki son 3 kaydı ve [wiki/index.md](../wiki/index.md) üzerinden işle ilgili kuralları oku.

7. **Kullanıcıya bildir.** Örnek:
   > Projenin en güncel halini çektim ve senin için `ayse-yilmaz/badge-dokumantasyonu` adında yeni bir çalışma alanı (branch) açtım. Burada yaptığımız değişiklikler sen `gonder` diyene kadar kimseyi etkilemez. Başlayalım mı?
