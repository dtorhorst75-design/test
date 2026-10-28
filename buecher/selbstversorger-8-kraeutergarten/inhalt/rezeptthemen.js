// Themen für das Register von Heft 8. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  ANBAU: 'Anlegen und Pflanzen',
  PFLEGE: 'Vermehren, Schneiden, Überwintern',
  ERNTE: 'Ernten und Haltbarmachen',
  APOTHEKE: 'Hausapotheke',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
