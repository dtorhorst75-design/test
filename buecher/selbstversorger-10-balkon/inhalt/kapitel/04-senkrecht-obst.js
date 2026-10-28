const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 4, id: 'senkrecht-obst', teil: 'anbau', titel: 'Senkrecht gärtnern, Erdbeeren und Obst', kurz: 'Senkrecht und Obst',
  bloecke: [
    'Auf dem Balkon ist die Fläche knapp, die Höhe nicht. Nutze Wände, Geländer und die Luft darüber.',
    { punkte: ['**Rankgitter** an der Hauswand für Bohnen, Erbsen, Gurken und Kapuzinerkresse.', '**Treppenregale** oder alte Leitern als Pflanzentreppe – unten die großen, oben die kleinen Töpfe.', '**Hängeampeln** für Erdbeeren, Kapuzinerkresse und hängende Cocktailtomaten.', '**Palettengarten** für Salat und Kräuter (Kapitel Gefäße).', '**Geländerkästen** innen für Salat, Radieschen und Kräuter.'] },
    R({ titel: 'Erdbeeren in der Ampel', info: 'Pflanzen im April oder August', thema: T.PFLANZEN, zutaten: ['eine stabile Hängeampel (mindestens 5 Liter) mit sicherem Haken', '3 Pflanzen einer **immertragenden** Erdbeersorte', 'Erde mit Kompost'], schritte: ['Die Ampel mit Erde füllen, die Pflanzen einsetzen – das Herz über der Erde.', 'An einem sonnigen, windgeschützten Platz sicher aufhängen.', 'Täglich gießen, im Sommer oft zweimal.', 'Alle zwei Wochen etwas Wurmhumus oder Kompost auf die Erde streuen.'], tipp: 'Immertragende Sorten bringen von Juni bis Oktober immer wieder Früchte. In der Ampel erreichen die Schnecken sie nicht, und die Beeren bleiben sauber.' }),
    { h2: 'Obst im Kübel' },
    { tabelle: [['Obst', 'Was du wählst', 'Gut zu wissen'],
      ['Apfel, Birne', '**Säulenobst** oder ein Zwergbaum auf schwacher Unterlage', 'für Äpfel eine zweite Sorte in der Nähe (Heft 9); Kübel 40 bis 60 Liter'],
      ['Heidelbeeren', 'zwei Sorten im Kübel mit saurer, torffreier Erde', 'nur Regenwasser (Heft 9)'],
      ['Johannisbeeren, Stachelbeeren', 'als **Stämmchen** (Hochstamm) im Kübel', 'braucht wenig Platz, schöne Krone'],
      ['Himbeeren', 'Herbsthimbeeren oder kompakte Balkonsorten', 'Kübel ab 30 Liter, Stab zum Anbinden'],
      ['Feigen', 'winterharte Sorten an der warmen Hauswand', 'im Winter vor Frost schützen oder ins kühle Treppenhaus'],
    ], breiten: [2300, 3300, 3470] },
    'Obst im Kübel muss im Winter geschützt werden: Kübel in Jute oder eine Decke wickeln, auf Holzlatten stellen und an die Hauswand rücken (wie in Heft 8). An frostfreien Tagen gießen.',
  ],
};
