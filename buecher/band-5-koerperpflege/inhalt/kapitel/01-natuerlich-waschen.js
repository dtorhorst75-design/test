const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'natuerlich-waschen', teil: 'waschen', titel: 'Natürlich waschen – ganz ohne Seife', kurz: 'Natürlich waschen',
  bloecke: [
    'Lange bevor es Seife gab, haben sich Menschen mit dem gewaschen, was die Natur hergibt: mit schäumenden Pflanzen, mit Mehl und Kleie, mit Tonerde und mit Hafer. Diese Mittel reinigen sanft, ohne die Haut auszutrocknen – und sie kosten fast nichts.',
    { tabelle: [['Natürliches Waschmittel', 'Wie es wirkt', 'Gut für'],
      ['**Seifenkraut** (Band 1)', 'Saponine aus Wurzel und Blättern schäumen und lösen Fett', 'Haare, Körper, empfindliche Haut'],
      ['**Waschnüsse** (Schalen des Waschnussbaums, *Sapindus*)', 'Saponine, mild', 'Haare, Körper, auch Wäsche'],
      ['**Roggenmehl**', 'bindet Fett, ohne die Haut zu entfetten', 'Haare (Kapitel Haare)'],
      ['**Heilerde und Tonerde** (z. B. Rhassoul)', 'nimmt Fett und Schmutz auf, mineralisch', 'Gesicht, Körper, fettiges Haar'],
      ['**Haferflocken und Weizenkleie**', 'reinigen sanft, Schleimstoffe beruhigen', 'empfindliche Haut, Babys, Gesicht'],
      ['**Honig**', 'reinigt, bindet Feuchtigkeit', 'Gesicht'],
    ], breiten: [3000, 3400, 2670] },
    R({ titel: 'Seifenkraut-Waschgel', info: 'Für etwa 250 ml', thema: T.WASCHEN, zutaten: ['15 g getrocknete Seifenkrautwurzel, zerkleinert (oder 2 Handvoll frisches Kraut)', '300 ml Wasser', 'nach Belieben 1 EL getrocknete Lavendel- oder Kamillenblüten'], schritte: ['Wurzel über Nacht in kaltem Wasser einweichen.', 'Aufkochen und 15 Minuten leise köcheln, in den letzten 5 Minuten die Blüten dazugeben.', 'Abkühlen lassen und durch ein Tuch abseihen.', 'In eine Flasche füllen. Vor Gebrauch schütteln – es schäumt leicht.'], tipp: 'Für Körper und Haare. **Nicht in die Augen bringen** (brennt) und nicht trinken. Im Kühlschrank 3 bis 5 Tage haltbar – lieber oft frisch ansetzen.' }),
    R({ titel: 'Waschnuss-Shampoo', info: 'Für etwa 250 ml', thema: [T.WASCHEN, T.HAARE], zutaten: ['8 bis 10 Waschnussschalen', '300 ml Wasser'], schritte: ['Schalen in Wasser 20 Minuten köcheln lassen.', 'Abkühlen lassen, abseihen und in eine Flasche füllen.', 'Wie Shampoo in die Kopfhaut einmassieren und gründlich ausspülen.'], tipp: 'Im Kühlschrank etwa eine Woche haltbar. Nicht in die Augen bringen.' }),
    R({ titel: 'Hafer-Waschbeutel', info: 'Für 2 bis 3 Anwendungen', thema: [T.WASCHEN, T.GESICHT], zutaten: ['3 EL zarte Haferflocken', 'nach Belieben 1 EL getrocknete Kamillen- oder Ringelblumenblüten', 'ein kleines Baumwollsäckchen oder ein Stück Mull'], schritte: ['Haferflocken und Blüten in das Säckchen füllen und zubinden.', 'Unter warmem Wasser anfeuchten und leicht ausdrücken, bis milchige Flüssigkeit austritt.', 'Damit Gesicht und Körper sanft abreiben.', 'Danach das Säckchen auswaschen und trocknen lassen oder den Inhalt kompostieren.'], tipp: 'Ideal für empfindliche, trockene oder juckende Haut – und für Babys.' }),
    R({ titel: 'Heilerde-Waschpaste', info: 'Für eine Anwendung', thema: [T.WASCHEN, T.GESICHT], zutaten: ['1 TL feine Heilerde oder Rhassoul (Lavaerde)', 'etwas Wasser oder Kamillentee'], schritte: ['Zu einer dünnen Paste anrühren.', 'Auf die feuchte Haut auftragen und sanft einmassieren.', 'Mit lauwarmem Wasser abspülen.'], tipp: 'Gut bei fettiger und unreiner Haut. Trockene Haut danach eincremen.' }),
    R({ titel: 'Honig-Reinigung fürs Gesicht', info: 'Für eine Anwendung', thema: T.GESICHT, zutaten: ['1 TL flüssiger Honig'], schritte: ['Honig mit leicht feuchten Fingern auf dem Gesicht verteilen.', '1 bis 2 Minuten sanft einmassieren.', 'Mit warmem Wasser abwaschen.'], tausch: 'Statt Honig ein paar Tropfen Jojobaöl (siehe Reinigungsöl im Kapitel Gesicht).' }),
  ],
};
