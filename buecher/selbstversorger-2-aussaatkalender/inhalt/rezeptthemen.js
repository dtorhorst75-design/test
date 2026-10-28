// Themen für das Register von Heft 2. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  SAATGUT: 'Saatgut und Keimen',
  VORZIEHEN: 'Vorziehen auf der Fensterbank',
  BEET: 'Säen und Pflanzen im Beet',
  PLANEN: 'Planen: Fruchtfolge und Beetbelegung',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
