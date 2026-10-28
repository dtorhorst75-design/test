const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 2, id: 'puder', teil: 'gesicht', titel: 'Puder für jeden Hautton', kurz: 'Puder',
  bloecke: [
    'Ein loser Puder nimmt den Glanz, macht die Haut matt und ebenmäßig. Er deckt Rötungen nicht ab wie eine Grundierung, sondern wirkt eher wie ein feiner Schleier. Die Grundlage ist immer gleich: Stärke und Tonerde. Den Hautton mischst du mit Kakao.',
    R({ titel: 'Transparenter Puder', info: 'Für ein kleines Döschen', thema: T.TEINT, zutaten: ['2 EL Pfeilwurzelmehl oder Maisstärke', '1 TL weiße Tonerde (Kaolin)', 'ein feines Teesieb, eine Schüssel, ein Döschen'], schritte: ['Stärke und Tonerde zusammen durch das Sieb in die Schüssel geben.', 'Mit einem Löffel gründlich mischen und noch einmal sieben.', 'In ein sauberes, trockenes Döschen füllen.', 'Mit einem großen Pinsel aufnehmen, abklopfen und sparsam auf Stirn, Nase und Kinn geben.'], tipp: 'Auf sehr heller Haut kann reine Stärke leicht weißlich wirken – dann eine Messerspitze Kakao dazugeben.' }),
    R({ titel: 'Puder in deinem Hautton', info: 'Für ein kleines Döschen', thema: T.TEINT, zutaten: ['2 EL Pfeilwurzelmehl oder Maisstärke', '1 TL weiße Tonerde', 'Kakaopulver, fein gesiebt (Menge siehe Tabelle)', 'für rosigen Unterton: eine Prise rosa Tonerde'], schritte: ['Grundpuder wie oben mischen.', 'Kakao **in kleinen Schritten** dazugeben – jeweils eine Messerspitze – und gründlich verreiben.', 'Nach jedem Schritt an der Kieferlinie testen, bei Tageslicht. Der Puder sollte dort fast verschwinden.', 'Wenn der Ton passt: noch einmal sieben und abfüllen.'] }),
    { tabelle: [['Hautton', 'Kakao auf 2 EL Grundpuder (Richtwert)'],
      ['sehr hell', '1 Messerspitze'],
      ['hell', '¼ TL'],
      ['mittel', '½ bis 1 TL'],
      ['dunkel', '1 bis 2 TL, eventuell etwas weniger Tonerde'],
    ], breiten: [3000, 6070] },
    'Schreib dir die Mengen auf, wenn dein Ton gefunden ist – im Sommer brauchst du vielleicht etwas mehr Kakao als im Winter.',
    { kasten: 'Puder richtig benutzen', zeilen: ['Pinsel nur leicht eintauchen, am Döschenrand abklopfen und in sanften Bewegungen auftragen. Lieber zweimal wenig als einmal zu viel. Den Puder nicht mit feuchten Fingern oder Schwämmchen entnehmen – Feuchtigkeit lässt ihn verkeimen.'] },
  ],
};
