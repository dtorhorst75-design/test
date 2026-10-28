const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 7, id: 'wintergemuese', teil: 'beet', titel: 'Im Sommer an den Winter denken', kurz: 'Wintergemüse',
  bloecke: [
    'Die Ernte im Winter beginnt im Frühsommer. Wer im Dezember Grünkohl, Lauch und Feldsalat aus dem Garten holen will, muss im Mai, Juni und August säen. Das ist der Schritt, der aus einem Sommergarten einen Selbstversorgergarten macht.',
    { tabelle: [['Wintergemüse', 'Säen', 'Pflanzen', 'Ernte'],
      ['**Grünkohl**', 'Mai bis Mitte Juni', 'Juni bis Mitte Juli', 'November bis Februar'],
      ['**Rosenkohl**', 'April bis Mai', 'Ende Mai bis Juni', 'Oktober bis Februar'],
      ['**Winterlauch**', 'April bis Mai', 'Juni bis Mitte Juli', 'Oktober bis März'],
      ['**Lagermöhren**', 'Ende Mai bis Mitte Juni', '–', 'Oktober, dann einlagern'],
      ['**Rote Bete zum Lagern**', 'Ende Mai bis Ende Juni', '–', 'Oktober, dann einlagern'],
      ['**Pastinaken**', 'März bis Mai', '–', 'Oktober bis März, frostfest im Beet'],
      ['**Feldsalat**', 'Mitte August bis Mitte September', '–', 'Oktober bis März'],
      ['**Winterportulak**', 'September', '–', 'November bis März'],
      ['**Winterspinat**', 'Anfang bis Mitte September', '–', 'Oktober bis November und wieder ab März'],
      ['**Knoblauch**', 'Zehen stecken Oktober bis November', '–', 'Juli im nächsten Jahr'],
      ['**Winter-Steckzwiebeln**', 'stecken September', '–', 'Juni im nächsten Jahr'],
    ], breiten: [2400, 2500, 1900, 2270] },
    { h2: 'Winterhart heißt nicht unverwüstlich' },
    { punkte: ['Grünkohl, Rosenkohl, Lauch, Pastinaken und Feldsalat vertragen Frost. Bei starkem Kahlfrost unter –10 °C ohne Schnee hilft ein Vlies oder eine Lage Fichtenzweige.', 'Bei Frost **nicht ernten**: Gefrorene Blätter werden matschig. Warte auf einen frostfreien Tag.', 'Rund um die Pflanzen mit Laub mulchen – das schützt die Wurzeln und den Boden.', 'Möhren und Rote Bete vertragen nur leichten Frost. Hol sie im Oktober aus der Erde und lagere sie ein (Heft „Vorratskeller und Lagerung“).'] },
    R({ titel: 'Ein Saatbeet für Kohl und Lauch', info: 'Im Mai', thema: T.BEET, zutaten: ['eine kleine, feinkrümelige Ecke im Garten (etwa 1 m²)', 'Saatgut Grünkohl, Rosenkohl, Winterlauch', 'ein Kulturschutznetz gegen Kohlfliege und Erdflöhe'], schritte: ['Das Saatbeet fein harken.', 'In Reihen mit 10 bis 15 cm Abstand dünn säen, Kohl 1 cm tief, Lauch 1 bis 2 cm.', 'Netz darüber legen, feucht halten.', 'Nach 5 bis 7 Wochen sind die Pflanzen bleistiftdick (Lauch) bzw. haben 4 bis 6 Blätter (Kohl) und kommen an ihren endgültigen Platz – oft dorthin, wo gerade Erbsen oder Frühkartoffeln abgeerntet wurden.'], tipp: 'So brauchst du im Frühsommer keinen Platz auf dem Hauptbeet und keine Töpfe auf der Fensterbank. Lauch beim Pflanzen tief in ein Pflanzloch setzen, nur angießen, nicht zudrücken – so wird der weiße Schaft lang.' }),
  ],
};
