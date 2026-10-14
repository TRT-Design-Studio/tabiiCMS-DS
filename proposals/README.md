# Öneriler (proposals)

**Bu klasör ne?** Ana kurallarda (`rules/core/`) bir değişiklik isteyenlerin öneri yazdığı yer. Ana kurallar korumalıdır, doğrudan değiştirilmez. Önce öneri yazılır, proje sahibi karar verir.

**Neden böyle?** Ana kurallar her şeyi etkiler: dokümanları, Storybook'u, videoları. Herkes doğrudan değiştirebilseydi kurallar kısa sürede birbiriyle çelişirdi.

## Nasıl öneri yazarım?

1. Yapay zekaya şunu yaz: `basla: öneri, <konu>`
2. Neyi neden değiştirmek istediğini anlat.
3. Yapay zeka [_sablon.md](_sablon.md) dosyasını kopyalar ve `proposals/YYYY-MM-DD-<konu>.md` adıyla doldurur.
4. `gonder`

## Sonra ne olur?

Proje sahibi PR'ı okur ve şu üçünden birini yapar:

| Karar | Ne olur? |
|---|---|
| **Kabul** | Öneri dosyasında `status: accepted` olur, ana kural güncellenir |
| **Değişiklik isteği** | PR'a yorum yazılır, öneriyi güncellersin |
| **Ret** | `status: rejected` olur ve gerekçesi yazılır. Dosya kalır, aynı fikir tekrar geldiğinde neden reddedildiği görülür |
