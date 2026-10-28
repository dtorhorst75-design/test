// Baut Band 1 mit festen Seitenzahlen in Inhaltsverzeichnis und Registern.
// 1. Durchlauf mit unsichtbaren Marken → PDF über LibreOffice → Seiten der Marken ablesen
// 2. Durchlauf mit diesen Seitenzahlen als fest eingetragene Feldwerte.
// Aufruf: node buch-bauen.js [ausgabe.docx]   (braucht LibreOffice und pdftotext)
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const BAND = path.join(__dirname, '..', 'band-1-kraeuter-wildpflanzen');
const ziel = process.argv[2] || path.join(BAND, 'Was-die-Natur-uns-schenkt-Band-1.docx');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'buch-'));
const entwurf = path.join(tmp, 'entwurf.docx');
const SOFFICE = '/mnt/skills/public/docx/scripts/office/soffice.py';

execFileSync('node', [path.join(__dirname, 'buch-docx.js'), '--marker', entwurf], { stdio: 'inherit' });
execFileSync('python3', [SOFFICE, '--headless', '--convert-to', 'pdf', '--outdir', tmp, entwurf], { stdio: 'ignore' });
const text = execFileSync('pdftotext', ['-layout', path.join(tmp, 'entwurf.pdf'), '-'], { maxBuffer: 1 << 28 }).toString();

const seiten = {};
text.split('\f').forEach((seite, i) => {
  for (const m of seite.matchAll(/⟦([A-Za-z0-9_]+)⟧/g)) if (!seiten[m[1]]) seiten[m[1]] = i + 1;
});
const seitenDatei = path.join(tmp, 'seiten.json');
fs.writeFileSync(seitenDatei, JSON.stringify(seiten));
console.log(`${Object.keys(seiten).length} Seitenzahlen ermittelt`);

execFileSync('node', [path.join(__dirname, 'buch-docx.js'), '--seiten', seitenDatei, ziel], { stdio: 'inherit' });
fs.rmSync(tmp, { recursive: true, force: true });
