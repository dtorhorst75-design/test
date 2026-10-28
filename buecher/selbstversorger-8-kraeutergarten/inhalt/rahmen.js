// Titelei, Grundlagen (vorne) und Anhang (hinten) für „Stück für Stück Selbstversorger“, Heft 8.
const heft1 = require('../../selbstversorger-1-gemuesegarten/inhalt/rahmen.js');

const UNTERTITEL = 'Heft 8: Kräutergarten und Hausapotheke vom Balkon';

module.exports = {
  titel: heft1.titel,
  untertitel: UNTERTITEL,
  motto: 'Ein Topf Thymian ist ein Anfang',
  autorin: heft1.autorin,
  datei: 'Stueck-fuer-Stueck-Selbstversorger-Heft-8',
  kurz: 'Heft-8',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen und Rezepte nach Themen',
  registerKopf: 'Anleitung oder Rezept',
  registerText: 'Hier findest du alle Anleitungen und Rezepte dieses Heftes nach Themen geordnet. Die Kräutertabellen stehen im Abschnitt „Die Kräuter“.',

  impressum: heft1.impressum.map((z) => (z.startsWith('**Wichtiger Hinweis:**')
    ? '**Wichtiger Hinweis:** Bitte beachte den Haftungsausschluss auf den folgenden Seiten. Die Inhalte dieses Heftes wurden sorgfältig recherchiert. Sie dienen der allgemeinen Information und ersetzen keine ärztliche Beratung, Diagnose oder Behandlung. Wer Kräuter anbaut und anwendet, tut dies auf eigene Verantwortung. Autorin und Verlag übernehmen keine Haftung für Schäden, die aus der Anwendung der beschriebenen Rezepte und Verfahren entstehen.'
    : z.replace(heft1.untertitel, UNTERTITEL))),

  abschnitte: [
    ['anbauen', 'Anlegen', 'Standort, Erde, Kräuterspirale, Töpfe und Kästen'],
    ['kraeuter', 'Die Kräuter', 'Küchenkräuter und Heilkräuter im Porträt'],
    ['pflege', 'Pflegen und Ernten', 'Vermehren, Schneiden, Überwintern, Ernten'],
    ['apotheke', 'Die kleine Hausapotheke', 'Tees und einfache Anwendungen'],
    ['jahr', 'Das Kräuterjahr', 'Was du wann tust'],
  ],

  vorne: [
    {
      titel: 'Bevor du loslegst: Haftungsausschluss',
      bloecke: [
        'Bitte lies diese Seiten, bevor du die ersten Kräuter anwendest.',
        { h2: 'Ein Ratgeber aus der Praxis' },
        'Dieses Heft habe ich aus freien Stücken, nach bestem Wissen und Gewissen und mit großer Sorgfalt geschrieben. Es ist ein **Ratgeber** für den Anbau von Kräutern und ihre traditionelle Verwendung in Küche und Hausapotheke.',
        '**Ich bin keine Apothekerin, keine Ärztin, keine Heilpraktikerin und keine ausgebildete Gärtnerin.** Ich gebe hier weiter, was ich gelernt, ausprobiert und aus Fachliteratur zusammengetragen habe – sorgfältig, aber als Laiin.',
        { h2: 'Deine Gesundheit' },
        { warnung: 'Die wichtigsten Regeln', zeilen: [
          '- **Hausmittel ersetzen keinen Arzt.** Bei hohem oder anhaltendem Fieber, starken oder unklaren Schmerzen, Atemnot, Beschwerden, die länger als drei Tage dauern oder schlimmer werden, sowie bei Säuglingen und Kleinkindern immer ärztlichen Rat holen.',
          '- **Schwangerschaft und Stillzeit, Kinder, chronische Erkrankungen, regelmäßige Medikamente:** Vor der Anwendung von Heilkräutern mit Ärztin, Arzt oder Apotheke sprechen. Manche Kräuter (z. B. Salbei, Johanniskraut) sind in der Schwangerschaft oder mit Medikamenten nicht geeignet.',
          '- **Allergien:** Kamille, Ringelblume und Schafgarbe sind Korbblütler und können bei entsprechender Allergie Reaktionen auslösen. Neue Anwendungen zuerst an einer kleinen Hautstelle testen.',
          '- **Nur sicher erkannte Pflanzen.** Dieses Heft beschränkt sich auf Kräuter, die du selbst säst oder als Pflanze kaufst. Wildpflanzen sammelst du nur, wenn du sie zweifelsfrei bestimmt hast (siehe Band 1 „Kräuter & Wildpflanzen“).',
          '- **Ätherische Öle** nie unverdünnt anwenden, nicht bei Säuglingen und Kleinkindern im Gesichtsbereich (besonders Pfefferminz- und Eukalyptusöl).',
          '- Im Notfall: **Giftnotruf** (z. B. Berlin 030 19240) oder **112**.',
        ] },
        { h2: 'Deine Verantwortung' },
        'Du baust die Kräuter an und wendest sie **auf eigene Gefahr und eigene Verantwortung** an. Die Angaben zur Wirkung beschreiben die **traditionelle Verwendung** und den Stand der Fachliteratur; sie sind keine Heilversprechen.',
        { h2: 'Haftung' },
        'Alle Angaben wurden sorgfältig zusammengestellt. Trotzdem kann ich keine Gewähr für Richtigkeit, Vollständigkeit und Wirksamkeit übernehmen. Soweit gesetzlich zulässig, übernehmen Autorin und Verlag **keine Haftung** für gesundheitliche Schäden, allergische Reaktionen oder sonstige Schäden, die durch den Anbau oder die Anwendung der beschriebenen Kräuter entstehen.',
        { h2: 'Disclaimer (English)' },
        { links: '*The author is not a pharmacist, physician, herbalist or trained gardener. This booklet describes the traditional use of garden herbs for general information only and is not medical advice. Seek medical help for serious, persistent or unclear symptoms, and always for infants and young children. Consult a doctor or pharmacist before using herbal remedies during pregnancy or breastfeeding, with chronic illness or when taking medication. To the fullest extent permitted by law, the author and publisher disclaim any liability for injury, illness, allergic reaction, loss or damage arising from the use of the information in this booklet.*' },
      ],
    },
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du wieder da bist!',
        'Kräuter sind der leichteste Einstieg in die Selbstversorgung. Ein Topf Schnittlauch auf der Fensterbank, ein Kasten mit Thymian und Salbei auf dem Balkon, ein Rosmarin neben der Haustür – mehr braucht es nicht, um jeden Tag etwas Frisches aus eigener Ernte auf den Teller zu bringen.',
        'Und viele Küchenkräuter sind zugleich alte Hausmittel: Salbei zum Gurgeln, Thymian bei Husten, Kamille und Pfefferminze für den Bauch, Melisse zum Einschlafen, Ringelblume für raue Hände. Unsere Großmütter hatten ihre Hausapotheke vor der Küchentür.',
        'In diesem Heft geht es vor allem um den **Anbau**: wo welche Kräuter wachsen, wie du eine Kräuterspirale baust, Töpfe bepflanzt, Kräuter vermehrst, schneidest und überwinterst – und wann du sie erntest. Die ausführlichen Pflanzenporträts und viele Rezepte findest du in „Was die Natur uns schenkt“, Band 1.',
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
          'Europäische Arzneimittel-Agentur (EMA), Ausschuss für pflanzliche Arzneimittel (HMPC): Monografien zu Kamille, Salbei, Thymian, Pfefferminze, Melisse, Lavendel, Ringelblume, Johanniskraut (ema.europa.eu).',
          'Wichtl, M.: *Teedrogen und Phytopharmaka*. Wissenschaftliche Verlagsgesellschaft.',
          'Bundesinstitut für Risikobewertung (BfR): ätherische Öle; Pflanzen in Lebensmitteln (bfr.bund.de).',
          'Kreuter, M.-L.: *Der Biogarten*. BLV.',
        ] },
        { h2: 'Wie es weitergeht' },
        'Im nächsten Heft wird es größer und langfristiger: **Obstbäume und Beeren** – pflanzen, schneiden, ernten.',
      ],
    },
  ],
};
