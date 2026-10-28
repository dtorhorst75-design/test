// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 11.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 11: Das Gartenjahr auf einen Blick';

const haftung = {
  ...heft1.vorne[0],
  bloecke: heft1.vorne[0].bloecke.map((b) => (b.warnung ? { ...b, zeilen: [
    ...b.zeilen,
    '- **Für Einkochen, Fermentieren, Trocknen, Lagern und die Hausapotheke** gelten die ausführlichen Sicherheitsregeln der Hefte 5 bis 8. Dieses Heft ist eine Übersicht und ersetzt sie nicht.',
  ] } : b)),
};

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Alles hat seine Zeit',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-11',
  kurz: 'Heft-11',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Dieses Heft ist eine Übersicht. Die ausführlichen Anleitungen stehen in den Heften 1 bis 10; hier findest du die Vorlagen zum Ausfüllen.',

  impressum: heft1.impressum.map((z) => z.replace(heft1.untertitel, UNTERTITEL)),

  abschnitte: [
    ['q1', 'Januar bis März', 'Planen, vorziehen, anfangen'],
    ['q2', 'April bis Juni', 'Säen, pflanzen, die ersten Ernten'],
    ['q3', 'Juli bis September', 'Ernten, einmachen, Wintergemüse pflanzen'],
    ['q4', 'Oktober bis Dezember', 'Einlagern, Boden schützen, ruhen'],
    ['plan', 'Dein eigenes Gartenjahr', 'Vorlagen zum Ausfüllen'],
  ],

  vorne: [
    haftung,
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du bis hierher gekommen bist!',
        'Zehn Hefte lang ging es Stück für Stück: das erste Beet, der Kalender, der Boden, das Saatgut, das Einkochen, das Trocknen und Fermentieren, der Vorratskeller, die Kräuter, das Obst und der Balkon. In diesem letzten Heft kommt alles zusammen – **Monat für Monat, jeder auf einer Seite**.',
        'Für jeden Monat findest du, was im Garten, auf dem Balkon, bei Obst und Kräutern, beim Boden, im Vorrat und beim Saatgut zu tun ist, was gerade frisch zu ernten ist und – wenn die Zeit knapp ist – die **drei wichtigsten Dinge**. Hinter jeder Aufgabe steht in Klammern das Heft, in dem du die Anleitung findest (H1 = Heft 1, B1 = „Was die Natur uns schenkt“, Band 1).',
        'Am Ende gibt es Vorlagen, in die du deinen eigenen Plan, deine Ernten und deine Erfahrungen einträgst. Denn das beste Gartenjahr ist das, das zu deinem Garten passt.',
        'Zurück zu den Basics – Stück für Stück.',
        'Herzlich,',
        '*Diana*',
      ],
    },
    {
      titel: 'Die Reihe auf einen Blick',
      bloecke: [
        { tabelle: [['Heft', 'Thema'],
          ['**H1**', 'Der erste Gemüsegarten'],
          ['**H2**', 'Aussaat- und Pflanzkalender'],
          ['**H3**', 'Kompost und Boden'],
          ['**H4**', 'Saatgut selbst gewinnen'],
          ['**H5**', 'Einkochen und Einmachen'],
          ['**H6**', 'Trocknen, Dörren und Fermentieren'],
          ['**H7**', 'Vorratskeller und Lagerung'],
          ['**H8**', 'Kräutergarten und Hausapotheke vom Balkon'],
          ['**H9**', 'Obstbäume und Beeren'],
          ['**H10**', 'Selbstversorgung auf dem Balkon'],
          ['**H11**', 'Das Gartenjahr auf einen Blick'],
        ], breiten: [1500, 7570] },
        'Aus der Reihe **„Was die Natur uns schenkt“**: B1 Kräuter & Wildpflanzen, B2 Bäume, Sträucher & Wildobst, B3 Gemüse ganz genutzt, B4 Reinigung, B5 Körperpflege, B6 Natürliche Schminke.',
      ],
    },
  ],

  hinten: [
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        { punkte: [
          'Die Quellen der Hefte 1 bis 10 dieser Reihe.',
          'Deutscher Wetterdienst (DWD): phänologische Jahreszeiten (dwd.de).',
          'Bundeszentrum für Ernährung (BZfE): Saisonkalender für Obst und Gemüse (bzfe.de).',
        ] },
        { h2: 'Zum Schluss' },
        'Selbstversorgung ist kein Ziel, das man an einem Tag erreicht. Sie ist ein Weg, den man jedes Jahr ein Stück weitergeht: ein Beet mehr, ein Glas mehr im Regal, ein Tütchen eigener Samen mehr in der Dose. Danke, dass du diesen Weg mit mir gegangen bist.',
      ],
    },
  ],
};
