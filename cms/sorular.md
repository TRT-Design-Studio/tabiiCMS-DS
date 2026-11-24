# Açık sorular

Yeni CMS tasarımında cevabı bilinmeyen sorular. Cevap gelince soru buradan silinmez: altına cevap yazılır ve `✅` ile işaretlenir. Cevap bir karar gerektiriyorsa [kararlar/](kararlar/README.md) klasörüne karar yazılır ve buradan link verilir.

Yeni soru en alta, sıradaki numarayla eklenir. Sorular ekiple toplu olarak konuşulacak; o zamana kadar incelemeler soruları biriktirir.

## Kapsam ve kullanıcılar

1. **CMS'i kimler kullanıyor, hangi işler için?** Roller (editör, yayın planlama, lisans, yönetici) ve her rolün günlük işi. Admin Dashboard'daki rollerden başlanabilir.
2. **En sık yapılan iş hangisi?** Kullanıcı "ana işimiz Create ve Dashboard" dedi; bunun içinde Show oluşturma mı, var olanı düzenleme mi, yayın tarihi ayarlama mı?
3. **Yeniden tasarım hangi modülleri kapsıyor?** 25 modülün hepsi mi, yoksa önce Show, Video, Row, Page gibi ana modüller mi?

## Kaynaklar

4. **Bilgi mimarisindeki lejant** (Alt Menü, Action Menü, Tab, Dropdown, Image, Action, Text input, Integer) xmind'da renkle mi gösteriliyordu? PDF'te kayboldu. Xmind dosyasının kendisi paylaşılabilir mi?
5. **Figma ekranları ne zaman alındı?** Game tipi, Featured Content Row ve Intro Media sonradan mı eklendi?
   - ✅ Kısmen (Mücahit, 2026-11-23): Game test ortamında, canlıda henüz yok. Featured Content Row ve Intro Media için bilinmiyor.
6. **lookup modülü ne işe yarıyor?** Menüde var, açıklaması Admin Dashboard ile aynı; bilgi mimarisinde ve Figma'da içi boş.

## Show

7. **İçerik durumu ile tabii durumu farkı ne?** Listede bir kayıt "Draft" iken altında "Tabii Published" yazabiliyor.
   - ✅ (Mücahit, 2026-11-23): CMS durumu (Draft, Published, Unpublished, Error) içeriğin CMS'teki hali. Published olunca editörlere bildirim gider; editör onaylarsa On tabii, onaylamazsa Not on tabii. Ayrıntı: [moduller/show.md](moduller/show.md) → "Durum modeli".
8. **Badges, Badge ve Exclusive Badge** neden üç ayrı alan ve üç ayrı modül?
9. **Live Event (Show tipi) ile Livestream (modül) ilişkisi ne?**
10. **Diğer sekmeler neden ilk kayıttan önce kapalı?** Teknik bir zorunluluk mu (kayıt ID'si gerekiyor), yoksa tasarım tercihi mi?
   - ✅ (Mücahit, 2026-11-23): Show'un Show Dashboard'da görünmesi için en az bir kez kaydedilmesi gerekiyor (sistem kuralı). Title girip kaydetmek yetiyor; sayfa yenilenip sekmeler açılıyor.

## Languages ve Country Based (karar 001'den)

11. **Onay bekleme durumunun adı ne?** Show Published olmuş ama editör henüz karar vermemişse sağ paneldeki TABII satırında ne yazmalı?
   - ✅ (Mücahit, 2026-11-23): CMS'te bekleme durumu yok. CMS publish'i tabii tarafına sadece bilgi olarak gider; tabii tarafı ayrıca karar verir. TABII satırı On tabii / Not on tabii gösterir.
12. **Editör onayı dil bazında mı?** Her dil ayrı ayrı mı onaylanıyor, yoksa Show bir bütün olarak mı?
   - ✅ (Mücahit, 2026-11-23): Show bir bütün olarak. tabii durumu (On tabii / Not on tabii) sadece Show'da var; dillerde yok.
13. **Boş alan ne gösterir?** Bir dilde veya ülkede boş bırakılan alan (görsel, SEO Title…) tabii'de Master değerini mi gösteriyor, yoksa boş mu kalıyor?
   - ✅ (Mücahit, 2026-11-23): Master dışındaki sekmelerdeki alanlar, ayrıca veri girilmedikçe Master'daki bilgiyi gösterir.
14. **Ülke değişikliklerinin de ayrı yayın durumu var mı?** Staging'de ülke içindeki dillerde Publish / Unpublish var.
   - ✅ (Mücahit, 2026-11-23): Kaydedilmeyen ülke değişikliği silinir; kaydedilince Draft'a düşer (test ortamında kaydedilmeden Draft'a düşmesi bir hata). Ülkeler ayrıca publish edilmez; Show'un altındaki bir yapı olarak Show'un içinde var ya da yok sayılır.

## Show akışı (2026-11-23 anlatımından)

15. **tabii tarafı nerede karar veriyor?** "On tabii / Not on tabii" kararı CMS içinde başka bir ekranda mı veriliyor, yoksa ayrı bir sistemde mi? Karar CMS'e nasıl geri geliyor?
   - Kısmen (Mücahit, 2026-11-23): Nerede verildiği bilinmiyor; sonucu CMS'e düşüyor.
16. **Ülke değişikliği nasıl yayına çıkar?** Ülke Draft'tayken o ülkede Master mı gösterilir? Ülkeyi publish etmek için ayrı bir işlem var mı?
   - ✅ (Mücahit, 2026-11-23): Master her zaman ana sekmedir. Ülke değişikliği kaydedilmedikçe veya Draft'ta kaldıkça o ülkede Master gösterilir; kaydedilip Draft'tan çıkınca ülkeye özel içerik gösterilir. Ülke için ayrı publish yok.
17. **Dil eklemeyi kim yapıyor?** Hangi rol / ekip; Show başına mı ekleniyor, yoksa platform dilleri her Show'a otomatik mi geliyor?
   - Kısmen (Mücahit, 2026-11-23): Muhtemelen CMS dışından ekleniyor; Show'a tanımlanan diller editörün karşısına CMS'te doğrudan geliyor. Hangi rolün eklediği bilinmiyor.
18. **Error durumu ne zaman oluşur?** Kullanıcı bu durumda ne yapmalı?
19. **Bölüm ekleme için en az ne gerekir?** Show içinden bölüm eklerken Video formunun hepsi mi, yoksa sadece Title, Season, Episode ve medya mı?
   - ✅ (Mücahit, 2026-11-23): Formun hepsi; Create Video ile birebir aynı, sadece Show / sezon bilgisi önceden dolu gelir. İstenmeyen şey alanlar değil, kullanıcının Show'dan çıkıp Video akışına geçmesi.
20. **Publish Management tarihleri bölümlere de iner mi?** Show'un tarihleri videolara uygulanıyor mu, yoksa her videonun kendi Publish Management'ı mı geçerli?
   - ✅ (Mücahit, 2026-11-23): Show'da belirlenen tarih bütün bölümlere uygulanır; bölümün kendi Publish Management'ında ayrıca tarih ayarlanabilir. Bölümlerin de kendi Master, Languages, Country Based Changes ve Publish Management sekmeleri var.

