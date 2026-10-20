# Komutlar

Bu projede yapay zekaya (Claude, Cursor…) yazabileceğin bütün komutlar burada.

- **Kelimesi kelimesine yazman gerekmez.** Benzer bir cümle de olur: "bugünlük bu kadar" ile "oturumu bitir" aynı işi yapar.
- **Komutun yanına ne istediğini ekleyebilirsin.** Örnek: `basla: badge dokümantasyonu`
- Bir komutun ne yaptığından emin değilsen önce sor: "figma senkron ne yapar?"

---

## Her gün

| Yaz | Ne olur? | Akış |
|---|---|---|
| `basla: <iş>` | Projenin en güncel halini çeker, işin için yeni bir çalışma alanı (branch) açar. **Her işe bununla başla.** | [workflows/basla.md](workflows/basla.md) |
| `oturumu bitir` | Bugün ne yaptığını, kararları ve sıradaki adımı not alır. Yarın sen ya da bir arkadaşın kaldığı yerden devam eder | [workflows/oturum-bitir.md](workflows/oturum-bitir.md) |
| `gonder` | Kontrolleri çalıştırır, değişiklikleri GitHub'a yükler, pull request açar ve linkini verir | [workflows/gonder.md](workflows/gonder.md) |

Ayrıntı: [rehber/04-gunluk-calisma.md](rehber/04-gunluk-calisma.md)

## Figma

| Yaz | Ne olur? | Akış |
|---|---|---|
| `figma senkron` | Figma'daki değişkenleri, yazı stillerini ve gölgeleri okur. `tokens/` klasörünü günceller ve neyin değiştiğini anlatır. Figma'da hiçbir şeyi değiştirmez | [workflows/figma-senkron.md](workflows/figma-senkron.md) |

## Kurallar

| Yaz | Ne olur? | Akış |
|---|---|---|
| `basla: yeni kural, <konu>` | Ekip kuralları klasörüne (`rules/team/`) doğru formatta yeni bir kural yazar | [rules/team/README.md](rules/team/README.md) |
| `basla: öneri, <konu>` | Ana kurallarda (`rules/core/`) değişiklik isteyen bir öneri dosyası hazırlar | [proposals/README.md](proposals/README.md) |

## Yardım

| Yaz | Ne olur? | Akış |
|---|---|---|
| `kurulumumu kontrol et` | Gerekli programların kurulu olup olmadığına bakar, eksik varsa söyler | [rehber/02-araclari-kur.md](rehber/02-araclari-kur.md) |
| `çakışma var, çöz` | Aynı satırı iki kişi değiştirdiyse iki hali yan yana gösterir ve hangisinin kalacağını sorar | [rehber/06-cakisma-olursa.md](rehber/06-cakisma-olursa.md) |
| `PR'daki kontrol neden kırmızı, düzelt` | Otomatik kontrolün neden geçmediğini bulur ve düzeltir | [rehber/github-actions-nedir.md](rehber/github-actions-nedir.md) |
| `branch'imi güncelle` | PR'ında "out-of-date" uyarısı varsa branch'ini main'in son haliyle günceller ve kontrolü tekrar çalıştırır | [rehber/05-pull-request.md](rehber/05-pull-request.md) |
| `<numara> numaralı PR'ı incele` | Bir pull request'te neyin değiştiğini sade dille özetler | [rehber/05-pull-request.md](rehber/05-pull-request.md) |
| `son değişikliklerimi geri al` | Henüz göndermediğin değişiklikleri gösterir ve onaylarsan geri alır | [rehber/sorun-giderme.md](rehber/sorun-giderme.md) |
| `AGENTS.md ve NOW.md'yi yeniden oku` | Yapay zeka bir şeyi yanlış hatırlıyorsa projenin güncel durumunu baştan okur | [AGENTS.md](AGENTS.md) |

## Yakında

Bu komutlar henüz çalışmıyor. Hazır olunca yukarıya taşınacak.

| Yaz | Ne olacak? | Ne zaman? |
|---|---|---|
| `dokuman: <komponent>` | Komponentin dokümantasyonunu şablona göre Figma'da hazırlar | Faz 2 |
| `video: <komponent>` | Komponentin bütün hallerini gösteren 45–60 saniyelik videoyu üretir | Faz 4 |

---

> **Yeni bir komut mu ekleniyor?** `workflows/` klasörüne yeni bir akış eklendiğinde bu dosyaya da eklenir. Otomatik kontrol (`node scripts/kontrol.mjs`) eklenmeyen akışları yakalar.
