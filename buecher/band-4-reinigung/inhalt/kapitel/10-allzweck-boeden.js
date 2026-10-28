const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 10, id: 'allzweck-boeden', teil: 'wohnen', titel: 'Allzweckreiniger und Böden', kurz: 'Böden',
  bloecke: [
    R({ titel: 'Allzweckreiniger aus Schmierseife', info: 'Für einen Eimer Wischwasser', thema: [T.BODEN, T.GRUND], zutaten: ['5 Liter warmes Wasser', '1 bis 2 EL Schmierseife'], schritte: ['Schmierseife im warmen Wasser auflösen.', 'Wischen wie gewohnt – nicht nachwischen, der dünne Seifenfilm pflegt.'], tipp: 'Lieber zu wenig als zu viel: Zu viel Seife hinterlässt Schlieren und einen klebrigen Film.' }),
    R({ titel: 'Zitrusreiniger aus Orangenschalen', info: 'Für etwa 500 ml', thema: [T.BODEN, T.GRUND], zutaten: ['Schalen von 4 bis 5 Orangen oder Zitronen', 'Essig zum Bedecken (ca. 500 ml)', 'Schraubglas, Sprühflasche'], schritte: ['Schalen ins Glas füllen und mit Essig bedecken.', '2 bis 3 Wochen an einem dunklen Ort ziehen lassen.', 'Abseihen und 1 : 1 mit Wasser verdünnt in die Sprühflasche füllen.'], tipp: 'Für Fliesen, Spüle, Kunststoff und Glas – nicht für Naturstein und gewachstes Holz.' }),
    { h2: 'Böden nach Material' },
    { tabelle: [['Boden', 'So wischt du ihn', 'Vorsicht'],
      ['Fliesen, Feinsteinzeug', 'Wasser mit Schmierseife oder Zitrusreiniger', 'Fugen nicht zu nass'],
      ['Geöltes oder gewachstes Holz, Kork', '**nebelfeucht** mit Schmierseifenwasser; ab und zu mit Holzbodenseife pflegen', 'nie nass, kein Essig, kein Soda'],
      ['Versiegeltes Parkett', 'nebelfeucht mit klarem Wasser und einem Spritzer Spülmittel', 'keine Seife – macht Schlieren'],
      ['Laminat, Vinyl', 'nebelfeucht mit Wasser und etwas Essig', 'stehendes Wasser an den Kanten'],
      ['Naturstein (Marmor, Solnhofer)', 'Schmierseifenwasser', '**kein Essig, keine Zitronensäure**'],
      ['Linoleum', 'Schmierseifenwasser', 'keine Laugen (Soda)'],
    ], breiten: [2700, 4100, 2270] },
    R({ titel: 'Teppich auffrischen mit Natron', info: 'Für einen Teppich', thema: T.BODEN, zutaten: ['Natron (etwa 100 g für 2 m²)', 'Staubsauger'], schritte: ['Natron dünn und gleichmäßig auf den trockenen Teppich streuen.', 'Mindestens 1 Stunde, besser über Nacht einwirken lassen.', 'Gründlich absaugen.'], tipp: 'Natron bindet Gerüche, etwa von Haustieren oder Rauch. Für Flecken siehe die Fleckentabelle im Kapitel Flecken – immer erst tupfen, nie reiben.' }),
  ],
};
