const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 8, id: 'mulch-jahr', teil: 'beete', titel: 'Mulch durchs Jahr', kurz: 'Mulch',
  bloecke: [
    'Im Wald liegt der Boden nie nackt. Laub, Nadeln und abgestorbene Pflanzen bedecken ihn das ganze Jahr – und genau das machst du im Garten nach. Mulchen spart Wasser, Unkraut jäten und Dünger. Hier steht, was du wann nimmst.',
    { tabelle: [['Zeit', 'Mulch', 'Worauf du achtest'],
      ['**März bis April**', 'kein Mulch auf Saatbeete; Laubreste zwischen den Reihen', 'Der Boden muss sich erst erwärmen. Mulch hält ihn kalt und lockt Schnecken.'],
      ['**Mai bis Juni**', 'angetrockneter Grasschnitt, gejätetes Unkraut ohne Samen, Brennnesseln', 'erst mulchen, wenn der Boden warm ist und die Pflanzen eine Handbreit hoch sind; dünn (2 bis 3 cm), oft nachlegen'],
      ['**Juli bis August**', 'Grasschnitt, Stroh unter Kürbis, Zucchini und Tomaten, Gemüsereste', 'dicker mulchen (5 bis 10 cm) – jetzt spart es am meisten Wasser'],
      ['**September bis Oktober**', 'Laub, Gründüngung, abgeschnittene Pflanzenreste', 'Nach der Ernte nicht abräumen und umgraben – lieber zudecken.'],
      ['**November bis Februar**', 'dicke Laubschicht (10 bis 15 cm), Fichtenzweige auf Wintergemüse', 'schützt Boden und Bodenleben vor Frost und Regen'],
    ], breiten: [2000, 3300, 3770] },
    { h2: 'Mulchmaterial aus dem eigenen Garten' },
    { tabelle: [['Material', 'Gut für', 'Vorsicht'],
      ['**Grasschnitt**', 'fast alles', 'nur angetrocknet und dünn, sonst fault er; kein Schnitt mit Samen'],
      ['**Laub**', 'leere Beete, Beeren, Stauden', 'Eiche und Walnuss nur in Maßen (Gerbstoffe)'],
      ['**Stroh**', 'Kürbis, Zucchini, Erdbeeren, Kartoffeln', 'aus biologischem Anbau, wegen Spritzmittelresten'],
      ['**Brennnesseln, Unkraut**', 'zwischen Gemüse', 'nur ohne Samen und ohne Wurzelunkräuter'],
      ['**Holzhäcksel**', 'Wege, Beerensträucher', 'nicht auf Gemüsebeete – entzieht dem Boden beim Verrotten Stickstoff'],
      ['**Pappe**', 'neue Beete anlegen (Heft 1)', 'ohne Klebeband und bunten Druck'],
    ], breiten: [2300, 3100, 3670] },
    R({ titel: 'Ein Beet mulchen', info: 'Im Frühsommer', thema: T.BEETE, zutaten: ['Grasschnitt vom Vortag (angetrocknet)', 'eine Hacke'], schritte: ['Das Beet vorher flach hacken und Unkraut entfernen.', 'Gründlich gießen – Mulch hält Feuchtigkeit, macht trockenen Boden aber nicht nass.', 'Den Grasschnitt locker und dünn zwischen die Pflanzen streuen, nicht direkt an die Stängel.', 'Alle ein bis zwei Wochen nachlegen, wenn die Schicht verschwunden ist.'], tipp: 'Unter der Mulchschicht verstecken sich gern Schnecken. Bei Schneckenplage lieber erst im Juni mulchen und morgens die Mulchschicht kurz anheben und nachsehen.' }),
  ],
};
