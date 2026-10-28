const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 6, id: 'backofen-herd', teil: 'kueche', titel: 'Backofen, Herd und Mikrowelle', kurz: 'Backofen und Herd',
  bloecke: [
    R({ titel: 'Backofen reinigen mit Natronpaste', info: 'Für einen Backofen', thema: T.KUECHE, zutaten: ['½ Tasse Natron', 'etwa 3 EL Wasser', 'Sprühflasche mit Essig oder Zitronensaft', 'Spachtel, Schwamm, Handschuhe'], schritte: ['Ofen ausschalten und abkühlen lassen, Bleche und Roste herausnehmen.', 'Natron mit Wasser zu einer streichfähigen Paste verrühren.', 'Paste auf die verschmutzten Innenflächen streichen (Heizstäbe aussparen) und über Nacht einwirken lassen.', 'Am nächsten Tag mit Spachtel und feuchtem Schwamm abnehmen.', 'Reste mit Essig einsprühen – es schäumt leicht – und klar nachwischen.'], tipp: 'Ofenroste und Bleche in der Badewanne auf einem alten Handtuch mit heißem Wasser und 4 EL Soda über Nacht einweichen. Handschuhe!' }),
    R({ titel: 'Backofenscheibe mit Spülmaschinentab', info: 'Für eingebrannte Scheiben', thema: T.KUECHE, zutaten: ['ein (gekaufter oder selbst gemachter) Spülmaschinentab oder 1 EL Soda', 'Schüssel mit warmem Wasser', 'Handschuhe'], schritte: ['Tab kurz in Wasser tauchen.', 'Die Scheibe damit wie mit einem Radiergummi abreiben.', 'Mit einem feuchten Tuch nachwischen.'] }),
    { h2: 'Ceranfeld und Induktion' },
    { punkte: ['Angebranntes mit einem Glasschaber vorsichtig entfernen.', 'Natronpaste auftragen, 10 Minuten einwirken lassen, mit einem weichen Tuch abreiben – nie mit Scheuerschwamm.', 'Mit Essigwasser streifenfrei nachwischen.'] },
    { h2: 'Gasherd und Brenner' },
    'Abdeckungen und Brennerdeckel in heißem Wasser mit 2 EL Soda einweichen, abbürsten, gut trocknen. Die Brenneröffnungen nicht mit Wasser fluten; vor dem Wiedereinbau vollständig trocknen lassen.',
    R({ titel: 'Mikrowelle in 5 Minuten', info: 'Für eine Mikrowelle', thema: T.KUECHE, zutaten: ['eine mikrowellenfeste Schüssel mit 250 ml Wasser', 'Saft und Schale einer Zitrone oder 2 EL Essig'], schritte: ['Zitrone oder Essig ins Wasser geben.', '3 bis 5 Minuten auf höchster Stufe erhitzen, bis die Scheibe beschlägt.', '5 Minuten geschlossen stehen lassen.', 'Innenraum mit einem Tuch auswischen – die Verkrustungen sind aufgeweicht.'] }),
    { h2: 'Dunstabzugshaube' },
    'Metall-Fettfilter in heißem Wasser mit 2 bis 3 EL Soda 30 Minuten einweichen, abbürsten und spülen – oder, wenn erlaubt, in der Spülmaschine. Aktivkohlefilter lassen sich nicht reinigen, nur austauschen.',
  ],
};
