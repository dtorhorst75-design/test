// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 3.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 3: Kompost und Boden';

const haftung = {
  ...heft1.vorne[0],
  bloecke: heft1.vorne[0].bloecke.map((b) => (b.warnung ? { ...b, zeilen: [
    '- **Handschuhe tragen** beim Umsetzen von Kompost und beim Arbeiten mit Erde. Im Boden und im Kompost leben auch Tetanuserreger – lass deinen Impfschutz prüfen.',
    '- **Staub aus trockenem Kompost, Laub und Gesteinsmehl** nicht einatmen. An windigen Tagen arbeiten oder eine Maske tragen, besonders bei Allergien und Asthma. Schimmeliges Material nicht aufwirbeln.',
    '- **Holzasche** nur aus unbehandeltem, trockenem Holz und erst völlig abgekühlt verwenden – Glut hält sich oft tagelang. Keine Asche von Kohle, Briketts, Grillanzündern, lackiertem oder beschichtetem Holz.',
    '- **Jauchen und Brühen** beschriften und abdecken, sodass Kinder und Tiere nicht hineinfallen oder davon trinken können. Nur an die Wurzel gießen, nicht über Blattgemüse kurz vor der Ernte.',
    '- **Regentonnen und Jauchefässer** immer mit einem festen Deckel verschließen.',
    '- Gemüse vor dem Essen gründlich waschen.',
  ] } : b)),
};

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Was du dem Boden gibst, gibt er dir zurück',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-3',
  kurz: 'Heft-3',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Heftes nach Themen geordnet. Das Bodenjahr im Überblick steht im letzten Kapitel.',

  impressum: heft1.impressum.map((z) => z.replace(heft1.untertitel, UNTERTITEL)),

  abschnitte: [
    ['boden', 'Der Boden', 'Was ihn lebendig macht und wie du ihn verbesserst'],
    ['kompost', 'Kompost', 'Der Haufen übers Jahr, Laubkompost, Wurmkiste'],
    ['beete', 'Beete aus dem eigenen Garten', 'Hügelbeet, Hochbeet und Mulch'],
    ['jauchen', 'Jauchen und Brühen', 'Dünger und Pflanzenschutz aus Pflanzen'],
    ['jahr', 'Das Bodenjahr', 'Was du wann für deinen Boden tust'],
  ],

  vorne: [
    haftung,
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'In Heft 1 hast du dein erstes Beet angelegt und den ersten Komposthaufen aufgesetzt. In diesem Heft gehen wir tiefer – im wahrsten Sinn des Wortes. Denn alles, was du erntest, kommt aus dem Boden. Und ein guter Boden ist kein Zufall, sondern das Ergebnis von Jahren, in denen du ihm mehr zurückgibst, als du ihm nimmst.',
        'Die gute Nachricht: Dafür brauchst du nichts zu kaufen. Laub, Grasschnitt, Gemüsereste, Äste, Brennnesseln – das alles fällt in jedem Garten an. Daraus machst du Kompost, Mulch, Hügelbeete und Pflanzenjauchen. Kein Sack Blumenerde, kein Kunstdünger, kein Torf.',
        'Du lernst, wie du den Kompost durchs Jahr begleitest, Laub in feinste Erde verwandelst, eine Wurmkiste für Balkon oder Küche baust, Äste und Rasensoden zu einem Hügelbeet schichtest und welche Pflanzenbrühen wirklich etwas bringen.',
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
          'Umweltbundesamt (UBA): Kompostieren im Garten; Torffrei gärtnern (umweltbundesamt.de).',
          'Bundesgütegemeinschaft Kompost (BGK): Kompost richtig anwenden (kompost.de).',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
          'Heistinger, A.: *Handbuch Bio-Gemüse*. Löwenzahn.',
          'Robert Koch-Institut (RKI) und STIKO: Tetanus-Impfempfehlungen (rki.de).',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft geht es um die Zukunft deines Gartens im Tütchen: **Saatgut selbst gewinnen** – welche Gemüse dafür leicht sind, wann du erntest, wie du Samen reinigst, trocknest und lagerst.',
      ],
    },
  ],
};
