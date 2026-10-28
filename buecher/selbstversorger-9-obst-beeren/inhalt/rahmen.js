// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 9.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 9: Obstbäume und Beeren';

const haftung = {
  ...heft1.vorne[0],
  bloecke: heft1.vorne[0].bloecke.map((b) => (b.warnung ? { ...b, zeilen: [
    '- **Leitern:** Für Schnitt und Ernte eine standsichere Obstleiter (Dreibein) verwenden, nie auf wackelige Stühle oder Kisten steigen. Nicht allein arbeiten, nicht bei Nässe, Wind oder Frost.',
    '- **Werkzeug:** Sägen und Scheren sind scharf. Handschuhe und bei Arbeiten über Kopf eine Schutzbrille tragen. Große Äste, Kettensäge und Arbeiten an hohen Bäumen gehören in die Hand von Fachleuten.',
    '- **Wespen und Bienen** beim Ernten von Fallobst und reifen Früchten: Vorsicht, besonders bei Insektengiftallergie. Notfallset griffbereit halten.',
    '- **Rhabarberblätter** und die **Kerne** von Steinobst und Äpfeln nicht essen – sie enthalten Oxalsäure bzw. Stoffe, aus denen Blausäure entstehen kann.',
    '- **Nachbarrecht:** Grenzabstände für Bäume und Sträucher regelt das Nachbarrecht deines Bundeslandes. Frag vor dem Pflanzen nach.',
    '- **Tetanus:** Impfschutz prüfen, kleine Wunden gut reinigen.',
  ] } : b)),
};

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Wer einen Baum pflanzt, denkt an morgen',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-9',
  kurz: 'Heft-9',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Heftes nach Themen geordnet. Das Obstjahr im Überblick steht im letzten Kapitel.',

  impressum: heft1.impressum.map((z) => z.replace(heft1.untertitel, UNTERTITEL)),

  abschnitte: [
    ['baeume', 'Obstbäume', 'Auswählen, pflanzen, schneiden, pflegen'],
    ['beeren', 'Beeren', 'Johannisbeeren, Stachelbeeren, Himbeeren, Brombeeren, Heidelbeeren, Erdbeeren und Rhabarber'],
    ['jahr', 'Das Obstjahr', 'Was du wann tust'],
  ],

  vorne: [
    haftung,
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Gemüse säst du jedes Jahr neu. Obstbäume und Beerensträucher pflanzt du einmal – und erntest zehn, zwanzig, bei einem Hochstamm sogar fünfzig Jahre und länger. Wer einen Apfelbaum pflanzt, pflanzt ihn auch für seine Kinder und Enkel.',
        'Schon zwei Beerensträucher und ein kleiner Apfelbaum verändern deine Vorräte: Johannisbeergelee, Apfelmus, Apfelringe, Kompott – alles, was du in den Heften 5 bis 7 gelernt hast, bekommt jetzt Nachschub aus dem eigenen Garten.',
        'In diesem Heft lernst du, wie du die richtigen Bäume und Sträucher auswählst, sie pflanzt, schneidest und pflegst. Wildobst wie Holunder, Aronia, Felsenbirne und Sanddorn findest du in „Was die Natur uns schenkt“, Band 2.',
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
          'Pomologen-Verein e. V.: alte und regionale Obstsorten (pomologen-verein.de).',
          'Bund Deutscher Baumschulen (BdB): Pflanzen und Pflegen von Obstgehölzen.',
          'Bundesamt für Naturschutz (BfN) und NABU: Streuobstwiesen und Obstsorten (nabu.de).',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft geht es um Selbstversorgung auf kleinstem Raum: **Selbstversorgung auf dem Balkon** – wenig Platz, viel Ernte.',
      ],
    },
  ],
};
