const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'was-im-glas-passiert', teil: 'grundlagen', titel: 'Was im Glas passiert', kurz: 'Sicher einkochen',
  bloecke: [
    'Beim Einkochen tötet Hitze die meisten Keime ab. Beim Abkühlen zieht sich die Luft im Glas zusammen, es entsteht ein Unterdruck, und der Deckel saugt sich fest. Kein neuer Keim kommt hinein. Zucker, Säure und Salz helfen zusätzlich, weil sie Bakterien und Schimmel das Leben schwer machen.',
    { h2: 'Sauer oder nicht sauer – das ist die wichtigste Frage' },
    'Es gibt ein Bakterium, das diese Hitze übersteht: **Clostridium botulinum**. Seine Sporen sind im Boden weit verbreitet und überleben auch 100 °C. Im luftdichten Glas, ohne Sauerstoff und bei wenig Säure, können sie auskeimen und ein Gift bilden, das schon in winzigen Mengen lebensgefährlich ist. Man sieht, riecht und schmeckt es oft nicht.',
    'Die gute Nachricht: **In sauren Lebensmitteln** kann das Bakterium nicht wachsen. Deshalb ist Einkochen von Obst, Konfitüre und sauer eingelegtem Gemüse sicher, wenn du sauber arbeitest.',
    { tabelle: [['', 'Beispiele', 'Einkochen im Wasserbad'],
      ['**Sauer**', 'fast alle Obstsorten, Rhabarber, Apfelmus, Beeren, Kirschen, Zwetschgen, Konfitüre, Gelee, Sirup, Essiggurken und anderes Essiggemüse, Chutneys mit Essig', '**sicher** bei richtigen Zeiten und sauberem Arbeiten'],
      ['**Grenzfall**', 'Tomaten, Birnen, Feigen, Melonen', '**nur mit zusätzlicher Säure** (Zitronensaft) – siehe Rezepte'],
      ['**Nicht sauer**', 'Bohnen, Erbsen, Möhren, Kürbis, Mais, Kartoffeln, Spargel, Pilze, Rote Bete ohne Essig, Brühen, Suppen', '**riskant.** Nicht einfach im Wasserbad einkochen. Lieber einfrieren, sauer einlegen, fermentieren oder trocknen.'],
    ], breiten: [1700, 4600, 2770] },
    { warnung: 'Nicht saures Gemüse', zeilen: ['Wer Bohnen, Erbsen, Möhren oder Kürbis trotzdem im Glas haltbar machen möchte, findet im Kapitel „Gemüse, das du anders haltbar machst“ die Methoden, die das Bundesinstitut für Risikobewertung dafür nennt. Die einfachste und sicherste Lösung für diese Gemüse ist aber: **einfrieren** oder **sauer einlegen**.'] },
    { h2: 'Die Hygieneregeln' },
    { punkte: ['Nur **einwandfreies** Obst und Gemüse verwenden – angeschlagene, faulige oder schimmlige Stellen großzügig wegschneiden oder die Frucht wegwerfen.', 'Gründlich waschen, besonders Gemüse mit Erde.', 'Gläser, Deckel und Ringe sauber und heiß (siehe nächstes Kapitel).', 'Den **Glasrand** vor dem Verschließen mit einem sauberen, heiß ausgespülten Tuch abwischen. Schon ein Fruchtrest verhindert, dass der Deckel dicht wird.', 'Rezepte nicht verändern, was **Zucker, Säure, Zeiten und Temperaturen** angeht. Gewürze darfst du variieren.'] },
    { h2: 'Nach dem Einkochen' },
    { punkte: ['Gläser langsam abkühlen lassen, nicht in kalte Zugluft stellen.', 'Nach 24 Stunden prüfen: Ist der Deckel fest und nach innen gewölbt? Bei Weckgläsern: Klammern abnehmen, den Deckel vorsichtig anheben – er muss fest sitzen.', 'Gläser, die nicht dicht sind, in den Kühlschrank stellen und innerhalb weniger Tage verbrauchen.', '**Beschriften:** Inhalt und Datum.', 'Kühl, dunkel und trocken lagern, am besten bei 5 bis 15 °C. Die meisten Gläser halten ein Jahr – bis zur nächsten Ernte.', 'Vor dem Öffnen den Deckel ansehen: Ist er gewölbt oder lose, sind Bläschen im Glas: **wegwerfen, nicht probieren**.'] },
  ],
};
