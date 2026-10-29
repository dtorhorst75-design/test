// Titelei, Grundlagen (vorne) und Anhang (hinten) für Band 3.
// Haftungsausschluss und Anwendungshinweise stammen aus Band 1, damit sie überall gleich lauten.
const band1 = require('../../band-1-kraeuter-wildpflanzen/inhalt/rahmen.js');
const kapitel1 = (titel) => band1.vorne.find((k) => k.titel === titel);

module.exports = {
  titel: 'Was die Natur uns schenkt',
  untertitel: 'Band 3: Gemüse ganz genutzt',
  motto: 'anbauen · ernten · alles verwerten',
  autorin: 'Diana Bittenbinder',
  datei: 'Was-die-Natur-uns-schenkt-Band-3',
  kurz: 'Band-3',
  kalenderTitel: 'Erntekalender',
  kalenderH3: 'Erntekalender',
  kalenderText: 'Die Übersicht zeigt, wann du jedes Gemüse aus dem eigenen Garten ernten kannst (●) und wann es außerdem frisch oder aus dem Lager verfügbar ist (○). Die Angaben gelten für den Freilandanbau in mittleren Lagen Deutschlands.',

  impressum: band1.impressum.map((z) => z.replace('Band 1: Kräuter & Wildpflanzen', 'Band 3: Gemüse ganz genutzt')),

  abschnitte: [
    ['fruehling', 'Gemüse des Frühlings', 'März bis Juni: die ersten Blätter, Stiele und Knollen'],
    ['sommer', 'Gemüse des Sommers', 'Juni bis September: Fülle aus Beet und Gewächshaus'],
    ['herbst', 'Gemüse für Herbst und Winter', 'September bis März: Wurzeln, Knollen, Kohl und Vorrat'],
  ],

  vorne: [
    kapitel1('Bevor du loslegst: Haftungsausschluss'),
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Wusstest du, dass wir von vielen Gemüsen nur die Hälfte essen? Das Möhrengrün landet im Kompost, die Kohlrabiblätter im Müll, die Brokkolistiele in der Biotonne, die Zwiebelschalen sowieso. Dabei steckt in diesen „Resten“ oft das meiste Aroma – und viele Vitamine.',
        'Unsere Großeltern hätten darüber den Kopf geschüttelt. Bei ihnen wurde aus Erbsenschoten Suppe, aus Kartoffelschalen ein Wickel, aus Zwiebelschalen Ostereierfarbe und aus dem Kohlstrunk ein Snack für die Kinder. Genau darum geht es in diesem Buch: **Gemüse ganz nutzen.** Vom Beet bis zur letzten Schale, zurück zu den Basics.',
        'Zu jedem Gemüse findest du, wie du es anbaust, erntest und lagerst, Rezepte für jeden Tag, eine Resteküche für Schalen, Blätter und Strünke, alte Hausmittel und Wickel – und Tipps für den Garten.',
        'Und weil Gemüse nicht nur gesund, sondern auch günstig ist: Wer alles verwertet, spart bares Geld.',
        'Herzlich,',
        '*Diana*',
      ],
    },
    {
      titel: 'So benutzt du dieses Buch',
      bloecke: [
        'Die Gemüse sind nach ihrer **Haupterntezeit** geordnet: Frühling, Sommer, Herbst und Winter. Alles, was du hier liest, gilt genauso für Gemüse vom Markt oder aus dem Supermarkt – du brauchst keinen eigenen Garten.',
        { h2: 'Aufbau der Kapitel' },
        { punkte: [
          '**Zeichnung:** die ganze Pflanze mit dem Teil, den wir essen – Wurzel, Knolle, Blatt, Frucht oder Kopf.',
          '**Steckbrief und Sorten.**',
          '**Anbau im Garten** und **Ernten und Lagern** mit Erntekalender.',
          '**Küche und Rezepte** für jeden Tag.',
          '**Alles verwerten:** was du aus Schalen, Blättern, Stielen, Kernen und Strünken machst.',
          '**Hausmittel und Wickel** – traditionell und ohne Heilversprechen.',
          '**Im Garten:** Mischkultur, Pflanzenschutz, Dünger aus Resten.',
          '**Haltbar machen** und **Vorsicht auf einen Blick**.',
        ] },
        { h2: 'Tauschen erlaubt' },
        'Die meisten Rezepte kommen ganz von selbst rein pflanzlich daher – es ist ja ein Gemüsebuch. Wo doch einmal Butter, Sahne, Käse, Ei oder Speck drinsteckt, findest du unter dem Rezept einen kleinen **Tausch-Tipp**.',
        { h2: 'Bio oder nicht?' },
        'Wer Schalen, Blätter und Strünke mitisst, sollte möglichst Gemüse aus eigenem Anbau oder in Bio-Qualität verwenden. Konventionelles Gemüse gründlich waschen und dickere Schalen eher für Brühe als für Chips nutzen.',
      ],
    },
    {
      titel: 'Lagern, Einkochen und Grundrezepte',
      bloecke: [
        'Mit diesen Grundtechniken bringst du die Ernte durch den Winter. In den Kapiteln wird auf sie verwiesen.',
        { h2: 'Gemüse richtig lagern' },
        { tabelle: [['Gemüse', 'So lagerst du es', 'Hält etwa'],
          ['Wurzelgemüse (Möhre, Rote Bete, Pastinake, Sellerie)', 'Grün abdrehen, ungewaschen in Kisten mit **feuchtem Sand** im kühlen Keller (1 bis 5 °C)', '3 bis 6 Monate'],
          ['Kartoffeln', '**dunkel**, kühl (4 bis 8 °C), luftig, nicht neben Äpfeln', '4 bis 8 Monate'],
          ['Zwiebeln, Knoblauch', 'trocken, luftig, kühl; zu Zöpfen geflochten aufhängen', '6 bis 9 Monate'],
          ['Kürbis', 'mit Stiel, trocken, 10 bis 15 °C, nicht auf kaltem Boden', '3 bis 12 Monate je Sorte'],
          ['Kohlköpfe', 'mit Strunk kopfüber aufgehängt oder in Zeitungspapier, kühl', '2 bis 4 Monate'],
          ['Lauch, Grünkohl, Rosenkohl, Pastinaken', 'einfach im Beet stehen lassen und bei Bedarf ernten', 'bis zum Frühjahr'],
        ], breiten: [3000, 4370, 1700] },
        { h2: 'Grundrezept 1: Fermentieren (Milchsäuregärung)' },
        'So entstehen Sauerkraut, saure Gurken und fermentiertes Gemüse – ohne Essig, nur mit Salz. Milchsäurebakterien, die natürlich auf dem Gemüse sitzen, machen es haltbar und bekömmlich.',
        { schritte: [
          'Gemüse waschen, schneiden oder hobeln.',
          '**Trockenes Salzen** (Kohl): 15 bis 20 g Salz pro Kilo Gemüse untermischen und kneten, bis Saft austritt. **Salzlake** (Gurken, Möhren, Bohnen): 20 bis 30 g Salz pro Liter Wasser auflösen.',
          'Gemüse fest in ein sauberes Glas drücken. Es muss **vollständig mit Flüssigkeit bedeckt** sein – ein kleines Glas oder ein Gärgewicht obendrauf hilft.',
          'Glas locker verschließen (Gase müssen entweichen) und 3 bis 7 Tage bei Zimmertemperatur gären lassen, dann kühl stellen.',
          'Nach 2 bis 6 Wochen ist es fertig. Kühl gelagert hält es viele Monate.',
        ] },
        { kasten: 'Woran du erkennst, dass etwas schiefgeht', zeilen: ['Weißer, flacher Belag (Kahmhefe) ist harmlos und kann abgeschöpft werden. **Pelziger, farbiger Schimmel, fauliger Geruch oder schleimiges Gemüse: wegwerfen.**'] },
        { h2: 'Grundrezept 2: Sauer einlegen' },
        { schritte: ['Sud aus 500 ml Essig (5 %), 500 ml Wasser, 1 bis 2 EL Zucker und 1 EL Salz aufkochen, Gewürze nach Rezept zugeben.', 'Gemüse in saubere Gläser schichten.', 'Mit kochendem Sud übergießen, sofort verschließen.', 'Für längere Haltbarkeit 20 bis 30 Minuten bei 80 bis 90 °C im Wasserbad oder Einkochautomaten einkochen.'] },
        { h2: 'Grundrezept 3: Einkochen im Wasserbad' },
        'Gläser mit Gummiring oder Schraubdeckel füllen, verschließen, in einen großen Topf auf ein Tuch stellen, mit Wasser bis drei Viertel der Glashöhe auffüllen und je nach Rezept bei 80 bis 100 °C einkochen. **Wichtig:** Nicht saures Gemüse wie Bohnen, Erbsen oder Möhren ohne Essig nur mit Druck- oder zweimaligem Einkochen sicher konservieren – oder lieber einfrieren oder fermentieren. Bei unzureichend erhitztem Gemüse besteht die Gefahr von Botulismus.',
        { h2: 'Grundrezept 4: Blanchieren und Einfrieren' },
        { schritte: ['Gemüse putzen und in Stücke schneiden.', '2 bis 4 Minuten in kochendes Salzwasser geben.', 'Sofort in Eiswasser abschrecken, gut abtropfen lassen.', 'Portionsweise in Beutel oder Dosen füllen und einfrieren. Hält 8 bis 12 Monate.'] },
        { h2: 'Grundrezept 5: Gemüsebrühe aus Resten' },
        'Sammle in einer Dose im Gefrierfach alle sauberen Gemüsereste: Zwiebelschalen, Möhrenschalen und -grün, Lauchgrün, Selleriestücke, Petersilienstiele, Pilzstiele, Kohlrabiblätter. Wenn die Dose voll ist:',
        { schritte: ['Reste in einen großen Topf geben, mit Wasser bedecken.', 'Nach Belieben 1 Lorbeerblatt, 5 Pfefferkörner und 2 Wacholderbeeren dazu.', '1 Stunde leise köcheln, abseihen.', 'Salzen, abfüllen und im Kühlschrank (5 Tage) oder im Gefrierfach (6 Monate) aufbewahren.'] },
        'Nicht in die Brühe gehören: Kohl in großen Mengen (wird streng), Kartoffelschalen (trüben), Rote Bete (färbt alles rot) und verschimmelte oder angefaulte Reste.',
        { h2: 'Grundrezept 6: Gemüsechips aus Schalen' },
        { schritte: ['Saubere Schalen von Kartoffeln, Möhren, Pastinaken oder Roter Bete trocken tupfen.', 'Mit 1 EL Öl und etwas Salz mischen.', 'Auf einem Blech mit Backpapier verteilen und bei 180 °C 10 bis 15 Minuten backen, bis sie knusprig sind. Zwischendurch wenden.'] },
      ],
    },
    kapitel1('Wichtige Hinweise zur Anwendung'),
  ],

  hinten: [
    {
      titel: 'Vorsicht im Gemüsebeet',
      bloecke: [
        'Gemüse ist gesund – aber einige Pflanzenteile und Situationen solltest du kennen.',
        { tabelle: [['Was', 'Warum', 'So machst du es richtig'],
          ['**Bittere Zucchini, Kürbisse und Gurken**', 'Durch Rückkreuzung oder Stress können sie **Cucurbitacine** bilden – schon kleine Mengen können schwere Vergiftungen auslösen, es gab Todesfälle.', '**Vor dem Kochen ein kleines Stück roh probieren. Ist es bitter: ausspucken und das ganze Gemüse wegwerfen.** Kochen zerstört die Stoffe nicht. Keine Samen von Zierkürbissen nehmen.'],
          ['**Grüne Stellen und Keime an Kartoffeln**', 'enthalten **Solanin**', 'Großzügig wegschneiden; stark grüne Kartoffeln wegwerfen. Kartoffelbeeren und -kraut nie essen.'],
          ['**Rohe Bohnen**', 'enthalten **Phasin**, das Erbrechen und Durchfall auslöst', 'Grüne Bohnen und getrocknete Bohnenkerne **immer mindestens 10 Minuten kochen**. Kein Bohnensalat aus rohen Bohnen.'],
          ['**Rhabarberblätter**', 'sehr viel **Oxalsäure**', 'Blätter nicht essen – nur die Stiele. Die Blätter eignen sich als Pflanzenschutzbrühe.'],
          ['**Tomaten- und Paprikakraut, grüne Tomaten**', 'Solanin und Tomatin', 'Kraut nicht essen. Grüne Tomaten nur in kleinen Mengen und gekocht.'],
          ['**Nitrat**', 'Spinat, Mangold, Rote Bete und Blattsalate können viel Nitrat enthalten', 'Gekochten Spinat nicht lange warm halten oder mehrfach aufwärmen, besonders nicht für Säuglinge und Kleinkinder.'],
        ], breiten: [2500, 2900, 3670] },
        { warnung: 'Im Notfall', zeilen: ['Bei Vergiftungsverdacht sofort den **Giftnotruf** anrufen (z. B. Berlin **030 19240**, München **089 19240**) oder **112** wählen. Reste des Gemüses aufbewahren.'] },
      ],
    },
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        'Die Angaben in diesem Buch beruhen auf den folgenden Quellen und Nachschlagewerken.',
        { punkte: [
          'Bundeszentrum für Ernährung (BZfE): Lebensmittelwissen, Saisonkalender und Lagerung (bzfe.de).',
          'Bundesinstitut für Risikobewertung (BfR): Cucurbitacine, Solanin, Phasin, Nitrat (bfr.bund.de).',
          'Verbraucherzentrale: Lebensmittel retten und richtig lagern (verbraucherzentrale.de).',
          'Europäische Arzneimittel-Agentur (EMA), HMPC: Monographien (ema.europa.eu).',
          'Katz, S. E.: *Die Kunst der Fermentation*. Kosmos.',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
        ] },
      ],
    },
  ],
};
