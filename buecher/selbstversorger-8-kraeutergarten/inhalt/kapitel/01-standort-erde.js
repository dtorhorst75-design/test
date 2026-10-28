const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'standort-erde', teil: 'anbauen', titel: 'Wo Kräuter wachsen wollen', kurz: 'Standort und Erde',
  bloecke: [
    'Kräuter kommen aus ganz unterschiedlichen Gegenden – und das merkst du an ihren Wünschen. Wer das weiß, macht kaum noch Fehler.',
    { tabelle: [['Gruppe', 'Kräuter', 'Sie wollen'],
      ['**Die Mittelmeerkräuter**', 'Thymian, Salbei, Rosmarin, Lavendel, Oregano (Dost), Ysop, Bohnenkraut', '**volle Sonne**, magere, durchlässige, eher kalkhaltige Erde, wenig Wasser, keinen Dünger. Staunässe ist ihr Tod.'],
      ['**Die Hungrigen und Durstigen**', 'Petersilie, Schnittlauch, Liebstöckel, Kerbel, Dill, Basilikum, Pfefferminze, Zitronenmelisse', 'Sonne bis Halbschatten, humose, nährstoffreiche, gleichmäßig feuchte Erde, etwas Kompost'],
      ['**Die Heilblumen**', 'Kamille, Ringelblume, Borretsch, Kapuzinerkresse', 'Sonne, normale Gartenerde; einjährig, säen sich oft selbst aus'],
    ], breiten: [2300, 3400, 3370] },
    { h2: 'Die richtige Erde' },
    { tabelle: [['Für', 'Mischung'],
      ['Mittelmeerkräuter', '1 Teil Gartenerde oder Kompost, 1 Teil Sand, 1 Teil feiner Kies oder Splitt'],
      ['Hungrige Kräuter', '2 Teile Gartenerde oder Lauberde, 1 Teil reifer Kompost'],
      ['Aussaat', 'Anzuchterde aus Heft 1 (Kompost, Gartenerde, Sand)'],
    ], breiten: [2800, 6270] },
    'Torffreie Erde aus eigenem Kompost und Lauberde (Heft 3) ist für Kräuter ideal. In jeden Topf gehört unten eine **Drainageschicht** aus Kies, Tonscherben oder grobem Splitt, damit überschüssiges Wasser abfließt.',
    { kasten: 'Weniger ist mehr', zeilen: ['Der häufigste Fehler bei Kräutern ist **zu viel Liebe**: zu viel Wasser und zu viel Dünger. Mittelmeerkräuter, die mager und trocken stehen, duften stärker und sind gesünder. Im Topf gießt du sie erst, wenn die Erde oben trocken ist.'] },
    { h2: 'Zusammen oder getrennt?' },
    { punkte: ['Mittelmeerkräuter und hungrige Kräuter **nicht in denselben Topf** – die einen wollen trocken, die anderen feucht.', '**Pfefferminze** wuchert mit unterirdischen Ausläufern. Immer in einen eigenen Topf oder mit einer Wurzelsperre (ein bodenloser Eimer im Beet) pflanzen.', '**Petersilie** mag nicht jedes Jahr am selben Platz wachsen. Wechsle den Ort, sonst kümmert sie.', '**Liebstöckel** wird bis zu 2 m hoch – ein Exemplar am Beetrand reicht für die ganze Familie.', '**Basilikum** braucht Wärme. Erst nach Mitte Mai ins Freie, am besten an eine geschützte, sonnige Hauswand.'] },
  ],
};
