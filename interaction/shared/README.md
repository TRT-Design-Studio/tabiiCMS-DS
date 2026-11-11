# Ortak dosyalar

**Bu klasör ne?** Her playground'da aynı olan parçalar.

| Dosya | İş |
|---|---|
| `core.js` | Komponent kayıt defteri (`TDS.register`, `TDS.render`), ikonlar, spec okuma (`TDS.spec`) ve açılır menü |
| `playground.js` | Playground arayüzü: Sidebar (logo, komponentler, açılan property'ler, açık/koyu mod) ve yakınlaştırmalı sahne. Örnek: `interaction/reference/sidebar/` |
| `base.css` | Playground çerçevesinin stili. Sidebar, Nav Item ve Nav Sub Group spec'lerindeki token'ları kullanır |
| `icons.js` | Phosphor'da olmayan özel ikonlar (Figma → Custom Icons) |
| `icon-list.json` | Playground'da seçilebilecek ek ikonlar |
| `phosphor/` | Build'in indirip sakladığı Phosphor SVG'leri. Elle düzenlenmez |

**Ne zaman dokunurum?** Phosphor ikonları için hiç: komponent kodunda `TDS.icon('Ad')` yazmak yeter. Özel bir ikon gerekirse `icons.js`'e Figma'dan SVG olarak eklenir.
