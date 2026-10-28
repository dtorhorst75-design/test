const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 7, id: 'ernten', teil: 'pflege', titel: 'Ernten und haltbar machen', kurz: 'Ernten',
  bloecke: [
    { punkte: ['**Morgens ernten**, wenn der Tau getrocknet ist, aber bevor die Mittagssonne die ätherischen Öle verfliegen lässt.', '**Blätter kurz vor der Blüte** – dann ist das Aroma am stärksten: Melisse, Minze, Salbei, Thymian, Oregano.', '**Blüten, wenn sie gerade aufgegangen sind:** Kamille, Ringelblume, Lavendel, Johanniskraut.', 'Nie mehr als ein Drittel einer Pflanze auf einmal ernten, damit sie nachwachsen kann.', 'Für die Küche: immer frisch. Für den Vorrat: trocknen, einfrieren oder in Salz.'] },
    { h2: 'Kräuter haltbar machen' },
    { tabelle: [['Methode', 'Gut für', 'So geht es'],
      ['**Trocknen**', 'Thymian, Salbei, Rosmarin, Oregano, Bohnenkraut, Minze, Melisse, Kamille, Ringelblume, Lavendel', 'in Bündeln oder auf Gittern, schattig und luftig (Heft 6)'],
      ['**Einfrieren**', 'Petersilie, Schnittlauch, Dill, Kerbel, Basilikum', 'gehackt in Dosen oder mit etwas Wasser oder Öl in Eiswürfelformen'],
      ['**In Salz**', 'Mischungen aller Küchenkräuter', 'Kräutersalz (Heft 6)'],
      ['**In Essig**', 'Estragon, Thymian, Rosmarin, Dill', 'Zweige in eine Flasche Apfel- oder Weinessig, 2 bis 3 Wochen ziehen lassen'],
    ], breiten: [1900, 3800, 3370] },
    { warnung: 'Kräuter in Öl', zeilen: ['Frische Kräuter und Knoblauch in Öl sind ein **Botulismus-Risiko**. Kräuteröl nur in kleinen Mengen frisch ansetzen, im Kühlschrank aufbewahren und innerhalb einer Woche verbrauchen. Ölauszüge für die Haut (Ringelblume, Johanniskraut) macht man mit **getrockneten** Blüten.'] },
    R({ titel: 'Kräuterwürfel für den Winter', info: 'Für eine Eiswürfelform', thema: T.ERNTE, zutaten: ['2 Handvoll gemischte frische Kräuter (Petersilie, Schnittlauch, Dill, Kerbel, Basilikum)', 'etwas Wasser oder Olivenöl', 'eine Eiswürfelform, Gefrierdose'], schritte: ['Kräuter waschen, trocken schütteln, fein hacken.', 'In die Mulden der Eiswürfelform füllen, mit Wasser oder Öl bedecken.', 'Einfrieren, dann die Würfel herauslösen und in einer beschrifteten Dose aufbewahren.', 'Gefroren direkt in Suppen, Saucen und Pfannengerichte geben.'] }),
  ],
};
