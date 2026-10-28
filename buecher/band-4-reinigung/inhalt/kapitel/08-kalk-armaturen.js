const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 8, id: 'kalk-armaturen', teil: 'bad', titel: 'Kalk, Armaturen und Dusche', kurz: 'Kalk und Armaturen',
  bloecke: [
    'Kalk ist im Bad der Hauptgegner. Die gute Nachricht: Er löst sich zuverlässig mit Säure – Zitronensäure oder Essig.',
    R({ titel: 'Kalklöser-Spray', info: 'Für 500 ml', thema: [T.BAD, T.GRUND], zutaten: ['500 ml lauwarmes Wasser', '3 EL Zitronensäure-Pulver', 'Sprühflasche', 'Handschuhe'], schritte: ['Zitronensäure in **lauwarmem** (nicht heißem) Wasser auflösen.', 'In die Sprühflasche füllen und beschriften.', 'Auf verkalkte Flächen sprühen, 5 bis 10 Minuten einwirken lassen, abwischen, klar nachspülen.'], tipp: 'Nicht auf Marmor, Kalkstein, Terrazzo und emaillierte Wannen mit beschädigter Oberfläche. Bei vergoldeten oder gebürsteten Armaturen erst testen.' }),
    R({ titel: 'Duschkopf und Perlator entkalken', info: 'Für einen Duschkopf', thema: T.BAD, zutaten: ['Gefrierbeutel oder Schüssel', '250 ml Essig oder Zitronensäurelösung (1 EL auf 250 ml)', 'Gummiband, alte Zahnbürste'], schritte: ['Duschkopf abschrauben – oder einen Beutel mit der Lösung über den Duschkopf stülpen und mit dem Gummiband befestigen.', '1 bis 2 Stunden einwirken lassen.', 'Düsen mit der Zahnbürste abbürsten.', 'Gut durchspülen. Den Perlator am Wasserhahn genauso behandeln.'] }),
    R({ titel: 'Wasserkocher entkalken', info: 'Für einen Wasserkocher', thema: [T.BAD, T.KUECHE], zutaten: ['500 ml Wasser', '1 bis 2 EL Zitronensäure oder 100 ml Essig'], schritte: ['Wasser **handwarm** erwärmen (nicht kochen!), Zitronensäure einrühren.', '30 Minuten stehen lassen.', 'Ausgießen, zweimal mit frischem Wasser aufkochen und weggießen.'] }),
    { h2: 'Duschwand und Fliesen' },
    { punkte: ['Nach dem Duschen mit einem Abzieher das Wasser abziehen – so entsteht kaum noch Kalk.', 'Glaswände mit Essigwasser oder Kalklöser-Spray reinigen, mit einem Mikrofasertuch trocken polieren.', 'Duschvorhang bei 40 °C mit zwei Handtüchern und einem Schuss Essig waschen.'] },
    R({ titel: 'Badreiniger-Paste', info: 'Für Waschbecken und Wanne', thema: T.BAD, zutaten: ['4 EL Natron', '1 EL Kastanien-, Efeu- oder Waschnusssud', 'etwas Wasser'], schritte: ['Zu einer cremigen Paste verrühren.', 'Mit einem feuchten Schwamm auftragen und sanft reiben.', 'Gründlich nachspülen.'], tipp: 'Ersetzt Scheuermilch und kratzt nicht – auch für Acrylwannen geeignet.' }),
  ],
};
