---
id: core.readme-yazim-kurali
title: README ve rehber yazım kuralı
owner: "@mucahitpuren"
status: active
version: 1
applies_to: all
updated: 2026-10-14
---

# README ve rehber yazım kuralı

## Amaç

Bu projede çalışanların çoğu tasarımcı ve GitHub deneyimi az. Her README ve rehber, **konu hakkında hiçbir şey bilmeyen biri** okuduğunda tek başına ilerleyebileceği şekilde yazılır.

## Kural

1. **Her klasörde bir `README.md` olur.** Komponent klasörlerinde `spec.md` bunun yerine geçer.
2. Her README şu üç soruya cevap verir:
   - **Bu klasör / dosya ne?**
   - **Ben buna ne zaman dokunurum?** (veya: dokunmalı mıyım?)
   - **Nasıl?** (gerekiyorsa adım adım)
3. **Adımlar numaralı olur ve her adımda tek bir eylem bulunur.** "Tıkla ve yaz ve kaydet" değil, üç ayrı adım.
4. Önemli adımlardan sonra **"✅ Ne görmelisin?"** satırı olur. Okuyan kişi doğru yolda olduğunu anlamalı.
5. **Teknik bir kelime ilk kez geçtiğinde bir cümleyle açıklanır** ve gerekirse [sözlüğe](../../rehber/sozluk.md) link verilir. Sözlükte olmayan yeni bir kelime kullanıldıysa sözlüğe de eklenir.
6. **Hiçbir şey "zaten bilinir" diye varsayılmaz.** "Terminal'i aç" yetmez. Terminal'in nasıl açıldığı da yazılır (veya o anlatıma link verilir).
7. Kopyalanacak komutlar ayrı kod bloklarında olur, **her blokta tek komut** bulunur.
8. Ekrandaki buton ve menü adları ekranda nasıl yazıyorsa öyle yazılır, kalın olarak: **Settings**, **Create repository**.
9. Cümleler kısa olur. Dil Türkçedir.
10. **Bir şeyin çalışma şekli değiştiğinde ilgili README aynı PR'da güncellenir.** README ile gerçek davranış arasında fark olamaz.

## Örnek

✅ Doğru:
> 1. Repo sayfasında **Settings** sekmesine tıkla.
> 2. Soldaki menüden **Rules** → **Rulesets** sayfasına gir.
>
> ✅ **Ne görmelisin?** "Rulesets" başlıklı boş bir liste.

❌ Yanlış:
> Settings'ten ruleset'i ayarlayıp main'i protect edin.

## Kontrol

`node scripts/kontrol.mjs` her klasörde README olup olmadığını ve linklerin kırık olup olmadığını otomatik denetler.
