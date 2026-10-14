# Kurallar

Tasarım sisteminin bütün kuralları burada. Yapay zeka bir iş yaparken önce buradaki ilgili kuralları okur.

## İki katman var

| Klasör | Ne var? | Kim değiştirir? |
|---|---|---|
| [core/](core/README.md) | Ana kurallar: token'lar, isimlendirme, doküman şablonu, yazım formatları | Sadece proje sahibi. Değişiklik isteyen [öneri yazar](../proposals/README.md) |
| [team/](team/README.md) | Ekibin eklediği kurallar | Herkes (PR ile) |

Çelişki olursa **core kazanır.**

## Kural dosyası nasıl yazılır?

- Bir dosyada **tek bir kural** olur.
- Her dosyanın en üstünde bir bilgi bloğu (frontmatter) olur.
- Format ve örnek: [core/kural-yazim-formati.md](core/kural-yazim-formati.md)

Yapay zekaya `basla: yeni kural, <konu>` yazarsan formatı o uygular.
