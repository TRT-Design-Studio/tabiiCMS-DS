---
date: 2026-10-14
author: "@mucahitpuren"
figma_file: xdSquxB9G5GHgAe4s3QTho
figma_url: https://www.figma.com/design/xdSquxB9G5GHgAe4s3QTho/Tabii-CMS---Design-System
tailwind_version: 4.3.3
---

# Figma ilk tarama: Tabii CMS – Design System

Dosyanın tamamı okundu: sayfalar, değişkenler, yazı stilleri, komponent setleri, ikonlar, ekranlar ve dokümantasyon sayfaları. **Figma'da hiçbir değişiklik yapılmadı.** Karşılaştırma Tailwind **v4.3.3** tema dosyasına göre yapıldı.

## Genel tablo

- **2 değişken koleksiyonu:** `Primitives` (150 değişken, tek mod) ve `Themes` (53 değişken, Light Mode / Dark Mode).
- **72 yazı stili:** `text-xs` … `text-4xl` boyutları × 9 ağırlık. Hepsi font ailesi, boyut, ağırlık ve satır yüksekliği değişkenlerine bağlı.
- **Gölge stili, effect style ve renk stili yok.** Renkler sadece değişkenlerden geliyor.
- **Component Sets frame'inde 46 komponent seti var.** 47. set (DoDont) Doc Kit'te duruyor. 44 sette bütün renk, boşluk, köşe yuvarlaklığı, border ve yazı değerleri değişkene ya da stile bağlı. Kalan ikisi Avatar ve List Item'daki avatar. Bunlardaki renkler bilinçli olarak hex (bkz. Kararlar).
- **Screens frame'indeki 3 ekranda (Light + Dark) 3.118 instance var.** Hepsi Component Sets ve Icons sayfasından geliyor. Sistem dışı komponent yok.
- **İkonlar:** 1.512 Phosphor ikonu, her biri Regular ve Fill olarak (toplam 3.024 komponent). Hepsi 32 × 32 px.

## Sayfa envanteri

| Sayfa / frame | Durum |
|---|---|
| Tabii CMS Cover | Kapak |
| Playground → Atoms, Molecules, Organisms, Templates | **Deneysel.** İçlerinde "(Item)" ile biten 99 bağımsız komponent var. Silinecek |
| Playground → **Component Sets** | **Gerçek.** 46 komponent seti. **Asıl setler şimdilik burada** (bkz. Kararlar) |
| Playground → **Screens** | **Gerçek.** Doğrulama ekranları: Dashboard, Edit – Create Show, Shows – Content Library (Light + Dark) |
| Playground → Doc Kit (parked) | Doküman kuralları: DoDont, Versioning, Status, Doc Tiers |
| Colors → Primitive Colors | **Referans** ("Slate" frame'leri, 7 elle girilmiş renk). Silinecek |
| Typography | **Gerçek.** Sadece "Geist" ve "Ag" yazıları stile bağlı değil, bu bilinçli bir tercih |
| Spacing | **Referans.** Silinecek |
| Icons | **Gerçek** + tam dokümantasyon |
| Shadows & Borders | **Referans.** Gölge değerleri Tailwind v3'ün gölge setiyle aynı |
| Documentation Draft | Button + Icon Button dokümantasyonu |
| Badge | Badge + Status Dot dokümantasyonu |
| Input | Input + Select + Textarea dokümantasyonu |

## Bulgular

### A. Yapısal (öncelikli)

**A1. Kopya komponent setleri.** Documentation Draft (Button, Icon Button), Badge (Badge, Status Dot) ve Input (Input, Select, Textarea) sayfalarında, Playground → Component Sets'teki setlerin **birebir kopyaları** var.
- Kopyalar şu an asıllarıyla aynı: boyutlar, bağlı değişkenler, köşe yuvarlaklıkları ve padding'ler karşılaştırıldı.
- Ama ekranlar Playground'daki setleri, Input dokümanı ise kendi sayfasındaki kopyayı kullanıyor.
- Biri değiştiğinde diğeri değişmez. Ekran ile doküman zamanla birbirinden ayrılır.

**A2. İkon ana komponentlerinin rengi değişkene bağlı değil.** 3.024 ikonun vektörü elle girilmiş `#343330` renginde (Phosphor'un varsayılan rengi).
- Komponentlerin içindeki 216 ikon doğru şekilde `text/*` ve `feedback/*` token'larına bağlanmış.
- Ama yeni yerleştirilen veya değiştirilen (swap) bir ikon siyah gelir ve Dark modda kaybolur. Icons dokümanı da bu riski yazıyor.

### B. Tailwind ile karşılaştırma

| Konu | Durum |
|---|---|
| Spacing | ✅ 4 px çarpanlı, Tailwind ile birebir. `Spacing/4.5` (18 px) Tailwind'in varsayılan listesinde yok ama v4'te `size-4.5` çalışır. İkon boyutu için kullanılıyor |
| Yazı boyutları ve satır yükseklikleri | ✅ `xs`–`9xl` ve her boyutun satır yüksekliği Tailwind v4 ile birebir |
| Border kalınlıkları | ✅ `border`, `border-0/2/4/8` birebir |
| Neutral paleti | ✅ Tailwind v4 neutral ile aynı |
| **Köşe yuvarlaklıkları** | ⚠️ İsimler **Tailwind v3** mantığında: Figma `rounded-sm` = 2 px, ama v4'te `rounded-sm` = 4 px (v4'te 2 px'in adı `rounded-xs`). Figma `rounded` = 4 px (56 yerde kullanılıyor), `rounded-sm` hiç kullanılmıyor. `rounded-0` Tailwind'de `rounded-none`. `rounded-4xl` (32 px) eksik |
| Font ağırlığı | ⚠️ `font-regular` → Tailwind'de `font-normal` |
| `leading-none` | ⚠️ Değeri `1` ve Figma bunu **1 px** olarak okur (Tailwind'de %100). Şu an kullanılmıyor ama kullanılırsa yazı ezilir |
| Oranlı satır yükseklikleri | ⚠️ `leading-tight/snug/normal/relaxed/loose` yok |
| Harf aralığı | ⚠️ `tracking-*` değişkeni yok, bütün stillerde 0 |
| **Gölgeler** | ⚠️ Hiç yok (ne effect style ne değişken). Komponentlerin hiçbiri gölge kullanmıyor. Shadows sayfasındaki ilk değer bozuk görünüyor (blur 0.5, spread 0.05, %2). Muhtemelen v4'ün `shadow-2xs` değeri yanlış girilmiş |
| Renk isimleri | ⚠️ `Colors/neutral/050` diğer renklerden farklı yazılmış (`50` olmalı) |
| Gray paleti | ⚠️ 11 rengin hiçbiri kullanılmıyor, Themes de gray'e bağlanmıyor |
| Code syntax | ⚠️ Themes'te var (`var(--color-bg-base)`), Primitives'te yok |
| Semantik isimlerin kodda görünümü | ℹ️ `bg/surface` → `--color-bg-surface` → kodda `bg-bg-surface`. Aynı şekilde `text-text-primary` ve `border-border-default`. Çalışır ama tekrar eden isimler var. Kod tarafında çözülebilir (Faz 3) |

### C. Değişken ayarları (tasarımcının kullanımını etkiler)

- **Border radius ve border width değişkenlerinin kapsamı (scope) boş.** Figma bu değişkenleri hiçbir seçicide göstermez. Tasarımcı köşe yuvarlaklığını elle bir değişkene bağlayamaz.
- **Spacing değişkenlerinin kapsamında `TEXT_CONTENT` var** (`0` ve `px`'te ayrıca `FONT_VARIATIONS`). Boşluk değerleri metin içeriği seçicisinde de çıkıyor.
- Spacing isimlerinde nokta yerine benzer görünen başka bir karakter var (`0․5`). Figma isimde nokta kabul etmediği için böyle yapılmış. Koda aktarırken düzeltilecek, Figma'da değişmesine gerek yok.
- Kullanılmayan semantik token'lar: `feedback/*/border` (5 adet), `bg/overlay`.

### D. Dokümantasyon yapısı (öğrenilen şablon)

**Dil İngilizce.** Her komponent sayfasında aynı frame'ler var:

1. **Overview:** Doc Header (logo + "Tabii CMS Design System"), Hero (önizleme, başlık, açıklama), Meta (Figma durumu, sürüm, son güncelleme), Introduction (16:9 video çerçevesi), Variants at a glance (kartlar: ad, ne zaman kullanılır, örnekler).
2. **Component Sets:** satırlarda tip eksenleri (variant, shape, size), sütunlarda state'ler. Bir de States tablosu.
3. **Anatomy & Specs:** numaralı işaretler + Part / Required / Controlled by tablosu. Boyut tablosu, her değerin yanında token adı ve px karşılığı. Renk tabloları ve bir not.
4. **Properties:** Property / Type / Values / Default / Description. Nested components veya Used in other components. "Do not detach" notu.
5. **Changelog:** sürüm, tarih, durum rozeti, maddeler.

**Doc Kit kuralları:**
- **Versioning:** major = property veya varyant adı değişti ya da kaldırıldı ("yeniden adlandırma yerine ekle"), minor = ekleme, patch = token, görsel veya erişilebilirlik düzeltmesi.
- **Status:** Draft / Stable / Deprecated.
- **Doc tiers:** Minimum ve Full seviyeleri. Properties tablosu property tanımlarından, Tokens tablosu değişken bağlarından **üretilir**. Spec tabloları komponentten **okunur**.

**Tutarsızlıklar:**
- Doc Tiers'a göre **Tokens** bölümü Minimum seviyede de zorunlu ama hiçbir dokümanda yok. Full seviyedeki **Behavior & Accessibility** ve **Do / Don't** da yok.
- Badge ve Input sayfalarındaki video yer tutucusunda "…every state of Button and Icon Button" yazıyor (kopyala-yapıştırdan kalmış). Badge sayfasında Badge varyantlarının frame'inin adı "Button Variants".
- Overview'daki Doc Header'da sürüm yazmıyor, diğer frame'lerde yazıyor.
- Komponent açıklamaları (description) Türkçe ve İngilizce karışık.

### E. Video için

- Her setin property listesi çıkarıldı. Örnek: Button = Variant (4) × Size (3) × State (5) = 60 varyant + Label, Icon Left/Right, Left/Right Icon, Show Count.
- Sahneler doğrudan bu listeden üretilebilir.
- Dokümanlarda 16:9 video çerçevesi hazır.

## Kararlar (2026-10-14)

| Konu | Karar | Yapılan |
|---|---|---|
| Kopya setler (A1) | **Geçici durum, sorun değil.** Asıl setler şimdilik Playground → Component Sets'te. Doküman sayfalarındaki setler, dokümanın nasıl görüneceğini denemek için yapılmış kopyalar ve silinecek. Hedef: her komponentin asıl seti kendi sayfasında | NOW.md'ye not edildi |
| Köşe yuvarlaklığı isimleri | Tailwind v4'e göre | ✅ `rounded-sm`→`rounded-xs`, `rounded`→`rounded-sm`, `rounded-0`→`rounded-none`, `rounded-4xl` (32 px) eklendi. Mevcut bağlar korundu |
| İkon rengi (A2) | Ana komponentler bağlansın | ✅ 3.024 ikonun vektörü `text/primary`'ye bağlandı. Komponentlerin içindeki ikon renkleri değişmedi |
| Avatar renkleri | Bilinçli olarak hex (özel renkler). Denetimde sorun sayılmaz | `rules/core/tailwind-temel.md` istisnalarına eklendi |
| Gray paleti | Test için duruyor, silinmez | İstisnalara eklendi |
| Gölgeler | Tailwind'in gerektirdiği her şey eklenebilir | ✅ 10 effect style: `Shadow/shadow-2xs` … `shadow-2xl`, `Shadow/inset-shadow-2xs/xs/sm` (Tailwind v4.3.3 değerleri) |
| Harf aralığı, oranlı satır yüksekliği | Gerek yok | İstisnalara eklendi |
| Tokens bölümü (dokümanlarda) | Şimdilik istenmiyor, belki ileride | — |
| `font-regular` | Adı korunur | İstisnalara eklendi |
| `leading-none` | Dokunulmaz | İstisnalara eklendi |
| Primitives'te isim düzeltmeleri | Yapılabilir | ✅ `Colors/neutral/050` → `Colors/neutral/50` |
| Değişken kapsamları (scope) | Hepsi olması gerektiği gibi | ✅ Spacing → Gap + Width/Height. Köşe yuvarlaklığı → Corner radius. Border kalınlığı → Stroke. Diğer kapsamlar zaten doğruydu. Primitive renkler bilinçli olarak gizli: seçicilerde Themes token'ları görünür |
| Gizli video frame'i (Overview) | Bilinçli olarak gizli, video sonra gelecek bir özellik | NOW.md'ye not edildi |
| Video yer tutucusundaki kopyala-yapıştır hatası | Düzelt | ✅ Badge: "…Badge and Status Dot", Input: "…Input, Select and Textarea". Badge'deki "Button Variants" frame'i "Badge Variants" yapıldı |
| Dokümanı kopyalayarak üretmek | Referans frame kopyalanır ama mutlaka incelenir | `rules/core/dokumantasyon/referans-inceleme.md` |

## Açık

- Komponent açıklamalarının (description) dili: 46 setin 15'inde Türkçe parçalar var. Karar bekliyor.
