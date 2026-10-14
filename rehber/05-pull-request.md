# 5. Pull request

**Pull request (PR) nedir?** "Branch'imde şu değişiklikleri yaptım, ana projeye (main) eklensin" demenin yolu. Ekipten biri değişikliklere bakar, onaylar ve değişiklikler main'e eklenir. Bu son adıma **merge** (birleştirme) denir.

**Neden bu kadar adım var?** Herkes değişikliklerini doğrudan main'e yazabilseydi biri yanlışlıkla bir kuralı bozduğunda bunu kimse fark etmezdi. PR, "ikinci bir göz" kuralıdır.

---

## Kim neyi onaylayabilir?

| Değişen yer | Kim onaylar? |
|---|---|
| `rules/core/`, `workflows/`, `tokens/`, `scripts/`, `AGENTS.md`, `CLAUDE.md`, `ROADMAP.md`, `.github/`, `.claude/` | Sadece proje sahibi (Mücahit) |
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

Onay geldikten ve kontroller yeşil olduktan sonra PR sayfasının altında **Squash and merge** butonu aktif olur. Tıkla → **Confirm squash and merge**.

✅ **Ne görmelisin?** Mor renkli **Merged** etiketi. İş main'e eklendi. 🎉

## Yeşil tik ✓ ve kırmızı çarpı ✗

PR sayfasında **kontrol** adında otomatik bir kontrol çalışır.

- ✓ yeşil: Her şey yolunda.
- ✗ kırmızı: Bir eksik var. Merge edilemez. Yapay zekaya `PR'daki kontrol neden kırmızı, düzelt` yaz.

Ayrıntısı: [GitHub Actions nedir?](github-actions-nedir.md)

---

➡️ Sıradaki: [6. Çakışma olursa](06-cakisma-olursa.md)
