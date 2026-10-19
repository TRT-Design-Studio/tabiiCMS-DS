# AGENTS.md: Yapay zeka ajanları için ana talimat

Bu dosya bu repoda çalışan **her** yapay zeka ajanı (Claude, Cursor, Codex, Copilot…) için tek doğruluk kaynağıdır. Araca özel dosyalar (`CLAUDE.md`, `.claude/skills/`) sadece buraya ve `workflows/` klasörüne yönlendirir.

## Proje

tabiiCMS tasarım sistemi. Kaynak Figma dosyasıdır. Figma değişkenleri ve komponent setleri bu repoda kurallara (`rules/`), token'lara (`tokens/`) ve komponent kimlik kartlarına (`components/<isim>/spec.md`) dönüşür. Bunlardan dokümantasyon, Storybook ve Remotion videoları üretilir. Repoda çalışanlar çoğunlukla **tasarımcıdır ve git bilmez.**

## Her oturumun başında (zorunlu)

1. Bu dosyayı oku.
2. [NOW.md](NOW.md) dosyasını oku: projenin şu anki odağı.
3. `wiki/log/` klasöründeki **en yeni 3 kaydı** oku: son oturumlarda ne yapıldı.
4. [wiki/index.md](wiki/index.md) üzerinden işe ilgili kuralları bul ve oku.
5. `git status` ve `git branch --show-current` çalıştır. Kullanıcı `main` üzerindeyse ve bir şey değiştirecekse önce [workflows/basla.md](workflows/basla.md) akışını uygula.

## Komutlar

Kullanıcı aşağıdakilerden birini (veya benzerini) yazarsa ilgili dosyayı oku ve adımlarını uygula:

| Kullanıcı der ki | Uygula |
|---|---|
| `basla`, `basla: <iş>`, "yeni işe başlıyorum" | [workflows/basla.md](workflows/basla.md) |
| `gonder`, "pull request aç", "yükle" | [workflows/gonder.md](workflows/gonder.md) |
| `oturumu bitir`, "bugünlük bu kadar" | [workflows/oturum-bitir.md](workflows/oturum-bitir.md) |
| "figma senkron", "token'ları güncelle" | [workflows/figma-senkron.md](workflows/figma-senkron.md) |
| "çakışma var", "conflict" | [rehber/06-cakisma-olursa.md](rehber/06-cakisma-olursa.md) içindeki ajan bölümü |
| "kurulumumu kontrol et" | [rehber/02-araclari-kur.md](rehber/02-araclari-kur.md) içindeki kontrol komutlarını çalıştır, sonucu sade dille anlat |

## Kural öncelik sırası

Kurallar çelişirse yukarıdaki kazanır:

1. Kullanıcının o anki açık talimatı (ama `rules/core/` dosyasını değiştirmeyi gerektiriyorsa → kural 2'ye bak)
2. `rules/core/`
3. `rules/team/`
4. Komponente özel kurallar (`components/<isim>/spec.md`)

Bir çelişki fark edersen kendi başına çözme. Kullanıcıya iki kuralı da göster ve sor.

## Altın kurallar

1. **Asla `main` üzerinde değişiklik yapma veya commit atma.** Önce [workflows/basla.md](workflows/basla.md).
2. **`rules/core/`, `AGENTS.md`, `CLAUDE.md`, `.github/`, `scripts/` ve `tokens/` korumalıdır.** Bu dosyaları sadece proje sahibi açıkça isterse değiştir. Başka biri isterse `proposals/` altında öneri dosyası oluştur ([proposals/README.md](proposals/README.md)).
3. **Bir kural = bir dosya.** Her kural dosyasında frontmatter olmalı. Format: [rules/core/kural-yazim-formati.md](rules/core/kural-yazim-formati.md).
4. **Her klasörde bir `README.md` olmalı.** Bir şeyin çalışma şeklini değiştirdiysen ilgili README'yi aynı işte güncelle. Yazım kuralı: [rules/core/readme-yazim-kurali.md](rules/core/readme-yazim-kurali.md).
5. **`wiki/index.md` dosyasını elle düzenleme.** `node scripts/index-olustur.mjs` ile üret.
6. **Kullanıcının git bilmediğini varsay.** Git komutlarını sen çalıştır. Ne yaptığını sade Türkçeyle anlat. Teknik bir terimi ilk kez kullandığında bir cümleyle açıkla. Gerekirse [rehber/sozluk.md](rehber/sozluk.md) dosyasına link ver.
7. **Repo herkese açık (public).** Şifre, token, API anahtarı, `.env` dosyası, kişisel veri veya şirkete özel gizli içerik ekleme. Böyle bir şey görürsen dur ve kullanıcıyı uyar.
8. **Uydurma.** Figma'da veya kurallarda olmayan bir değeri (renk, boşluk, isim) tahmin etme. Sor veya Figma'dan oku.
9. **Uzun işlerde ara kayıt al.** Konteksti dolmak üzere olan uzun bir işte, bitirmeden önce [workflows/oturum-bitir.md](workflows/oturum-bitir.md) adımlarıyla durumu kaydet. Böylece bir sonraki oturum kaldığı yerden devam eder.
10. **Göndermeden önce kontrol et.** `node scripts/kontrol.mjs` hatasız geçmeli.

## Klasör haritası

| Yol | İçerik |
|---|---|
| `rules/core/` | Ana kurallar (korumalı) |
| `rules/team/` | Ekip kuralları |
| `proposals/` | Ana kural değişiklik önerileri |
| `workflows/` | Tekrar eden işlerin adım adım tarifleri |
| `components/<isim>/spec.md` | Komponent kimlik kartı: varyantlar, state'ler, token'lar |
| `tokens/` | Figma'dan üretilen token'lar (DTCG JSON), `tailwind.css` ve `esleme.md`. Elle düzenlenmez |
| `wiki/index.md` | Otomatik içindekiler |
| `wiki/log/` | Oturum kayıtları, her biri ayrı dosya: `YYYY-MM-DD-<kullanici>-<konu>.md` |
| `rehber/` | İnsanlar için rehberler |
| `scripts/` | `kontrol.mjs` (doğrulama), `index-olustur.mjs` (index üretimi), `tokenlari-uret.mjs` (token üretimi), `figma/` (Figma okuma) |

## Yazım düzeni

- İnsanlarla ve dokümanlarda **Türkçe** konuş.
- Dosya ve klasör adları: küçük harf, ASCII (ş/ı/ğ yok), kelimeler tire ile ayrılır (`kebab-case`). Örnek: `buton-dokumantasyonu.md`
- Commit mesajları Türkçe ve kısa: `Buton dokümantasyonu eklendi`
- **Figma node ID'leri (`123:456` gibi) insanlara yönelik metinde kullanılmaz.** Bunların yerine Figma'daki sayfa ve frame adı yazılır: "Component Sets frame'indeki Button seti" gibi. Node ID'ler sadece makine için olan yerlerde durur: frontmatter'daki `figma_node:` alanı, token dosyaları.
- **Video içindeki bütün metinler İngilizcedir** ([rules/core/video/veri-kaynagi.md](rules/core/video/veri-kaynagi.md)). Dokümantasyon dili ayrıca belirlenecek.
