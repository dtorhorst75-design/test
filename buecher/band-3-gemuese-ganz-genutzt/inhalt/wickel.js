// Grundlagenkapitel „Wickel und Auflagen aus der Gemüsekiste“ für Band 3.
// Die Grundtechniken stammen aus Band 1, damit sie in allen Bänden gleich lauten; die Anleitungen
// je Gemüse stehen direkt im jeweiligen Kapitel (Feld „wickel“).
const band1 = require('../../band-1-kraeuter-wildpflanzen/inhalt/wickel.js');

const alle = band1.kapitel.bloecke;
const bis = (titel) => alle.findIndex((b) => b && b.h2 === titel);
const technik = alle.slice(bis('Was du brauchst'), bis('Grundtechnik 4: Kräuterkissen und Wärmesäckchen'));

module.exports = {
  nachKapitel: 'Lagern, Einkochen und Grundrezepte',
  kapitel: {
    titel: 'Wickel und Auflagen aus der Gemüsekiste',
    bloecke: [
      'Zwiebelsäckchen bei Ohrenschmerzen, Kartoffelwickel bei Husten, Kohlblätter auf geschwollenen Gelenken: Viele der bekanntesten Hausmittel stammen nicht aus der Apotheke, sondern aus der Gemüsekiste. Sie wirken vor allem durch Wärme oder Kühle – und dadurch, dass du dich hinlegst und Ruhe gibst.',
      'Hier findest du die Grundtechniken. Die Anleitungen für die einzelnen Gemüse stehen im jeweiligen Kapitel unter „Wickel und Auflagen“.',
      ...technik,
      { h2: 'Wickel aus der Gemüsekiste im Überblick' },
      { tabelle: [
        ['Wofür', 'Anwendung', 'Gemüse'],
        ['Ohrenschmerzen', 'Zwiebelsäckchen', 'Zwiebel'],
        ['Husten, Bronchitis', 'warmer Kartoffelwickel, Zwiebelwickel auf der Brust', 'Kartoffel, Zwiebel'],
        ['Halsschmerzen', 'warmer Kartoffel-Halswickel', 'Kartoffel'],
        ['Schwellungen, schmerzende Gelenke, Brustspannen beim Stillen', 'Kohlblattauflage', 'Weißkohl'],
        ['Insektenstiche', 'Zwiebelscheibe auflegen', 'Zwiebel'],
        ['Müde, gereizte Haut', 'Gurkenscheiben, Gurkenmaske', 'Gurke'],
        ['Erkältung, Nebenhöhlen', 'Meerrettich-Nackenauflage (kurz!)', 'Meerrettich'],
      ], breiten: [3000, 3600, 2470] },
    ],
  },
  proPflanze: {},
};
