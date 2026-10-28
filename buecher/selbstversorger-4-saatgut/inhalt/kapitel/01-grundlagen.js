const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 1, id: 'grundlagen', teil: 'grundlagen', titel: 'Was du über Samen wissen musst', kurz: 'Grundlagen',
  bloecke: [
    { h2: 'Nur aus samenfesten Sorten' },
    'Eigenes Saatgut lohnt sich nur von **samenfesten** Sorten. Ihre Nachkommen sehen aus und schmecken wie die Mutterpflanze. Bei **F1-Hybriden** („F1“ steht auf der Tüte) spaltet sich die nächste Generation in ganz unterschiedliche Pflanzen auf – meist schwächer und anders als das Original. Von ihnen nimmst du keine Samen.',
    { h2: 'Wer bestäubt wen?' },
    'Damit eine Pflanze Samen bildet, muss ihre Blüte bestäubt werden. Davon hängt ab, wie leicht du sortenreines Saatgut bekommst.',
    { tabelle: [['', 'So funktioniert es', 'Gemüse', 'Für dich heißt das'],
      ['**Selbstbefruchter**', 'Die Blüte bestäubt sich selbst, oft schon bevor sie aufgeht.', 'Bohnen, Erbsen, Tomaten, Salat, (meist) Paprika', '**leicht.** Sorten kreuzen sich kaum. Ein paar Meter Abstand zwischen Sorten genügen.'],
      ['**Fremdbefruchter durch Insekten**', 'Bienen und Hummeln tragen Pollen von Blüte zu Blüte, auch von Nachbars Garten.', 'Zucchini, Kürbis, Gurken, Radieschen, Kohl, Möhren', 'Sorten kreuzen sich leicht. Von Hand bestäuben oder nur eine Sorte im weiten Umkreis.'],
      ['**Fremdbefruchter durch Wind**', 'Der Wind trägt den Pollen weit, oft Hunderte Meter.', 'Spinat, Rote Bete, Mangold, Mais', 'schwierig im Hausgarten – für den Anfang lieber kaufen.'],
    ], breiten: [1900, 2500, 2400, 2270] },
    { h2: 'Einjährig oder zweijährig?' },
    'Viele Gemüse blühen und tragen Samen im selben Jahr, in dem du sie säst – Bohnen, Erbsen, Tomaten, Paprika, Salat, Kürbisgewächse, Radieschen, Dill. **Zweijährige** dagegen bilden im ersten Jahr das, was wir essen – die Möhre, die Rote Bete, den Kohlkopf, die Zwiebel –, überwintern und blühen erst im zweiten Jahr. Mit ihnen fängst du erst an, wenn du Erfahrung hast.',
    { h2: 'Die besten Mutterpflanzen auswählen' },
    'Das ist der wichtigste Teil der Samengärtnerei – und der, den viele vergessen. Du wählst nicht irgendeine Pflanze, sondern die beste. So wird deine Sorte von Jahr zu Jahr besser an deinen Garten angepasst.',
    R({ titel: 'Samenträger auswählen und markieren', info: 'Während der Saison', thema: T.GRUND, zutaten: ['bunte Bänder oder Wollfäden', 'Holzetiketten, wasserfester Stift', 'Gartentagebuch'], schritte: ['Beobachte deine Pflanzen schon im Frühsommer: Welche wachsen am kräftigsten, sind gesund, tragen früh und reich, schmecken am besten?', 'Achte auf das, was dir wichtig ist: Salat, der lange nicht schießt; Bohnen, die früh tragen; Tomaten, die keine Krautfäule bekommen.', 'Markiere die besten Pflanzen mit einem Band, **bevor** du erntest – sonst isst du die schönsten Früchte auf.', 'Von ihnen erntest du nur zum Essen, was du nicht für Samen brauchst. Die ersten, schönsten Früchte bleiben für das Saatgut.', 'Notiere im Gartentagebuch, warum du diese Pflanzen gewählt hast.'], tipp: 'Nimm nach Möglichkeit Samen von **mehreren** Pflanzen einer Sorte (bei Bohnen und Tomaten mindestens 3 bis 5), nicht nur von einer. So bleibt die Sorte vielfältig und robust.' }),
    { kasten: 'Kranke Pflanzen nie', zeilen: ['Von kranken oder schwachen Pflanzen nimmst du nie Samen. Manche Krankheiten, etwa Viren bei Bohnen oder Pilze bei Salat, werden mit dem Samen weitergegeben.'] },
  ],
};
