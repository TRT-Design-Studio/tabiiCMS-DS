# Kaynaklar

**Bu klasör ne?** Mevcut (eski) CMS hakkında elimizdeki ham bilgiler. Yeni tasarımın kararları bunlara dayanır. Burada yorum yoktur, sadece "şu an ne var?" yazar. Yorum ve analiz [moduller/](../moduller/README.md) klasöründedir.

**Ne zaman dokunurum?** Yeni bir kaynak geldiğinde (yeni ekran görüntüleri, güncel bilgi mimarisi, staging'de yeni bir şey) veya bir kaynak eskidiğinde.

## Dosyalar

| Dosya | Kaynak | Güvenilirlik |
|---|---|---|
| [staging-notlari.md](staging-notlari.md) | Test ortamı | En güncel, ama canlıya çıkmamış özellikler de içerir (ör. Game) |
| [figma-ekran-envanteri.md](figma-ekran-envanteri.md) | Figma'daki ekran görüntüleri (Flows sayfası, 258 ekran) | Yüksek ama tarihli: yeni tipler eksik |
| [bilgi-mimarisi.md](bilgi-mimarisi.md) | Elle hazırlanmış bilgi mimarisi (xmind) | Orta: insan yapımı, hatalı olabilir |

## Kaynaklar çelişirse

1. **Staging** kazanır: sistemin en güncel halidir. Ama staging bir test ortamıdır; canlıda henüz olmayan özellikler de burada görünür. Böyle bir özelliği yazarken "test ortamında, canlıda yok" diye belirt.
2. Sonra **Figma ekranları**: gerçek ekranın görüntüsüdür.
3. En son **bilgi mimarisi**.

Çelişkiyi sessizce düzeltme. İlgili modül dosyasının "Kaynaklar arası farklar" bölümüne yaz; önemliyse [sorular.md](../sorular.md)'ye soru olarak ekle.

## Yeni kaynak eklemek

1. Dosyayı bu klasöre koy. Adı küçük harf, ASCII ve tireli olsun: `kullanici-gorusmeleri-2026-12.md`.
2. En üste bilgi bloğu ekle: `kaynak`, `alindi` (tarih), `guvenilirlik`.
3. Yukarıdaki tabloya bir satır ekle.

Repo herkese açıktır. **Kullanıcı adı, gerçek içerik verisi, şifre, staging adresi ve ekran görüntüsü buraya konmaz.** Sadece yapı yazılır.
