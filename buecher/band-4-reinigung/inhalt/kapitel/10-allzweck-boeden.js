const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 10, id: 'allzweck-boeden', teil: 'wohnen', titel: 'Allzweckreiniger und Böden', kurz: 'Böden',
  bloecke: [
    R({ titel: 'Wischwasser mit Kastanien oder Efeu', info: 'Für einen Eimer Wischwasser', thema: [T.BODEN, T.GRUND], zutaten: ['5 Liter warmes Wasser', '1 Tasse Kastanien- oder Efeusud (Kapitel Waschmittel)', 'nach Belieben 1 Schuss Duftessig (nicht für Naturstein und Holz)'], schritte: ['Sud ins warme Wasser geben.', 'Wischen wie gewohnt.'], tipp: 'Für die meisten Böden reicht sogar klares, warmes Wasser mit einem guten Mopp. Den Sud brauchst du nur, wenn es fettig oder klebrig ist. Haustiere nicht aus dem Eimer trinken lassen.' }),
    R({ titel: 'Zitrusreiniger aus Orangenschalen', info: 'Für etwa 500 ml', thema: [T.BODEN, T.GRUND], zutaten: ['Schalen von 4 bis 5 Orangen oder Zitronen', 'Essig zum Bedecken (ca. 500 ml)', 'Schraubglas, Sprühflasche'], schritte: ['Schalen ins Glas füllen und mit Essig bedecken.', '2 bis 3 Wochen an einem dunklen Ort ziehen lassen.', 'Abseihen und 1 : 1 mit Wasser verdünnt in die Sprühflasche füllen.'], tipp: 'Für Fliesen, Spüle, Kunststoff und Glas – nicht für Naturstein und gewachstes Holz.' }),
    { h2: 'Böden nach Material' },
    { tabelle: [['Boden', 'So wischt du ihn', 'Vorsicht'],
      ['Fliesen, Feinsteinzeug', 'Wasser mit Kastanien- oder Efeusud oder Zitrusreiniger', 'Fugen nicht zu nass'],
      ['Geöltes oder gewachstes Holz, Kork', '**nebelfeucht** mit klarem Wasser; ab und zu dünn mit Leinöl pflegen', 'nie nass, kein Essig, kein Natron'],
      ['Versiegeltes Parkett', 'nebelfeucht mit klarem Wasser', 'kein Pflanzensud – macht Schlieren'],
      ['Laminat, Vinyl', 'nebelfeucht mit Wasser und etwas Essig', 'stehendes Wasser an den Kanten'],
      ['Naturstein (Marmor, Solnhofer)', 'warmes Wasser, bei Bedarf mit etwas Kastaniensud', '**kein Essig, keine Zitronensäure**'],
      ['Linoleum', 'warmes Wasser mit etwas Kastanien- oder Efeusud', 'kein Natron, nicht nass'],
    ], breiten: [2700, 4100, 2270] },
    R({ titel: 'Teppich auffrischen mit Natron', info: 'Für einen Teppich', thema: T.BODEN, zutaten: ['Natron (etwa 100 g für 2 m²)', 'Staubsauger'], schritte: ['Natron dünn und gleichmäßig auf den trockenen Teppich streuen.', 'Mindestens 1 Stunde, besser über Nacht einwirken lassen.', 'Gründlich absaugen.'], tipp: 'Natron bindet Gerüche, etwa von Haustieren oder Rauch. Für Flecken siehe die Fleckentabelle im Kapitel Flecken – immer erst tupfen, nie reiben.' }),
  ],
};
