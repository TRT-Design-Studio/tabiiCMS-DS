# Figma scriptleri

🔒 **Korumalı klasör.**

**Bu klasör ne?** Figma'dan veri okumak için kullanılan programlar. Bunları sen çalıştırmazsın. Yapay zeka [figma senkron](../../workflows/figma-senkron.md) akışında kullanır.

| Dosya | Ne yapar? |
|---|---|
| `degiskenleri-oku.js` | Figma'nın içinde çalışır (Figma MCP üzerinden). Değişkenleri, yazı stillerini ve gölge stillerini **sadece okur**. Figma tek seferde en fazla 20 KB veri döndürebildiği için veriyi parça parça verir |
| `parcalari-birlestir.mjs` | Okunan parçaları birleştirip `tokens/figma-ham.json` dosyasını yazar |
