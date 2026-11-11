# Code layer komponentleri

**Bu klasör ne?** Her komponentin code layer'daki kodu. Klasör adı `components/<isim>/spec.md` ile aynıdır.

**Ne zaman dokunurum?** Spec'te yeni bir tablo ya da yeni bir sütun açıldığında. Sadece değer değiştiyse dokunma; build yeter.

Her klasörde iki dosya var:

| Dosya | İş |
|---|---|
| `style.mjs` | Spec tablolarını okur, CSS üretir. Değer yazmaz, sadece token adlarını CSS değişkenine çevirir |
| `component.js` | Komponentin HTML'ini çizer. İç içe komponentleri `TDS.render` ile çağırır |

Yeni bir komponent eklerken var olan bir klasörü örnek al. İçindeki komponentler zaten burada varsa onları kullan.
