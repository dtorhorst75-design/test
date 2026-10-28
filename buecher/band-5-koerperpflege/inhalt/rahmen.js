// Titelei, Grundlagen (vorne) und Anhang (hinten) für Band 5: Körperpflege.
const band1 = require('../../band-1-kraeuter-wildpflanzen/inhalt/rahmen.js');

module.exports = {
  titel: 'Was die Natur uns schenkt',
  untertitel: 'Band 5: Natürliche Körperpflege selbst gemacht',
  motto: 'pur · mild · selbst gerührt',
  autorin: 'Diana',
  datei: 'Was-die-Natur-uns-schenkt-Band-5',
  kurz: 'Band-5',
  registerSpalte: 'Kapitel',
  registerText: 'Hier findest du alle Rezepte dieses Buches nach Themen geordnet. Grundlagen, Hygiene und Zutatenkunde stehen vorne im Buch.',

  impressum: band1.impressum.map((z) => z.replace('Band 1: Kräuter & Wildpflanzen', 'Band 5: Natürliche Körperpflege selbst gemacht')),

  abschnitte: [
    ['waschen', 'Natürlich waschen', 'Seifenkraut, Waschnüsse, Hafer, Heilerde und Mandelkleie'],
    ['haut', 'Haut, Lippen und Hände', 'Salben, Balsame, Cremes, Gesicht'],
    ['haare', 'Haare, Zähne und Deo', 'Waschen, Spülen, Pflegen'],
    ['bad', 'Bad, Füße und Rasur', 'Wohlfühlen und Verschenken'],
  ],

  vorne: [
    {
      titel: 'Bevor du loslegst: Haftungsausschluss',
      bloecke: [
        'Bitte lies diese Seite, bevor du das erste Rezept ausprobierst.',
        { h2: 'Ein Ratgeber für den Eigenbedarf' },
        'Dieses Buch habe ich aus freien Stücken, nach bestem Wissen und Gewissen und mit großer Sorgfalt geschrieben. Es ist ein **Ratgeber** für die Herstellung von Pflegeprodukten **für den eigenen Bedarf**.',
        '**Ich bin keine Apothekerin, keine Chemikerin, keine Ärztin und keine Kosmetikerin.** Ich gebe hier weiter, was ich gelernt, ausprobiert und aus Fachliteratur zusammengetragen habe – sorgfältig, aber als Laiin.',
        { h2: 'Deine Sicherheit' },
        { warnung: 'Die wichtigsten Regeln', zeilen: [
          '- **Allergietest:** Jedes neue Produkt zuerst auf eine kleine Hautstelle (Armbeuge) auftragen und 24 Stunden abwarten. Bei Rötung, Juckreiz oder Brennen nicht verwenden.',
          '- **Ätherische Öle** sind hochkonzentriert: nie unverdünnt auf die Haut, nicht bei Säuglingen und Kleinkindern, nicht in der Schwangerschaft ohne Rücksprache, nicht in die Augen.',
          '- **Hygiene:** Selbst gemachte Produkte ohne Konservierung können verkeimen. Sauber arbeiten, kleine Mengen herstellen, beschriften, kühl lagern und bei verändertem Geruch oder Aussehen wegwerfen.',
          '- Bei Hauterkrankungen, offenen Wunden, Neurodermitis, in der Schwangerschaft und bei Kindern vorher mit Ärztin, Arzt oder Apotheke sprechen.',
          '- **Auch Natürliches kann reizen:** Seifenkraut und Waschnüsse brennen in den Augen, Natron kann empfindliche Haut röten, Pflanzen können Allergien auslösen.',
          '- Im Notfall: **Giftnotruf** (z. B. Berlin 030 19240) oder **112**.',
        ] },
        { h2: 'Verkaufen ist etwas anderes' },
        'Wer selbst gemachte Kosmetik **verkaufen oder auf Märkten verschenken** möchte, unterliegt in der EU der Kosmetikverordnung (EG Nr. 1223/2009): Jedes Produkt braucht eine **Sicherheitsbewertung** durch eine Fachperson, eine **Produktinformationsdatei**, eine Meldung im EU-Kosmetikportal (CPNP), eine **verantwortliche Person** und eine vorschriftsmäßige Kennzeichnung. Die Rezepte in diesem Buch sind für den **privaten Eigenbedarf** gedacht.',
        { h2: 'Haftung' },
        'Alle Angaben wurden sorgfältig zusammengestellt. Trotzdem kann ich keine Gewähr für Richtigkeit, Vollständigkeit und Verträglichkeit übernehmen – jede Haut ist anders. Du stellst die Produkte **auf eigene Gefahr und eigene Verantwortung** her und verwendest sie ebenso. Soweit gesetzlich zulässig, übernehmen Autorin und Verlag **keine Haftung** für gesundheitliche Schäden, Allergien oder sonstige Schäden.',
        { h2: 'Disclaimer (English)' },
        { links: '*The author is not a pharmacist, chemist, physician or cosmetician. The recipes in this book are intended for personal use only and are not medical advice. Always perform a patch test before using any new product. Selling cosmetics is regulated by law (EU Regulation 1223/2009). To the fullest extent permitted by law, the author and publisher disclaim any liability for injury, allergic reaction, loss or damage arising from the use of the information in this book.*' },
      ],
    },
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du da bist!',
        'Auf einer gekauften Creme stehen oft dreißig Zutaten. Für eine gute Salbe brauchst du drei: ein Öl, ein Wachs, vielleicht eine Butter. Unsere Großmütter haben ihre Ringelblumensalbe und ihr Haarwasser selbst gemacht und sich mit Seifenkraut gewaschen – und genau dahin geht es in diesem Buch zurück.',
        'Und dafür nehmen wir nur, was die Natur hergibt: Pflanzenöle, Pflanzenbutter und -wachse, Kräuter und Blüten, Hafer, Mandeln, Heilerde, Salz. Du lernst, wie du dich mit Seifenkraut, Waschnüssen und Hafer wäschst, Haare mit Roggenmehl reinigst, Salben, Balsame und Cremes rührst, Deo mischst und Badesalz für Geschenke abfüllst. Vieles davon verbindet sich mit den ersten Bänden: Ringelblume, Johanniskraut, Lavendel, Kamille und Rosen aus dem eigenen Garten.',
        'Herzlich,',
        '*Diana*',
      ],
    },
    {
      titel: 'Sauber arbeiten: Hygiene und Haltbarkeit',
      bloecke: [
        'Selbst gemachte Kosmetik ist frisch und frei von unnötigen Zusätzen – aber genau deshalb auch empfindlicher. Mit ein paar Regeln hält sie trotzdem lange.',
        { h2: 'Die Hygieneregeln' },
        { punkte: ['Arbeitsfläche, Gefäße und Werkzeug mit heißem Wasser spülen und mit **70-prozentigem Alkohol** (Apotheke) auswischen.', 'Hände waschen, Haare zusammenbinden.', '**Abgekochtes oder destilliertes Wasser** verwenden.', 'Tiegel und Flaschen vorher mit Alkohol auswischen und trocknen lassen.', 'Produkte mit einem sauberen Spatel entnehmen, nicht mit den Fingern.', 'Alles beschriften: Inhalt und Herstellungsdatum.'] },
        { h2: 'Wie lange hält was?' },
        { tabelle: [['Produkt', 'Ohne Wasser?', 'Haltbarkeit (kühl, dunkel)'],
          ['Salben, Balsame, Lippenpflege, Körperbutter, Öle', 'ja – wasserfrei', '6 bis 12 Monate (begrenzt durch das Öl)'],
          ['Badesalz, Badebomben, Peelings ohne Wasser', 'ja', '6 bis 12 Monate (trocken lagern)'],
          ['Cremes und Gele mit Wasser oder Aloe', 'nein – mit Wasser', '**1 bis 2 Wochen im Kühlschrank**, Aloe-Gel 3 bis 4 Tage'],
          ['Seifenkraut- und Waschnusssud, Gesichtswasser, Haarspülungen', 'nein', '3 bis 7 Tage im Kühlschrank'],
        ], breiten: [4000, 1700, 3370] },
        'Riecht ein Produkt ranzig, sauer oder anders als zu Beginn, verändert es Farbe oder Konsistenz oder zeigt Punkte oder Schlieren: **wegwerfen.**',
      ],
    },
    {
      titel: 'Zutatenkunde',
      bloecke: [
        { h2: 'Pflanzenöle' },
        { tabelle: [['Öl', 'Eigenschaften', 'Gut für'],
          ['Olivenöl', 'reichhaltig, preiswert, gut haltbar', 'Salben, Ölauszüge, trockene Haut'],
          ['Sonnenblumenöl', 'leicht, preiswert', 'Ölauszüge, Körperöle'],
          ['Mandelöl', 'mild, zieht gut ein', 'empfindliche Haut, Babypflege, Massage'],
          ['Jojobaöl (eigentlich ein flüssiges Wachs)', 'sehr haltbar, hautähnlich, nicht fettend', 'Gesicht, Haare, Lippen'],
          ['Kokosöl', 'fest unter 25 °C', 'Deo, Körperbutter, Haarkur'],
          ['Rapsöl', 'günstig, heimisch', 'Körperöle, Ölauszüge'],
          ['Hanföl, Nachtkerzenöl', 'reich an Gamma-Linolensäure, kurz haltbar', 'trockene, gereizte Haut (Band 1)'],
        ], breiten: [2800, 3300, 2970] },
        { h2: 'Butter und Wachse' },
        { tabelle: [['Zutat', 'Eigenschaften', 'Achtung'],
          ['Sheabutter', 'fest-cremig, sehr pflegend', 'bei langsamem Abkühlen körnig – rasch kühlen'],
          ['Kakaobutter', 'hart, duftet nach Schokolade', 'macht Balsame fester'],
          ['Candelillawachs', 'aus einem Strauch; macht Salben fest, schützt die Haut', 'recht hart – sparsam dosieren'],
          ['Sonnenblumenwachs', 'aus Sonnenblumenkernen, etwas weicher', 'ein Viertel mehr als Candelilla nehmen'],
        ], breiten: [2800, 3800, 2470] },
        { h2: 'Weitere Zutaten' },
        { punkte: ['**Seifenkraut, Waschnüsse:** natürliche Waschstoffe (Saponine).', '**Hydrolate** (Pflanzenwässer, z. B. Rosen-, Lavendelwasser) oder frische Blütenaufgüsse: für Gesichtswasser und Cremes.', '**Sonnenblumenlecithin** (Reformhaus): natürlicher Helfer, der Öl und Wasser in Cremes verbindet.', '**Aloe vera** von der Fensterbank: kühlendes Gel.', '**Heilerde, Tonerde, Rhassoul:** für Waschpasten, Masken und Deo.', '**Hafer, Weizenkleie, Roggenmehl:** zum sanften Waschen.', '**Mandelkleie, Meersalz, Zucker:** für Reinigung, Peelings und Bäder.', '**Natron, Speisestärke, Kreide:** für Deo, Trockenshampoo und Zahnpulver.', '**Ätherische Öle:** sparsam, höchstens 1 % (etwa 20 Tropfen auf 100 g) im Körperprodukt, 0,5 % im Gesicht.'] },
        { h2: 'Grundrezept: Kräuter-Ölauszug' },
        'Die Basis vieler Salben: Ringelblumenöl, Johanniskrautöl (Rotöl), Lavendelöl, Kamillenöl. Die ausführliche Anleitung findest du in Band 1 (Grundrezept 4). Kurz: getrocknete Blüten locker in ein Glas füllen, mit Öl bedecken, 3 bis 6 Wochen warm ziehen lassen, abseihen. Schneller geht es im Wasserbad bei 50 bis 60 °C für 2 bis 3 Stunden.',
        { h2: 'Ausrüstung' },
        { punkte: ['Küchenwaage (für kleine Mengen eine Feinwaage auf 0,1 g)', 'Wasserbad (Topf mit hitzefester Schüssel)', 'Milchschäumer für Cremes', 'Thermometer', 'Spatel, Tiegel, Lippenstifthülsen, Flaschen, Baumwollsäckchen'] },
      ],
    },
  ],

  hinten: [
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        { punkte: [
          'Verordnung (EG) Nr. 1223/2009 über kosmetische Mittel.',
          'Bundesinstitut für Risikobewertung (BfR): ätherische Öle, Kosmetik (bfr.bund.de).',
          'Verbraucherzentrale: Naturkosmetik selbst machen (verbraucherzentrale.de).',
          'Wichtl, M.: *Teedrogen und Phytopharmaka* (Ringelblume, Johanniskraut, Kamille).',
        ] },
      ],
    },
  ],
};
