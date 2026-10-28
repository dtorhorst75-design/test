// Themen für das Register von Heft 7. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  ORT: 'Den Lagerort vorbereiten',
  EINLAGERN: 'Einlagern',
  DRAUSSEN: 'Lagern im Freien',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
