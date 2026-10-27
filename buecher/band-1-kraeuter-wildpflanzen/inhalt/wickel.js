// Wickel, Auflagen, Bäder: Grundlagenkapitel (wird nach „Trocknen, Aufbewahren und Grundrezepte“ eingefügt)
// und Anleitungen je Pflanze (Abschnitt „Wickel, Auflagen und Bäder“ im jeweiligen Pflanzenkapitel).
const DU_BRAUCHST = 'Du brauchst';

module.exports = {
  nachKapitel: 'Trocknen, Aufbewahren und Grundrezepte',
  kapitel: {
    titel: 'Wickel, Auflagen, Bäder & Co.',
    bloecke: [
      'Wickel und Auflagen gehören zu den ältesten Hausmitteln überhaupt. Sie wirken auf zwei Wegen: durch **Wärme oder Kühle**, die den Körper entspannt, durchwärmt oder beruhigt, und durch die **Pflanzenstoffe**, die über Duft und Haut wirken. Mindestens genauso wichtig ist etwas, das heute oft fehlt: **Ruhe**. Ein Wickel zwingt dazu, sich hinzulegen, zuzudecken und eine halbe Stunde nichts zu tun.',
      'In diesem Kapitel lernst du die Grundtechniken. In den Pflanzenkapiteln findest du dann unter „Wickel, Auflagen und Bäder“ die passenden Anleitungen, etwa den Kamillen-Bauchwickel oder den Thymian-Brustwickel. Eine Übersicht aller Anwendungen steht hinten im Rezeptregister.',

      { h2: 'Was du brauchst' },
      'Für die meisten Wickel genügt, was ohnehin im Haushalt liegt. Bewährt hat sich ein Aufbau aus **drei Tüchern**:',
      { tabelle: [
        ['Tuch', 'Material', 'Aufgabe'],
        ['Innentuch', 'dünne Baumwolle oder Leinen, z. B. Geschirrtuch, Mullwindel, altes Taschentuch', 'liegt direkt auf der Haut und trägt den Kräuteraufguss'],
        ['Zwischentuch', 'etwas dickere Baumwolle, z. B. Frotteetuch oder Molton', 'hält die Wärme und schützt das Außentuch vor Nässe'],
        ['Außentuch', 'Wolle oder ein dicker Schal, Frotteehandtuch', 'hält alles zusammen und wärmt'],
      ], breiten: [1900, 3800, 3370] },
      { punkte: [
        'ein **Wringtuch** (ein zusätzliches Handtuch), um heiße Tücher sicher auszuwringen',
        'eine Schüssel, eine Wärmflasche, Sicherheitsnadeln oder Klebeband zum Fixieren',
        'ein Thermometer (Badethermometer) für Bäder und kühle Wickel',
        '**keine Plastikfolie** – sie staut Feuchtigkeit und Wärme und kann die Haut aufweichen',
      ] },

      { h2: 'Die Grundregeln' },
      { punkte: [
        '**Temperatur immer prüfen:** Ein warmes Tuch zuerst an die Innenseite deines Unterarms halten. Es soll angenehm warm sein, nie brennend heiß. Bei Kindern, älteren Menschen und Menschen mit Diabetes besonders vorsichtig sein – sie spüren Hitze oft schlechter.',
        '**Im Liegen und zugedeckt:** Wickel werden in Ruhe angelegt, im Bett oder auf dem Sofa, gut zugedeckt. Hände und Füße müssen warm sein; sonst vorher eine Wärmflasche an die Füße legen.',
        '**Faltenfrei und eng, aber nicht einschnürend** anlegen.',
        '**Wärme nur so lange, wie sie angenehm ist:** Ein warmer Wickel bleibt etwa 20 bis 30 Minuten liegen. Fühlt er sich kühl oder unangenehm an, abnehmen.',
        '**Nachruhen:** Nach dem Abnehmen 20 bis 30 Minuten zugedeckt liegen bleiben.',
        '**Haut beobachten:** Vor und nach dem Wickel auf Rötungen und Reizungen achten. Wickel nicht auf verletzte oder entzündete Hautstellen legen.',
        '**Kinder** nur mit Begleitung einer erwachsenen Person, kürzer und mit besonders genauer Temperaturkontrolle. Bei Säuglingen keine Wickel ohne ärztlichen Rat.',
        '**Hygiene:** Tücher nach jedem Gebrauch waschen und trocknen; Kräuteraufgüsse immer frisch zubereiten.',
      ] },
      { warnung: 'Wann du keinen Wickel machst', zeilen: [
        '- **Bei Frösteln oder Schüttelfrost** – dann braucht der Körper Wärme von außen (Decke, Wärmflasche), aber keinen kühlen Wickel.',
        '- **Bei kalten Händen oder Füßen** keine kühlen Wickel.',
        '- **Bei unklaren, starken oder plötzlichen Bauchschmerzen** keine Wärme auf den Bauch – etwa bei Verdacht auf Blinddarmentzündung. Erst ärztlich abklären.',
        '- Bei **Herz-Kreislauf-Erkrankungen**, **Durchblutungsstörungen**, **Venenleiden** und in der **Schwangerschaft** nur nach ärztlicher Rücksprache.',
        '- Nicht auf offene Wunden, Ekzeme oder frische Narben.',
        '- Bei Allergie gegen die verwendete Pflanze (z. B. Korbblütler wie Kamille, Arnika, Schafgarbe).',
        '- Ein Wickel ersetzt keine Behandlung: Hohes oder lang anhaltendes Fieber, Atemnot und starke Schmerzen gehören in ärztliche Hände.',
      ] },

      { h2: 'Grundtechnik 1: Der warme Wickel' },
      'Warme, feuchte Wickel entspannen, lösen Krämpfe und wärmen durch. Typisch sind Bauchwickel, Brustwickel und Halswickel.',
      { schritte: [
        'Kräuteraufguss nach dem Rezept im Pflanzenkapitel zubereiten (meist 1 bis 2 EL Kraut auf 500 ml kochendes Wasser, 10 Minuten ziehen lassen, abseihen).',
        'Außentuch und Zwischentuch auf dem Bett ausbreiten, sodass man sich direkt darauflegen kann – oder griffbereit hinlegen.',
        'Innentuch zusammenfalten, in das Wringtuch einrollen und so in die Schüssel mit dem heißen Aufguss legen, dass die Enden des Wringtuchs trocken herausschauen.',
        'An den trockenen Enden fassen und das Wringtuch kräftig gegeneinander verdrehen, bis das Innentuch gut ausgewrungen ist. So verbrühst du dir nicht die Hände.',
        'Temperatur am Unterarm prüfen.',
        'Innentuch faltenfrei auflegen, Zwischentuch und Außentuch fest darüberlegen, gut zudecken.',
        'Etwa 20 bis 30 Minuten liegen lassen, dann abnehmen, die Haut trocken tupfen und nachruhen.',
      ] },

      { h2: 'Grundtechnik 2: Der kühle Wickel – Wadenwickel bei Fieber' },
      'Wadenwickel sind ein bewährtes Hausmittel, um Fieber sanft zu senken. Sie sind **nur geeignet, wenn der ganze Körper warm ist** – auch Hände und Füße – und die fiebernde Person nicht friert.',
      { schritte: [
        'Wasser auf **handwarm** bringen, etwa 28 bis 32 °C – also nur einige Grad kühler als die Haut, **nicht eiskalt**. Ein Schuss Essig ist nach Tradition möglich, aber nicht nötig.',
        'Zwei Innentücher eintauchen und leicht auswringen, sie sollen feucht, aber nicht tropfnass sein.',
        'Die Tücher von Knöchel bis unterhalb der Kniekehle um beide Unterschenkel wickeln.',
        'Je ein trockenes Tuch darüberwickeln; die Füße frei lassen und nicht zudecken.',
        'Nach etwa 10 Minuten, wenn sich die Tücher warm anfühlen, abnehmen. Bei Bedarf zwei- bis dreimal wiederholen.',
        'Fieber nach etwa 30 Minuten messen. Ziel ist eine sanfte Senkung um etwa ein Grad, nicht ein „Wegmachen“ des Fiebers.',
      ] },
      { kasten: 'Sofort abbrechen', zeilen: ['Wenn die Person zu frösteln beginnt, die Füße kalt werden oder sie sich unwohl fühlt, die Wickel sofort abnehmen und warm zudecken. Fieber bei Säuglingen unter 3 Monaten, Fieber über 39 °C, das nicht sinkt, oder Fieber mit Teilnahmslosigkeit, Nackensteife oder Atemnot gehört sofort in ärztliche Hände.'] },

      { h2: 'Grundtechnik 3: Kompressen und Auflagen' },
      'Eine **Kompresse** ist ein gefaltetes Tuch, das in einen Kräuteraufguss getaucht und auf eine kleine Körperstelle gelegt wird – warm oder abgekühlt. Sie bleibt 10 bis 20 Minuten liegen und wird bei Bedarf erneuert.',
      'Eine **Auflage** trägt die Pflanze selbst auf die Haut: frisch zerdrückte Blätter, ein Brei aus gemahlener Wurzel oder ein Ölauszug auf einem Tuch.',
      { schritte: [
        'Pflanzenmaterial vorbereiten: frische Blätter waschen und zwischen den Fingern oder mit einer Flasche auf dem Brett zerdrücken, bis Saft austritt; oder getrocknetes Pulver mit wenig heißem Wasser zu einem streichfähigen Brei rühren und abkühlen lassen.',
        'Etwa fingerdick auf ein Innentuch streichen und das Tuch zu einem Päckchen falten, damit kein Brei direkt auf der Haut klebt (bei frischen Blättern geht es auch direkt).',
        'Auflegen, mit einem Tuch oder einer Binde befestigen.',
        'Nach 20 bis 30 Minuten (frische Blätter auch länger) abnehmen und die Haut abwaschen.',
      ] },
      { h3: 'Die Quarkauflage – kühlend bei Schwellungen' },
      'Ein Klassiker ohne Kräuter: Zimmerwarmen Magerquark etwa einen halben Zentimeter dick auf ein Innentuch streichen, einschlagen und auf eine geschwollene, warme Stelle legen, etwa nach einem Insektenstich oder bei einer Prellung. Abnehmen, sobald der Quark antrocknet.',

      { h2: 'Grundtechnik 4: Kräuterkissen und Wärmesäckchen' },
      'Trockene Kräuter in einem Stoffsäckchen werden über Wasserdampf erwärmt und wirken als sanfte, feuchte Wärme mit Duft.',
      { schritte: [
        'Ein Säckchen aus Baumwolle oder Leinen (etwa 15 × 20 cm) locker mit getrockneten Kräutern füllen, z. B. Kamille, Lavendel, Thymian oder Heublumen, und zunähen oder zubinden.',
        'Das Säckchen in ein Sieb über einen Topf mit kochendem Wasser legen, Deckel darauf, und 10 bis 15 Minuten durchwärmen.',
        'Temperatur am Unterarm prüfen, dann auf die gewünschte Stelle legen und mit einem Tuch abdecken.',
        'Liegen lassen, solange es angenehm warm ist.',
      ] },
      'Ein **Duft- oder Schlafkissen** wird nicht erwärmt: Ein Säckchen mit Lavendel, Hopfen, Melisse oder Steinklee liegt einfach neben dem Kopfkissen.',

      { h2: 'Grundtechnik 5: Dampfbad und Inhalation' },
      { schritte: [
        '1 bis 2 Handvoll Kraut (z. B. Kamille oder Thymian) in eine große, standfeste Schüssel geben und mit 1 bis 2 Litern kochendem Wasser übergießen.',
        'Die Schüssel auf einen Tisch stellen, Kopf mit Abstand darüberbeugen und mit einem Handtuch Kopf und Schüssel abdecken.',
        'Augen schließen und 5 bis 10 Minuten ruhig durch Nase und Mund atmen.',
        'Danach das Gesicht abtrocknen und eine Weile im Warmen bleiben.',
      ] },
      { warnung: 'Vorsicht beim Dampfbad', zeilen: ['- **Nicht für Kinder** unter etwa 10 Jahren: Immer wieder kommt es zu schweren Verbrühungen durch umkippende Schüsseln.', '- Keine ätherischen Öle bei Kindern; Pfefferminz-, Eukalyptus- und Kampferöl können bei kleinen Kindern Atemkrämpfe auslösen.', '- Bei Asthma nur nach ärztlicher Rücksprache.'] },

      { h2: 'Grundtechnik 6: Kräuterbäder' },
      'Für ein Bad wird zuerst ein starker Aufguss zubereitet und dann ins Badewasser gegeben – lose Kräuter verstopfen den Abfluss.',
      { tabelle: [
        ['Bad', 'Kräutermenge', 'Wasser und Dauer'],
        ['Vollbad', '50 bis 100 g getrocknetes Kraut, mit 1 bis 2 Litern kochendem Wasser übergossen, 15 Minuten ziehen lassen', '36 bis 38 °C, 10 bis 20 Minuten; danach 30 Minuten nachruhen'],
        ['Sitzbad', '2 bis 3 Handvoll Kraut auf 1 Liter Aufguss', 'in eine Sitzbadewanne oder flach eingelassene Wanne, 35 bis 37 °C, 10 bis 15 Minuten'],
        ['Fußbad', '1 bis 2 Handvoll Kraut auf 1 Liter Aufguss', 'Wasser bis über die Knöchel, 35 bis 38 °C, 10 bis 15 Minuten; danach Wollsocken'],
      ], breiten: [1600, 4000, 3470] },
      'Wer einen schwachen Kreislauf hat oder herzkrank ist, sollte keine heißen Vollbäder nehmen. Nach dem Bad langsam aufstehen.',

      { h2: 'Grundtechnik 7: Gurgeln und Spülen' },
      'Für Mund und Rachen einen Aufguss zubereiten (z. B. Salbei, Kamille, Ringelblume), auf Trinktemperatur abkühlen lassen und mehrmals täglich einen Schluck einige Zeit gurgeln oder im Mund bewegen, dann ausspucken.',

      { h2: 'Zwei Klassiker aus der Küche' },
      'Die folgenden Wickel kommen ohne Wildkräuter aus und werden in Band 3 („Gemüse ganz genutzt“) ausführlicher beschrieben. Weil sie so bekannt sind, stehen sie schon hier.',
      { h3: 'Zwiebelsäckchen bei Ohrenschmerzen' },
      { schritte: [
        'Eine Zwiebel fein hacken und in ein dünnes Tuch oder Säckchen geben.',
        'Das Säckchen auf einem Teller über Wasserdampf oder zwischen zwei Wärmflaschen auf **Körperwärme** bringen und etwas zusammendrücken, damit Saft austritt.',
        'Auf das schmerzende Ohr legen – **nicht in den Gehörgang stecken** –, mit einer Mütze oder einem Stirnband befestigen.',
        '20 bis 30 Minuten liegen lassen, bei Bedarf mehrmals täglich.',
      ] },
      'Ohrenschmerzen, die mit Fieber, Ausfluss aus dem Ohr, Hörverlust einhergehen oder länger als zwei Tage dauern, gehören in ärztliche Behandlung – bei Kindern besonders.',
      { h3: 'Kartoffelwickel für Brust und Hals' },
      { schritte: [
        '3 bis 4 mittelgroße Kartoffeln mit Schale weich kochen und abgießen.',
        'Auf ein Innentuch legen, zu einem Päckchen falten und mit der Hand flach drücken.',
        '**Sehr gründlich die Temperatur prüfen** – Kartoffeln speichern Hitze lange; lieber ein paar Minuten warten.',
        'Auf Brust oder Hals legen, Zwischen- und Außentuch darüber, 20 bis 30 Minuten oder solange es angenehm warm ist.',
      ] },

      { h2: 'Wickel und Auflagen in den Pflanzenkapiteln' },
      { tabelle: [
        ['Wofür', 'Anwendung', 'Pflanze'],
        ['Bauch und Verdauung', 'warmer Bauchwickel, Leberwickel, Sitzbad', 'Kamille, Schafgarbe'],
        ['Husten und Hals', 'Brustwickel, Halswickel, Dampfbad, Gurgeln', 'Thymian, Salbei, Kamille'],
        ['Prellungen und Verstauchungen', 'Umschlag, Auflage', 'Arnika, Beinwell'],
        ['Haut, Stiche, Sonnenbrand', 'Kompresse, frische Blattauflage', 'Ringelblume, Spitzwegerich'],
        ['Verspannte Muskeln', 'Öl-Einreibung, Wärmesäckchen', 'Johanniskraut, Lavendel'],
        ['Ruhe und Schlaf', 'Bad, Fußbad, Schlafkissen', 'Lavendel, Baldrian, Hopfen'],
      ], breiten: [2700, 3600, 2770] },
    ],
  },

  proPflanze: {
    kamille: [
      { titel: 'Kamillen-Bauchwickel', info: 'Bei Bauchkrämpfen und Blähungen · warmer Wickel (Grundtechnik 1)', zutaten: ['2 EL getrocknete Kamillenblüten', '500 ml kochendes Wasser', 'Innentuch, Zwischentuch, Außentuch, Wringtuch, Wärmflasche'], schritte: ['Kamillenblüten mit kochendem Wasser übergießen, 10 Minuten zugedeckt ziehen lassen und abseihen.', 'Innentuch im Wringtuch in den heißen Aufguss tauchen und kräftig auswringen.', 'Temperatur am Unterarm prüfen und das Tuch auf den Bauch rund um den Nabel legen.', 'Zwischen- und Außentuch darüber, eine Wärmflasche darauf, gut zudecken.', '20 bis 30 Minuten liegen lassen, danach nachruhen.'], tipp: 'Bei unklaren, starken oder plötzlichen Bauchschmerzen keine Wärme auflegen, sondern ärztlich abklären lassen.' },
      { titel: 'Kamillen-Sitzbad', info: 'Bei Reizungen im Intimbereich und bei Hämorrhoiden · Sitzbad (Grundtechnik 6)', zutaten: ['3 Handvoll (ca. 50 g) getrocknete Kamillenblüten', '1 Liter kochendes Wasser', 'Sitzbadewanne oder flach eingelassene Badewanne'], schritte: ['Blüten mit kochendem Wasser übergießen, 10 Minuten ziehen lassen, abseihen.', 'In das auf 35 bis 37 °C temperierte Wasser der Sitzbadewanne gießen.', '10 bis 15 Minuten darin sitzen, Oberkörper und Beine warm halten.', 'Danach trocken tupfen.'], tipp: 'Kamillenblüten sind vom HMPC auch für Sitzbäder bei leichten Haut- und Schleimhautentzündungen im Anal- und Genitalbereich eingestuft. Beschwerden, die nach einer Woche nicht besser sind, ärztlich abklären lassen.' },
    ],
    schafgarbe: [
      { titel: 'Schafgarben-Leberwickel', info: 'Zur Entspannung nach dem Essen · warmer Wickel (Grundtechnik 1)', zutaten: ['1 bis 2 EL getrocknetes Schafgarbenkraut', '500 ml kochendes Wasser', 'Innentuch, Zwischentuch, Außentuch, Wringtuch, Wärmflasche'], schritte: ['Aufguss zubereiten, 10 Minuten ziehen lassen, abseihen.', 'Innentuch mit dem Wringtuch in den heißen Aufguss tauchen, gut auswringen, Temperatur prüfen.', 'Auf den **rechten Oberbauch** unter den Rippenbogen legen (dort liegt die Leber).', 'Zwischen- und Außentuch darüber, die Wärmflasche darauf, gut zudecken.', 'Nach dem Mittagessen 20 bis 30 Minuten ruhen, dann den Wickel abnehmen und noch eine Weile liegen bleiben.'], tipp: 'Der Leberwickel ist ein traditioneller Wickel aus der Pflegepraxis, der vor allem durch Wärme und Ruhe entspannt. Bei Gallensteinen oder Lebererkrankungen nur nach ärztlicher Rücksprache.' },
    ],
    thymian: [
      { titel: 'Thymian-Brustwickel', info: 'Bei Husten mit festsitzendem Schleim · warmer Wickel (Grundtechnik 1)', zutaten: ['2 EL getrockneter Thymian', '500 ml kochendes Wasser', 'ein Innentuch, das einmal um den Brustkorb reicht', 'Zwischentuch, Außentuch (z. B. Wollschal), Wringtuch'], schritte: ['Thymian mit kochendem Wasser übergießen, 10 Minuten zugedeckt ziehen lassen, abseihen.', 'Außen- und Zwischentuch quer auf dem Bett ausbreiten, auf Höhe des Brustkorbs.', 'Innentuch im Wringtuch in den heißen Aufguss tauchen, auswringen, Temperatur prüfen.', 'Die Person setzt sich auf, das Innentuch wird um den Brustkorb gelegt (von den Achseln bis zum unteren Rippenbogen), dann legt sie sich auf die vorbereiteten Tücher.', 'Zwischen- und Außentuch fest darüberschlagen und gut zudecken.', '20 bis 30 Minuten liegen lassen, danach nachruhen.'], tipp: 'Nicht bei hohem Fieber und nicht bei Säuglingen und Kleinkindern. Bei Atemnot, Fieber über drei Tage oder blutigem Auswurf ärztlich abklären lassen.' },
    ],
    salbei: [
      { titel: 'Salbei-Halswickel', info: 'Bei Halskratzen und Heiserkeit · warmer Wickel (Grundtechnik 1)', zutaten: ['1 EL getrocknete Salbeiblätter', '250 ml kochendes Wasser', 'ein schmales Innentuch, ein Wollschal'], schritte: ['Salbeiaufguss zubereiten, 10 Minuten ziehen lassen, abseihen.', 'Innentuch eintauchen, gut auswringen, Temperatur prüfen.', 'Um den Hals legen – **die Wirbelsäule im Nacken frei lassen**, das Tuch reicht von Ohr zu Ohr über die Vorderseite.', 'Mit einem Wollschal umwickeln.', '20 Minuten oder so lange es angenehm warm ist; danach den Hals warm halten.'], tipp: 'Den restlichen, abgekühlten Aufguss zum Gurgeln verwenden.' },
    ],
    lavendel: [
      { titel: 'Lavendel-Entspannungsbad', info: 'Zum Entspannen am Abend · Vollbad (Grundtechnik 6)', zutaten: ['50 bis 60 g getrocknete Lavendelblüten', '1 Liter kochendes Wasser'], schritte: ['Lavendelblüten mit kochendem Wasser übergießen, 10 Minuten zugedeckt ziehen lassen, abseihen.', 'Den Aufguss ins Badewasser (36 bis 38 °C) geben.', '10 bis 20 Minuten baden.', 'Danach nicht abduschen, sondern abtrocknen und eine halbe Stunde ruhen oder direkt ins Bett gehen.'], tipp: 'Lavendelblüten sind vom HMPC als Badezusatz zur Entspannung eingestuft. Wer es einfacher mag: das Lavendel-Badesalz weiter unten in diesem Kapitel.' },
      { titel: 'Lavendel-Fußbad zum Einschlafen', info: 'Fußbad (Grundtechnik 6)', zutaten: ['1 Handvoll getrocknete Lavendelblüten', '1 Liter kochendes Wasser', 'Fußbadewanne, Wollsocken'], schritte: ['Aufguss zubereiten, 10 Minuten ziehen lassen, abseihen.', 'In die Fußbadewanne gießen und mit warmem Wasser auf 36 bis 38 °C auffüllen.', 'Die Füße 10 bis 15 Minuten baden.', 'Abtrocknen, Wollsocken anziehen, ins Bett.'] },
    ],
    ringelblume: [
      { titel: 'Ringelblumen-Kompresse', info: 'Bei Sonnenbrand und gereizter Haut · Kompresse (Grundtechnik 3)', zutaten: ['2 TL getrocknete Ringelblumenblüten', '250 ml kochendes Wasser', 'saubere Baumwolltücher'], schritte: ['Aufguss zubereiten, 10 Minuten ziehen lassen, abseihen und im Kühlschrank abkühlen lassen.', 'Ein gefaltetes Tuch in den kühlen Aufguss tauchen und leicht ausdrücken.', 'Auf die gerötete Haut legen, 10 bis 15 Minuten liegen lassen, zwischendurch neu tränken.', 'Mehrmals täglich wiederholen.'], tipp: 'Starker Sonnenbrand mit Blasen, Fieber oder Übelkeit gehört in ärztliche Behandlung. Bei Korbblütler-Allergie nicht verwenden.' },
    ],
    spitzwegerich: [
      { titel: 'Wegerich-Pflaster bei Insektenstichen', info: 'Frische Blattauflage (Grundtechnik 3)', zutaten: ['2 bis 3 frische Spitzwegerichblätter'], schritte: ['Blätter abspülen oder abwischen.', 'Zwischen den Fingern kräftig zerreiben oder rollen, bis Saft austritt.', 'Direkt auf den Stich oder die gereizte Stelle drücken.', 'Liegen lassen oder mit einem Pflaster fixieren, bei Bedarf nach einer Stunde erneuern.'], tipp: 'Das wohl bekannteste „Wanderer-Hausmittel“ – Spitzwegerich wächst fast überall am Wegrand. Bei Stichen im Mund- oder Rachenraum, starker Schwellung oder Atemnot sofort den Notruf 112 wählen.' },
    ],
    arnika: [
      { titel: 'Arnika-Umschlag bei Prellungen', info: 'Kühle Kompresse (Grundtechnik 3) · nur äußerlich, nur auf unverletzter Haut', zutaten: ['1 EL Arnikatinktur aus der Apotheke', '100 bis 250 ml kaltes Wasser (Tinktur 3- bis 10-fach verdünnt)', 'saubere Baumwolltücher'], schritte: ['Tinktur mit dem kalten Wasser mischen – **nie unverdünnt** auf die Haut.', 'Ein gefaltetes Tuch darin tränken, leicht ausdrücken.', 'Auf die Prellung oder den Bluterguss legen, mit einer Binde locker befestigen.', '15 bis 20 Minuten liegen lassen, mehrmals täglich wiederholen.'], tipp: 'Arnika nicht auf offene Wunden, nicht bei Korbblütler-Allergie. Bei Hautrötung oder Juckreiz sofort absetzen. Bei starker Schwellung, Fehlstellung oder großen Schmerzen ärztlich abklären lassen (Bruch?).' },
    ],
    beinwell: [
      { titel: 'Beinwell-Wurzelauflage', info: 'Bei Prellungen und Verstauchungen · Breiauflage (Grundtechnik 3) · nur äußerlich', zutaten: ['2 bis 3 EL getrocknete, fein gemahlene Beinwellwurzel', 'heißes Wasser', 'Innentuch, Binde'], schritte: ['Das Wurzelpulver mit so viel heißem Wasser verrühren, dass ein dicker, streichfähiger Brei entsteht.', 'Auf Körperwärme abkühlen lassen.', 'Etwa fingerdick auf das Innentuch streichen und zu einem Päckchen falten.', 'Auf die **unverletzte** Haut über der Prellung legen und mit einer Binde befestigen.', '1 bis 2 Stunden liegen lassen, danach die Haut abwaschen.'], tipp: 'Wegen der Pyrrolizidinalkaloide nicht auf offene Wunden, höchstens 4 bis 6 Wochen im Jahr, nicht in Schwangerschaft und Stillzeit, nicht bei Kindern unter 3 Jahren.' },
    ],
    johanniskraut: [
      { titel: 'Rotöl-Einreibung bei verspannten Muskeln', info: 'Einreibung mit warmer Auflage', zutaten: ['1 bis 2 TL Johanniskrautöl (Rotöl, siehe Rezept oben)', 'ein Wärmesäckchen oder eine Wärmflasche'], schritte: ['Das Öl in der Hand anwärmen.', 'Auf die verspannte Stelle (Nacken, Schultern, Rücken) geben und mit kreisenden Bewegungen sanft einmassieren.', 'Ein Tuch darüberlegen und ein Wärmesäckchen oder eine Wärmflasche auflegen.', '20 Minuten ruhen.'], tipp: 'Johanniskrautöl macht die Haut lichtempfindlich: behandelte Stellen 24 Stunden nicht der Sonne oder dem Solarium aussetzen. Rotöl färbt Wäsche dauerhaft rot – alte Tücher verwenden.' },
    ],
    baldrian: [
      { titel: 'Baldrian-Bad zum Abschalten', info: 'Vollbad (Grundtechnik 6)', zutaten: ['100 g getrocknete, zerkleinerte Baldrianwurzel', '2 Liter Wasser'], schritte: ['Wurzel mit kaltem Wasser ansetzen, langsam aufkochen und 10 Minuten köcheln lassen.', 'Abseihen und ins Badewasser (36 bis 38 °C) geben.', '15 bis 20 Minuten baden, dann direkt ins Bett.'], tipp: 'Der Geruch ist gewöhnungsbedürftig – mit einem Lavendelaufguss gemischt wird er angenehmer. Nach dem Bad nicht mehr Auto fahren.' },
    ],
  },
};
