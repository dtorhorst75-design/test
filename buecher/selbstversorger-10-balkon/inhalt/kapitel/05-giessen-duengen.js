const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 5, id: 'giessen-duengen', teil: 'pflege', titel: 'Gießen, Düngen, Bestäuben', kurz: 'Gießen und Düngen',
  bloecke: [
    { h2: 'Gießen' },
    { punkte: ['Auf dem Balkon regnet es selten genug in die Töpfe. Im Sommer musst du **täglich prüfen**, an heißen Tagen morgens und abends.', '**Fingerprobe** (Heft 1): Ist die Erde zwei Fingerglieder tief trocken, wird gegossen – und zwar so lange, bis unten Wasser aus dem Topf läuft.', 'Morgens gießen ist am besten; an Hitzetagen zusätzlich am Abend.', 'Untersetzer verhindern, dass Wasser zum Nachbarn läuft. Stehendes Wasser nach einer halben Stunde ausgießen – Staunässe fault die Wurzeln.', 'Eine Regentonne passt oft auch auf einen Balkon unter das Fallrohr – frag den Vermieter. Sonst: abgestandenes Leitungswasser in Kannen.', '**Mulch** spart auch im Topf viel Wasser: eine Schicht Grasschnitt, Stroh oder zerkleinerte Gemüseblätter auf die Erde.'] },
    R({ titel: 'Urlaubsbewässerung mit der Flasche', info: 'Für ein paar Tage', thema: T.PFLEGE, zutaten: ['Glas- oder Kunststoffflaschen', 'ein Tonkegel für Flaschen (Gartenfachhandel) oder ein Stück Baumwollschnur'], schritte: ['Die Töpfe vorher gründlich wässern und in den Schatten rücken.', 'Die Flasche mit Wasser füllen, den Tonkegel aufsetzen und kopfüber tief in die Erde stecken.', 'Oder: Einen Eimer Wasser höher stellen und aus jedem Topf eine Baumwollschnur hineinlegen – sie saugt das Wasser in die Töpfe.'], tipp: 'Am besten vorher ausprobieren, wie lange eine Flasche bei dir reicht. Und: Nachbarn fragen, ob sie gegen einen Teil der Ernte gießen.' }),
    { h2: 'Düngen' },
    'In einem Topf sind die Nährstoffe schnell verbraucht. Starkzehrer wie Tomaten, Zucchini und Paprika brauchen im Sommer Nachschub – rein pflanzlich und ohne Gestank:',
    { punkte: ['**Kompost oder Wurmhumus:** alle zwei bis drei Wochen eine Handvoll auf die Erde streuen und leicht einarbeiten.', '**Wurmtee:** Die Flüssigkeit, die unten aus der Wurmkiste tropft (Heft 3), 1 : 10 mit Wasser verdünnt zum Gießen.', '**Brennnessel-Kaltauszug** (Heft 1) riecht kaum und gibt einen sanften Schub.', 'Brennnesseljauche nur, wenn du einen Platz hast, wo der Geruch niemanden stört.'] },
    { h2: 'Bestäuben' },
    'Auf hohen oder windgeschützten Balkonen kommen manchmal wenige Bienen. Dann hilfst du nach:',
    { punkte: ['**Tomaten und Paprika:** In der Blütezeit die Pflanzen täglich leicht schütteln oder an den Stab klopfen – so fällt der Pollen.', '**Zucchini und Gurken:** von Hand bestäuben (Heft 4) – mit einem Pinsel oder der männlichen Blüte.', '**Erdbeeren:** mit einem weichen Pinsel von Blüte zu Blüte streichen.', 'Blühende Kräuter, Kapuzinerkresse und Ringelblumen auf dem Balkon locken Bienen und Hummeln an.'] },
  ],
};
