// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 7.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 7: Vorratskeller und Lagerung';

const haftung = {
  ...heft1.vorne[0],
  bloecke: heft1.vorne[0].bloecke.map((b) => (b.warnung ? { ...b, zeilen: [
    '- **Kartoffeln:** Grüne Stellen, Keime und Augen enthalten giftiges Solanin. Großzügig wegschneiden, stark ergrünte oder bitter schmeckende Knollen wegwerfen. Kartoffeln immer **dunkel** lagern.',
    '- **Schimmel und Fäulnis:** Angefaultes und Verschimmeltes sofort aussortieren. Schimmelige Äpfel, Kürbisse und Wurzeln nicht „ausschneiden und essen“ – Schimmelgifte können sich im ganzen Stück verteilen.',
    '- **Bitterer Kürbis oder bittere Zucchini:** nicht essen (giftige Cucurbitacine, siehe Heft 4).',
    '- **Schimmel an Kellerwänden** ist ein Gesundheitsrisiko. Lebensmittel nicht in einem Raum mit Wandschimmel lagern; große Flächen von Fachleuten sanieren lassen.',
    '- **Erdmieten und Gruben** abdecken und sichern, damit niemand hineinfällt. Kinder nicht unbeaufsichtigt in Kellern und an Gruben.',
    '- **Mäuse und Ratten** von Vorräten fernhalten (Gitter, dichte Kisten); angefressene Vorräte wegwerfen und gründlich reinigen.',
  ] } : b)),
};

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Kühl, dunkel, feucht – wie früher',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-7',
  kurz: 'Heft-7',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Heftes nach Themen geordnet. Die große Lagertabelle steht im letzten Kapitel.',

  impressum: heft1.impressum.map((z) => z.replace(heft1.untertitel, UNTERTITEL)),

  abschnitte: [
    ['keller', 'Der Lagerort', 'Was Gemüse und Obst im Winter brauchen'],
    ['einlagern', 'Einlagern', 'Kartoffeln, Äpfel, Wurzeln, Kürbis, Zwiebeln und Kohl'],
    ['draussen', 'Ohne Keller', 'Erdmiete, Wintergemüse im Beet, Balkon und Garage'],
    ['jahr', 'Auf einen Blick', 'Die große Lagertabelle und das Lagerjahr'],
  ],

  vorne: [
    haftung,
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Früher hatte jedes Haus einen Keller, in dem es im Winter nach Äpfeln roch. In Holzkisten lagen die Kartoffeln, in Sand die Möhren und Rüben, an der Decke hingen Zwiebelzöpfe und Kohlköpfe. Kein Strom, keine Gefriertruhe, kein Einkochglas – und trotzdem frisches Gemüse bis ins Frühjahr.',
        'Das Lagern ist die einfachste und günstigste Art, Vorräte zu halten. Es kommt nur auf drei Dinge an: die richtige **Temperatur**, die richtige **Luftfeuchtigkeit** und den richtigen **Nachbarn**. Und auch ohne Naturkeller gibt es Wege: eine Erdmiete im Garten, eine Kiste in der Garage, Gemüse, das einfach im Beet überwintert.',
        'Zurück zu den Basics – Stück für Stück.',
        'Herzlich,',
        '*Diana*',
      ],
    },
  ],

  hinten: [
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        { punkte: [
          'Bundeszentrum für Ernährung (BZfE): Obst und Gemüse richtig lagern; Solanin in Kartoffeln (bzfe.de).',
          'Bundesinstitut für Risikobewertung (BfR): Solanin; Schimmel auf Lebensmitteln (bfr.bund.de).',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
          'Umweltbundesamt (UBA): Schimmel im Innenraum (umweltbundesamt.de).',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft geht es um die Kräuter: **Kräutergarten und Hausapotheke vom Balkon** – welche Kräuter du wo anbaust, wann du sie erntest und was du daraus machst.',
      ],
    },
  ],
};
