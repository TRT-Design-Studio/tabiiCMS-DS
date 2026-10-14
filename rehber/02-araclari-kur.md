# 2. Gerekli programları kur

⏱ Yaklaşık 15 dakika · Bu rehber **macOS** için yazıldı. Windows kullanıyorsan aynı programların Windows sürümlerini indir. Adımlar çok benzer.

## Neleri kuruyoruz, neden?

| Program | Ne işe yarar? | Zorunlu mu? |
|---|---|---|
| **GitHub Desktop** | Projeyi bilgisayarına indirmenin ve değişiklikleri görmenin görsel yolu | ✅ |
| **GitHub CLI (`gh`)** | Yapay zekanın senin adına GitHub'a yükleme yapabilmesini ve pull request açabilmesini sağlar | ✅ |
| **Claude** (masaüstü uygulaması) veya **Cursor** | Birlikte çalışacağın yapay zeka | ✅ (birini seç) |
| **Node.js** | Kontrol scriptini, ileride de Storybook ve videoları çalıştırır | ✅ |

> **Terminal nedir?** Bilgisayara yazıyla komut verdiğin pencere. Açmak için: `⌘ Cmd` + `Space` tuşlarına bas, **Terminal** yaz, `Enter`'a bas. Korkma, bu rehberde sadece birkaç komutu kopyalayıp yapıştıracaksın.

---

## Adım 1: GitHub Desktop

1. **https://desktop.github.com** adresine git ve **Download for macOS** butonuna tıkla.
2. İnen dosyayı aç ve uygulamayı **Applications** (Uygulamalar) klasörüne sürükle.
3. Uygulamayı aç → **Sign in to GitHub.com** → tarayıcıda giriş yap ve izin ver.
4. **Configure Git** ekranında adını ve GitHub'daki e-postanı gir → **Finish**.
   - Bu bilgi, yaptığın değişikliklerin yanında "bunu kim yaptı" olarak görünür.

✅ **Ne görmelisin?** GitHub Desktop'ta "Let's get started!" ekranı.

## Adım 2: Node.js

1. **https://nodejs.org** adresine git ve **LTS** yazan sürümü indir.
2. İnen `.pkg` dosyasını aç. **Continue** → **Install** butonlarıyla kurulumu bitir.

## Adım 3: GitHub CLI (`gh`)

1. **https://cli.github.com** adresine git ve **Download for Mac** butonuna tıkla.
2. İnen `.pkg` dosyasını aç ve kurulumu bitir.
3. Terminal'i aç ve şunu yapıştırıp `Enter`'a bas:

   ```
   gh auth login
   ```

4. Sorulara ok tuşlarıyla cevap ver ve her seferinde `Enter`'a bas:
   - *Where do you use GitHub?* → **GitHub.com**
   - *What is your preferred protocol?* → **HTTPS**
   - *Authenticate Git with your GitHub credentials?* → **Yes**
   - *How would you like to authenticate?* → **Login with a web browser**
5. Terminal'de 8 haneli bir kod çıkar (örnek: `ABCD-1234`). `Enter`'a bas. Açılan tarayıcı sayfasına bu kodu gir ve **Authorize** butonuna tıkla.

✅ **Ne görmelisin?** Terminal'de `✓ Logged in as <kullanıcı-adın>` yazısı.

> Bu adımı yapay zekaya yaptırma. GitHub'a girişi her zaman **sen** yaparsın.

## Adım 4: Yapay zeka aracı

Birini seç:

- **Claude:** **https://claude.ai/download** adresinden masaüstü uygulamasını indir ve giriş yap. Projede **Code** sekmesini kullanacağız.
- **Cursor:** **https://cursor.com** adresinden indir ve giriş yap.

---

## Kontrol: Her şey kurulu mu?

Terminal'e şunları **tek tek** yapıştır:

```
git --version
```
```
node -v
```
```
gh auth status
```

| Komut | Görmen gereken |
|---|---|
| `git --version` | `git version 2.xx` gibi bir yazı |
| `node -v` | `v22.xx` gibi bir yazı |
| `gh auth status` | `Logged in to github.com account <kullanıcı-adın>` |

- `git --version` komutundan sonra **"Command line developer tools"** kurmak isteyip istemediğini soran bir pencere çıkabilir. **Install** butonuna tıkla, kurulumun bitmesini bekle ve komutu tekrar çalıştır.
- Bir komut `command not found` hatası verirse o programın kurulumunu tekrarla, sonra Terminal'i kapatıp yeniden aç.

Projeyi bilgisayarına aldıktan sonra (sonraki adım) yapay zekaya **"kurulumumu kontrol et"** yazarak da aynı kontrolü yaptırabilirsin.

---

➡️ Sıradaki: [3. Projeyi bilgisayarına al](03-projeyi-bilgisayarina-al.md)
