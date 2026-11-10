---
id: core.dokuman-sablon
title: Komponent dokümantasyon şablonu
owner: "@mucahitpuren"
status: active
version: 4
applies_to: docs
updated: 2026-11-10
---

# Komponent dokümantasyon şablonu

## Amaç

Her komponent sayfası aynı yapıda dokümante edilsin. "Şu sayfayı dokümante et" demek yetsin; frame'ler, metinler ve tablolar her seferinde aynı düzende çıksın.

## Kural

### Nerede

1. Doküman, komponentin **kendi sayfasında** (`↪︎ <Aile>` alt sayfası veya tek sayfalık grup) durur. Ayrı doküman sayfası açılmaz.
2. Ana komponent seti doküman içine, **Component Sets** frame'ine taşınır. Sayfadaki eski grup frame'i (Group Title + Sets) boşalınca silinir. Set taşınır, kopyalanmaz; instance bağlantıları kopmaz.
3. Sadece güncel komponentler kullanılır. Documentation Draft, Badge ve Input sayfaları eski denemelerdir; oradan **yapı ve görsel dil** alınır, komponent ve instance alınmaz.
4. Doküman metinleri İngilizcedir. Sayfa zemini `#171717`'dir.

### Frame sırası (soldan sağa, aralarında 160 px)

| # | Frame | İçerik |
|---|---|---|
| 1 | **Overview** | Doc Header · Hero (256 × 256 önizleme, başlık, açıklama) · Meta (Figma durumu, sürüm, son güncelleme) · ayırıcı · gizli Introduction (16:9 video alanı) · **Variants at a glance** (kartlar) |
| 2 | **Changelog** | Sürüm girişleri, en yeni üstte. 1024 px genişlik |
| 3 | **Interaction** | Figma Make ile çalışan komponentin gömüleceği alan. Hazır değilse 16:9 yer tutucu ve "Coming soon" notu |
| 4 | **Examples** | Playground ekranlarındaki slot'lu veya özel kurulmuş instance'lar. Her örnekte hangi slot'a ne konduğu yazar |
| 5 | **Component Sets** | Her set bir **tablo** içinde: solda `STATE` sütunu, üstte diğer eksenin sütunları (ör. `SMALL · 32`). Ana set tablonun içine konur, varyantlar satır ve sütunlara hizalanır, satırlar arasında `border/subtle` çizgi. Sütunlar eksenin doğal sırasındadır (Small → Medium → Large). Dokümandaki varsayılan değer ekibin kararıdır ve Properties tablosuna o yazılır; Figma'nın panelden eklerken seçtiği varyant (sol üstteki) farklı olabilir. Altında **States** tablosu |
| 6 | **Anatomy & Specs** | Numaralı anatomi sahnesi + parça tablosu · boyut tablosu · state renk tablosu · not |
| 7 | **Properties** | Her set için property tablosu (Property, Type, Values, Default, Description) · **Used in other components** tablosu |

Do / Don't frame'i eklenmez.

### Görsel dil (Input sayfasındaki eski denemeden)

5. **Frame:** 1200 px (Changelog 1024), dikey auto layout, 48 px iç boşluk, 40 px aralık, `bg/surface`, `border/default` çizgi, `rounded-2xl`.
6. **Doc Header:** Logo (Type=Full) + `Tabii CMS Design System  ·  <Komponent>  ·  v<sürüm>` (`text-sm/medium`, `text/secondary`). Overview'da sadece `Tabii CMS Design System`.
7. **Yazılar:**
   - Frame başlığı `text-3xl/bold`; Overview başlığı `text-4xl/bold`, ortalı.
   - Bölüm başlığı `text-2xl/semibold`, alt başlık `text-lg/semibold`.
   - Giriş ve not metinleri `text-sm/regular`, `text/secondary`.
8. **Tablo:**
   - Kenarlık `border/subtle`, `rounded-xl`, içerik kırpılır.
   - Başlık satırı `bg/subtle`, büyük harf `text-xs/medium` `text/tertiary`.
   - Satırlar arasında üstte 1 px `border/subtle` çizgi.
   - Hücre iç boşluğu 16 / 12.
   - Değerler `Code` çiplerinde: `bg/subtle`, `rounded-sm`, `text-xs/medium`.
9. **Kart (Variants at a glance, Examples):**
   - `rounded-2xl` önizleme kutusu: 1 px `border/default` çizgi (içte). `bg/subtle` dolgu kutuda durur ama **gizlidir** (Mücahit, 2026-11-10). Hero, Stage, video ve Figma Make alanları dolgulu kalır.
   - Önizlemedeki instance gerçek kullanımdaki genişliktedir (içeriğe göre hug veya ekrandaki genişlik), hepsi aynı sabit genişlikte değil.
   - Altında ad (`text-base/semibold`), kullanım (`text-sm/regular`) ve "e.g." satırı (`text-xs/medium` `text/tertiary`).
   - Variants at a glance'te satırda 4 kart, Examples'ta 2 kart.
10. **Anatomi:**
    - `bg/subtle` `rounded-xl` sahne.
    - 24 px `bg/inverse` yuvarlak numara işaretleri ve `border/strong` 1 px çizgiler.

### Veri

11. Bütün değerler (varyantlar, property'ler, boyutlar, token'lar) **komponentin kendisinden okunur**, referans sayfadan veya hafızadan yazılmaz ([referans-inceleme.md](referans-inceleme.md)).
12. Dokümandaki bütün renkler, boşluklar ve yazılar değişkene ve yazı stiline bağlıdır.
13. **Examples:** Playground'da komponentin slot'larla veya özel içerikle kullanıldığı instance'lar taranır. Her farklı kullanım bir kez, kopyalanarak eklenir.
14. Alt çizgili hover için yazı stilinden koparılan metinler dokümanda ayrıca belirtilmez (font değişkenleri bağlı olduğu sürece).

### Repo kaydı

15. Her dokümante edilen komponent için `components/<isim>/spec.md` yazılır. Format: [components/README.md](../../../components/README.md).
16. Bitince `wiki/log/` kaydına eklenir ve `node scripts/kontrol.mjs` çalıştırılır.

## Örnek

✅ `↪︎ Input` sayfası: Overview → Changelog → Interaction → Examples → Component Sets (Input seti içinde) → Anatomy & Specs → Properties. Değerler Input setinden okunmuş, örnekler Playground'daki prefix, suffix, inner button ve dosya seçici kullanımları.

❌ Eski Input deneme sayfasındaki seti kopyalamak, Do/Don't eklemek, ana seti sayfadaki eski grup frame'inde bırakıp dokümana kopyasını koymak.
