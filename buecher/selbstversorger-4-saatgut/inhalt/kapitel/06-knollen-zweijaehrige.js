const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 6, id: 'knollen-zweijaehrige', teil: 'fortgeschritten', titel: 'Knollen, Zehen und die Zweijährigen', kurz: 'Knollen und Zweijährige',
  bloecke: [
    { h2: 'Was du einfach wieder pflanzt' },
    'Manche Gemüse vermehrst du nicht über Samen, sondern über Teile der Pflanze. Das ist einfach – du musst nur die richtigen auswählen und gut lagern.',
    R({ titel: 'Knoblauch aus eigener Ernte', info: 'Auswählen im Juli, stecken im Oktober', thema: [T.GRUND, T.LAGERN], zutaten: ['die größten, gesündesten Knollen deiner Ernte'], schritte: ['Bei der Ernte im Juli die schönsten Knollen beiseitelegen und gut trocknen.', 'Im Oktober in Zehen teilen. Die **großen äußeren Zehen** stecken, die kleinen inneren in der Küche verwenden.', 'Zehen mit der Spitze nach oben 3 bis 5 cm tief stecken, Abstand 15 cm.'], tipp: 'So wird dein Knoblauch von Jahr zu Jahr besser an deinen Garten angepasst. Knoblauch aus dem Supermarkt ist oft für ein anderes Klima gezüchtet und manchmal behandelt – lieber im Fachhandel oder bei anderen Gärtnern kaufen.' }),
    R({ titel: 'Pflanzkartoffeln aus eigener Ernte', info: 'Auswählen im September', thema: [T.GRUND, T.LAGERN], zutaten: ['die gesündesten Pflanzen eines Beets', 'eine eigene Kiste'], schritte: ['Schon im Sommer die kräftigsten, gesunden Pflanzen markieren – ohne gelbe, gekräuselte oder fleckige Blätter.', 'Bei der Ernte von diesen Pflanzen mittelgroße, unverletzte Knollen (etwa hühnereigroß) aussuchen.', 'Getrennt von den Speisekartoffeln kühl, dunkel und frostfrei lagern.', 'Im März vorkeimen und pflanzen (Heft 1).'], tipp: 'Kartoffeln sammeln über die Jahre Viruskrankheiten an. Eigene Pflanzkartoffeln nimmst du deshalb 2 bis 3 Jahre hintereinander, dann kaufst du wieder neues, zertifiziertes Pflanzgut.' }),
    { h2: 'Die Zweijährigen – für später' },
    'Möhren, Rote Bete, Mangold, Kohl, Lauch, Zwiebeln, Pastinaken und Petersilie blühen erst im zweiten Jahr. Für ihre Samen musst du die besten Pflanzen im Herbst auswählen, frostfrei überwintern (im Beet oder eingelagert) und im Frühjahr wieder auspflanzen.',
    { tabelle: [['Gemüse', 'Was es schwierig macht'],
      ['**Möhren**', 'kreuzen sich mit der **Wilden Möhre** am Wegrand – dann werden die Nachkommen weiß, dünn und holzig. Blüten müssen mit Vlies eingetütet werden.'],
      ['**Rote Bete, Mangold**', 'kreuzen sich miteinander und mit Zuckerrüben; Windbestäuber, der Pollen fliegt weit.'],
      ['**Kohl**', 'alle Kohlarten (Weißkohl, Grünkohl, Kohlrabi, Brokkoli, Rosenkohl) kreuzen sich untereinander; es braucht viele Pflanzen.'],
      ['**Zwiebeln, Lauch**', 'brauchen viele Pflanzen, damit die Sorte nicht verarmt; Insektenbestäuber.'],
    ], breiten: [2300, 6770] },
    'Wenn du in deinen ersten Saatgutjahren mit Bohnen, Erbsen, Tomaten, Salat und Kräutern sicher geworden bist, findest du ausführliche Anleitungen für die Zweijährigen im „Handbuch Samengärtnerei“ (siehe Literatur) und bei den Erhaltungsvereinen.',
  ],
};
