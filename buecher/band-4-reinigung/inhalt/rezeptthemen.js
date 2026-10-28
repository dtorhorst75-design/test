// Themen für das Register von Band 4. Die Anleitungen geben ihr Thema selbst an (Feld „thema“).
const T = {
  GRUND: 'Grundmischungen zum Vorrätighalten',
  WASCHEN: 'Wäsche waschen und pflegen',
  FLECKEN: 'Flecken entfernen',
  KUECHE: 'Küche und Geschirr',
  BAD: 'Bad und WC',
  BODEN: 'Böden, Fenster und Oberflächen',
  MOEBEL: 'Möbel, Leder und Metall',
  LUFT: 'Gerüche, Luft und Schimmel',
  SCHAEDLINGE: 'Ungeziefer im Haus',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
