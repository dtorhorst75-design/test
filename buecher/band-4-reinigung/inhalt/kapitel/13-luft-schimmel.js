const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 13, id: 'luft-schimmel', teil: 'wohnen', titel: 'Gerüche, frische Luft und Schimmel', kurz: 'Luft und Schimmel',
  bloecke: [
    { h2: 'Gerüche binden statt überdecken' },
    { punkte: ['**Natron** in offenen Schälchen bindet Gerüche im Kühlschrank, Schuhschrank und Mülleimer.', '**Kaffeesatz** (getrocknet) bindet Gerüche im Kühlschrank und an den Händen nach Zwiebelschneiden.', '**Stoßlüften** statt Kipplüften: 3- bis 4-mal täglich 5 bis 10 Minuten die Fenster weit öffnen.'] },
    R({ titel: 'Schuh-Deo-Säckchen', info: 'Für ein Paar Schuhe', thema: T.LUFT, zutaten: ['2 alte Socken oder kleine Stoffbeutel', '4 EL Natron', 'nach Belieben getrocknete Lavendelblüten'], schritte: ['Natron (und Lavendel) in die Socken füllen und zuknoten.', 'Über Nacht in die Schuhe legen.', 'Alle paar Wochen das Natron erneuern.'] }),
    R({ titel: 'Raumduft-Topf (Simmer Pot)', info: 'Für einen gemütlichen Nachmittag', thema: T.LUFT, zutaten: ['ein Topf mit Wasser', 'Orangen- oder Apfelschalen, 1 Zimtstange, ein paar Nelken, ein Zweig Fichte oder Rosmarin'], schritte: ['Alles in den Topf geben.', 'Auf kleinster Stufe leise köcheln lassen und Wasser nachfüllen.'], tipp: 'Nie unbeaufsichtigt lassen. Statt Duftkerzen und Raumsprays – ohne künstliche Duftstoffe.' }),
    { h2: 'Schimmel: was du selbst machen kannst – und was nicht' },
    'Schimmel ist kein Schönheitsproblem, sondern kann der Gesundheit schaden. Das Umweltbundesamt empfiehlt:',
    { punkte: ['**Kleine Flächen** (bis etwa 0,5 m²) auf **glatten, nicht saugfähigen** Oberflächen (Fliesen, Fensterrahmen, Silikon) kannst du selbst entfernen.', '**Größere Flächen**, Schimmel in Wänden, unter Tapeten oder nach Wasserschäden gehören in die Hand von **Fachleuten**. Das gilt auch, wenn Allergiker, Schwangere, kleine Kinder oder Menschen mit geschwächtem Immunsystem im Haushalt leben.', '**Ursache finden:** zu hohe Luftfeuchtigkeit, Wärmebrücken, undichte Stellen. Ohne die Ursache kommt der Schimmel wieder.'] },
    R({ titel: 'Kleine Schimmelflecken entfernen', info: 'Für glatte Oberflächen bis 0,5 m²', thema: T.LUFT, zutaten: ['70- bis 80-prozentiger Alkohol (Ethanol oder Isopropanol, Apotheke) oder Brennspiritus', 'Einweg-Tücher, Handschuhe, FFP2-Maske, Schutzbrille'], schritte: ['Fenster öffnen, Schutzausrüstung anziehen.', 'Schimmel **nicht trocken abbürsten** – das verteilt die Sporen.', 'Alkohol auf ein Tuch geben und die Fläche abwischen, kurz einwirken lassen, mit einem neuen Tuch nachwischen.', 'Tücher in einem verschlossenen Beutel im Restmüll entsorgen.'], tipp: 'Alkohol ist entzündlich – keine offenen Flammen, nicht rauchen. **Essig** ist auf kalkhaltigen Wänden ungeeignet: Er wird neutralisiert und kann den Schimmel sogar ernähren.' }),
    { h2: 'Richtig lüften und heizen' },
    { punkte: ['Luftfeuchtigkeit mit einem Hygrometer (unter 10 Euro) kontrollieren: Ideal sind 40 bis 60 %.', 'Nach dem Duschen, Kochen und Wäschetrocknen sofort stoßlüften.', 'Möbel mit etwas Abstand (5 bis 10 cm) zu Außenwänden aufstellen.', 'Räume nicht unter 16 °C auskühlen lassen.'] },
  ],
};
