# tabiiCMS Tasarım Sistemi

Bu repo, tabiiCMS tasarım sisteminin **kural kitabı ve üretim hattıdır**.

Figma'da tasarladığımız sistem (renkler, yazı stilleri, boşluklar, komponentler) buradaki kurallara dönüşür. Bu kurallardan da şunlar üretilir:

- komponent dokümantasyonları,
- Storybook (komponentlerin tıklanabilir, canlı hali),
- komponentleri anlatan kısa videolar (45–60 saniye).

Burada çoğunlukla kod yazmıyoruz. Dosyaların büyük kısmı **Markdown (.md)** dosyası. Yapay zeka bu dosyaları okur ve içindeki kurallara göre çalışır.

> **Repo nedir?** Bir projenin bütün dosyalarının ve geçmişinin tutulduğu klasör. Bilmediğin kelimeler için: [Sözlük](rehber/sozluk.md)

---

## 🟢 Buraya ilk kez mi geldin? Buradan başla

Adımları **sırayla** ve **atlamadan** yap. Toplam 30–45 dakika sürer. Bu kurulumu bir kez yaparsın, bir daha gerekmez.

| # | Adım | Süre |
|---|------|------|
| 1 | [GitHub hesabı aç ve davetini kabul et](rehber/01-hesap-ve-davet.md) | 10 dk |
| 2 | [Gerekli programları kur](rehber/02-araclari-kur.md) | 15 dk |
| 3 | [Projeyi bilgisayarına indir](rehber/03-projeyi-bilgisayarina-al.md) | 5 dk |
| 4 | [Günlük çalışma düzenini öğren](rehber/04-gunluk-calisma.md) | 5 dk |
| 5 | [Pull request nedir, nasıl onaylanır?](rehber/05-pull-request.md) | 5 dk |

Takılırsan: [Sorun giderme](rehber/sorun-giderme.md)

---

## 🔁 Her gün nasıl çalışırım? (kısa hali)

1. Yapay zeka aracını (Claude veya Cursor) bu proje klasöründe aç.
2. **`basla: <ne yapacağın>`** yaz. Örnek: `basla: buton dokümantasyonu`
3. İşini yapay zekayla birlikte yap.
4. Bitince **`oturumu bitir`** yaz. Yapay zeka o gün ne yaptığını not alır.
5. **`gonder`** yaz. Yapay zeka işini GitHub'a yükler ve bir "pull request" açar.
6. Pull request onaylanınca işin ana projeye (main) eklenir. 🎉

Git komutlarını sen yazmıyorsun, hepsini yapay zeka çalıştırıyor. Uzun hali: [Günlük çalışma](rehber/04-gunluk-calisma.md)

---

## 📁 Klasörler ne işe yarıyor?

| Klasör / Dosya | Ne var içinde? | Ben değiştirebilir miyim? |
|---|---|---|
| `AGENTS.md` | Yapay zekanın "beyni". Her oturumda ilk bunu okur | ❌ Sadece proje sahibi |
| `CLAUDE.md` | Claude'u `AGENTS.md`'ye yönlendiren tek satırlık dosya | ❌ |
| `NOW.md` | Projede şu an neredeyiz, sıradaki işler ne | ⚠️ Yapay zeka günceller |
| `ROADMAP.md` | Büyük plan: hangi aşamadayız | ❌ Sadece proje sahibi |
| `rehber/` | İnsanlar için adım adım rehberler (bu dosyalar) | ✅ Eksik görürsen ekle |
| `rules/core/` | Ana kurallar (token'lar, isimlendirme, doküman şablonu) | ❌ Değişiklik istiyorsan → `proposals/` |
| `rules/team/` | Ekibin eklediği kurallar | ✅ |
| `proposals/` | "Ana kural şöyle değişsin" önerileri | ✅ |
| `workflows/` | Tekrar eden işlerin tarifleri (`basla`, `gonder`…) | ⚠️ Dikkatli |
| `wiki/` | Projenin hafızası: içindekiler listesi ve günlük kayıtlar | ⚠️ Yapay zeka günceller |
| `components/` | Her komponentin kimlik kartı (`spec.md`) | ✅ |
| `tokens/` | Figma değişkenlerinin bilgisayar formatı | ❌ Figma'dan otomatik gelir |
| `scripts/` | Kontrol scriptleri | ❌ |
| `.github/` | GitHub ayarları ve otomatik kontroller | ❌ |

> **Neden bazı yerler kilitli?** Herkes ana kuralları değiştirebilseydi sistem kısa sürede birbiriyle çelişen kurallarla dolardı. Ana kurallarda bir değişiklik istiyorsan yöntemi şu: [proposals/README.md](proposals/README.md)

---

## ⛔ Altın kurallar

1. **main'e doğrudan bir şey gönderme.** Zaten GitHub buna izin vermez. Her iş kendi branch'inde yapılır.
2. **`rules/core/` dosyalarını doğrudan değiştirme.** Öneri yaz: [proposals/](proposals/README.md)
3. **Şifre, token, API anahtarı veya şirkete özel gizli bilgi koyma.** Bu repo **herkese açık (public)**. Buraya koyduğun her şeyi internetteki herkes görebilir.
4. **Bir şey bozulursa panik yapma.** Git her şeyin geçmişini tutar. Neredeyse hiçbir şey geri alınamaz şekilde kaybolmaz.

---

## Daha fazlası

- [Sözlük](rehber/sozluk.md): repo, branch, commit, pull request…
- [GitHub Actions nedir?](rehber/github-actions-nedir.md): pull request'lerdeki yeşil tik ✓ ve kırmızı çarpı ✗ ne anlama geliyor
- [Çakışma (conflict) olursa](rehber/06-cakisma-olursa.md)
- [Yol haritası](ROADMAP.md)
- Proje sahibi için: [GitHub kurulumu](rehber/yonetici/github-kurulumu.md)
