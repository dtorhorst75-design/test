// Setzt Band 1 „Kräuter & Wildpflanzen“ als ein einziges Word-Dokument zusammen.
// Aufruf: node buch-docx.js <ausgabe.docx>
// Erwartet: ../band-1-kraeuter-wildpflanzen/inhalt/pflanzen/*.js (ein Modul je Pflanze),
//           ../band-1-kraeuter-wildpflanzen/inhalt/rahmen.js (Vorwort, Grundlagen, Anhang)
//           ../band-1-kraeuter-wildpflanzen/abbildungen/<id>.png (Zeichnungen, siehe zeichnungen-erzeugen.js)
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ImageRun, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, PageBreak, Header, Footer, PageNumber, TableOfContents,
  Bookmark, PageReference,
} = require('docx');

const BAND = path.join(__dirname, '..', 'band-1-kraeuter-wildpflanzen');
const GREEN = '3E5A2A', INK = '3B2F22', PALE = 'EEF3E4', WARN = 'FBEDE7', WARN_LINE = 'B5482F', SAND = 'F6EFDD';
const FONT = 'Georgia';
const CONTENT_W = 9070;
const WICKEL = require(path.join(BAND, 'inhalt', 'wickel.js'));
const THEMEN = require(path.join(BAND, 'inhalt', 'rezeptthemen.js'));
const TAUSCH = require(path.join(BAND, 'inhalt', 'tausch.js'));
const DIANA = require(path.join(BAND, 'inhalt', 'dianas-texte.js'));
const MONATE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

// ---------- Bausteine ----------
const runs = (text, base = {}) => {
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
const pl = (text, run) => p(text, { align: AlignmentType.LEFT, run });
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun(text)] });
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
const h3 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(text)] });
// Rezepte und Anleitungen in Pflanzenkapiteln bekommen ein Lesezeichen und landen im Themenregister.
let currentPf = null;
const rezeptListe = [];
const fehlendeThemen = [];
function rh3(text) {
  if (!currentPf) return h3(text);
  const thema = THEMEN.themen[text];
  if (thema === undefined) fehlendeThemen.push(`${currentPf.id}: ${text}`);
  if (!thema) return h3(text);
  const id = `r${rezeptListe.length + 1}`;
  rezeptListe.push({ titel: text, pflanze: currentPf.name, id, themen: Array.isArray(thema) ? thema : [thema] });
  return new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new Bookmark({ id, children: [new TextRun(text)] })] });
}
const seite = (id) => ({ seite: id });
const bullet = (text) => new Paragraph({ numbering: { reference: 'punkte', level: 0 }, children: runs(text), spacing: { after: 80, line: 290 } });
let listCounter = 0;
const numberedRefs = [];
function steps(items) {
  const ref = `liste${++listCounter}`;
  numberedRefs.push(ref);
  return items.map((t) => new Paragraph({ numbering: { reference: ref, level: 0 }, children: runs(t), spacing: { after: 80, line: 290 } }));
}
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });
const gap = () => new Paragraph({ children: [], spacing: { after: 120 } });

const cellBorder = { style: BorderStyle.SINGLE, size: 4, color: 'C9C2AE' };
const borders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
function table(header, rows, widths, { size, center } = {}) {
  const total = widths.reduce((a, b) => a + b, 0);
  const mk = (cells, isHead) => new TableRow({
    tableHeader: isHead,
    cantSplit: true,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      borders,
      shading: isHead ? { type: ShadingType.CLEAR, fill: GREEN, color: 'auto' } : undefined,
      margins: size ? { top: 40, bottom: 40, left: 40, right: 40 } : { top: 70, bottom: 70, left: 110, right: 110 },
      children: [new Paragraph({ alignment: center && i > 0 ? AlignmentType.CENTER : AlignmentType.LEFT, children: c && c.seite ? [new TextRun({ text: 'S. ', size }), new PageReference(c.seite)] : runs(String(c), { ...(isHead ? { bold: true, color: 'FFFFFF' } : {}), ...(size ? { size } : {}) }), spacing: { after: 0, line: 260 } })],
    })),
  });
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: widths, rows: [mk(header, true), ...rows.map((r) => mk(r, false))] });
}
function box(title, lines, { fill = PALE, line = GREEN } = {}) {
  const children = [new Paragraph({ children: [new TextRun({ text: title, bold: true, color: line, size: 24 })], spacing: { after: 100 } })];
  for (const l of lines) {
    if (l.startsWith('- ')) children.push(new Paragraph({ numbering: { reference: 'punkte', level: 0 }, children: runs(l.slice(2)), spacing: { after: 60, line: 280 } }));
    else children.push(new Paragraph({ children: runs(l), spacing: { after: 80, line: 280 } }));
  }
  const side = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [CONTENT_W],
    rows: [new TableRow({ cantSplit: true, children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill, color: 'auto' },
      borders: { left: { style: BorderStyle.SINGLE, size: 24, color: line }, top: side, bottom: side, right: side },
      margins: { top: 160, bottom: 160, left: 240, right: 200 },
      children,
    })] })],
  });
}
const warnbox = (title, lines) => box(title, lines, { fill: WARN, line: WARN_LINE });
const kalenderZeile = (name, haupt = [], neben = []) => [name, ...MONATE.map((_, i) => (haupt.includes(i + 1) ? '●' : neben.includes(i + 1) ? '○' : ''))];
const KAL_W = [1630, 620, 620, 620, 620, 620, 620, 620, 620, 620, 620, 620, 620];

// Allgemeine Blöcke aus dem Rahmen (Strings, Listen, Tabellen, Kästen)
function renderBlocks(blocks) {
  const out = [];
  for (const b of blocks) {
    if (typeof b === 'string') out.push(p(b));
    else if (b.h2) out.push(h2(b.h2));
    else if (b.h3) out.push(rh3(b.h3));
    else if (b.punkte) b.punkte.forEach((t) => out.push(bullet(t)));
    else if (b.schritte) out.push(...steps(b.schritte));
    else if (b.tabelle) { out.push(table(b.tabelle[0], b.tabelle.slice(1), b.breiten)); out.push(gap()); }
    else if (b.kasten) { out.push(box(b.kasten, b.zeilen)); out.push(gap()); }
    else if (b.warnung) { out.push(warnbox(b.warnung, b.zeilen)); out.push(gap()); }
    else if (b.links) out.push(pl(b.links));
  }
  return out;
}

// ---------- Pflanzenkapitel ----------
function recipe(r) {
  const out = [rh3(r.titel)];
  if (r.info) out.push(pl(`*${r.info}*`));
  out.push(new Paragraph({ children: [new TextRun({ text: r.zutatenTitel || 'Zutaten', bold: true })], spacing: { after: 60 } }));
  r.zutaten.forEach((i) => out.push(bullet(i)));
  out.push(new Paragraph({ children: [new TextRun({ text: r.schritteTitel || 'Zubereitung', bold: true })], spacing: { before: 120, after: 60 } }));
  out.push(...steps(r.schritte));
  if (r.tipp) out.push(p(`*Tipp: ${r.tipp}*`));
  if (TAUSCH[r.titel]) out.push(new Paragraph({ spacing: { before: 60, after: 140, line: 280 }, children: [new TextRun({ text: 'Tausch-Tipp: ', bold: true, size: 20, color: GREEN }), ...runs(TAUSCH[r.titel], { size: 20 })] }));
  return out;
}

function chapter(pf) {
  const out = [];
  currentPf = pf;
  out.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new Bookmark({ id: `p_${pf.id.replace(/-/g, '_')}`, children: [new TextRun(pf.name)] })] }));
  out.push(new Paragraph({ children: [new TextRun({ text: pf.botanisch, italics: true }), ...(pf.botanisch2 ? [new TextRun(' · '), ...runs(pf.botanisch2)] : [])], spacing: { after: 60 } }));
  out.push(pl(`Familie: ${pf.familie}`));
  if (pf.volksnamen) out.push(pl(`**Volksnamen:** ${pf.volksnamen}`));
  out.push(gap());
  (pf.intro || []).forEach((t) => out.push(p(t)));

  // Abbildung auf eigener Seite
  const img = path.join(BAND, 'abbildungen', `${pf.id}.png`);
  if (fs.existsSync(img)) {
    // Pflanzen mit giftigen Doppelgängern (und alle Doldenblütler) bekommen unter der Zeichnung einen Warnhinweis.
    const riskant = !!(pf.verwechslung && pf.verwechslung.warnung) || /Apiaceae/.test(pf.familie) || pf.id === 'hopfen';
    const [w, h] = riskant ? [500, 700] : [580, 812];
    out.push(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, children: [new ImageRun({ type: 'png', data: fs.readFileSync(img), transformation: { width: w, height: h }, altText: { title: pf.name, description: `Schematische Zeichnung: ${pf.name} (${pf.botanisch})`, name: pf.id } })] }));
    out.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new TextRun({ text: `Abb.: ${pf.name} (${pf.botanisch}), schematische Zeichnung mit Wurzel, Stängel, Blättern und Blüte; unten Detailansichten. Zum Bestimmen sind die Merkmale im Text maßgeblich.`, italics: true, size: 18, color: '6B5F4D' })] }));
    if (riskant) out.push(warnbox('Die Zeichnung allein reicht zum Bestimmen nicht', [`${pf.name} hat giftige Doppelgänger. Die Zeichnung ist schematisch und zeigt nicht jedes Unterscheidungsmerkmal genau. Sammle nur, wenn **alle** Merkmale aus „Erkennen“ und „Verwechslungsgefahr“ an der echten Pflanze zutreffen – am besten mit einem Bestimmungsbuch mit Fotos oder einer kundigen Begleitung.`]));
    out.push(pageBreak());
  }

  if (pf.steckbrief) { out.push(h2('Steckbrief')); out.push(table(['Merkmal', pf.name], pf.steckbrief, [2600, 6470])); out.push(gap()); }

  if (pf.erkennen) {
    out.push(h2('Erkennen'));
    if (pf.erkennenText) out.push(p(pf.erkennenText));
    for (const [t, x] of pf.erkennen) { out.push(h3(t)); out.push(...renderBlocks(Array.isArray(x) ? x : [x])); }
    if (pf.vergleich) { out.push(box(pf.vergleich.titel, [pf.vergleich.text])); out.push(gap()); out.push(table(pf.vergleich.kopf, pf.vergleich.zeilen, pf.vergleich.breiten || [2300, 3385, 3385])); out.push(gap()); }
  }

  if (pf.verwechslung) {
    const v = pf.verwechslung;
    out.push(h2('Verwechslungsgefahr'));
    (Array.isArray(v.text) ? v.text : [v.text]).forEach((t) => out.push(p(t)));
    if (v.tabelle) { out.push(table(['Pflanze', 'Ähnlichkeit', 'So unterscheidest du sie'], v.tabelle, [2700, 2700, 3670])); out.push(gap()); }
    if (v.warnung) { out.push(warnbox(v.warnung.titel, v.warnung.zeilen)); out.push(gap()); }
    if (v.tipp) { out.push(typeof v.tipp === 'string' ? box('Tipp', [v.tipp]) : box(v.tipp.titel, v.tipp.zeilen)); out.push(gap()); }
  }

  if (pf.standort) { out.push(h2('Standort und Lebensraum')); pf.standort.forEach((t) => out.push(p(t))); }
  if (pf.oekologie) { out.push(h2(pf.oekologie.titel || 'Bedeutung für Insekten und Tiere')); renderBlocks(pf.oekologie.bloecke).forEach((x) => out.push(x)); }

  if (pf.sammeln) {
    const s = pf.sammeln;
    out.push(h2('Sammeln und Ernten'));
    if (s.text) (Array.isArray(s.text) ? s.text : [s.text]).forEach((t) => out.push(p(t)));
    if (s.tabelle) { out.push(table(['Pflanzenteil', 'Erntezeit', 'Worauf du achtest'], s.tabelle, [2300, 2600, 4170])); out.push(gap()); }
    if (s.kalender) {
      out.push(h3('Sammelkalender'));
      out.push(table(['Teil', ...MONATE], s.kalender.map(([n, a, b]) => kalenderZeile(n, a, b)), KAL_W, { size: 17, center: true }));
      out.push(pl('*● Haupterntezeit · ○ ebenfalls möglich*', { size: 18 }));
    }
    if (s.tipps) { out.push(h3('Tipps für die Ernte')); s.tipps.forEach((t) => out.push(bullet(t))); }
    if (s.kasten) { out.push(gap()); out.push(box(s.kasten.titel, s.kasten.zeilen)); out.push(gap()); }
    if (s.warnung) { out.push(gap()); out.push(warnbox(s.warnung.titel, s.warnung.zeilen)); out.push(gap()); }
  }

  if (pf.inhaltsstoffe) {
    out.push(h2(`Was ${pf.artikel || 'in der Pflanze'} steckt`));
    if (pf.inhaltsstoffe.text) out.push(p(pf.inhaltsstoffe.text));
    (pf.inhaltsstoffe.punkte || []).forEach((t) => out.push(bullet(t)));
    if (pf.inhaltsstoffe.nach) out.push(p(pf.inhaltsstoffe.nach));
  }

  if (pf.kueche) {
    out.push(h2(pf.kueche.titel || `${pf.name} in der Küche`));
    (pf.kueche.text || []).forEach((t) => out.push(p(t)));
    if (pf.kueche.vorbereiten) { out.push(h3('Vorbereiten')); out.push(...steps(pf.kueche.vorbereiten)); }
    if (pf.kueche.ideen) { out.push(h3('Ideen für jeden Tag')); pf.kueche.ideen.forEach((t) => out.push(bullet(t))); }
  }

  if (pf.rezepte && pf.rezepte.length) {
    out.push(h2('Rezepte'));
    pf.rezepte.forEach((r) => out.push(...recipe(r)));
  }

  if (DIANA[pf.id]) { out.push(gap()); out.push(box(`Aus Dianas Kräuterküche: ${pf.name}`, DIANA[pf.id], { fill: SAND, line: '8A6D3B' })); out.push(gap()); }

  if (pf.anwendung) {
    const a = pf.anwendung;
    out.push(h2(a.titel || 'Tee und traditionelle Verwendung'));
    renderBlocks(a.bloecke || []).forEach((x) => out.push(x));
    if (a.hinweise) { out.push(warnbox(a.hinweiseTitel || 'Wichtig bei der Anwendung', a.hinweise.map((t) => `- ${t}`))); out.push(gap()); }
  }

  const wickel = WICKEL.proPflanze[pf.id];
  if (wickel) {
    out.push(h2('Wickel, Auflagen und Bäder'));
    out.push(p(`*Wie man einen Wickel anlegt, steht ausführlich im Kapitel „${WICKEL.kapitel.titel}“ vorne im Buch. Dort findest du auch, wann du besser keinen Wickel machst.*`));
    wickel.forEach((r) => out.push(...recipe({ zutatenTitel: 'Du brauchst', schritteTitel: 'So geht es', ...r })));
  }

  if (pf.haushalt) {
    out.push(h2(pf.haushaltTitel || 'In Haushalt, Garten und Pflege'));
    for (const item of pf.haushalt) {
      if (item.rezept) out.push(...recipe(item.rezept));
      else { out.push(rh3(item[0])); (Array.isArray(item[1]) ? item[1] : [item[1]]).forEach((t) => out.push(p(t))); }
    }
  }

  if (pf.geschichte) { out.push(h2('Aus der Geschichte')); pf.geschichte.forEach((t) => out.push(p(t))); }

  if (pf.haltbar) { out.push(h2('Haltbar machen')); out.push(table(['Methode', 'So geht es', 'Haltbarkeit'], pf.haltbar, [2350, 4570, 2150])); out.push(gap()); }

  if (pf.vorsicht) { out.push(warnbox('Vorsicht auf einen Blick', pf.vorsicht.map((t) => `- ${t}`))); out.push(gap()); }

  if (pf.quellen) { out.push(h3('Quellen zum Gegenprüfen')); pf.quellen.forEach((t) => out.push(bullet(t))); }
  currentPf = null;
  return out;
}

// ---------- Buch ----------
function build(outFile) {
  const rahmen = require(path.join(BAND, 'inhalt', 'rahmen.js'));
  const dir = path.join(BAND, 'inhalt', 'pflanzen');
  const pflanzen = fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort().map((f) => require(path.join(dir, f)));
  pflanzen.sort((a, b) => a.nr - b.nr);

  const body = [];
  // Titelei
  body.push(
    new Paragraph({ children: [], spacing: { before: 2400 } }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: rahmen.titel, font: FONT, size: 64, color: GREEN })], spacing: { after: 240 } }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: rahmen.untertitel, font: FONT, size: 36, color: INK })], spacing: { after: 120 } }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: rahmen.motto, font: FONT, size: 28, italics: true, color: INK })], spacing: { after: 1600 } }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: rahmen.autorin, font: FONT, size: 30, color: GREEN })], spacing: { after: 120 } }),
    pageBreak(),
  );
  rahmen.impressum.forEach((t) => body.push(pl(t, { size: 18 })));
  body.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun('Inhalt')] }));
  body.push(new TableOfContents('Inhalt', { hyperlink: true, headingStyleRange: '1-1' }));
  body.push(pl('*Das Inhaltsverzeichnis füllt Word beim Öffnen aus (Frage „Felder aktualisieren?“ mit Ja beantworten). Falls es leer bleibt: Rechtsklick darauf → „Felder aktualisieren“ → „Gesamtes Verzeichnis aktualisieren“.*', { size: 18 }));

  const vorne = [...rahmen.vorne];
  vorne.splice(vorne.findIndex((k) => k.titel === WICKEL.nachKapitel) + 1, 0, WICKEL.kapitel);
  for (const kap of vorne) { body.push(h1(kap.titel)); body.push(...renderBlocks(kap.bloecke)); }

  const saisons = [
    ['fruehling', 'Frühling', 'März bis Mai: junge Blätter, erste Blüten, Wurzeln vor dem Austrieb'],
    ['sommer', 'Sommer', 'Juni bis August: Blüten, Kraut und die ersten Samen'],
    ['herbst', 'Spätsommer und Herbst', 'September bis November: Wurzeln, Samen und späte Blüten'],
  ];
  for (const [key, name, sub] of saisons) {
    const list = pflanzen.filter((x) => x.saison === key);
    if (!list.length) continue;
    body.push(new Paragraph({ pageBreakBefore: true, children: [], spacing: { before: 3000 } }));
    body.push(new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER, children: [new TextRun(`Pflanzen des ${name === 'Spätsommer und Herbst' ? 'Spätsommers und Herbstes' : name + 's'}`)] }));
    body.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: sub, italics: true, size: 26, color: INK })], spacing: { after: 400 } }));
    body.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: list.map((x) => x.name).join(' · '), size: 20, color: '6B5F4D' })] }));
    list.forEach((pf) => body.push(...chapter(pf)));
  }

  // Anhang
  for (const kap of rahmen.hinten) { body.push(h1(kap.titel)); body.push(...renderBlocks(kap.bloecke)); }
  // Gesamtkalender und Register aus den Pflanzendaten
  body.push(h1('Sammelkalender aller Pflanzen'));
  body.push(p('Die Übersicht zeigt für jede Pflanze die Haupterntezeit des wichtigsten Pflanzenteils (●) und weitere mögliche Erntezeiten (○). Die Angaben gelten für mittlere Lagen in Deutschland; in warmen Regionen beginnt die Saison früher, im Bergland später.'));
  const rows = pflanzen.map((pf) => {
    const k = (pf.sammeln && pf.sammeln.kalender) || [];
    const haupt = new Set(), neben = new Set();
    k.forEach(([, a = [], b = []]) => { a.forEach((m) => haupt.add(m)); b.forEach((m) => neben.add(m)); });
    return kalenderZeile(pf.name, [...haupt], [...neben].filter((m) => !haupt.has(m)));
  });
  body.push(table(['Pflanze', ...MONATE], rows, KAL_W, { size: 16, center: true }));
  body.push(h1('Rezepte und Anwendungen nach Themen'));
  body.push(p('Hier findest du alle Rezepte, Tees, Wickel und Anleitungen dieses Buches nach Themen geordnet – für den Fall, dass du nicht von der Pflanze, sondern von der Frage ausgehst: Was hilft bei Husten? Was koche ich heute? Manche Rezepte stehen unter mehreren Themen. Die Grundrezepte und Grundtechniken findest du vorne im Buch.'));
  for (const thema of THEMEN.REIHENFOLGE) {
    const liste = rezeptListe.filter((r) => r.themen.includes(thema)).sort((a, b) => a.titel.localeCompare(b.titel, 'de'));
    if (!liste.length) continue;
    body.push(h2(thema));
    body.push(table(['Rezept oder Anwendung', 'Pflanze', 'Seite'], liste.map((r) => [r.titel, r.pflanze, seite(r.id)]), [5000, 2670, 1400], { size: 18 }));
  }
  if (fehlendeThemen.length) console.warn('Ohne Thema im Register:\n  ' + fehlendeThemen.join('\n  '));

  body.push(h1('Register'));
  body.push(p('Alle Pflanzen dieses Bandes alphabetisch, mit botanischem Namen und Volksnamen.'));
  const reg = [];
  pflanzen.forEach((pf) => {
    const s = seite(`p_${pf.id.replace(/-/g, '_')}`);
    reg.push([pf.name, `*${pf.botanisch}*`, s]);
    reg.push([pf.botanisch.replace(/\s*\(.*$/, ''), pf.name, s]);
    (pf.volksnamen || '').split(',').map((v) => v.trim()).filter(Boolean).forEach((v) => reg.push([v, pf.name, s]));
  });
  reg.sort((a, b) => a[0].localeCompare(b[0], 'de'));
  body.push(table(['Name', 'siehe', 'Seite'], reg.map(([a, b, c]) => [a.includes(' ') && /^[A-Z][a-z]+ [a-z]/.test(a) && !a.includes('*') ? `*${a}*` : a, b, c]), [3600, 3870, 1600], { size: 18 }));

  const doc = new Document({
    features: { updateFields: true },
    creator: rahmen.autorin,
    title: `${rahmen.titel} – ${rahmen.untertitel}`,
    styles: {
      default: { document: { run: { font: FONT, size: 22, color: INK } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 40, color: GREEN, font: FONT }, paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, color: GREEN, font: FONT }, paragraph: { spacing: { before: 320, after: 140 }, outlineLevel: 1, keepNext: true, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'C9C2AE', space: 4 } } } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: INK, font: FONT }, paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 2, keepNext: true } },
      ],
    },
    numbering: {
      config: [
        { reference: 'punkte', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
        ...numberedRefs.map((ref) => ({ reference: ref, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 340 } } } }] })),
      ],
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1418, bottom: 1418, left: 1418, right: 1418 } }, titlePage: true },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: `${rahmen.titel} · ${rahmen.untertitel}`, italics: true, size: 16, color: '8A7F6C' })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: '8A7F6C' })] })] }) },
      children: body,
    }],
  });
  return Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(outFile, buf); console.log(`${pflanzen.length} Pflanzen → ${outFile}`); });
}

build(process.argv[2] || path.join(BAND, 'Was-die-Natur-uns-schenkt-Band-1.docx'));
