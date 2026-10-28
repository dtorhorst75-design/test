const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 11, id: 'fenster-glas', teil: 'wohnen', titel: 'Fenster, Glas und Spiegel', kurz: 'Fenster',
  bloecke: [
    'Streifenfreie Fenster brauchen kein teures Mittel, sondern die richtige Technik – und den richtigen Zeitpunkt: **nicht bei praller Sonne putzen**, sonst trocknet das Wasser zu schnell und hinterlässt Streifen.',
    R({ titel: 'Fensterputzmittel', info: 'Für einen Eimer', thema: [T.BODEN, T.GRUND], zutaten: ['3 Liter lauwarmes Wasser', '1 Schuss Spiritus oder Essig (etwa 50 ml)', '1 Spritzer Spülmittel'], schritte: ['Alles im Eimer mischen.', 'Scheiben mit einem Schwamm oder Einwascher nass machen.', 'Mit einem Abzieher in Bahnen von oben nach unten abziehen, die Gummilippe nach jedem Zug mit einem Tuch abwischen.', 'Ränder mit einem trockenen Mikrofasertuch nacharbeiten.'], tipp: 'Spiritus ist entzündlich – nicht neben brennenden Kerzen oder Kaminfeuer arbeiten.' }),
    R({ titel: 'Glas- und Spiegelspray', info: 'Für 500 ml', thema: T.BODEN, zutaten: ['400 ml Wasser', '100 ml Spiritus oder Essig', 'Sprühflasche'], schritte: ['In die Sprühflasche füllen.', 'Auf Spiegel und Glas sprühen, mit einem Mikrofaser- oder Baumwolltuch trocken polieren.'] }),
    { h2: 'Alte Tricks' },
    { punkte: ['**Zeitungspapier** zum Nachpolieren: Druckerschwärze hinterlässt eine hauchdünne Schicht, die Schmutz abweist. Bei hellen Fensterrahmen lieber ein Mikrofasertuch nehmen.', '**Fensterrahmen** aus Kunststoff mit Schmierseifenwasser, Holzrahmen nur feucht.', '**Fliegendreck** löst sich mit einer halben Zwiebel oder Spiritus.'] },
  ],
};
