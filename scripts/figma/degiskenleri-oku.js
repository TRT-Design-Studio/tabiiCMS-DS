// Figma'dan değişkenleri, yazı stillerini ve gölge stillerini okur. Salt okunur, Figma'da hiçbir şeyi değiştirmez.
// Node ile çalıştırılmaz: ajan bu dosyanın içeriğini Figma MCP'nin use_figma aracına "code" olarak verir.
// Figma bir seferde en fazla 20 KB veri döndürebildiği için veri parça parça okunur:
// PARCA değerini 0, 1, 2… yaparak çağır. Her sonucu tokens/.parcalar/<PARCA>.json dosyasına yaz.
// Dönen "toplamParca" kaç çağrı gerektiğini söyler. Tarif: workflows/figma-senkron.md
const PARCA = 0;
const BOYUT = 45;

const collections = await figma.variables.getLocalVariableCollectionsAsync();
const variables = await figma.variables.getLocalVariablesAsync();
const byId = Object.fromEntries(variables.map((v) => [v.id, v]));
const round = (n) => Math.round(n * 10000) / 10000;
const rgba = (c) => [round(c.r), round(c.g), round(c.b), round(c.a ?? 1)];

const value = (v) => {
  if (v && typeof v === 'object' && v.type === 'VARIABLE_ALIAS') return { alias: byId[v.id] ? byId[v.id].name : v.id };
  if (v && typeof v === 'object' && 'color' in v && 'opacity' in v) return { ...value(v.color), opacity: v.opacity };
  if (v && typeof v === 'object' && 'r' in v) return { color: rgba(v) };
  return v;
};

const items = [];
for (const c of collections) {
  items.push({ kind: 'collection', name: c.name, modes: c.modes.map((m) => m.name) });
  for (const id of c.variableIds) {
    const v = byId[id];
    const values = {};
    for (const m of c.modes) values[m.name] = value(v.valuesByMode[m.modeId]);
    const item = { kind: 'variable', collection: c.name, id: v.id, name: v.name, type: v.resolvedType, scopes: v.scopes, values };
    if (v.codeSyntax && Object.keys(v.codeSyntax).length) item.codeSyntax = v.codeSyntax;
    items.push(item);
  }
}
for (const s of await figma.getLocalTextStylesAsync()) {
  const bound = {};
  for (const [k, a] of Object.entries(s.boundVariables || {})) bound[k] = byId[a.id] ? byId[a.id].name : a.id;
  items.push({
    kind: 'textStyle',
    id: s.id,
    name: s.name,
    fontFamily: s.fontName.family,
    fontStyle: s.fontName.style,
    fontSize: s.fontSize,
    lineHeight: s.lineHeight.unit === 'AUTO' ? { unit: 'AUTO' } : { unit: s.lineHeight.unit, value: round(s.lineHeight.value) },
    letterSpacing: { unit: s.letterSpacing.unit, value: round(s.letterSpacing.value) },
    bound,
  });
}
for (const s of await figma.getLocalEffectStylesAsync()) {
  items.push({
    kind: 'effectStyle',
    id: s.id,
    name: s.name,
    effects: s.effects.filter((e) => e.visible !== false).map((e) => ({
      type: e.type,
      x: e.offset ? e.offset.x : 0,
      y: e.offset ? e.offset.y : 0,
      blur: e.radius,
      spread: e.spread ?? 0,
      color: e.color ? rgba(e.color) : null,
    })),
  });
}

return {
  fileName: figma.root.name,
  parca: PARCA,
  toplamParca: Math.ceil(items.length / BOYUT),
  items: items.slice(PARCA * BOYUT, (PARCA + 1) * BOYUT),
};
