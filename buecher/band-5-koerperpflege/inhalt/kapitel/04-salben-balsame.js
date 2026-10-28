const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 4, id: 'salben-balsame', teil: 'haut', titel: 'Salben und Balsame', kurz: 'Salben und Balsame',
  bloecke: [
    'Salben und Balsame bestehen nur aus Öl, Wachs und Butter – ohne Wasser. Deshalb sind sie lange haltbar und das Einfachste, womit du anfangen kannst.',
    { h2: 'Die Grundformel' },
    { tabelle: [['Konsistenz', 'Öl', 'Bienenwachs', 'oder pflanzliches Wachs'],
      ['weiche Salbe', '100 g', '8 bis 10 g', '6 bis 7 g'],
      ['feste Salbe', '100 g', '12 bis 15 g', '8 bis 10 g'],
      ['Lippenbalsam (Stift)', '100 g', '25 bis 30 g', '18 bis 20 g'],
    ], breiten: [2700, 1800, 2200, 2370] },
    R({ titel: 'Ringelblumensalbe', info: 'Für 2 Tiegel à 50 ml', thema: T.HAUT, zutaten: ['100 ml Ringelblumen-Ölauszug (Band 1)', '10 bis 12 g Bienenwachs', 'nach Belieben 5 g Sheabutter'], schritte: ['Ölauszug, Wachs und Butter im Wasserbad schmelzen.', 'Einen Tropfen auf einen kalten Teller geben und die Konsistenz prüfen, eventuell Wachs oder Öl ergänzen.', 'In saubere Tiegel gießen, offen abkühlen lassen, dann verschließen.'], tausch: 'Statt Bienenwachs 8 g Candelillawachs.', tipp: 'Für raue Hände, rissige Haut, kleine Schrunden. Ausführlich in Band 1.' }),
    R({ titel: 'Universalbalsam für die ganze Familie', info: 'Für 100 ml', thema: T.HAUT, zutaten: ['40 g Sheabutter', '20 g Kakaobutter', '30 g Mandelöl', '10 g Bienenwachs'], schritte: ['Alles im Wasserbad schmelzen.', 'Vom Herd nehmen und unter Rühren etwas abkühlen lassen.', 'In einen Tiegel gießen und **zügig im Kühlschrank** fest werden lassen – so wird Sheabutter nicht körnig.'], tausch: 'Statt Bienenwachs 7 g Candelillawachs.', tipp: 'Für Ellbogen, Hände, Lippen, trockene Stellen, Nagelhaut.' }),
    R({ titel: 'Lippenbalsam', info: 'Für 6 bis 8 Lippenstifthülsen', thema: T.LIPPEN, zutaten: ['10 g Bienenwachs', '10 g Sheabutter oder Kakaobutter', '20 g Jojoba- oder Mandelöl', 'nach Belieben 1 Tropfen Pfefferminzöl'], schritte: ['Wachs, Butter und Öl im Wasserbad schmelzen.', 'Vom Herd nehmen, Pfefferminzöl einrühren.', 'Mit einer Pipette zügig in die Hülsen füllen.', 'Abkühlen lassen, dann verschließen.'], tausch: 'Statt Bienenwachs 7 bis 8 g Candelillawachs.', tipp: 'Mit Kakaobutter duftet der Balsam nach Schokolade – Kinderlieblinge. Pfefferminzöl nicht für Kinder unter 6 Jahren.' }),
    R({ titel: 'Handbalsam für Gärtnerhände', info: 'Für 100 ml', thema: T.LIPPEN, zutaten: ['50 ml Ringelblumen- oder Johanniskraut-Ölauszug', '20 g Sheabutter', '15 g Lanolin (Wollwachs)', '10 g Bienenwachs'], schritte: ['Alles im Wasserbad schmelzen und in einen Tiegel füllen.', 'Abends dick auf die Hände auftragen, Baumwollhandschuhe darüber ziehen.'], tausch: 'Ohne Lanolin und Bienenwachs: 25 g Sheabutter, 8 g Candelillawachs.', tipp: 'Johanniskrautöl macht lichtempfindlich – nicht vor dem Sonnenbad verwenden.' }),
  ],
};
