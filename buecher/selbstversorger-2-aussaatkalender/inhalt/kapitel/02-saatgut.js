const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 2, id: 'saatgut', teil: 'saatgut', titel: 'Saatgut aufbewahren und prüfen', kurz: 'Saatgut',
  bloecke: [
    'Ein Tütchen Samen ist meist mehr, als du in einem Jahr brauchst. Richtig aufbewahrt, keimen die meisten Samen noch nach Jahren.',
    { h2: 'So lagerst du Samen' },
    { punkte: ['**Trocken, kühl und dunkel** – in einer Blechdose, einem Schraubglas oder einer Holzkiste.', 'Nicht im feuchten Keller, nicht im warmen Gartenhaus, nicht in der Küche neben dem Herd.', 'Ein Säckchen mit trockenem Reis oder ein Stück Tafelkreide im Glas nimmt Feuchtigkeit auf.', 'Jedes Tütchen mit **Sorte und Jahr** beschriften.'] },
    { h2: 'Wie lange keimen Samen?' },
    { tabelle: [['Keimfähig etwa …', 'Gemüse'],
      ['**1 Jahr**', 'Pastinaken, Schwarzwurzeln – immer frisch kaufen'],
      ['**2 Jahre**', 'Zwiebeln, Lauch, Schnittlauch, Dill'],
      ['**3 Jahre**', 'Möhren, Petersilie, Sellerie, Paprika'],
      ['**3 bis 4 Jahre**', 'Erbsen, Bohnen, Spinat, Salat, Feldsalat, Mangold'],
      ['**4 bis 5 Jahre**', 'Kohl, Kohlrabi, Radieschen, Rettich, Rote Bete, Tomaten'],
      ['**5 bis 6 Jahre**', 'Gurken, Zucchini, Kürbis'],
    ], breiten: [2400, 6670] },
    'Die Werte sind Richtwerte. Gut gelagerte Samen keimen oft länger, schlecht gelagerte schon nach kurzer Zeit nicht mehr. Im Zweifel hilft die Keimprobe.',
    R({ titel: 'Die Keimprobe', info: 'Im Februar, für alte Samentütchen', thema: T.SAATGUT, zutaten: ['10 Samen aus dem Tütchen', 'zwei Lagen Küchenpapier', 'ein Teller und eine umgedrehte Schüssel oder ein Glas mit Deckel', 'ein warmer Platz (etwa 20 °C)'], schritte: ['Küchenpapier anfeuchten und auf den Teller legen.', 'Die 10 Samen darauf verteilen, abdecken, damit es feucht bleibt.', 'Täglich nachsehen und das Papier feucht halten.', 'Nach der üblichen Keimdauer (siehe Tabelle im vorigen Kapitel) die gekeimten Samen zählen.'], tipp: '**8 bis 10 gekeimt:** bestens. **5 bis 7:** etwas dichter säen. **Weniger als 5:** neues Saatgut besorgen. Schreib das Ergebnis aufs Tütchen.' }),
    { kasten: 'Woher gutes Saatgut kommt', zeilen: ['**Samenfeste Sorten** kannst du selbst vermehren – mehr dazu im Heft „Saatgut selbst gewinnen“. Du bekommst sie bei Bio-Saatgutgärtnereien, bei Erhaltungsvereinen und auf **Saatgut-Tauschbörsen**, die meist im Februar und März stattfinden. Dort triffst du auch Menschen, die genau wissen, welche Sorte in deiner Gegend gut wächst.'] },
  ],
};
