// Themen für das Register von Heft 1. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  PLANEN: 'Planen und Vorbereiten',
  BODEN: 'Boden, Kompost und Dünger',
  SAAT: 'Säen, Vorziehen und Pflanzen',
  PFLEGE: 'Gießen, Pflegen und Schützen',
  ERNTE: 'Ernten und Aufbewahren',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
