// Phosphor paketinde olmayan özel ikonlar (Figma → Icons sayfası → Custom Icons).
// Phosphor ikonları buraya yazılmaz; build onları lib/icons.mjs ile gömer.
// Yeni özel ikon: Figma'dan 32×32 SVG olarak dışa aktar, sadece <path> kısımlarını fill'siz yaz (currentColor ile boyanır).
window.TDS_ICONS = {
  // tabii işareti (Figma → Icons → Custom Icons → tabiiIcon). Status'ta "On tabii / Not on tabii" kaynağı.
  TabiiIcon: '<path d="M27.2679 16.0315L29.3337 10.7991L23.5121 8.52968L21.1959 2.66675L16.0003 4.74715L10.7421 2.66675L8.48859 8.46661L2.66699 10.7991L4.73272 16.0315L2.66699 21.2641L8.48859 23.5335L10.7421 29.3334L15.9378 27.253L21.1334 29.3334L23.3869 23.5335L29.2085 21.2641L27.2679 16.0315ZM17.1271 19.9402L16.0003 22.777L14.8735 19.9402L10.3039 21.7683L12.1193 17.1663L9.30232 16.0315L12.1193 14.8969L10.3039 10.2947L14.8735 12.123L16.0003 9.28608L17.1271 12.123L21.6967 10.2947L19.8814 14.8969L22.6983 16.0315L19.8814 17.1663L21.6967 21.7683L17.1271 19.9402Z"/>',
};
