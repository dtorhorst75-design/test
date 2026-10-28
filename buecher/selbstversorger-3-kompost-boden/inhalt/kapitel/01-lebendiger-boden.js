const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'lebendiger-boden', teil: 'boden', titel: 'Was einen Boden lebendig macht', kurz: 'Lebendiger Boden',
  bloecke: [
    'In einer Handvoll guter Gartenerde leben mehr Lebewesen, als es Menschen auf der Erde gibt: Bakterien, Pilze, winzige Tierchen, Springschwänze, Asseln, Tausendfüßer und natürlich Regenwürmer. Sie zersetzen abgestorbene Pflanzen, machen daraus **Humus** und halten den Boden locker. Deine Aufgabe als Gärtnerin ist es, dieses Bodenleben zu füttern und zu schützen.',
    { h2: 'Die vier Grundregeln' },
    { tabelle: [['Regel', 'Warum'],
      ['**1. Den Boden nie nackt lassen**', 'Sonne trocknet ihn aus, Regen schlämmt ihn zu, Wind trägt ihn fort. Mulch, Gründüngung oder eine Laubdecke schützen ihn wie eine Haut.'],
      ['**2. Füttern – mit Organischem**', 'Kompost, Mulch, Pflanzenreste und Jauchen sind Futter für das Bodenleben. Das Bodenleben füttert dann die Pflanzen.'],
      ['**3. Nicht treten, nicht pressen**', 'Festgetretener Boden hat keine Luft mehr. Feste Wege, schmale Beete – und nie auf nassem Boden arbeiten.'],
      ['**4. So wenig wie möglich umgraben**', 'Lockern ja, umdrehen selten. Die Bodenschichten haben ihre Ordnung, und Regenwürmer bauen ihre Gänge über Jahre.'],
    ], breiten: [3100, 5970] },
    { h2: 'Humus – das schwarze Gold' },
    'Humus ist der dunkle, krümelige, gut riechende Anteil im Boden. Er speichert Wasser wie ein Schwamm, hält Nährstoffe fest, damit der Regen sie nicht auswäscht, und gibt sie nach und nach an die Pflanzen ab. Ein Boden mit viel Humus ist im Frühjahr früher warm, im Sommer länger feucht und lässt sich leicht bearbeiten.',
    'Humus entsteht nur, wenn ständig neues organisches Material nachkommt. Deshalb ist Kompost nicht nur Dünger, sondern **Bodenaufbau**.',
    { h2: 'Regenwürmer – deine besten Mitarbeiter' },
    { punkte: ['Sie ziehen Laub und Pflanzenreste in den Boden und verwandeln sie in nährstoffreichen Wurmhumus.', 'Ihre Gänge lüften den Boden und lassen Regenwasser tief einsickern.', 'Sie lieben Mulch, Laub, Kompost und Ruhe. Sie mögen keinen nackten, ausgetrockneten Boden und kein ständiges Umgraben.', 'Je mehr Regenwürmer du bei der Spatenprobe (Heft 1) findest, desto besser geht es deinem Boden.'] },
    R({ titel: 'Die Regenwurm-Zählung', info: 'Im Frühjahr oder Herbst, bei feuchtem Boden', thema: T.BODEN, zutaten: ['ein Spaten', 'eine Plane oder ein alter Sack', 'Gartentagebuch'], schritte: ['Einen Spatenstich tief ein Stück Boden von etwa 20 × 20 cm ausheben und auf die Plane legen.', 'Die Erde vorsichtig mit den Händen auseinanderbröseln und die Regenwürmer zählen.', 'Würmer und Erde wieder zurück ins Loch geben.', 'Die Zahl ins Gartentagebuch schreiben – und jedes Jahr an derselben Stelle wiederholen.'], tipp: 'Fünf oder mehr Würmer in so einem Stück sind ein gutes Zeichen, zehn und mehr ein sehr gutes. Steigt die Zahl über die Jahre, machst du alles richtig.' }),
  ],
};
