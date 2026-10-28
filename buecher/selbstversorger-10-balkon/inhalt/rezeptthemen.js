// Themen für das Register von Heft 10. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  PLANEN: 'Planen und Einrichten',
  PFLANZEN: 'Pflanzen und Säen',
  PFLEGE: 'Gießen, Düngen, Pflegen',
  FENSTER: 'Fensterbank im Winter',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
