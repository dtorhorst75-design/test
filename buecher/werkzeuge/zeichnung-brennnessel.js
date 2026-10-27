// Erzeugt eine botanische Illustration der Großen Brennnessel (Urtica dioica) als SVG.
// Aufruf: node zeichnung-brennnessel.js > brennnessel.svg
const W = 1000, H = 1400;
const INK = '#3b2f22', LEAF = '#7f9b5c', LEAF_DARK = '#5d7a3e', ROOT = '#c9a46a', PAPER = '#fbf6ea';
const out = [];
const f = (n) => n.toFixed(1);

// Blattumriss: herzförmige Basis, zugespitzt, grob gesägt. Lokale Achse von (0,0) zur Spitze (L,0).
function leafPath(L, Wd, teeth) {
  const edge = (side) => {
    const pts = [];
    for (let i = 0; i <= teeth; i++) {
      const t0 = i / teeth, t1 = (i + 0.55) / teeth;
      for (const [t, tooth] of [[t0, 0], [Math.min(t1, 1), 1]]) {
        const s = Math.pow(t, 0.7);
        const w = Wd * Math.sin(Math.PI * s) * (1 - 0.35 * t) * (1 + 0.14 * tooth * (1 - t));
        const x = L * t - 0.05 * L * Math.sin(Math.PI * s) * Math.pow(1 - t, 6) + tooth * 0.014 * L;
        pts.push([x, side * w]);
      }
    }
    return pts;
  };
  const up = edge(-1), down = edge(1).reverse();
  const pts = [[0, 0], ...up, [L, 0], ...down, [0, 0]];
  return 'M' + pts.map(([x, y]) => `${f(x)},${f(y)}`).join(' L') + ' Z';
}

function leaf(x, y, angle, L, Wd) {
  const teeth = Math.max(9, Math.round(L / 14));
  out.push(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(angle)})">`);
  out.push(`<path d="${leafPath(L, Wd, teeth)}" fill="${LEAF}" fill-opacity="0.78" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/>`);
  // Mittelrippe und Seitennerven
  out.push(`<path d="M0,0 Q${f(L * 0.5)},${f(-L * 0.02)} ${f(L * 0.97)},0" fill="none" stroke="${LEAF_DARK}" stroke-width="1.6"/>`);
  for (let k = 1; k <= 5; k++) {
    const t = k / 7, bx = L * t, len = Wd * Math.sin(Math.PI * Math.pow(t, 0.7)) * (1 - 0.35 * t) * 0.85;
    for (const s of [-1, 1]) {
      out.push(`<path d="M${f(bx)},0 Q${f(bx + len * 0.35)},${f(s * len * 0.45)} ${f(bx + len * 0.75)},${f(s * len * 0.9)}" fill="none" stroke="${LEAF_DARK}" stroke-width="0.9" stroke-opacity="0.85"/>`);
    }
  }
  // Brennhaare angedeutet
  for (let k = 0; k < 14; k++) {
    const t = 0.1 + 0.8 * ((k * 0.618) % 1), s = k % 2 ? 1 : -1;
    const w = Wd * Math.sin(Math.PI * Math.pow(t, 0.7)) * (1 - 0.35 * t) * (0.25 + 0.5 * ((k * 0.37) % 1));
    out.push(`<line x1="${f(L * t)}" y1="${f(s * w)}" x2="${f(L * t + 5)}" y2="${f(s * w - s * 5)}" stroke="${INK}" stroke-width="0.7"/>`);
  }
  out.push('</g>');
}

// Hängender Blütenstand (weiblich): Rispe aus kleinen Knäueln
function inflorescence(x, y, dir, len) {
  const steps = 9;
  let d = `M${f(x)},${f(y)}`;
  const pts = [];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const px = x + dir * len * 0.55 * Math.sin(t * 1.2), py = y + len * t * 0.95;
    pts.push([px, py]);
    d += ` L${f(px)},${f(py)}`;
  }
  out.push(`<path d="${d}" fill="none" stroke="${LEAF_DARK}" stroke-width="1.3"/>`);
  pts.forEach(([px, py], i) => {
    if (i % 1 === 0) for (let j = 0; j < 3; j++) {
      out.push(`<circle cx="${f(px + (j - 1) * 3.2)}" cy="${f(py + (j % 2) * 2)}" r="2.6" fill="#a7b77a" stroke="${INK}" stroke-width="0.6"/>`);
    }
  });
}

function label(x1, y1, x2, y2, text, anchor = 'start') {
  out.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${INK}" stroke-width="0.9" stroke-dasharray="3,2"/>`);
  out.push(`<circle cx="${f(x1)}" cy="${f(y1)}" r="2.2" fill="${INK}"/>`);
  const dx = anchor === 'end' ? -6 : 6;
  out.push(`<text x="${f(x2 + dx)}" y="${f(y2 + 5)}" text-anchor="${anchor}" font-family="Georgia, 'DejaVu Serif', serif" font-size="19" font-style="italic" fill="${INK}">${text}</text>`);
}

out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
out.push(`<rect width="${W}" height="${H}" fill="${PAPER}"/>`);
out.push(`<rect x="22" y="22" width="${W - 44}" height="${H - 44}" fill="none" stroke="${INK}" stroke-width="1.5"/>`);
out.push(`<rect x="30" y="30" width="${W - 60}" height="${H - 60}" fill="none" stroke="${INK}" stroke-width="0.6"/>`);

// Boden
const G = 1040;
out.push(`<path d="M60,${G} C200,${G - 6} 420,${G + 5} 640,${G - 3}" fill="none" stroke="${INK}" stroke-width="1.4"/>`);
for (let i = 0; i < 40; i++) {
  const x = 70 + i * 14.5;
  out.push(`<line x1="${x}" y1="${G + 4}" x2="${x - 8}" y2="${G + 14}" stroke="${INK}" stroke-width="0.6" stroke-opacity="0.5"/>`);
}

// Wurzelstock mit Ausläufer
const SX = 330;
out.push(`<path d="M150,${G + 40} C230,${G + 22} 290,${G + 30} ${SX},${G + 18} C380,${G + 30} 470,${G + 48} 580,${G + 36}" fill="none" stroke="${ROOT}" stroke-width="13" stroke-linecap="round"/>`);
out.push(`<path d="M150,${G + 40} C230,${G + 22} 290,${G + 30} ${SX},${G + 18} C380,${G + 30} 470,${G + 48} 580,${G + 36}" fill="none" stroke="${INK}" stroke-width="1.2"/>`);
// Knoten am Wurzelstock und Faserwurzeln
for (const nx of [190, 250, 330, 400, 470, 540]) {
  for (let k = 0; k < 5; k++) {
    const ang = (k - 2) * 0.35, len = 45 + ((nx * 7 + k * 13) % 50);
    const y0 = G + 34 + (nx % 3) * 3;
    out.push(`<path d="M${nx},${y0} q${f(Math.sin(ang) * len * 0.4)},${f(len * 0.5)} ${f(Math.sin(ang) * len)},${f(len)}" fill="none" stroke="${INK}" stroke-width="0.8"/>`);
  }
}
// Jungtrieb am Ausläufer
out.push(`<path d="M560,${G + 34} C562,${G} 566,${G - 40} 562,${G - 90}" fill="none" stroke="${LEAF_DARK}" stroke-width="5"/>`);
leaf(562, G - 70, -35, 60, 22);
leaf(562, G - 70, -145, 60, 22);
leaf(562, G - 90, -70, 34, 13);
leaf(562, G - 90, -110, 34, 13);

// Hauptstängel (vierkantig angedeutet durch Doppellinie)
const stem = `M${SX},${G + 18} C${SX - 6},${G - 250} ${SX + 14},${G - 600} ${SX + 4},${G - 900}`;
out.push(`<path d="${stem}" fill="none" stroke="${LEAF_DARK}" stroke-width="11" stroke-linecap="round"/>`);
out.push(`<path d="${stem}" fill="none" stroke="${INK}" stroke-width="1.1" transform="translate(-4,0)"/>`);
out.push(`<path d="${stem}" fill="none" stroke="${INK}" stroke-width="1.1" transform="translate(4,0)"/>`);
out.push(`<path d="${stem}" fill="none" stroke="#c8d6a8" stroke-width="1" stroke-opacity="0.9" transform="translate(1,0)"/>`);
// Haare am Stängel
for (let y = G - 10; y > G - 890; y -= 22) {
  const sx = SX + 4 + Math.sin((G - y) / 140) * 6;
  out.push(`<line x1="${f(sx - 5)}" y1="${y}" x2="${f(sx - 13)}" y2="${y - 6}" stroke="${INK}" stroke-width="0.7"/>`);
  out.push(`<line x1="${f(sx + 5)}" y1="${y - 10}" x2="${f(sx + 13)}" y2="${y - 16}" stroke="${INK}" stroke-width="0.7"/>`);
}

// Gegenständige Blattpaare, nach oben kleiner
const nodes = [
  { y: G - 120, L: 215, w: 62, a: 28 },
  { y: G - 290, L: 225, w: 66, a: 24 },
  { y: G - 450, L: 205, w: 60, a: 18 },
  { y: G - 600, L: 175, w: 52, a: 10 },
  { y: G - 730, L: 135, w: 40, a: 0 },
  { y: G - 830, L: 90, w: 28, a: -16 },
];
nodes.forEach((n, i) => {
  const x = SX + 4 + Math.sin((G - n.y) / 140) * 6;
  leaf(x + 4, n.y, n.a, n.L, n.w);
  leaf(x - 4, n.y, 180 - n.a, n.L, n.w);
  if (i >= 1 && i <= 3) {
    inflorescence(x - 8, n.y + 6, -1, 125 - i * 10);
    inflorescence(x + 8, n.y + 6, 1, 125 - i * 10);
  }
  out.push(`<ellipse cx="${f(x)}" cy="${f(n.y)}" rx="7" ry="4" fill="${LEAF_DARK}" stroke="${INK}" stroke-width="0.8"/>`);
});
// Triebspitze
const TX = SX + 4, TY = G - 900;
leaf(TX, TY + 10, -60, 42, 15);
leaf(TX, TY + 10, -120, 42, 15);
out.push(`<ellipse cx="${TX}" cy="${TY - 4}" rx="7" ry="14" fill="${LEAF}" stroke="${INK}" stroke-width="1"/>`);

// Detail 1: Brennhaar vergrößert
const BX = 790, BY = 230;
out.push(`<circle cx="${BX}" cy="${BY}" r="105" fill="#fffdf6" stroke="${INK}" stroke-width="1.3"/>`);
out.push(`<path d="M${BX - 80},${BY + 70} L${BX + 80},${BY + 70}" stroke="${INK}" stroke-width="1"/>`);
out.push(`<path d="M${BX - 26},${BY + 70} C${BX - 30},${BY + 30} ${BX - 12},${BY + 18} ${BX - 4},${BY - 10} L${BX - 1},${BY - 80} L${BX + 1},${BY - 80} L${BX + 4},${BY - 10} C${BX + 12},${BY + 18} ${BX + 30},${BY + 30} ${BX + 26},${BY + 70} Z" fill="#e8efd6" stroke="${INK}" stroke-width="1.2"/>`);
out.push(`<circle cx="${BX + 1}" cy="${BY - 84}" r="3.5" fill="#fffdf6" stroke="${INK}" stroke-width="1"/>`);
out.push(`<text x="${BX}" y="${BY + 128}" text-anchor="middle" font-family="Georgia, 'DejaVu Serif', serif" font-size="17" font-style="italic" fill="${INK}">Brennhaar, stark vergrößert</text>`);
label(BX + 2, BY - 84, BX + 60, BY - 95, 'Köpfchen');
label(BX + 18, BY + 45, BX + 60, BY + 20, 'Reizstoffe');

// Detail 2: weibliche Blüte mit Samen
const CX = 800, CY = 770;
out.push(`<circle cx="${CX}" cy="${CY}" r="88" fill="#fffdf6" stroke="${INK}" stroke-width="1.3"/>`);
out.push(`<path d="M${CX - 70},${CY - 40} C${CX - 20},${CY - 30} ${CX + 20},${CY + 10} ${CX + 60},${CY + 50}" fill="none" stroke="${LEAF_DARK}" stroke-width="2"/>`);
for (let i = 0; i < 6; i++) {
  const px = CX - 55 + i * 21, py = CY - 34 + i * 15;
  out.push(`<ellipse cx="${px}" cy="${py + 12}" rx="8" ry="11" fill="#b8a46e" stroke="${INK}" stroke-width="0.9" transform="rotate(25 ${px} ${py + 12})"/>`);
  out.push(`<path d="M${px - 9},${py + 6} q-4,10 2,18 M${px + 9},${py + 6} q4,10 -2,18" fill="none" stroke="${LEAF_DARK}" stroke-width="1"/>`);
}
out.push(`<text x="${CX}" y="${CY + 112}" text-anchor="middle" font-family="Georgia, 'DejaVu Serif', serif" font-size="17" font-style="italic" fill="${INK}">Samenstand (weiblich), vergrößert</text>`);

// Detail 3: Blattrand
const DX = 800, DY = 1020;
out.push(`<circle cx="${DX}" cy="${DY}" r="78" fill="#fffdf6" stroke="${INK}" stroke-width="1.3"/>`);
let saw = `M${DX - 70},${DY + 40}`;
for (let i = 0; i < 7; i++) { const x = DX - 70 + i * 20; saw += ` L${x + 14},${DY - 20 - i * 3} L${x + 20},${DY - 8 - i * 3}`; }
saw += ` L${DX + 70},${DY + 50} Z`;
out.push(`<clipPath id="rand"><circle cx="${DX}" cy="${DY}" r="76"/></clipPath>`);
out.push(`<path clip-path="url(#rand)" d="${saw}" fill="${LEAF}" fill-opacity="0.78" stroke="${INK}" stroke-width="1.2"/>`);
out.push(`<text x="${DX}" y="${DY + 102}" text-anchor="middle" font-family="Georgia, 'DejaVu Serif', serif" font-size="17" font-style="italic" fill="${INK}">grob gesägter Blattrand</text>`);

// Beschriftungen
label(TX + 4, TY - 10, 470, TY - 40, 'Triebspitze – Erntegut im Frühling');
label(SX + 150, G - 450 + 40, 600, G - 470, 'Blatt: gegenständig, gesägt');
label(SX + 56, G - 600 + 88, 600, G - 570, 'Blütenrispe ♀, hängend');
label(SX + 10, G - 665, 600, G - 665, 'Stängel: vierkantig, behaart');
label(250, G + 26, 150, G + 150, 'Wurzelstock (gelblich)');
label(500, G + 44, 470, G + 150, 'Ausläufer mit Jungtrieb');

// Titel
out.push(`<text x="${W / 2}" y="${H - 120}" text-anchor="middle" font-family="Georgia, 'DejaVu Serif', serif" font-size="42" fill="${INK}">Große Brennnessel</text>`);
out.push(`<text x="${W / 2}" y="${H - 78}" text-anchor="middle" font-family="Georgia, 'DejaVu Serif', serif" font-size="26" font-style="italic" fill="${INK}">Urtica dioica L. · Brennnesselgewächse</text>`);
out.push('</svg>');
process.stdout.write(out.join('\n'));
