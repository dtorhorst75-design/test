const { R, T } = require('./_hilfe.js');
const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
module.exports = {
  nr: 13, id: 'eigener-plan', teil: 'plan', titel: 'Vorlagen für dein Gartenjahr', kurz: 'Vorlagen',
  bloecke: [
    'Die folgenden Tabellen kannst du direkt in Word ausfüllen oder ausdrucken und mit dem Bleistift ergänzen. Jedes Jahr eine neue Seite – nach ein paar Jahren hast du deinen eigenen Kalender.',
    R({ titel: 'Den eigenen Jahresplan machen', info: 'Im Januar', thema: T.PLAN, zutaten: ['dieses Heft, das Gartentagebuch vom letzten Jahr', 'die Hefte 2 (Kalender) und 4 (Saatgut)'], schritte: ['Lies im Gartentagebuch nach, was im letzten Jahr gut und was schlecht lief.', 'Trag in die Tabelle „Mein Jahresplan“ für jeden Monat ein, was du säen, pflanzen, ernten und einmachen willst.', 'Plane bewusst nur so viel, wie du schaffst – lieber ein Beet gut als drei halb.', 'Häng den Plan dorthin, wo du ihn jeden Tag siehst.'] }),
    { h2: 'Mein Jahresplan' },
    { tabelle: [['Monat', 'Säen und pflanzen', 'Ernten und Vorrat', 'Notizen'], ...MONATE.map((m) => [`**${m}**`, ' ', ' ', ' '])], breiten: [1500, 2600, 2600, 2370] },
    { h2: 'Meine Ernte' },
    { tabelle: [['Gemüse oder Obst', 'Sorte', 'Gesät oder gepflanzt', 'Geerntet (kg oder Stück)', 'Wieder anbauen?'], ...Array.from({ length: 12 }, () => [' ', ' ', ' ', ' ', ' '])], breiten: [2200, 1800, 1700, 1900, 1470] },
    { h2: 'Mein Vorratsregal' },
    { tabelle: [['Was', 'Wie haltbar gemacht', 'Gläser oder Menge', 'Hat gereicht bis …'], ...Array.from({ length: 10 }, () => [' ', ' ', ' ', ' '])], breiten: [2500, 2300, 2000, 2270] },
    { h2: 'Mein Saatgut' },
    { tabelle: [['Gemüse', 'Sorte', 'Erntejahr', 'Keimprobe (von 10)', 'Besonderheit'], ...Array.from({ length: 10 }, () => [' ', ' ', ' ', ' ', ' '])], breiten: [1900, 1900, 1300, 1800, 2170] },
    { h2: 'Was die Natur bei mir zeigt' },
    'Trag ein, wann diese Zeichen in deinem Garten zu sehen sind (Heft 2). Nach ein paar Jahren weißt du genau, wann bei dir die Zeit für Radieschen, Kartoffeln und Bohnen ist.',
    { tabelle: [['Zeichen', 'Jahr 1', 'Jahr 2', 'Jahr 3'],
      ['Forsythie blüht', ' ', ' ', ' '], ['Kirsche blüht', ' ', ' ', ' '], ['Löwenzahn in voller Blüte', ' ', ' ', ' '], ['Apfel blüht', ' ', ' ', ' '], ['Holunder blüht', ' ', ' ', ' '], ['Linde blüht', ' ', ' ', ' '], ['Holunderbeeren reif', ' ', ' ', ' '], ['Erster Frost', ' ', ' ', ' ']], breiten: [3200, 1950, 1950, 1970] },
  ],
};
