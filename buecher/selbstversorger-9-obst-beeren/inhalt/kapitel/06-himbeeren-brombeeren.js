const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 6, id: 'himbeeren-brombeeren', teil: 'beeren', titel: 'Himbeeren und Brombeeren', kurz: 'Him- und Brombeeren',
  bloecke: [
    { h2: 'Himbeeren' },
    'Es gibt zwei Arten: **Sommerhimbeeren** tragen im Juni und Juli an den Ruten vom Vorjahr. **Herbsthimbeeren** tragen von August bis zum Frost an den Ruten, die im selben Jahr gewachsen sind. Für Anfänger sind Herbsthimbeeren einfacher: Sie bekommen kaum Rutenkrankheiten, und der Schnitt ist ganz leicht.',
    R({ titel: 'Himbeeren pflanzen', info: 'Oktober bis November oder März', thema: T.PLANEN, zutaten: ['Himbeerruten aus der Baumschule (etwa 3 bis 4 pro Meter)', 'reifer Kompost, Laubmulch', 'für Sommerhimbeeren: Pfosten und zwei Spanndrähte'], schritte: ['Ein Beet von 50 cm Breite vorbereiten, Kompost einarbeiten. Himbeeren mögen lockeren, humosen, eher sauren Boden – kein Staunass.', 'Die Ruten **flach** pflanzen (Wurzeln nur 5 cm unter die Erde), Abstand 40 bis 50 cm in der Reihe, 1,5 m zwischen den Reihen.', 'Auf 30 cm zurückschneiden, angießen, dick mit Laub mulchen.', 'Für Sommerhimbeeren an jedem Reihenende einen Pfosten setzen und in 60 und 120 cm Höhe einen Draht spannen.'], tipp: 'Himbeeren breiten sich mit Ausläufern aus. Was außerhalb der Reihe wächst, stichst du ab – oder du verschenkst es.' }),
    { tabelle: [['', 'Schnitt'],
      ['**Sommerhimbeeren**', 'Direkt **nach der Ernte** die abgetragenen Ruten bodennah abschneiden. Von den jungen Ruten **8 bis 10 kräftige pro Meter** stehen lassen und an die Drähte binden – sie tragen nächstes Jahr.'],
      ['**Herbsthimbeeren**', 'Im Februar **alle Ruten bodennah abschneiden**. Im Frühjahr treiben neue Ruten aus, die im Herbst tragen. Mehr ist nicht zu tun.'],
    ], breiten: [2500, 6570] },
    { h2: 'Brombeeren' },
    'Moderne **stachellose Sorten** sind im Garten angenehmer als die wilden. Sie wachsen kräftig, brauchen ein Spalier oder einen Zaun und tragen von August bis September an den Ranken vom Vorjahr.',
    R({ titel: 'Brombeeren erziehen und schneiden', info: 'Pflanzen im Herbst oder Frühjahr, Schnitt nach der Ernte', thema: [T.PLANEN, T.SCHNITT], zutaten: ['ein Spalier oder ein Zaun mit 3 bis 4 Drähten (bis 1,8 m Höhe)', 'Bast oder Schnur zum Anbinden', 'Gartenschere, Handschuhe'], schritte: ['Eine Pflanze pro 3 bis 4 m Spalier setzen, sonnig, etwas geschützt.', 'Die jungen Ranken fächerförmig auf einer Seite an die Drähte binden, die Ranken vom Vorjahr (mit Früchten) auf der anderen.', 'Nach der Ernte die **abgetragenen Ranken bodennah abschneiden**.', 'Von den neuen Ranken 4 bis 6 kräftige behalten und anbinden, die übrigen entfernen.', 'Seitentriebe der neuen Ranken im Spätwinter auf 2 bis 3 Knospen einkürzen.'], tipp: 'Brombeeren und Himbeeren sind ausführlich, mit Rezepten, in Band 2 beschrieben.' }),
  ],
};
