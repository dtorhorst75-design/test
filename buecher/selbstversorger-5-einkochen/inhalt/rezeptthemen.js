// Themen für das Register von Heft 5. Die Rezepte geben ihr Thema selbst an (Feld „thema“).
const T = {
  GRUND: 'Grundtechniken',
  KONFITUERE: 'Konfitüre, Gelee und Mus',
  KOMPOTT: 'Kompott, Saft und Sirup',
  SAUER: 'Sauer eingelegt',
  GEMUESE: 'Tomaten und Gemüse',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
