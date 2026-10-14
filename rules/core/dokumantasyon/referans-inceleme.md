---
id: core.dokuman-referans-inceleme
title: Referans frame'ler kopyalanır ama incelenir
owner: "@mucahitpuren"
status: active
version: 1
applies_to: docs
updated: 2026-10-14
---

# Referans frame'ler kopyalanır ama incelenir

## Amaç

Yeni bir komponentin dokümanı, önceden dokümante edilmiş bir sayfanın frame'leri kopyalanarak başlar. Kopyalamak hızlıdır ama eski komponentin adı, sayıları ve metinleri yeni dokümanda kalabilir. Örnek: Badge dokümanında "every state of Button and Icon Button" yazması.

## Kural

1. Referans frame'ler **başlangıç noktası** olarak kopyalanabilir.
2. Kopyaladıktan sonra **her metin ve her katman adı** tek tek incelenir. Hepsi dokümante edilen komponenti anlatmalı. Önceki komponentin adı, property'leri, sayıları veya örnekleri kalamaz.
3. Tablolardaki veriler (property'ler, varyantlar, boyutlar, token'lar) referans sayfadan değil, **komponentin kendisinden** okunur.
4. Referansta olup yeni komponentte karşılığı olmayan satırlar ve bölümler silinir. Yeni komponentte olup referansta olmayanlar eklenir.
5. Gizli frame'ler gizli kalır. Örneğin Overview'daki video frame'i, video özelliği açılana kadar gizli kalır.
6. Bitirmeden önce, dokümandaki bütün metinlerde referans komponentin adı aranır. Sonuç sıfır olmalı (ilgili komponent "Used in" gibi bölümlerde bilerek anılıyorsa hariç).
