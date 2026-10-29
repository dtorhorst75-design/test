// Titelei, Grundlagen (vorne) und Anhang (hinten) für Band 6: Natürliche Schminke.
const band1 = require('../../band-1-kraeuter-wildpflanzen/inhalt/rahmen.js');

const UNTERTITEL = 'Band 6: Natürliche Schminke selbst gemacht';

module.exports = {
  titel: 'Was die Natur uns schenkt',
  untertitel: UNTERTITEL,
  motto: 'Farbe aus Rübe, Kakao und Erde',
  autorin: 'Diana Bittenbinder',
  datei: 'Was-die-Natur-uns-schenkt-Band-6',
  kurz: 'Band-6',
  registerSpalte: 'Kapitel',
  registerText: 'Hier findest du alle Rezepte dieses Buches nach Themen geordnet. Sicherheit, Hygiene und die Farbenkunde stehen vorne im Buch.',

  impressum: band1.impressum.map((z) => (z.startsWith('**Wichtiger Hinweis:**')
    ? '**Wichtiger Hinweis:** Bitte beachte den Haftungsausschluss auf den folgenden Seiten. Die Inhalte dieses Buches wurden sorgfältig recherchiert. Sie dienen der allgemeinen Information und ersetzen keine ärztliche oder dermatologische Beratung. Wer die beschriebenen Produkte herstellt und anwendet, tut dies auf eigene Verantwortung. Autorin und Verlag übernehmen keine Haftung für Schäden, die aus der Anwendung der beschriebenen Rezepte entstehen.'
    : z.replace('Band 1: Kräuter & Wildpflanzen', UNTERTITEL).replace('Texte und Pflanzenzeichnungen wurden', 'Die Texte wurden'))),

  abschnitte: [
    ['lippen', 'Lippen', 'Getönte Balsame und Farbe für den Tag'],
    ['gesicht', 'Teint und Wangen', 'Puder, Rouge und Bronzer'],
    ['augen', 'Augenbrauen und Lider', 'Was am Auge geht – und was nicht'],
    ['pflege', 'Abschminken und Aufbewahren', 'Sanft entfernen, Pinsel pflegen, sauber lagern'],
  ],

  vorne: [
    {
      titel: 'Bevor du loslegst: Haftungsausschluss',
      bloecke: [
        'Bitte lies diese Seiten, bevor du das erste Rezept ausprobierst.',
        { h2: 'Ein Ratgeber für den Eigenbedarf' },
        'Dieses Buch habe ich aus freien Stücken, nach bestem Wissen und Gewissen und mit großer Sorgfalt geschrieben. Es ist ein **Ratgeber** für die Herstellung von einfacher Schminke **für den eigenen Bedarf**.',
        '**Ich bin keine Apothekerin, keine Chemikerin, keine Ärztin und keine Kosmetikerin.** Ich gebe hier weiter, was ich gelernt, ausprobiert und aus Fachliteratur und Verbraucherinformationen zusammengetragen habe – sorgfältig, aber als Laiin.',
        { h2: 'Deine Sicherheit' },
        { warnung: 'Die wichtigsten Regeln', zeilen: [
          '- **Allergietest:** Jedes neue Produkt zuerst in der Armbeuge auftragen und 24 bis 48 Stunden abwarten. Bei Rötung, Juckreiz oder Brennen nicht verwenden.',
          '- **Augen sind empfindlich.** In diesem Buch gibt es bewusst **keine Rezepte für Wimperntusche, Eyeliner oder Kajal**. Nichts gehört in die Augen oder an den Wimpernrand.',
          '- **Nur Zutaten in Lebensmittel- oder Kosmetikqualität** verwenden. Keine Erde aus dem Garten, keine Farbpigmente aus dem Bastelladen, keine Holzkohle vom Grill.',
          '- **Hygiene:** Sauber arbeiten, kleine Mengen herstellen, beschriften. Lippenprodukte nie teilen – auch nicht mit der besten Freundin.',
          '- Bei Hauterkrankungen, Akne, Neurodermitis, entzündeten Augen oder Lippenherpes keine Schminke auf die betroffenen Stellen.',
          '- Im Notfall: **Giftnotruf** (z. B. Berlin 030 19240) oder **112**.',
        ] },
        { h2: 'Verkaufen ist etwas anderes' },
        'Schminke ist rechtlich ein kosmetisches Mittel. Wer sie **verkaufen** möchte, unterliegt in der EU der Kosmetikverordnung (EG Nr. 1223/2009): Sicherheitsbewertung durch eine Fachperson, Produktinformationsdatei, Meldung im EU-Kosmetikportal, verantwortliche Person und vorschriftsmäßige Kennzeichnung. Außerdem dürfen in Kosmetik **nur Farbstoffe verwendet werden, die in Anhang IV der Verordnung zugelassen sind**. Die Rezepte in diesem Buch sind für den **privaten Eigenbedarf** gedacht.',
        { h2: 'Haftung' },
        'Alle Angaben wurden sorgfältig zusammengestellt. Trotzdem kann ich keine Gewähr für Richtigkeit, Vollständigkeit und Verträglichkeit übernehmen – jede Haut ist anders. Du stellst die Produkte **auf eigene Gefahr und eigene Verantwortung** her und verwendest sie ebenso. Soweit gesetzlich zulässig, übernehmen Autorin und Verlag **keine Haftung** für gesundheitliche Schäden, Allergien, Augenreizungen oder sonstige Schäden.',
        { h2: 'Disclaimer (English)' },
        { links: '*The author is not a pharmacist, chemist, physician or cosmetician. The recipes in this book are intended for personal use only and are not medical advice. Always perform a patch test before using any new product. Never apply homemade products in or near the eyes; this book deliberately contains no recipes for mascara, eyeliner or kohl. Use only food-grade or cosmetic-grade ingredients. Selling cosmetics is regulated by law (EU Regulation 1223/2009). To the fullest extent permitted by law, the author and publisher disclaim any liability for injury, allergic reaction, loss or damage arising from the use of the information in this book.*' },
      ],
    },
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du da bist!',
        'Schon unsere Urgroßmütter haben sich ein bisschen Farbe auf Lippen und Wangen getupft – mit dem Saft von Roter Bete oder einer Messerspitze Kakao. Genau darum geht es in diesem Buch: um **einfache, natürliche Farbe** für den Alltag. Ein Hauch Rosé auf den Lippen, ein frischer Schimmer auf den Wangen, ordentliche Augenbrauen und ein Puder, der den Glanz nimmt.',
        'Ich verspreche dir keine Wunder. Natürliche Farben sind **sanfter** als gekaufte Schminke, sie halten nicht so lange und manche verblassen nach einigen Monaten. Dafür weißt du genau, was drin ist – meist nur drei, vier Zutaten aus der Küche, dem Reformhaus oder der Apotheke.',
        'Und ich sage dir ehrlich, wo die Grenze ist: Am Auge hört das Selbermachen für mich auf. Wimperntusche, Eyeliner und Kajal kaufst du besser – warum, steht auf den nächsten Seiten.',
        'Zurück zu den Basics – auch beim Schminken.',
        'Herzlich,',
        '*Diana*',
      ],
    },
    {
      titel: 'Was du nicht selbst machst – und warum',
      bloecke: [
        'Im Netz findest du Anleitungen für fast alles. Vieles davon ist harmlos, manches aber gefährlich. Diese Dinge lässt du besser:',
        { tabelle: [['Finger weg von …', 'Warum'],
          ['**Selbst gemachter Wimperntusche und Eyeliner**', 'Sie werden direkt am Wimpernrand aufgetragen. Ohne wirksame Konservierung können sich Keime vermehren – Bindehautentzündungen bis zu ernsten Augeninfektionen sind möglich.'],
          ['**Kajal, Kohl, Surma aus Asien, Afrika oder dem Orient**', 'Traditionelle Kajal-Produkte enthalten oft **Blei**, manchmal in sehr hohen Mengen. Das Bundesinstitut für Risikobewertung warnt ausdrücklich davor, besonders bei Kindern.'],
          ['**Pigmenten aus dem Bastel- oder Künstlerbedarf**', 'Sie sind nicht für die Haut gemacht und können Schwermetalle enthalten.'],
          ['**Erde, Lehm oder Ocker aus der Natur**', 'Ungeprüfte Erden können Keime, Tetanuserreger und Schwermetalle enthalten. Nimm nur gereinigte Tonerden aus Apotheke oder Naturkosmetikhandel.'],
          ['**Kurkuma, Zimt, Paprika, Chili im Gesicht**', 'Kurkuma färbt die Haut gelb, Zimt, Paprika und Chili reizen und können Allergien auslösen.'],
          ['**Holzkohle vom Grill, Ruß, Asche**', 'enthalten unerwünschte Verbrennungsstoffe.'],
          ['**Glitzer und Perlglanz**', 'Glitzer ist meist Mikroplastik; Glimmer (Mica) wird oft unter schlimmen Bedingungen abgebaut, auch von Kindern.'],
        ], breiten: [3300, 5770] },
        { kasten: 'Die Faustregel', zeilen: ['Was du nicht auch essen würdest oder was nicht ausdrücklich für Kosmetik verkauft wird, kommt nicht ins Gesicht.'] },
      ],
    },
    {
      titel: 'Die natürlichen Farben',
      bloecke: [
        'Mit wenigen Grundzutaten mischst du fast alle Farbtöne, die du für ein natürliches Make-up brauchst.',
        { tabelle: [['Zutat', 'Farbe', 'Gut zu wissen'],
          ['**Rote-Bete-Pulver** (Bioladen, Reformhaus)', 'Rosé bis Beerenrot', 'Lebensmittel; der Farbstoff Betanin ist auch in Kosmetik zugelassen. Verblasst mit Licht und Zeit – dunkel lagern.'],
          ['**Kakaopulver**, ungesüßt, ohne Zusätze', 'Hellbraun bis Dunkelbraun', 'für Bronzer, Augenbrauen, warme Töne; sehr gut verträglich'],
          ['**Weiße Tonerde** (Kaolin)', 'Weiß bis Hellbeige', 'mattiert, Grundlage für Puder; nur in Kosmetikqualität'],
          ['**Rosa und rote Tonerde**', 'zartes Rosa bis Ziegelrot', 'für Rouge; nur in Kosmetikqualität'],
          ['**Pflanzenkohle** in Lebensmittelqualität (Apotheke, Reformhaus)', 'Grau bis Schwarz', 'nur winzige Mengen für dunkle Augenbrauen; in der EU als Kosmetikfarbstoff zugelassen'],
          ['**Pfeilwurzelmehl** oder **Maisstärke**', 'farblos', 'die Grundlage für alle Puder; macht Farben heller'],
        ], breiten: [3100, 2200, 3770] },
        { h2: 'Fett und Wachs für cremige Schminke' },
        { punkte: ['**Candelillawachs:** pflanzlich, recht hart – für Stifte und Balsame.', '**Sheabutter, Kakaobutter:** pflegend, geben Cremigkeit.', '**Jojobaöl:** hält lange, wird nicht ranzig – ideal für Lippen.', '**Sonnenblumen- oder Mandelöl:** mild und preiswert.'] },
        { h2: 'Die Ausrüstung' },
        { punkte: ['Feinwaage (auf 0,1 g genau) – bei Schminke kommt es auf kleine Mengen an', 'kleiner Mörser oder ein Schälchen und ein Löffelrücken zum Verreiben', 'ein feines Teesieb zum Sieben der Pulver', 'Wasserbad (kleiner Topf mit hitzefester Tasse)', 'Döschen mit Deckel, Lippenstifthülsen, kleine Tiegel', 'Pinsel mit Kunsthaar – sie lassen sich gut waschen', '70-prozentiger Alkohol aus der Apotheke zum Auswischen der Gefäße', 'Etiketten und ein Stift'] },
        { h2: 'Anreiben – der wichtigste Handgriff' },
        'Pulverfarben verteilen sich in Öl und Wachs nur gleichmäßig, wenn du sie vorher **anreibst**: Das Pulver durch ein feines Sieb geben und mit ein paar Tropfen Öl im Mörser oder mit dem Löffelrücken so lange verreiben, bis eine glatte Paste ohne Körnchen entsteht. Erst dann kommt sie in die geschmolzene Masse.',
        { h2: 'Wie lange hält was?' },
        { tabelle: [['Produkt', 'Haltbarkeit'],
          ['Puder, Rouge, Bronzer (trocken)', '6 bis 12 Monate – trocken und mit sauberem Pinsel verwenden'],
          ['Getönte Balsame und Creme-Rouge (ohne Wasser)', 'etwa 3 bis 6 Monate; Rote-Bete-Farbe verblasst eher'],
          ['Alles mit frischem Saft oder Wasser', 'nur für den Tag – Rest wegwerfen'],
        ], breiten: [4500, 4570] },
      ],
    },
  ],

  hinten: [
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        { punkte: [
          'Verordnung (EG) Nr. 1223/2009 über kosmetische Mittel, insbesondere Anhang IV (zugelassene Farbstoffe).',
          'Bundesinstitut für Risikobewertung (BfR): Bleihaltiger Kajal und Kohl; Sicherheit kosmetischer Mittel (bfr.bund.de).',
          'Bundesamt für Verbraucherschutz und Lebensmittelsicherheit (BVL): Kosmetische Mittel – Hinweise für Hersteller (bvl.bund.de).',
          'Verbraucherzentrale: Naturkosmetik und dekorative Kosmetik (verbraucherzentrale.de).',
        ] },
      ],
    },
  ],
};
