# oturum-bitir: bugünün kaydını yazmak

> Ajan için tarif. Kullanıcı `oturumu bitir` veya "bugünlük bu kadar" dediğinde uygula. Bağlamın dolmak üzere olduğu uzun işlerde, kullanıcı istemese de **ara kayıt** olarak uygula.

**Neden var?** Yapay zekanın hafızası sohbet bitince silinir. Bu kayıt sayesinde bir sonraki oturum (veya başka bir ekip üyesi) kaldığı yerden devam eder.

## Adımlar

1. **Kayıt dosyasını oluştur:** `wiki/log/YYYY-MM-DD-<kullanici-adi>-<is-adi>.md`
   - Aynı gün aynı iş için dosya zaten varsa yenisini açma, o dosyanın sonuna ekle.
   - **Her kayıt ayrı bir dosya olur.** Tek bir ortak log dosyası tutulmaz, çünkü herkes aynı dosyaya yazarsa sürekli çakışma çıkar.

2. **Şu şablonla doldur:**

   ```markdown
   ---
   date: YYYY-MM-DD
   author: "@kullanici-adi"
   branch: kullanici-adi/is-adi
   ---

   # <İşin kısa adı>

   ## Ne yapıldı?
   - ...

   ## Alınan kararlar
   - <karar> — <neden>

   ## Açık sorular
   - ...

   ## Sıradaki adım
   - ...
   ```

   Kısa ve somut yaz. Bir sonraki ajan bu dosyayı okuyunca **hangi dosyayı açıp neye devam edeceğini** anlayabilmeli.

3. **NOW.md'yi sadece projenin genel odağı değiştiyse güncelle.** Örneğin bir faz bittiyse veya sıradaki işler listesi değiştiyse. Günlük ilerleme NOW.md'ye değil, log kaydına yazılır.

4. **Index'i güncelle.**
   ```
   node scripts/index-olustur.mjs
   ```

5. **Kullanıcıya bildir:** Kaydı nereye yazdığını ve sıradaki adımı bir cümleyle söyle. `gonder` demek isteyip istemediğini sor.
