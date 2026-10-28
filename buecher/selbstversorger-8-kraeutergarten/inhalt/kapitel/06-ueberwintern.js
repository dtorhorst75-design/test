const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 6, id: 'ueberwintern', teil: 'pflege', titel: 'Kräuter gut über den Winter bringen', kurz: 'Überwintern',
  bloecke: [
    'Im Beet überstehen die meisten ausdauernden Kräuter den Winter problemlos. Im Topf ist es schwieriger: Der Wurzelballen friert schnell durch, und in sonnigen Frosttagen vertrocknen immergrüne Kräuter, weil sie aus dem gefrorenen Boden kein Wasser ziehen können.',
    { tabelle: [['Kraut', 'Im Beet', 'Im Topf'],
      ['Schnittlauch, Minze, Melisse, Oregano, Liebstöckel, Estragon', 'winterhart, ziehen im Winter ein', 'winterhart, Topf an eine geschützte Hauswand'],
      ['Thymian, Salbei, Lavendel, Ysop', 'winterhart; in rauen Lagen mit Fichtenzweigen abdecken', 'Topf in Jute oder eine alte Decke wickeln, auf Holz stellen, an einen regengeschützten Platz'],
      ['**Rosmarin**', 'nur in milden Lagen und bei winterharten Sorten; bis etwa –10 °C', '**am besten hell und kühl im Haus** bei 5 bis 10 °C (Treppenhaus, kühles Fenster), wenig gießen'],
      ['Petersilie', 'zweijährig, übersteht den Winter meist; im Frühjahr blüht sie', 'auf der kühlen Fensterbank weiter ernten'],
      ['Basilikum', 'nicht winterhart', 'auf der warmen, hellen Fensterbank – hält oft nur einige Wochen; im Frühjahr neu säen'],
    ], breiten: [3100, 2900, 3070] },
    R({ titel: 'Kräutertöpfe winterfest machen', info: 'Im November', thema: T.PFLEGE, zutaten: ['Jutesäcke, alte Decken oder Baumwollreste', 'Holzlatten oder ein dickes Brett', 'trockenes Laub, Stroh, Fichtenzweige'], schritte: ['Die Töpfe dicht zusammenstellen, am besten an eine Hauswand mit Dachüberstand.', 'Auf ein Brett oder Holzlatten stellen – so frieren sie nicht von unten durch.', 'Die Töpfe rundum mit Jute oder einer Decke einwickeln.', 'Die Erdoberfläche mit Laub oder Stroh bedecken, Fichtenzweige locker über die Pflanzen legen.', 'An frostfreien Tagen gießen, wenn die Erde trocken ist – im Winter verdursten mehr Kräuter als sie erfrieren.'] }),
    R({ titel: 'Schnittlauch für den Winter treiben', info: 'Ab Dezember', thema: [T.PFLEGE, T.ERNTE], zutaten: ['ein Schnittlauchballen aus dem Garten', 'ein Topf mit Erde'], schritte: ['Im November ein Stück Schnittlauch mit Wurzeln ausgraben und in einen Topf setzen.', 'Den Topf draußen stehen lassen, bis er einmal Frost abbekommen hat – das braucht der Schnittlauch als „Winter“.', 'Dann auf eine helle, kühle Fensterbank stellen und feucht halten.', 'Nach 2 bis 3 Wochen kannst du frisches Grün schneiden.'] }),
  ],
};
