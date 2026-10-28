// Erzeugt für jede Pflanze mit „zeichnung“-Merkmalen ein PNG in abbildungen/<id>.png.
// Aufruf: node zeichnungen-erzeugen.js [id …]   (ohne Argumente: alle)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { zeichne } = require('./zeichnung');

const BAND = path.join(__dirname, '..', process.env.BAND || 'band-1-kraeuter-wildpflanzen');
const dir = path.join(BAND, 'inhalt', 'pflanzen');
const outDir = path.join(BAND, 'abbildungen');
const only = process.argv.slice(2);

(async () => {
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: 1000, height: 1400 }, deviceScaleFactor: 1.5 });
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js')).sort()) {
    const pf = require(path.join(dir, f));
    if (!pf.zeichnung || pf.zeichnung.datei) continue;
    if (only.length && !only.includes(pf.id)) continue;
    const svg = zeichne({ name: pf.name, botanisch: pf.botanisch, ...pf.zeichnung });
    await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
    await page.screenshot({ path: path.join(outDir, `${pf.id}.png`), clip: { x: 0, y: 0, width: 1000, height: 1400 } });
    console.log('gezeichnet:', pf.id);
  }
  await b.close();
})();
