// Themen für das Register von Heft 6. Die Rezepte geben ihr Thema selbst an (Feld „thema“).
const T = {
  GRUND: 'Grundtechniken',
  OBST: 'Obst trocknen',
  GEMUESE: 'Gemüse und Kräuter trocknen',
  FERMENT: 'Milchsauer vergären',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
