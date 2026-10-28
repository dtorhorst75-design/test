// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 10.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 10: Selbstversorgung auf dem Balkon';

const haftung = {
  ...heft1.vorne[0],
  bloecke: heft1.vorne[0].bloecke.map((b) => (b.warnung ? { ...b, zeilen: [
    '- **Gewicht:** Nasse Erde wiegt 1,5 bis 2 kg pro Liter. Ein großer Kübel bringt schnell 60 bis 100 kg auf die Waage. Frag bei Zweifeln an der Tragfähigkeit beim Vermieter oder einer Fachperson nach und stelle schwere Gefäße an die Hauswand, nicht an die Brüstung.',
    '- **Nichts darf herunterfallen:** Balkonkästen an der Brüstung mit geprüften Halterungen sicher befestigen, am besten auf der Innenseite. Bei Sturm Töpfe sichern oder hereinholen.',
    '- **Kinder:** Kästen, Kübel und Regale nicht so aufstellen, dass Kinder darauf klettern und über die Brüstung gelangen können.',
    '- **Wasser** darf nicht auf den Balkon darunter oder auf Passanten laufen – Untersetzer verwenden.',
    '- **Kartoffelkraut, -beeren und grüne Knollen, Tomatengrün** sind giftig. Bohnen nur gekocht essen.',
    '- **Keimsprossen** können Keime enthalten. Sauber arbeiten (Kapitel Fensterbank); für Schwangere, Kleinkinder, ältere und abwehrgeschwächte Menschen Sprossen vor dem Essen erhitzen.',
  ] } : b)),
};

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Wenig Platz, viel Ernte',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-10',
  kurz: 'Heft-10',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Heftes nach Themen geordnet. Das Balkonjahr steht im letzten Kapitel.',

  impressum: heft1.impressum.map((z) => z.replace(heft1.untertitel, UNTERTITEL)),

  abschnitte: [
    ['planen', 'Den Balkon planen', 'Licht, Gewicht, Gefäße und Erde'],
    ['anbau', 'Was auf dem Balkon wächst', 'Gemüse, Obst und Kräuter in Töpfen, Kästen und Säcken'],
    ['pflege', 'Pflegen', 'Gießen, Düngen, Bestäuben'],
    ['fenster', 'Die Fensterbank im Winter', 'Sprossen, Microgreens und Kräuter'],
    ['jahr', 'Das Balkonjahr', 'Was du wann tust'],
  ],

  vorne: [
    haftung,
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Du hast keinen Garten? Dann hast du vielleicht einen Balkon, eine Terrasse, ein sonniges Fensterbrett. Das reicht für mehr, als du denkst: Tomaten und Bohnen den ganzen Sommer, Salat und Radieschen im Frühjahr und Herbst, Kräuter für jeden Tag, Erdbeeren aus der Ampel – und im Winter frische Sprossen auf der Fensterbank.',
        'Satt wirst du von einem Balkon nicht. Aber du wirst jeden Tag etwas Frisches ernten, du lernst die Pflanzen kennen, und du merkst, wie viel Geschmack in einer Tomate steckt, die du selbst großgezogen hast. Viele, die heute einen großen Garten haben, haben genau so angefangen.',
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
          'Bundesinstitut für Risikobewertung (BfR): Keimlinge und Sprossen – Hygiene (bfr.bund.de).',
          'Bundeszentrum für Ernährung (BZfE): Gemüse auf Balkon und Terrasse (bzfe.de).',
          'Verbraucherzentrale und Mieterbund: Balkonbepflanzung und Mietrecht.',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im letzten Heft der Reihe bringen wir alles zusammen: **Das Gartenjahr auf einen Blick** – Garten, Balkon, Vorrat und Küche, Monat für Monat.',
      ],
    },
  ],
};
