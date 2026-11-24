# Kararlar

**Bu klasör ne?** Yeni CMS tasarımı için alınan UX ve bilgi mimarisi kararları. Her karar ayrı bir dosyadır. Bir karar değişirse eski dosya silinmez; yeni karar yazılır ve eskisi "değişti" olarak işaretlenir. Böylece neyin neden değiştiği hep görünür.

**Ne zaman dokunurum?** Ekip bir konuda karar verdiğinde veya eski bir kararı değiştirmek istediğinde. Yapay zekaya `cms karar: <konu>` yazman yeterli.

## Durumlar

| Durum | Anlamı |
|---|---|
| `oneri` | Tartışılıyor, henüz karar değil |
| `kabul` | Karar verildi, tasarım buna göre yapılır |
| `degisti` | Yerine yeni bir karar geldi (`yerine:` alanı yenisini gösterir) |
| `iptal` | Vazgeçildi |

## Yeni karar yazmak

1. [_sablon.md](_sablon.md) dosyasının kopyasını oluştur.
2. Adını sıradaki numara ve konuyla ver: `003-show-formu-sekmeler.md`.
3. Bilgi bloğunu doldur. `durum: oneri` ile başla.
4. Ekip onaylayınca `durum: kabul` yap ve `karar_tarihi` ekle.

✅ **Ne görmelisin?** Dosya, aşağıdaki listede numarasıyla yerini alır.

## Bir kararı değiştirmek

1. Yeni bir karar dosyası yaz. Bilgi bloğuna `onceki: 001` ekle.
2. Eski dosyada `durum: degisti` ve `yerine: 003` yap. Eski dosyanın metnine dokunma.

## Kararlar

| No | Başlık | Durum |
|---|---|---|
| [001](001-show-languages-ve-country-based.md) | Show formunda Languages ve Country Based sekmeleri | oneri |
| [002](002-show-episodes-trailers-publish-management.md) | Show formunda Episodes, Trailers ve Publish Management | oneri |

Açık sorular: [sorular.md](../sorular.md).
