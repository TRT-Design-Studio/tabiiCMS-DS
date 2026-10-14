# 4. Günlük çalışma

Her iş aynı döngüyle yapılır. Git komutlarını **yapay zeka** çalıştırır. Senin işin ona ne yapmak istediğini söylemek.

```
basla  →  çalış  →  oturumu bitir  →  gonder  →  (onay)  →  main'e eklenir
```

---

## 1. `basla: <iş>`

Örnek:

```
basla: badge dokümantasyonu
```

**Arka planda ne oluyor?**
1. Yapay zeka projenin en güncel halini GitHub'dan çeker (**pull**). Böylece başkalarının dün yaptığı işlerin üstünden devam edersin.
2. Senin için yeni bir **branch** açar, örneğin `ayse-yilmaz/badge-dokumantasyonu`.

> **Branch nedir?** Projenin sana özel bir kopyası gibi düşün. Burada istediğin kadar değişiklik yaparsın, ana proje (main) etkilenmez. İşin bitince değişikliklerin onayla ana projeye eklenir.

## 2. Çalış

Yapay zekayla normal şekilde konuş: "Badge komponentinin dokümantasyonunu şablona göre hazırla", "Bu kuralı şöyle düzelt" gibi.

**İpuçları:**
- Bir branch'te **tek bir iş** yap. Buton ve badge farklı işlerse ikisi için ayrı ayrı `basla` de.
- İşi **kısa tut.** Bir branch ne kadar uzun açık kalırsa başkalarının işiyle çakışma ihtimali o kadar artar. İdeal: birkaç saat ile birkaç gün arası.

## 3. `oturumu bitir`

Yapay zeka bugün ne yaptığını, hangi kararları aldığını ve sırada ne olduğunu `wiki/log/` klasörüne bir dosya olarak yazar.

**Neden önemli?** Yapay zekanın hafızası sohbet bitince silinir. Bu kayıt sayesinde yarın (ya da başka bir ekip arkadaşın) kaldığı yerden devam edebilir.

## 4. `gonder`

**Arka planda ne oluyor?**
1. Yapay zeka kontrol scriptini çalıştırır. Bir eksik varsa önce onu düzeltir.
2. Sana neyin değiştiğini özetler ve onay ister.
3. Değişiklikleri kaydeder (**commit**).
4. GitHub'a yükler (**push**).
5. Bir **pull request** açar ve sana linkini verir.

## 5. Onay bekle

Pull request'i bir ekip arkadaşın veya proje sahibi inceler. Onaylanınca işin ana projeye (main) eklenir. Ayrıntısı: [5. Pull request](05-pull-request.md)

Onay beklerken başka bir işe geçebilirsin: yeni bir `basla` yeter.

---

## Örnek bir gün

```
Sen:  basla: input dokümantasyonu
YZ:   Projenin güncel halini çektim ve "ayse-yilmaz/input-dokumantasyonu"
      adında yeni bir branch açtım. Ne yapmak istiyorsun?
Sen:  Input komponentinin dokümantasyonunu şablona göre hazırla.
YZ:   ... (çalışır) ...
Sen:  oturumu bitir
YZ:   Bugünün kaydını wiki/log/2026-10-14-ayse-yilmaz-input-dokumantasyonu.md
      dosyasına yazdım.
Sen:  gonder
YZ:   Kontroller geçti. 3 dosya değişti: ... Göndereyim mi?
Sen:  evet
YZ:   Pull request açıldı: https://github.com/TRT-Design-Studio/tabiiCMS-DS/pull/12
```

---

➡️ Sıradaki: [5. Pull request](05-pull-request.md)
