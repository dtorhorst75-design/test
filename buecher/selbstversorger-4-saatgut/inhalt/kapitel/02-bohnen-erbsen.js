const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 2, id: 'bohnen-erbsen', teil: 'leicht', titel: 'Bohnen und Erbsen', kurz: 'Bohnen und Erbsen',
  bloecke: [
    'Bohnen und Erbsen sind die dankbarsten Samen überhaupt: Die Körner sind groß, leicht zu ernten und zu reinigen, und die Pflanzen bestäuben sich selbst. Für den Anfang sind sie ideal.',
    { tabelle: [['', 'Buschbohnen, Stangenbohnen', 'Erbsen'],
      ['Abstand zwischen zwei Sorten', 'etwa 3 m oder eine andere Kultur dazwischen', '1 bis 2 m'],
      ['Wie viele Pflanzen', 'mindestens 5, besser 10', 'mindestens 10'],
      ['Wann reif', 'August bis September', 'Juli bis August'],
      ['Reif, wenn …', 'die Hülsen gelb bis braun und pergamentartig sind und die Bohnen darin rascheln', 'die Hülsen trocken und hellbraun sind'],
    ], breiten: [2700, 3400, 2970] },
    { kasten: 'Feuerbohnen sind anders', zeilen: ['Die rot blühende **Feuerbohne** (Prunkbohne) wird von Hummeln bestäubt und kreuzt sich leicht mit anderen Feuerbohnen-Sorten. Sie kreuzt sich nicht mit Busch- und Stangenbohnen. Wer zwei Feuerbohnen-Sorten anbaut, braucht viel Abstand.'] },
    R({ titel: 'Bohnen- und Erbsensamen ernten', info: 'Spätsommer', thema: T.ERNTEN, zutaten: ['die markierten Pflanzen', 'Korb oder Papiertüten', 'eine luftige, regengeschützte Stelle zum Nachtrocknen'], schritte: ['Die Hülsen an der Pflanze ausreifen lassen, bis sie trocken sind und rascheln.', 'An einem trockenen Tag pflücken.', 'Bei Dauerregen im Herbst die ganzen Pflanzen kurz über dem Boden abschneiden und kopfüber an einem luftigen, überdachten Ort aufhängen – sie reifen dort nach.', 'Die Hülsen öffnen (auspalen) und die Körner herausnehmen. Bei großen Mengen: Hülsen in einen Kissenbezug füllen und mit einem Stock darauf klopfen (dreschen).', 'Die Körner auf einem Tablett 1 bis 2 Wochen in einem warmen, trockenen Raum nachtrocknen.'], tipp: '**Trockenprobe:** Beiß nicht drauf – Bohnen sind roh giftig! Lege eine Bohne auf ein Brett und schlage mit dem Hammer darauf. Zerspringt sie, ist sie trocken genug. Verbiegt sie sich nur, braucht sie noch Zeit.' }),
    R({ titel: 'Gegen Bohnen- und Erbsenkäfer', info: 'Nach dem Trocknen', thema: [T.ERNTEN, T.LAGERN], zutaten: ['gut getrocknete Samen', 'ein Gefrierbeutel oder Schraubglas', 'ein Gefrierfach'], schritte: ['Die völlig trockenen Samen in einen Beutel oder ein Glas füllen.', '3 bis 4 Tage einfrieren.', 'Herausnehmen und im geschlossenen Behälter auf Zimmertemperatur kommen lassen, damit sich kein Kondenswasser bildet.', 'Erst dann in Tütchen umfüllen.'], tipp: 'Kleine runde Löcher in Bohnen oder Erbsen stammen von Käferlarven, die schon in der Hülse waren. Das Einfrieren tötet Eier und Larven ab. Angefressene Samen sortierst du aus.' }),
  ],
};
