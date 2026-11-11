// Phosphor paketinde olmayan özel ikonlar (Figma → Icons sayfası → Custom Icons).
// Phosphor ikonları buraya yazılmaz; build onları lib/icons.mjs ile gömer.
// Yeni özel ikon: Figma'dan 32×32 SVG olarak dışa aktar, sadece <path> kısımlarını fill'siz yaz (currentColor ile boyanır).
window.TDS_ICONS = {};
