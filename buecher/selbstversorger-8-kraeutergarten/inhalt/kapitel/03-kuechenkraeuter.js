const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 3, id: 'kuechenkraeuter', teil: 'kraeuter', titel: 'Die Küchenkräuter im Überblick', kurz: 'Küchenkräuter',
  bloecke: [
    'Ausführliche Porträts und Rezepte zu allen Kräutern findest du in Band 1. Hier steht, was du für den Anbau wissen musst.',
    { tabelle: [['Kraut', 'Lebensdauer', 'Säen oder pflanzen', 'Ernte', 'Gut zu wissen'],
      ['Schnittlauch', 'mehrjährig', 'pflanzen; säen März–Mai', 'März–Okt.', 'alle 3–4 Jahre im Frühjahr teilen; Blüten essbar'],
      ['Petersilie', 'zweijährig', 'säen März–Juli', 'Mai–Dez.', 'keimt 3–4 Wochen; Platz jährlich wechseln'],
      ['Kerbel', 'einjährig', 'säen März–April, Aug.–Sept.', 'April–Juni, Herbst', 'mag Halbschatten, schießt im Sommer'],
      ['Dill', 'einjährig', 'säen April–Juli', 'Juni–Sept.', 'Lichtkeimer; nicht umpflanzen'],
      ['Basilikum', 'einjährig', 'vorziehen April, raus nach Mitte Mai', 'Juni–Sept.', 'Triebspitzen ernten, nicht einzelne Blätter'],
      ['Thymian', 'mehrjährig', 'pflanzen; säen April–Mai', 'Mai–Okt.', 'im Frühjahr zurückschneiden'],
      ['Salbei', 'mehrjährig', 'pflanzen', 'Mai–Okt.', 'im Frühjahr zurückschneiden, nicht ins alte Holz'],
      ['Rosmarin', 'mehrjährig', 'pflanzen', 'ganzjährig', 'nur bedingt winterhart (Kapitel Überwintern)'],
      ['Oregano (Dost)', 'mehrjährig', 'pflanzen; säen April–Mai', 'Juni–Sept.', 'Lichtkeimer; Bienenweide'],
      ['Bohnenkraut', 'einjährig (Sommer-) oder mehrjährig (Berg-)', 'säen April–Mai', 'Juni–Sept.', 'neben die Bohnen pflanzen'],
      ['Liebstöckel', 'mehrjährig', 'pflanzen', 'April–Okt.', 'sehr groß; eine Pflanze reicht'],
      ['Pfefferminze', 'mehrjährig', 'pflanzen (Ausläufer)', 'Mai–Sept.', 'wuchert – nur mit Wurzelsperre'],
      ['Zitronenmelisse', 'mehrjährig', 'pflanzen; säen April', 'Mai–Sept.', 'nach der Ernte zurückschneiden, treibt neu aus'],
      ['Estragon', 'mehrjährig', 'pflanzen (französischer)', 'Mai–Sept.', 'französischer Estragon schmeckt, russischer kaum'],
    ], breiten: [1500, 1600, 2100, 1300, 2570] },
    { kasten: 'Was du nicht im Kräutergarten brauchst', zeilen: ['Manche Kräuter aus alten Büchern sind giftig oder werden leicht verwechselt – zum Beispiel Weinraute, Rainfarn, Wermut in größeren Mengen oder Beinwell, dessen junge Blätter dem giftigen Fingerhut ähneln. Sie stehen nicht in diesem Heft. Wer Wildkräuter sammeln möchte, findet in Band 1 nur Pflanzen, die sicher zu erkennen sind.'] },
  ],
};
