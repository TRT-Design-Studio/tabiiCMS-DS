---
date: 2026-11-18
author: "@mucahitpuren"
branch: mucahitpuren/sidebar-interaction
---

# Sidebar istisnası ve kalan sayfaların code layer'ları

Sidebar code layer'ı tek dosya oldu. Tooltip, Breadcrumb, Pagination, Stepper, Tabs, Cards, Table ve List Item için Interaction playground'ları yazıldı. Ardından Mücahit'in iki tur revizesi işlendi.

## Ne yapıldı?
- Sidebar: `interaction/reference/sidebar/` (index.html, style.css, app.js) build ile tek `interaction/layers/sidebar/index.html` oluyor (`pages/sidebar/page.json` → `raw`). Spec'ten üretilmiyor, animasyon setleri (Ease out, Cascade, Scrub) kalıyor.
- Yeni code layer'lar: `interaction/layers/{tooltip,breadcrumb,pagination,stepper,tabs,cards,table,list-item}/index.html`. Yeni komponent klasörleri: avatar, breadcrumb(-item), card(-header), icon-stat, list-item, pagination(-item), section-nav-item, stat-card, step-icon, tab-segment, tab-underline, tabs, table-cell, table-header-cell, trend, user-card.
- Ortak: zoom'da sahne artık her yöne kaydırılabiliyor, menü açılınca yerinden oynamıyor (`shared/playground.js` → `fit`). Menülerde gerçek alt menü var (`core.js` → `openSubmenu`). `data-pg-fluid` ile responsive içerik.
- Menu: Loading skeleton animasyonlu (spec → Motion). Selected'taki tik isteğe bağlı (Show Check). Menu Item leading icon `text/primary` (Figma'da da).
- Tooltip: Figma'daki yeni auto layout (balon + ok, boşluksuz), blur 2 px, kısayol %60.
- Tabs: tab'ler Labels alanından, Locked numaralarla, Fade / Slide hareketi, Underline'da Gap, Row padding, Tab Width, Text Align denemeleri. Tab Underline'a Figma'da Trailing Icon eklendi.
- Pagination: Show Total (Figma'ya da eklendi), sayfa sayısı Total Items ÷ Per Page. Next hover'daki fazla çizgi düzeldi.
- Stepper: Back / Next ile adım adım form stepper örneği (Figma Examples'taki bölümler, gap Spacing/1).
- Cards: kartın çizgisi bütün kartta. Body'ye List Item veya Stat Card. Slot H'de Status. Stat Card yüksekliği içeriğe göre. Icon Stat ikonu `text/tertiary`.
- Table: Figma'daki "Show library" tablosu (Show Link, Published In True + tooltip, örnek görseller), responsive (en fazla 1144 px, daralınca yatay kaydırma). Hücre yan padding'i 20 (Figma, spec, doküman). Satır sadece checkbox ile seçiliyor.
- Spec'lere Figma'dan okunan değerler tablo olarak eklendi (pagination, section-nav-item, card, user-card, avatar, table-cell, table-header-cell, icon-stat, tooltip, tabs, tab-underline, menu, menu-item).

## Alınan kararlar
- Sidebar code layer'ı istisna, Mücahit aksini söyleyene kadar elle yazılmış koddan üretilir — `rules/core/interaction/code-layer.md` v6.
- Checkbox hücresinin sağ padding'i 0 (komponent seviyesinde, Table Cell ve Header Cell) — her tabloda yanındaki hücreyle çift boşluk yapıyordu.
- Tab hareketi sadece kodda; Figma yerleşimini bozmaz.

## Açık sorular
- Ajanın seçtiği değerler onay bekliyor: shimmer 1500 ms, Slide 200 ms; Published In tooltip'leri (Lists, Countries, Languages; Figma'da sadece "Queue" var); örnek menü satırları (Move to alt menüsü, Actions, Bulk Actions, User Card) ve kart footer'ı (Cancel, Save).
- Figma: Tab Underline doküman sayfasındaki Properties tablosuna trailing icon satırları eklenmedi; Changelog'lar güncellenmedi; örnek tablodaki Checkbox sütun frame'i hâlâ 48 px.
- Code layer'lar tarayıcıda gözle denenmedi (bu makinede headless Chrome açılmıyor).

## Sıradaki adım
- Code layer'ları Figma'daki Interaction frame'lerine yapıştırmak ([interaction/README.md](../../interaction/README.md)).
