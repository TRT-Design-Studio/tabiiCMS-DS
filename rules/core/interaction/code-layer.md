---
id: core.interaction-code-layer
title: Code layer'lar (Interaction) nasıl yazılır
owner: "@mucahitpuren"
status: active
version: 5
applies_to: components
updated: 2026-11-11
---

# Code layer'lar (Interaction) nasıl yazılır

## Amaç

Dokümanların Interaction frame'indeki çalışan komponentler Figma'daki komponentle aynı görünsün ve aynı davransın. Komponent değişince code layer elle düzeltilmesin, spec'ten yeniden üretilsin. Bir kez yazılan kod, iç içe kullanıldığı her yerde tekrar kullanılsın.

## Kural

### Kaynak

1. Code layer'lar HTML, CSS ve JavaScript ile yazılır. Kaynak `interaction/` klasöründe durur, Figma'ya `node interaction/build.mjs` çıktısı (`interaction/layers/<sayfa>/index.html`) konur. Çıktı elle düzenlenmez.
2. **Değer yazılmaz.** Renk, boşluk, köşe, yazı ve gölge `tokens/` klasöründen CSS değişkeni olarak gelir. Hangi boyutta hangi token, hangi state'te hangi renk bilgisi `components/<isim>/spec.md` tablolarından okunur. CSS'te sabit hex, px boşluk veya font değeri olmaz; istisna: spec tablosunda sayı olarak yazan yükseklik ve ikon boyutları.
3. Spec'te bir değer tabloda değil de cümle içindeyse, code layer'dan önce tabloya taşınır. Değer Figma'dan okunur, uydurulmaz.
4. Spec veya token değiştiğinde `node interaction/build.mjs` çalıştırılır. `node interaction/build.mjs --check` hatasız geçmeden iş gönderilmez.

### Temel yapılar (foundation)

5. **İkonlar** Figma'daki Icons sayfasıyla aynı paketten gelir: Phosphor (Regular ve Fill), sürümü `interaction/lib/icons.mjs` içinde sabittir. `TDS.icon('<FigmaAdı>', boyut, 'Regular' | 'Fill')` ile çizilir. Build, sayfada geçen ikonları SVG olarak gömer; geometri Figma ile aynıdır. İkon fontu kullanılmaz (glifler Figma'dakinden büyük görünür). SVG koda elle kopyalanmaz. Paket dışı özel ikonlar (Custom Icons) `interaction/shared/icons.js` dosyasına Figma'dan dışa aktarılarak eklenir. Playground'da seçilebilecek ek ikonlar `interaction/shared/icon-list.json` dosyasına yazılır.
   **İkon boyutu her zaman Figma'daki komponentteki boyuttur.** Spec tablosunda yazar (ör. Button Sizes → Icon) ve komponent kodu onu `TDS.spec(...)` ile okuyup `TDS.icon(ad, boyut)` olarak verir. Boyutsuz ikon çizilmez.
   **Animasyon** (süre, easing, ölçek) Figma'da olmadığı için spec'in `Motion` tablosuna yazılır ve oradan okunur. Sistemde "hareketi azalt" açıksa animasyon kapanır.
   **State geçişleri keskin olmaz.** Hover, odak, seçim ve açılma gibi her state değişikliği yumuşak geçer. Komponentin kendi `Motion` tablosu yoksa Button'ın `Motion` tablosundaki süre ve easing kullanılır (build bunu `--tds-transition` olarak verir). Ölçek (basınca küçülme) sadece butonlardadır.
6. **Bayraklar** Figma'daki Flags ile aynı paketten (circle-flags) `TDS.flag('<kod>')` ile gelir.
7. **Yazı tipi** Geist'tir; token'daki yazı stilleri (`text-sm/medium` → `var(--text-sm-medium)`) kullanılır.
8. **Açık ve koyu mod** her code layer'da çalışır (`data-theme`). Renkler sadece semantic token'lardan gelir.

### İç içe komponentler

9. Bir komponent başka bir komponenti içeriyorsa onu yeniden yazmaz: `TDS.render('<isim>', {...})` ile çağırır ve `meta.json` dosyasındaki `uses` listesine ekler. Build kullanılanları kendiliğinden ekler.
10. Figma'da bir parça başka bir komponenti tetikliyorsa code layer'da da gerçekten tetikler. Örnek: Split Button'ın menü düğmesi ve Interactive Status gerçek Menu komponentini açar (`TDS.defineMenu` + `menu` / `data-tds-menu`). Açılan menü klavyeyle (oklar, Enter, Escape) kullanılabilir.
11. Yeni bir komponent yazmadan önce `interaction/components/` altına bakılır; varsa o kullanılır.

### Playground

12. Her variant ekseni bir seçim kutusu, her boolean bir anahtar (switch), her text property bir yazı alanı olur. State'in yanında **Live** seçeneği bulunur: gerçek hover, basma ve odak.
13. **Arayüz Sidebar'dır.** Yapı ve hareket `interaction/reference/sidebar/` (Sidebar Interaction code layer) ile aynıdır: solda Expanded Sidebar (248 px, daralmaz), üstte tabii logosu, her komponent ikonsuz bir Nav Item. Tıklanan komponent seçilir, sahnede görünür ve altında Nav Sub Group gibi açılarak property'leri gösterir; diğerleri kapanır. Footer'da User Card yerine açık/koyu mod düğmesi durur. Sahne kalan alanın tamamını kaplar ve sağ altta yakınlaştırma (−, %, +; Ctrl/⌘ + tekerlek; + − 0 tuşları) bulunur. Bütün varyantlar tablosu yoktur.
14. Erişilebilirlik: düğmeler `button`, menüler `role="menu"` ve `role="menuitem"`, ikonlar `aria-hidden`; yalnız ikonlu düğmelerde `aria-label` olur. Odak halkası `border/focus` token'ıdır.

## Örnek

✅ Doğru: Split Button, `button` ve `icon-button` komponentlerini `TDS.render` ile çağırır; menü düğmesi `menu` komponentini açar; boyutlar `components/split-button/spec.md` ve `components/button/spec.md` tablolarından gelir.

❌ Yanlış: Split Button'ın CSS'inde `background: #171717`, menü yerine elle çizilmiş bir liste, ikon için kopyalanmış bir `<svg>`.

## İstisnalar

- Figma eklenti arayüzü code layer oluşturamaz ve içine yazamaz. Code layer'ı Figma'ya koymak (yapıştırmak) elle yapılır: [interaction/README.md](../../../interaction/README.md).
