const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'balkon-planen', teil: 'planen', titel: 'Licht, Wind, Gewicht und Regeln', kurz: 'Balkon planen',
  bloecke: [
    { h2: 'Wie viel Sonne hast du?' },
    { tabelle: [['Ausrichtung', 'Sonne', 'Was gut wächst'],
      ['**Süden**', 'den ganzen Tag, im Sommer sehr heiß', 'Tomaten, Paprika, Chili, Zucchini, Bohnen, Mittelmeerkräuter, Erdbeeren – aber viel gießen'],
      ['**Westen**', 'nachmittags und abends, warm', 'fast alles: Tomaten, Bohnen, Salat, Mangold, Kräuter, Erdbeeren'],
      ['**Osten**', 'vormittags, mild', 'Salat, Mangold, Radieschen, Erbsen, Kohlrabi, Petersilie, Schnittlauch, Erdbeeren'],
      ['**Norden**', 'kaum direkte Sonne', 'Pflücksalat, Kerbel, Minze, Schnittlauch, Sprossen und Microgreens'],
    ], breiten: [1800, 2900, 4370] },
    'Beobachte deinen Balkon einen Tag lang wie in Heft 1: Wo liegt wann Schatten? Oft ist eine Ecke viel sonniger als die andere.',
    { h2: 'Wind und Hitze' },
    { punkte: ['In den oberen Stockwerken weht es kräftig. Hohe Pflanzen (Tomaten, Stangenbohnen) brauchen stabile Stäbe und einen windgeschützten Platz an der Hauswand.', 'Ein Südbalkon mit heller Wand wird im Sommer heiß wie ein Backofen. Töpfe nicht direkt auf heiße Fliesen stellen, große Gefäße wählen (sie trocknen langsamer aus), dick mulchen.', 'Ein Sonnensegel oder ein Rankgitter mit Bohnen schafft im Hochsommer Schatten für Salat.'] },
    { h2: 'Gewicht und Sicherheit' },
    'Balkone tragen viel, aber nicht unbegrenzt. Nasse Erde ist schwer: Ein 40-Liter-Kübel wiegt gefüllt und gegossen 60 bis 80 kg. **Schwere Gefäße an die Hauswand stellen**, nicht in die Mitte oder an die Brüstung. Im Zweifel beim Vermieter nachfragen.',
    { h2: 'Was im Mietshaus gilt' },
    { punkte: ['Balkonpflanzen sind in der Regel erlaubt, auch Gemüse. Feste Einbauten (Hochbeet aus Holz, Bohrlöcher) besser mit dem Vermieter absprechen.', 'Kästen an der Brüstung sicher befestigen, am besten **innen**. Nichts darf herunterfallen.', 'Gießwasser darf nicht auf Nachbarn und Passanten tropfen.', 'Rankpflanzen nicht über die eigene Balkonfläche hinauswachsen lassen.', 'Eine stinkende Brennnesseljauche ist auf dem Balkon keine gute Idee – Kompost und Wurmhumus düngen geruchlos (Kapitel Gießen und Düngen).'] },
    R({ titel: 'Einen Balkonplan zeichnen', info: 'Im Februar', thema: T.PLANEN, zutaten: ['ein Zollstock, Papier, Bleistift', 'Gartentagebuch'], schritte: ['Den Balkon ausmessen und maßstabsgerecht aufzeichnen (z. B. 1 m = 5 cm).', 'Sonne und Schatten eintragen, Wasseranschluss oder den Weg zur Küche.', 'Die Hauswand für schwere Kübel und Rankgitter einplanen, die Brüstung für leichte Kästen innen.', 'Senkrecht denken: Regale, Hängetöpfe, Rankhilfen nutzen die Höhe.', 'Einen Weg von mindestens 60 cm freilassen – du musst gießen und ernten können.'] }),
  ],
};
