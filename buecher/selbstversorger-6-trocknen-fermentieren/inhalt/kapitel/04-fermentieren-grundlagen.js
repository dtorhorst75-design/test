const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 4, id: 'fermentieren-grundlagen', teil: 'fermentieren', titel: 'Wie Milchsäuregärung funktioniert', kurz: 'Fermentieren',
  bloecke: [
    'Auf jedem Gemüse leben Milchsäurebakterien. Gibst du Salz dazu und schließt die Luft aus, haben sie einen Vorteil gegenüber Fäulnisbakterien und Schimmel: Sie vermehren sich, verwandeln den Zucker im Gemüse in Milchsäure – und die macht das Gemüse sauer, haltbar und bekömmlich. Du brauchst dafür nur **Gemüse, Salz, ein Glas und Zeit**.',
    { h2: 'Die vier Regeln' },
    { tabelle: [['Regel', 'Warum'],
      ['**1. Die richtige Salzmenge**', '**2 % des Gemüsegewichts** beim Kraut (20 g Salz auf 1 kg), **2 bis 3 % Lake** für ganzes Gemüse (20 bis 30 g Salz auf 1 Liter Wasser). Zu wenig Salz: Es fault. Zu viel: Die Gärung kommt nicht in Gang.'],
      ['**2. Alles unter Lake**', 'Was aus der Flüssigkeit ragt, bekommt Luft und schimmelt. Ein Gewicht – ein kleineres Glas, ein Stein in einem Beutel, ein Kohlblatt – hält das Gemüse unten.'],
      ['**3. Das Gas muss raus**', 'Beim Gären entsteht Kohlendioxid. Gärtopf mit Wasserrinne, Bügelglas mit Gummiring (lässt Gas entweichen) oder Schraubglas, das du anfangs täglich kurz öffnest.'],
      ['**4. Erst warm, dann kühl**', 'Die ersten 3 bis 7 Tage bei Zimmertemperatur (18 bis 22 °C), dann kühler (12 bis 16 °C) weitergären und lagern.'],
    ], breiten: [2700, 6370] },
    { h2: 'Salz' },
    'Nimm **Salz ohne Zusätze**: reines Meersalz, Steinsalz oder „Kochsalz ohne Jod und Fluor“. Jod, Fluorid und Rieselhilfen können die Gärung bremsen.',
    { h2: 'Kahmhefe oder Schimmel?' },
    { tabelle: [['', 'So sieht es aus', 'Was du tust'],
      ['**Kahmhefe**', 'flacher, weißer, glatter oder leicht runzliger Film auf der Lake, riecht hefig', 'harmlos: abschöpfen, Glasrand sauber wischen, kühler stellen, Gemüse unter Lake halten'],
      ['**Schimmel**', 'flauschig, pelzig, grün, blau, schwarz oder rosa; im Gemüse oder darauf', '**alles wegwerfen**, nicht abschöpfen und weiter essen'],
      ['**Weiche, schleimige Stücke**', 'Gemüse matschig, riecht faulig', 'zu warm, zu wenig Salz oder Luft – wegwerfen'],
    ], breiten: [2200, 3600, 3270] },
    'Gutes Gärgemüse riecht **sauer und frisch**, nicht faulig. Die Lake darf trüb werden – das sind die Milchsäurebakterien.',
    R({ titel: 'Die Salzlake anrühren', info: 'Für 1 Liter', thema: T.GRUND, zutaten: ['1 Liter Wasser (Leitungswasser abgekocht und abgekühlt oder Quellwasser)', '20 bis 30 g Salz ohne Zusätze (2 bis 3 %)'], schritte: ['Das Salz im Wasser vollständig auflösen.', 'Die Lake kalt über das Gemüse gießen.'], tipp: 'Für weiches Gemüse und warme Küchen eher 3 %, für knackiges Wurzelgemüse und kühle Keller eher 2 %. Stark gechlortes Wasser vorher abkochen.' }),
  ],
};
