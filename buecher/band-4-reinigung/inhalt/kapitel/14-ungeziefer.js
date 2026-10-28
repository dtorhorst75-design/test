const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 14, id: 'ungeziefer', teil: 'wohnen', titel: 'Ungeziefer im Haus', kurz: 'Ungeziefer',
  bloecke: [
    'Gegen ungebetene Gäste hilft vor allem eines: **Vorbeugung.** Lebensmittel dicht verschließen, Krümel wegwischen, Ritzen abdichten. Für den Rest gibt es sanfte Hausmittel.',
    R({ titel: 'Fruchtfliegenfalle', info: 'Für die Küche im Spätsommer', thema: T.SCHAEDLINGE, zutaten: ['ein kleines Glas', '3 EL Apfelessig', '2 EL Saft oder etwas Obst', '1 Tropfen Spülmittel'], schritte: ['Essig und Saft ins Glas geben, Spülmittel dazutropfen – es bricht die Oberflächenspannung, sodass die Fliegen nicht wieder hochkommen.', 'Glas neben die Obstschale stellen.', 'Alle paar Tage erneuern.'], tipp: 'Obst nicht offen liegen lassen, Biomüll täglich leeren – dann gibt es kaum Fruchtfliegen.' }),
    { h2: 'Ameisen' },
    { punkte: ['Ameisenstraße mit Essigwasser abwischen – das löscht die Duftspur.', '**Duftbarrieren** aus Zimt, Lavendel, Pfefferminze oder Kreidestrichen an Eintrittsstellen legen.', 'Eintrittsstellen (Fugen, Fensterritzen) finden und abdichten.', 'Draußen ein Nest umsiedeln: Einen Blumentopf mit Holzwolle umgekehrt auf das Nest stellen, nach einigen Tagen mit einem Spaten unterfahren und weit weg tragen.'] },
    { h2: 'Kleidermotten und Lebensmittelmotten' },
    { punkte: ['**Kleidermotten:** Schrank aussaugen und mit Essigwasser auswischen, Wollsachen einfrieren (2 bis 3 Tage) oder bei 60 °C waschen. Lavendel, Zedernholz und Steinklee (Band 1) halten fern.', '**Lebensmittelmotten:** Befallene Vorräte im Restmüll entsorgen, Schrank aussaugen und auswischen, Vorräte in dicht schließenden Gläsern lagern. **Schlupfwespen** (im Handel) sind natürliche Gegenspieler.', 'Pheromonfallen zeigen einen Befall an, bekämpfen ihn aber nicht.'] },
    R({ titel: 'Mottensäckchen', info: 'Für den Kleiderschrank', thema: T.SCHAEDLINGE, zutaten: ['kleine Baumwollbeutel', 'getrocknete Lavendelblüten, Zedernholzspäne oder Steinklee', 'ein paar Tropfen Lavendelöl zum Auffrischen'], schritte: ['Beutel füllen und zubinden.', 'Zwischen die Kleidung hängen oder legen.', 'Alle 2 bis 3 Monate leicht zusammendrücken oder mit Öl auffrischen.'] }),
    { h2: 'Wann der Profi kommen muss' },
    'Bei Schaben, Bettwanzen, Ratten, Mäusen in großer Zahl oder Holzschädlingen hilft kein Hausmittel. Hier ist ein Schädlingsbekämpfer (Kammerjäger) die richtige Wahl – bei Mietwohnungen zuerst den Vermieter informieren.',
  ],
};
