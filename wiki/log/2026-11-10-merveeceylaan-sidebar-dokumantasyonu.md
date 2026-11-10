---
date: 2026-11-10
author: "@merveeceylaan"
branch: merveeceylaan/sidebar-dokumantasyonu
---

# Sidebar dokümantasyonu

`↪︎ Sidebar` sayfası şablona göre dokümante edildi. Sayfadaki "Sidebar Interaction" code layer'ı Interaction frame'ine gömüldü.

## Ne yapıldı?
- Figma'da ↪︎ Sidebar sayfasına yedi frame kuruldu: Overview → Changelog → Interaction → Examples → Component Sets → Anatomy & Specs → Properties. Sayfa zemini `#171717` yapıldı.
- Code layer ("Sidebar Interaction") Interaction frame'indeki "Code Layer" alanına taşındı. Kopyalanmadı.
- Ana setler (Sidebar, Nav Item, Nav Sub Group) Component Sets frame'indeki tablolara taşındı. Boşalan eski "Sidebar" grup frame'i silindi.
- Examples'a Playground'dan üç kullanım eklendi: 1440 ekranlarda Expanded, 768 ekranlarda Rail ve 1440 Create Show ekranında Rail.
- Kimlik kartları yazıldı: `components/sidebar`, `nav-item`, `nav-sub-group`.

## Alınan kararlar
- Code layer'ın boyutu Plugin API ile değiştirilemiyor (1512 × 982). Bu yüzden Interaction frame'i 1200 yerine 1610 px genişliğinde. Diğer frame'ler şablondaki gibi 1200 px.
- Sidebar ve Nav Sub Group'ta state ekseni olmadığı için tablolarda tek satır ("Default") var. Sütunlar Type ve Content değerleri.

## Açık sorular
- Interaction frame'inin 1610 px genişliği şablondan sapıyor. Code layer küçültülsün mü, yoksa bu genişlik kalsın mı?
- Code layer'ın neleri desteklediği okunamadı. Interaction açıklaması bu yüzden genel tutuldu.
- Sidebar açıklamasında Divider geçiyor ama komponentte Divider instance'ı yok. Collapse butonu gizli ve ona bağlı bir property yok.

## Sıradaki adım
- Kalan sayfalar `dokuman: <sayfa>` ile: Tooltip, Form alt sayfaları, Navigation'ın diğer alt sayfaları, Avatar, Media, Cards, Data Display.
