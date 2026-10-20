---
date: 2026-10-19
author: "@mucahitpuren"
branch: mucahitpuren/token-isimlendirme
---

# Token isimlendirme ve Figma senkronu (Faz 1 sonu)

## Ne yapıldı?
- Figma'daki bütün değişkenler (151 primitive, 53 semantic), 72 yazı stili ve 10 gölge stili okundu → `tokens/figma-ham.json`.
- `scripts/tokenlari-uret.mjs` ile DTCG token dosyaları, `tokens/tailwind.css` ve `tokens/esleme.md` üretildi. Uyarı çıkmadı: spacing ve border kalınlıkları Tailwind ile birebir.
- `tokens/tailwind.css` Tailwind 4.3.3 ile geçici bir klasörde derlenip denendi. Semantic class'lar, `hover:`/`dark:` önekleri, `p-4.5`, `rounded-4xl` çalışıyor. `bg-blue-500`, `text-5xl`, `font-regular`, `bg-bg-surface` üretilmiyor.
- Kural: `rules/core/token-isimlendirme.md`. Akış: `workflows/figma-senkron.md` (+ `.claude/skills/figma-senkron`).
- `kontrol.mjs` artık token dosyalarının `figma-ham.json` ile güncel olduğunu da denetliyor.

## Alınan kararlar
- Semantic renklerde grup adı class öneki (seçenek b): `bg/surface` → `bg-surface`. Önek Figma kapsamından gelir.
- Tailwind varsayılanları (renk, font, yazı boyutu, radius, gölge) kapatıldı.
- Yazı boyutlarından sadece yazı stili olanlar (xs–4xl) kodda tanımlı.
- Dark mode: kök elemana `.dark` sınıfı.
- Figma tek seferde 20 KB döndürebildiği için okuma 45'erli parçalarla yapılıyor (`tokens/.parcalar/`, git'e girmez).

## Açık sorular
- Yok.

## Sıradaki adım
- Faz 2: doküman şablonu ve "dokuman: <komponent>" akışı.

## Güncelleme (2026-10-20)
- Mücahit'in kararı: primitive renkler de kullanılabilir. Renk adı `neutral-100` ve her önekle kullanılır (`bg-neutral-100`, `text-red-600`…). Tailwind'de önek şart olduğu için tek başına `neutral-100` class'ı yok. Primitive renkler Light/Dark'a göre değişmez, komponentlerde önce semantic kullanılır.
- Semantic bir class bir primitive rengin adıyla çakışırsa üretici durur.
- Yazı boyutları (xs–4xl) ve `.dark` sınıfı kararları onaylandı.
- Yeni: `KOMUTLAR.md`, kullanıcıların yazabileceği bütün komutlar. AGENTS.md'deki komut tablosu buraya taşındı (tek liste). `kontrol.mjs` her iş akışının orada olup olmadığını denetliyor.

## Güncelleme: sistem denetimi (2026-10-20)
- Düzeltilen script hataları:
  - Olmayan bir renge bağlı semantic token artık anlaşılır hata veriyor.
  - Bozuk `figma-ham.json` kontrolü çökertmiyor, açıklama veriyor.
  - Scriptler başka bir scriptten çağrılınca çökmüyor.
- Actions token izni açıkça salt okunur (`permissions: contents: read`).
- AGENTS.md: dokümantasyon dili İngilizce olarak yazıldı.
- ROADMAP Faz 3 metni güncellendi.
- `basla` akışı, merge edilmiş eski branch'leri temizliyor.
- Sözlüğe 9 terim eklendi. 2FA rehberindeki yanlış iddia düzeltildi. Faz 0 log dosyasının adı kurala uyduruldu.
- GitHub ayarlarında bulunan açıklar (2FA, secret scanning, branch güncelliği, repo oluşturma, wiki) proje sahibinin onayına sunuldu.
- Mücahit'in onayıyla açılanlar: secret scanning + push protection, merge öncesi branch güncelliği (strict), üyelerin repo açması kapatıldı, GitHub Wiki ve Projects sekmeleri kapatıldı. Bu bilgisayarda commit e-postası GitHub'ın gizli adresine çevrildi.
- 2FA: Mücahit açtı. Ayşe ve Merve henüz açmadı. Organizasyon zorunluluğu onlar açınca açılacak (NOW.md).
- Yeni komut: `branch'imi güncelle` (strict ayarı nedeniyle).

