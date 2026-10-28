const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 5, id: 'abschminken', teil: 'pflege', titel: 'Sanft abschminken, sauber aufbewahren', kurz: 'Abschminken',
  bloecke: [
    'Natürliche Schminke lässt sich leicht entfernen. Öl löst Wachs und Farbe, warmes Wasser und ein weiches Tuch erledigen den Rest.',
    R({ titel: 'Abschminköl', info: 'Für 50 ml', thema: T.ABSCHMINKEN, zutaten: ['30 ml Sonnenblumen- oder Mandelöl', '20 ml Jojobaöl', 'eine kleine Flasche mit Pumpe oder Pipette'], schritte: ['Öle mischen und abfüllen.', 'Abends eine kleine Menge zwischen den Händen verreiben und auf das trockene Gesicht massieren.', 'Ein Tuch in warmes Wasser tauchen, auswringen, kurz aufs Gesicht legen und das Öl damit abnehmen.', 'Für Lidschatten und Brauen etwas Öl auf ein Pad geben, sanft aufdrücken, nicht reiben.'], tipp: 'Ohne Duftöl – es kommt in die Nähe der Augen. Die Ölmischung hält etwa ein halbes Jahr.' }),
    R({ titel: 'Waschbare Abschminkpads', info: 'Für etwa 10 Pads', thema: T.ABSCHMINKEN, zutaten: ['Reste von weichem Baumwollstoff: altes Frotteehandtuch, Flanell, Musselin', 'ein Glas oder eine Tasse als Schablone (7 bis 8 cm)', 'Nadel und Faden oder Nähmaschine', 'ein kleines Wäschenetz'], schritte: ['Mit der Schablone Kreise anzeichnen und ausschneiden – je zwei pro Pad.', 'Zwei Kreise links auf links legen und am Rand mit Zickzack oder engen Stichen zusammennähen.', 'Nach Gebrauch im Wäschenetz bei 60 °C mitwaschen.'] }),
    { h2: 'Pinsel sauber halten' },
    R({ titel: 'Pinsel waschen', info: 'Einmal pro Woche', thema: T.ABSCHMINKEN, zutaten: ['lauwarmes Wasser', 'ein Schuss Seifenkraut- oder Waschnusssud (Band 5) oder etwas Öl für Cremereste', 'ein sauberes Handtuch'], schritte: ['Cremereste vorher mit einem Tropfen Öl herauslösen.', 'Pinselhaare in den Sud tauchen und in der Handfläche sanft kreisen, bis kein Pulver mehr herauskommt.', 'Unter lauwarmem Wasser ausspülen, die Zwinge (Metallteil) möglichst trocken halten.', 'Haare in Form drücken und den Pinsel **liegend oder kopfüber** trocknen lassen – sonst läuft Wasser in den Stiel und löst den Leim.'] }),
    { h2: 'Aufbewahren' },
    { punkte: ['Alle Döschen mit **Inhalt und Datum** beschriften.', 'Trocken, kühl und **dunkel** lagern – nicht im feuchten Badezimmer, nicht auf der sonnigen Fensterbank.', 'Lippenprodukte nicht teilen und nach einem Lippenherpes oder einer Erkältung neu machen.', 'Lidschatten und Augenbrauenpuder nach einer Bindehautentzündung wegwerfen.', 'Riecht etwas ranzig, sieht anders aus oder zeigt Punkte: **wegwerfen**.'] },
    { h2: 'Ein kleines Schminkset zum Verschenken' },
    'In ein Holzkästchen oder eine Stoffrolle passen: ein getönter Lippenbalsam, ein Döschen Rouge, ein Döschen Puder und zwei waschbare Abschminkpads. Dazu ein Kärtchen mit Zutaten, Datum und dem Hinweis, das Produkt erst in der Armbeuge zu testen. Verschenken an Freundinnen ist erlaubt – **verkaufen** nur mit Sicherheitsbewertung.',
  ],
};
