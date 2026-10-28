const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 10, id: 'fuesse-rasur', teil: 'bad', titel: 'Füße und Rasur', kurz: 'Füße und Rasur',
  bloecke: [
    { h2: 'Für die Füße' },
    R({ titel: 'Erfrischendes Fußbad', info: 'Für eine Anwendung', thema: T.BAD, zutaten: ['Fußwanne mit warmem Wasser (36 bis 38 °C)', '2 EL Salz', '1 EL Natron', 'eine Handvoll frische Pfefferminze oder 3 Tropfen Pfefferminzöl in 1 EL Salz'], schritte: ['Alles im Wasser auflösen.', 'Die Füße 10 bis 15 Minuten baden.', 'Gut abtrocknen, auch zwischen den Zehen.'] }),
    R({ titel: 'Fußbalsam mit Pfefferminze', info: 'Für 100 ml', thema: T.BAD, zutaten: ['40 g Sheabutter', '30 g Kokosöl', '20 g Olivenöl', '7 g Candelillawachs', '15 Tropfen Pfefferminzöl'], schritte: ['Butter, Öle und Wachs schmelzen.', 'Pfefferminzöl einrühren, abfüllen und fest werden lassen.', 'Abends auf die Füße auftragen, Baumwollsocken darüber.'], }),
    R({ titel: 'Hornhaut-Peeling', info: 'Für eine Anwendung', thema: T.BAD, zutaten: ['2 EL grobes Salz', '1 EL Olivenöl', 'Saft einer halben Zitrone'], schritte: ['Mischen und nach dem Fußbad auf die Fersen reiben.', 'Abspülen und eincremen.'], tipp: 'Nicht bei Diabetes, Durchblutungsstörungen oder rissiger Haut – dort erst ärztlich beraten lassen.' }),
    { h2: 'Rasur' },
    R({ titel: 'Rasieröl', info: 'Für 50 ml', thema: T.BAD, zutaten: ['30 ml Jojobaöl', '20 ml Mandelöl', 'nach Belieben 3 Tropfen Lavendelöl'], schritte: ['Mischen und in eine Flasche mit Pipette füllen.', 'Wenige Tropfen auf die feuchte Haut geben und darüber rasieren – mit einem scharfen Rasierer.'], tipp: 'Gut für Beine, Achseln und Gesicht; der Rasierer gleitet, die Haut wird gleichzeitig gepflegt. Rasierer danach heiß ausspülen.' }),
    R({ titel: 'Beruhigendes Aftershave', info: 'Für 100 ml', thema: T.BAD, zutaten: ['70 ml Hamameliswasser (Apotheke) oder kalter Kamillentee', '30 ml frisches Aloe-vera-Gel', '5 Tropfen Lavendelöl'], schritte: ['Alles mischen und in eine Sprüh- oder Spritzflasche füllen.', 'Nach der Rasur auftragen.'], tipp: 'Im Kühlschrank aufbewahren und innerhalb einer Woche verbrauchen – kühlt dann zusätzlich.' }),
    { h2: 'Geschenke aus der eigenen Küche' },
    'Fast alle Rezepte aus diesem Buch lassen sich hübsch verpacken: Hafer-Waschbeutel mit Bastschleife, Badesalz in Gläsern, Lippenbalsam in Hülsen, Badebomben im Stoffsäckchen. Ein selbst gemachtes Etikett mit Inhalt, Datum und Haltbarkeit gehört immer dazu. Denk daran: **Verschenken an Freunde ist erlaubt, Verkaufen nur mit Sicherheitsbewertung.**',
  ],
};
