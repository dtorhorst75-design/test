const { R, T } = require('./_hilfe.js');
module.exports = {
  nr: 5, id: 'staffelsaat', teil: 'beet', titel: 'Staffelsaat: lieber oft und wenig', kurz: 'Staffelsaat',
  bloecke: [
    'Wer im April eine ganze Tüte Radieschen sät, hat im Mai sechzig Radieschen auf einmal – und im Juni keine mehr. Der Trick der Selbstversorger heißt **Staffelsaat**: Du säst kleine Mengen in regelmäßigen Abständen. So erntest du gleichmäßig über Wochen und Monate.',
    { tabelle: [['Gemüse', 'Wie oft säen', 'Zeitraum', 'Menge pro Saat (2 Personen)'],
      ['Radieschen', 'alle 2 bis 3 Wochen', 'März bis September', '1 Reihe à 1 m'],
      ['Pflücksalat, Kopfsalat', 'alle 3 bis 4 Wochen', 'März bis August', '4 bis 6 Pflanzen'],
      ['Rucola', 'alle 3 Wochen', 'April bis September', '½ Reihe'],
      ['Spinat', 'zweimal: Frühjahr und Spätsommer', 'März bis April, August bis September', '1 bis 2 Reihen'],
      ['Buschbohnen', 'dreimal', 'Mitte Mai, Mitte Juni, Anfang Juli', '1 bis 2 Reihen à 2 m'],
      ['Möhren', 'zweimal: frische und Lagermöhren', 'März bis April und Ende Mai bis Mitte Juni', '2 bis 4 Reihen'],
      ['Kohlrabi', 'alle 4 Wochen', 'März bis Juli', '4 bis 6 Pflanzen'],
      ['Dill', 'alle 4 Wochen', 'April bis Juli', 'eine kleine Gruppe'],
    ], breiten: [2100, 2300, 2700, 1970] },
    R({ titel: 'Ein Staffelsaat-Plan für das Salatbeet', info: 'Für ein Beet von 1,20 × 2 m', thema: [T.BEET, T.PLANEN], zutaten: ['Gartentagebuch', 'Saatgut Radieschen und Pflücksalat', 'Etiketten'], schritte: ['Teile das Beet in vier Streifen quer zur Länge.', 'Ende März säst du in Streifen 1 eine Reihe Radieschen und eine Reihe Salat.', 'Mitte April folgt Streifen 2, Anfang Mai Streifen 3, Ende Mai Streifen 4.', 'Wenn Streifen 1 abgeerntet ist, säst du dort wieder – und so weiter bis zum Spätsommer.', 'Trag jede Saat mit Datum ins Gartentagebuch ein.'], tipp: 'Im Hochsommer (Juli) keimt Salat bei über 20 °C schlecht. Dann abends säen, gut angießen und die Reihe mit einem Brett schattieren, bis die Keimlinge da sind.' }),
    { kasten: 'Der Trick mit dem Tagebuch', zeilen: ['Schreib dir in den Kalender des Gartentagebuchs für das ganze Jahr kleine Erinnerungen: „Radieschen säen“ alle drei Wochen, „Salat säen“ alle vier. So vergisst du keine Staffel.'] },
  ],
};
