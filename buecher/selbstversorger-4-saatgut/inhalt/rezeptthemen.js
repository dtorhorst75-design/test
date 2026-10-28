// Themen für das Register von Heft 4. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  GRUND: 'Grundlagen und Auswahl',
  ERNTEN: 'Samen ernten',
  BESTAEUBEN: 'Von Hand bestäuben',
  LAGERN: 'Trocknen, Lagern und Tauschen',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
