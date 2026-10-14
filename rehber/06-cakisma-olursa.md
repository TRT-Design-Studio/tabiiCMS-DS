# 6. Çakışma (conflict) olursa

## Çakışma nedir?

İki kişi **aynı dosyanın aynı satırlarını** aynı anda farklı şekilde değiştirirse git hangisinin doğru olduğunu bilemez. Buna **conflict** (çakışma) denir.

**Örnek:**

1. Sen ve Ayşe aynı sabah `basla` dediniz. İkinizde de `badge.md` dosyasının 5. satırı şöyle:
   `Köşe yuvarlaklığı: 4px`
2. Sen satırı `8px` yaptın. Ayşe aynı satırı `6px` yaptı.
3. Ayşe PR'ını önce gönderdi ve PR'ı merge edildi. main'de artık `6px` yazıyor.
4. Sen PR'ını gönderdiğinde GitHub şunu söyler: *"This branch has conflicts that must be resolved"*.

**Çakışma OLMAYAN durum:** Aynı dosyanın **farklı satırlarını** değiştirdiyseniz git ikisini kendiliğinden birleştirir. Bir şey yapmana gerek kalmaz.

## Ne yapmalıyım?

Panik yok, hiçbir şey kaybolmadı. Yapay zekaya şunu yaz:

```
çakışma var, çöz
```

Yapay zeka iki hali de gösterir ve hangisinin kalacağını sorar: seninki mi, onunki mi, yoksa ikisinin birleşimi mi? Sen karar verirsin, gerisini o yapar.

> Karar veremiyorsan (örneğin 8px mi 6px mi), değişikliği yapan arkadaşına sor. Çakışma genelde "aynı şey hakkında iki fikir var" demektir ve konuşmak gerekir.

## Çakışmayı nasıl azaltırız?

- **Her işe `basla` ile başla.** Her seferinde en güncel halden başlarsın.
- **Branch'leri kısa tut.** Bir iş birkaç günden uzun sürmesin.
- **Bir kural bir dosyada dursun.** Dosyalar küçük olursa aynı satıra denk gelme ihtimali düşer.
- **`wiki/index.md` dosyasında çakışma çıkarsa** elle çözme. Bu dosyayı script üretir, yapay zeka yeniden üretir.

---

## Yapay zeka için: çakışma çözme adımları

1. `git fetch origin` ve `git merge origin/main` çalıştır.
2. Çakışan dosyaları `git diff --name-only --diff-filter=U` ile listele.
3. `wiki/index.md` çakışıyorsa: `node scripts/index-olustur.mjs` ile yeniden üret, kullanıcıya sorma.
4. Diğer her dosya için: iki tarafı **sade dille** yan yana göster ("Senin halin: …", "main'deki hal: …", "Değiştiren: <git log ile bul>") ve kullanıcıya sor. Kendi başına seçme.
5. Kullanıcının kararına göre dosyayı düzenle, `git add` ile işaretle, sonra `git commit` çalıştır.
6. `node scripts/kontrol.mjs` çalıştır, ardından `git push` yap.
7. Kullanıcıya PR'ın artık birleştirilebilir olduğunu söyle.
