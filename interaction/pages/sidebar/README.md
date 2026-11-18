# Sidebar playground (istisna)

**Bu klasör ne?** Figma'daki ↪︎ Sidebar sayfasının code layer ayarı. Diğer sayfalardan farklı: spec'ten üretilmez.

**Neden istisna?** Sidebar code layer'ı farklı animasyon setlerini (Ease out, Cascade, Scrub) gösterir. Bu yüzden elle yazılmış kod olduğu gibi kalır (Mücahit, 2026-11-18). Mücahit aksini söyleyene kadar böyle.

**Nasıl çalışır?** `page.json` içindeki `raw` alanı kodun klasörünü gösterir: `interaction/reference/sidebar/`. Build oradaki `index.html`, `style.css` ve `app.js` dosyalarını tek `interaction/layers/sidebar/index.html` dosyasında birleştirir.

**Ne zaman dokunurum?** Sidebar kodu değişince `interaction/reference/sidebar/` altındaki dosyaları değiştir, sonra `node interaction/build.mjs sidebar` çalıştır.
