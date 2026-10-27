// Ordnet jedes Rezept und jede Anleitung einem Thema für das Rezeptregister zu.
// Schlüssel: Titel wie im Pflanzenkapitel. Wert: Thema (oder Liste von Themen). null = nicht ins Register.
const ERK = 'Erkältung, Husten und Hals';
const HAUT = 'Haut, Wunden und Prellungen';
const BAUCH = 'Bauch und Verdauung';
const RUHE = 'Ruhe, Schlaf und Entspannung';
const BLASE = 'Blase und Harnwege';
const WICKEL = 'Wickel, Auflagen und Bäder';
const TEE = 'Tees für jeden Tag';
const SALAT = 'Küche: Salate, Pesto, Butter und Aufstriche';
const WARM = 'Küche: Suppen, Hauptgerichte und Beilagen';
const SUESS = 'Küche: Süßes, Brot und Gebäck';
const TRINK = 'Getränke, Sirup und Likör';
const VORRAT = 'Würzen und Vorrat: Salz, Essig, Kapern, Gewürze';
const PFLEGE = 'Haushalt und Körperpflege';
const GARTEN = 'Garten: Dünger, Brühen und Pflanzenschutz';

module.exports = {
  REIHENFOLGE: [ERK, BAUCH, RUHE, BLASE, HAUT, WICKEL, TEE, SALAT, WARM, SUESS, TRINK, VORRAT, PFLEGE, GARTEN],
  themen: {
    // Brennnessel
    'Brennnesselsuppe mit Kartoffeln': WARM, 'Brennnessel-Pesto': SALAT, 'Knusprige Brennnessel-Chips': WARM,
    'Brennnesseljauche – kostenloser Dünger': GARTEN, 'Kaltwasserauszug gegen Blattläuse': GARTEN, 'Haarspülung': PFLEGE,
    'Mulch und Kompost': GARTEN, 'Tee zubereiten': TEE, 'Traditionelle Verwendung': null,
    // Giersch, Löwenzahn, Bärlauch
    'Giersch-Frittata': WARM, 'Giersch-Pesto': SALAT, 'Gierschlimonade': TRINK,
    'Giersch im Garten: essen statt bekämpfen': null, 'Futter für Tiere': null,
    'Löwenzahnsirup („Löwenzahnhonig“)': TRINK, 'Löwenzahnsalat mit Kartoffeln': SALAT, 'Löwenzahnkapern': VORRAT,
    'Löwenzahn-Wurzelkaffee': TRINK, 'Löwenzahn im Rasen': null, 'Färben': PFLEGE,
    'Bärlauch-Pesto': SALAT, 'Bärlauchbutter': SALAT, 'Bärlauchsalz': VORRAT, 'Bärlauch-Kartoffel-Suppe': WARM, 'Bärlauch im Garten': null,
    // Gänseblümchen bis Knoblauchsrauke
    'Frühlingsquark mit Gänseblümchen': SALAT, 'Gänseblümchenkapern': VORRAT, 'Gänseblümchensirup': TRINK, 'Für Kinder': null,
    'Vogelmiere-Salat mit Apfel und Walnüssen': SALAT, 'Grüner Vogelmiere-Smoothie': TRINK, 'Vogelmiere-Kräuterbutter': SALAT,
    'Für Hühner und Vögel': null, 'Bodenzeiger und Gründecke': null,
    'Neun-Kräuter-Suppe (Gründonnerstagssuppe)': WARM, 'Gundermann-Kräuterbutter': SALAT, 'Im Garten': null,
    'Knoblauchsrauken-Pesto': SALAT, 'Wilder Senf': VORRAT,
    'Frühlingsbrot mit Schaumkraut': SALAT, 'Sauerampfersuppe': WARM, 'Sauerampfer-Sahnesauce zu Fisch': WARM,
    // Wegeriche bis Barbarakraut
    'Spitzwegerich-Hustensirup': ERK, 'Gebratene Wegerichknospen': WARM, 'Spitzwegerich-Salbe': HAUT,
    'Wegerich-Chips': WARM, 'Hirtentäschel-Teigtaschen': WARM, 'Taubnessel-Blütentee': TEE,
    'Maibowle': TRINK, 'Waldmeistersirup': TRINK, 'Mottenschutz und Duftsäckchen': PFLEGE,
    'Kandierte Veilchen': SUESS, 'Veilchensirup': TRINK, 'Schlüsselblumen-Blütentee': ERK,
    'Frühlingssalat mit Lungenkrautblüten': SALAT, 'Brunnenkressesuppe': WARM, 'Winterlicher Kartoffelstampf mit Barbarakraut': WARM,
    'Für Insekten stehen lassen': null, 'Zeigerpflanze': null,
    'Schnittlauchblüten-Essig': VORRAT, 'Kräuterquark mit Pellkartoffeln': SALAT, 'Im Mischkultur-Beet': null, 'Kerbelsuppe': WARM,
    // Sommer
    'Schafgarben-Kräuterbutter': SALAT, 'Schafgarbentee': BAUCH,
    'Kamillentee': BAUCH, 'Kamillen-Dampfbad': [ERK, WICKEL],
    'Johanniskrautöl (Rotöl)': HAUT, 'Ringelblumensalbe': HAUT, 'Goldener Ringelblumenreis': WARM, 'Im Gemüsegarten': null,
    'Blauer Malventee mit Farbwechsel': ERK, 'Malven-Kaltauszug': ERK,
    'Mädesüß-Sirup': TRINK, 'Mädesüß-Panna-cotta': SUESS, 'Frauenmanteltee': TEE,
    'Beinwell-Wurzelsalbe': HAUT, 'Beinwelljauche – Kalidünger': GARTEN, 'Mulch': GARTEN,
    'Königskerzen-Hustentee': ERK, 'Fackeln und Dochte': PFLEGE, 'Für Insekten': null,
    'Eingelegter Schafskäse mit Dost': SALAT, 'Dosttee': TEE,
    'Thymian-Hustensirup': ERK, 'Ofenkartoffeln mit Thymian': WARM, 'Quendeltee': TEE,
    'Gnocchi in Salbeibutter': WARM, 'Salbei-Gurgellösung': ERK, 'Rosmarin-Focaccia': SUESS,
    'Lavendelzucker': SUESS, 'Lavendel-Schlaftee': RUHE, 'Lavendel-Badesalz': [PFLEGE, RUHE],
    'Melissen-Limonade': TRINK, 'Beruhigender Abendtee': RUHE,
    'Frischer Pfefferminztee': BAUCH, 'Erbsen-Minz-Suppe': WARM, 'Pesto genovese': SALAT, 'Schnelle Dillgurken': VORRAT,
    'Taboulé': SALAT, 'Blüten-Eiswürfel': TRINK, 'Falsche Kapern': VORRAT, 'Gefüllte Kapuzinerkresse-Blüten': SALAT,
    'Linseneintopf mit Ysop': WARM, 'Grüne Bohnen mit Bohnenkraut': WARM, 'Estragonessig': VORRAT,
    'Hähnchen in Estragon-Sahne': WARM, 'Selbstgemachte Gemüsebrühe mit Liebstöckel': VORRAT, 'Koriander-Chutney': SALAT,
    'Rotkleeblüten-Tee': TEE, 'Odermennigtee': TEE, 'Labkrauttee': TEE, 'Duftkissen': [PFLEGE, RUHE],
    'Blütensalz': VORRAT, 'Mohnblütensirup': TRINK, 'Eisenkrauttee': TEE,
    'Ausgebackene Möhrendolden': WARM, 'Gänsebraten-Füllung mit Beifuß': WARM, 'Wermut-Bittertee': BAUCH,
    'Wermutbrühe im Garten': GARTEN, 'Mottenschutz': PFLEGE,
    'Seifenkraut-Waschmittel für Wolle und Seide': PFLEGE, 'Haarwäsche': PFLEGE, 'Glühwein mit Nelkenwurz': TRINK,
    'Schachtelhalmbrühe gegen Pilzkrankheiten': GARTEN, 'Scheuermittel': PFLEGE, 'Schachtelhalm-Tee (Abkochung)': BLASE,
    'Hopfenspargel in Butter': WARM, 'Hopfen-Schlafkissen': RUHE, 'Schinkenwurzel-Salat': SALAT,
    'Zichorienkaffee aus Wegwartenwurzel': TRINK, 'Brotgewürz': VORRAT, 'Fencheltee': BAUCH,
    'Kümmelkartoffeln vom Blech': WARM, 'Kümmeltee': BAUCH,
    // Herbst
    'Kinpira – gebratene Klettenwurzel': WARM, 'Klettenwurzelöl für Haar und Kopfhaut': PFLEGE,
    'Alant-Honig für die Hustenzeit': ERK, 'Katzenspielzeug': null, 'Pflanzenstärker': GARTEN, 'Baldriantee (Kaltauszug)': RUHE,
    'Eibischwurzel-Sirup bei Reizhusten': ERK, 'Kandierte Engelwurzstängel': SUESS, 'Duftsäckchen': PFLEGE, 'Fußbad': [WICKEL, PFLEGE],
    'Rainfarn-Tee für den Garten': GARTEN, 'Ameisen und Fliegen': GARTEN, 'Goldrutentee': BLASE,
    'Meisterwurz-Kräuterbitter': [TRINK, BAUCH], 'Wollbürste': PFLEGE, 'Dekoration': null, 'Vogelfutter': null,
    'Arnika-Ölauszug (aus Gartenblüten)': HAUT,
    // Wickel aus wickel.js
    'Kamillen-Bauchwickel': [WICKEL, BAUCH], 'Kamillen-Sitzbad': [WICKEL, HAUT], 'Schafgarben-Leberwickel': [WICKEL, BAUCH],
    'Thymian-Brustwickel': [WICKEL, ERK], 'Salbei-Halswickel': [WICKEL, ERK], 'Lavendel-Entspannungsbad': [WICKEL, RUHE],
    'Lavendel-Fußbad zum Einschlafen': [WICKEL, RUHE], 'Ringelblumen-Kompresse': [WICKEL, HAUT],
    'Wegerich-Pflaster bei Insektenstichen': [WICKEL, HAUT], 'Arnika-Umschlag bei Prellungen': [WICKEL, HAUT],
    'Beinwell-Wurzelauflage': [WICKEL, HAUT], 'Rotöl-Einreibung bei verspannten Muskeln': [WICKEL, HAUT],
    'Baldrian-Bad zum Abschalten': [WICKEL, RUHE],
  },
};
