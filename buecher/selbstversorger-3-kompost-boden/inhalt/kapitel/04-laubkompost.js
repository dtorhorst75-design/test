const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 4, id: 'laubkompost', teil: 'kompost', titel: 'Laub: aus Abfall wird feinste Erde', kurz: 'Laubkompost',
  bloecke: [
    'Jeden Herbst fällt Laub in großen Mengen – und viele bringen es zur Grünschnittannahme. Dabei ist Laub für Selbstversorger ein Schatz: Daraus wird **Lauberde**, die feinste, lockerste Erde für Anzucht und Topfpflanzen. Und als Mulch schützt es die Beete über den Winter.',
    { h2: 'Nicht jedes Laub ist gleich' },
    { tabelle: [['Laub', 'Verrottet', 'Gut zu wissen'],
      ['Obstbäume, Ahorn, Linde, Birke, Haselnuss, Esche', 'schnell (etwa 1 Jahr)', 'ideal für Lauberde und Mulch'],
      ['Buche, Hainbuche', 'mittel (1 bis 2 Jahre)', 'gut, am besten zerkleinert'],
      ['Eiche, Walnuss, Platane, Kastanie', 'langsam (2 bis 3 Jahre)', 'gerbstoffreich; nur in kleinen Mengen untermischen oder separat lange reifen lassen'],
    ], breiten: [3700, 2200, 3170] },
    R({ titel: 'Lauberde ansetzen', info: 'Im Herbst', thema: T.KOMPOST, zutaten: ['viel Laub, möglichst trocken gesammelt', 'ein Laubkorb aus Maschendraht (etwa 1 m hoch und breit) oder alte Jutesäcke', 'Rasenmäher (zum Zerkleinern) oder eine Schere', 'Gießkanne'], schritte: ['Aus dem Maschendraht einen Ring formen, mit vier Pfählen im Boden halten.', 'Laub nach Möglichkeit mit dem Rasenmäher überfahren – zerkleinert verrottet es doppelt so schnell.', 'Das Laub schichtweise einfüllen und jede Schicht **gut anfeuchten**. Trockenes Laub verrottet nicht.', 'Oben mit etwas Erde oder einem Brett abdecken, damit es nicht wegweht.', 'Ab und zu nachsehen, ob es feucht ist.', 'Nach einem Jahr ist es halbfertig (gut als Mulch), nach zwei Jahren feine, dunkle Lauberde.'], tipp: 'In Jutesäcken geht es auch: feuchtes Laub hineinstopfen, ein paar Löcher hineinstechen, zubinden und hinter den Schuppen stellen.' }),
    { h2: 'Was du mit Lauberde machst' },
    { punkte: ['**Anzuchterde:** 2 Teile Lauberde, 1 Teil gesiebter Kompost, 1 Teil Sand – locker, nährstoffarm, genau richtig für Keimlinge.', '**Topferde:** halb Lauberde, halb Kompost.', '**Mulch:** halbfertige Lauberde um Beerensträucher, Stauden und Gemüse.', '**Bodenverbesserung:** auf Ton- und Sandböden einarbeiten.'] },
    { h2: 'Laub als Wintermantel' },
    'Auf leere Gemüsebeete kommt im Spätherbst eine **10 bis 15 cm dicke Laubschicht**. Sie schützt den Boden vor Frost und Platzregen und füttert die Regenwürmer, die das Laub bis zum Frühjahr zum großen Teil in den Boden ziehen. Was im März übrig ist, harkst du ab und gibst es auf den Kompost oder lässt es zwischen den Reihen als Mulch liegen.',
    { kasten: 'Ein Laubhaufen für den Igel', zeilen: ['Lass in einer ruhigen Ecke einen Haufen Laub mit ein paar Ästen liegen. Igel überwintern dort – und im Sommer fressen sie Schnecken.'] },
  ],
};
