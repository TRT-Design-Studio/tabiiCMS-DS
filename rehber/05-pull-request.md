# 5. Pull request

**Pull request (PR) nedir?** "Branch'imde şu değişiklikleri yaptım, ana projeye (main) eklensin" demenin yolu. Ekipten biri değişikliklere bakar, onaylar ve değişiklikler main'e eklenir. Bu son adıma **merge** (birleştirme) denir.

**Neden bu kadar adım var?** Herkes değişikliklerini doğrudan main'e yazabilseydi biri yanlışlıkla bir kuralı bozduğunda bunu kimse fark etmezdi. PR, "ikinci bir göz" kuralıdır.

---

## Kim neyi onaylayabilir?

| Değişen yer | Kim onaylar? |
|---|---|
| `rules/core/`, `workflows/`, `tokens/`, `scripts/`, `AGENTS.md`, `CLAUDE.md`, `KOMUTLAR.md`, `ROADMAP.md`, `.github/`, `.claude/` | Sadece proje sahibi (Mücahit) |
| Diğer her şey (rehberler, `rules/team/`, komponentler, öneriler…) | Ekipten herhangi biri |

Kendi PR'ını kendin onaylayamazsın. GitHub buna izin vermez.

## Bir PR nasıl incelenir?

1. GitHub'da projeye git → üstteki **Pull requests** sekmesine tıkla.
2. İncelemek istediğin PR'a tıkla.
3. **Files changed** sekmesine geç. Yeşil satırlar eklenenler, kırmızı satırlar silinenlerdir.
4. Bir satıra yorum yazmak istersen satırın yanındaki **+** işaretine tıkla.
5. İncelemen bitince sağ üstteki **Review changes** butonuna tıkla ve birini seç:
   - **Approve:** Onaylıyorum.
   - **Request changes:** Şunları düzelt.
   - **Comment:** Sadece yorum.
6. **Submit review** butonuna tıkla.

> Yapay zekadan da yardım alabilirsin: `12 numaralı pull request'i incele ve bana özetle`

## Merge (birleştirme)

### "This branch is out-of-date with the base branch" yazıyorsa

Sen çalışırken bir arkadaşının PR'ı main'e eklenmiş demektir. GitHub, senin PR'ının main'in **son haliyle** birlikte de kontrol edilmesini ister. Böylece iki PR ayrı ayrı doğru olup birlikte bir şeyi bozamaz.

1. PR sayfasının altındaki **Update branch** butonuna tıkla.
2. Kontrolün tekrar yeşil olmasını bekle (birkaç saniye).

Ya da yapay zekaya `branch'imi güncelle` yaz.

> Butona basınca bir çakışma çıkarsa: [6. Çakışma olursa](06-cakisma-olursa.md)

### Merge

Onay geldikten ve kontroller yeşil olduktan sonra PR sayfasının altında **Squash and merge** butonu aktif olur. Tıkla → **Confirm squash and merge**.

✅ **Ne görmelisin?** Mor renkli **Merged** etiketi. İş main'e eklendi. 🎉

> **Yapay zeka için:** Kullanıcı "branch'imi güncelle" derse `gh pr update-branch` çalıştır. Çakışma çıkarsa [06-cakisma-olursa.md](06-cakisma-olursa.md) içindeki adımları uygula. Sonra `gh pr checks` ile kontrolün geçtiğini doğrula.

## Yeşil tik ✓ ve kırmızı çarpı ✗

PR sayfasında **kontrol** adında otomatik bir kontrol çalışır.

- ✓ yeşil: Her şey yolunda.
- ✗ kırmızı: Bir eksik var. Merge edilemez. Yapay zekaya `PR'daki kontrol neden kırmızı, düzelt` yaz.

Ayrıntısı: [GitHub Actions nedir?](github-actions-nedir.md)

---

➡️ Sıradaki: [6. Çakışma olursa](06-cakisma-olursa.md)
