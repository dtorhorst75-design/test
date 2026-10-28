const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 6, id: 'vor-nachkultur', teil: 'beet', titel: 'Kein Beet bleibt leer: Vor-, Haupt- und Nachkultur', kurz: 'Vor- und Nachkultur',
  bloecke: [
    'Ein Beet kann im Jahr **zwei- bis dreimal** etwas tragen. Die alten Gärtner nannten das Vor-, Haupt- und Nachkultur:',
    { punkte: ['**Vorkultur** (März bis Mai): schnelle, kälteverträgliche Gemüse, die geerntet sind, bevor die Hauptkultur Platz braucht – Radieschen, Spinat, Salat, Kohlrabi.', '**Hauptkultur** (Mai bis August/September): die Gemüse mit der langen Wachstumszeit – Tomaten, Zucchini, Kürbis, Kartoffeln, Kohl, Lagermöhren.', '**Nachkultur** (ab Juli/August): was nach der Ernte der Hauptkultur noch wächst – Feldsalat, Spinat, Grünkohl, Winterlauch, Radieschen; oder eine Gründüngung.'] },
    { h2: 'Bewährte Abfolgen' },
    { tabelle: [['Vorkultur (Frühjahr)', 'Hauptkultur (Sommer)', 'Nachkultur (Herbst und Winter)'],
      ['Spinat, Radieschen', 'Tomaten oder Zucchini (ab Mitte Mai)', 'Feldsalat – Ende August zwischen die Pflanzen säen, nach dem Abräumen wächst er weiter'],
      ['–', 'Erbsen (März bis Juli)', '**Grünkohl** (Pflanzen Anfang Juli) – der Klassiker'],
      ['–', 'Frühkartoffeln (bis Juli)', 'Feldsalat, Spinat oder Gründüngung'],
      ['Kohlrabi, Salat', 'Buschbohnen (gesät Mitte Juni)', 'Feldsalat oder Winterportulak'],
      ['Radieschen, Salat', 'Lagermöhren (gesät Ende Mai)', 'Möhren bleiben bis Oktober'],
      ['Steckzwiebeln (Ernte August)', '–', 'Spinat oder Feldsalat'],
    ], breiten: [2700, 3000, 3370] },
    R({ titel: 'Erbsen und Grünkohl: das Paar für ein ganzes Jahr', info: 'Ein Beet von März bis Februar', thema: [T.BEET, T.PLANEN], zutaten: ['Erbsensaatgut', 'Grünkohl-Jungpflanzen (selbst vorgezogen ab Mai oder gekauft)', 'reifer Kompost'], schritte: ['Im **März/April** Erbsen säen (Reihenabstand 40 cm).', 'Im **Mai** Grünkohl in Töpfen oder einem Saatbeet säen.', 'Im **Juni/Juli** die Erbsen ernten. Die Erbsenwurzeln mit den Knöllchen im Boden lassen – sie enthalten Stickstoff. Nur das Kraut abschneiden und als Mulch liegen lassen.', 'Eine Schaufel Kompost pro Pflanze geben und den Grünkohl im Abstand von 50 × 50 cm pflanzen.', 'Von **November bis Februar** ernten. Nach dem ersten Frost schmeckt er süßer.'], tipp: 'Die Erbse hinterlässt Stickstoff, den der hungrige Kohl gut brauchen kann. Und das Beet ist das ganze Jahr bedeckt.' }),
    { kasten: 'Die Grenze', zeilen: ['Für eine Nachkultur muss genug Zeit bis zum Herbst bleiben. Was nach Anfang September gesät wird, wächst nur noch langsam. Dann ist eine Gründüngung oder eine Laubdecke die bessere Wahl.'] },
  ],
};
