// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 6.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');
const heft5 = require('../../selbstversorger-5-einkochen/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 6: Trocknen, Dörren und Fermentieren';

const haftung = {
  ...heft5.vorne[0],
  bloecke: heft5.vorne[0].bloecke.map((b) => {
    if (b.warnung) return { ...b, zeilen: [
      '- **Schimmel:** Zeigt sich auf Gärgemüse oder Trockenobst flauschiger, farbiger Schimmel (grün, blau, schwarz, rosa), wirf **den ganzen Inhalt** weg. Ein flacher, weißer, glatter Film auf der Lake ist meist harmlose Kahmhefe – mehr dazu im Kapitel Fermentieren.',
      '- **Kein Knoblauch und keine frischen Kräuter in Öl** auf Vorrat einlegen. In Öl können Botulismus-Bakterien ein lebensgefährliches Gift bilden. Getrocknete Tomaten in Öl nur in kleinen Mengen, im Kühlschrank und innerhalb einer Woche verbrauchen.',
      '- **Bohnen sind roh giftig** (Phasin) – auch getrocknet und vergoren. Vor dem Essen immer mindestens 10 Minuten kochen.',
      '- **Gärgläser** nicht fest verschlossen stehen lassen: Beim Gären entsteht Gas, und ein dicht verschraubtes Glas kann platzen.',
      '- **Backofen und Dörrgerät** nicht unbeaufsichtigt über Nacht laufen lassen, wenn die Ofentür mit einem Holzlöffel offen gehalten wird. Rauchmelder in der Küche.',
      '- Wer **Histamin** schlecht verträgt, verträgt oft auch Sauerkraut und anderes Gärgemüse schlecht. Bei Erkrankungen, in der Schwangerschaft und bei Immunschwäche im Zweifel ärztlich beraten lassen.',
      '- Im Notfall: **Giftnotruf** (z. B. Berlin 030 19240) oder **112**.',
    ] };
    if (b.links) return { links: '*The author is not a food scientist or physician. This booklet is a practical household guide for general information only. Discard any ferment or dried food showing fuzzy or coloured mould. Never store garlic or fresh herbs in oil at room temperature, as this carries a risk of botulism. Beans are toxic when raw, even when dried or fermented; always boil them for at least 10 minutes. Do not seal fermenting jars tightly. To the fullest extent permitted by law, the author and publisher disclaim any liability for injury, illness, loss or damage arising from the use of the information in this booklet.*' };
    if (typeof b === 'string') return b.replace(' und das erste Kapitel, bevor du das erste Glas füllst', ', bevor du loslegst').replace('Du kochst ein **auf eigene Gefahr', 'Du trocknest und vergärst **auf eigene Gefahr').replace('Zeiten, Temperaturen und Säuremengen', 'Temperaturen und Salzmengen').replace('eingemachte Lebensmittel', 'getrocknete oder vergorene Lebensmittel').replace('Haltbarmachen von Obst und Gemüse', 'Trocknen und Vergären von Obst, Gemüse und Kräutern').replace(' und den Empfehlungen des Bundesinstituts für Risikobewertung', '');
    return b;
  }),
};

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Die ältesten Vorräte der Welt',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-6',
  kurz: 'Heft-6',
  registerSpalte: 'Kapitel',
  registerTitel: 'Rezepte nach Themen',
  registerKopf: 'Rezept',
  registerText: 'Hier findest du alle Rezepte dieses Heftes nach Themen geordnet. Die Grundregeln stehen jeweils am Anfang der Abschnitte.',

  impressum: heft1.impressum.map((z) => (z.startsWith('**Wichtiger Hinweis:**')
    ? '**Wichtiger Hinweis:** Bitte beachte den Haftungsausschluss auf den folgenden Seiten. Die Inhalte dieses Heftes wurden sorgfältig recherchiert. Sie dienen der allgemeinen Information. Wer Lebensmittel trocknet und vergärt, tut dies auf eigene Verantwortung. Autorin und Verlag übernehmen keine Haftung für Schäden, die aus der Anwendung der beschriebenen Rezepte entstehen.'
    : z.replace(heft1.untertitel, UNTERTITEL))),

  abschnitte: [
    ['trocknen', 'Trocknen und Dörren', 'Obst, Gemüse und Kräuter ohne Strom oder mit wenig'],
    ['fermentieren', 'Fermentieren', 'Sauerkraut, milchsaures Gemüse, Kimchi'],
    ['jahr', 'Das Vorratsjahr', 'Was du wann trocknest und vergärst'],
  ],

  vorne: [
    haftung,
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Lange bevor es Einmachgläser, Gefriertruhen und Kühlschränke gab, haben Menschen auf zwei Arten Vorräte angelegt: Sie haben getrocknet, was die Sonne und das Feuer hergaben, und sie haben vergoren – Kohl zu Sauerkraut, Gurken zu Salzgurken, Rüben zu Sauerrüben. Beides geht ohne viel Zucker, ohne viel Energie und ohne besondere Geräte.',
        'Getrocknete Apfelringe, Zwetschgen, Tomaten, Suppengemüse und Kräuter brauchen kaum Platz und halten ein Jahr. Milchsauer vergorenes Gemüse ist nicht nur haltbar, sondern lebendig: voller Milchsäurebakterien, knackig und so sauer, dass es auch ohne Essig sicher ist.',
        'In diesem Heft lernst du beides – Schritt für Schritt, mit Gläsern aus dem Schrank, einem Backofen oder einer Wäscheleine.',
        'Zurück zu den Basics – Stück für Stück.',
        'Herzlich,',
        '*Diana*',
      ],
    },
  ],

  hinten: [
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        { punkte: [
          'Bundesinstitut für Risikobewertung (BfR): Botulismus; Knoblauch und Kräuter in Öl (bfr.bund.de).',
          'Bundeszentrum für Ernährung (BZfE): Lebensmittel trocknen; Sauerkraut und milchsaures Gemüse (bzfe.de).',
          'Verbraucherzentrale: Obst und Gemüse haltbar machen (verbraucherzentrale.de).',
          'Katz, S. E.: *Wild Fermentation*. Chelsea Green.',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft geht es um das Lagern ganz ohne Glas und Strom: **Vorratskeller und Lagerung** – Kartoffeln, Äpfel, Wurzelgemüse, Kürbis und Kohl, im Keller, in Sand und in der Erdmiete.',
      ],
    },
  ],
};
