const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 9, id: 'schnecken-co', teil: 'pflege', titel: 'Schnecken und andere Mitesser', kurz: 'Schnecken und Co.',
  bloecke: [
    'Ein Garten ohne „Schädlinge“ gibt es nicht – und muss es auch nicht geben. Ziel ist ein Gleichgewicht: Wo Blattläuse sind, kommen Marienkäfer; wo Schnecken sind, kommen Igel, Kröten und Vögel. Gift brauchst du dafür nicht. Spritzmittel und Schneckenkorn treffen immer auch die Helfer.',
    { h2: 'Helfer einladen' },
    { punkte: ['Ein **Laub- und Reisighaufen** in einer ruhigen Ecke ist ein Igelquartier.', 'Ein **Steinhaufen** oder eine Trockenmauer beherbergt Eidechsen, Kröten und Laufkäfer.', 'Eine flache **Wasserschale** oder ein kleiner Teich lockt Vögel, Kröten und Molche an.', 'Blühende Kräuter und Blumen zwischen dem Gemüse – Ringelblume, Kapuzinerkresse, Borretsch, Phacelia – füttern Schwebfliegen, Florfliegen und Wildbienen. Deren Larven fressen Blattläuse.', 'Ein Garten, der nicht zu ordentlich ist, ist ein Garten mit vielen Helfern.'] },
    { h2: 'Schnecken' },
    'Die Spanische Wegschnecke ist der Albtraum vieler Gemüsegärtner. Sie liebt junge Salate, Zucchini und Bohnen. Diese Mittel helfen, kombiniert und mit Ausdauer:',
    R({ titel: 'Schneckenbretter auslegen', info: 'Die einfachste Methode', thema: T.PFLEGE, zutaten: ['ein paar alte Bretter oder flache Steine', 'ein Eimer'], schritte: ['Bretter am Abend zwischen die Beete legen.', 'Schnecken verkriechen sich tagsüber gern im feuchten Dunkel darunter.', 'Morgens die Bretter umdrehen und die Schnecken absammeln.', 'Die Schnecken weit weg vom Garten aussetzen – an einem Waldrand oder einer Wiese, mindestens 50 Meter entfernt.'], tipp: 'Abends nach einem Regen oder in der Dämmerung mit der Taschenlampe absammeln ist genauso wirksam. In den ersten Wochen nach der Aussaat täglich, später zweimal pro Woche.' }),
    { punkte: ['**Jungpflanzen kräftig vorziehen:** Große Pflanzen werden weniger angefressen als winzige Keimlinge.', '**Schneckenkragen** aus Kunststoff oder abgeschnittene Plastikflaschen um einzelne Jungpflanzen stellen.', '**Schneckenzaun:** ein Zaun aus Blech mit nach außen abgeknicktem Rand um das ganze Beet – teuer, aber dauerhaft.', '**Morgens gießen**, nicht abends.', 'Bei Schneckenplage im kühlen Frühjahr **nicht mulchen** – erst ab Juni, wenn es warm und trockener ist.', 'Rund ums Beet einen Streifen kurz gemähten Rasen halten, das mögen Schnecken nicht.'] },
    { kasten: 'Was nicht hilft', zeilen: ['**Bierfallen** locken die Schnecken aus der ganzen Nachbarschaft an – mehr, als darin landen. **Kaffeesatz, Eierschalen und Sägemehl** helfen höchstens, solange sie trocken sind, also kaum. **Salz** schadet dem Boden.'] },
    { h2: 'Weitere Mitesser' },
    { tabelle: [['Wer', 'Woran du es erkennst', 'Was hilft'],
      ['**Blattläuse**', 'Kolonien an Triebspitzen, Blätter gekräuselt', 'mit dem Wasserstrahl abspritzen, Brennnessel-Kaltauszug (Kapitel Kompost), Nützlinge abwarten'],
      ['**Möhrenfliege**', 'braune Fraßgänge in den Möhren', 'Mischkultur mit Zwiebeln, feines Kulturschutznetz direkt nach der Aussaat, Möhren nicht zu dicht'],
      ['**Erdflöhe**', 'viele kleine Löcher in Radieschen- und Rucolablättern', 'Boden feucht halten (sie mögen es trocken), Netz, Mulch'],
      ['**Kartoffelkäfer**', 'gelb-schwarz gestreifte Käfer, rote Larven', 'täglich absammeln, Eigelege an der Blattunterseite zerdrücken'],
      ['**Vögel**', 'herausgepickte Saat, Erbsenkeimlinge', 'Saat mit Reisig oder einem Netz abdecken, bis sie gut angewachsen ist'],
    ], breiten: [2000, 3200, 3870] },
    { h2: 'Krankheiten vorbeugen' },
    { punkte: ['**Fruchtfolge** einhalten: Gleiche Familien frühestens nach drei, besser vier Jahren wieder aufs selbe Beet.', '**Luft zwischen den Pflanzen:** nicht zu dicht säen und pflanzen, damit die Blätter abtrocknen.', 'An die **Wurzel** gießen, nicht über die Blätter.', 'Kranke Blätter sofort entfernen und in den Restmüll geben, nicht auf den Kompost.', '**Kartoffeln und Tomaten** nicht nebeneinander – beide bekommen die Kraut- und Braunfäule.'] },
  ],
};
