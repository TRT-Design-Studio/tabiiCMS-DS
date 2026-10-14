# Sözlük

Projede geçen teknik kelimelerin sade açıklamaları. Alfabetik değil, öğrenme sırasına göre dizildi.

| Kelime | Ne demek? |
|---|---|
| **Markdown (.md)** | Basit işaretlerle biçimlendirilen metin dosyası. `# Başlık`, `**kalın**`, `- madde` gibi. Bu projedeki dosyaların çoğu böyle |
| **Git** | Dosyaların bütün geçmişini tutan program. "Kim, ne zaman, neyi değiştirdi" bilgisi onda saklanır |
| **GitHub** | Git projelerinin internette saklandığı ve ekiplerin buluştuğu site |
| **Organizasyon** | GitHub'da bir ekibin ortak alanı. Bizimki: `TRT-Design-Studio` |
| **Repo (repository)** | Bir projenin bütün dosyaları ve geçmişi. Bu proje bir repo |
| **Public repo** | Herkesin görebildiği repo. Bizimki public, bu yüzden gizli bilgi koymuyoruz |
| **Clone** | Repoyu ilk kez bilgisayarına indirmek |
| **main** | Projenin ana, onaylı hali. Doğrudan değiştirilmez |
| **Branch** | Projenin sana özel çalışma kopyası. Burada yaptığın değişiklikler main'i etkilemez |
| **Commit** | Yaptığın değişiklikleri bir açıklamayla "kaydetmek". Oyunlardaki kayıt noktası gibi |
| **Push** | Bilgisayarındaki commit'leri GitHub'a yüklemek |
| **Pull** | GitHub'daki en yeni değişiklikleri bilgisayarına çekmek |
| **Pull request (PR)** | "Branch'imdeki değişiklikler main'e eklensin" isteği. Ekip inceler ve onaylar |
| **Review** | Bir PR'ı incelemek ve onaylamak ya da düzeltme istemek |
| **Merge** | Onaylanan PR'ı main'e eklemek |
| **Conflict (çakışma)** | İki kişinin aynı satırı farklı değiştirmesi. Bkz. [Çakışma olursa](06-cakisma-olursa.md) |
| **CODEOWNERS** | Hangi klasörü kimin onaylaması gerektiğini yazan dosya (`.github/CODEOWNERS`) |
| **Ruleset** | main'i koruyan GitHub kuralları. "Doğrudan yazılamaz, onay gerekir" gibi |
| **GitHub Actions** | GitHub'ın otomatik çalışan yardımcısı. Bkz. [GitHub Actions nedir?](github-actions-nedir.md) |
| **Frontmatter** | Bir .md dosyasının en üstünde, `---` çizgileri arasında duran bilgi bloğu (kim yazdı, hangi sürüm…) |
| **Terminal** | Bilgisayara yazıyla komut verilen pencere |
| **CLI** | Terminal'den kullanılan program. Örnek: `gh` (GitHub CLI) |
| **Ajan (agent)** | Dosyaları okuyup komut çalıştırabilen yapay zeka (Claude, Cursor…) |
| **Token / değişken** | Figma'daki tasarım değişkenleri: renk, boşluk, yazı boyutu… Kodda aynı isimle kullanılır |
| **Komponent seti** | Bir komponentin bütün varyant ve state'lerinin bir arada durduğu Figma yapısı |
| **Storybook** | Komponentlerin tarayıcıda tıklanıp denenebildiği canlı katalog |
| **Remotion** | Kodla video üretmeye yarayan araç. Komponent videolarını bununla yapıyoruz |
| **Tailwind** | Kodda stil vermek için kullanılan sistem (`p-2`, `bg-surface-primary` gibi class'lar) |
| **MCP** | Yapay zekanın Figma gibi programlara bağlanmasını sağlayan köprü |
