# GitHub kurulumu (proje sahibi için)

Bu rehber bir kez yapılır. Sonunda şunlar hazır olur:

- `TRT-Design-Studio` organizasyonunda **public** bir `tabiiCMS-DS` reposu,
- **korumalı bir main:** kimse doğrudan yazamaz, her şey PR ile gelir,
- `rules/core/` gibi korumalı klasörlerde **sadece senin onayınla** merge,
- ekip üyelerinin bir **takım** üzerinden yetki alması.

⏱ Yaklaşık 20 dakika

> ✅ **Durum (2026-10-20):** `TRT-Design-Studio/tabiiCMS-DS` için bütün adımlar yapıldı. Tek eksik: organizasyonda **2FA zorunluluğu** (Adım 1, madde 4). Bütün üyeler kendi 2FA'sını açtıktan sonra açılacak. Bu rehber, kurulumun nasıl yapıldığının kaydı olarak ve ileride yeni bir repo açılırsa diye duruyor.

---

## Adım 1: Organizasyon ayarları

1. **https://github.com/organizations/TRT-Design-Studio/settings/member_privileges** adresine git.
2. **Base permissions** → **Read** seç. Organizasyon üyeleri bütün repoları görebilir ama yazamaz. Yazma yetkisini takım üzerinden vereceğiz.
3. **Repository creation** → **Public** ve **Private** kutularının işaretini kaldır. Yeni repoyu sadece yönetici açabilir.
4. **Save** butonuna tıkla.
5. **https://github.com/organizations/TRT-Design-Studio/settings/security** → **Require two-factor authentication for everyone** kutusunu işaretle → **Save**.
   - ⚠️ **Önce bütün üyelerin kendi 2FA'sını açmış olması gerekir.** Açmamış olanları GitHub organizasyondan çıkarır. Kimin açmadığını görmek için: **People** sayfası → **2FA** filtresi.

## Adım 2: Takım oluştur

1. **https://github.com/orgs/TRT-Design-Studio/teams** → **New team**
2. **Team name:** `tasarim` → **Create team**
3. Takım sayfasında **Add a member** butonuyla ekip arkadaşlarını ekle.

> Yeni biri geldiğinde sadece bu takıma eklemen yeterli. Repo yetkileri takımdan gelir.

## Adım 3: Repoyu oluştur

1. **https://github.com/organizations/TRT-Design-Studio/repositories/new**
2. **Owner:** `TRT-Design-Studio` · **Repository name:** `tabiiCMS-DS`
3. **Public** seç.
4. ⚠️ **"Add a README file"**, **.gitignore** ve **license** seçeneklerini **işaretleme**. Bu dosyalar bilgisayardaki klasörde zaten var.
5. **Create repository**

## Adım 4: Bilgisayardaki klasörü yükle

**Kolay yol:** Proje klasöründe Claude'a şunu yaz:

```
Bu klasörü https://github.com/TRT-Design-Studio/tabiiCMS-DS reposuna ilk kez yükle. main branch'i olsun.
```

**Kendin yapmak istersen:** Terminal'de proje klasöründeyken komutları tek tek çalıştır:

```
git init -b main
```
```
git add -A
```
```
git commit -m "Faz 0: proje iskeleti"
```
```
git remote add origin https://github.com/TRT-Design-Studio/tabiiCMS-DS.git
```
```
git push -u origin main
```

✅ **Ne görmelisin?** Repo sayfasında dosyalar ve altta README görünür. **Actions** sekmesinde `kontrol` adında yeşil tikli bir çalışma olur.

## Adım 5: Takıma yazma yetkisi ver

1. Repo → **Settings** → **Collaborators and teams** → **Add teams**
2. `tasarim` takımını seç → rol: **Write** → **Add**

> **Write ne demek?** Takım üyeleri kendi branch'lerini açıp PR gönderebilir. main'e doğrudan yazamazlar, bunu Adım 7'deki koruma engeller.

## Adım 6: PR ayarları

Repo → **Settings** → **General** → aşağı kaydır, **Pull Requests** bölümü:

- ✅ **Allow squash merging** (diğer iki merge seçeneğinin işaretini kaldır). Her PR main'de tek ve temiz bir kayıt olur.
- ✅ **Always suggest updating pull request branches**
- ✅ **Automatically delete head branches**. Merge edilen branch'ler kendiliğinden silinir.

## Adım 7: main'i koru (en önemli adım)

1. Repo → **Settings** → **Rules** → **Rulesets** → **New ruleset** → **New branch ruleset**
2. **Ruleset name:** `main-koruma`
3. **Enforcement status:** **Active**
4. **Bypass list** → **Add bypass** → **Organization admin** seç → yanındaki modu **For pull requests only** yap.
   - **Neden?** GitHub kişinin kendi PR'ını onaylamasına izin vermez. Bu ayar olmazsa senin PR'larını da başka birinin onaylaması gerekirdi. Bu ayarla sen de PR açmak zorundasın, ama kendi PR'ını onaysız merge edebilirsin.
5. **Target branches** → **Add target** → **Include default branch**
6. **Rules** bölümünde şunları işaretle:
   - ✅ **Restrict deletions**
   - ✅ **Require a pull request before merging**
     - **Required approvals:** `1`
     - ✅ **Dismiss stale pull request approvals when new commits are pushed**
     - ✅ **Require review from Code Owners**
   - ✅ **Require status checks to pass**
     - **Add checks** → `kontrol` yaz ve listeden seç. Listede yoksa Adım 4'teki ilk yükleme bitmemiştir. Biraz bekleyip tekrar dene.
     - ✅ **Require branches to be up to date before merging**. İki PR ayrı ayrı doğru olup birlikte main'i bozmasın diye. PR'larda bazen **Update branch** butonuna basmak gerekir.
   - ✅ **Block force pushes**
7. **Create**

## Adım 8: CODEOWNERS'ı kontrol et

`.github/CODEOWNERS` dosyasında korumalı alanların sahibi olarak `@mucahitpuren` yazıyor. Değiştirmen gereken bir şey yok.

İleride proje sahibi değişirse ya da korumalı alanlara ikinci bir onaycı eklemek istersen bu dosyayı güncelle (PR ile). Örnek: `/rules/core/    @mucahitpuren @baska-kullanici`

> ⚠️ CODEOWNERS'a yazılan kişinin repoda **Write** veya daha yüksek bir yetkisi olmalı. Yoksa GitHub o satırı yok sayar.

## Adım 9: Güvenlik ve gereksiz sekmeler

1. Repo → **Settings** → **Advanced Security** (bazı hesaplarda **Code security**) → **Secret Protection** ve **Push protection** → **Enable**. Biri yanlışlıkla şifre veya API anahtarı yüklemeye çalışırsa GitHub yüklemeyi engeller.
2. Repo → **Settings** → **General** → **Features** bölümünde **Wikis** ve **Projects** kutularının işaretini kaldır. Kullanmıyoruz, Wikis sekmesi bizim `wiki/` klasörümüzle karışabilir.

## Adım 10: Korumayı test et

Bir ekip arkadaşından Terminal'de main'e doğrudan bir şey göndermeyi denemesini iste (veya kendin, bypass'ı geçici kapatarak dene). GitHub'ın şöyle bir hatayla reddetmesi gerekir:

```
remote: error: GH013: Repository rule violations found for refs/heads/main.
```

✅ Bu hatayı görüyorsan koruma çalışıyor.

---

## Sonradan

### Yeni ekip üyesi eklemek

1. **https://github.com/orgs/TRT-Design-Studio/people** → **Invite member** → kullanıcı adını yaz → rol: **Member**
2. Davet ekranında `tasarim` takımını seç → **Send invitation**
3. Yeni kişiye repo ana sayfasının linkini gönder. README onu adım adım yönlendirir.

### Her şeyin senin onayından geçmesini istersen

Şu an `rules/core/` gibi korumalı yerler sadece senin onayınla merge edilebiliyor. Rehberler ve `rules/team/` gibi diğer yerleri ise ekip üyeleri birbirlerine onaylatabiliyor. **Her PR'ın** senin onayından geçmesini istersen `.github/CODEOWNERS` dosyasındaki `# * @mucahitpuren` satırının başındaki `# ` işaretini kaldır.
