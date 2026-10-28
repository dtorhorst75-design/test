const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 7, id: 'gemuese-anders', teil: 'gemuese', titel: 'Gemüse, das du anders haltbar machst', kurz: 'Gemüse anders haltbar',
  bloecke: [
    'Bohnen, Erbsen, Möhren, Kürbis, Mais und Pilze sind **nicht sauer**. Im Wasserbad eingekocht, können in ihnen Botulismus-Sporen überleben. Früher hat man Bohnen trotzdem so eingekocht – und es gab immer wieder schwere Vergiftungen. Heute gibt es sicherere Wege.',
    { tabelle: [['Gemüse', 'Sicher haltbar machen', 'Wo du es findest'],
      ['Grüne Bohnen', 'blanchieren und einfrieren, sauer einlegen (gekocht!), milchsauer vergären, trocknen', 'unten; Heft 6'],
      ['Erbsen', 'blanchieren und einfrieren, als Trockenerbsen ausreifen lassen', 'unten; Heft 4 (Samen ernten)'],
      ['Möhren, Rote Bete, Pastinaken', 'im Keller oder in Sand einlagern; sauer einlegen', 'Heft „Vorratskeller“; Kapitel „Sauer eingelegt“'],
      ['Kürbis', 'ganz lagern (hält Monate), in Würfeln einfrieren, als Chutney mit Essig', 'Heft „Vorratskeller“; Chutney-Rezept'],
      ['Mangold, Spinat', 'blanchieren und einfrieren', 'unten'],
      ['Kohl', 'als Sauerkraut milchsauer vergären', 'Heft 6'],
    ], breiten: [2300, 4200, 2570] },
    R({ titel: 'Bohnen und Erbsen einfrieren', info: 'Juli bis September', thema: T.GEMUESE, zutaten: ['frisch geerntete Bohnen oder Erbsen', 'ein großer Topf mit kochendem Wasser, eine Schüssel mit Eiswasser', 'Gefrierdosen oder -beutel'], schritte: ['Bohnen waschen, Enden abschneiden, nach Belieben in Stücke brechen. Erbsen auspalen.', 'Portionsweise in sprudelnd kochendes Wasser geben: **Bohnen 3 Minuten, Erbsen 2 Minuten** blanchieren.', 'Sofort in Eiswasser abschrecken, abtropfen lassen und gut trocken tupfen.', 'In Portionen einfüllen, beschriften, einfrieren.'], tipp: 'Blanchierte Bohnen sind noch nicht gar – Phasin wird erst durch richtiges Kochen abgebaut. Vor dem Essen **mindestens 10 Minuten kochen**. Eingefroren halten Bohnen und Erbsen etwa ein Jahr.' }),
    R({ titel: 'Saure Bohnen', info: 'Für 4 Gläser à 500 ml', thema: [T.GEMUESE, T.SAUER], zutaten: ['1,5 kg grüne Bohnen', 'Grundsud aus dem Kapitel „Sauer eingelegt“ (500 ml Essig 5 %, 500 ml Wasser, 1 EL Salz, 3 EL Zucker)', 'pro Glas: 1 Zweig Bohnenkraut, 1 Knoblauchzehe, ein paar Pfefferkörner, 1 kleine Zwiebel in Ringen'], schritte: ['Bohnen putzen und in Stücke schneiden.', 'In Salzwasser **10 Minuten kochen** – so wird das giftige Phasin sicher zerstört.', 'Abgießen, mit Bohnenkraut, Knoblauch, Pfeffer und Zwiebeln in die Gläser schichten.', 'Mit kochendem Sud übergießen, verschließen.', '**Bei 90 °C 30 Minuten einkochen.**'], tipp: 'Als Salat mit etwas Öl und Zwiebeln – der „Bohnensalat aus dem Glas“ unserer Großmütter. Der Essig ist hier die Sicherheit.' }),
    { h2: 'Wenn du nicht saures Gemüse doch einkochen willst' },
    'Das Bundesinstitut für Risikobewertung nennt für nicht saures Gemüse zwei Wege, das Risiko zu senken: das Einkochen **über 100 °C im Druckeinkochtopf** – ein Gerät, das in Deutschland selten ist und genaue Anleitung braucht – oder das **zweimalige Einkochen** im Abstand von ein bis zwei Tagen. Ganz ausschließen lässt sich das Risiko im Haushalt damit nicht. Deshalb gilt in jedem Fall:',
    { warnung: 'Drei Regeln für eingekochtes Gemüse', zeilen: ['- **Kühl lagern** – im Kühlschrank oder einem kalten Keller unter 10 °C.', '- Gläser mit gewölbtem oder losem Deckel, Gasbläschen, trübem Inhalt oder ungewöhnlichem Geruch **sofort wegwerfen, nicht probieren**.', '- Den Inhalt vor dem Essen **mindestens 10 Minuten sprudelnd kochen**. Das zerstört ein eventuell gebildetes Gift. Nie kalt aus dem Glas essen – auch keinen Bohnensalat aus selbst eingekochten Bohnen ohne Essig.'] },
  ],
};
