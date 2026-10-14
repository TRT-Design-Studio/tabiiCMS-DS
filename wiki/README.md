# Wiki: projenin hafızası

**Bu klasör ne?** Yapay zekanın ve ekibin "neredeyiz, ne yapıldı" bilgisini tuttuğu yer. Yapay zekanın hafızası sohbet bitince silinir. Bu klasör sayesinde her yeni oturum kaldığı yerden devam eder.

| Ne | Ne işe yarar? | Kim yazar? |
|---|---|---|
| [index.md](index.md) | Bütün kuralların, iş akışlarının ve komponentlerin içindekiler listesi | **Script** (`node scripts/index-olustur.mjs`). Elle düzenlenmez |
| [log/](log/README.md) | Oturum kayıtları. Her kayıt ayrı bir dosya | Yapay zeka, `oturumu bitir` komutuyla |
| [raporlar/](raporlar/README.md) | Denetim ve tarama raporları (örneğin Figma taraması) | Yapay zeka |

**Ben buna dokunur muyum?** Genelde hayır. Okumak serbest: bir arkadaşının dün ne yaptığını merak edersen `log/` klasörüne bak.
