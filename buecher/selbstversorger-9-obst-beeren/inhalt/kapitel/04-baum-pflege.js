const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 4, id: 'baum-pflege', teil: 'baeume', titel: 'Obstbäume gesund halten', kurz: 'Baumpflege',
  bloecke: [
    'Ein gesunder Obstbaum braucht keine Spritzmittel – vorausgesetzt, die Sorte ist robust, der Standort passt und es gibt genug Helfer im Garten.',
    { h2: 'Die Helfer' },
    { punkte: ['**Meisen** fressen Raupen und Läuse in großen Mengen. Ein Nistkasten am Baum oder in der Nähe lädt sie ein – im Herbst reinigen.', '**Ohrwürmer** fressen Blattläuse. Hänge einen mit Stroh oder Holzwolle gefüllten Tontopf mit der Öffnung nach unten in die Krone.', '**Marienkäfer, Florfliegen, Schwebfliegen** kommen, wenn Blumen und Kräuter in der Nähe blühen.', '**Igel und Kröten** halten Schnecken unter den Beerensträuchern im Zaum (Heft 1 und 3).'] },
    { h2: 'Häufige Probleme' },
    { tabelle: [['Problem', 'Erkennst du an', 'Was hilft'],
      ['**Apfelschorf**', 'dunkle, rissige Flecken auf Blättern und Früchten', 'robuste Sorten; Laub im Herbst zusammenrechen und kompostieren; Krone luftig schneiden'],
      ['**Monilia** (Fruchtfäule, Spitzendürre)', 'faulende Früchte mit Schimmelringen, welke Triebspitzen bei Kirschen', 'befallene Früchte und Triebe sofort entfernen (Restmüll), auch Fruchtmumien im Winter'],
      ['**Blattläuse**', 'eingerollte Blätter an den Triebspitzen', 'abwarten – Nützlinge kommen; Wasserstrahl; Brennnessel-Kaltauszug (Heft 1)'],
      ['**Apfelwickler** („Wurm im Apfel“)', 'Bohrloch mit Krümeln', 'befallene Früchte früh auflesen; Nistkästen für Meisen; Wellpappgürtel um den Stamm im Juni, im Herbst abnehmen und vernichten'],
      ['**Frostrisse am Stamm**', 'längs aufgeplatzte Rinde auf der Südseite', 'im Spätherbst einen **Weißanstrich** aus Kalk (Baumkalk) auf den Stamm streichen – er reflektiert die Wintersonne'],
    ], breiten: [2300, 3100, 3670] },
    R({ titel: 'Den Stamm weißeln', info: 'November bis Dezember', thema: T.PFLEGE, zutaten: ['Baumkalk oder Kalkfarbe für Obstbäume aus dem Gartenfachhandel', 'Wasser, ein Eimer, ein breiter Pinsel', 'eine Drahtbürste (nur bei alten Bäumen), Handschuhe, Schutzbrille'], schritte: ['Bei älteren Bäumen lose Rinde vorsichtig mit der Bürste entfernen (nicht bei jungen Bäumen).', 'Den Kalk nach Anleitung mit Wasser anrühren.', 'An einem trockenen, frostfreien Tag den Stamm und den Ansatz der Leitäste dünn bestreichen.'], tipp: 'Der weiße Anstrich verhindert, dass sich die Rinde an sonnigen Wintertagen stark erwärmt und in der kalten Nacht reißt. Kalk ist ätzend – Augen schützen.' }),
    { h2: 'Düngen und Gießen' },
    'Im Frühjahr eine Schicht reifen Kompost (3 bis 5 Liter pro m²) auf die Baumscheibe, darüber Mulch – das reicht. Ältere Bäume brauchen nur in sehr trockenen Sommern Wasser, dann aber reichlich: 50 bis 100 Liter einmal pro Woche.',
  ],
};
