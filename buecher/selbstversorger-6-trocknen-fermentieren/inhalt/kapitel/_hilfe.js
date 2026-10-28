// Gemeinsame Hilfen für die Kapitel von Heft 6: Rezepte mit „Du brauchst“ / „So geht es“.
const R = (r) => ({ rezept: { zutatenTitel: 'Du brauchst', schritteTitel: 'So geht es', ...r } });
module.exports = { R, T: require('../rezeptthemen.js') };
