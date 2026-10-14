# İş akışları (workflows)

**Bu klasör ne?** Tekrar eden işlerin, yapay zekanın adım adım uyguladığı tarifleri. Sen bir komut yazarsın (`basla` gibi), yapay zeka ilgili dosyayı okur ve adımları uygular.

**Neden düz Markdown?** Hangi yapay zeka aracını kullanırsan kullan (Claude, Cursor, Codex…) aynı tarif çalışsın diye. Araca özel klasörler (`.claude/skills/`) sadece buradaki dosyalara yönlendirir.

## Mevcut iş akışları

| Komut | Dosya | Ne yapar? |
|---|---|---|
| `basla: <iş>` | [basla.md](basla.md) | Güncel hali çeker, yeni branch açar |
| `oturumu bitir` | [oturum-bitir.md](oturum-bitir.md) | Bugünün kaydını yazar |
| `gonder` | [gonder.md](gonder.md) | Kontrol eder, yükler, PR açar |

## Gelecekte eklenecekler

- `dokuman: <komponent>`: komponent dokümantasyonu üretir (Faz 2)
- `video: <komponent>`: komponent videosu üretir (Faz 4)
- `figma-senkron`: Figma'daki değişiklikleri repoya taşır (Faz 5)

## Yeni iş akışı eklemek

Bu klasördeki dosyalar ekibin çalışma şeklini değiştirir. Yeni bir akış eklemeden önce proje sahibiyle konuş.
