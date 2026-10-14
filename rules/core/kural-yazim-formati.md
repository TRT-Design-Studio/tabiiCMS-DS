---
id: core.kural-yazim-formati
title: Kural dosyası yazım formatı
owner: "@mucahitpuren"
status: active
version: 1
applies_to: rules
updated: 2026-10-14
---

# Kural dosyası yazım formatı

## Amaç

Kurallar zamanla çoğaldıkça birbirleriyle çelişmesinler, kimin yazdığı ve hangi sürümde olduğu hep belli olsun. Bunun için her kural aynı formatta yazılır.

## Kural

1. **Bir dosya = bir kural.** Bir dosyada birden fazla konu varsa ayır.
2. Dosya adı küçük harf, ASCII ve kebab-case olur: `buton-boyutlari.md`
3. Dosya en üstte bu bilgi bloğuyla (frontmatter) başlar:

   ```yaml
   ---
   id: team.buton-boyutlari        # benzersiz; core.* veya team.* ile başlar
   title: Buton boyutları          # insan için kısa başlık
   owner: "@github-kullanici-adi"  # sorumlu kişi
   status: draft                   # draft | active | deprecated
   version: 1                      # anlamı değişen her düzenlemede +1
   applies_to: components          # neye uygulanır: all, components, docs, video, tokens, rules
   updated: 2026-10-14             # son değişiklik tarihi
   ---
   ```

4. Bilgi bloğundan sonra şu bölümler gelir:
   - `## Amaç`: Bu kural neden var? (1–3 cümle)
   - `## Kural`: Ne yapılmalı? Numaralı ve net maddeler.
   - `## Örnek`: ✅ Doğru / ❌ Yanlış örnekleri.
   - `## İstisnalar`: (varsa)
5. **Kural silinmez, emekliye ayrılır.** Bir kural geçerliliğini yitirince `status: deprecated` yapılır ve yerini alan kural `replaced_by: <id>` alanıyla belirtilir.
6. `status: draft` olan kurallar yapay zeka tarafından **öneri** olarak dikkate alınır, zorunlu sayılmaz.

## Örnek

✅ Doğru: `rules/team/buton-boyutlari.md`, bilgi bloğu tam, tek konu.

❌ Yanlış: `rules/team/Buton Kuralları.md`. Dosya adında boşluk ve Türkçe karakter var, bilgi bloğu yok, içinde hem boyut hem renk hem ikon kuralı var.

## Kontrol

`node scripts/kontrol.mjs` bu kuralı otomatik denetler: bilgi bloğu ve zorunlu alanlar var mı, `id` benzersiz mi, `core/` ve `team/` önekleri doğru mu.
