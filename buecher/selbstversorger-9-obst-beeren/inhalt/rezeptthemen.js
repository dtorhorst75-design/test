// Themen für das Register von Heft 9. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  PLANEN: 'Planen und Pflanzen',
  SCHNITT: 'Schneiden',
  PFLEGE: 'Pflegen und Schützen',
  VERMEHREN: 'Vermehren',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
