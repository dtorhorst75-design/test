const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 3, id: 'boden-kennenlernen', teil: 'boden', titel: 'Deinen Boden kennenlernen', kurz: 'Boden kennenlernen',
  bloecke: [
    'Ein guter Gärtner pflegt nicht die Pflanzen, sondern den Boden – so sagten es die Alten. Ein gesunder Boden ist locker, dunkel, riecht nach Waldboden und wimmelt von Regenwürmern. Bevor du etwas säst, lernst du deinen Boden kennen. Dafür brauchst du kein Labor, nur deine Hände und einen Spaten.',
    R({ titel: 'Die Fingerprobe', info: 'Was für ein Boden hast du?', thema: T.BODEN, zutaten: ['eine Handvoll feuchte Erde aus 10 bis 20 cm Tiefe'], schritte: ['Erde in der Hand kneten und versuchen, eine dünne Rolle zu formen.', 'Zerfällt sie und rieselt durch die Finger, knirscht sie: **Sandboden**.', 'Lässt sie sich formen, fühlt sich aber noch etwas rau an und färbt die Finger: **Lehmboden**.', 'Wird sie glatt, glänzend und klebrig wie Knete: **Tonboden**.'], tipp: 'Sandboden erwärmt sich schnell, hält aber Wasser und Nährstoffe schlecht – er braucht viel Kompost und Mulch. Tonboden hält Wasser gut, ist aber schwer und kalt – Kompost und Sand machen ihn lockerer. Lehmboden ist der Traum aller Gärtner.' }),
    R({ titel: 'Die Spatenprobe', info: 'Ein Blick in den Boden', thema: T.BODEN, zutaten: ['ein Spaten', 'ein feuchter Tag (nicht nach Dauerregen, nicht bei Trockenheit)'], schritte: ['Mit dem Spaten auf drei Seiten ein Stück Boden abstechen, spatentief.', 'Den Erdblock an der vierten Seite vorsichtig heraushebeln und auf den Spaten legen.', 'Anschauen: Wie tief reicht die dunkle, krümelige Schicht? Wo wird der Boden heller und fester?', 'Riechen: Ein guter Boden riecht frisch nach Wald. Riecht er faulig, fehlt Luft.', 'Zählen: Wie viele Regenwürmer siehst du?'], tipp: 'Je mehr Regenwürmer, desto besser. Findest du kaum welche, ist der Boden verdichtet oder zu arm – dann hilft vor allem eins: Kompost und eine Mulchschicht.' }),
    { h2: 'Was die Wildkräuter verraten' },
    'Die Pflanzen, die von allein wachsen, erzählen viel über den Boden. Diese erkennst du sicher:',
    { tabelle: [['Wildkraut', 'Was es anzeigt'],
      ['**Brennnessel**', 'viel Stickstoff, guter, nährstoffreicher Boden'],
      ['**Löwenzahn**', 'lehmiger, nährstoffreicher Boden, oft etwas verdichtet'],
      ['**Breitwegerich**', 'festgetretener, verdichteter Boden – hier muss gelockert werden'],
      ['**Gänseblümchen**', 'kurz gemähter, oft verdichteter Rasen'],
      ['**Moos im Rasen**', 'Schatten, Feuchtigkeit, oft saurer Boden'],
    ], breiten: [2600, 6470] },
    { kasten: 'Muss ich den Boden untersuchen lassen?', zeilen: ['Für den Anfang nicht. Wenn du aber in der Nähe alter Industrie, einer viel befahrenen Straße oder auf einem ehemaligen Bauplatz gärtnerst, lohnt sich eine Bodenuntersuchung auf Schadstoffe und Nährstoffe. Die Landwirtschaftlichen Untersuchungsanstalten (LUFA) und viele Gartenbauvereine bieten sie günstig an.'] },
  ],
};
