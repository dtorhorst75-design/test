const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 3, id: 'waeschepflege', teil: 'waesche', titel: 'Wäschepflege: weich, frisch und weiß', kurz: 'Wäschepflege',
  bloecke: [
    'Weichspüler machen Handtücher weich, aber weniger saugfähig, und hinterlassen einen Film in der Maschine. Mit ein paar Hausmitteln geht es auch ohne.',
    R({ titel: 'Essig als Weichspüler', info: 'Für eine Ladung', thema: T.WASCHEN, zutaten: ['50 ml Haushaltsessig (5 %) oder Essig mit Zitronenschalen angesetzt'], schritte: ['Essig ins Weichspülerfach geben.', 'Normal waschen. Der Essiggeruch verfliegt beim Trocknen vollständig.'], tipp: 'Essig löst Kalk- und Waschmittelreste aus den Fasern – deshalb wird die Wäsche weicher. Nicht zusammen mit Chlorbleiche verwenden. Wer um die Gummidichtungen besorgt ist, nimmt stattdessen 1 EL Zitronensäure in 250 ml Wasser gelöst.' }),
    R({ titel: 'Duftessig mit Zitrusschalen', info: 'Für 1 Liter', thema: [T.WASCHEN, T.GRUND], zutaten: ['Schalen von 3 bis 4 Bio-Zitronen oder -Orangen', '1 Liter Haushaltsessig', 'großes Schraubglas'], schritte: ['Schalen ins Glas geben und mit Essig bedecken.', '2 Wochen ziehen lassen, ab und zu schütteln.', 'Abseihen und in eine Flasche füllen.'], tipp: 'Als Weichspüler, Allzweckreiniger und Glasreiniger – riecht nach Zitrone statt nach Essig.' }),
    { h2: 'Wäsche riecht muffig?' },
    { punkte: ['**Natron:** 2 EL direkt in die Trommel geben – neutralisiert Gerüche.', '**Maschine reinigen:** leer bei 60 °C mit 100 ml Essig oder 2 EL Zitronensäure waschen; Flusensieb und Dichtungsgummi auswischen.', '**Trocknen:** Wäsche sofort aus der Maschine nehmen und luftig aufhängen. Im Freien, bei Sonne, trocknet sie am frischesten.'] },
    { h2: 'Weißwäsche ohne Chlor' },
    { punkte: ['**Sonne** bleicht auf natürliche Weise – nasse Weißwäsche in die Sonne hängen.', '**Zitrone:** über Nacht in heißem Wasser mit Zitronenscheiben einweichen (Kapitel Flecken).', '**Natron:** 1 bis 2 EL mit in die Trommel.', 'Weiß und Bunt **trennen**, Neues separat waschen.'] },
    R({ titel: 'Waschbälle und Trocknerbälle aus Wolle', info: 'Ersetzen Weichspüler im Trockner', thema: T.WASCHEN, zutaten: ['reine Schafwolle (Märchenwolle) oder Wollreste, die filzen', 'alter Nylonstrumpf'], schritte: ['Wolle zu einer festen Kugel wickeln (etwa tennisballgroß).', 'In den Nylonstrumpf stecken, Strumpf zwischen mehreren Kugeln abbinden.', 'Bei 60 °C mit Handtüchern waschen und im Trockner trocknen – die Kugeln verfilzen fest.', 'Aus dem Strumpf nehmen. 3 bis 4 Bälle mit in den Trockner geben – sie lockern die Wäsche auf und verkürzen die Trockenzeit.'] }),
  ],
};
