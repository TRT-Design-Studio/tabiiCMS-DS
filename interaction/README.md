# Interaction: code layer dosyaları

**Bu klasör ne?** Figma'daki dokümanların **Interaction** frame'ine konan çalışan komponentlerin kaynağı. Her komponent sayfası için bir "playground" üretilir. Playground, komponentin bütün varyantlarını deneyebileceğin küçük bir web sayfasıdır. HTML, CSS ve JavaScript ile yazılır.

**Code layer** ne? Figma'da gerçek kodun çalıştığı katman. Toolbar'daki **Code** aracıyla (kısayol `B`) eklenir.

## Nasıl çalışır?

Değerler elle yazılmaz. Zincir şöyle:

```
Figma komponenti → components/<isim>/spec.md → interaction/build.mjs → interaction/layers/<sayfa>/index.html → Figma code layer
Figma değişkenleri → figma senkron → tokens/ ──┘
```

- **Renk, boşluk, köşe ve yazı değerleri** `tokens/` klasöründen gelir.
- **Hangi boyutta hangi boşluk, hangi state'te hangi renk** bilgisi `components/<isim>/spec.md` tablolarından okunur.
- Böylece bir komponenti değiştirip spec'i güncellediğinde, build tekrar çalışınca code layer da değişir.

## Klasörler

| Yol | İçerik |
|---|---|
| `build.mjs` | Bütün playground'ları üreten script |
| `lib/` | Spec ve token okuyucuları |
| `shared/` | Her sayfada ortak olanlar: playground arayüzü, ikonlar, çerçeve stili |
| `components/<isim>/` | Komponentin kodu. `style.mjs` spec'ten CSS üretir, `component.js` HTML'i çizer |
| `pages/<sayfa>/` | Figma'daki bir sayfanın playground'u: hangi komponentler, hangi kontroller |
| `layers/<sayfa>/index.html` | **Üretilen dosya.** Figma'ya bu konur. Elle düzenlenmez |

Kural: [rules/core/interaction/code-layer.md](../rules/core/interaction/code-layer.md).

## Ortak temel (foundation)

| Konu | Nereden? |
|---|---|
| Renk, boşluk, köşe, yazı, gölge | `tokens/` → CSS değişkenleri |
| İkonlar | Figma'daki Icons sayfasıyla aynı paket: Phosphor (Regular ve Fill), `TDS.icon('MagnifyingGlass')`. Build SVG olarak gömer, boyut ve çizim Figma ile aynı |
| Bayraklar | Figma'daki Flags ile aynı paket: circle-flags, `TDS.flag('TR')` |
| Yazı tipi | Geist |
| Açılır menü | Gerçek Menu komponenti: `TDS.defineMenu` ve `data-tds-menu`. Oklar, Enter ve Escape ile çalışır |
| Açık / koyu mod | Her playground'da üstteki düğme |

İkonlar dosyanın içinde, internet gerekmez. Bayraklar ve yazı tipi internetten yüklenir.

Yeni bir ikon ilk kez kullanılınca build onu bir kez indirir ve `shared/phosphor/` klasörüne kaydeder.

## İç içe komponentler

Bir komponent başka bir komponenti içeriyorsa onu tekrar yazmaz. `TDS.render('<isim>', {...})` ile çağırır ve klasöründeki `meta.json` dosyasına (`uses`) ekler. Build kullanılanları sayfaya kendiliğinden ekler. Örnekler:

- Button, sayacı `badge-count` ile çizer.
- Split Button, `button` ve `icon-button` komponentlerini kullanır. Menü düğmesi `menu` komponentini açar.
- Status, noktasını `badge-dot` ile çizer. Interactive açıkken `menu` komponentini açar.
- Menu, satırlarını `menu-item`, `menu-group-label` ve `menu-separator` ile çizer. Error halindeki düğme `button` komponentidir.

Yeni bir komponent eklerken önce burada var olanlara bak.

## Ne zaman dokunurum?

- Bir komponentin `spec.md` dosyası değiştiğinde: build'i çalıştır (aşağıda).
- `figma senkron` ile token'lar değiştiğinde: build'i çalıştır.
- Yeni bir sayfa için playground istediğinde: yapay zekaya `interaction: <sayfa>` yaz ([workflows/interaction.md](../workflows/interaction.md)).

## Build nasıl çalışır?

1. Terminal'i aç ([rehber/sozluk.md](../rehber/sozluk.md)).
2. Bu komutu çalıştır:

```
node interaction/build.mjs
```

✅ **Ne görmelisin?** Her sayfa için bir `✓ interaction/layers/<sayfa>/index.html` satırı.

3. Spec'lerle code layer'ların aynı olup olmadığını denetlemek için:

```
node interaction/build.mjs --check
```

✅ **Ne görmelisin?** `✓ Bütün code layer dosyaları spec'lerle aynı.`

## Figma'ya nasıl konur?

Figma eklenti arayüzü code layer oluşturamıyor ve içine yazamıyor. Bu yüzden son adım elle yapılır.

1. Figma'da komponent sayfasını aç.
2. **Interaction** frame'indeki "Figma Make — 16:9" alanını seç.
3. Toolbar'dan **Code** aracını seç (kısayol `B`).
4. Alanın içine bir code layer çiz.
5. Code layer'ın kod düzenleyicisini aç.
6. `interaction/layers/<sayfa>/index.html` dosyasının bütün içeriğini yapıştır. Ya da klasörü yükle.

✅ **Ne görmelisin?** Solda tabii logolu bir Sidebar ve içinde sayfanın komponentleri. Bir komponente tıklayınca altında Variant, Size, State gibi ayarları açılır. Sağda komponentin kendisi, sağ altta yakınlaştırma düğmeleri, Sidebar'ın en altında açık/koyu mod düğmesi.

Spec değişince build'i çalıştır ve 6. adımı tekrarla.
