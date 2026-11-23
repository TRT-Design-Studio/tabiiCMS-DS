---
date: 2026-11-23
author: "@mucahitpuren"
branch: mucahitpuren/cms-ux-kaynak-analizi
---

# CMS yeniden tasarımı: kaynak analizi ve repo kurulumu

Yeni iş kolu başladı: tabii CMS'i UI ve UX olarak baştan tasarlanacak. Üç kaynak incelendi ve repoda `cms/` çalışma alanı kuruldu.

## Ne yapıldı?
- **Bilgi mimarisi (PDF, 94 sayfa, xmind):** Bu makinede PDF aracı olmadığından macOS PDFKit ile satır satır okundu; girintilerden ağaç yeniden kuruldu → `cms/kaynaklar/bilgi-mimarisi.md` (2700+ satır, içerik değiştirilmedi).
- **Figma (CMS dosyası, Flows sayfası):** 28 bölüm, 258 ekran listelendi → `cms/kaynaklar/figma-ekran-envanteri.md`. Show ekranları (Dashboard, tip penceresi, Master, Languages, Country Based Changes, Episodes, Publish Management, License) tek tek incelendi.
- **Staging:** Mücahit'in tarayıcısında, oturumu açık halde gezildi. Menü, 25 modül, tip pencereleri (Show, Video, Row, Page Item) ve Series / Movie / Game kayıtlarının alanları okundu. Hiçbir şey kaydedilmedi → `cms/kaynaklar/staging-notlari.md`.
- `cms/moduller/show.md`: Show'un mevcut hali (liste, akış, tiplere göre sekmeler ve alanlar, kaynaklar arası farklar, gözlemler). `cms/moduller/README.md`: 28 modülün tablosu.
- `cms/kararlar/`: numaralı, değiştirilebilir karar kayıtları (şablon + durumlar). Henüz karar yok.
- `cms/sorular.md`: 10 açık soru.
- Komutlar: `cms: <soru>`, `cms incele: <modül>`, `cms karar: <konu>` → `workflows/cms.md`, KOMUTLAR.md, `.claude/skills/cms/`.

## Alınan kararlar
- Kaynaklar çelişirse staging > Figma ekranları > bilgi mimarisi. Staging test ortamıdır; canlıda olmayan özellikler (Game) içerir, bunlar *(test)* diye işaretlenir.
- Açık sorular ekiple sonra toplu konuşulacak (Mücahit).
- Mevcut durum (`moduller/`) ile yeni tasarım kararları (`kararlar/`) ayrı tutulur. Karar değişince eskisi silinmez, `degisti` olur.
- Repo public olduğu için staging adresi, kişi adları, gerçek içerik verisi ve ekran görüntüleri repoya konmaz; sadece yapı yazılır.

## Bulgular
- Staging'de olup Figma ve bilgi mimarisinde olmayanlar (Game ve Game Video sadece test ortamında, canlıda yok): Show tipi **Game** (Videos, ScreenShots sekmeleri, oyuna özel alanlar), Video tipi **Game Video**, **Featured Content Row**, Page Item tipi **Intro Media**, Series'te **Special Event**.
- Bilgi mimarisindeki lejant (alan türleri) PDF'e geçmemiş.

## Açık sorular
- `cms/sorular.md`.
- `AGENTS.md` klasör haritasına `cms/` satırı eklenmedi (korumalı dosya); Mücahit isterse eklenir.

## Sıradaki adım
- `cms incele: Video`, ardından Row ve Page Item.
