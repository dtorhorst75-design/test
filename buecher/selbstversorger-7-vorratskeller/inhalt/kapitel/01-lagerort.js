const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'lagerort', teil: 'keller', titel: 'Was Vorräte im Winter brauchen', kurz: 'Der Lagerort',
  bloecke: [
    'Gemüse und Obst leben nach der Ernte weiter: Sie atmen, verdunsten Wasser und reifen nach. Gutes Lagern heißt, dieses Leben zu **verlangsamen** – mit Kühle, Dunkelheit und der richtigen Feuchtigkeit.',
    { h2: 'Die drei Lagerklimas' },
    { tabelle: [['Klima', 'Bedingungen', 'Für'],
      ['**Kühl und feucht**', '1 bis 5 °C, Luftfeuchtigkeit 85 bis 95 %, dunkel', 'Möhren, Rote Bete, Pastinaken, Sellerie, Rettich, Kohl, Lauch, Äpfel, Birnen'],
      ['**Kühl und mäßig feucht**', '4 bis 8 °C, 85 bis 90 %, dunkel', 'Kartoffeln'],
      ['**Kühl und trocken**', '0 bis 10 °C, 60 bis 70 %, luftig', 'Zwiebeln, Knoblauch'],
      ['**Mild und trocken**', '10 bis 15 °C, 60 bis 70 %', 'Kürbis, getrocknete Bohnen, Trockenobst'],
    ], breiten: [2300, 3300, 3470] },
    'Ein alter Gewölbekeller mit Lehmboden bietet von sich aus das kühl-feuchte Klima. Moderne, beheizte Keller sind oft zu warm und zu trocken. Dann suchst du dir die **kühlste Ecke** (Nordseite, weit weg von der Heizung) oder weichst auf Garage, Treppenhaus oder eine Erdmiete aus.',
    R({ titel: 'Den Lagerort prüfen', info: 'Im Oktober, bevor du einlagerst', thema: T.ORT, zutaten: ['ein einfaches Thermometer und ein Hygrometer (Luftfeuchtemesser), zusammen unter 15 Euro', 'Gartentagebuch'], schritte: ['Thermometer und Hygrometer eine Woche lang an den möglichen Lagerplatz legen.', 'Morgens und abends ablesen und notieren.', 'Mit der Tabelle oben vergleichen: Welche Ecke passt für welches Gemüse?'], tipp: 'Oft gibt es in einem Haus zwei, drei verschiedene Klimas: die kalte Garage für Äpfel und Kohl, die kühle Kellerecke für Kartoffeln und Möhren, der Dachboden für Zwiebeln und Kürbis.' }),
    { h2: 'Den Keller vorbereiten' },
    { punkte: ['**Reinigen:** Regale, Kisten und Boden im Spätsommer gründlich säubern, Reste vom Vorjahr entfernen. Holzkisten in der Sonne trocknen lassen.', '**Lüften:** an kalten, trockenen Tagen und in kalten Nächten das Fenster öffnen, damit der Keller abkühlt. An warmen, feuchten Tagen geschlossen halten.', '**Feuchtigkeit erhöhen:** eine Wanne mit Wasser aufstellen oder den Boden feucht wischen; Sand in den Kisten feucht halten.', '**Frostschutz:** Bei strengem Frost Fenster mit einem Strohsack oder einer Decke dämmen.', '**Gegen Mäuse:** Kellerfenster mit engem Drahtgitter sichern, Vorräte in Kisten mit Deckel oder hoch auf Regalen.'] },
    { h2: 'Gute und schlechte Nachbarn' },
    'Äpfel, Birnen, Tomaten und Quitten geben beim Reifen das Gas **Ethylen** ab. Es lässt andere Früchte schneller reifen – und Gemüse schneller altern. Kartoffeln keimen, Möhren werden bitter, Kohl wird gelb.',
    { kasten: 'Die Regel', zeilen: ['**Obst und Gemüse getrennt lagern** – am besten in verschiedenen Räumen, mindestens aber an entgegengesetzten Enden des Kellers. Äpfel nie direkt neben Kartoffeln.'] },
  ],
};
