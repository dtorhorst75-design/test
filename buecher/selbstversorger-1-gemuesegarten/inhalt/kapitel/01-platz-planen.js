const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'platz-planen', teil: 'planen', titel: 'Den richtigen Platz finden', kurz: 'Platz und Plan',
  bloecke: [
    'Der wichtigste Satz für deinen ersten Gemüsegarten: **Gemüse braucht Sonne.** Mindestens sechs Stunden am Tag, besser mehr. Im Schatten von Bäumen, Hecken oder Hauswänden wächst fast nur Salat – und der auch nur mäßig.',
    { h2: 'Worauf du achtest' },
    { punkte: ['**Sonne:** Beobachte den Platz an einem sonnigen Tag. Wo liegt morgens, mittags und abends Schatten?', '**Wasser:** Der Weg zum Wasserhahn oder zur Regentonne sollte kurz sein. Du wirst ihn im Sommer oft gehen.', '**Wind:** Ein geschützter Platz ist besser als eine zugige Ecke. Eine Hecke oder ein Zaun bremst den Wind.', '**Boden:** Kein Staunass, keine Bauschuttecke, keine Fläche direkt an einer viel befahrenen Straße.', '**Nähe zum Haus:** Was du vom Küchenfenster siehst, pflegst du auch. Ein Beet ganz hinten im Garten wird gern vergessen.'] },
    { h2: 'Wie groß soll es sein?' },
    'Fang mit **10 bis 20 Quadratmetern** an – das sind zwei bis vier Beete. Das ist genug, um einen Sommer lang regelmäßig frisches Gemüse zu ernten, und wenig genug, dass es dir nicht über den Kopf wächst. Vergrößern kannst du im nächsten Jahr immer noch.',
    { kasten: 'Die Beetbreite', zeilen: ['Ein Beet sollte **1,20 Meter breit** sein. So erreichst du von beiden Seiten die Mitte, ohne auf das Beet zu treten. Die Länge ist egal – 3 bis 4 Meter sind praktisch. Dazwischen lässt du **Wege von 30 bis 40 Zentimetern**. Auf die Beete trittst du nie: Festgetretener Boden ist für Pflanzenwurzeln wie Beton.'] },
    R({ titel: 'Sonnenplatz-Beobachtung', info: 'An einem sonnigen Tag im Frühjahr', thema: T.PLANEN, zutaten: ['ein Blatt Papier und ein Stift', 'vier Stöcke oder Steine zum Markieren'], schritte: ['Zeichne eine grobe Skizze deines Gartens mit Haus, Bäumen, Hecken und Zäunen.', 'Schau um 9 Uhr, um 12 Uhr, um 15 Uhr und um 18 Uhr nach, wo Schatten liegt, und schraffiere ihn in der Skizze.', 'Die Stelle, die am längsten Sonne hat, ist dein Gemüseplatz. Markiere die Ecken mit Stöcken.'], tipp: 'Denk daran, dass Bäume im Sommer belaubt sind und mehr Schatten werfen als im März.' }),
    { h2: 'Ein Plan für den Anfang' },
    'So könnte dein erstes Jahr mit drei Beeten aussehen. Jedes Beet ist 1,20 × 3 Meter groß. Warum die Gemüse so aufgeteilt sind, erfährst du im nächsten Kapitel.',
    { tabelle: [['Beet', 'Frühjahr', 'Sommer und Herbst'],
      ['**Beet 1** – die Hungrigen', 'Kartoffeln (2 Reihen)', '2 Zucchinipflanzen am Ende; nach der Kartoffelernte Gründüngung'],
      ['**Beet 2** – die Mittleren', 'Möhren und Zwiebeln im Wechsel, Rote Bete, Pflücksalat mit Radieschen', 'Mangold, Nachsaat Salat; im Spätsommer Spinat'],
      ['**Beet 3** – die Genügsamen', 'Erbsen, Spinat', 'nach den Erbsen: Buschbohnen, dann Feldsalat; am Rand Kräuter'],
    ], breiten: [2400, 3300, 3370] },
    R({ titel: 'Ein Gartentagebuch anlegen', info: 'Dein wichtigstes Werkzeug', thema: T.PLANEN, zutaten: ['ein festes Notizbuch oder ein Ordner', 'Stift, der auch feucht schreibt'], schritte: ['Auf die erste Seite kommt deine Gartenskizze mit den Beeten.', 'Schreib bei jeder Aussaat auf: Datum, Gemüse, Sorte, Beet.', 'Notiere Wetter, erste Keimlinge, Ernten, Schädlinge – und was gut oder schlecht lief.', 'Im Winter liest du alles durch und planst das nächste Jahr.'], tipp: 'Nach drei Jahren weißt du mehr über deinen Garten als jedes Buch. Bewahre auch die Samentütchen mit den Sortennamen auf.' }),
  ],
};
