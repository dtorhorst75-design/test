const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 3, id: 'anzuchtkalender', teil: 'fensterbank', titel: 'Der Anzuchtkalender für die Fensterbank', kurz: 'Anzuchtkalender',
  bloecke: [
    'Der häufigste Fehler beim Vorziehen ist nicht zu spät, sondern **zu früh**. Im Februar und Anfang März ist das Licht am Fenster noch schwach. Die Pflänzchen wachsen dann lang und dünn zum Licht (sie „vergeilen“) und sind zum Auspflanzen schwach. Wer zwei Wochen später anfängt, hat oft kräftigere Pflanzen.',
    { kasten: 'Rückwärts rechnen', zeilen: ['Nimm den Tag, an dem die Pflanze ins Freie darf, und zähle die Anzuchtzeit zurück. Tomaten brauchen etwa 6 bis 8 Wochen und dürfen nach den Eisheiligen Mitte Mai hinaus – also säst du sie **Mitte bis Ende März**, nicht im Februar.'] },
    { tabelle: [['Monat', 'Was du vorziehst', 'Keimtemperatur', 'Ins Beet'],
      ['**Ende Februar**', 'Paprika, Chili, Knollensellerie', '22 bis 25 °C (Sellerie 18 bis 22 °C)', 'Ende Mai'],
      ['**Anfang März**', 'Kohlrabi, Frühkohl (Spitzkohl), Kopfsalat, Sommerlauch', '15 bis 18 °C', 'Anfang bis Mitte April'],
      ['**Mitte bis Ende März**', 'Tomaten', '20 bis 24 °C', 'nach Mitte Mai'],
      ['**April**', 'Salat (laufend), Basilikum', 'Salat 15 bis 18 °C, Basilikum 20 bis 25 °C', 'Salat sofort, Basilikum nach Mitte Mai'],
      ['**Mitte bis Ende April**', 'Zucchini, Kürbis', '20 bis 25 °C', 'nach Mitte Mai'],
      ['**Ende April bis Anfang Mai**', 'Gurken', '20 bis 25 °C', 'Ende Mai'],
      ['**Mai bis Juni**', 'Grünkohl, Rosenkohl, Winterlauch – auch im Saatbeet draußen', '15 bis 20 °C', 'Juni bis Juli'],
    ], breiten: [2200, 2900, 2300, 1670] },
    { h2: 'Nach dem Keimen: kühler und heller' },
    'Die Wärme brauchen die Samen nur zum Keimen. Sobald die Keimlinge da sind, stellst du sie **kühler und so hell wie möglich**: Tomaten und Paprika bei 16 bis 20 °C, Kohl und Salat bei 12 bis 16 °C. Ein kühles Schlafzimmerfenster ist oft besser als die warme Küche.',
    { punkte: ['Töpfe täglich ein Stück drehen, damit die Pflanzen gerade wachsen.', 'Ein Stück Pappe mit Alufolie hinter die Töpfe stellen – es wirft Licht zurück.', 'Morgens gießen, von unten in den Untersetzer, Staunässe vermeiden.', 'Ab und zu mit der Hand über die Pflänzchen streichen – die Bewegung macht sie stämmig.'] },
    R({ titel: 'Papiertöpfe aus Zeitung', info: 'Für etwa 20 Töpfchen', thema: T.VORZIEHEN, zutaten: ['Zeitungspapier (schwarz-weiß bedruckt)', 'ein Glas oder eine Dose (5 bis 6 cm Durchmesser)'], schritte: ['Einen Zeitungsstreifen von etwa 10 × 30 cm schneiden.', 'Um das Glas wickeln, unten etwa 3 cm überstehen lassen.', 'Den Überstand nach innen falten und fest auf den Tisch drücken – das ist der Boden.', 'Glas herausziehen, Töpfchen mit Erde füllen und dicht an dicht in eine Kiste stellen.'], tipp: 'Die Töpfe kommen später mit ins Beet und verrotten dort. So werden die Wurzeln beim Pflanzen nicht gestört – ideal für Gurken, Kürbis und Zucchini, die das Umpflanzen nicht mögen.' }),
  ],
};
