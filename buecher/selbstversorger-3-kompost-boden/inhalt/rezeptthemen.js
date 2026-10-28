// Themen für das Register von Heft 3. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  BODEN: 'Den Boden verstehen und verbessern',
  KOMPOST: 'Kompost, Laub und Würmer',
  BEETE: 'Hügelbeet, Hochbeet und Mulch',
  JAUCHE: 'Pflanzenjauchen und Brühen',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
