# Scriptler

🔒 **Korumalı klasör.**

**Bu klasör ne?** Projeyi otomatik kontrol eden küçük programlar. Ekstra bir şey kurmaya gerek yok, sadece Node.js yeterli.

| Script | Ne yapar? | Nasıl çalıştırılır? |
|---|---|---|
| `kontrol.mjs` | Kural dosyalarının bilgi bloklarını, her klasörde README olup olmadığını, kırık linkleri ve index'in güncel olup olmadığını denetler | `node scripts/kontrol.mjs` |
| `index-olustur.mjs` | `wiki/index.md` dosyasını yeniden üretir | `node scripts/index-olustur.mjs` |
| `lib.mjs` | Diğer iki scriptin ortak yardımcıları | Tek başına çalıştırılmaz |

**Ben buna dokunur muyum?** Hayır. Bu scriptleri genelde sen değil yapay zeka çalıştırır. Aynı kontrol her PR'da GitHub'da da otomatik çalışır ([GitHub Actions nedir?](../rehber/github-actions-nedir.md)).
