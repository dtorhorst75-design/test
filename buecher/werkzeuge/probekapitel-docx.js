// Baut das Word-Dokument „Probekapitel Brennnessel“ für Band 1.
// Aufruf: node probekapitel-docx.js <ausgabe.docx>
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ImageRun, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, PageBreak, Header, Footer, PageNumber, TableOfContents,
} = require('docx');

const BAND = path.join(__dirname, '..', 'band-1-kraeuter-wildpflanzen');
const GREEN = '3E5A2A', INK = '3B2F22', PALE = 'EEF3E4', WARN = 'FBEDE7', WARN_LINE = 'B5482F', SAND = 'F6EFDD';
const FONT = 'Georgia';
const CONTENT_W = 9070; // A4 minus 2 × 2,5 cm Rand, in DXA

// ---------- Bausteine ----------
const runs = (text, base = {}) => {
  // **fett** und *kursiv* im Fließtext erlauben
  const parts = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith('**')) parts.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else parts.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    last = m.index + t.length;
  }
  if (last < text.length) parts.push(new TextRun({ text: text.slice(last), ...base }));
  return parts;
};
const p = (text, opts = {}) => new Paragraph({ children: runs(text, opts.run), spacing: { after: 140, line: 300 }, alignment: opts.align || AlignmentType.JUSTIFIED, ...opts.para });
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
const h3 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(text)] });
const bullet = (text) => new Paragraph({ numbering: { reference: 'punkte', level: 0 }, children: runs(text), spacing: { after: 80, line: 290 } });
const step = (ref, text) => new Paragraph({ numbering: { reference: ref, level: 0 }, children: runs(text), spacing: { after: 80, line: 290 } });
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

const cellBorder = { style: BorderStyle.SINGLE, size: 4, color: 'C9C2AE' };
const borders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };

function table(header, rows, widths, { size } = {}) {
  const total = widths.reduce((a, b) => a + b, 0);
  const mk = (cells, isHead) => new TableRow({
    tableHeader: isHead,
    cantSplit: true,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      borders,
      shading: isHead ? { type: ShadingType.CLEAR, fill: GREEN, color: 'auto' } : undefined,
      margins: size ? { top: 50, bottom: 50, left: 40, right: 40 } : { top: 70, bottom: 70, left: 110, right: 110 },
      children: [new Paragraph({ alignment: size && i > 0 ? AlignmentType.CENTER : AlignmentType.LEFT, children: runs(c, { ...(isHead ? { bold: true, color: 'FFFFFF' } : {}), ...(size ? { size } : {}) }), spacing: { after: 0, line: 270 } })],
    })),
  });
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: [mk(header, true), ...rows.map((r) => mk(r, false))],
  });
}

// Kasten: einzellige Tabelle mit Hintergrund und farbigem linken Rand
function box(title, lines, { fill = PALE, line = GREEN } = {}) {
  const children = [new Paragraph({ children: [new TextRun({ text: title, bold: true, color: line, size: 24 })], spacing: { after: 100 } })];
  for (const l of lines) {
    if (l.startsWith('- ')) children.push(new Paragraph({ numbering: { reference: 'punkte', level: 0 }, children: runs(l.slice(2)), spacing: { after: 60, line: 280 } }));
    else children.push(new Paragraph({ children: runs(l), spacing: { after: 80, line: 280 } }));
  }
  const side = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [new TableRow({ cantSplit: true, children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill, color: 'auto' },
      borders: { left: { style: BorderStyle.SINGLE, size: 24, color: line }, top: side, bottom: side, right: side },
      margins: { top: 160, bottom: 160, left: 240, right: 200 },
      children,
    })] })],
  });
}
const gap = () => new Paragraph({ children: [], spacing: { after: 120 } });

// ---------- Inhalt ----------
const body = [];

// Titelseite
body.push(
  new Paragraph({ children: [], spacing: { before: 2600 } }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Was die Natur uns schenkt', font: FONT, size: 64, color: GREEN })], spacing: { after: 240 } }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Band 1: Kräuter & Wildpflanzen', font: FONT, size: 36, color: INK })], spacing: { after: 120 } }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'erkennen · sammeln · nutzen', font: FONT, size: 28, italics: true, color: INK })], spacing: { after: 1400 } }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Probekapitel: Die Brennnessel', font: FONT, size: 30, bold: true, color: GREEN })], spacing: { after: 160 } }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'von Diana', font: FONT, size: 26, color: INK })], spacing: { after: 120 } }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Arbeitsfassung, Oktober 2026', font: FONT, size: 22, italics: true, color: '7A6E5C' })] }),
  pageBreak(),
);

// Hinweise zur Arbeitsfassung
body.push(
  h1('Hinweise zu dieser Arbeitsfassung'),
  p('Dieses Dokument zeigt, wie jedes Pflanzenkapitel im Buch aufgebaut sein soll – am Beispiel der Brennnessel. Es ist bewusst ausführlich, damit du entscheiden kannst, was bleibt, was gekürzt wird und wo du eigene Erfahrungen ergänzen möchtest.'),
  box('Vor der Veröffentlichung noch zu erledigen', [
    '- **Fakten gegenprüfen:** Angaben zu Anwendung, Mengen und Inhaltsstoffen mit den genannten Fachquellen abgleichen (Liste am Kapitelende).',
    '- **Eigene Erfahrung ergänzen:** Der Kasten „Aus Dianas Kräuterküche“ ist für deine persönlichen Tipps reserviert.',
    '- **Zeichnung:** Die Illustration ist eine eigens erstellte, schematische botanische Zeichnung. Sie zeigt die Bestimmungsmerkmale, ersetzt aber kein Foto. Für den Druck kann sie in höherer Auflösung erzeugt werden.',
    '- **Amazon KDP:** Bei der Veröffentlichung angeben, dass Texte und Abbildungen mit KI-Unterstützung erstellt wurden.',
  ]),
  gap(),
  h2('Inhalt'),
  new TableOfContents('Inhalt', { hyperlink: true, headingStyleRange: '1-2' }),
  p('*Hinweis: Das Inhaltsverzeichnis füllt Word beim Öffnen aus. Falls es leer bleibt: Rechtsklick darauf → „Felder aktualisieren“.*', { align: AlignmentType.LEFT }),
  pageBreak(),
);

// Kapitel
body.push(
  h1('Die Brennnessel'),
  new Paragraph({ children: [new TextRun({ text: 'Urtica dioica', italics: true }), new TextRun(' (Große Brennnessel) · '), new TextRun({ text: 'Urtica urens', italics: true }), new TextRun(' (Kleine Brennnessel)')], spacing: { after: 60 } }),
  p('Familie: Brennnesselgewächse (*Urticaceae*)', { align: AlignmentType.LEFT }),
  p('**Volksnamen:** Nessel, Brennessel, Hanfnessel, Saunessel, Donnernessel, Senznessel', { align: AlignmentType.LEFT }),
  gap(),
  p('Kaum eine Pflanze wird so oft verflucht und so selten geschätzt wie die Brennnessel. Wer als Kind barfuß durch ein Nesselfeld gelaufen ist, vergisst das Brennen nicht so schnell. Dabei ist sie eine der nützlichsten Pflanzen, die vor unserer Haustür wachsen – und eine der großzügigsten: Sie wächst fast überall, verlangt keine Pflege, lässt sich vom Frühling bis in den Herbst ernten und liefert dabei gleich mehrere Dinge auf einmal.'),
  p('Aus ihren jungen Spitzen wird ein Gemüse, das Spinat in vielem übertrifft. Ihre Blätter geben einen milden Tee und eine Würze, ihre Samen ein nussiges Topping, ihre Wurzel einen traditionellen Heiltee. Im Garten wird sie zum kostenlosen Dünger und zum Mittel gegen Blattläuse, für Schmetterlinge ist sie eine unverzichtbare Kinderstube. Und über Jahrhunderte haben Menschen aus ihren Fasern sogar Stoff gewebt.'),
  p('Wer die Brennnessel einmal richtig kennt, sieht in jedem Nesselfeld keine Plage mehr, sondern eine Vorratskammer. Dieses Kapitel zeigt, wie du sie sicher erkennst, wann und wie du sie erntest und was du alles aus ihr machen kannst.'),
  pageBreak(),
);

// Abbildung
body.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new ImageRun({ type: 'png', data: fs.readFileSync(path.join(BAND, 'abbildungen', '01-brennnessel.png')), transformation: { width: 590, height: 826 }, altText: { title: 'Große Brennnessel', description: 'Botanische Zeichnung der Großen Brennnessel mit Wurzelstock, Stängel, Blättern, Blütenrispen und Detailansichten', name: 'Brennnessel' } })],
  }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Abb. 1: Große Brennnessel mit Wurzelstock, Ausläufer, gegenständigen Blättern und hängenden Blütenrispen; rechts Brennhaar, Samenstand und Blattrand vergrößert.', italics: true, size: 18, color: '6B5F4D' })] }),
  pageBreak(),
);

// Steckbrief
body.push(
  h2('Steckbrief'),
  table(['Merkmal', 'Große Brennnessel (Urtica dioica)'], [
    ['Pflanzenfamilie', 'Brennnesselgewächse (Urticaceae)'],
    ['Lebensform', 'ausdauernde Staude, treibt jedes Frühjahr aus dem Wurzelstock neu aus'],
    ['Höhe', 'meist 30 bis 150 cm, an nährstoffreichen Standorten auch darüber'],
    ['Blätter', 'gegenständig, länglich-herzförmig, zugespitzt, grob gesägt, mit Brennhaaren'],
    ['Stängel', 'vierkantig, aufrecht, unverzweigt oder wenig verzweigt, behaart'],
    ['Blütezeit', 'Juni bis Oktober'],
    ['Blüten', 'unscheinbar grünlich, in Rispen aus den Blattachseln; zweihäusig (männliche und weibliche Pflanzen)'],
    ['Früchte', 'kleine, flache Nüsschen (Samen) an den hängenden Rispen der weiblichen Pflanzen'],
    ['Wurzel', 'gelblicher, kriechender Wurzelstock mit vielen Ausläufern'],
    ['Standort', 'stickstoffreiche Böden: Wegränder, Waldränder, Auwälder, Gärten, Komposthaufen, Ruinen'],
    ['Verbreitung', 'in ganz Mitteleuropa häufig, vom Tiefland bis ins Gebirge'],
    ['Genutzte Teile', 'Triebspitzen, Blätter, Samen, Wurzel, Stängelfasern'],
    ['Haupterntezeit', 'März bis Mai (Triebspitzen), August bis Oktober (Samen), Herbst (Wurzel)'],
    ['Schutzstatus', 'nicht geschützt; Sammeln für den Eigenbedarf ist erlaubt'],
  ], [2600, 6470]),
  gap(),
);

// Erkennen
body.push(
  h2('Erkennen'),
  p('Die Große Brennnessel ist eine der Pflanzen, die fast jeder sofort erkennt – spätestens nach der ersten Berührung. Trotzdem lohnt es sich, sie genau anzusehen. Wer ihre Merkmale kennt, findet sie auch schon im zeitigen Frühjahr, wenn die ersten Triebe kaum eine Handbreit aus dem Boden schauen, und kann sie sicher von harmlosen Doppelgängern unterscheiden.'),
  h3('Wurzel und Ausläufer'),
  p('Unter der Erde liegt ein kräftiger, kriechender Wurzelstock von gelblicher bis ockerbrauner Farbe. Von ihm gehen zahlreiche feine Faserwurzeln und lange Ausläufer ab, aus denen immer neue Triebe entstehen. Deshalb wächst die Brennnessel fast nie einzeln, sondern in dichten Beständen, die sich Jahr für Jahr ausbreiten. Wer eine Pflanze ausgräbt, erkennt sie an der auffällig gelben Farbe der Wurzel.'),
  h3('Stängel'),
  p('Der Stängel ist **vierkantig** – das spürt man deutlich, wenn man ihn (mit Handschuh) zwischen den Fingern dreht. Er wächst aufrecht, ist meist unverzweigt und dicht mit Brenn- und Borstenhaaren besetzt. Im Herbst verholzt er und wird zäh und faserig; genau diese Fasern wurden früher zu Garn versponnen.'),
  h3('Blätter'),
  p('Die Blätter stehen **gegenständig**: An jedem Knoten sitzen sich zwei Blätter gegenüber, und das nächste Paar ist jeweils um ein Viertel gedreht. Sie sind länglich-herzförmig, laufen in eine lange Spitze aus und haben einen **grob gesägten Rand** mit nach vorn gerichteten Zähnen. Die Oberseite ist dunkelgrün, die Unterseite etwas heller. Beide Seiten tragen Brennhaare, die man gegen das Licht gut erkennen kann.'),
  h3('Blüten'),
  p('Von Juni bis in den Oktober erscheinen in den Blattachseln lange, rispenartige Blütenstände mit winzigen grünlichen Blüten. Die Große Brennnessel ist **zweihäusig** – daher auch ihr botanischer Name *dioica*, „zwei Häuser“. Männliche Pflanzen tragen eher waagerecht abstehende Rispen, deren Staubblätter bei warmem Wetter den Pollen regelrecht in die Luft schleudern. Die Rispen der weiblichen Pflanzen hängen schwer nach unten, sobald sich die Samen bilden.'),
  h3('Früchte und Samen'),
  p('Aus den weiblichen Blüten entstehen kleine, flache, eiförmige Nüsschen, die von den vertrockneten Blütenhüllblättern umschlossen sind. Sie sitzen dicht an dicht an den hängenden Rispen, sind erst grün und färben sich im Spätsommer grünlich-braun. Das ist der richtige Zeitpunkt für die Samenernte.'),
  h3('Warum die Brennnessel brennt'),
  p('Die Brennhaare sind kleine Meisterwerke. Jedes Haar ist ein winziges, sprödes Röhrchen, dessen Spitze mit Kieselsäure verstärkt ist und in einem kleinen Köpfchen endet. Bei der leichtesten Berührung bricht dieses Köpfchen schräg ab. Zurück bleibt eine scharfe Spitze, die wie eine Kanüle in die Haut sticht und den Inhalt des Haares hineinspritzt – einen Cocktail aus Reizstoffen, unter anderem **Histamin, Acetylcholin und Serotonin**. Das erklärt das Brennen, die Rötung und die typischen Quaddeln, die nach einigen Minuten bis Stunden wieder abklingen.'),
  box('Wissenswert: Große und Kleine Brennnessel', [
    'Neben der Großen Brennnessel wächst bei uns die **Kleine Brennnessel** (*Urtica urens*). Sie lässt sich genauso verwenden, unterscheidet sich aber in einigen Punkten:',
  ]),
  gap(),
  table(['Merkmal', 'Große Brennnessel', 'Kleine Brennnessel'], [
    ['Lebensdauer', 'ausdauernd (mehrjährig)', 'einjährig'],
    ['Höhe', '30–150 cm und mehr', '10–50 cm'],
    ['Blätter', 'länglich-herzförmig, lang zugespitzt', 'kleiner, rundlich-eiförmig, tief gesägt'],
    ['Blüten', 'zweihäusig', 'einhäusig (männliche und weibliche Blüten an einer Pflanze)'],
    ['Wurzel', 'kriechender Wurzelstock mit Ausläufern', 'kurze Pfahlwurzel, keine Ausläufer'],
    ['Brennen', 'deutlich', 'oft noch stärker'],
    ['Typischer Standort', 'Wegränder, Waldränder, Auwälder', 'Gemüsebeete, Äcker, Hofplätze'],
  ], [2300, 3385, 3385]),
  gap(),
);

// Verwechslungen
body.push(
  h2('Verwechslungsgefahr'),
  p('Die gute Nachricht zuerst: Die Brennnessel hat **keine giftigen Doppelgänger**. Verwechseln kann man sie vor allem mit einigen Lippenblütlern, die ähnliche Blätter haben. Sie sind alle harmlos – die Taubnesseln sind sogar selbst essbar.'),
  table(['Pflanze', 'Ähnlichkeit', 'So unterscheidest du sie'], [
    ['Weiße Taubnessel (*Lamium album*)', 'sehr ähnliche, gesägte Blätter, ebenfalls gegenständig', 'brennt nicht; auffällige weiße Lippenblüten in Quirlen an den Blattachseln; essbar'],
    ['Gefleckte und Rote Taubnessel (*Lamium maculatum*, *L. purpureum*)', 'ähnliche Blattform', 'brennen nicht; rosa bis purpurne Lippenblüten; meist niedriger; essbar'],
    ['Gemeiner Hohlzahn (*Galeopsis tetrahit*)', 'gesägte Blätter, borstig behaart', 'brennt nicht, ist aber rau; Stängel an den Knoten verdickt; Lippenblüten'],
    ['Zitronenmelisse (*Melissa officinalis*)', 'gegenständige, gekerbte Blätter', 'brennt nicht; duftet beim Zerreiben deutlich nach Zitrone'],
  ], [2700, 2700, 3670]),
  gap(),
  box('Der einfachste Test', [
    'Berühre ein Blatt vorsichtig mit dem Handrücken. Die Brennnessel verrät sich sofort. Wer das nicht ausprobieren möchte, achtet auf die Blüten: Brennnesseln haben nie die auffälligen Lippenblüten der Taubnesseln.',
  ]),
  gap(),
);

// Standort & Ökologie
body.push(
  h2('Standort und Lebensraum'),
  p('Die Brennnessel ist eine klassische **Zeigerpflanze**: Wo sie in großen Beständen wächst, ist der Boden reich an Stickstoff. Man findet sie deshalb dort, wo Menschen oder Tiere Spuren hinterlassen haben – an Wegrändern, an Komposthaufen und Misthaufen, an alten Stallplätzen und Ruinen, auf Lichtungen, an Waldrändern und in Auwäldern, wo Hochwasser regelmäßig Nährstoffe anschwemmt. Noch Jahrzehnte nachdem ein Gehöft verschwunden ist, verrät ein Brennnesselfeld oft, wo einmal Menschen gelebt haben.'),
  p('Sie mag halbschattige bis sonnige Plätze und einen feuchten, lockeren Boden. In trockenen, mageren Wiesen wirst du sie kaum finden.'),
  h2('Bedeutung für Schmetterlinge und Insekten'),
  p('Für die Natur ist die Brennnessel ein echter Schatz. Mehr als 50 Insektenarten nutzen sie als Nahrungspflanze, und für einige unserer bekanntesten Tagfalter ist sie die wichtigste Futterpflanze ihrer Raupen:'),
  bullet('**Tagpfauenauge** – die schwarzen, stacheligen Raupen leben in großen Gruppen in Gespinsten an den Triebspitzen.'),
  bullet('**Kleiner Fuchs** – seine Raupen fressen ebenfalls gesellig an Brennnesseln, besonders an sonnigen Standorten.'),
  bullet('**Admiral** – die Raupen leben einzeln in zusammengesponnenen Blättern.'),
  bullet('**Landkärtchen** – ein Falter, der in zwei verschieden gefärbten Generationen im Jahr fliegt.'),
  bullet('**C-Falter** – nutzt neben Brennnesseln auch Hopfen und Ulmen.'),
  p('Wer im Garten eine sonnige Ecke mit Brennnesseln stehen lässt, tut damit mehr für Schmetterlinge als mit vielen gekauften Blühpflanzen. Am besten mähst du nicht alles auf einmal, sondern immer nur einen Teil – so finden die Raupen jederzeit frisches Futter.'),
);

// Sammeln
body.push(
  h2('Sammeln und Ernten'),
  p('Die Brennnessel lässt sich fast das ganze Jahr über nutzen. Welcher Teil gerade am besten ist, hängt von der Jahreszeit ab.'),
  table(['Pflanzenteil', 'Erntezeit', 'Worauf du achtest'], [
    ['Junge Triebspitzen', 'März bis Mai; nach Rückschnitt bis in den Herbst', 'die obersten 2 bis 4 Blattpaare abknipsen; je jünger, desto zarter'],
    ['Blätter zum Trocknen', 'Mai bis Juni, vor der Blüte', 'an trockenen Vormittagen ernten, wenn der Tau abgetrocknet ist'],
    ['Samen', 'August bis Oktober', 'nur weibliche Pflanzen; Rispen abstreifen, wenn sie grünlich-braun sind und schwer hängen'],
    ['Wurzel', 'Herbst oder zeitiges Frühjahr', 'Wurzelstock ausgraben, gründlich waschen, klein schneiden und trocknen'],
    ['Stängel (Fasern)', 'Spätsommer bis Herbst', 'lange, kräftige Stängel schneiden; für Faserversuche'],
  ], [2300, 2600, 4170]),
  gap(),
  h3('Sammelkalender'),
  table(['Monat', 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'], [
    ['Triebspitzen', '', '', '●', '●', '●', '○', '○', '○', '○', '', '', ''],
    ['Blätter', '', '', '', '●', '●', '●', '○', '', '', '', '', ''],
    ['Samen', '', '', '', '', '', '', '', '●', '●', '●', '', ''],
    ['Wurzel', '', '', '●', '', '', '', '', '', '', '●', '●', ''],
  ], [1630, 620, 620, 620, 620, 620, 620, 620, 620, 620, 620, 620, 620], { size: 17 }),
  p('*● Haupterntezeit · ○ nach Rückschnitt möglich*', { align: AlignmentType.LEFT, run: { size: 18 } }),
  h3('Ernten, ohne sich zu verbrennen'),
  bullet('**Handschuhe tragen.** Einfache Gartenhandschuhe genügen völlig. Dünne Einweghandschuhe werden von den Brennhaaren manchmal durchstochen.'),
  bullet('**Von unten nach oben greifen.** Die Brennhaare zeigen schräg nach oben. Wer ein Blatt beherzt von unten nach oben anfasst, knickt die Haare um, statt sie abzubrechen. Das braucht etwas Mut und Übung.'),
  bullet('**Schere und Korb mitnehmen.** Die Triebspitzen direkt in den Korb schneiden, ohne sie anzufassen.'),
  bullet('**Brennhaare unschädlich machen.** Blätter zwischen zwei Küchentüchern mit dem Nudelholz überrollen, kurz in kochendes Wasser tauchen, trocknen oder fein pürieren – danach brennt nichts mehr.'),
  box('Tipp: zweimal im Jahr junge Brennnesseln', [
    'Schneide im Juni einen Teil deines Brennnesselbestands mit Sense oder Gartenschere bodennah ab. Nach drei bis vier Wochen treiben frische, zarte Triebe nach, die du wie im Frühling ernten kannst. So hast du bis in den Herbst junge Brennnesseln für die Küche.',
  ]),
  gap(),
  box('Saubere Standorte wählen', [
    '- Nicht an viel befahrenen Straßen sammeln (Abgase, Reifenabrieb).',
    '- Nicht an Wegen, auf denen viele Hunde Gassi gehen.',
    '- Nicht am Rand stark gedüngter Felder: Brennnesseln können auf überdüngten Böden viel Nitrat einlagern.',
    '- Nicht auf Flächen, die mit Pflanzenschutzmitteln behandelt werden.',
    '- Im Zweifel gilt: lieber hinter dem Waldrand oder im eigenen Garten ernten.',
  ], { fill: WARN, line: WARN_LINE }),
  gap(),
);

// Inhaltsstoffe
body.push(
  h2('Was in der Brennnessel steckt'),
  p('Die Brennnessel gilt zu Recht als eines der nährstoffreichsten Wildgemüse. Die genauen Werte schwanken stark je nach Standort, Erntezeit und Pflanzenteil, deshalb verzichten wir hier auf Zahlen und nennen die wichtigsten Gruppen:'),
  bullet('**Mineralstoffe:** besonders Kalium, Calcium und Magnesium, dazu Eisen und Kieselsäure.'),
  bullet('**Vitamine:** vor allem Vitamin C und Provitamin A (Carotinoide) in den frischen Blättern.'),
  bullet('**Eiweiß:** Für ein Blattgemüse enthalten junge Brennnesseln bemerkenswert viel Eiweiß.'),
  bullet('**Pflanzenstoffe:** Flavonoide, Chlorophyll und Phenolsäuren.'),
  bullet('**In den Samen:** fettes Öl mit einem hohen Anteil an Linolsäure, dazu Eiweiß und Mineralstoffe.'),
  p('Beim Kochen und Trocknen geht ein Teil des Vitamin C verloren. Wer möglichst viel davon erhalten will, verwendet junge Blätter roh – nach dem Nudelholz-Trick – oder gart sie nur kurz.'),
);

// Küche
body.push(
  h2('Die Brennnessel in der Küche'),
  p('Junge Brennnesseln schmecken mild, leicht nussig und erinnern an Spinat – nur würziger und „grüner“. Überall, wo Spinat passt, passt auch Brennnessel. Ältere Blätter werden faserig und etwas bitter; sie eignen sich besser für Tee, Suppenpulver oder Jauche.'),
  h3('Vorbereiten'),
  step('vorbereiten', 'Triebspitzen in einer Schüssel mit kaltem Wasser waschen und dabei mit einem Löffel unter Wasser drücken.'),
  step('vorbereiten', 'Dicke Stiele entfernen; bei jungen Spitzen können zarte Stängel dranbleiben.'),
  step('vorbereiten', 'Je nach Rezept 30 bis 60 Sekunden in kochendem Salzwasser blanchieren und in Eiswasser abschrecken – so bleibt das Grün leuchtend und die Brennhaare sind unschädlich.'),
  step('vorbereiten', 'Gut ausdrücken und hacken.'),
  h3('Ideen für jeden Tag'),
  bullet('**Als Gemüse:** wie Rahmspinat mit Zwiebel, Knoblauch, etwas Butter oder Sahne und einer Prise Muskat.'),
  bullet('**In Suppen:** Brennnesselsuppe mit Kartoffeln ist der Klassiker der ersten Frühlingswochen.'),
  bullet('**Roh:** fein gehackt in Kräuterquark, Frischkäse, Smoothies oder unter Salat.'),
  bullet('**Als Füllung:** in Knödeln, Maultaschen, Ravioli, Quiche, Lasagne oder Spanakopita statt Spinat.'),
  bullet('**Im Teig:** gehackt in Pfannkuchen, Bratlingen, Kartoffelpuffern oder Brotteig.'),
  bullet('**Als Chips:** ganze Blätter mit wenig Öl und Salz im Ofen knusprig backen.'),
  bullet('**Samen:** leicht geröstet über Müsli, Salat, Brot oder Joghurt; üblich sind 1 bis 2 Esslöffel am Tag.'),
  bullet('**Würze:** getrocknete Blätter fein gerebelt als grünes Gewürz für Suppen, Eintöpfe und Kräutersalz.'),
);

const recipe = (title, info, ingredients, steps, ref, tip) => {
  const out = [h3(title)];
  if (info) out.push(p(`*${info}*`, { align: AlignmentType.LEFT }));
  out.push(p('**Zutaten**', { align: AlignmentType.LEFT, para: { spacing: { after: 60 } } }));
  ingredients.forEach((i) => out.push(bullet(i)));
  out.push(p('**Zubereitung**', { align: AlignmentType.LEFT, para: { spacing: { before: 120, after: 60 } } }));
  steps.forEach((s) => out.push(step(ref, s)));
  if (tip) out.push(p(`*Tipp: ${tip}*`));
  return out;
};

body.push(
  h2('Rezepte'),
  ...recipe('Brennnesselsuppe mit Kartoffeln', 'Für 4 Personen · ca. 35 Minuten', [
    '150 g junge Brennnesselspitzen',
    '400 g mehligkochende Kartoffeln',
    '1 Zwiebel, 1 Knoblauchzehe',
    '2 EL Butter oder Öl',
    '1 Liter Gemüsebrühe',
    '100 ml Sahne oder Hafersahne',
    'Salz, Pfeffer, Muskat, etwas Zitronensaft',
  ], [
    'Brennnesseln waschen und grob hacken (mit Handschuhen).',
    'Zwiebel und Knoblauch fein würfeln, in der Butter glasig dünsten.',
    'Kartoffeln schälen, würfeln, dazugeben und kurz mitdünsten.',
    'Mit Brühe aufgießen und etwa 15 Minuten kochen, bis die Kartoffeln weich sind.',
    'Brennnesseln zugeben und nur 3 bis 4 Minuten mitkochen, damit sie grün bleiben.',
    'Fein pürieren, Sahne einrühren und mit Salz, Pfeffer, Muskat und Zitrone abschmecken.',
  ], 'suppe', 'Mit gerösteten Brennnesselsamen und einem Klecks Schmand servieren.'),
  ...recipe('Brennnessel-Pesto', 'Für 1 Glas (ca. 200 ml) · ca. 15 Minuten', [
    '100 g junge Brennnesselspitzen',
    '40 g Sonnenblumenkerne oder Walnüsse',
    '40 g geriebener Hartkäse (z. B. Bergkäse oder Parmesan), nach Wunsch',
    '1 Knoblauchzehe',
    '100 ml mildes Öl (Raps- oder Olivenöl) und etwas Öl zum Bedecken',
    'Saft einer halben Zitrone, Salz',
  ], [
    'Brennnesseln 30 Sekunden blanchieren, in Eiswasser abschrecken und sehr gut ausdrücken.',
    'Kerne in einer trockenen Pfanne goldbraun rösten und abkühlen lassen.',
    'Alles mit dem Stabmixer oder im Mörser zu einer Paste verarbeiten.',
    'Mit Zitronensaft und Salz abschmecken.',
    'In ein sauberes Glas füllen und mit einer dünnen Schicht Öl bedecken. Im Kühlschrank etwa eine Woche haltbar.',
  ], 'pesto', 'Für Vorrat in Eiswürfelformen einfrieren – so hast du jederzeit Portionen für Nudeln oder Brot.'),
  ...recipe('Brennnessel-Quark', 'Für 4 Personen · ca. 10 Minuten', [
    '2 Handvoll junge Brennnesselspitzen',
    '500 g Quark (oder pflanzliche Alternative)',
    '3 EL Milch oder Mineralwasser',
    '1 kleine Knoblauchzehe, 1 EL Schnittlauch',
    'Salz, Pfeffer, 1 TL Leinöl nach Wunsch',
  ], [
    'Brennnesseln zwischen Küchentüchern mit dem Nudelholz kräftig überrollen oder 20 Sekunden blanchieren.',
    'Sehr fein hacken.',
    'Quark mit Milch glatt rühren, Brennnesseln, Knoblauch und Schnittlauch unterheben.',
    'Abschmecken, nach Wunsch mit Leinöl beträufeln. Passt zu Pellkartoffeln und Brot.',
  ], 'quark'),
  ...recipe('Knusprige Brennnessel-Chips', 'Für 1 Schale · ca. 20 Minuten', [
    '2 Handvoll große, junge Brennnesselblätter (einzeln)',
    '1 EL Olivenöl',
    'Salz, nach Wunsch Paprikapulver oder Hefeflocken',
  ], [
    'Backofen auf 140 °C Umluft vorheizen.',
    'Blätter waschen und sehr gründlich trocken tupfen oder schleudern.',
    'In einer Schüssel mit dem Öl vorsichtig mischen, bis alle Blätter dünn benetzt sind.',
    'Einzeln auf ein Blech mit Backpapier legen, salzen und würzen.',
    '8 bis 12 Minuten backen, bis sie knusprig sind, aber noch grün. Nicht braun werden lassen.',
  ], 'chips', 'Durch das Backen brennen die Blätter nicht mehr. Am besten frisch essen.'),
  ...recipe('Geröstete Brennnesselsamen-Mischung', 'Für 1 kleines Glas · ca. 10 Minuten', [
    '4 EL getrocknete Brennnesselsamen',
    '4 EL Sonnenblumenkerne',
    '2 EL Sesam',
    '1 Prise Salz',
  ], [
    'Alles in eine trockene Pfanne geben.',
    'Bei mittlerer Hitze unter ständigem Rühren rösten, bis der Sesam duftet und leicht Farbe nimmt.',
    'Abkühlen lassen und in einem Schraubglas aufbewahren.',
  ], 'samen', 'Passt über Salat, Suppe, Ofengemüse, Joghurt und Butterbrot.'),
  gap(),
  box('Aus Dianas Kräuterküche', [
    '*[Platz für deine eigene Erfahrung: Wo sammelst du deine Brennnesseln? Was ist dein Lieblingsrezept? Welcher Fehler ist dir am Anfang passiert? Zwei bis fünf Sätze in deinen eigenen Worten genügen.]*',
  ], { fill: SAND, line: '8A6D3B' }),
  gap(),
);

// Tee
body.push(
  h2('Brennnesseltee und traditionelle Anwendung'),
  h3('Tee zubereiten'),
  p('Für einen Tee aus Blättern übergießt du pro Tasse **1 bis 2 Teelöffel getrocknetes Kraut** (oder eine kleine Handvoll frische Blätter) mit etwa 250 ml kochendem Wasser und lässt ihn zugedeckt **10 Minuten** ziehen. Der Tee schmeckt grasig und mild. Er lässt sich gut mit Pfefferminze, Zitronenmelisse, Brombeerblättern oder etwas Holunderblüte mischen.'),
  p('Für einen Tee aus der Wurzel wird ein Teelöffel der zerkleinerten, getrockneten Wurzel mit kaltem Wasser angesetzt, kurz aufgekocht und etwa 10 Minuten bei kleiner Hitze geköchelt, dann abgeseiht.'),
  h3('Traditionelle Verwendung'),
  p('Brennnesselkraut wird traditionell zur **Durchspülung der Harnwege** verwendet, weil es die Harnmenge erhöhen kann. Außerdem wird es in der Volksheilkunde traditionell bei **leichten Gelenkbeschwerden** eingesetzt. Die **Brennnesselwurzel** wird traditionell bei Beschwerden beim Wasserlassen verwendet, wenn eine ernsthafte Ursache ärztlich ausgeschlossen wurde.'),
  p('Diese Anwendungen beruhen auf langjähriger Erfahrung. Sie ersetzen keine Diagnose: Beschwerden, die länger anhalten oder wiederkehren, gehören in ärztliche Hände.'),
  box('Wichtig bei Tee-Kuren', [
    '- Eine Durchspülungs-Kur ist **nicht geeignet** bei Wassereinlagerungen infolge eingeschränkter Herz- oder Nierentätigkeit.',
    '- Bei Beschwerden beim Wasserlassen, Blut im Urin, Fieber oder Schmerzen bitte ärztlich abklären lassen.',
    '- Bei einer Durchspülungs-Kur auf reichlich Flüssigkeit achten (mindestens 2 Liter am Tag), sofern ärztlich nichts anderes empfohlen ist.',
    '- In Schwangerschaft und Stillzeit sowie bei Kindern Tee-Kuren nur nach ärztlicher Rücksprache.',
    '- Wer regelmäßig Medikamente einnimmt, fragt vor einer Kur in der Apotheke nach.',
  ], { fill: WARN, line: WARN_LINE }),
  gap(),
);

// Pflege
body.push(
  h2('Brennnessel in der Körperpflege'),
  p('Seit Generationen wird die Brennnessel auch äußerlich genutzt, vor allem als Haarspülung. Sie soll das Haar kräftigen und ihm Glanz geben – eine einfache, günstige Anwendung, die jeder ausprobieren kann.'),
  ...recipe('Brennnessel-Haarspülung', 'Für 1 Anwendung · ca. 30 Minuten inklusive Abkühlen', [
    '2 Handvoll frische Brennnesselblätter oder 3 EL getrocknetes Kraut',
    '1 Liter Wasser',
    'nach Wunsch 1 EL Apfelessig',
  ], [
    'Wasser aufkochen, über die Brennnesseln gießen und zugedeckt 15 Minuten ziehen lassen.',
    'Abseihen und auf eine angenehme Temperatur abkühlen lassen.',
    'Nach Wunsch Apfelessig einrühren.',
    'Nach der Haarwäsche über das Haar gießen, leicht einmassieren und nicht ausspülen.',
  ], 'haar', 'Die Spülung hält sich im Kühlschrank zwei bis drei Tage.'),
);

// Garten
body.push(
  h2('Die Brennnessel in Garten und Haushalt'),
  h3('Brennnesseljauche – kostenloser Dünger'),
  p('Brennnesseljauche ist einer der bekanntesten Hausmittel-Dünger. Sie liefert vor allem Stickstoff und Kalium und eignet sich besonders für Starkzehrer wie Tomaten, Kürbis, Zucchini, Kohl und Sellerie.'),
  step('jauche', 'Etwa **1 kg frische, grob zerkleinerte Brennnesseln** (ohne Samen und Wurzeln) in ein Gefäß aus Kunststoff, Holz oder Ton geben – **nicht aus Metall**.'),
  step('jauche', 'Mit **10 Litern Wasser**, am besten Regenwasser, auffüllen.'),
  step('jauche', 'Mit einem Gitter oder Tuch abdecken, damit Luft herankommt, aber keine Tiere hineinfallen. An einen sonnigen, nicht zu nahen Platz stellen – die Jauche riecht.'),
  step('jauche', 'Täglich einmal umrühren. Eine Handvoll Gesteinsmehl oder Baldrianblüten mildert den Geruch.'),
  step('jauche', 'Nach **1 bis 2 Wochen** hört das Schäumen auf, die Brühe ist dunkel – die Jauche ist fertig.'),
  step('jauche', 'Zum Düngen **im Verhältnis 1:10 verdünnen** und an die Wurzeln gießen, nicht über die Blätter. Alle ein bis zwei Wochen während der Wachstumszeit.'),
  p('Nicht verwenden bei Erbsen, Bohnen und Zwiebeln: Sie brauchen wenig Stickstoff und reagieren auf zu viel Dünger empfindlich.'),
  h3('Kaltwasserauszug – gegen Blattläuse'),
  p('Eine Handvoll frische Brennnesseln mit einem Liter kaltem Wasser übergießen und **12 bis 24 Stunden** ziehen lassen – nicht länger, sonst beginnt die Gärung. Abseihen und **unverdünnt** auf die befallenen Pflanzen sprühen, am besten an mehreren Tagen hintereinander. Der Auszug ist kein Wundermittel, hilft bei leichtem Befall aber oft erstaunlich gut.'),
  h3('Mulch und Kompost'),
  p('Frisch geschnittene Brennnesseln (ohne Samen) sind ein ausgezeichnetes Mulchmaterial unter Tomaten und Beerensträuchern. Im Kompost beschleunigen sie die Rotte und liefern Stickstoff. Die Wurzeln gehören nicht auf den Kompost, weil sie dort weiterwachsen.'),
  h3('Brennnesseln im Garten halten – und im Zaum halten'),
  p('Wer Brennnesseln bewusst im Garten haben möchte, gibt ihnen eine eigene Ecke – ideal ist ein halbschattiger Platz hinter dem Kompost. Damit sie sich nicht im ganzen Garten ausbreiten, hilft eine **Wurzelsperre** aus Rasenkanten oder ein großer, eingegrabener Kübel ohne Boden. Regelmäßiges Abschneiden vor der Samenreife verhindert die Aussaat.'),
  h3('Färben mit Brennnesseln'),
  p('Brennnesseln liefern Naturfarbe für Wolle und Stoffe: Die Blätter ergeben je nach Beize Grün- bis Gelbgrüntöne, aus den Wurzeln lassen sich Gelbtöne gewinnen. Das Ergebnis hängt stark von Beize, Wolle und Wasser ab – ein Probestück vorab lohnt sich.'),
);

// Geschichte
body.push(
  h2('Aus der Geschichte'),
  p('Aus den langen Stängelfasern der Brennnessel wurde über Jahrhunderte Stoff gewebt. Das „Nesseltuch“ trägt den Namen bis heute, auch wenn es inzwischen meist aus Baumwolle hergestellt wird. Die Fasern sind fein, reißfest und glänzen leicht – kein Wunder, dass Nesselgewebe früher geschätzt war.'),
  p('Eine besondere Rolle spielte die Brennnessel im **Ersten Weltkrieg**: Als Baumwolle in Deutschland knapp wurde, sammelte man ab 1915 in großem Stil wild wachsende Brennnesseln, um daraus Fasern für Uniformen, Säcke und Planen zu gewinnen. Auch Schulkinder wurden zum Sammeln eingesetzt. Nach dem Krieg geriet die Nesselfaser weitgehend in Vergessenheit – heute wird sie in kleinem Rahmen wieder erforscht und für nachhaltige Textilien angebaut.'),
  p('In der Volksmedizin war die Brennnessel ebenfalls fest verankert. Das „Peitschen“ mit frischen Brennnesseln bei Gliederschmerzen ist ein alter Brauch, der in manchen Gegenden bis ins 20. Jahrhundert überliefert ist. Und im Frühling galt die erste Brennnesselsuppe vielerorts als „Frühjahrskur“ nach dem langen Winter.'),
);

// Haltbar machen
body.push(
  h2('Haltbar machen'),
  table(['Methode', 'So geht es', 'Haltbarkeit'], [
    ['Trocknen', 'Blätter oder ganze Stängel locker gebündelt an einem schattigen, luftigen Ort aufhängen oder auf einem Gitter ausbreiten. Fertig, wenn sie rascheln. Dann Blätter abstreifen.', 'ca. 1 Jahr in dunklen, gut schließenden Gläsern'],
    ['Einfrieren', 'Blätter 1 Minute blanchieren, kalt abschrecken, gut ausdrücken und portionsweise einfrieren (z. B. als Kugeln oder im Eiswürfelbehälter).', 'ca. 6 bis 12 Monate'],
    ['Brennnesselsalz', 'Getrocknete Blätter fein zerreiben und mit grobem Meersalz mischen (etwa 1 Teil Kraut auf 3 Teile Salz).', 'über 1 Jahr, trocken gelagert'],
    ['Brennnesselpulver', 'Gut getrocknete Blätter im Mixer oder in der Kaffeemühle fein mahlen und sieben.', 'ca. 6 Monate, dunkel und luftdicht'],
    ['Samen', 'Rispen auf einem Tuch nachtrocknen lassen, Samen abrebeln und durch ein grobes Sieb reiben.', 'ca. 1 Jahr, dunkel und trocken'],
    ['Wurzel', 'Waschen, klein schneiden, an einem warmen Ort oder bei maximal 40 °C im Dörrgerät trocknen.', 'ca. 1 bis 2 Jahre'],
  ], [2350, 4570, 2150]),
  gap(),
);

// Vorsicht & Quellen
body.push(
  box('Vorsicht auf einen Blick', [
    '- Die Brennhaare reizen die Haut. Bei Kindern und empfindlicher Haut Handschuhe tragen. Gegen das Brennen helfen kühles Wasser und Ruhe; Spitzwegerichsaft wird traditionell aufgetupft.',
    '- Nur an sauberen Standorten sammeln (Nitrat, Abgase, Hundeurin, Pflanzenschutzmittel).',
    '- Tee-Kuren nicht bei Wassereinlagerungen durch Herz- oder Nierenschwäche.',
    '- In Schwangerschaft und Stillzeit sowie bei Kindern Kuren nur nach ärztlicher Rücksprache.',
    '- Wer Medikamente einnimmt, fragt vor regelmäßigem Gebrauch in der Apotheke nach.',
    '- Samen nur in kleinen Mengen als Lebensmittel verwenden.',
  ], { fill: WARN, line: WARN_LINE }),
  gap(),
  h2('Quellen zum Gegenprüfen'),
  p('*Diese Quellen dienen dir zur Kontrolle der Angaben vor der Veröffentlichung:*', { align: AlignmentType.LEFT }),
  bullet('Europäische Arzneimittel-Agentur (EMA), HMPC: Gemeinschaftsmonographien zu Brennnesselkraut (*Urticae herba*) und Brennnesselwurzel (*Urticae radix*)'),
  bullet('Bundesamt für Naturschutz (BfN): FloraWeb, Artsteckbrief *Urtica dioica*'),
  bullet('Fleischhauer, S. G.; Guthmann, J.; Spiegelberger, R.: *Enzyklopädie essbare Wildpflanzen*, AT Verlag'),
  bullet('Bundesministerium der Justiz: Bundesnaturschutzgesetz, § 39 Abs. 3 (Handstraußregelung)'),
  bullet('Stiftung Warentest / test.de sowie Verbraucherzentrale: Hinweise zu Nitrat in Blattgemüse'),
  gap(),
  p('*Dieses Kapitel dient der allgemeinen Information. Es ersetzt keine ärztliche Beratung, Diagnose oder Behandlung.*', { align: AlignmentType.LEFT, run: { size: 18, color: '6B5F4D' } }),
  pageBreak(),
);

// Anhang: Pflanzenliste aus der Markdown-Datei übernehmen
body.push(
  h1('Anhang: Geplante Pflanzenliste für Band 1'),
  p('Die Pflanzen sind nach ihrer Haupterntezeit geordnet. Bäume und Sträucher (z. B. Holunder, Hagebutte, Linde) folgen in Band 2, Gemüse (z. B. Zwiebel, Knoblauch) in Band 3.'),
  p('**Zeichenerklärung:** ⚠️ Verwechslungsgefahr mit giftigen Pflanzen · 🛡️ geschützt, nur aus dem Garten · ☝️ nur in Maßen bzw. mit besonderen Hinweisen', { align: AlignmentType.LEFT }),
);
const md = fs.readFileSync(path.join(BAND, 'pflanzenliste.md'), 'utf8').split('\n');
let rows = null;
const flush = () => { if (rows && rows.length) { body.push(table(['Nr.', 'Pflanze', 'Botanischer Name', 'Genutzte Teile', 'Hinweis'], rows, [700, 2000, 2300, 2170, 1900]), gap()); } rows = null; };
for (const line of md) {
  if (line.startsWith('## ') && !line.includes('Anhang')) { flush(); body.push(h2(line.slice(3))); rows = []; continue; }
  if (line.startsWith('## ')) { flush(); continue; }
  const m = line.match(/^\| (\d+) \|(.*)\|\s*$/);
  if (m && rows) rows.push([m[1], ...m[2].split('|').map((c) => c.trim())].slice(0, 5));
}
flush();

// ---------- Dokument ----------
const doc = new Document({
  features: { updateFields: true },
  creator: 'Diana',
  title: 'Was die Natur uns schenkt – Probekapitel Brennnessel',
  styles: {
    default: { document: { run: { font: FONT, size: 22, color: INK } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 40, color: GREEN, font: FONT }, paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, color: GREEN, font: FONT }, paragraph: { spacing: { before: 320, after: 140 }, outlineLevel: 1, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'C9C2AE', space: 4 } } } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: INK, font: FONT }, paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: 'punkte', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
      ...['vorbereiten', 'suppe', 'pesto', 'quark', 'chips', 'samen', 'haar', 'jauche'].map((ref) => ({
        reference: ref, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 340 } } } }],
      })),
    ],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1418, bottom: 1418, left: 1418, right: 1418 } }, titlePage: true },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'Was die Natur uns schenkt · Band 1 · Kräuter & Wildpflanzen', italics: true, size: 16, color: '8A7F6C' })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: '8A7F6C' })] })] }) },
    children: body,
  }],
});

Packer.toBuffer(doc).then((buf) => fs.writeFileSync(process.argv[2] || 'probekapitel-brennnessel.docx', buf));
