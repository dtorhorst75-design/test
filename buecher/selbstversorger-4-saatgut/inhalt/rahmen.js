// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 4.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 4: Saatgut selbst gewinnen';

const haftung = {
  ...heft1.vorne[0],
  bloecke: heft1.vorne[0].bloecke.map((b) => (b.warnung ? { ...b, zeilen: [
    '- **Bitterer Kürbis, bittere Zucchini, bittere Gurke: nicht essen!** Kürbisgewächse aus eigenem Saatgut können sich mit Zierkürbissen gekreuzt haben und giftige Bitterstoffe (Cucurbitacine) bilden. Schon kleine Mengen können zu schweren Magen-Darm-Vergiftungen führen. Vor dem Kochen ein kleines Stück roh probieren – schmeckt es bitter: ausspucken und die ganze Frucht wegwerfen.',
    '- **Bohnensamen sind roh giftig** (Phasin). Saatgut-Bohnen außer Reichweite von Kindern aufbewahren.',
    '- **Chilis und scharfe Paprika** nur mit Handschuhen entkernen, danach nicht in die Augen fassen.',
    '- **Saatgut ist kein Lebensmittel.** Gebeiztes, gekauftes Saatgut nie essen oder an Tiere verfüttern; dein eigenes Saatgut klar beschriften und getrennt von Vorräten lagern.',
    '- Beim Ausdreschen und Sieben trockener Samenstände entsteht Staub – bei Allergien draußen arbeiten oder eine Maske tragen.',
  ] } : b)),
};

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Aus einem Korn wird eine Ernte – und wieder ein Korn',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-4',
  kurz: 'Heft-4',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Heftes nach Themen geordnet. Den Saatgutkalender findest du im letzten Kapitel.',

  impressum: heft1.impressum.map((z) => z.replace(heft1.untertitel, UNTERTITEL)),

  abschnitte: [
    ['grundlagen', 'Grundlagen', 'Samenfest, Selbst- und Fremdbefruchter, die richtigen Mutterpflanzen'],
    ['leicht', 'Die leichten Samen', 'Bohnen, Erbsen, Tomaten, Paprika, Salat und Kräuter'],
    ['fortgeschritten', 'Für Fortgeschrittene', 'Kürbisgewächse von Hand bestäuben, Knollen und Zwiebeln, Zweijährige'],
    ['lagern', 'Trocknen, Lagern, Tauschen', 'Damit die Samen viele Jahre keimen'],
    ['jahr', 'Das Saatgutjahr', 'Was du wann erntest'],
  ],

  vorne: [
    haftung,
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Bis vor wenigen Generationen hat jede Bäuerin und jede Gärtnerin ihr Saatgut selbst gewonnen. Die besten Bohnen, die schönsten Tomaten, der Salat, der am längsten nicht schoss – von ihnen wurden Samen aufgehoben und im nächsten Frühjahr wieder gesät. So sind über Jahrhunderte die Sorten entstanden, die genau in ihre Gegend passen.',
        'Mit eigenem Saatgut schließt sich der Kreis der Selbstversorgung. Du sparst Geld, wirst unabhängiger, und deine Pflanzen gewöhnen sich von Jahr zu Jahr ein Stück mehr an deinen Garten. Und du hilfst, alte Sorten zu erhalten, die sonst verloren gehen.',
        'Fang mit den leichten Samen an: Bohnen, Erbsen, Tomaten und Salat. Die gelingen fast immer. Kürbisgewächse und Zweijährige kommen später dazu.',
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
          'Heistinger, A., Arche Noah, Pro Specie Rara: *Handbuch Samengärtnerei*. Löwenzahn.',
          'Verein zur Erhaltung der Nutzpflanzenvielfalt (VEN): Anleitungen zur Saatgutgewinnung (nutzpflanzenvielfalt.de).',
          'Bundesinstitut für Risikobewertung (BfR): Bitterstoffe (Cucurbitacine) in Zucchini und Kürbis (bfr.bund.de).',
          'Bundeszentrum für Ernährung (BZfE): Phasin in rohen Bohnen (bzfe.de).',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft geht es darum, die Ernte haltbar zu machen: **Einkochen und Einmachen** – was du in welchem Monat einkochst und wie es sicher gelingt.',
      ],
    },
  ],
};
