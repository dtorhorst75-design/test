// Themen für das Register von Band 6. Die Rezepte geben ihr Thema selbst an (Feld „thema“).
const T = {
  LIPPEN: 'Lippen',
  TEINT: 'Teint und Puder',
  WANGEN: 'Rouge und Bronzer',
  AUGEN: 'Augenbrauen und Lider',
  ABSCHMINKEN: 'Abschminken, Pinsel und Aufbewahren',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
