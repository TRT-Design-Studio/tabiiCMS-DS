# cms: CMS yeniden tasarımı üzerinde çalışmak

> Ajan için tarif. Kullanıcı `cms: <soru>`, `cms incele: <modül>` veya `cms karar: <konu>` yazdığında (ya da CMS'in akışları, ekranları, bilgi mimarisi hakkında soru sorduğunda) uygula.

Önce [cms/README.md](../cms/README.md) dosyasını oku.

## `cms: <soru>`: soru cevaplamak

1. Soruyla ilgili modül dosyasını (`cms/moduller/`), varsa kararları (`cms/kararlar/`) ve [sorular.md](../cms/sorular.md)'yi oku.
2. Cevap yoksa `cms/kaynaklar/` altındaki ham kaynaklara bak.
3. Cevabı ver ve **hangi kaynaktan geldiğini** söyle (staging, Figma, bilgi mimarisi, karar no).
4. Kaynaklar yetmiyorsa tahmin etme. Şunu söyle: "Bunu kaynaklardan bilmiyorum." Ardından iki yol öner: modülü incelemek (`cms incele`) veya soruyu [sorular.md](../cms/sorular.md)'ye eklemek. Kullanıcı isterse ekle.
5. Cevaplarken bir kaynağın yanlış veya eski olduğunu fark edersen modül dosyasının "Kaynaklar arası farklar" bölümüne yaz.

Soru cevaplamak dosya değiştirmez; branch gerekmez. Dosya değişecekse önce [basla.md](basla.md).

## `cms incele: <modül>`: modülü incelemek

1. `main` üzerindeysen önce [basla.md](basla.md).
2. **Bilgi mimarisi:** [cms/kaynaklar/bilgi-mimarisi.md](../cms/kaynaklar/bilgi-mimarisi.md) içinde modülün iki dalını bul: `Dashboard > <Modül>` (liste) ve `Create > <Modül>` (form).
3. **Figma:** Envanterdeki ([figma-ekran-envanteri.md](../cms/kaynaklar/figma-ekran-envanteri.md)) modül bölümünün ekranlarına bak. Dosya ve sayfa bilgisi envanterin bilgi bloğunda. Önce liste ekranı, sonra her tipin Master'ı, sonra diğer sekmeler.
4. **Staging:** Kullanıcıdan adresi iste (repoda yazmaz). Kullanıcının tarayıcısında (Claude in Chrome) aç. Oturum açık değilse kullanıcıdan açmasını iste; şifre girme.
   - Dashboard'un filtrelerini, sütunlarını ve aksiyonlarını oku.
   - Create'i aç. Tip penceresi varsa seçenekleri oku, pencereyi kapat.
   - Var olan bir kaydı aç ve sekmelerini, alanlarını oku.
   - **Hiçbir şeyi kaydetme, yayınlama, silme.** Bir şey oluşturmak gerekirse önce kullanıcıya sor. Adı `TEST – <isim>` olsun, iş bitince sil.
5. `cms/moduller/<modul>.md` dosyasını [show.md](../cms/moduller/show.md) düzeninde yaz. Ekranda gördüğün adları aynen kullan.
6. [cms/moduller/README.md](../cms/moduller/README.md) tablosunda modülün durumunu `incelendi` yap, "Ne?" sütununu düzelt.
7. Yeni staging bulgularını [staging-notlari.md](../cms/kaynaklar/staging-notlari.md)'ye, cevabını bulamadığın soruları [sorular.md](../cms/sorular.md)'ye ekle.
8. Kullanıcıya kısa özet ver: modülün yapısı, kaynaklar arası farklar, öne çıkan sorunlar.

**Repoya yazılmayanlar:** staging adresi, kullanıcı ve kişi adları, gerçek içerik adları, ekran görüntüleri, ID'ler. Sadece yapı yazılır.

## `cms karar: <konu>`: karar yazmak veya değiştirmek

1. `main` üzerindeysen önce [basla.md](basla.md).
2. [cms/kararlar/](../cms/kararlar/README.md) klasöründe aynı konuda karar var mı bak.
3. **Yeni karar:** [_sablon.md](../cms/kararlar/_sablon.md)'yi sıradaki numarayla kopyala. Sorun, seçenekler ve kullanıcının seçtiği karar yazılır. Seçenekleri kullanıcıyla konuş; kararı kullanıcı verir, sen değil. Kullanıcı "karar verildi" demedikçe `durum: oneri` kalır.
4. **Karar değişikliği:** Eski dosyanın metnine dokunma. Yeni karar yaz (`onceki:`), eskisini `durum: degisti`, `yerine:` yap.
5. Karar bir soruyu cevaplıyorsa [sorular.md](../cms/sorular.md)'de cevabı yaz, `✅` koy ve karara link ver.
6. [cms/kararlar/README.md](../cms/kararlar/README.md)'deki "Kararlar" listesine satır ekle.
7. Kararın daha önce verilmiş bir kararla çeliştiğini görürsen kendin çözme; iki kararı da kullanıcıya göster ve sor.
