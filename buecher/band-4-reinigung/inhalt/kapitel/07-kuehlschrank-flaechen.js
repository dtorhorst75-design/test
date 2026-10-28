const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 7, id: 'kuehlschrank-flaechen', teil: 'kueche', titel: 'Kühlschrank, Arbeitsflächen und Küchenhygiene', kurz: 'Kühlschrank und Flächen',
  bloecke: [
    R({ titel: 'Kühlschrank auswischen', info: 'Einmal im Monat', thema: T.KUECHE, zutaten: ['1 Liter warmes Wasser', '2 EL Essig oder 1 EL Natron', 'Baumwolltuch'], schritte: ['Kühlschrank ausräumen, Abgelaufenes aussortieren.', 'Fächer und Wände mit dem Essig- oder Natronwasser auswischen.', 'Mit klarem Wasser nachwischen und trocknen.', 'Ablaufrinne und -loch an der Rückwand mit einem Wattestäbchen säubern.'], tipp: 'Gegen Gerüche ein offenes Schälchen Natron in den Kühlschrank stellen und alle 2 bis 3 Monate austauschen.' }),
    { h2: 'Arbeitsflächen nach Material' },
    { tabelle: [['Material', 'Reinigung', 'Nicht verwenden'],
      ['Kunststoff, Laminat', 'warmes Wasser mit Spülmittel oder Essigwasser', 'Scheuerpulver'],
      ['Holz (geölt)', 'feucht abwischen, gelegentlich nachölen', 'viel Wasser, Soda, Essigessenz'],
      ['Granit, Marmor, Naturstein', 'warmes Wasser mit etwas Schmierseife', '**Essig, Zitronensäure** – greifen den Stein an'],
      ['Edelstahl', 'Spülwasser, dann mit etwas Öl auf einem Tuch polieren (in Schliffrichtung)', 'Scheuerschwamm, Chlor'],
    ], breiten: [2600, 3800, 2670] },
    R({ titel: 'Allzweckspray für die Küche', info: 'Für 500 ml', thema: [T.KUECHE, T.GRUND], zutaten: ['400 ml Wasser', '100 ml Essig (oder Duftessig)', '1 TL Spülmittel aus Kernseife', 'Sprühflasche'], schritte: ['Alles in die Sprühflasche füllen und schwenken.', 'Auf Flächen sprühen, abwischen.'], tipp: 'Nicht auf Naturstein. Für Holz und Stein stattdessen Wasser mit einem Spritzer Schmierseife verwenden.' }),
    { h2: 'Küchenhygiene: Lappen, Schwämme, Bretter' },
    { punkte: ['**Spüllappen und Geschirrtücher** täglich wechseln oder trocknen lassen und bei 60 °C waschen. Schwämme sind die bakterienreichsten Gegenstände im Haushalt – regelmäßig ersetzen.', '**Rohes Fleisch, Fisch und Geflügel** auf einem eigenen Brett schneiden; danach heiß spülen.', 'Mikrowellen „desinfiziert“ Schwämme nicht zuverlässig – lieber waschen oder austauschen.', '**Mülleimer:** mit Natron ausstreuen, ab und zu heiß auswaschen.'] },
    R({ titel: 'Spüllappen aus alten T-Shirts', info: 'Zero-Waste statt Schwamm', thema: T.KUECHE, zutaten: ['alte Baumwoll-T-Shirts oder Handtücher', 'Schere'], schritte: ['Stoff in Quadrate von etwa 25 × 25 cm schneiden.', 'Nach Belieben die Ränder mit der Nähmaschine umnähen.', 'Benutzen, bei 60 °C waschen, wieder benutzen.'] }),
  ],
};
