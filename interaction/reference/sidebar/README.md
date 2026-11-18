# Sidebar Interaction (referans)

**Bu klasör ne?** Figma'daki ↪︎ Sidebar sayfasının Interaction frame'indeki code layer'ın kodu: `index.html`, `style.css`, `app.js`. Sürükleyerek daralan Sidebar (Expanded ↔ Rail).

**Bu kod iki iş görür:**

- Playground arayüzü (`interaction/shared/playground.js`, `base.css`) bu kodun yapısını ve hareketini kullanır, ama daralmaz ve User Card yerine açık/koyu mod düğmesi vardır.
- **İstisna (Mücahit, 2026-11-18):** Sidebar sayfasının code layer'ı bu koddan olduğu gibi üretilir. Build üç dosyayı tek `interaction/layers/sidebar/index.html` yapar. İçindeki animasyon setleri (Ease out, Cascade, Scrub) kalır. Ayar: [pages/sidebar](../../pages/sidebar/README.md).

**Ne zaman dokunurum?** Sadece Sidebar code layer'ı değişecekse. Sonra `node interaction/build.mjs sidebar` çalıştır.
