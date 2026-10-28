const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 4, id: 'salat-kraeuter', teil: 'leicht', titel: 'Salat, Kräuter und Blumen', kurz: 'Salat und Kräuter',
  bloecke: [
    'Salat ist ein Selbstbefruchter. Er braucht nur eins: Geduld. Denn die Samen bildet er erst, wenn er „schießt“ – also genau das tut, was du beim Essen-Salat verhindern willst.',
    R({ titel: 'Salatsamen gewinnen', info: 'Juli bis September', thema: T.ERNTEN, zutaten: ['2 bis 3 markierte Salatpflanzen, die besonders lange nicht geschossen sind', 'ein Stab zum Anbinden', 'eine große Papiertüte'], schritte: ['Die Pflanzen stehen lassen. Sie strecken sich, bilden einen langen Stängel und kleine gelbe Blüten.', 'Den Stängel an einen Stab binden, damit er nicht umknickt.', 'Etwa 2 bis 3 Wochen nach der Blüte zeigen sich kleine **weiße Federschirmchen** wie beim Löwenzahn. Dann sind die ersten Samen reif.', 'Alle paar Tage die Blütenstände über der Papiertüte ausschütteln – oder den ganzen Stängel abschneiden, wenn etwa die Hälfte der Schirmchen da ist, und kopfüber in der Tüte nachtrocknen lassen.', 'Durch ein Sieb reiben, die Federchen wegpusten.'], tipp: 'Nimm Samen von dem Salat, der **am spätesten** schießt. So bekommst du über die Jahre einen Salat, der auch im Sommer lange zart bleibt.' }),
    { h2: 'Kräuter und Blumen' },
    'Viele Kräuter und Gartenblumen säen sich ohnehin selbst aus. Du musst nur zur richtigen Zeit ernten.',
    { tabelle: [['Pflanze', 'Wann', 'So geht es'],
      ['**Dill**', 'August bis September', 'Dolden ernten, wenn die Samen braun sind; kopfüber in einer Papiertüte nachtrocknen'],
      ['**Koriander**', 'August', 'runde Samen ernten, wenn sie hellbraun sind – sie sind gleichzeitig Gewürz'],
      ['**Ringelblume**', 'Juli bis Oktober', 'die gebogenen, braunen Samen aus den verblühten Köpfen zupfen'],
      ['**Kapuzinerkresse**', 'August bis Oktober', 'die großen, runzligen Samen aufsammeln, wenn sie abfallen; gut trocknen'],
      ['**Borretsch**', 'Juli bis September', 'schwarze Samen fallen leicht aus – Tüte unterhalten oder Selbstaussaat zulassen'],
      ['**Petersilie**', 'im 2. Jahr, Juli bis August', 'zweijährig: einige Pflanzen über den Winter stehen lassen; die Samen ernten, wenn die Dolden braun sind'],
    ], breiten: [2100, 2400, 4570] },
    { kasten: 'Vorsicht bei Doldenblütlern', zeilen: ['Dill, Koriander und Petersilie sind Doldenblütler – eine Familie mit giftigen Verwandten wie dem Schierling. Ernte ihre Samen nur von **den Pflanzen, die du selbst gesät hast**, nie von wild wachsenden Doldenblütlern.'] },
  ],
};
