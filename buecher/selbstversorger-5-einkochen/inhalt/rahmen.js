// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 5.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 5: Einkochen und Einmachen';

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Den Sommer ins Glas holen',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-5',
  kurz: 'Heft-5',
  registerSpalte: 'Kapitel',
  registerTitel: 'Rezepte nach Themen',
  registerKopf: 'Rezept',
  registerText: 'Hier findest du alle Rezepte dieses Heftes nach Themen geordnet. Die Sicherheitsregeln und Einkochzeiten stehen in den ersten beiden Kapiteln.',

  impressum: heft1.impressum.map((z) => (z.startsWith('**Wichtiger Hinweis:**')
    ? '**Wichtiger Hinweis:** Bitte beachte den Haftungsausschluss und das Kapitel „Sicher einkochen“. Die Inhalte dieses Heftes wurden sorgfältig recherchiert. Sie dienen der allgemeinen Information. Wer Lebensmittel einkocht und einmacht, tut dies auf eigene Verantwortung. Autorin und Verlag übernehmen keine Haftung für Schäden, die aus der Anwendung der beschriebenen Rezepte entstehen.'
    : z.replace(heft1.untertitel, UNTERTITEL))),

  abschnitte: [
    ['grundlagen', 'Sicher einkochen', 'Was im Glas passiert, Ausrüstung und Einkochzeiten'],
    ['obst', 'Obst ins Glas', 'Konfitüre, Gelee, Mus, Kompott, Saft und Sirup'],
    ['gemuese', 'Gemüse ins Glas', 'Sauer eingelegt, Tomaten und was du besser anders haltbar machst'],
    ['jahr', 'Das Einkochjahr', 'Was du wann einkochst'],
  ],

  vorne: [
    {
      titel: 'Bevor du loslegst: Haftungsausschluss',
      bloecke: [
        'Bitte lies diese Seiten und das erste Kapitel, bevor du das erste Glas füllst.',
        { h2: 'Ein Ratgeber aus der Praxis' },
        'Dieses Heft habe ich aus freien Stücken, nach bestem Wissen und Gewissen und mit großer Sorgfalt geschrieben. Es ist ein **Ratgeber** für das Haltbarmachen von Obst und Gemüse im eigenen Haushalt.',
        '**Ich bin keine Lebensmitteltechnikerin, keine Ärztin und keine Hauswirtschaftsmeisterin.** Ich gebe hier weiter, was ich gelernt, ausprobiert und aus Fachliteratur und den Empfehlungen des Bundesinstituts für Risikobewertung zusammengetragen habe – sorgfältig, aber als Laiin.',
        { h2: 'Deine Sicherheit' },
        { warnung: 'Die wichtigsten Regeln', zeilen: [
          '- **Botulismus:** In nicht sauren Lebensmitteln (die meisten Gemüse, Hülsenfrüchte, Pilze) können beim Einkochen Bakteriensporen überleben, die im luftdichten Glas ein **lebensgefährliches Gift** bilden. Lies dazu unbedingt das Kapitel „Was im Glas passiert“.',
          '- **Gläser mit gewölbtem oder losem Deckel, Gasbläschen, trübem Inhalt, Schimmel oder ungewöhnlichem Geruch: nicht probieren, wegwerfen.** Auch nicht „nur einen Löffel“.',
          '- **Heißes Glas, heißer Dampf, heißer Zucker:** Topflappen, feste Schuhe, Kinder und Haustiere aus der Küche. Kochende Konfitüre spritzt und verursacht schwere Verbrennungen.',
          '- Gläser vor dem Füllen auf Risse und Kerben am Rand prüfen. Beschädigte Gläser und spröde Gummiringe aussortieren.',
          '- Bei Schwangerschaft, Kleinkindern und geschwächtem Immunsystem besonders vorsichtig sein; im Zweifel lieber einfrieren.',
          '- Im Notfall: **Giftnotruf** (z. B. Berlin 030 19240) oder **112**. Anzeichen von Botulismus (Doppelbilder, Schluckbeschwerden, Lähmungen) sind ein Notfall.',
        ] },
        { h2: 'Deine Verantwortung' },
        'Du kochst ein **auf eigene Gefahr und eigene Verantwortung**. Halte dich genau an Zeiten, Temperaturen und Säuremengen und ändere Rezepte nur dort, wo es ausdrücklich erlaubt ist (etwa bei Gewürzen). Wer eingemachte Lebensmittel **verkaufen** möchte, unterliegt dem Lebensmittelrecht mit Hygieneschulung, Kennzeichnung und Meldung bei der Lebensmittelüberwachung.',
        { h2: 'Haftung' },
        'Alle Angaben wurden sorgfältig zusammengestellt. Trotzdem kann ich keine Gewähr für Richtigkeit, Vollständigkeit und Erfolg übernehmen. Soweit gesetzlich zulässig, übernehmen Autorin und Verlag **keine Haftung** für gesundheitliche Schäden, Vergiftungen, Verbrennungen, Sachschäden oder sonstige Schäden, die durch die Anwendung der beschriebenen Rezepte und Verfahren entstehen.',
        { h2: 'Disclaimer (English)' },
        { links: '*The author is not a food scientist or physician. This booklet is a practical household guide for general information only. Low-acid foods (most vegetables, legumes, mushrooms) can carry the risk of botulism when canned at home; follow the safety advice in this booklet exactly, and when in doubt, freeze instead. Never taste food from jars with bulging or loose lids, gas bubbles, mould or an unusual smell. To the fullest extent permitted by law, the author and publisher disclaim any liability for injury, illness, loss or damage arising from the use of the information in this booklet.*' },
      ],
    },
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Im Juli weißt du nicht wohin mit den Johannisbeeren, im August biegen sich die Zwetschgenäste, im September reifen die Tomaten schneller, als du sie essen kannst. Und im Februar? Da ist der Garten leer. Genau dafür haben unsere Großmütter eingekocht: Regal um Regal voller Gläser – Kirschen, Apfelmus, Gewürzgurken, Pflaumenmus –, damit der Sommer bis zum nächsten Frühjahr reicht.',
        'In diesem Heft lernst du die Grundtechniken: Konfitüre und Gelee, Mus und Kompott, Saft und Sirup, sauer eingelegtes Gemüse und Tomaten. Alles mit Zucker, Essig und Hitze – ohne Konservierungsstoffe und mit dem Obst und Gemüse aus deinem Garten.',
        'Und ich sage dir ehrlich, wo Einkochen nicht der richtige Weg ist: bei Bohnen, Erbsen und anderem nicht saurem Gemüse. Die machst du sicherer auf andere Weise haltbar – mehr dazu im ersten Kapitel und in den nächsten Heften über Trocknen, Fermentieren und Lagern.',
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
          'Bundesinstitut für Risikobewertung (BfR): Botulismus durch selbst eingemachte Lebensmittel; Verbrauchertipps zum Einkochen (bfr.bund.de).',
          'Bundeszentrum für Ernährung (BZfE): Einkochen und Einmachen (bzfe.de).',
          'Verbraucherzentrale: Obst und Gemüse haltbar machen (verbraucherzentrale.de).',
          'National Center for Home Food Preservation (USA): Säure und Tomaten (nchfp.uga.edu).',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft geht es um die ältesten Methoden, Vorräte anzulegen: **Trocknen, Dörren und Fermentieren** – Sauerkraut, milchsaures Gemüse, getrocknete Äpfel, Kräuter und Tomaten.',
      ],
    },
  ],
};
