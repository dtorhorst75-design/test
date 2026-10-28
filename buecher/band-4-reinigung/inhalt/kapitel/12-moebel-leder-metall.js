const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 12, id: 'moebel-leder-metall', teil: 'wohnen', titel: 'Möbel, Leder und Metall', kurz: 'Möbel und Metall',
  bloecke: [
    { h2: 'Holzmöbel' },
    R({ titel: 'Möbelpolitur für geöltes Holz', info: 'Für eine kleine Flasche', thema: T.MOEBEL, zutaten: ['4 EL Leinöl oder Olivenöl', '2 EL Zitronensaft oder Essig', 'weiches Baumwolltuch'], schritte: ['Öl und Zitronensaft in einem Glas kräftig schütteln.', 'Sparsam auf ein Tuch geben und in Faserrichtung einreiben.', 'Nach 10 Minuten mit einem sauberen Tuch nachpolieren.'], tipp: 'Immer frisch ansetzen – die Mischung wird ranzig. Nur für geölte oder unbehandelte Möbel; lackierte Möbel nur feucht abwischen. Leinöl-Lappen können sich beim Trocknen **selbst entzünden** – ausgebreitet im Freien trocknen lassen oder in einem Glas mit Wasser entsorgen.' }),
    { punkte: ['**Wasserflecken** auf geöltem Holz: Wenig Zahnpasta oder Natronpaste in Faserrichtung einreiben, nachölen.', '**Kratzer** in dunklem Holz: Mit einer halben Walnuss darüberreiben – das Öl färbt sie ein.'] },
    { h2: 'Leder' },
    R({ titel: 'Lederbalsam', info: 'Für einen kleinen Tiegel', thema: T.MOEBEL, zutaten: ['20 g Bienenwachs', '60 ml Olivenöl oder Jojobaöl', 'Wasserbad, Tiegel'], schritte: ['Wachs und Öl im Wasserbad schmelzen.', 'In einen Tiegel gießen und fest werden lassen.', 'Sauberes, trockenes Leder hauchdünn damit einreiben, einziehen lassen, polieren.'], tausch: 'Statt Bienenwachs 15 g Candelilla- oder Carnaubawachs.', tipp: 'Vorher an unauffälliger Stelle testen – helles Leder kann nachdunkeln. Nicht für Wildleder und Nubuk.' }),
    'Glattleder reinigen: mit einem nebelfeuchten Tuch und ein wenig Seifenkraut- oder Waschnusssud abwischen, trocknen lassen, dann pflegen.',
    { h2: 'Metall' },
    R({ titel: 'Silber putzen mit Alufolie und Natron', info: 'Für Besteck und Schmuck', thema: T.MOEBEL, zutaten: ['eine Schüssel (kein Metall), mit Alufolie ausgelegt (glänzende Seite nach oben)', '1 Liter heißes Wasser', '2 EL Natron, 1 EL Salz'], schritte: ['Natron und Salz im heißen Wasser auflösen und in die Schüssel gießen.', 'Silber hineinlegen, sodass es die Alufolie berührt.', '5 bis 10 Minuten warten – der schwarze Belag wandert auf die Folie (es riecht leicht nach Schwefel).', 'Silber abspülen und mit einem weichen Tuch polieren.'], tipp: 'Nicht für Schmuck mit Perlen, Steinen, Klebestellen oder gewollter Patina (Antiksilber).' }),
    R({ titel: 'Messing und Kupfer polieren', info: 'Für Töpfe, Griffe, Dekoration', thema: T.MOEBEL, zutaten: ['½ Zitrone', '1 EL Salz', 'oder: Paste aus 1 EL Essig, 1 EL Salz, 1 EL Mehl'], schritte: ['Salz auf die Schnittfläche der Zitrone streuen und das Metall damit abreiben – oder die Paste auftragen und 15 Minuten einwirken lassen.', 'Gründlich abspülen und sofort trocken polieren.'], tipp: 'Nicht für lackiertes Messing.' }),
    { punkte: ['**Edelstahl:** mit etwas Öl auf einem Tuch in Schliffrichtung polieren.', '**Chrom:** mit Essigwasser oder einer zerknüllten, feuchten Alufolie leichten Rost abreiben.', '**Gusseisen:** siehe Kapitel Spülen.'] },
  ],
};
