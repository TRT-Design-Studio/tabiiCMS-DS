---
date: 2026-11-10
author: "@mucahitpuren"
branch: mucahitpuren/select-textarea-dokumantasyonu
---

# Select ve Textarea dokümantasyonu

`↪︎ Select` ve `↪︎ Textarea` sayfaları şablona göre dokümante edildi.

## Ne yapıldı?
- İki sayfaya da yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717`.
- Ana setler Component Sets tablolarına taşındı (kopyalanmadı). Boşalan eski grup frame'leri silindi.
- Select Examples: form değeri, mobil bölüm seçici, sayfa numarası (Small, 72 px), açık liste (Playground → "Reference vs DS · Revised" → Example · Open kopyası).
- Textarea Examples: uzun açıklama (form genişliği), sayaçlı, sınır aşımı.
- Kimlik kartları: `components/select/spec.md`, `components/textarea/spec.md`.

## Alınan kararlar
- Select için dokümandaki varsayılan boy Medium yazıldı (Input ile aynı). Figma'da panelden eklenen Small.
- Textarea'nın tek boyu var; tabloda tek sütun "DEFAULT · 320 × 80".

## Revizeler (Mücahit)
- Select değeri artık tek satır, sığmazsa sonu "…" ile kesiliyor (18 varyant).
- Select ve Textarea Focused varyantlarında dört kenarın kalınlığı `Border/border-width/border` değişkenine bağlandı.
- Textarea açıklaması güncel hale göre yeniden yazıldı (Hover çıkarıldı, sayaç rengi eklendi).
- Kullanılmayan leading icon / Leading slot sorun değil.

## Açık sorular
- Select'in Figma varsayılanı Medium olsun istendi. Figma varsayılanı setteki en sol üst varyanttan seçiyor (denendi). Medium sütunu sola alınırsa şablondaki "sütunlar doğal sırada" kuralıyla çelişiyor. Karar bekleniyor.

## Sıradaki adım
- Kalan Form alt sayfaları `dokuman: <sayfa>` ile: Form Field, Number Stepper, Phone Field, Datepicker, Tag Input, Checkbox & Radio, Filter Group.

## Ek iş: Form Field, Number Stepper, Phone Field
- Üç sayfaya da yedi frame kuruldu, setler Component Sets'e taşındı, eski grup frame'leri silindi, zemin `#171717`.
- Form Field: Component Sets satırları Control (Input, Select, Textarea), sütunları State. Examples: yan yana iki alan, helper, error, warning, sistem değeri.
- Number Stepper: varyantı yok; state'ler iç parçalardan (en düşük, en yüksek, error, disabled). Examples Playground'dan.
- Phone Field: Medium sütunu solda bırakıldı, Figma'da varsayılan Medium kalsın diye. Examples: açık ülke listesi, dolu numara, eksik numara.
- Phone Field revizesi: Leading kutusunun iç boşluğu `Spacing/1`, sağ çizgisi `Border/border-width/border` değişkenine bağlandı. İçteki Input artık genişliği dolduruyor; Phone Field daraltılınca alan da daralıyor (Playground'daki 320 px kullanımlar değişmedi).
- Kimlik kartları: `components/form-field`, `number-stepper`, `phone-field`.

## Açık sorular (ek)
- Form Field açıklaması eski: "Show Label, Hint · Text: Hint Text" diyor, güncel property'ler Show Label ve Show Message.

## Ek iş: Interaction code layer'ları
- Form Field açıklaması güncel property'lere göre yeniden yazıldı.
- Yeni klasör `interaction/`: spec.md tablolarından ve `tokens/`'dan code layer üreten sistem (`node interaction/build.mjs`, denetim `--check`). Çıktılar: `interaction/layers/buttons/index.html` (Button, Icon Button, Split Button) ve `interaction/layers/badges/index.html` (Badge Count, Badge Dot, Badge Label, Status, Tag).
- İç içe komponentler yeniden yazılmadı: Button → badge-count, Split Button → button + icon-button, Status → badge-dot.
- Spec'ler makine okuyabileceği tablolara çevrildi: button (Icon sütunu, Focused/Disabled tablosu), icon-button (Shapes, Active), split-button (Parts), badge-count/dot/label (Sizes, Tones), status (Icon sütunu, Tones tablosu, Hover), tag (Sizes). Değerler Figma'dan okundu.
- Yeni komut `interaction: <sayfa>` ([workflows/interaction.md](../../workflows/interaction.md)); `dokuman` akışına build adımı eklendi.
- Karar: Figma eklenti arayüzü code layer oluşturamıyor ve içine yazamıyor. Code layer elle eklenir, `layers/<sayfa>/index.html` yapıştırılır.

## Açık sorular (ek 2)
- ~~Repodaki `tokens/` Figma'nın gerisinde.~~ Çözüldü: aşağıdaki figma senkron.

## Ek iş: figma senkron
- Aynı branch'te yapıldı (code layer'lar token'lara bağlı olduğu için birlikte gidiyor). Parçalar Figma ile hash karşılaştırmasıyla doğrulandı.
- Değişenler: `feedback/{success,warning,danger,info}/border` artık saydam (Light %10, Danger %20; Dark %50). `feedback/neutral/*` bir ton açıldı (bg neutral/100–800, text 600–400, border 200–700). Yeni: 8 `avatar/*` ve `bg/inverse-overlay` (%60).
- Uyarılar sadece avatar hex değerleri; `rules/core/tailwind-temel.md` istisnası.
- Code layer çıktısı `interaction/dist/` yerine `interaction/layers/` oldu: `.gitignore` `dist/` klasörlerini dışarıda bırakıyordu. Build yeniden çalıştırıldı, yeni token'lar code layer'lara geçti.
- Playground'lar tarayıcıda görsel olarak denenmedi (bu makinede headless Chrome açılmadı). 524 varyant kombinasyonu script ile hatasız çizildi.

## Ek iş: Code layer temeli (foundation) ve Menu
- İkonlar: Figma'daki Icons sayfası 1512 Phosphor ikonu (Regular + Fill) içeriyor. Code layer'lar aynı paketi kullanıyor (`@phosphor-icons/web` 2.1.2, sürüm sabit). Elle kopyalanmış SVG'ler kaldırıldı; `shared/icons.js` sadece özel ikonlar için. Bayraklar circle-flags (`TDS.flag`).
- Gölgeler `tokens/shadows.json`'dan CSS değişkeni oldu (`--shadow-lg` vb.).
- Yeni komponentler: `menu`, `menu-item`, `menu-group-label`, `menu-separator` (spec'lerden; Menu spec'ine liste durumları tablosu, Menu Item spec'ine Icons tablosu eklendi, değerler Figma'dan).
- Açılır menü temeli (`TDS.defineMenu`, `data-tds-menu`): tıklayınca açılır, 4 px aşağıda; oklar, Home/End, Enter, Escape, Tab ve dışarı tıklama çalışır.
- Split Button'ın menü düğmesi ve Interactive Status artık gerçek Menu'yü açıyor.
- `meta.json` (`uses`) ile iç içe komponentler build'de kendiliğinden ekleniyor; `page.json` sadece sayfanın kendi komponentlerini listeliyor.
- Yeni playground: `interaction/layers/menu/index.html`.
- Yeni ana kural (Mücahit'in isteğiyle): `rules/core/interaction/code-layer.md`.
- Düzeltme (Mücahit fark etti: ikonlar büyük görünüyordu): Phosphor ikon fontu kaldırıldı. Font glifleri Figma'daki çizimden büyük. Build artık ikonları `@phosphor-icons/core` 2.1.1 SVG'leri olarak gömüyor (`interaction/lib/icons.mjs`, önbellek `interaction/shared/phosphor/`). Geometri Figma export'u ile karşılaştırıldı, aynı (ör. MagnifyingGlass 28.71/32 = 229.66/256). SVG'ler 1em; CSS yüklenmese de yazı boyutunu aşmaz. İkonlar için internet gerekmiyor. Kural v2.
- İkon boyutları artık spec'ten px olarak veriliyor (`TDS.spec`, build spec tablolarını JS'e de geçiriyor): Button 14/16/16/20, Icon Button ve Split Button menüsü 16/16/20/20, Status ve Tag 12/14, Menu Item 16, Menu Error 20. Hepsi script ile doğrulandı.
- Button'a hareket (Mücahit): hover ve pressed geçişi 120 ms ease-out, pressed'de 0.9 ölçek. Button spec'ine `Motion` tablosu eklendi; Icon Button ve Split Button aynı hareketi kullanıyor; "hareketi azalt" açıkken kapalı. Kural v3.

## Ek iş: Playground arayüzü Sidebar oldu
- Mücahit'in verdiği Sidebar Interaction kodu `interaction/reference/sidebar/` altına kondu.
- Yeni `interaction/shared/playground.js` + `base.css`: solda Expanded Sidebar (248, daralmaz), tabii logosu, her komponent bir Nav Item; tıklanan seçilir, sahnede görünür ve altında Nav Sub Group gibi açılıp property'lerini gösterir (diğerleri kapanır). Footer'da açık/koyu mod. Sahne kalan alanın tamamı; sağ altta yakınlaştırma (%25–%400; −/+, Ctrl/⌘ + tekerlek, + − 0 tuşları). Bütün varyantlar tablosu kaldırıldı.
- Değerler Sidebar / Nav Item / Nav Sub Group spec'lerinden token olarak; hareket (0.4 s, cubic-bezier(0.32, 0.72, 0, 1)) referans koddan.
- DOM testi (jsdom): üç sayfada seçme, açma/kapama, kontrol değiştirme, yakınlaştırma ve tema hatasız. Görsel olarak tarayıcıda bakılamadı.
- Kural v4: playground arayüzü maddesi.
- Spec'ler: 38 yeni spec ve 24 mevcut spec'in Figma ile güncellenmesi bir alt ajana verildi (devam ediyor).
