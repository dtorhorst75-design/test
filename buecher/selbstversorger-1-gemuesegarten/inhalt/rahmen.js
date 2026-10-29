// Titelei, Grundlagen (vorne) und Anhang (hinten) für die Reihe „Stück für Stück Selbstversorger“, Heft 1.
const band1 = require('../../band-1-kraeuter-wildpflanzen/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 1: Der erste Gemüsegarten';

module.exports = {
  titel: 'Stück für Stück Selbstversorger',
  untertitel: UNTERTITEL,
  motto: 'Spaten, Samen, Kompost – zurück zu den Basics',
  autorin: 'Diana Bittenbinder',
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-1',
  kurz: 'Heft-1',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Heftes nach Themen geordnet. Den Jahreskalender findest du im letzten Kapitel.',

  impressum: band1.impressum.map((z) => z
    .replace('Was die Natur uns schenkt – Band 1: Kräuter & Wildpflanzen', `Stück für Stück Selbstversorger – ${UNTERTITEL}`)
    .replace('Texte und Pflanzenzeichnungen wurden', 'Die Texte wurden'))
    .map((z) => (z.startsWith('**Wichtiger Hinweis:**') ? '**Wichtiger Hinweis:** Bitte beachte den Haftungsausschluss auf den folgenden Seiten. Die Inhalte dieses Heftes wurden sorgfältig recherchiert. Sie dienen der allgemeinen Information. Wer die beschriebenen Methoden anwendet, tut dies auf eigene Verantwortung. Autorin und Verlag übernehmen keine Haftung für Schäden, die aus der Anwendung der beschriebenen Anleitungen entstehen.' : z)),

  abschnitte: [
    ['planen', 'Planen', 'Platz, Werkzeug und die richtigen Gemüse'],
    ['boden', 'Boden', 'Boden kennenlernen, Beete anlegen, Kompost und Pflanzendünger'],
    ['saeen', 'Säen und Pflanzen', 'Vorziehen, Direktsaat, Auspflanzen'],
    ['pflege', 'Pflegen', 'Gießen, Hacken, Mulchen, Schnecken und Co.'],
    ['ernte', 'Ernten und das Gartenjahr', 'Wann was reif ist und was du wann tust'],
  ],

  vorne: [
    {
      titel: 'Bevor du loslegst: Haftungsausschluss',
      bloecke: [
        'Bitte lies diese Seite, bevor du den Spaten in die Hand nimmst.',
        { h2: 'Ein Ratgeber aus der Praxis' },
        'Dieses Heft habe ich aus freien Stücken, nach bestem Wissen und Gewissen und mit großer Sorgfalt geschrieben. Es ist ein **Ratgeber** für Gartenanfängerinnen und -anfänger mit einfachen, altbewährten Methoden.',
        '**Ich bin keine ausgebildete Gärtnerin.** Ich gebe hier weiter, was ich gelernt, ausprobiert und aus Fachliteratur zusammengetragen habe – sorgfältig, aber als Laiin. Boden, Klima und Lage sind in jedem Garten anders; die Zeitangaben gelten für mittlere Lagen in Deutschland. In warmen Gegenden geht es früher los, im Bergland später.',
        { h2: 'Sicher gärtnern' },
        { warnung: 'Die wichtigsten Regeln', zeilen: [
          '- **Kartoffeln:** Kraut, Beeren, Keime und grüne Stellen der Knollen sind **giftig** (Solanin). Grüne Stellen großzügig wegschneiden, Kinder nicht an die Beeren lassen.',
          '- **Bohnen** sind **roh giftig** (Phasin). Grüne Bohnen und Bohnenkerne immer mindestens 10 Minuten kochen.',
          '- **Regentonnen** immer mit einem festen **Deckel** verschließen – für kleine Kinder sind sie lebensgefährlich.',
          '- **Gartenarbeit und Tetanus:** Lass deinen Impfschutz prüfen. Kleine Wunden gut reinigen, bei Gartenarbeit Handschuhe tragen.',
          '- **Pflanzenjauchen** nur an die Wurzel gießen, nicht über Blattgemüse kurz vor der Ernte. Gemüse vor dem Essen gründlich waschen.',
          '- **Rücken schonen:** aus den Knien heben, Pausen machen, nicht stundenlang gebückt arbeiten.',
        ] },
        { h2: 'Deine Verantwortung' },
        'Du arbeitest im Garten **auf eigene Gefahr und eigene Verantwortung**. Ob etwas gelingt, hängt von Wetter, Boden und vielem mehr ab – auch erfahrenen Gärtnerinnen missrät mal eine Ernte. Prüfe vor dem Anlegen eines Beetes, ob im Boden Leitungen liegen, und frage im Mietgarten oder Kleingarten vorher nach, was erlaubt ist.',
        { h2: 'Haftung' },
        'Alle Angaben wurden sorgfältig zusammengestellt. Trotzdem kann ich keine Gewähr für Richtigkeit, Vollständigkeit und Erfolg übernehmen. Soweit gesetzlich zulässig, übernehmen Autorin und Verlag **keine Haftung** für gesundheitliche Schäden, Sach- oder Ernteschäden oder sonstige Schäden, die durch die Anwendung der beschriebenen Methoden entstehen.',
        { h2: 'Disclaimer (English)' },
        { links: '*The author is not a trained gardener. This booklet is a practical guide for beginners for general information only. Results depend on soil, climate and weather. Some garden plants are poisonous in parts or when raw (e.g. potato foliage and green tubers, raw beans). Keep water butts covered and out of reach of children. To the fullest extent permitted by law, the author and publisher disclaim any liability for injury, illness, loss or damage arising from the use of the information in this booklet.*' },
      ],
    },
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du da bist!',
        'Selbstversorger wird man nicht an einem Wochenende. Man wird es **Stück für Stück**: erst ein Beet, dann ein zweites, dann der Kompost, dann die eigenen Samen. Genau so ist diese Reihe aufgebaut – in kleinen Heften, jedes zu einem Thema, und in jedem steht vor allem eins: **Wann tust du was?**',
        'In diesem ersten Heft geht es um den Anfang: ein kleiner Gemüsegarten mit Gemüse, das fast immer gelingt. Du brauchst dafür keine teuren Geräte, keinen Kunstdünger und keine Spritzmittel. Ein Spaten, eine Hacke, eine Gießkanne, guter Kompost und ein bisschen Geduld – mehr haben unsere Großeltern auch nicht gehabt.',
        'Ich dünge in diesem Heft **rein pflanzlich**: mit Kompost, Pflanzenjauchen, Mulch und Gründüngung. Das ist günstig, schließt den Kreislauf im eigenen Garten und funktioniert seit Jahrhunderten.',
        'Fang klein an. Ein Beet, das du gut pflegst, bringt mehr als drei, die dir über den Kopf wachsen.',
        'Zurück zu den Basics – Stück für Stück.',
        'Herzlich,',
        '*Diana*',
      ],
    },
    {
      titel: 'Das Werkzeug: weniger ist mehr',
      bloecke: [
        'Kauf lieber wenige, gute Werkzeuge als viele billige. Gutes Werkzeug mit Holzstiel hält ein Leben lang – oft findest du es gebraucht auf Flohmärkten oder in Kleinanzeigen.',
        { tabelle: [['Werkzeug', 'Wofür', 'Brauchst du es?'],
          ['**Spaten**', 'Beete anlegen, Rasen abstechen, Pflanzlöcher', 'ja'],
          ['**Grabegabel**', 'Boden lockern, ohne ihn umzudrehen; Kartoffeln ernten', 'ja'],
          ['**Hacke** (Ziehhacke oder Pendelhacke)', 'Unkraut entfernen, Boden oben lockern', 'ja'],
          ['**Rechen** (Harke)', 'Beet glatt ziehen, Saatrillen ziehen', 'ja'],
          ['**Pflanzkelle**', 'Jungpflanzen setzen', 'ja'],
          ['**Gießkanne** mit Brause', 'gießen, ohne Samen wegzuspülen', 'ja'],
          ['**Pflanzschnur** und zwei Stöcke', 'gerade Reihen', 'ja – selbst gemacht'],
          ['Schubkarre', 'Kompost und Mulch fahren', 'später'],
          ['Regentonne mit Deckel', 'Regenwasser sammeln', 'sehr sinnvoll'],
        ], breiten: [2800, 4300, 1970] },
        { h2: 'Werkzeug pflegen' },
        { punkte: ['Nach der Arbeit Erde abkratzen und abbürsten – nicht nass in den Schuppen stellen.', 'Im Herbst Metallteile mit einer Drahtbürste säubern und dünn mit Leinöl einreiben, Holzstiele ebenso.', 'Spaten und Hacke ab und zu mit einer Feile nachschärfen – scharfes Werkzeug spart Kraft.'] },
      ],
    },
  ],

  hinten: [
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        { punkte: [
          'Bundeszentrum für Ernährung (BZfE): Gemüse selbst anbauen; Solanin in Kartoffeln; rohe Hülsenfrüchte (bzfe.de).',
          'Bundesinstitut für Risikobewertung (BfR): Solanin und Phasin in Lebensmitteln (bfr.bund.de).',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
          'Heistinger, A.: *Handbuch Bio-Gemüse*. Löwenzahn.',
          'Arche Noah und Verein zur Erhaltung der Nutzpflanzenvielfalt (VEN): samenfeste Sorten und Saatgut.',
        ] },
        { h2: 'Wie es weitergeht' },
        'In den nächsten Heften der Reihe geht es Stück für Stück weiter: Aussaat- und Pflanzkalender, Kompost und Boden, Saatgut selbst gewinnen, Einkochen, Trocknen und Fermentieren, Vorratskeller, Kräuter, Obst und Beeren, Selbstversorgung auf dem Balkon – und das Gartenjahr auf einen Blick.',
      ],
    },
  ],
};
