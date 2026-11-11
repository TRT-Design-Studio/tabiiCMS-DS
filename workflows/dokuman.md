# dokuman: bir komponent sayfasını dokümante etmek

> Ajan için tarif. Kullanıcı "dokuman: <sayfa>", "şu sayfayı dokümante et" veya benzerini yazdığında uygula.

**Ne yapar?** Figma'daki komponent sayfasını [şablona](../rules/core/dokumantasyon/sablon.md) göre dokümante eder ve repoya `components/<isim>/spec.md` kaydını yazar.

**Gerekenler:** Figma MCP bağlantısı (`use_figma`). Figma dosyası: `xdSquxB9G5GHgAe4s3QTho`.

## Yapay zeka için

1. **Oku:**
   - [sablon.md](../rules/core/dokumantasyon/sablon.md)
   - [frame-duzeni.md](../rules/core/dokumantasyon/frame-duzeni.md)
   - [referans-inceleme.md](../rules/core/dokumantasyon/referans-inceleme.md)

   Görsel dil için gerekirse eski Input deneme sayfasına bak; oradan komponent alma.
2. **Komponenti oku.** Sayfadaki her set için şunları komponentin kendisinden oku:
   - varyant eksenleri ve property tanımları;
   - her varyantın yükseklik, iç boşluk, aralık, köşe, çizgi ve dolgu token'ları;
   - yazı stilleri;
   - komponentin açıklaması.
3. **Kullanımı tara:**
   - Hangi ana komponentlerin içinde instance'ı var? Bu liste "Used in" tablosuna girer.
   - Playground'da slot'lu ya da özel içerikli hangi kullanımları var? Her farklı kullanım bir kez Examples frame'ine girer.
4. **Frame'leri kur:** Şablondaki sırayla, görsel dile uygun ve bütün değerleri değişkenlere bağlayarak kur. Ana seti Component Sets frame'ine taşı; sayfadaki eski grup frame'i boşalırsa sil. Sayfa zeminini `#171717` yap.
5. **Kontrol et:**
   - Her frame'in ekran görüntüsüne bak: kırpılan yazı, taşma, üst üste binme olmamalı.
   - Dokümandaki metinlerde başka bir komponentin adı kalmasın ("Used in" bölümü hariç).
6. **Repo:**
   - `components/<isim>/spec.md` dosyasını [components/README.md](../components/README.md) formatıyla yaz.
   - `wiki/log/` kaydına ekle.
   - Sayfanın code layer'ı varsa (`interaction/pages/`) `node interaction/build.mjs` çalıştır; spec değişikliği code layer'a geçer ([interaction.md](interaction.md)).
   - `node scripts/index-olustur.mjs` ve `node scripts/kontrol.mjs` komutlarını çalıştır.
7. **Kullanıcıya anlat:** Hangi frame'ler kuruldu, hangi örnekler eklendi, nerede karar gerekiyor.
