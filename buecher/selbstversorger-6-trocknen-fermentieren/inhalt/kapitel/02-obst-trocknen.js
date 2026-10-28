const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 2, id: 'obst-trocknen', teil: 'trocknen', titel: 'Apfelringe, Dörrzwetschgen und Fruchtleder', kurz: 'Obst trocknen',
  bloecke: [
    R({ titel: 'Apfelringe', info: 'Für etwa 2 kg Äpfel', thema: T.OBST, zutaten: ['2 kg säuerliche Äpfel (Boskop, Elstar, alte Sorten – auch Fallobst ohne faule Stellen)', 'ein Apfelausstecher, ein scharfes Messer', 'eine Schüssel Wasser mit dem Saft einer Zitrone', 'Backpapier und Backbleche oder eine lange Schnur'], schritte: ['Äpfel waschen, das Kerngehäuse ausstechen. Schälen ist nicht nötig.', 'In **5 mm dicke Ringe** schneiden und sofort ins Zitronenwasser legen – so bleiben sie hell.', 'Abtropfen lassen und trocken tupfen.', '**Im Backofen:** nebeneinander auf Backpapier legen und bei 50 bis 60 °C (Tür einen Spalt offen) 6 bis 10 Stunden trocknen, zwischendurch wenden.', '**An der Luft:** auf eine Schnur oder einen Holzstab fädeln, mit etwas Abstand, und in einem warmen, trockenen Raum über dem Herd oder Ofen 1 bis 2 Wochen aufhängen.', 'Fertig, wenn sie ledrig und biegsam sind und sich nicht mehr feucht anfühlen.'], tipp: 'Die Apfelringe unserer Großmütter hingen auf Schnüren über dem Kachelofen. Schalen und Kerngehäuse ergeben noch Apfelpektin (Heft 5) oder Apfeltee.' }),
    R({ titel: 'Dörrzwetschgen', info: 'Für 2 kg Zwetschgen', thema: T.OBST, zutaten: ['2 kg reife, aber feste Zwetschgen', 'Backpapier, Backbleche'], schritte: ['Zwetschgen waschen, halbieren, entsteinen.', 'Mit der Schnittfläche nach oben auf die Bleche legen.', 'Bei 50 bis 60 °C 12 bis 24 Stunden trocknen (Tür einen Spalt offen). Nach der Hälfte der Zeit umdrehen.', 'Fertig, wenn sie dunkel, runzelig und zäh sind und beim Drücken kein Saft mehr austritt.'], tipp: 'In Süddeutschland und Österreich heißen getrocknete Birnen „Kletzen“ oder „Hutzeln“ – sie gehören ins Früchtebrot. Birnen genauso trocknen wie Apfelringe, in Spalten oder Scheiben.' }),
    R({ titel: 'Fruchtleder aus Apfel und Pflaume', info: 'Für 2 Backbleche', thema: T.OBST, zutaten: ['500 g Apfelmus (ungesüßt) oder pürierte Äpfel', '500 g pürierte Zwetschgen oder Beeren', 'nach Belieben 1 bis 2 EL Zucker oder Sirup, eine Prise Zimt', 'Backpapier'], schritte: ['Das Obstpüree glatt rühren und abschmecken.', 'Etwa **3 bis 5 mm dick** gleichmäßig auf das Backpapier streichen, am Rand etwas dicker.', 'Bei 50 bis 60 °C (Tür einen Spalt offen) 6 bis 8 Stunden trocknen, bis die Masse nicht mehr klebt und sich vom Papier lösen lässt.', 'Mit dem Papier aufrollen, in Stücke schneiden und in einem Glas aufbewahren.'], tipp: 'Die Süßigkeit für die Brotdose – ganz ohne Zusätze. Im Glas hält sie mehrere Monate.' }),
    { h2: 'Weitere Früchte zum Trocknen' },
    { tabelle: [['Frucht', 'So vorbereiten', 'Trocknen bei 50 bis 60 °C'],
      ['Birnen', 'in Spalten oder Scheiben, Zitronenwasser', '8 bis 12 Stunden'],
      ['Aprikosen', 'halbieren, entsteinen', '12 bis 18 Stunden'],
      ['Kirschen', 'entsteinen', '12 bis 18 Stunden'],
      ['Heidelbeeren, Johannisbeeren', 'kurz in kochendes Wasser tauchen, damit die Haut aufplatzt', '10 bis 16 Stunden'],
      ['Hagebutten (für Tee)', 'längs halbieren, Kerne und Härchen entfernen (siehe Band 2)', '6 bis 10 Stunden'],
    ], breiten: [2800, 3600, 2670] },
  ],
};
