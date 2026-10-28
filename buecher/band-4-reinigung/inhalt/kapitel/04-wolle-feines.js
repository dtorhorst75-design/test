const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 4, id: 'wolle-feines', teil: 'waesche', titel: 'Wolle, Seide und Feines', kurz: 'Wolle und Feines',
  bloecke: [
    'Wolle und Seide sind Eiweißfasern – wie unser Haar. Sie vertragen **keine Basen** wie Soda oder Natron und keine Hitze. Am besten wäscht man sie mild, lauwarm und von Hand.',
    { h2: 'Grundregeln' },
    { punkte: ['Lauwarm (höchstens 30 °C), nicht kalt und warm abwechselnd – Temperaturwechsel lässt Wolle verfilzen.', '**Nicht reiben, nicht wringen** – sanft durchdrücken.', 'Liegend auf einem Handtuch trocknen, nicht in der Sonne oder auf der Heizung.', 'Wolle muss nicht oft gewaschen werden: Auslüften reicht meist.'] },
    R({ titel: 'Mildes Woll- und Feinwaschmittel', info: 'Für eine Handwäsche', thema: T.WASCHEN, zutaten: ['5 Liter lauwarmes Wasser', '1 EL Haarshampoo (mild, ohne Silikon) oder Seifenkrautsud (Band 1)', 'für die Spülung: 1 Schuss Essig'], schritte: ['Shampoo im Wasser auflösen.', 'Kleidungsstück 10 Minuten einweichen, sanft durchdrücken.', 'In lauwarmem Wasser spülen, im letzten Spülwasser einen Schuss Essig – er macht die Fasern geschmeidig.', 'Wasser vorsichtig herausdrücken, in ein Handtuch einrollen und ausdrücken, liegend trocknen.'] }),
    R({ titel: 'Lanolin-Kur für Wolle (Wollwalk, Windeln)', info: 'Macht Wolle wieder wasserabweisend', thema: T.WASCHEN, zutaten: ['1 TL reines Lanolin (Wollfett, Apotheke)', 'ein Glas heißes Wasser, ein Tropfen Shampoo', 'Schüssel mit lauwarmem Wasser'], schritte: ['Lanolin mit dem Shampoo im heißen Wasser verrühren, bis es milchig ist.', 'In die Schüssel mit lauwarmem Wasser geben.', 'Gewaschene Wolle einlegen und 1 bis 2 Stunden ziehen lassen, nicht ausspülen.', 'Vorsichtig ausdrücken und liegend trocknen.'] }),
    { h2: 'Wolle auffrischen ohne Waschen' },
    { punkte: ['Über Nacht an die frische Luft hängen, besonders bei feuchtem Wetter oder Nebel.', 'Im Winter auf frischen Schnee legen und ausklopfen – ein alter Trick aus den Bergen.', 'In einen Beutel stecken und 1 bis 2 Tage einfrieren – tötet auch Mottenlarven ab.'] },
  ],
};
