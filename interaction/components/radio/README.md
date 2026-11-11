# radio

**Bu klasör ne?** `radio` komponentinin code layer kodu. Değerler [components/radio/spec.md](../../../components/radio/spec.md) dosyasından gelir.

- `style.mjs`: spec tablolarından CSS üretir.
- `component.js`: HTML'i çizer.
- `meta.json`: içinde kullandığı diğer komponentler.

**Ne zaman dokunurum?** Spec'te tablo yapısı değişirse. Sadece değer değiştiyse `node interaction/build.mjs` yeter.
