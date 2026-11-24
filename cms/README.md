# CMS yeniden tasarımı

**Bu klasör ne?** tabii CMS'inin baştan tasarlanması için çalışma alanı. Bu tasarım sistemi o CMS için kuruldu. Değişiklik sadece görünüm (UI) değil, kullanım akışları ve bilgi mimarisi (UX) de değişecek.

Burada üç şey durur:

1. **Bugün ne var?** Mevcut sistemin kaynakları ve modül modül analizi.
2. **Ne karar verdik?** Yeni tasarımın kararları; her biri değiştirilebilir ve geçmişi saklanır.
3. **Ne bilmiyoruz?** Açık sorular.

**Ne zaman dokunurum?** CMS'in akışları, ekranları veya bilgi mimarisiyle ilgili bir şey soracağında, karar vereceğinde veya bir modülü inceleyeceğinde. Komponentlerle ilgili işler bu klasörde değil, [components/](../components/README.md) klasöründedir.

## Klasör düzeni

| Yol | İçerik |
|---|---|
| [kaynaklar/](kaynaklar/README.md) | Ham bilgi: staging notları, Figma ekran envanteri, eski bilgi mimarisi. Yorum yok |
| [moduller/](moduller/README.md) | Her modülün (Show, Video, Row…) bugünkü hali: liste, akış, sekmeler, alanlar, sorunlar |
| [kararlar/](kararlar/README.md) | Yeni tasarım kararları, numaralı, bir dosya bir karar |
| [sorular.md](sorular.md) | Cevabı bilinmeyen sorular |

Yeni bilgi mimarisi ve ekran akışları kararlar netleştikçe ayrı klasörlere yazılacak; şimdilik yok.

## Nasıl kullanırım?

Yapay zekaya şunları yazabilirsin (tam liste: [KOMUTLAR.md](../KOMUTLAR.md)):

| Yaz | Ne olur? |
|---|---|
| `cms: <soru>` | Soruyu bu klasördeki bilgilerle cevaplar. Ör. `cms: Series ile Movie'nin Master alanları ne kadar farklı?` |
| `cms incele: <modül>` | Modülü staging, Figma ve eski bilgi mimarisinden inceler; `moduller/` altına dosyasını yazar |
| `cms karar: <konu>` | Yeni bir karar yazar veya var olanı değiştirir |

Ayrıntılı tarif: [workflows/cms.md](../workflows/cms.md).

## Kurallar

- **Kaynaklar çelişirse staging kazanır**, sonra Figma ekranları, en son eski bilgi mimarisi.
- **Mevcut durum ile karar karışmaz.** `moduller/` bugünü, `kararlar/` geleceği anlatır.
- **Tasarlamadan önce orijinal ekrana bak.** Yeni bir ekran çizmeden önce mevcut CMS'teki karşılığını Figma ekran envanterinden incele; orijinalde olmayan bir kavram (ör. dil bazında onay) ekleme. Ekleyeceksen karar önerisinde ayrıca yaz.
- **Uydurma.** Kaynaklarda olmayan bir şey tahmin edilmez; [sorular.md](sorular.md)'ye soru olarak yazılır.
- **Repo herkese açıktır.** Staging adresi, kullanıcı adları, gerçek içerik verisi ve ekran görüntüleri buraya konmaz. Sadece yapı yazılır.
