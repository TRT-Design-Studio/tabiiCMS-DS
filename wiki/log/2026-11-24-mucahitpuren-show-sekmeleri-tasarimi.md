---
date: 2026-11-24
author: "@mucahitpuren"
branch: mucahitpuren/cms-ux-kaynak-analizi
---

# Show sekmeleri tasarımı: Episodes, Trailers, Publish Management

Mücahit'in anlattığı Show akışına göre Languages ve Country Based revize edildi; Episodes, New episode, Trailers ve Publish Management ekranları üretildi. Hepsi Playground → **Show Test** bölümünde.

## Ne yapıldı?
- Languages ve Country Based (Mücahit'in bölüme kopyaladığı v2'ler):
  - Sağ panel butonu Draft için **Publish**; "tabii status is set by the tabii team."
  - Languages SEO'da Master değeri gri.
  - Country'de kaydedilmeyen değişikliğin silineceği uyarısı.
- **Episodes:** Shows tablosundan türetilmiş bölüm tablosu, sezon filtresi, Bulk Import, New episode.
- **New episode:** Show'un içinde, Episodes sekmesi açık. Show / Season / Episode en üstte bağlamdan dolu; bölümün kendi sekmeleri ilk kayıttan sonra açılıyor; kartlar Episode info, Media, SEO, Playback markers.
- **Trailers:** Episodes ile aynı düzen, 4 fragman.
- **Publish Management:** Country Based'deki ülke paneli + seçilenlere toplu Publish window (Start, End, Air; farklıysa Mixed) + Scheduled countries tablosu.
- Karar önerisi: `cms/kararlar/002-show-episodes-trailers-publish-management.md`.

## Teknik notlar
- Figma'nın `get_screenshot` servisi bu oturumda hata verdi; kontrol Mücahit'in Chrome'unda Figma açılarak yapıldı. Linkle açmak Figma masaüstü uygulamasını da o noktaya götürüyor.
- Card'ın Body slot'undaki bir düğümü `visible=false` yapmak onu slot'tan **siliyor**; döngüde indeks kayıyor. Slot içinde gizleme yaparken sondan başa dön veya düğümleri ID ile tut.

## Açık sorular
- 002'deki "Doğrulanması gerekenler".
- Ülke değişikliğinin Draft'tan nasıl çıktığı (001).

## Sıradaki adım
- Mücahit'in Show Test ekranlarına geri bildirimi.

## Ek: Country Based → Languages ve bölüm sekmeleri

- Show Test bölümüne dört ekran eklendi (üçüncü sıra): Country Based · Languages, Episode · Languages, Episode · Country Based, Episode · Publish Management.
- Country Based'in Languages alt sekmesine dil seçici eklendi; boş alan Show'un o dildeki değerini gösteriyor (varsayım, karar 002'de soru).
- Bölüm sekmeleri Show'un Episodes sekmesi içinde, Show sekmelerinin altında ayrı bir sekme satırıyla açılıyor.
- Bölümün Publish Management'ı sadece kendi tarihi olan ülkeleri listeliyor; diğerleri Show'u izliyor.
- Figma ekran görüntüsü servisi bu sefer çalıştı; tablo satırı silince çizim bir süre eski kaldı, düzen değişikliğiyle yenilendi.

## Ek: Revizeler: Languages final

- Mücahit, Playground'da "Revizeler" bölümü açtı: her ekranın Mücahit (yapay zeka) ve Merve versiyonu yan yana. Her sekme için ikisinden final çıkarılacak; diğer sayfaların revizeleri sırayla gelecek.
- Languages - Final: Merve'nin ekranı temel; durum sol paneldeki tıklanabilir Status etiketiyle değişiyor, ayrı Publish butonu yok, alanlar alt alta. Bizden: dil kodu, doluluk oranı, alan altı mesajları, açık sekmeler. Karar 001'e yazıldı.

## Ek: Revizeler: Country Based, Episodes, Trailers, Publish Management final

- Country Based - Final ve Country Based - Languages - Final: bizim ekran temel; alanlar alt alta, sol alt özet ve "changed" yazıları silindi, onay kutuları hizalandı. Alt sekmeler + dil sekmeleri yerine tek "Editing" seçim kutusu (iç içe sekme olmasın diye). Merve'nin akordeon yaklaşımıyla karşılaştırma ekiple konuşulacak.
- Episodes - Final: Merve'nin ekranı, Kış Masalı içeriğiyle. Bulk Import tablo araç çubuğunda. Trailers - Final aynı ekranın kopyası.
- Publish Management - Final: Merve'nin ekranı + bizim ülke paneli ve başlığı; varsayılan bütün ülkeler seçili; Apply butonu; tabloya onay kutusu ve Window sütunu.
- Figma'da yeni klonlanan çerçevede ilk çağrıda metin bulma bazen boş dönüyor; ikinci çağrıda çalışıyor. Satırı dikeye çevirirken Label içindeki "Row" çerçevelerine dokunmamak gerek.
