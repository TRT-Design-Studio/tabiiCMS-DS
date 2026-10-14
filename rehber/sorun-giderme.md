# Sorun giderme

Sorununu aşağıda bulamazsan yapay zekaya **gördüğün hata mesajını olduğu gibi yapıştır** ve "bu ne demek, ne yapmalıyım?" diye sor.

---

### "Changes must be made through a pull request" / "protected branch" hatası

**Ne demek?** main'e doğrudan yükleme yapılmaya çalışıldı ve GitHub engelledi. Koruma çalışıyor, bu iyi bir şey. 👍

**Çözüm:** Yapay zekaya `bu değişiklikleri yeni bir branch'e taşı ve gonder` yaz.

### "Permission denied" / "Repository not found"

**Ne demek?** GitHub seni bu projede henüz tanımıyor.

**Çözüm:**
1. Organizasyon davetini kabul ettin mi? → [1. Hesap ve davet](01-hesap-ve-davet.md), Adım 4
2. Terminal'de `gh auth status` çalıştır. Giriş yapılmamışsa `gh auth login` adımlarını tekrarla → [2. Programları kur](02-araclari-kur.md), Adım 3

### "gh: command not found" / "node: command not found"

**Çözüm:** O programı kur ([2. Programları kur](02-araclari-kur.md)). Sonra Terminal'i ve yapay zeka uygulamasını **tamamen kapatıp** yeniden aç.

### PR'da kırmızı çarpı ✗ var

**Çözüm:** Yapay zekaya `PR'daki kontrol neden kırmızı, düzelt` yaz. Ayrıntısı: [GitHub Actions nedir?](github-actions-nedir.md)

### "This branch has conflicts"

**Çözüm:** [6. Çakışma olursa](06-cakisma-olursa.md)

### Yanlışlıkla bir şey sildim veya bozdum

**Henüz `gonder` demediysen:** Yapay zekaya `son değişikliklerimi geri al` yaz. Neyi geri alacağını sana gösterir ve onay ister.

**Gönderdiysen ama PR merge edilmediyse:** PR'ı kapat (PR sayfasının altındaki **Close pull request** butonu) ve baştan `basla` de.

**Merge edildiyse:** Mücahit'e haber ver. Git her şeyin geçmişini tuttuğu için eski hal geri getirilebilir.

### Yapay zeka eski bir şeyi hatırlıyor ya da yanlış biliyor

Yapay zekaya `AGENTS.md ve NOW.md dosyalarını yeniden oku` yaz. Yine düzelmezse yeni bir sohbet başlat.
