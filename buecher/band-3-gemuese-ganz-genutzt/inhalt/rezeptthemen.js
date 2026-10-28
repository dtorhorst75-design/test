// Themen für das Rezeptregister von Band 3. Die Rezepte geben ihr Thema selbst an (Feld „thema“).
const T = {
  ERK: 'Erkältung, Husten und Hals',
  BAUCH: 'Bauch und Verdauung',
  WICKEL: 'Wickel und Auflagen',
  HAUT: 'Haut und Pflege',
  SALAT: 'Salate, Rohkost und Aufstriche',
  SUPPE: 'Suppen und Eintöpfe',
  HAUPT: 'Hauptgerichte und Beilagen',
  BACKEN: 'Kuchen, Brot und Süßes',
  EINMACHEN: 'Einmachen, Fermentieren und Vorrat',
  VERWERTEN: 'Resteküche: Schalen, Blätter und Strünke',
  SAFT: 'Säfte und Getränke',
  PFLEGE: 'Haushalt',
  GARTEN: 'Garten',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
