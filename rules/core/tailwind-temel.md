---
id: core.tailwind-temel
title: Tailwind temel alınır
owner: "@mucahitpuren"
status: active
version: 2
applies_to: all
updated: 2026-10-14
---

# Tailwind temel alınır

## Amaç

Tasarım sistemi **Tailwind CSS (v4)** üzerine kurulu. Figma'daki değişkenler ile koddaki Tailwind class'ları aynı ölçekleri kullanırsa tasarımcı ile kod arasında "çeviri" gerekmez. `spacing/2` Figma'da 8px'se kodda da `p-2` 8px olur.

## Kural

1. **Ölçeklerin kaynağı Tailwind'in varsayılan temasıdır.** Boşluklar, köşe yuvarlaklıkları, gölgeler, border kalınlıkları, yazı boyutları, satır yükseklikleri (line height), harf aralıkları, font ağırlıkları, opaklıklar: hepsi için Tailwind v4'ün kendi değer ve isimleri esas alınır.
2. **Figma değişkenleri bu ölçeğin aynısı olmalı.** İsimler Tailwind'deki adla eşleşmeli. Örnek: Figma'da `radius/lg` → Tailwind'de `rounded-lg` → aynı değer.
3. **Farklılık bir hata adayıdır.** Figma'daki bir değer Tailwind'in karşılığından farklıysa, ya da Tailwind'de olup Figma'da yoksa (veya tersi), yapay zeka bunu **kendi başına düzeltmez.** Proje sahibine bir uyarı listesi olarak sunar: "Figma'da X, Tailwind'de Y. Hangisi doğru?"
4. **Kendi değerlerimiz sadece Tailwind'de karşılığı olmayan yerlerde tanımlanır.** Örnek: marka renkleri ve semantik renkler (`surface/primary` gibi). Bu değerler de Tailwind'in isimlendirme mantığıyla eklenir (`--color-surface-primary` → `bg-surface-primary`).
5. **Projede kullanılan aralık, Tailwind'de tanımlı olan aralıktan dar olabilir.** Örneğin Tailwind yazı boyutları `text-9xl`'e kadar gider, biz `text-4xl`'e kadar kullanıyoruz. Bu bir hata değildir. Kullanılan aralık ilgili token kuralında yazılır.
6. **Tailwind'in varsayılan renk paleti kodda kapatılır.** Böylece tasarım sisteminde olmayan bir renk (`bg-blue-500` gibi) kullanılamaz.

## Örnek

✅ Figma `spacing/4` = 16px · Tailwind `p-4` = `calc(var(--spacing) * 4)` = 16px → uyumlu.

❌ Figma `radius/md` = 8px · Tailwind `rounded-md` = 6px → **uyarı:** "Hangisi doğru?"

## İstisnalar

Proje sahibinin bilinçli kararları. Bunlar Tailwind'den farklıdır ama hata olarak bildirilmez:

- **`font-regular`** adı korunur (Tailwind'de `font-normal`). Kodda `font-normal`'a eşlenir.
- **`leading-none`** değişkenine dokunulmaz.
- **Harf aralığı (`tracking-*`)** ve **oranlı satır yükseklikleri** (`leading-tight`, `leading-normal`…) kullanılmaz. Eksik olarak bildirilmez.
- **Gray paleti** test için durur. Kullanılmıyor diye silinmesi önerilmez.
- **Avatar renkleri** bilinçli olarak hex değerdir (özel renkler). Bağlantı denetiminde hata sayılmaz.

## Kontrol

Faz 1'de Figma değişkenleri, yüklü Tailwind sürümünün tema dosyasıyla tek tek karşılaştırılır. Fark listesi proje sahibine sunulur.
