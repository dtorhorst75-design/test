// Themen für das Rezeptregister von Band 2. Die Rezepte geben ihr Thema selbst an (Feld „thema“).
const T = {
  ERK: 'Erkältung, Husten und Hals',
  BAUCH: 'Bauch und Verdauung',
  HAUT: 'Haut und Pflege',
  TEE: 'Tees für jeden Tag',
  MARMELADE: 'Marmelade, Gelee und Mus',
  SAFT: 'Säfte, Sirup und Getränke',
  SUESS: 'Kuchen, Desserts und Süßes',
  HERZHAFT: 'Herzhafte Gerichte und Salate',
  VORRAT: 'Vorrat: Dörren, Nüsse, Mehl und Öl',
  PFLEGE: 'Haushalt und Waschen',
  GARTEN: 'Garten',
};
module.exports = { ...T, REIHENFOLGE: Object.values(T), themen: {} };
