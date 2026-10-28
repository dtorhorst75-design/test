const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 3, id: 'rouge-bronzer', teil: 'gesicht', titel: 'Rouge und Bronzer', kurz: 'Rouge und Bronzer',
  bloecke: [
    'Rouge bringt Frische ins Gesicht, Bronzer einen Hauch Sommer. Beides gibt es als Puder oder als Creme.',
    R({ titel: 'Puder-Rouge in Rosé', info: 'Für ein kleines Döschen', thema: T.WANGEN, zutaten: ['2 TL Pfeilwurzelmehl oder Maisstärke', '½ TL Rote-Bete-Pulver, fein gesiebt', 'eine Prise Kakaopulver', 'nach Belieben ½ TL rosa Tonerde'], schritte: ['Alles durch ein feines Sieb geben und gründlich mischen.', 'Am Handrücken testen. Für zartere Farbe mehr Stärke, für kräftigere mehr Rote Bete.', 'In ein Döschen füllen.', 'Mit einem Rougepinsel auf die Wangenknochen tupfen und nach außen verwischen.'], tipp: 'Lächle in den Spiegel und gib das Rouge auf die höchste Stelle der Wangen – dort, wo sie sich „rund“ machen.' }),
    R({ titel: 'Ziegelrotes Rouge', info: 'Für warme Hauttöne', thema: T.WANGEN, zutaten: ['2 TL Pfeilwurzelmehl', '1 TL rote Tonerde', '¼ TL Kakaopulver'], schritte: ['Mischen, sieben und abfüllen wie das Puder-Rouge.'] }),
    R({ titel: 'Creme-Rouge', info: 'Für einen kleinen Tiegel', thema: T.WANGEN, zutaten: ['3 g Candelillawachs', '6 g Sheabutter', '8 g Jojobaöl', '½ TL Rote-Bete-Pulver, eine Messerspitze Kakao'], schritte: ['Pulver mit etwas Öl glatt anreiben.', 'Wachs, Butter und Öl im Wasserbad schmelzen, Farbpaste einrühren.', 'In den Tiegel gießen, abkühlen lassen.', 'Mit den Fingerspitzen auf die Wangen tupfen und einklopfen.'], tipp: 'Creme-Rouge wirkt besonders natürlich auf trockener Haut. Bei fettiger Haut lieber die Puder-Variante nehmen.' }),
    R({ titel: 'Bronzer aus Kakao', info: 'Für ein kleines Döschen', thema: T.WANGEN, zutaten: ['1 EL Pfeilwurzelmehl oder Maisstärke', '1 bis 2 TL Kakaopulver (je nach Hautton)', 'nach Belieben ¼ TL rote Tonerde für Wärme'], schritte: ['Alles sieben und gründlich mischen.', 'Am Hals testen – Bronzer sollte nur zwei Töne dunkler sein als deine Haut.', 'In ein Döschen füllen.', 'Mit einem großen Pinsel dort auftragen, wo die Sonne dich zuerst trifft: Stirn, Nasenrücken, Wangenknochen, Kinn.'] }),
  ],
};
