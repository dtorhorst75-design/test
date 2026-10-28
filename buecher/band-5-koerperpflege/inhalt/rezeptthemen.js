// Themen für das Register von Band 5. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  WASCHEN: 'Natürlich waschen',
  HAUT: 'Salben, Cremes und Hautpflege',
  LIPPEN: 'Lippen und Hände',
  GESICHT: 'Gesicht: Reinigung, Masken, Peelings',
  HAARE: 'Haare',
  ZAEHNE: 'Zähne und Mund',
  DEO: 'Deo',
  BAD: 'Bad, Füße und Rasur',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
