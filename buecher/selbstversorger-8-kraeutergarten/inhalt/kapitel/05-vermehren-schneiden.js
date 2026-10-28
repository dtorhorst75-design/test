const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 5, id: 'vermehren-schneiden', teil: 'pflege', titel: 'Vermehren und Schneiden', kurz: 'Vermehren und Schneiden',
  bloecke: [
    'Aus einer gekauften Kräuterpflanze werden mit wenig Aufwand viele. Es gibt drei alte Wege: Stecklinge, Teilen und Absenker.',
    R({ titel: 'Stecklinge schneiden', info: 'Juni bis August, für Rosmarin, Salbei, Lavendel, Thymian, Ysop, Minze, Melisse', thema: T.PFLEGE, zutaten: ['eine gesunde Mutterpflanze', 'ein scharfes Messer oder eine Schere', 'kleine Töpfe mit Anzuchterde und Sand (halb und halb)', 'ein Glas oder eine Plastiktüte als Haube'], schritte: ['Von nicht blühenden Trieben **8 bis 10 cm lange Spitzen** abschneiden, knapp unter einem Blattpaar.', 'Die unteren Blätter entfernen, sodass nur oben 4 bis 6 Blätter bleiben.', 'Die Stecklinge 3 bis 4 cm tief in die feuchte Erde stecken und andrücken.', 'Eine Haube darüber stülpen und hell, aber **nicht in die pralle Sonne** stellen. Täglich kurz lüften.', 'Nach 3 bis 6 Wochen zeigen neue Blätter, dass sich Wurzeln gebildet haben. Dann die Haube entfernen und später umtopfen.'], tipp: 'Minze und Melisse bilden sogar im Wasserglas Wurzeln. Rosmarin und Lavendel brauchen länger – mach immer ein paar mehr Stecklinge, als du brauchst.' }),
    R({ titel: 'Kräuter teilen', info: 'Im Frühjahr (März bis April)', thema: T.PFLEGE, zutaten: ['Schnittlauch, Minze, Melisse, Oregano, Liebstöckel oder Estragon', 'ein Spaten oder ein scharfes Messer'], schritte: ['Die Pflanze ausgraben oder aus dem Topf nehmen.', 'Den Wurzelballen mit dem Spaten oder Messer in zwei bis vier Stücke teilen. Jedes Stück braucht Wurzeln und Triebe.', 'Alte, verholzte Teile aus der Mitte entfernen.', 'Die Teile an neue Plätze pflanzen und gut angießen.'], tipp: 'Schnittlauch und Minze werden nach drei, vier Jahren in der Mitte kahl. Teilen verjüngt sie – und du hast Pflanzen zum Verschenken.' }),
    R({ titel: 'Absenker', info: 'Frühsommer, für Thymian, Salbei, Rosmarin', thema: T.PFLEGE, zutaten: ['ein langer, biegsamer Trieb, der bis zum Boden reicht', 'ein Stein oder ein Drahtbügel'], schritte: ['Den Trieb zum Boden biegen und an einer Stelle die Rinde leicht anritzen.', 'Diese Stelle 3 bis 5 cm tief in die Erde legen und mit einem Stein oder Bügel festhalten. Die Spitze schaut heraus.', 'Feucht halten. Nach einigen Monaten hat sich an der Stelle eine Wurzel gebildet.', 'Im Herbst oder nächsten Frühjahr von der Mutterpflanze abschneiden und umpflanzen.'] }),
    { h2: 'Richtig schneiden' },
    { tabelle: [['Kraut', 'Wann', 'Wie'],
      ['**Thymian, Salbei, Ysop**', 'im Frühjahr, wenn kein starker Frost mehr kommt (März/April)', 'um ein Drittel einkürzen, **nicht ins alte, kahle Holz** – dort treiben sie nicht mehr aus'],
      ['**Lavendel**', 'nach der Blüte (Juli/August) und im Frühjahr', 'nach der Blüte die Blütenstiele samt 2 cm Laub abschneiden; im Frühjahr in Form schneiden, nie ins alte Holz'],
      ['**Rosmarin**', 'nach der Blüte oder im Frühjahr', 'nur leicht einkürzen; durch die Ernte bleibt er buschig'],
      ['**Minze, Melisse, Oregano**', 'im Sommer nach der Haupternte', 'kräftig bis auf eine Handbreit über dem Boden – sie treiben frisch nach'],
      ['**Schnittlauch**', 'bei jeder Ernte', 'ganze Halme 2 cm über dem Boden abschneiden, nicht nur die Spitzen'],
      ['**Basilikum**', 'bei jeder Ernte', 'Triebspitzen über einem Blattpaar abknipsen – so verzweigt er sich'],
    ], breiten: [2400, 2900, 3770] },
  ],
};
