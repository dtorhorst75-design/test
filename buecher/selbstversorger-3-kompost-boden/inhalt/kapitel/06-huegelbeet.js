const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 6, id: 'huegelbeet', teil: 'beete', titel: 'Das Hügelbeet: Gartenabfälle als Kraftwerk', kurz: 'Hügelbeet',
  bloecke: [
    'Ein Hügelbeet ist ein Komposthaufen, auf dem du Gemüse anbaust. Unten verrotten Äste und Zweige langsam über Jahre, darüber Rasensoden, Laub und Kompost. Beim Verrotten entsteht Wärme und ständig neue Nahrung – das erste Jahr trägt ein Hügelbeet so reich wie kaum ein anderes Beet. Und es nimmt die Gartenabfälle auf, die sonst niemand will.',
    { h2: 'Gut zu wissen' },
    { punkte: ['**Beste Zeit:** Oktober bis November, wenn Äste, Laub und Staudenschnitt anfallen. Bis zum Frühjahr setzt sich alles.', '**Ausrichtung:** von Nord nach Süd, damit beide Seiten Sonne bekommen.', '**Größe:** 1,50 bis 1,80 m breit, mindestens 3 bis 4 m lang, etwa 1 m hoch.', '**Haltbarkeit:** Nach 5 bis 6 Jahren ist der Hügel zusammengesackt und wird zu einem normalen, sehr fruchtbaren Beet.', '**Nachteil:** Ein Hügel trocknet im Sommer schneller aus. Oben eine Gießmulde formen und dick mulchen.'] },
    R({ titel: 'Ein Hügelbeet schichten', info: 'Im Herbst, für etwa 1,6 × 4 m', thema: [T.BEETE, T.KOMPOST], zutaten: ['Spaten, Grabegabel, Schubkarre, Schnur', 'Äste, Zweige, Strauchschnitt (etwa 2 bis 3 Schubkarren)', 'Rasensoden von der Fläche selbst', 'Laub, Stroh, Grasschnitt, Staudenreste', 'Grobkompost (halbfertig)', 'reifer Kompost und Gartenerde', 'nach Belieben ein engmaschiges Drahtgitter gegen Wühlmäuse'], schritte: ['Die Fläche mit Schnur abstecken. Den Rasen abstechen und die Soden beiseitelegen. Etwa 25 bis 30 cm tief ausheben, die Erde neben dem Graben lagern.', 'Bei Wühlmäusen den Boden mit dem Drahtgitter auslegen.', '**1. Schicht – Holz (etwa 40 cm):** grobe Äste und Zweige in die Mitte, kreuz und quer, gut festtreten.', '**2. Schicht – Rasensoden (etwa 15 cm):** mit der Grasseite nach unten auf das Holz legen.', '**3. Schicht – Laub und Grünes (etwa 25 cm):** feucht einfüllen und andrücken.', '**4. Schicht – Grobkompost (etwa 15 cm).**', '**5. Schicht – Erde und reifer Kompost (15 bis 20 cm):** die ausgehobene Erde mit Kompost mischen und obenauf verteilen. Den Hügel oben flach abrunden, mit einer Gießrinne entlang der Krone.', 'Über den Winter mit Laub oder Stroh abdecken.'], tipp: 'Jede Schicht gut wässern, wenn das Material trocken ist. Kein krankes Holz, keine Nadelholz-Massen (zu sauer), keine Wurzelunkräuter einbauen.' }),
    { h2: 'Was du wann anbaust' },
    { tabelle: [['Jahr', 'Der Hügel ist …', 'Gut wachsen'],
      ['**1. und 2. Jahr**', 'sehr nährstoffreich und warm', 'Starkzehrer: Kürbis, Zucchini, Gurken, Tomaten, Kohl, Kartoffeln, Lauch, Sellerie. **Kein** Spinat und Salat (sammeln zu viel Nitrat).'],
      ['**3. und 4. Jahr**', 'noch gut versorgt', 'Mittelzehrer: Möhren, Zwiebeln, Rote Bete, Kohlrabi, Salat, Spinat, Mangold'],
      ['**ab dem 5. Jahr**', 'eingesunken, normales Beet', 'Erbsen, Bohnen, Kräuter – dann neuen Hügel bauen'],
    ], breiten: [2000, 2700, 4370] },
  ],
};
