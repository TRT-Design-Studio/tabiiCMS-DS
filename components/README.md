# Komponentler

**Bu klasör ne?** Her dokümante edilen komponentin bir klasörü var. İçinde komponentin **kimlik kartı** olan `spec.md` dosyası durur.

```
components/
└── input/
    └── spec.md   ← varyantlar, property'ler, boyutlar, state renkleri, slot'lar, kullanıldığı yerler
```

**Neden önemli?** Figma'daki komponentin repodaki özeti. Kod, test ya da ileride Storybook ve video gibi işler bu dosyadan başlar. Storybook ve video şimdilik rafta (2026-11-10). Çalışan örnekler Figma Make ile komponent sayfasına gömülecek.

## spec.md formatı

1. Bilgi bloğu: `component`, `figma_page`, `figma_node` (set id'si), `version`, `status`, `updated`.
2. Bölümler: **Variants**, **Properties**, **Sizes**, **States**, **Slots** (varsa), **Used in**.
3. Değerler Figma'daki komponentten okunur, dokümandaki tablolarla aynıdır.
4. Komponent Figma'da değişince bu dosya da güncellenir.

Dokümante edilen komponentler: [input](input/spec.md) · [button](button/spec.md) · [icon-button](icon-button/spec.md) · [split-button](split-button/spec.md) · [status](status/spec.md) · [badge-count](badge-count/spec.md) · [badge-dot](badge-dot/spec.md) · [badge-label](badge-label/spec.md) · [tag](tag/spec.md) · [menu](menu/spec.md) · [menu-item](menu-item/spec.md) · [menu-group-label](menu-group-label/spec.md) · [menu-separator](menu-separator/spec.md) · [sidebar](sidebar/spec.md) · [nav-item](nav-item/spec.md) · [nav-sub-group](nav-sub-group/spec.md) · [select](select/spec.md) · [textarea](textarea/spec.md) · [form-field](form-field/spec.md) · [number-stepper](number-stepper/spec.md) · [phone-field](phone-field/spec.md) · [tooltip](tooltip/spec.md) · [label](label/spec.md) · [field-message](field-message/spec.md) · [calendar](calendar/spec.md) · [calendar-header](calendar-header/spec.md) · [calendar-day](calendar-day/spec.md) · [tag-input](tag-input/spec.md) · [checkbox](checkbox/spec.md) · [radio](radio/spec.md) · [filter-group](filter-group/spec.md)
