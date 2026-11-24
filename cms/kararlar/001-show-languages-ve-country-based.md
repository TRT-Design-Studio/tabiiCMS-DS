---
no: "001"
baslik: Show formunda Languages ve Country Based sekmeleri
durum: oneri
moduller: [Show]
oneren: "@mucahitpuren"
tarih: 2026-11-23
karar_tarihi:
onceki:
yerine:
---

# 001 · Show formunda Languages ve Country Based sekmeleri

## Sorun

Bugünkü sistemde ([moduller/show.md](../moduller/show.md)):

- **Languages** sadece bir tablo. Bir dili düzenlemek için Edit'e basılıyor ve ayrı bir ekran açılıyor. Hangi dilin eksik olduğu, hangisinin yayında olduğu listeden anlaşılmıyor.
- **Durum modeli ekranda yok.** Published olan bir dilin editör onayını bekleyip beklemediği görünmüyor.
- **Country Based Changes** 200'e yakın ülkeyi kıtalara bölüp listeliyor. Değişiklik yapılmış birkaç ülkeyi bulmak için bu listede gezmek gerekiyor. Edit, Show bağlamını kaybettiren ayrı bir sayfa açıyor.
- Ülke ekranında bir alanın Master'dan mı geldiği, yoksa o ülke için mi değiştirildiği belli değil.

## Seçenekler

1. **Bugünkü yapıyı yeni komponentlerle çizmek:** tablo + ayrı düzenleme sayfası. Ekip alışkın, ama sorunlar aynen kalır.
2. **Liste solda, düzenleme sağda (önerilen):** Master'daki bölüm gezintisinin yerine sol panelde diller veya ülkeler durur, sağda seçilenin formu açılır. Sayfa değişmez.

## Karar (öneri)

Seçenek 2. Güncel hali Playground → **Show Test** bölümünde (revizyonlar [002](002-show-episodes-trailers-publish-management.md)'de). İlk hali Playground → **Create Show** bölümünde iki yeni ekran, "DS · Web 1440 · Languages · v2" ve "DS · Web 1440 · Country Based · v2". İkisi de güncel Master ekranından ("DS · Web 1440") türetildi.

**Languages: final yön** (2026-11-24, Mücahit ve Merve)

Figma: Playground → **Revizeler** bölümü, "Languages - Final". Merve'nin ekranı temel alındı; aşağıdaki "Languages" maddeleri bunun öncesindeki öneridir.

- **Dilin durumu sol panelden değiştirilir.** Her dil satırının altında tıklanabilir bir durum etiketi (Status, Interactive) var: Published, Unpublished, Draft. Dil başlığında ayrı Publish butonu yok, çünkü sağ panelde zaten genel bir Publish/Unpublish butonu var; iki buton kafa karıştırıyordu.
- Düzenlenip bırakılan dil otomatik olarak **Draft** kalır.
- Alanlar **alt alta ve tam genişlikte**; uzun içerikte yan yana düzen bozuluyordu.
- Önceki öneriden kalanlar: dil kodu (TR, EN…), satırda doluluk oranı (6/9), alanların altında açıklama mesajı (ör. "Master: …", "Empty fields show the Master value.").
- Show'un bütün sekmeleri açık (kilitsiz) çizildi; ekran kayıtlı bir Show'u gösteriyor.
- Merve'nin ekranında 4 dil vardı; 5 dil kuralına göre Urdu eklendi.

**Country Based: final yön** (2026-11-24, Mücahit ve Merve)

Figma: Playground → **Revizeler**, "Country Based - Final" ve "Country Based - Languages - Final". Bizim ekran temel alındı.

- Çoklu ülke seçimi, "Mixed" alanlar ve alan altı mesajları kalıyor.
- Alanlar **alt alta**, tek sütun.
- Sol panelin altındaki "Selected · 3 countries" özeti ve ülke yanındaki "4 changed" yazıları kaldırıldı.
- Kıta ve ülke onay kutuları aynı hizada.
- **Master / Languages alt sekmeleri ve dil seçici sekmeleri kaldırıldı.** Yerine ülke başlığında tek bir **"Editing"** seçim kutusu var: Master (Turkish), English, Arabic, Urdu, Spanish. Neden: sayfada zaten Show sekmeleri var; sekme içinde sekme ve üst üste sekme satırları, kullanıcının nerede olduğunu kaybettiriyor (NN/g, Balsamiq, NICE tasarım sistemi: "tab içinde tab koyma"). Seçim kutusu dil sayısı artsa da büyümez.
- Başlık Master ve dil modunda **aynı yükseklikte**; sadece seçim kutusunun değeri ve altındaki mesaj değişir. Bu, iki mod arasındaki "zıplamayı" çözüyor.
- Merve'nin akordeon yaklaşımı (her dil için aynı alanlar alt alta) değerlendirildi; dil sayısı artınca sayfa uzadığı için tek form + seçim kutusu tercih edildi. **Ekiple konuşulacak.**

**Languages**

- Sol panelde her dil bir satır: ad, kod, doluluk (5/7) ve **CMS durumu** (Published, Draft). tabii durumu dillerde yok; o Show'a aittir ve sağ panelde durur. Dil ekleme **yetkiye bağlı:** yetkisi olmayan kullanıcı sadece var olan dilleri görür ve düzenler (ekranda bu hal çizildi). Yetkili kullanıcı için ekleme butonu henüz çizilmedi. Altta "2/5 languages" yayın özeti.
- Sağda seçili dilin başlığı: dil adı, kodu, CMS durumu, **Publish** (veya Unpublish) ve diğer işlemler (…). Orijinaldeki Edit + More (Publish, Unpublish) buraya taşındı.
- Boş alanlar Master'daki değeri gösterir (sistemin bugünkü davranışı). SEO ve Media kartlarında bu bir satırla yazar.
- Alanlar Master'daki gibi kartlarda: **Text** (Display Title, Spot, Announcement, Tags, Long Description), **SEO**, **Media & Visual Assets**. Çevirmen için Display Title'ın altında Master değeri yazar ("Master: Kış Masalı").

**Country Based** (Mücahit: "istediği ülkeyi seçebilmeli ve en hızlı şekilde düzenleyebilmeli")

- Sol panel bütün ülkeleri **onay kutusuyla** gösterir: en üstte arama, altında **All · 194 / Edited · 2** filtresi. Orijinaldeki "Edited Countries" grubu en üstte; diğerleri kıtalara göre açılır kapanır gruplar ve her grupta seçili sayısı (1/21). Kıta kutusu o kıtanın hepsini seçer. Bu kalıp orijinaldeki **Publish Management** ekranından alındı ("Date&Time Settings will apply to all selected countries").
- Bir veya birden çok ülke seçilir; sağdaki form **seçilen bütün ülkelere birlikte** uygulanır. Bugünkü sistemde çoklu düzenleme yok; ekip bunu "denenebilir" buluyor (Mücahit, 2026-11-23). Altta "SELECTED · 3 countries".
- Sağda başlık: bayraklar, "3 countries", seçilenler kaldırılabilir etiketler (Tag) olarak, **Reset changes** ve iki alt sekme: **Master**, **Languages**.
- Alanlar üç halde:
  - Hiçbir seçili ülkede değişmemiş: Master değeri gri yazılır.
  - Ülkeler arasında farklı: **Mixed** yazar; altında hangi ülkede değiştiği yazar ("Changed in Türkiye. Others use Master."). İçine yazılan değer bütün seçili ülkelere uygulanır.
  - Hepsinde aynı değiştirilmiş: değer dolu yazılır.

**Sekmeler** ilk kayıttan sonra açılır; ekranlar kayıtlı bir Show'u gösteriyor.

**Kayıt kuralları** (Mücahit, 2026-11-23): Kaydedilmeyen ülke değişikliği silinir, kaydedilince Draft'a düşer ve Edited Countries'te görünür. Ülkeler ayrıca publish edilmez; Draft'tan çıkana kadar o ülkede Master gösterilir. Published bir içeriğe Edit denince içerik Draft'a döner.

## Neden

- Kullanıcı hangi dilin ve ülkenin ne durumda olduğunu tek bakışta görür; sayfadan çıkmadan düzenler.
- Master'dan gelen değer ile o dil veya ülke için girilen değer ayrı görünür; neyin değiştirildiği tek bakışta anlaşılır.
- Aynı değişiklik birçok ülkeye tek seferde yapılır; orijinaldeki gibi ülke ülke Edit sayfasına girmek gerekmez.
- Master ile aynı düzen (sol gezinti + kartlar) kullanıldığı için yeni bir kalıp öğrenmek gerekmez.

## Etkisi

- Komponentler: Section Nav yerine özel dil ve ülke satırları kullanıldı. Bunlar tekrar kullanılacaksa komponent yapılmalı (ör. "Locale Row").
- **Doğrulanması gerekenler** ([sorular.md](../sorular.md)):
  - Bir ülke değişikliğinin Draft'tan nasıl çıktığı (kaydetmek mi, Show'u publish etmek mi).
- Çizilmeyenler: tek ülke seçiliyken görünüm, ülke aramasının sonuç listesi, ülke içindeki Languages alt sekmesi, mobil.
