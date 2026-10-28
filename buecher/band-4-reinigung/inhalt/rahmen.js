// Titelei, Grundlagen (vorne) und Anhang (hinten) für Band 4: Reinigung.
const band1 = require('../../band-1-kraeuter-wildpflanzen/inhalt/rahmen.js');

module.exports = {
  titel: 'Was die Natur uns schenkt',
  untertitel: 'Band 4: Sauber selbst gemacht – Putzen und Waschen',
  motto: 'einfach · günstig · ohne Chemiekeule',
  autorin: 'Diana',
  datei: 'Was-die-Natur-uns-schenkt-Band-4',
  kurz: 'Band-4',
  registerSpalte: 'Kapitel',
  registerTitel: 'Anleitungen nach Themen',
  registerKopf: 'Anleitung',
  registerText: 'Hier findest du alle Anleitungen dieses Buches nach Themen geordnet. Die Grundzutaten und Sicherheitsregeln stehen vorne im Buch.',

  impressum: band1.impressum.map((z) => (z.startsWith('**Wichtiger Hinweis:**') ? '**Wichtiger Hinweis:** Bitte beachte den Haftungsausschluss auf den folgenden Seiten. Die Inhalte dieses Buches wurden sorgfältig recherchiert. Sie dienen der allgemeinen Information. Wer die beschriebenen Mittel herstellt und anwendet, tut dies auf eigene Verantwortung. Autorin und Verlag übernehmen keine Haftung für Schäden, die aus der Anwendung der beschriebenen Anleitungen entstehen.' : z.replace('Band 1: Kräuter & Wildpflanzen', 'Band 4: Sauber selbst gemacht – Putzen und Waschen').replace('Texte und Pflanzenzeichnungen wurden', 'Die Texte wurden'))),

  abschnitte: [
    ['waesche', 'Wäsche', 'Waschen, Flecken, Pflege'],
    ['kueche', 'Küche', 'Spülen, Backofen, Kühlschrank, Arbeitsflächen'],
    ['bad', 'Bad und WC', 'Kalk, Fugen, Abfluss'],
    ['wohnen', 'Wohnen', 'Böden, Fenster, Möbel, Metall, Luft und Schimmel, Ungeziefer'],
    ['routine', 'Routinen', 'Einkaufsliste, Putzplan und Frühjahrsputz'],
  ],

  vorne: [
    {
      titel: 'Bevor du loslegst: Haftungsausschluss',
      bloecke: [
        'Bitte lies diese Seite, bevor du die erste Mischung ansetzt.',
        { h2: 'Ein Ratgeber aus der Praxis' },
        'Dieses Buch habe ich aus freien Stücken, nach bestem Wissen und Gewissen und mit großer Sorgfalt geschrieben. Es ist ein **Ratgeber** für den Haushalt mit einfachen, altbewährten Hausmitteln.',
        '**Ich bin keine Chemikerin und keine Fachkraft für Gebäudereinigung.** Ich gebe hier weiter, was ich gelernt, ausprobiert und aus Fachliteratur und Verbraucherinformationen zusammengetragen habe – sorgfältig, aber als Laiin.',
        { h2: 'Auch Hausmittel sind Chemie' },
        { warnung: 'Die wichtigsten Regeln', zeilen: [
          '- **Mische niemals** selbst gemachte Reiniger mit gekauften Reinigern – vor allem nie **chlorhaltige** Mittel mit **Säuren** (Essig, Zitronensäure, WC-Reiniger). Dabei entsteht giftiges Chlorgas.',
          '- **Essigessenz und Zitronensäure** reizen Haut, Augen und Atemwege, **Pflanzensude** aus Efeu und Kastanien die Haut. Trage **Handschuhe**, bei Pulvern und Spritzgefahr auch eine **Schutzbrille**.',
          '- **Rosskastanien und Efeu sind giftig.** Sude und Pulver daraus nie in Getränkeflaschen füllen und nicht essen; Geschirr nach dem Spülen damit gründlich klar nachspülen.',
          '- Alle Mischungen **beschriften**, in **eindeutigen** Flaschen aufbewahren – nie in Getränkeflaschen – und **außer Reichweite von Kindern** lagern.',
          '- **Neue Mittel immer zuerst an einer unauffälligen Stelle testen.** Naturstein, Holz, Lack, Aluminium, Gummidichtungen und empfindliche Textilien können Schaden nehmen.',
          '- Im Notfall: **Giftnotruf** (z. B. Berlin 030 19240, München 089 19240) oder **112**. Bei Spritzern ins Auge sofort 10 bis 15 Minuten mit Wasser spülen.',
        ] },
        { h2: 'Deine Verantwortung' },
        'Du stellst die Mittel her und verwendest sie **auf eigene Gefahr und eigene Verantwortung**. Beachte die Gebrauchsanleitungen deiner Geräte (Waschmaschine, Spülmaschine) und die Pflegehinweise deiner Möbel, Böden und Textilien. Selbst gemachte Mittel reinigen oft gut, sie **desinfizieren aber nicht** wie Produkte, die dafür zugelassen sind.',
        { h2: 'Haftung' },
        'Alle Angaben wurden sorgfältig zusammengestellt. Trotzdem kann ich keine Gewähr für Richtigkeit, Vollständigkeit und Erfolg übernehmen. Soweit gesetzlich zulässig, übernehmen Autorin und Verlag **keine Haftung** für gesundheitliche Schäden, Sachschäden an Textilien, Oberflächen, Geräten oder Gebäuden oder sonstige Schäden, die durch die Herstellung oder Anwendung der beschriebenen Mittel entstehen.',
        { h2: 'Disclaimer (English)' },
        { links: '*The author is not a chemist or cleaning professional. This book is a practical household guide for general information only. Homemade cleaning products may irritate skin, eyes and airways and may damage surfaces, textiles or appliances; always test on a hidden spot first. Never mix homemade cleaners with commercial products, especially bleach with acids. Keep all products labelled and out of reach of children. To the fullest extent permitted by law, the author and publisher disclaim any liability for injury, illness, loss or damage arising from the use of the information in this book.*' },
      ],
    },
    {
      titel: 'Vorwort',
      bloecke: [
        'Schön, dass du da bist!',
        'Unter der Spüle stehen in den meisten Haushalten zehn, fünfzehn verschiedene Flaschen: für Glas, für Bad, für Küche, für Fliesen, für Holz, für Edelstahl. Dabei reichen für fast alles ein paar **Grundzutaten aus der Natur**, die unsere Großmütter schon kannten: Pflanzen, die waschen – Rosskastanien, Efeu, Seifenkraut –, dazu Essig, Zitrone, Natron und Salz. Und die Sonne als Bleiche.',
        'In diesem Buch zeige ich dir, wie du daraus alles machst, was du zum Putzen und Waschen brauchst – günstiger, mit weniger Plastik und ohne Duftstoffe, die in der Nase beißen. Und ich sage dir auch ehrlich, wo Hausmittel an ihre Grenzen kommen.',
        'Zurück zu den Basics – auch beim Putzen.',
        'Herzlich,',
        '*Diana*',
      ],
    },
    {
      titel: 'Die Grundzutaten',
      bloecke: [
        'Mit diesen Zutaten kommst du durch fast den ganzen Haushalt. Die Pflanzen sammelst du selbst, den Rest bekommst du im Supermarkt, in der Drogerie oder Apotheke. Seifen, Spiritus und chemische Bleichmittel brauchst du nicht.',
        { tabelle: [['Zutat', 'Was sie kann', 'Achtung'],
          ['**Natron** (Natriumhydrogencarbonat, Backnatron; kommt auch als Mineral in der Natur vor)', 'mild basisch: löst Fett leicht an, neutralisiert Gerüche, scheuert sanft', 'harmlos, aber nicht auf Aluminium länger einwirken lassen'],
          ['**Zitronensäure** (Pulver) und **Zitronensaft**', 'Fruchtsäure: löst Kalk, Urinstein und Rost, bleicht mit Sonne', 'nur **kalt bis handwarm** verwenden – heiß bildet sich schwer lösliches Calciumcitrat; nicht auf Naturstein, Emaille-Schäden möglich'],
          ['**Essig** (Haushaltsessig 5 %, Essigessenz 25 %)', 'löst Kalk, macht Glas streifenfrei, neutralisiert Gerüche', 'Essigessenz nur verdünnt; nicht auf Naturstein (Marmor, Kalkstein), nicht häufig auf Gummidichtungen; nie mit Chlor mischen'],
          ['**Rosskastanien, Efeu**', 'natürliche Saponine: waschen Wäsche, lösen Fett, für Böden und Geschirr', '**giftig** – beschriften, nicht essen, vor Kindern sichern; Sud hält nur wenige Tage'],
          ['**Seifenkraut, Waschnüsse**', 'mildere Saponine für Wolle, Feines und Geschirr', 'nicht in die Augen bringen; Seifenkraut siehe Band 1'],
          ['**Salz**', 'scheuert, saugt frische Flecken auf, löst eingetrocknetes Blut', 'nicht auf empfindlichem Lack und Edelstahl reiben'],
          ['**Speisestärke, Kartoffelmehl**', 'saugt Fett aus Textilien und Polstern', 'gut ausbürsten'],
          ['**Sonne**', 'bleicht Weißwäsche und viele Flecken, desinfiziert ein wenig', 'bleicht auch Farben – Buntes im Schatten trocknen'],
        ], breiten: [2600, 3400, 3070] },
        { h2: 'Ausrüstung' },
        { punkte: ['Sprühflaschen (gut beschriften!), Glasflaschen, Schraubgläser', 'Gummihandschuhe, Schutzbrille für Essigessenz und Pulver', 'Baumwolltücher und Mikrofasertücher, Spülbürste, alte Zahnbürste, Schwamm', 'Messbecher, Küchenwaage, Trichter, Topf und Sieb nur für Pflanzensude, Mulltuch', 'Etiketten und wasserfester Stift'] },
        { h2: 'Ätherische Öle?' },
        'Ein paar Tropfen Zitronen-, Lavendel- oder Orangenöl duften angenehm, sind aber nicht nötig. Sie können Allergien auslösen und sind für Katzen giftig. Wer Haustiere oder empfindliche Atemwege hat, lässt sie weg oder nimmt stattdessen Zitronen- oder Orangenschalen.',
      ],
    },
    {
      titel: 'Was du nie mischen darfst',
      bloecke: [
        { tabelle: [['Mischung', 'Was passiert'],
          ['Chlorreiniger + Säure (Essig, Zitronensäure, saurer WC-Reiniger)', '**giftiges Chlorgas** – Atemnot, Lungenschäden'],
          ['Chlorreiniger + Ammoniak (manche Glasreiniger)', '**giftige Chloramine**'],
          ['Natron + Essig oder Zitronensäure in einer Flasche', 'kein Gift, aber die beiden heben sich gegenseitig auf – das Sprudeln sieht beeindruckend aus, reinigt aber kaum; in geschlossenen Flaschen baut sich Druck auf'],
          ['Wasserstoffperoxid + Essig', 'Peressigsäure – ätzend'],
          ['Verschiedene Abflussreiniger', 'Hitze, Spritzer, Gase'],
        ], breiten: [4200, 4870] },
        'Die sichere Regel: **Ein Mittel pro Arbeitsgang.** Wenn du wechseln willst, vorher mit klarem Wasser nachspülen.',
      ],
    },
  ],

  hinten: [
    {
      titel: 'Literatur und Quellen',
      bloecke: [
        { punkte: [
          'Umweltbundesamt (UBA): Ratgeber „Reinigen und Pflegen“ und „Schimmel im Innenraum“ (umweltbundesamt.de).',
          'Verbraucherzentrale: Putzmittel und Hausmittel im Haushalt (verbraucherzentrale.de).',
          'Bundesinstitut für Risikobewertung (BfR): Vergiftungen mit Haushaltsprodukten (bfr.bund.de).',
          'Industrieverband Körperpflege- und Waschmittel (IKW): Waschen und Pflegen von Textilien.',
        ] },
      ],
    },
  ],
};
