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

## Ek iş: Languages ve Country Based tasarımı
- Mücahit durum modelini anlattı: CMS durumu (Draft, Published, Unpublished, Error); Published olunca editörlere bildirim, onaylanırsa On tabii, onaylanmazsa Not on tabii. `moduller/show.md` ve `sorular.md` (7 ✅) güncellendi.
- Güncel Master ekranından ("DS · Web 1440", Playground → Create Show) iki yeni ekran türetildi: "DS · Web 1440 · Languages · v2" ve "DS · Web 1440 · Country Based · v2". Sol panelde dil / değişmiş ülke listesi, sağda seçilenin formu; dil satırlarında CMS ve tabii durumu ayrı ayrı.
- Karar önerisi: `cms/kararlar/001-show-languages-ve-country-based.md` (`oneri`). Doğrulanacaklar sorular 11–14'te.
- Düzeltme (Mücahit): tabii durumu dil bazında değil, Show'a ait. Orijinal Languages ve Country ekranlarına bakılıp düzeltildi: dillerde sadece CMS durumu ve Publish; Country'de üstte arama + Edited Countries. `cms/README.md`'ye "tasarlamadan önce orijinal ekrana bak" kuralı eklendi.
- Mücahit: Master dışındaki alanlar, veri girilmedikçe Master'daki bilgiyi gösterir (soru 13 ✅). Languages ekranındaki SEO ve Media ipuçları buna göre düzeltildi.
- Mücahit: Add language olmayacak, 5 dilin hepsi listede görünecek. Ekranda Turkish, English, Arabic, Urdu, Spanish; English'in beşinci dil olduğu varsayım, doğrulanmalı.
- Mücahit: Country Based'de istenen ülke seçilip hızlı düzenlenebilmeli. Sol panel onay kutulu çoklu seçime çevrildi (arama, All/Edited, Edited grubu + kıtalar); sağdaki form seçili ülkelere birlikte uygulanıyor, farklı alanlar "Mixed". Kalıp orijinal Publish Management'tan.
- Mücahit Show akışını baştan anlattı (sıfırdan oluşturma ve düzenleme). `moduller/show.md` yeniden yazıldı: durum modeli düzeltildi (CMS ve tabii birbirini doğrudan etkilemez, sadece bilgi gider), sekmelerin ilk kayıttan sonra açılması, dil eklemenin yetkiye bağlı olması, ülke değişikliğinin otomatik Draft'a düşmesi, Create Video'nun kullanıcıyı Show'dan çıkarması, Publish Management'ın verimsizliği. Sorular 10, 11, 14 kısmen/tam cevaplandı; 15–20 eklendi.
- Mücahit soruları cevapladı (10, 11, 14, 16, 19, 20 ✅; 15, 17 kısmen; 18 açık). Published içerik Edit'te Draft'a döner; kaydedilmeyen ülke değişikliği silinir (test ortamındaki Draft'a düşme bir hata); ülkeler ayrıca publish edilmez; Show'un Publish Management tarihleri bölümlere iner; Create Video Show bağlamını koparıyor (staging'de doğrulandı: Episode Dashboard açılıyor, sadece Show önceden dolu). Çoklu ülke düzenleme "denenebilir".
- Bölümde eski Languages ve Country denemeleri duruyor; dokunulmadı.

## Sıradaki adım
- `cms incele: Video`, ardından Row ve Page Item.
