# figma-senkron: Figma'daki değişkenleri repoya almak

> Ajan için tarif. Kullanıcı "figma senkron", "token'ları güncelle" veya "Figma'daki değişiklikleri al" dediğinde uygula.

**Ne yapar?** Figma'daki değişkenleri, yazı stillerini ve gölge stillerini okur, `tokens/` klasörünü günceller ve farkı PR olarak getirir. Figma'da **hiçbir şey değiştirmez**.

**Gerekenler:** Figma MCP bağlantısı (`use_figma` aracı). Bağlı değilse kullanıcıya söyle ve dur.

**Figma dosyası:** `xdSquxB9G5GHgAe4s3QTho` (Tabii CMS – Design System). Bağlantı [NOW.md](../NOW.md)'de.

## Adımlar

1. **[basla.md](basla.md)** akışını uygula. İş adı: `figma-senkron`.

2. **İlk parçayı oku.** [scripts/figma/degiskenleri-oku.js](../scripts/figma/degiskenleri-oku.js) dosyasının içeriğini olduğu gibi `use_figma` aracına `code` olarak ver (`PARCA = 0`). Sonuçtaki `toplamParca` kaç parça olduğunu söyler.

3. **Kalan parçaları oku.** `PARCA` değerini 1, 2, … `toplamParca - 1` yaparak aynı kodu çalıştır. Bu çağrılar birbirinden bağımsız, aynı anda gönderilebilir.

4. **Parçaları yaz.** Her sonucu **hiçbir şeyini değiştirmeden** `tokens/.parcalar/<PARCA>.json` dosyasına yaz. Bu klasör git'e girmez.

5. **Birleştir.**
   ```
   node scripts/figma/parcalari-birlestir.mjs
   ```
   Eksik parça varsa script söyler. Eksik parçayı tekrar oku.

6. **Üret.**
   ```
   node scripts/tokenlari-uret.mjs
   ```
   - Hata verirse (örneğin "eşleme kuralı yok" veya "çakışıyor"): **dur.** Hatayı kullanıcıya sade dille anlat. Yeni bir eşleme gerekiyorsa [rules/core/token-isimlendirme.md](../rules/core/token-isimlendirme.md) güncellenmeden devam etme. Bu kararı proje sahibi verir.
   - Uyarı verirse: uyarıları kullanıcıya göster. [rules/core/tailwind-temel.md](../rules/core/tailwind-temel.md) dosyasındaki istisnalarda yazanları gösterme.

7. **Farkı anlat.** Önce şu komutu çalıştır:
   ```
   git status --porcelain tokens/
   ```
   - **Değişiklik yoksa:** "Figma ile repo zaten aynı" de, branch'i sil (`git switch main` ve `git branch -D <branch>`) ve bitir.
   - **Değişiklik varsa:** `git diff tokens/esleme.md` çıktısından değişenleri sade dille özetle. Örnek: "`bg/surface` Dark modda `neutral/900` → `neutral/800` oldu" veya "`Spacing/18` adında yeni bir boşluk eklendi".

8. **Kontrol et:** `node scripts/kontrol.mjs`

9. **[oturum-bitir.md](oturum-bitir.md)** ve **[gonder.md](gonder.md)**. `tokens/` korumalı bir klasör olduğu için PR proje sahibinin onayını bekler.
