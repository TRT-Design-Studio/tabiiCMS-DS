# interaction: bir sayfanın code layer'ını üretmek

> Ajan için tarif. Kullanıcı "interaction: <sayfa>", "code layer'ı güncelle" veya benzerini yazdığında uygula.

**Ne yapar?** Komponent sayfasının Interaction frame'ine konacak playground'u üretir: bütün varyantlar, state'ler ve property'ler denenebilir. Çıktı `interaction/layers/<sayfa>/index.html`. Ayrıntı: [interaction/README.md](../interaction/README.md).

## Yapay zeka için

0. **Kuralı oku:** [rules/core/interaction/code-layer.md](../rules/core/interaction/code-layer.md).
1. **Spec'leri kontrol et.** Sayfadaki her komponentin `components/<isim>/spec.md` dosyası olmalı ve değerleri tablolarda durmalı (Sizes, States, Tones…). Tablo yoksa Figma'dan okuyup ekle. Değer uydurma.
2. **Var olanı kullan.** `interaction/components/` altında iç içe kullanılan komponentler varsa yeniden yazma, `TDS.render` ile çağır. Bir parça Figma'da başka bir komponenti açıyorsa (ör. menü) code layer'da da gerçekten açsın.
3. **Yeni komponent varsa** `interaction/components/<isim>/` altına `style.mjs` (spec → CSS), `component.js` (HTML) ve `meta.json` (`uses`: içinde kullandığı komponentler) yaz. İkonlar `TDS.icon`, bayraklar `TDS.flag` ile. CSS'te sabit renk, boşluk veya yazı değeri olmasın; hepsi spec'teki token adlarından gelsin.
4. **Sayfa yoksa** `interaction/pages/<sayfa>/` altına `page.json` ve `page.js` ekle. Her variant ekseni bir select, her boolean bir checkbox, her text property bir yazı alanı olsun. State'te `Live` seçeneği gerçek hover ve basmayı gösterir.
5. **Üret:**
   ```
   node interaction/build.mjs
   ```
6. **Doğrula:**
   ```
   node interaction/build.mjs --check
   ```
   Mümkünse sayfayı tarayıcıda açıp açık ve koyu modda bak.
7. **Kullanıcıya anlat:** Figma eklenti arayüzü code layer oluşturamıyor. Kullanıcı code layer'ı Interaction frame'ine kendisi ekler ve `layers/<sayfa>/index.html` içeriğini yapıştırır ([interaction/README.md](../interaction/README.md) → "Figma'ya nasıl konur?").

## Spec değişince

`dokuman` veya bir komponent revizesi bir `spec.md` dosyasını değiştirdiyse 5. ve 6. adımları çalıştır. Hangi sayfaların code layer'ının yeniden yapıştırılması gerektiğini kullanıcıya söyle.
