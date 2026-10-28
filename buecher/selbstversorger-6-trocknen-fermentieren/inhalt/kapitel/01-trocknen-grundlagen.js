const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'trocknen-grundlagen', teil: 'trocknen', titel: 'Trocknen: Luft, Wärme und Geduld', kurz: 'Trocknen',
  bloecke: [
    'Beim Trocknen entziehst du Obst, Gemüse und Kräutern so viel Wasser, dass Bakterien und Schimmel nicht mehr wachsen können. Dabei bleiben Geschmack und viele Nährstoffe erhalten – getrocknete Apfelringe und Zwetschgen schmecken sogar süßer als frische.',
    { h2: 'Drei Wege zu trocknen' },
    { tabelle: [['Wie', 'Gut für', 'Worauf du achtest'],
      ['**An der Luft**', 'Kräuter, Apfelringe auf der Schnur, Bohnen, Chilis, Zwiebeln', 'warm, trocken, luftig, schattig – Dachboden, über dem Ofen, ein Heizungsraum. Dauert Tage bis Wochen.'],
      ['**Im Backofen**', 'Obst, Gemüse, Tomaten', '50 bis 60 °C (Umluft 40 bis 50 °C), Tür mit einem Holzlöffel einen Spalt offen halten, damit Feuchtigkeit entweicht. Dauert 6 bis 24 Stunden.'],
      ['**Im Dörrgerät**', 'alles', 'sparsamer als der Backofen, gleichmäßig; lohnt sich bei großen Mengen'],
    ], breiten: [1900, 3200, 3970] },
    'Die Sonne allein reicht in Mitteleuropa meist nicht – die Nächte sind zu feucht, und Insekten finden das Trockengut schnell. Auf einem sonnigen, luftigen Dachboden aber trocknen Kräuter und Apfelringe wunderbar.',
    { h2: 'Die richtige Temperatur' },
    { tabelle: [['Was', 'Höchstens'],
      ['Kräuter und Blüten', '35 bis 40 °C – sonst verfliegt das Aroma'],
      ['Obst und Gemüse', '50 bis 60 °C – zu heiß, und es wird außen hart und innen feucht'],
      ['Tomaten', '50 bis 60 °C'],
    ], breiten: [3500, 5570] },
    R({ titel: 'Ist es trocken genug? Die Glasprobe', info: 'Nach jedem Trocknen', thema: T.GRUND, zutaten: ['das abgekühlte Trockengut', 'ein trockenes Schraubglas'], schritte: ['Das Trockengut vollständig auskühlen lassen und locker in das Glas füllen.', 'Verschließen und zwei, drei Tage beobachten.', 'Beschlägt das Glas innen oder fühlt sich das Trockengut weich und klebrig an: noch einmal nachtrocknen.', 'Bleibt das Glas klar: fertig.'], tipp: 'Obst ist trocken genug, wenn es ledrig-biegsam ist und beim Durchschneiden keine Feuchtigkeit mehr austritt. Gemüse ist hart bis knusprig, Kräuter rascheln und lassen sich zwischen den Fingern zerreiben.' }),
    { h2: 'Aufbewahren' },
    { punkte: ['In **dicht schließenden Gläsern oder Dosen**, dunkel und kühl.', 'Beschriften mit Inhalt und Datum.', 'Die ersten Wochen ab und zu nachsehen – Feuchtigkeit oder Schimmel zeigt sich am Anfang.', 'Getrocknetes hält **6 bis 12 Monate**, Kräuter verlieren nach einem Jahr deutlich an Aroma.', 'Gegen Lebensmittelmotten: alles in Gläsern, nichts in offenen Tüten. Ein Lorbeerblatt im Glas soll sie fernhalten.'] },
  ],
};
