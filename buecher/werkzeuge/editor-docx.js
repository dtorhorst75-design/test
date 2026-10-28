// Erzeugt die Editor-Datei zu Band 1: offene Punkte, Vorlage für Dianas eigene Texte und Fotoliste.
// Aufruf: node editor-docx.js <ausgabe.docx>
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, Footer, PageNumber, PageOrientation,
} = require('docx');

const BAND = path.join(__dirname, '..', process.env.BAND || 'band-1-kraeuter-wildpflanzen');
const GREEN = '3E5A2A', INK = '3B2F22';
const MONATE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

const runs = (text, base = {}) => text.split(/(\*\*[^*]+\*\*)/).filter(Boolean)
  .map((t) => (t.startsWith('**') ? new TextRun({ text: t.slice(2, -2), bold: true, ...base }) : new TextRun({ text: t, ...base })));
const p = (text, base) => new Paragraph({ children: runs(text, base), spacing: { after: 120, line: 290 } });
const h1 = (text, pageBreakBefore = true) => new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore, children: [new TextRun(text)] });
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
const bullet = (text) => new Paragraph({ numbering: { reference: 'punkte', level: 0 }, children: runs(text), spacing: { after: 60 } });
const check = (text) => new Paragraph({ children: [new TextRun({ text: '☐  ', size: 24 }), ...runs(text)], spacing: { after: 80 }, indent: { left: 360, hanging: 360 } });

const line = { style: BorderStyle.SINGLE, size: 4, color: 'C9C2AE' };
const borders = { top: line, bottom: line, left: line, right: line };
function table(header, rows, widths, size = 18) {
  const mk = (cells, head) => new TableRow({
    tableHeader: head, cantSplit: true,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA }, borders,
      shading: head ? { type: ShadingType.CLEAR, fill: GREEN, color: 'auto' } : undefined,
      margins: { top: 50, bottom: 50, left: 80, right: 80 },
      children: [new Paragraph({ children: runs(String(c), { size, ...(head ? { bold: true, color: 'FFFFFF' } : {}) }) })],
    })),
  });
  return new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, rows: [mk(header, true), ...rows.map((r) => mk(r, false))] });
}
// Leeres, umrahmtes Schreibfeld
const schreibfeld = (w) => new Table({
  width: { size: w, type: WidthType.DXA }, columnWidths: [w],
  rows: [new TableRow({ height: { value: 2000, rule: 'atLeast' }, children: [new TableCell({ width: { size: w, type: WidthType.DXA }, borders, children: [new Paragraph('')] })] })],
});

const monate = (liste) => {
  if (!liste.length) return '';
  const s = [...new Set(liste)].sort((a, b) => a - b);
  return s.length > 1 ? `${MONATE[s[0] - 1]}–${MONATE[s[s.length - 1] - 1]}` : MONATE[s[0] - 1];
};
const ohneMarkup = (t) => t.replace(/\*+/g, '').replace(/\s+–\s+.*$/, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();

// Bestimmungsmerkmale, die bei Pflanzen mit giftigen Doppelgängern unbedingt aufs Foto gehören
const MERKMALE = {
  giersch: 'dreikantiger Blattstiel (Querschnitt), Blatt „3 × 3“',
  baerlauch: 'einzeln gestielte Blätter, matte Blattunterseite, Zwiebel',
  vogelmiere: 'Haarleiste am Stängel (Nahaufnahme), tief gespaltene Blütenblätter',
  brunnenkresse: 'Blatt mit rundlichem Endblättchen, Wuchsort im Wasser, Blüten',
  kerbel: 'fein gefiederte Blätter, Stängel, Früchte',
  petersilie: 'glatte und krause Blätter, Blütendolde im 2. Jahr',
  'wilde-moehre': 'behaarter Stängel, fiederteilige Hüllblätter unter der Dolde, dunkle Mittelblüte, „Vogelnest“',
  ackerschachtelhalm: 'Astprobe: Knoten mit Seitenast (Nahaufnahme), Sporentrieb im Frühjahr',
  kuemmel: 'Fiederchen kreuzweise am Blattstiel, kahler Stängel, sichelförmige Samen',
  baldrian: 'gegenständige Fiederblätter, Blütenstand, Wurzelstock',
  engelwurz: 'kugelige Dolde, aufgeblasene Blattscheide, Stängel',
  meisterwurz: 'breite dreizählige Blätter, Dolde, angeschnittener Wurzelstock',
  dill: 'Blatt, Dolde, Samen, bereifter Stängel',
  koriander: 'untere und obere Blätter, Dolde, Samen',
  liebstoeckel: 'Blatt, Dolde, hohler Stängel',
  fenchel: 'haarfeine Blätter, gelbe Dolde, Samen',
  hopfen: 'junge Triebe (Hopfenspargel), rauer Stängel, Zapfen',
};

function build(outFile) {
  const rahmen = require(path.join(BAND, 'inhalt', 'rahmen.js'));
  const dir = path.join(BAND, 'inhalt', 'pflanzen');
  const pflanzen = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => require(path.join(dir, f))).sort((a, b) => a.nr - b.nr);
  const riskant = (pf) => pf.saison === 'haushalt' || (pf.bestimmungshinweis !== false && (!!(pf.verwechslung && pf.verwechslung.warnung) || /Apiaceae/.test(pf.familie) || pf.id === 'hopfen' || !!pf.bestimmungshinweis));
  const W = 14400; // Querformat-Inhaltsbreite für Tabellen

  const body = [];
  body.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 1600, after: 200 }, children: [new TextRun({ text: 'Editor-Datei', size: 56, color: GREEN })] }));
  body.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: `${rahmen.titel} · ${rahmen.untertitel}`, size: 30, color: INK })] }));
  body.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 }, children: [new TextRun({ text: 'Nur für dich – nicht Teil des Buches', italics: true, size: 24, color: INK })] }));
  body.push(p('In dieser Datei sammelst du alles, was du später noch ins Buch einfügen möchtest:'));
  body.push(bullet('**Teil 1:** Was vor der Veröffentlichung noch offen ist – als Checkliste.'));
  body.push(bullet('**Teil 2:** Platz für deine eigenen Texte zu jeder Pflanze („Aus Dianas Kräuterküche“).'));
  body.push(bullet(`**Teil 3:** Die Fotoliste aller ${pflanzen.length} Pflanzen, damit du nach und nach echte Bilder besorgen kannst.`));
  body.push(p('**So kommt alles ins Buch:** Schreib deine Texte hier hinein (oder schick sie mir einfach im Chat, Stichpunkte reichen). Ich setze sie dann an der richtigen Stelle ein und baue das Buch neu. Bitte trag sie nicht direkt in die Buch-Datei ein – sonst gehen sie beim nächsten Neubau verloren.'));

  // Teil 1
  body.push(h1('Teil 1: Noch offen vor der Veröffentlichung'));
  body.push(h2('Impressum'));
  ['Nachname eintragen', 'Anschrift (Straße, PLZ, Ort) – für ein Impressum Pflicht', 'E-Mail-Adresse', 'Druck und Vertrieb (z. B. „Independently published“ bei Amazon KDP)', 'ISBN (bekommst du kostenlos bei KDP oder kaufst sie bei der ISBN-Agentur)'].forEach((t) => body.push(check(t)));
  body.push(h2('Inhalt und Sicherheit'));
  ['Fachliche Prüfung des ganzen Buches durch eine Kräuterpädagogin, Apothekerin oder jemanden mit botanischem Fachwissen', 'Optional: Haftungsausschluss von einer Anwältin oder einem Anwalt (Verlags- oder Medienrecht) prüfen lassen', 'Fotos der 17 Pflanzen mit giftigen Doppelgängern besorgen (Teil 3, Priorität „hoch“)', 'Eigene Texte für „Aus Dianas Kräuterküche“ schreiben (Teil 2) – optional, aber sie machen das Buch persönlich'].forEach((t) => body.push(check(t)));
  body.push(h2('Veröffentlichung'));
  ['Cover gestalten (Vorderseite, Rücken, Rückseite mit Klappentext)', 'Bei Amazon KDP angeben, dass Texte und Bilder mit KI-Unterstützung erstellt wurden', 'Druckfassung bauen lassen (ohne Arbeitshinweise) und in Word als PDF speichern', 'Probedruck bestellen und durchblättern', 'GitHub-Repository auf „Private“ stellen'].forEach((t) => body.push(check(t)));

  // Teil 2
  body.push(h1('Teil 2: Deine eigenen Texte – „Aus Dianas Kräuterküche“'));
  body.push(p('**Wo kommt der Text hin?** In jedem Pflanzenkapitel direkt nach den Rezepten, vor dem Abschnitt „Tee und traditionelle Verwendung“. Er erscheint dort als eigener Kasten mit der Überschrift „Aus Dianas Kräuterküche“.'));
  body.push(p('**Wie lang?** Zwei bis fünf Sätze reichen. Lieber kurz und echt als lang. Du musst nicht zu jeder Pflanze etwas schreiben – Kapitel ohne Text bekommen einfach keinen Kasten.'));
  body.push(p('**Ideen, worüber du schreiben kannst:**'));
  ['Wo wächst die Pflanze bei dir? Seit wann kennst du sie?', 'Was ist dein Lieblingsrezept damit – oder was machst du ganz anders als im Buch?', 'Eine kleine Geschichte: Oma, Kindheit, ein Missgeschick beim Sammeln …', 'Ein Tipp, den nur jemand kennt, der die Pflanze wirklich benutzt.'].forEach((t) => body.push(bullet(t)));
  pflanzen.forEach((pf) => {
    body.push(new Paragraph({ heading: HeadingLevel.HEADING_3, keepNext: true, children: [new TextRun(`${pf.nr}. ${pf.name}`)] }));
    body.push(schreibfeld(9070));
  });

  // Teil 3
  body.push(h1('Teil 3: Fotoliste'));
  body.push(p(`Hier stehen alle ${pflanzen.length} Pflanzen des Buches. Fang mit den Pflanzen der Priorität **hoch** an: Sie haben giftige Doppelgänger, und dort helfen echte Fotos der Bestimmungsmerkmale am meisten. Fotografiere wenn möglich auch den Doppelgänger zum Vergleich.`));
  body.push(h2('Tipps für gute Pflanzenfotos'));
  [
    '**Licht:** Tageslicht bei leicht bewölktem Himmel ist ideal. Pralle Mittagssonne macht harte Schatten.',
    '**Hintergrund:** ruhig halten. Ein Blatt Papier oder ein Stück Pappe hinter der Pflanze wirkt Wunder.',
    '**Maßstab:** Bei Nahaufnahmen eine Münze oder ein Lineal mit ins Bild legen.',
    '**Auflösung:** Für eine ganze Druckseite mindestens 2500 × 3500 Pixel – jedes aktuelle Handy schafft das. Nicht digital zoomen, lieber näher rangehen.',
    '**Dateinamen:** Nummer, Pflanze und Motiv, z. B. „04-baerlauch-blattunterseite.jpg“. Dann finde ich jedes Bild sofort.',
    '**Rechte:** Am sichersten sind deine eigenen Fotos. Fremde Bilder nur mit einer Lizenz, die den Verkauf erlaubt. Achtung bei Wikipedia-Bildern: Viele verlangen Namensnennung und dass dein Buch unter dieselbe Lizenz gestellt wird – das ist für ein Verkaufsbuch meist ungeeignet.',
    '**Erkennbare Personen und fremde Gärten:** nur mit Erlaubnis.',
  ].forEach((t) => body.push(bullet(t)));

  const rows = pflanzen.map((pf) => {
    const bz = ((pf.steckbrief || []).find(([k]) => /Blütezeit/.test(k)) || [])[1];
    const ernte = monate(((pf.sammeln && pf.sammeln.kalender) || []).flatMap(([, a = []]) => a));
    const zeit = [bz ? `Blüte: ${bz}` : '', ernte ? `Ernte: ${ernte}` : ''].filter(Boolean).join('\n');
    const doppel = ((pf.verwechslung && pf.verwechslung.tabelle) || []).map(([n]) => ohneMarkup(n)).filter(Boolean);
    const hoch = riskant(pf);
    const motive = ['ganze Pflanze am Standort, Blatt, Blüte' + (pf.zeichnung && /pfahl|ruebe|zwiebel|rhizom/.test(pf.zeichnung.wurzel || '') ? ', Wurzel' : '')];
    if (MERKMALE[pf.id]) motive.push(`**Merkmale:** ${MERKMALE[pf.id]}`);
    if (hoch && doppel.length) motive.push(`**Zum Vergleich:** ${doppel.join(', ')}`);
    return [String(pf.nr), `**${pf.name}**\n${pf.botanisch}`, zeit, motive.join('\n'), hoch ? '**hoch**' : 'normal', '☐'];
  });
  // Zeilenumbrüche in Zellen: als eigene Absätze darstellen
  const widths = [600, 2700, 2600, 6300, 1100, 1100];
  const mkCell = (c, i, head) => new TableCell({
    width: { size: widths[i], type: WidthType.DXA }, borders,
    shading: head ? { type: ShadingType.CLEAR, fill: GREEN, color: 'auto' } : undefined,
    margins: { top: 50, bottom: 50, left: 80, right: 80 },
    children: String(c).split('\n').map((t) => new Paragraph({ alignment: i === 5 ? AlignmentType.CENTER : AlignmentType.LEFT, children: runs(t, { size: i === 5 && !head ? 28 : 18, ...(head ? { bold: true, color: 'FFFFFF' } : {}) }) })),
  });
  const head = ['Nr.', 'Pflanze', 'Beste Fotozeit', 'Motive', 'Priorität', 'Fertig'];
  const fotoTabelle = new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: widths,
    rows: [new TableRow({ tableHeader: true, children: head.map((c, i) => mkCell(c, i, true)) }), ...rows.map((r) => new TableRow({ cantSplit: true, children: r.map((c, i) => mkCell(c, i, false)) }))],
  });

  const doc = new Document({
    creator: rahmen.autorin,
    title: `Editor-Datei – ${rahmen.titel}, ${rahmen.untertitel}`,
    styles: {
      default: { document: { run: { font: 'Georgia', size: 22, color: INK } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 36, color: GREEN, font: 'Georgia' }, paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, color: GREEN, font: 'Georgia' }, paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1, keepNext: true } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, font: 'Georgia' }, paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 2, keepNext: true } },
      ],
    },
    numbering: { config: [{ reference: 'punkte', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }] },
    sections: [
      {
        properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1418, bottom: 1418, left: 1418, right: 1418 } } },
        footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18 })] })] }) },
        children: body,
      },
      {
        properties: { page: { size: { width: 11906, height: 16838, orientation: PageOrientation.LANDSCAPE }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
        footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18 })] })] }) },
        children: [h2(`Alle Pflanzen (${pflanzen.length}) – ${pflanzen.filter(riskant).length} davon mit Priorität „hoch“`), fotoTabelle],
      },
    ],
  });
  return Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(outFile, buf); console.log(`Editor-Datei → ${outFile}`); });
}

build(process.argv[2] || path.join(BAND, `Editor-Datei-${require(path.join(BAND, 'inhalt', 'rahmen.js')).kurz || 'Band-1'}.docx`));
