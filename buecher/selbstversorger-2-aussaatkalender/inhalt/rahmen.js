// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 2.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 2: Aussaat- und Pflanzkalender';

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Alles zu seiner Zeit',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-2',
  kurz: 'Heft-2',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Heftes nach Themen geordnet. Den großen Kalender für alle Gemüse findest du im letzten Kapitel.',

  impressum: heft1.impressum.map((z) => z.replace(heft1.untertitel, UNTERTITEL)),

  abschnitte: [
    ['saatgut', 'Saatgut und Keimen', 'Was Samen brauchen, um zu keimen'],
    ['fensterbank', 'Vorziehen', 'Der Anzuchtkalender für die Fensterbank'],
    ['beet', 'Im Beet', 'Staffelsaat, Vor- und Nachkultur, Wintergemüse'],
    ['planen', 'Planen', 'Pflanzenfamilien und Fruchtfolge'],
    ['kalender', 'Der große Kalender', 'Alle Gemüse auf einen Blick'],
  ],

  vorne: [
    heft1.vorne[0],
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Im ersten Heft hast du dein erstes Beet angelegt und die leichten Zwölf gesät. In diesem Heft geht es um die Frage, die jede Gärtnerin das ganze Jahr begleitet: **Wann säe und pflanze ich was?**',
        'Wer das weiß, erntet nicht nur im Sommer, sondern vom Frühjahr bis in den Winter. Er zieht auf der Fensterbank nicht zu früh vor, lässt kein Beet leer stehen und plant die Fruchtfolge so, dass der Boden gesund bleibt. Dafür findest du hier Kalender, Tabellen und einfache Faustregeln – und am Ende den großen Kalender für über zwanzig Gemüse.',
        'Ein Kalender ist ein Wegweiser, kein Gesetz. **Der Boden und das Wetter haben immer das letzte Wort.** Ist es im April noch kalt und nass, wartest du. Ist der März mild, darfst du früher anfangen. Schreib in dein Gartentagebuch, was bei dir wann gelingt – nach ein paar Jahren hast du deinen eigenen Kalender.',
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
          'Bundeszentrum für Ernährung (BZfE): Gemüse selbst anbauen; Saisonkalender (bzfe.de).',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
          'Heistinger, A.: *Handbuch Bio-Gemüse*. Löwenzahn.',
          'Arche Noah und Verein zur Erhaltung der Nutzpflanzenvielfalt (VEN): samenfeste Sorten und Saatgut.',
          'Deutscher Wetterdienst (DWD): phänologischer Kalender und Bodentemperaturen (dwd.de).',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft geht es unter die Erde: **Kompost und Boden** – wie du deinen Boden Jahr für Jahr besser machst, mit Kompost, Mulch, Pflanzenjauchen und Gründüngung.',
      ],
    },
  ],
};
