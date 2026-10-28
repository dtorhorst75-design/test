const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 5, id: 'johannis-stachelbeeren', teil: 'beeren', titel: 'Johannisbeeren und Stachelbeeren', kurz: 'Johannis- und Stachelbeeren',
  bloecke: [
    'Johannisbeeren und Stachelbeeren sind die dankbarsten Sträucher für Anfänger: Sie wachsen in Sonne und Halbschatten, sind winterhart, tragen schon im zweiten Jahr und werden 15 bis 20 Jahre alt.',
    { tabelle: [['', 'Rote und weiße Johannisbeeren', 'Schwarze Johannisbeeren', 'Stachelbeeren'],
      ['Ernte', 'Juli', 'Juli', 'Juni bis Juli'],
      ['Ertrag pro Strauch', '3 bis 5 kg', '3 bis 5 kg', '3 bis 5 kg'],
      ['Trägt am besten an', '2- bis 3-jährigen Trieben', '**einjährigen** Trieben', '2- bis 3-jährigen Trieben'],
      ['Gut zu wissen', 'für Gelee, Saft, Kuchen', 'viel Vitamin C, für Saft und Sirup', 'mehltaufeste Sorten wählen (z. B. Invicta, Hinnonmäki)'],
    ], breiten: [1900, 2500, 2300, 2370] },
    R({ titel: 'Beerensträucher pflanzen', info: 'Oktober bis November oder März', thema: T.PLANEN, zutaten: ['Sträucher aus der Baumschule', 'Spaten, reifer Kompost', 'Mulch (Laub, Grasschnitt)'], schritte: ['Ein Pflanzloch graben, gut doppelt so groß wie der Wurzelballen.', 'Kompost mit der Erde mischen.', 'Johannisbeeren **etwas tiefer** pflanzen als sie vorher standen (5 bis 10 cm) – so bilden sich neue Triebe aus dem Boden.', 'Abstand 1,5 m zwischen den Sträuchern.', 'Kräftig angießen und dick mulchen – Beeren haben flache Wurzeln und lieben eine feuchte, kühle Bodendecke.', 'Nach dem Pflanzen alle Triebe um ein Drittel einkürzen.'] }),
    R({ titel: 'Johannisbeeren und Stachelbeeren schneiden', info: 'Direkt nach der Ernte oder im Spätwinter', thema: T.SCHNITT, zutaten: ['eine scharfe Gartenschere, bei Stachelbeeren dicke Handschuhe'], schritte: ['Ein gesunder Strauch hat **8 bis 12 Triebe** in verschiedenen Altersstufen.', 'Jedes Jahr die **2 bis 3 ältesten Triebe** (dunkle Rinde, wenig Fruchtholz, ab etwa 4 Jahren) direkt am Boden abschneiden.', 'Ebenso viele kräftige junge Bodentriebe stehen lassen, schwache entfernen.', 'Nach innen wachsende und am Boden liegende Triebe herausnehmen, damit Licht in den Strauch kommt.'], tipp: 'Bei **schwarzen Johannisbeeren** stärker verjüngen: Sie tragen vor allem am Holz vom Vorjahr. Wer direkt nach der Ernte schneidet, kann die Zweige mit den letzten Beeren gleich abschneiden und in der Küche abzupfen.' }),
  ],
};
