// Parametrische botanische Zeichnungen für die Pflanzenkapitel.
// zeichne(z) liefert ein SVG (1000 × 1400) aus einer Merkmalsbeschreibung z (siehe pflanzen/*.js, Feld „zeichnung“).
const W = 1000, H = 1400, GROUND = 900;
const INK = '#3b2f22', LEAF = '#7f9b5c', LEAF_DARK = '#5d7a3e', ROOT = '#c9a46a', PAPER = '#fbf6ea', CREAM = '#fffdf6';
const FONT = `Georgia, 'DejaVu Serif', serif`;
const f = (n) => n.toFixed(1);

// deterministischer Zufall, damit jede Pflanze immer gleich aussieht
function rng(seed) {
  let s = 0;
  for (const c of seed) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

// ---------- Blattformen (lokal: Basis (0,0), Spitze (L,0)) ----------
function profile(shape, t) {
  switch (shape) {
    case 'lanzett': return Math.sin(Math.PI * Math.pow(t, 0.85)) * (1 - 0.2 * t);
    case 'linear': return 0.55 + 0.45 * Math.sin(Math.PI * t) * (t < 0.85 ? 1 : (1 - t) / 0.15);
    case 'herz': return Math.sin(Math.PI * Math.pow(t, 0.55)) * (1 - 0.3 * t);
    case 'rund': return Math.sin(Math.PI * Math.pow(t, 0.95));
    case 'spatel': return Math.sin(Math.PI * Math.pow(t, 1.7));
    case 'elliptisch': return Math.sin(Math.PI * Math.pow(t, 0.8));
    default: return Math.sin(Math.PI * Math.pow(t, 0.7)) * (1 - 0.35 * t); // eiförmig
  }
}
function simpleLeafPath(L, Wd, shape, rand, teeth = 'gesaegt') {
  const n = Math.max(8, Math.round(L / 13));
  const lobe = shape === 'herz' ? 0.13 : shape === 'rund' ? 0.06 : 0.04;
  const edge = (side) => {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const seq = teeth === 'glatt' ? [[i / n, 0]] : [[i / n, 0], [Math.min((i + 0.55) / n, 1), 1]];
      for (const [t, tooth] of seq) {
        let amp = 0;
        if (tooth && teeth === 'gesaegt') amp = 0.13;
        if (tooth && teeth === 'gekerbt') amp = 0.08;
        if (tooth && teeth === 'gelappt') amp = 0.28;
        const w = Wd * profile(shape, t) * (1 + amp * (1 - t * 0.6));
        const x = L * t - lobe * L * Math.sin(Math.PI * Math.pow(t, 0.6)) * Math.pow(1 - t, 6) + tooth * 0.012 * L;
        pts.push([x, side * w]);
      }
    }
    return pts;
  };
  const up = edge(-1), down = edge(1).reverse();
  return 'M' + [[0, 0], ...up, [L, 0], ...down, [0, 0]].map(([x, y]) => `${f(x)},${f(y)}`).join(' L') + ' Z';
}

class Canvas {
  constructor(seed) { this.o = []; this.r = rng(seed); }
  add(s) { this.o.push(s); }
  // einfaches Blatt
  leaf(x, y, ang, L, Wd, shape = 'eifoermig', teeth = 'gesaegt', fill = LEAF) {
    if (shape === 'fiedrig') return this.pinnate(x, y, ang, L, Wd, false, fill);
    if (shape === 'doppelfiedrig') return this.pinnate(x, y, ang, L, Wd, true, fill);
    if (shape === 'fein') return this.feathery(x, y, ang, L);
    if (shape === 'dreizaehlig') return this.ternate(x, y, ang, L, Wd, fill);
    if (shape === 'handfoermig') return this.palmate(x, y, ang, L, fill, teeth);
    if (shape === 'gefingert') return this.digitate(x, y, ang, L, Wd, fill);
    if (shape === 'schrotsaege') return this.runcinate(x, y, ang, L, Wd, fill);
    if (shape === 'nadel') return this.needle(x, y, ang, L);
    if (shape === 'schild') return this.peltate(x, y, ang, L, fill);
    if (shape === 'roehre') return this.tube(x, y, ang, L, Wd);
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})">`);
    this.add(`<path d="${simpleLeafPath(L, Wd, shape, this.r, teeth)}" fill="${fill}" fill-opacity="0.82" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>`);
    this.add(`<path d="M0,0 L${f(L * 0.96)},0" stroke="${LEAF_DARK}" stroke-width="1.4"/>`);
    if (shape !== 'linear') for (let k = 1; k <= 5; k++) {
      const t = k / 7, bx = L * t, len = Wd * profile(shape, t) * 0.8;
      for (const s of [-1, 1]) this.add(`<path d="M${f(bx)},0 Q${f(bx + len * 0.35)},${f(s * len * 0.45)} ${f(bx + len * 0.7)},${f(s * len * 0.88)}" fill="none" stroke="${LEAF_DARK}" stroke-width="0.8"/>`);
    } else for (const s of [-1, 1]) this.add(`<path d="M${f(L * 0.05)},${f(s * Wd * 0.35)} L${f(L * 0.92)},${f(s * Wd * 0.2)}" stroke="${LEAF_DARK}" stroke-width="0.6"/>`);
    this.add('</g>');
  }
  pinnate(x, y, ang, L, Wd, double, fill) {
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})">`);
    this.add(`<path d="M0,0 L${f(L)},0" stroke="${LEAF_DARK}" stroke-width="1.6"/>`);
    const pairs = double ? 6 : 4;
    for (let i = 1; i <= pairs; i++) {
      const t = i / (pairs + 0.6), sl = L * 0.36 * (1 - t * 0.45), sw = Wd * 0.32 * (1 - t * 0.4);
      for (const s of [-1, 1]) {
        if (double) this.pinnate(L * t, 0, s * 55, sl * 1.2, sw * 1.3, false, fill);
        else this.leafLocal(L * t, 0, s * 50, sl, sw, fill);
      }
    }
    if (!double) this.leafLocal(L, 0, 0, L * 0.28, Wd * 0.28, fill);
    this.add('</g>');
  }
  digitate(x, y, ang, L, Wd, fill) { // gefingertes Blatt (Rosskastanie): 5 bis 7 Blättchen an einem Punkt
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})">`);
    const p = L * 0.35;
    this.add(`<path d="M0,0 L${f(p)},0" stroke="${LEAF_DARK}" stroke-width="1.6"/>`);
    for (const [a, k] of [[-70, 0.6], [-35, 0.85], [0, 1], [35, 0.85], [70, 0.6]]) this.add(`<g transform="translate(${f(p)},0) rotate(${a})"><path d="${simpleLeafPath(L * 0.7 * k, Wd * 0.3 * k, 'spatel', this.r, 'gesaegt')}" fill="${fill}" fill-opacity="0.82" stroke="${INK}" stroke-width="1.1"/><path d="M0,0 L${f(L * 0.65 * k)},0" stroke="${LEAF_DARK}" stroke-width="0.8"/></g>`);
    this.add('</g>');
  }
  leafLocal(x, y, ang, L, Wd, fill) {
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})"><path d="${simpleLeafPath(L, Wd, 'eifoermig', this.r, 'gesaegt')}" fill="${fill}" fill-opacity="0.82" stroke="${INK}" stroke-width="1.1"/><path d="M0,0 L${f(L * 0.9)},0" stroke="${LEAF_DARK}" stroke-width="0.8"/></g>`);
  }
  feathery(x, y, ang, L) {
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})">`);
    this.add(`<path d="M0,0 L${f(L)},0" stroke="${LEAF_DARK}" stroke-width="1.4"/>`);
    for (let i = 1; i <= 8; i++) {
      const t = i / 9, l = L * 0.3 * (1 - t * 0.6);
      for (const s of [-1, 1]) {
        const bx = L * t, ex = bx + l * 0.6, ey = s * l;
        this.add(`<path d="M${f(bx)},0 L${f(ex)},${f(ey)}" stroke="${LEAF_DARK}" stroke-width="1.1"/>`);
        for (let j = 1; j <= 3; j++) {
          const px = bx + (ex - bx) * j / 3.5, py = ey * j / 3.5;
          this.add(`<path d="M${f(px)},${f(py)} l${f(l * 0.25)},${f(s * l * 0.12)} M${f(px)},${f(py)} l${f(l * 0.05)},${f(s * l * 0.3)}" stroke="${LEAF_DARK}" stroke-width="0.9"/>`);
        }
      }
    }
    this.add('</g>');
  }
  ternate(x, y, ang, L, Wd, fill) {
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})">`);
    const p = L * 0.4;
    this.add(`<path d="M0,0 L${f(p)},0" stroke="${LEAF_DARK}" stroke-width="1.6"/>`);
    for (const a of [-50, 0, 50]) this.leafLocal(p, 0, a, L * 0.62, Wd * 0.5, fill);
    this.add('</g>');
  }
  palmate(x, y, ang, L, fill, teeth) {
    const R = L * 0.5;
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})">`);
    this.add(`<path d="M0,0 L${f(L * 0.35)},0" stroke="${LEAF_DARK}" stroke-width="1.4"/>`);
    const cx = L * 0.35 + R * 0.9;
    let d = '';
    const lobes = 7, N = 140;
    for (let i = 0; i <= N; i++) {
      const a = Math.PI + (i / N) * 2 * Math.PI * 0.92 - Math.PI * 0.92 + Math.PI * 0.08;
      const lob = 0.82 + 0.18 * Math.abs(Math.cos(lobes * a / 2));
      const tooth = teeth === 'glatt' ? 0 : 0.035 * Math.sin(i * 1.7);
      const r = R * (lob + tooth);
      d += (i ? ' L' : 'M') + f(cx + r * Math.cos(a)) + ',' + f(r * Math.sin(a));
    }
    this.add(`<path d="${d} Z" fill="${fill}" fill-opacity="0.82" stroke="${INK}" stroke-width="1.4"/>`);
    for (let k = 0; k < lobes; k++) {
      const a = Math.PI - Math.PI * 0.9 + k * (Math.PI * 1.8 / (lobes - 1)) + Math.PI;
      this.add(`<path d="M${f(L * 0.35 + R * 0.15)},0 L${f(cx + R * 0.8 * Math.cos(a))},${f(R * 0.8 * Math.sin(a))}" stroke="${LEAF_DARK}" stroke-width="0.9"/>`);
    }
    this.add('</g>');
  }
  runcinate(x, y, ang, L, Wd, fill) {
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})">`);
    const pts = [[0, 0]];
    const n = 6;
    for (let i = 0; i < n; i++) {
      const t0 = i / n, t1 = (i + 0.7) / n, w = Wd * (0.35 + 0.65 * t0);
      pts.push([L * t0, -w * 0.25], [L * (t0 + 0.02), -w]);
      pts.push([L * t1, -w * 0.35]);
    }
    pts.push([L, 0]);
    const low = pts.slice(1, -1).map(([px, py]) => [px, -py]).reverse();
    const all = [...pts, ...low, [0, 0]];
    this.add(`<path d="M${all.map(([a, b]) => `${f(a)},${f(b)}`).join(' L')} Z" fill="${fill}" fill-opacity="0.82" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/>`);
    this.add(`<path d="M0,0 L${f(L * 0.95)},0" stroke="#d9c9a0" stroke-width="2.2"/>`);
    this.add('</g>');
  }
  needle(x, y, ang, L) {
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})"><path d="M0,-2 L${f(L)},0 L0,2 Z" fill="${LEAF_DARK}" stroke="${INK}" stroke-width="0.7"/></g>`);
  }
  peltate(x, y, ang, L, fill) {
    const r = L * 0.42;
    const cx = x + Math.cos(ang * Math.PI / 180) * L * 0.6, cy = y + Math.sin(ang * Math.PI / 180) * L * 0.6;
    this.add(`<path d="M${f(x)},${f(y)} L${f(cx)},${f(cy)}" stroke="${LEAF_DARK}" stroke-width="1.6"/>`);
    this.add(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${fill}" fill-opacity="0.85" stroke="${INK}" stroke-width="1.4"/>`);
    for (let k = 0; k < 9; k++) {
      const a = k * Math.PI * 2 / 9;
      this.add(`<path d="M${f(cx)},${f(cy)} L${f(cx + r * 0.92 * Math.cos(a))},${f(cy + r * 0.92 * Math.sin(a))}" stroke="${LEAF_DARK}" stroke-width="0.8"/>`);
    }
  }
  tube(x, y, ang, L, Wd) {
    this.add(`<g transform="translate(${f(x)},${f(y)}) rotate(${f(ang)})"><path d="M0,${f(-Wd / 2)} C${f(L * 0.5)},${f(-Wd / 2)} ${f(L * 0.9)},${f(-Wd / 3)} ${f(L)},0 C${f(L * 0.9)},${f(Wd / 3)} ${f(L * 0.5)},${f(Wd / 2)} 0,${f(Wd / 2)} Z" fill="${LEAF}" fill-opacity="0.85" stroke="${INK}" stroke-width="1.2"/><path d="M0,0 L${f(L * 0.95)},0" stroke="${LEAF_DARK}" stroke-width="0.6"/></g>`);
  }

  // ---------- Blüten ----------
  flower(type, x, y, s, color, center = '#e9c33b') {
    const r = this.r;
    switch (type) {
      case 'korb': { // Zungen- und Röhrenblüten (Kamille, Gänseblümchen, Arnika, Ringelblume)
        const n = 18;
        for (let i = 0; i < n; i++) {
          const a = i * 360 / n;
          this.add(`<ellipse cx="${f(x)}" cy="${f(y - s * 0.62)}" rx="${f(s * 0.16)}" ry="${f(s * 0.45)}" transform="rotate(${f(a)} ${f(x)} ${f(y)})" fill="${color}" stroke="${INK}" stroke-width="0.8"/>`);
        }
        this.add(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * 0.32)}" fill="${center}" stroke="${INK}" stroke-width="1"/>`);
        for (let i = 0; i < 10; i++) this.add(`<circle cx="${f(x + (r() - 0.5) * s * 0.4)}" cy="${f(y + (r() - 0.5) * s * 0.4)}" r="${f(s * 0.035)}" fill="${INK}" fill-opacity="0.35"/>`);
        break;
      }
      case 'zungen': { // nur Zungenblüten (Löwenzahn, Wegwarte)
        for (let ring = 0; ring < 3; ring++) {
          const n = 22 - ring * 5, len = s * (0.95 - ring * 0.25);
          for (let i = 0; i < n; i++) {
            const a = i * 360 / n + ring * 7;
            this.add(`<path d="M${f(x)},${f(y)} l${f(-s * 0.07)},${f(-len)} l${f(s * 0.07)},${f(-len * 0.05)} l${f(s * 0.07)},${f(len * 0.05)} Z" transform="rotate(${f(a)} ${f(x)} ${f(y)})" fill="${color}" stroke="${INK}" stroke-width="0.6"/>`);
          }
        }
        this.add(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * 0.12)}" fill="${color}" stroke="${INK}" stroke-width="0.8"/>`);
        break;
      }
      case 'fuenf': case 'stern': {
        const n = 5;
        for (let i = 0; i < n; i++) {
          const a = i * 72;
          if (type === 'stern') this.add(`<path d="M${f(x)},${f(y)} L${f(x - s * 0.2)},${f(y - s * 0.4)} L${f(x)},${f(y - s)} L${f(x + s * 0.2)},${f(y - s * 0.4)} Z" transform="rotate(${f(a)} ${f(x)} ${f(y)})" fill="${color}" stroke="${INK}" stroke-width="0.9"/>`);
          else this.add(`<ellipse cx="${f(x)}" cy="${f(y - s * 0.5)}" rx="${f(s * 0.36)}" ry="${f(s * 0.5)}" transform="rotate(${f(a)} ${f(x)} ${f(y)})" fill="${color}" stroke="${INK}" stroke-width="0.9"/>`);
        }
        this.add(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * 0.16)}" fill="${center}" stroke="${INK}" stroke-width="0.8"/>`);
        break;
      }
      case 'kreuz': { // Kreuzblütler: vier Blütenblätter
        for (let i = 0; i < 4; i++) this.add(`<ellipse cx="${f(x)}" cy="${f(y - s * 0.45)}" rx="${f(s * 0.3)}" ry="${f(s * 0.42)}" transform="rotate(${f(i * 90 + 45)} ${f(x)} ${f(y)})" fill="${color}" stroke="${INK}" stroke-width="0.8"/>`);
        this.add(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * 0.12)}" fill="${center}"/>`);
        break;
      }
      case 'mohn': {
        for (let i = 0; i < 4; i++) this.add(`<ellipse cx="${f(x)}" cy="${f(y - s * 0.5)}" rx="${f(s * 0.55)}" ry="${f(s * 0.55)}" transform="rotate(${f(i * 90 + 20)} ${f(x)} ${f(y)})" fill="${color}" fill-opacity="0.92" stroke="${INK}" stroke-width="0.9"/>`);
        this.add(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * 0.22)}" fill="#2d2a26"/>`);
        break;
      }
      case 'lippe': { // Lippenblüte
        this.add(`<path d="M${f(x)},${f(y)} C${f(x + s * 0.5)},${f(y - s * 0.2)} ${f(x + s * 0.8)},${f(y - s * 0.7)} ${f(x + s * 0.5)},${f(y - s * 0.9)} C${f(x + s * 0.3)},${f(y - s * 0.6)} ${f(x + s * 0.2)},${f(y - s * 0.3)} ${f(x)},${f(y)} Z" fill="${color}" stroke="${INK}" stroke-width="0.8"/>`);
        this.add(`<path d="M${f(x + s * 0.2)},${f(y - s * 0.1)} C${f(x + s * 0.6)},${f(y)} ${f(x + s * 0.9)},${f(y + s * 0.2)} ${f(x + s * 0.7)},${f(y + s * 0.4)} C${f(x + s * 0.5)},${f(y + s * 0.2)} ${f(x + s * 0.3)},${f(y + s * 0.05)} ${f(x + s * 0.2)},${f(y - s * 0.1)} Z" fill="${color}" stroke="${INK}" stroke-width="0.8"/>`);
        break;
      }
      case 'glocke': {
        this.add(`<path d="M${f(x - s * 0.3)},${f(y)} C${f(x - s * 0.35)},${f(y + s * 0.5)} ${f(x - s * 0.45)},${f(y + s * 0.8)} ${f(x - s * 0.5)},${f(y + s)} L${f(x + s * 0.5)},${f(y + s)} C${f(x + s * 0.45)},${f(y + s * 0.8)} ${f(x + s * 0.35)},${f(y + s * 0.5)} ${f(x + s * 0.3)},${f(y)} Z" fill="${color}" stroke="${INK}" stroke-width="0.9"/>`);
        break;
      }
      case 'kugel': { // kugeliger Blütenstand (Schnittlauch, Klee)
        this.add(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * 0.6)}" fill="${color}" fill-opacity="0.85" stroke="${INK}" stroke-width="1"/>`);
        for (let i = 0; i < 26; i++) {
          const a = r() * Math.PI * 2, rr = Math.sqrt(r()) * s * 0.55;
          this.add(`<path d="M${f(x + Math.cos(a) * rr)},${f(y + Math.sin(a) * rr)} l${f(Math.cos(a) * s * 0.12)},${f(Math.sin(a) * s * 0.12)}" stroke="${INK}" stroke-width="0.7"/>`);
        }
        break;
      }
      case 'distel': { // Röhrenblüten-Köpfchen mit Hüllblättern (Klette, Kornblume, Karde)
        this.add(`<path d="M${f(x - s * 0.4)},${f(y)} Q${f(x)},${f(y + s * 0.7)} ${f(x + s * 0.4)},${f(y)} Z" fill="${LEAF}" stroke="${INK}" stroke-width="0.9"/>`);
        for (let i = 0; i < 7; i++) this.add(`<path d="M${f(x - s * 0.35 + i * s * 0.12)},${f(y + s * 0.12)} l${f(-s * 0.05)},${f(s * 0.12)}" stroke="${INK}" stroke-width="0.7"/>`);
        for (let i = 0; i < 14; i++) {
          const a = -160 + i * 140 / 13;
          this.add(`<path d="M${f(x)},${f(y)} l${f(Math.cos(a * Math.PI / 180) * s * 0.55)},${f(Math.sin(a * Math.PI / 180) * s * 0.55)}" stroke="${color}" stroke-width="${f(s * 0.08)}" stroke-linecap="round"/>`);
        }
        break;
      }
      case 'zapfen': { // Hopfen
        for (let i = 0; i < 6; i++) this.add(`<ellipse cx="${f(x + (i % 2 ? 4 : -4))}" cy="${f(y + i * s * 0.18)}" rx="${f(s * 0.3)}" ry="${f(s * 0.16)}" fill="#c6d49a" stroke="${INK}" stroke-width="0.8"/>`);
        break;
      }
      case 'kaetzchen': { // hängendes Kätzchen (Birke, Hasel, Weide, Eiche, Walnuss)
        for (let i = 0; i < 11; i++) this.add(`<ellipse cx="${f(x + Math.sin(i * 0.5) * s * 0.05)}" cy="${f(y + i * s * 0.11)}" rx="${f(s * 0.11 * (1 - i * 0.03))}" ry="${f(s * 0.08)}" fill="${color}" stroke="${INK}" stroke-width="0.6"/>`);
        break;
      }
      default: { // kleine Einzelblüte
        this.add(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * 0.3)}" fill="${color}" stroke="${INK}" stroke-width="0.8"/>`);
      }
    }
  }

  inflorescence(kind, x, y, s, color, center) {
    const r = this.r;
    switch (kind) {
      case 'dolde': { // Doppeldolde
        const rays = 9;
        for (let i = 0; i < rays; i++) {
          const a = (-150 + i * 120 / (rays - 1)) * Math.PI / 180, len = s * (0.8 + 0.2 * Math.sin(i));
          const ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len * 0.75;
          this.add(`<path d="M${f(x)},${f(y)} L${f(ex)},${f(ey)}" stroke="${LEAF_DARK}" stroke-width="1"/>`);
          for (let j = 0; j < 7; j++) {
            const b = (-160 + j * 140 / 6) * Math.PI / 180, l2 = s * 0.18;
            const fx = ex + Math.cos(b) * l2, fy = ey + Math.sin(b) * l2 * 0.7;
            this.add(`<path d="M${f(ex)},${f(ey)} L${f(fx)},${f(fy)}" stroke="${LEAF_DARK}" stroke-width="0.6"/><circle cx="${f(fx)}" cy="${f(fy)}" r="${f(s * 0.035)}" fill="${color}" stroke="${INK}" stroke-width="0.5"/>`);
          }
        }
        break;
      }
      case 'aehre': { // Ähre/Scheinähre (Lavendel, Wegerich, Königskerze)
        for (let i = 0; i < 14; i++) {
          const py = y - i * s * 0.11, side = i % 2 ? 1 : -1, sz = s * 0.3 * (1 - i * 0.03);
          this.flower(center === 'lippe' ? 'lippe' : 'punkt', x + side * s * 0.08, py, sz, color);
        }
        break;
      }
      case 'rispe': { // lockere Rispe aus vielen kleinen Blüten (Mädesüß, Goldrute, Baldrian)
        for (let i = 0; i < 40; i++) {
          const a = r() * Math.PI, rr = Math.sqrt(r()) * s * 0.6;
          const px = x + Math.cos(a + Math.PI) * rr * 0.9, py = y - Math.sin(a) * rr * 0.7;
          this.add(`<path d="M${f(x)},${f(y + s * 0.1)} L${f(px)},${f(py)}" stroke="${LEAF_DARK}" stroke-width="0.4" stroke-opacity="0.7"/><circle cx="${f(px)}" cy="${f(py)}" r="${f(s * 0.045)}" fill="${color}" stroke="${INK}" stroke-width="0.5"/>`);
        }
        break;
      }
      case 'traube': { // Traube aus Kreuzblüten
        this.add(`<path d="M${f(x)},${f(y + s * 0.2)} L${f(x)},${f(y - s * 1.1)}" stroke="${LEAF_DARK}" stroke-width="2"/>`);
        for (let i = 0; i < 7; i++) {
          const py = y - i * s * 0.17, px = x + (i % 2 ? s * 0.2 : -s * 0.2);
          this.add(`<path d="M${f(x)},${f(py + s * 0.08)} L${f(px)},${f(py)}" stroke="${LEAF_DARK}" stroke-width="1"/>`);
          this.flower('kreuz', px, py, s * 0.3 * (1 - i * 0.06), color, center);
        }
        break;
      }
      default: this.flower(kind, x, y, s, color, center);
    }
  }
}

// ---------- Wurzeln ----------
function roots(c, type, x, y) {
  if (type === 'pfahl' || type === 'ruebe') {
    const w = type === 'ruebe' ? 22 : 12;
    c.add(`<path d="M${x - w},${y} C${x - w * 0.8},${y + 60} ${x - 4},${y + 130} ${x},${y + 150} C${x + 4},${y + 130} ${x + w * 0.8},${y + 60} ${x + w},${y} Z" fill="${ROOT}" stroke="${INK}" stroke-width="1.2"/>`);
    for (let i = 0; i < 6; i++) { const yy = y + 25 + i * 20, s = i % 2 ? 1 : -1; c.add(`<path d="M${x + s * 6},${yy} q${s * 20},${10} ${s * 34},${30}" fill="none" stroke="${INK}" stroke-width="0.8"/>`); }
  } else if (type === 'zwiebel') {
    c.add(`<path d="M${x - 26},${y + 50} C${x - 34},${y + 20} ${x - 14},${y - 6} ${x},${y - 8} C${x + 14},${y - 6} ${x + 34},${y + 20} ${x + 26},${y + 50} Z" fill="#efe2c4" stroke="${INK}" stroke-width="1.2"/>`);
    for (let i = 0; i < 9; i++) c.add(`<path d="M${x - 20 + i * 5},${y + 50} q${(i - 4) * 4},30 ${(i - 4) * 8},${60 + (i % 3) * 10}" fill="none" stroke="${INK}" stroke-width="0.8"/>`);
  } else if (type === 'rhizom') {
    c.add(`<path d="M${x - 170},${y + 30} C${x - 100},${y + 12} ${x - 40},${y + 22} ${x},${y + 10} C${x + 60},${y + 22} ${x + 120},${y + 38} ${x + 200},${y + 28}" fill="none" stroke="${ROOT}" stroke-width="13" stroke-linecap="round"/>`);
    c.add(`<path d="M${x - 170},${y + 30} C${x - 100},${y + 12} ${x - 40},${y + 22} ${x},${y + 10} C${x + 60},${y + 22} ${x + 120},${y + 38} ${x + 200},${y + 28}" fill="none" stroke="${INK}" stroke-width="1"/>`);
    for (const nx of [-140, -80, 0, 70, 140]) for (let k = 0; k < 4; k++) c.add(`<path d="M${x + nx},${y + 26} q${(k - 1.5) * 8},${25} ${(k - 1.5) * 16},${50 + k * 8}" fill="none" stroke="${INK}" stroke-width="0.8"/>`);
  } else { // Faserwurzeln
    for (let k = 0; k < 14; k++) {
      const a = -80 + k * 160 / 13, len = 60 + (k * 37) % 50;
      c.add(`<path d="M${x},${y} q${f(Math.sin(a * Math.PI / 180) * len * 0.4)},${f(len * 0.5)} ${f(Math.sin(a * Math.PI / 180) * len)},${f(len)}" fill="none" stroke="${INK}" stroke-width="0.8"/>`);
    }
  }
}

// ---------- Wuchsformen ----------
function plant(c, z) {
  const X = 320, color = z.farbe || '#f4f1e6', center = z.mitte || (z.einzelbluete === 'lippe' ? 'lippe' : '#e9c33b');
  const leaf = z.blatt || 'eifoermig', teeth = z.rand || 'gesaegt';
  const pts = {};
  const habit = z.wuchs || 'aufrecht';
  const Hh = z.hoehe || 650; // Pixelhöhe der Pflanze
  if (habit === 'rosette') {
    const n = z.blaetter || 9;
    for (let i = 0; i < n; i++) {
      const a = -170 + i * 160 / (n - 1);
      const L = (z.blattlaenge || 210) * (0.75 + 0.25 * Math.sin(i * 1.3 + 1));
      c.leaf(X, GROUND - 6, a, L, (z.blattbreite || 50), leaf, teeth);
      if (i === Math.floor(n * 0.75)) pts.blatt = [X + Math.cos(a * Math.PI / 180) * L * 0.6, GROUND - 6 + Math.sin(a * Math.PI / 180) * L * 0.6];
    }
    const scapes = z.stiele || 2;
    for (let s = 0; s < scapes; s++) {
      const dx = (s - (scapes - 1) / 2) * 90, top = GROUND - Hh + s * 40;
      c.add(`<path d="M${X},${GROUND - 4} C${X + dx * 0.3},${GROUND - Hh * 0.4} ${X + dx * 0.8},${top + 80} ${X + dx},${top}" fill="none" stroke="${LEAF_DARK}" stroke-width="4.5"/>`);
      if (z.stengelblaetter) { c.leaf(X + dx * 0.5, GROUND - Hh * 0.45, -40, 60, 18, leaf, teeth); }
      c.inflorescence(z.bluete || 'korb', X + dx, top, z.bluetengroesse || 55, color, center);
      if (s === 0) { pts.bluete = [X + dx, top]; pts.stengel = [X + dx * 0.4, GROUND - Hh * 0.45]; }
    }
  } else if (habit === 'kriechend') {
    for (const dir of [-1, 1]) {
      let x = X, y = GROUND - 10;
      c.add(`<path d="M${X},${GROUND - 8} C${X + dir * 120},${GROUND - 30} ${X + dir * 220},${GROUND - 10} ${X + dir * 290},${GROUND - 26}" fill="none" stroke="${LEAF_DARK}" stroke-width="4"/>`);
      for (let i = 1; i <= 5; i++) {
        x = X + dir * i * 55; y = GROUND - 14 - Math.sin(i) * 8;
        c.leaf(x, y, -90 - 62, z.blattlaenge || 50, z.blattbreite || 30, leaf, teeth);
        c.leaf(x, y, -90 + 62, z.blattlaenge || 50, z.blattbreite || 30, leaf, teeth);
        c.add(`<path d="M${x},${y + 4} q-6,20 -2,34 M${x},${y + 4} q8,18 6,30" fill="none" stroke="${INK}" stroke-width="0.7"/>`);
      }
    }
    // aufrechte Blühtriebe
    for (const [dx, h] of [[0, Hh], [-110, Hh * 0.7], [130, Hh * 0.8]]) {
      const top = GROUND - h;
      c.add(`<path d="M${X + dx},${GROUND - 12} L${X + dx + 6},${top}" stroke="${LEAF_DARK}" stroke-width="3.5"/>`);
      for (let k = 1; k <= 4; k++) {
        const yy = GROUND - 12 - k * (h / 5);
        c.leaf(X + dx + 3, yy, -25, (z.blattlaenge || 50) * 0.8, (z.blattbreite || 30) * 0.8, leaf, teeth);
        c.leaf(X + dx + 3, yy, -155, (z.blattlaenge || 50) * 0.8, (z.blattbreite || 30) * 0.8, leaf, teeth);
        if (z.bluete === 'lippe' && k >= 2) { c.flower('lippe', X + dx + 8, yy - 4, 18, color); c.flower('lippe', X + dx - 2, yy - 2, 16, color); }
      }
      if (z.bluete !== 'lippe') c.inflorescence(z.bluete || 'punkt', X + dx + 6, top, z.bluetengroesse || 30, color, center);
      if (dx === 0) { pts.bluete = [X + dx + 6, top + 10]; pts.stengel = [X + dx + 3, GROUND - h * 0.5]; }
    }
    pts.blatt = [X + 165, GROUND - 40];
  } else if (habit === 'gras') {
    for (let i = 0; i < 9; i++) c.leaf(X - 12 + i * 3, GROUND - 4, -90 + (i - 4) * 5, Hh * (0.6 + 0.1 * (i % 3)), 8, 'roehre');
    for (const [dx, h] of [[-20, Hh * 1.05], [26, Hh * 0.95]]) {
      c.add(`<path d="M${X + dx * 0.2},${GROUND - 4} L${X + dx},${GROUND - h}" stroke="${LEAF_DARK}" stroke-width="3"/>`);
      c.inflorescence(z.bluete || 'kugel', X + dx, GROUND - h, z.bluetengroesse || 55, color, center);
    }
    pts.bluete = [X - 20, GROUND - Hh * 1.05]; pts.blatt = [X + 40, GROUND - Hh * 0.4]; pts.stengel = [X + 10, GROUND - Hh * 0.7];
  } else if (habit === 'schachtelhalm') {
    const top = GROUND - Hh;
    c.add(`<path d="M${X},${GROUND} L${X},${top}" stroke="${LEAF_DARK}" stroke-width="7"/>`);
    for (let y = GROUND - 40; y > top + 30; y -= 48) {
      c.add(`<rect x="${X - 6}" y="${y - 3}" width="12" height="6" fill="#3e4a2a"/>`);
      for (let k = 0; k < 8; k++) {
        const a = -170 + k * 160 / 7, L = 90 * (1 - (GROUND - y) / Hh * 0.6);
        c.add(`<path d="M${X},${y} q${f(Math.cos(a * Math.PI / 180) * L * 0.5)},${f(-10)} ${f(Math.cos(a * Math.PI / 180) * L)},${f(Math.abs(Math.sin(a * Math.PI / 180)) * L * 0.4 + 10)}" fill="none" stroke="${LEAF_DARK}" stroke-width="1.6"/>`);
      }
    }
    pts.stengel = [X, GROUND - Hh * 0.4]; pts.blatt = [X + 70, GROUND - Hh * 0.55]; pts.bluete = [X, top + 10];
  } else {
    // aufrecht, Dolde, Strauch, Kletterer: Hauptachse mit Knoten
    const branches = habit === 'strauch' ? [[-60, 0.8, -10], [0, 1, 0], [70, 0.85, 12]] : [[0, 1, 0]];
    const arr = z.stellung || 'gegenstaendig';
    branches.forEach(([dx, hf, tilt], bi) => {
      const h = Hh * hf, top = GROUND - h, bx = X + dx;
      const sx = (t) => bx + tilt * t * 3 + (habit === 'kletternd' ? Math.sin(t * 6) * 18 : 0);
      let d = `M${X},${GROUND}`;
      for (let t = 0.05; t <= 1.0001; t += 0.05) d += ` L${f(sx(t))},${f(GROUND - h * t)}`;
      c.add(`<path d="${d}" fill="none" stroke="${habit === 'strauch' ? '#7a6a4a' : LEAF_DARK}" stroke-width="${habit === 'dolde' ? 8 : 6}" stroke-linecap="round"/>`);
      if (habit === 'kletternd' && bi === 0) c.add(`<line x1="${X + 40}" y1="${GROUND}" x2="${X + 40}" y2="${top - 20}" stroke="#8a7a5a" stroke-width="5"/>`);
      const nodes = z.knoten || (habit === 'strauch' ? 7 : 6);
      for (let i = 0; i < nodes; i++) {
        const t = 0.1 + i * (0.82 / nodes), y = GROUND - h * t, x = sx(t);
        const sc = (z.blattlaenge || 160) * (1 - t * 0.55) * (habit === 'strauch' ? 0.45 : 1);
        const wd = (z.blattbreite || 48) * (1 - t * 0.5) * (habit === 'strauch' ? 0.5 : 1);
        const ang = 25 - t * 20;
        if (arr === 'quirl') {
          for (let k = 0; k < 6; k++) c.leaf(x, y, -180 + k * 36 + 18, sc * (k % 3 === 1 ? 0.55 : 1), wd, leaf, teeth);
        } else if (arr === 'wechselstaendig') {
          const side = i % 2 ? 1 : -1;
          c.leaf(x, y, side > 0 ? ang : 180 - ang, sc, wd, leaf, teeth);
        } else {
          c.leaf(x + 3, y, ang, sc, wd, leaf, teeth);
          c.leaf(x - 3, y, 180 - ang, sc, wd, leaf, teeth);
        }
        if (bi === 0 && i === 1) pts.blatt = [x + sc * 0.55, y + sc * 0.2];
        if (bi === 0 && i === 2) pts.stengel = [x, y - 25];
        if (z.bluete === 'lippe' && t > 0.35) { c.flower('lippe', x + 6, y - 6, 20, color); c.flower('lippe', x - 22, y - 4, 18, color); }
        if (z.achselblueten && t > 0.35) c.flower(z.achselblueten, x + 14, y - 10, 22, color, center);
      }
      if (z.bluete && z.bluete !== 'lippe') {
        const kind = habit === 'dolde' ? 'dolde' : z.bluete;
        c.inflorescence(kind, sx(1), top, (z.bluetengroesse || (habit === 'dolde' ? 110 : 50)) * (bi === 1 || branches.length === 1 ? 1 : 0.8), color, center);
        if (z.seitenblueten && branches.length === 1) {
          const y2 = GROUND - h * 0.7, x2 = sx(0.7);
          c.add(`<path d="M${f(x2)},${f(y2)} Q${f(x2 + 60)},${f(y2 - 40)} ${f(x2 + 110)},${f(y2 - 110)}" fill="none" stroke="${LEAF_DARK}" stroke-width="3"/>`);
          c.inflorescence(kind, x2 + 110, y2 - 110, (z.bluetengroesse || 60) * 0.7, color, center);
          const x3 = sx(0.78), y3 = GROUND - h * 0.78;
          c.add(`<path d="M${f(x3)},${f(y3)} Q${f(x3 - 60)},${f(y3 - 40)} ${f(x3 - 110)},${f(y3 - 110)}" fill="none" stroke="${LEAF_DARK}" stroke-width="3"/>`);
          c.inflorescence(kind, x3 - 110, y3 - 110, (z.bluetengroesse || 60) * 0.65, color, center);
        }
      }
      if (bi === branches.length - 1 || branches.length === 1) pts.bluete = pts.bluete || [sx(1), top];
    });
  }
  roots(c, z.wurzel || 'faser', X, GROUND + 4);
  pts.wurzel = [X + 10, GROUND + 60];
  return pts;
}

// ---------- Bäume und Sträucher: Zweig mit Blatt, Blüte, Frucht und kleiner Wuchsform ----------
function silhouette(c, typ, x, y) {
  // x,y = Fußpunkt; Fläche ca. 180 × 200
  const T = '#6b5a3e', K = '#9fb07a';
  c.add(`<rect x="${x - 100}" y="${y - 225}" width="200" height="245" rx="8" fill="${CREAM}" stroke="${INK}" stroke-width="0.8" stroke-dasharray="4,3"/>`);
  c.add(`<line x1="${x - 85}" y1="${y}" x2="${x + 85}" y2="${y}" stroke="${INK}" stroke-width="1"/>`);
  if (typ === 'nadelbaum') {
    c.add(`<rect x="${x - 5}" y="${y - 40}" width="10" height="40" fill="${T}"/>`);
    for (let i = 0; i < 5; i++) { const yy = y - 30 - i * 32, w = 70 - i * 12; c.add(`<path d="M${x - w},${yy} L${x},${yy - 60} L${x + w},${yy} Z" fill="#6f8a55" stroke="${INK}" stroke-width="0.8"/>`); }
  } else if (typ === 'strauch' || typ === 'zwergstrauch' || typ === 'ranke') {
    const h = typ === 'zwergstrauch' ? 50 : typ === 'ranke' ? 90 : 120;
    for (let k = -3; k <= 3; k++) c.add(`<path d="M${x + k * 6},${y} Q${x + k * 16},${y - h * 0.6} ${x + k * (typ === 'ranke' ? 30 : 22)},${y - h * (typ === 'ranke' ? 0.7 : 1)}" fill="none" stroke="${T}" stroke-width="2"/>`);
    c.add(`<ellipse cx="${x}" cy="${y - h * 0.65}" rx="${typ === 'zwergstrauch' ? 70 : 80}" ry="${h * 0.5}" fill="${K}" fill-opacity="0.75" stroke="${INK}" stroke-width="0.8"/>`);
  } else if (typ === 'kletterer') {
    c.add(`<rect x="${x - 50}" y="${y - 190}" width="40" height="190" fill="#c9bfa8" stroke="${INK}" stroke-width="0.8"/>`);
    for (let i = 0; i < 14; i++) c.add(`<circle cx="${x - 30 + Math.sin(i) * 26}" cy="${y - 10 - i * 13}" r="11" fill="${K}" stroke="${INK}" stroke-width="0.6"/>`);
  } else { // Laubbaum
    c.add(`<path d="M${x - 8},${y} L${x - 6},${y - 80} L${x + 6},${y - 80} L${x + 8},${y} Z" fill="${T}"/>`);
    c.add(`<ellipse cx="${x}" cy="${y - 135}" rx="78" ry="70" fill="${K}" fill-opacity="0.8" stroke="${INK}" stroke-width="0.8"/>`);
  }
}
function zweig(c, z) {
  const BARK = '#6b5a3e', color = z.farbe || '#f4f1e6', center = z.mitte || '#e9c33b';
  const leaf = z.blatt || 'eifoermig', teeth = z.rand || 'gesaegt', arr = z.stellung || 'wechselstaendig';
  const L0 = z.blattlaenge || 110, W0 = z.blattbreite || 46;
  const pts = {};
  const A = [330, 880], B = [450, 130];
  const at = (t) => [A[0] + (B[0] - A[0]) * t + Math.sin(t * 3) * 25, A[1] + (B[1] - A[1]) * t];
  let d = `M${A[0]},${A[1]}`;
  for (let t = 0.05; t <= 1.0001; t += 0.05) { const [x, y] = at(t); d += ` L${f(x)},${f(y)}`; }
  c.add(`<path d="${d}" fill="none" stroke="${BARK}" stroke-width="${z.blatt === 'nadel' ? 7 : 8}" stroke-linecap="round"/>`);
  // Seitenzweige
  const sides = [[0.38, -1, 190], [0.62, 1, 130]];
  const tips = [];
  for (const [t, dir, len] of sides) {
    const [x, y] = at(t), ex = x + dir * len, ey = y - len * 0.55;
    c.add(`<path d="M${f(x)},${f(y)} Q${f(x + dir * len * 0.5)},${f(y - len * 0.1)} ${f(ex)},${f(ey)}" fill="none" stroke="${BARK}" stroke-width="5" stroke-linecap="round"/>`);
    tips.push([ex, ey, x, y, dir]);
  }
  if (z.dornen) for (let i = 0; i < 9; i++) { const [x, y] = at(0.1 + i * 0.09); const s = i % 2 ? 1 : -1; c.add(`<path d="M${f(x)},${f(y)} l${s * 14},-6 l${-s * 12},-4 Z" fill="${BARK}" stroke="${INK}" stroke-width="0.6"/>`); }
  // Blätter
  const leafAt = (x, y, base, i, scale = 1) => {
    if (leaf === 'nadel') {
      const nl = z.nadellaenge || 40;
      for (const s of [-1, 1]) c.leaf(x, y, base + s * (z.nadelwinkel || 55), nl * scale, 4, 'nadel');
      return;
    }
    const sc = L0 * scale, wd = W0 * scale;
    if (arr === 'gegenstaendig') { c.leaf(x, y, base - 55, sc, wd, leaf, teeth); c.leaf(x, y, base + 55, sc, wd, leaf, teeth); }
    else c.leaf(x, y, base + (i % 2 ? 55 : -55), sc, wd, leaf, teeth);
  };
  const ang = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  const mainAng = ang(...A, ...B);
  const nMain = leaf === 'nadel' ? 26 : (z.knoten || 6);
  for (let i = 0; i < nMain; i++) {
    const t = 0.12 + i * (0.8 / nMain), [x, y] = at(t);
    leafAt(x, y, mainAng, i, 1 - t * 0.25);
    if (i === Math.floor(nMain * 0.3)) pts.blatt = [x + 40, y - 30];
  }
  for (const [ex, ey, x, y, dir] of tips) {
    const n = leaf === 'nadel' ? 12 : 3, a = ang(x, y, ex, ey);
    for (let i = 1; i <= n; i++) { const t = i / (n + 1); leafAt(x + (ex - x) * t, y + (ey - y) * t, a, i, 0.75); }
  }
  pts.stengel = at(0.2);
  // Blüte oben am Haupttrieb, Frucht am rechten Seitenzweig (oder umgekehrt bei Nadelbäumen)
  const [bx, by] = B, [fx, fy] = tips[1];
  if (z.bluete) {
    if (z.bluete === 'kaetzchen') c.flower('kaetzchen', bx, by + 10, z.bluetengroesse || 90, color);
    else c.inflorescence(z.bluete, bx, by, z.bluetengroesse || 60, color, center);
    pts.bluete = [bx, by];
    // weitere Blüten am linken Seitenzweig
    const [lx, ly] = tips[0];
    if (z.bluete === 'kaetzchen') c.flower('kaetzchen', lx, ly + 6, (z.bluetengroesse || 90) * 0.8, color);
    else c.inflorescence(z.bluete, lx, ly, (z.bluetengroesse || 60) * 0.8, color, center);
  }
  if (z.frucht) { drawFruit(c, z.frucht, fx, fy + 50, z.fruchtgroesse || 0.85, z.fruchtfarbe); pts.wurzel = [fx, fy + 50]; }
  silhouette(c, z.silhouette || 'laubbaum', 160, 880);
  c.add(`<text x="160" y="${880 + 44}" text-anchor="middle" font-family="${FONT}" font-size="17" font-style="italic" fill="${INK}">${z.wuchshoehe || 'Wuchsform'}</text>`);
  return pts;
}

function rinde(c, typ, x, y) {
  const base = { birke: '#f2efe6', glatt: '#9a9a8a', schuppig: '#7a5a3e', rissig: '#6b5440' }[typ] || '#7a5a3e';
  c.add(`<rect x="${x - 100}" y="${y - 100}" width="200" height="200" fill="${base}"/>`);
  const r = rng(typ);
  if (typ === 'birke') for (let i = 0; i < 14; i++) c.add(`<rect x="${f(x - 90 + r() * 160)}" y="${f(y - 90 + r() * 170)}" width="${f(20 + r() * 40)}" height="${f(3 + r() * 5)}" fill="#2d2a26"/>`);
  else if (typ === 'glatt') for (let i = 0; i < 8; i++) c.add(`<path d="M${x - 100},${y - 80 + i * 22} q100,${f(r() * 8 - 4)} 200,0" stroke="#7a7a6a" stroke-width="1" fill="none"/>`);
  else if (typ === 'rissig') for (let i = 0; i < 9; i++) { const xx = x - 90 + i * 22; c.add(`<path d="M${xx},${y - 100} q${f(r() * 16 - 8)},100 0,200" stroke="#3b2f22" stroke-width="${f(2 + r() * 3)}" fill="none"/>`); }
  else for (let i = 0; i < 26; i++) c.add(`<ellipse cx="${f(x - 90 + r() * 180)}" cy="${f(y - 90 + r() * 180)}" rx="${f(10 + r() * 14)}" ry="${f(6 + r() * 6)}" fill="#5e4430" stroke="#3b2f22" stroke-width="0.7"/>`);
}

// ---------- Detailkreise ----------
function inset(c, cx, cy, r, title, draw) {
  c.add(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${CREAM}" stroke="${INK}" stroke-width="1.3"/>`);
  c.add(`<clipPath id="c${cx}"><circle cx="${cx}" cy="${cy}" r="${r - 2}"/></clipPath><g clip-path="url(#c${cx})">`);
  draw();
  c.add('</g>');
  c.add(`<text x="${cx}" y="${cy + r + 24}" text-anchor="middle" font-family="${FONT}" font-size="17" font-style="italic" fill="${INK}">${title}</text>`);
}
function drawFruit(c, type, x, y, s = 1, color) {
  c.add(`<g transform="translate(${f(x)},${f(y)}) scale(${s})">`);
  fruit(c, type, 0, 0, color);
  c.add('</g>');
}
const kreise = (c, list, r, fill, glanz = true) => list.forEach(([dx, dy]) => c.add(`<circle cx="${dx}" cy="${dy}" r="${r}" fill="${fill}" stroke="${INK}" stroke-width="0.9"/>${glanz ? `<circle cx="${dx - r * 0.3}" cy="${dy - r * 0.3}" r="${r * 0.22}" fill="#fff" fill-opacity="0.45"/>` : ''}`));
const stiel = (c, x1, y1, x2, y2, w = 1.2) => c.add(`<path d="M${x1},${y1} L${x2},${y2}" stroke="#6b5a3e" stroke-width="${w}"/>`);
function fruit(c, type, x, y, color) {
  switch (type) {
    case 'beerendolde': { // Holunder: viele kleine Beeren an verzweigten Stielen
      for (let i = 0; i < 7; i++) {
        const a = (-140 + i * 100 / 6) * Math.PI / 180, ex = x + Math.cos(a) * -60, ey = y + 10 + Math.abs(Math.sin(a)) * 45;
        stiel(c, x, y - 40, ex, ey, 1.4);
        for (let j = 0; j < 5; j++) kreise(c, [[ex + (j - 2) * 9, ey + 8 + (j % 2) * 8]], 6, color || '#2b2233');
      }
      break;
    }
    case 'beeren': case 'heidelbeere': case 'preiselbeere': { // Traube/Gruppe runder Beeren
      const r = type === 'heidelbeere' ? 15 : type === 'preiselbeere' ? 11 : 13;
      const pos = [[-24, 0], [6, -14], [24, 12], [-6, 24], [-30, 30], [16, 38]];
      stiel(c, x, y - 50, x, y + 30);
      pos.forEach(([dx, dy]) => stiel(c, x, y - 30 + dy * 0.3, x + dx, y + dy, 0.8));
      kreise(c, pos.map(([dx, dy]) => [x + dx, y + dy]), r, color || (type === 'heidelbeere' ? '#3b4a7a' : '#b3262e'));
      if (type === 'heidelbeere') pos.forEach(([dx, dy]) => c.add(`<circle cx="${x + dx}" cy="${y + dy - r * 0.2}" r="${r * 0.3}" fill="none" stroke="${INK}" stroke-width="0.8"/>`));
      break;
    }
    case 'sammelfrucht': case 'maulbeere': { // Brombeere, Himbeere, Maulbeere
      const rows = type === 'maulbeere' ? 7 : 5;
      stiel(c, x, y - 55, x, y - 34, 2);
      for (let i = 0; i < rows; i++) for (let j = 0; j < 4 + (i % 2); j++) kreise(c, [[x - 18 + j * 10 - (i % 2) * 5, y - 30 + i * 11]], 6.5, color || '#3a1f35');
      break;
    }
    case 'erdbeere':
      c.add(`<path d="M${x},${y + 40} C${x - 34},${y + 10} ${x - 30},${y - 28} ${x},${y - 26} C${x + 30},${y - 28} ${x + 34},${y + 10} ${x},${y + 40} Z" fill="${color || '#c8282e'}" stroke="${INK}" stroke-width="1"/>`);
      for (let i = 0; i < 14; i++) c.add(`<circle cx="${x - 16 + (i % 4) * 11}" cy="${y - 14 + Math.floor(i / 4) * 12}" r="1.6" fill="#f3d36b"/>`);
      for (let k = 0; k < 6; k++) c.add(`<path d="M${x},${y - 26} l${f(Math.cos((-160 + k * 28) * Math.PI / 180) * 20)},${f(Math.sin((-160 + k * 28) * Math.PI / 180) * 12 - 2)}" stroke="${LEAF_DARK}" stroke-width="3" stroke-linecap="round"/>`);
      break;
    case 'apfel': case 'quitte': case 'mispel': {
      const col = color || (type === 'quitte' ? '#e6c63a' : type === 'mispel' ? '#8a6a3a' : '#c9b03e');
      c.add(`<path d="M${x},${y - 30} C${x + 46},${y - 46} ${x + 50},${y + 40} ${x},${y + 38} C${x - 50},${y + 40} ${x - 46},${y - 46} ${x},${y - 30} Z" fill="${col}" stroke="${INK}" stroke-width="1.1"/>`);
      stiel(c, x, y - 30, x + 6, y - 52, 2.2);
      if (type === 'mispel') for (let k = 0; k < 5; k++) c.add(`<path d="M${x},${y + 30} l${f(Math.cos(k * 1.256) * 16)},${f(Math.sin(k * 1.256) * 8 + 8)}" stroke="${INK}" stroke-width="2"/>`);
      else c.add(`<circle cx="${x - 14}" cy="${y - 10}" r="7" fill="#fff" fill-opacity="0.35"/>`);
      break;
    }
    case 'birne':
      c.add(`<path d="M${x},${y - 44} C${x + 14},${y - 44} ${x + 14},${y - 14} ${x + 30},${y + 10} C${x + 40},${y + 42} ${x - 40},${y + 42} ${x - 30},${y + 10} C${x - 14},${y - 14} ${x - 14},${y - 44} ${x},${y - 44} Z" fill="${color || '#b8b04a'}" stroke="${INK}" stroke-width="1.1"/>`);
      stiel(c, x, y - 44, x + 4, y - 62, 2);
      break;
    case 'hagebutte':
      for (const [dx, a] of [[-22, -12], [22, 14]]) {
        c.add(`<g transform="rotate(${a} ${x + dx} ${y})"><ellipse cx="${x + dx}" cy="${y}" rx="16" ry="30" fill="${color || '#c7351f'}" stroke="${INK}" stroke-width="1"/>`);
        for (let k = 0; k < 5; k++) c.add(`<path d="M${x + dx},${y + 28} l${(k - 2) * 7},${14}" stroke="${INK}" stroke-width="1.2"/>`);
        c.add(`</g>`);
        stiel(c, x + dx, y - 30, x + dx * 0.4, y - 55, 1.6);
      }
      break;
    case 'steinfrucht': case 'schlehe': case 'kornelkirsche': case 'sanddorn': {
      const col = color || (type === 'schlehe' ? '#3c4775' : type === 'sanddorn' ? '#ef8a1d' : '#b11d2a');
      if (type === 'sanddorn') { c.add(`<path d="M${x - 50},${y + 40} L${x + 50},${y - 40}" stroke="#6b5a3e" stroke-width="5"/>`); for (let i = 0; i < 12; i++) kreise(c, [[x - 44 + i * 8 + (i % 2) * 4, y + 36 - i * 7 + (i % 2 ? 8 : -8)]], 7, col); break; }
      const pos = [[-22, 10], [20, 0], [0, 32]];
      pos.forEach(([dx, dy]) => stiel(c, x, y - 50, x + dx, y + dy - (type === 'kornelkirsche' ? 18 : 14), 1.2));
      pos.forEach(([dx, dy]) => c.add(type === 'kornelkirsche' ? `<ellipse cx="${x + dx}" cy="${y + dy}" rx="11" ry="18" fill="${col}" stroke="${INK}" stroke-width="0.9"/>` : `<circle cx="${x + dx}" cy="${y + dy}" r="15" fill="${col}" stroke="${INK}" stroke-width="0.9"/>${type === 'schlehe' ? `<circle cx="${x + dx}" cy="${y + dy}" r="15" fill="#c9d3e8" fill-opacity="0.3"/>` : `<circle cx="${x + dx - 5}" cy="${y + dy - 5}" r="3.5" fill="#fff" fill-opacity="0.5"/>`}`));
      break;
    }
    case 'haselnuss':
      for (const dx of [-24, 24]) {
        c.add(`<ellipse cx="${x + dx}" cy="${y + 12}" rx="17" ry="20" fill="#9a6a32" stroke="${INK}" stroke-width="1"/>`);
        c.add(`<path d="M${x + dx - 20},${y + 2} C${x + dx - 24},${y - 30} ${x + dx + 24},${y - 30} ${x + dx + 20},${y + 2} L${x + dx + 14},${y - 4} L${x + dx + 8},${y + 4} L${x + dx},${y - 6} L${x + dx - 8},${y + 4} L${x + dx - 14},${y - 4} Z" fill="${LEAF}" stroke="${INK}" stroke-width="1"/>`);
      }
      break;
    case 'walnuss':
      c.add(`<circle cx="${x - 22}" cy="${y}" r="30" fill="${LEAF}" stroke="${INK}" stroke-width="1"/><circle cx="${x - 30}" cy="${y - 8}" r="2" fill="${LEAF_DARK}"/><circle cx="${x - 14}" cy="${y + 8}" r="2" fill="${LEAF_DARK}"/>`);
      c.add(`<ellipse cx="${x + 30}" cy="${y + 8}" rx="25" ry="28" fill="#b08a55" stroke="${INK}" stroke-width="1"/><path d="M${x + 30},${y - 20} L${x + 30},${y + 36} M${x + 16},${y - 6} q8,8 0,16 q-8,8 0,16 M${x + 44},${y - 6} q-8,8 0,16 q8,8 0,16" fill="none" stroke="${INK}" stroke-width="0.8"/>`);
      break;
    case 'esskastanie': case 'buchecker': {
      const n = type === 'buchecker' ? 30 : 60, R = type === 'buchecker' ? 24 : 34;
      c.add(`<circle cx="${x}" cy="${y}" r="${R}" fill="${type === 'buchecker' ? '#9a7a4a' : '#9fb35a'}" stroke="${INK}" stroke-width="1"/>`);
      for (let i = 0; i < n; i++) { const a = i * 2 * Math.PI / n; c.add(`<path d="M${f(x + Math.cos(a) * R)},${f(y + Math.sin(a) * R)} l${f(Math.cos(a) * (type === 'buchecker' ? 6 : 14))},${f(Math.sin(a) * (type === 'buchecker' ? 6 : 14))}" stroke="${INK}" stroke-width="0.7"/>`); }
      if (type === 'esskastanie') for (const dx of [-12, 12]) c.add(`<path d="M${x + dx - 14},${y + 6} Q${x + dx},${y - 26} ${x + dx + 14},${y + 6} Q${x + dx},${y + 16} ${x + dx - 14},${y + 6} Z" fill="#7a4a24" stroke="${INK}" stroke-width="0.9"/>`);
      else for (const dx of [-8, 8]) c.add(`<path d="M${x + dx},${y - 16} L${x + dx + 9},${y + 10} L${x + dx - 9},${y + 10} Z" fill="#6b4523" stroke="${INK}" stroke-width="0.8"/>`);
      break;
    }
    case 'rosskastanie':
      c.add(`<circle cx="${x - 22}" cy="${y}" r="30" fill="#a9be6a" stroke="${INK}" stroke-width="1"/>`);
      for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; c.add(`<path d="M${f(x - 22 + Math.cos(a) * 30)},${f(y + Math.sin(a) * 30)} l${f(Math.cos(a) * 7)},${f(Math.sin(a) * 7)}" stroke="${INK}" stroke-width="1"/>`); }
      c.add(`<circle cx="${x + 30}" cy="${y + 6}" r="24" fill="#6b3418" stroke="${INK}" stroke-width="1"/><ellipse cx="${x + 30}" cy="${y + 18}" rx="14" ry="9" fill="#d8c49a"/><circle cx="${x + 22}" cy="${y - 4}" r="4" fill="#fff" fill-opacity="0.4"/>`);
      break;
    case 'eichel':
      for (const dx of [-22, 22]) {
        c.add(`<ellipse cx="${x + dx}" cy="${y + 8}" rx="13" ry="24" fill="#b08a45" stroke="${INK}" stroke-width="1"/>`);
        c.add(`<path d="M${x + dx - 16},${y - 4} Q${x + dx},${y - 26} ${x + dx + 16},${y - 4} Z" fill="#8a6a3a" stroke="${INK}" stroke-width="1"/>`);
        for (let k = 0; k < 4; k++) c.add(`<path d="M${x + dx - 12 + k * 8},${y - 8} l3,-5" stroke="${INK}" stroke-width="0.6"/>`);
        stiel(c, x + dx, y - 18, x, y - 52, 1.6);
      }
      break;
    case 'zapfen-haengend': case 'zapfen-stehend': case 'kiefernzapfen': {
      const L = type === 'kiefernzapfen' ? 50 : 80, Wd = type === 'kiefernzapfen' ? 24 : 18, dir = type === 'zapfen-stehend' ? -1 : 1;
      c.add(`<ellipse cx="${x}" cy="${y}" rx="${Wd}" ry="${L / 2}" fill="${type === 'zapfen-stehend' ? '#6a5a3a' : '#8a6a3a'}" stroke="${INK}" stroke-width="1"/>`);
      for (let i = 0; i < 9; i++) { const yy = y - L / 2 + 6 + i * (L - 10) / 8; c.add(`<path d="M${x - Wd * 0.9},${f(yy)} Q${x},${f(yy + 8 * dir)} ${x + Wd * 0.9},${f(yy)}" fill="none" stroke="${INK}" stroke-width="0.7"/>`); }
      stiel(c, x, y - dir * L / 2, x, y - dir * (L / 2 + 14), 3);
      break;
    }
    case 'kaetzchen':
      for (const dx of [-18, 14]) for (let i = 0; i < 9; i++) c.add(`<ellipse cx="${x + dx + Math.sin(i * 0.6) * 3}" cy="${y - 40 + i * 10}" rx="${7 - i * 0.3}" ry="6" fill="${color || '#c8b46a'}" stroke="${INK}" stroke-width="0.6"/>`);
      break;
    case 'fluegel': // Ahorn
      for (const s of [-1, 1]) c.add(`<path d="M${x},${y} C${x + s * 20},${y - 10} ${x + s * 60},${y - 30} ${x + s * 66},${y - 14} C${x + s * 60},${y + 2} ${x + s * 26},${y + 10} ${x},${y + 8} Z" fill="#c7b47a" stroke="${INK}" stroke-width="1"/><circle cx="${x + s * 10}" cy="${y + 2}" r="9" fill="#9a8048" stroke="${INK}" stroke-width="0.8"/>`);
      break;
    case 'linde':
      c.add(`<path d="M${x - 8},${y - 50} C${x - 30},${y - 30} ${x - 34},${y + 20} ${x - 22},${y + 30} C${x - 10},${y + 10} ${x},${y - 20} ${x - 8},${y - 50} Z" fill="#d6dca0" stroke="${INK}" stroke-width="1"/>`);
      stiel(c, x - 12, y - 20, x + 10, y + 10, 1.2);
      kreise(c, [[x + 4, y + 18], [x + 18, y + 14], [x + 12, y + 28]], 6, '#a89a62', false);
      break;
    case 'efeubeeren':
      for (let i = 0; i < 9; i++) { const a = (-160 + i * 140 / 8) * Math.PI / 180; stiel(c, x, y + 20, x + Math.cos(a) * 40, y + 20 + Math.sin(a) * 40, 0.9); kreise(c, [[x + Math.cos(a) * 40, y + 20 + Math.sin(a) * 40]], 8, color || '#22202a'); }
      break;
    case 'berberitze':
      stiel(c, x, y - 50, x, y + 30);
      for (let i = 0; i < 6; i++) c.add(`<ellipse cx="${x + (i % 2 ? 14 : -14)}" cy="${y - 30 + i * 13}" rx="6" ry="11" fill="${color || '#c41e2e'}" stroke="${INK}" stroke-width="0.8"/>`);
      break;
    case 'schirmchen':
      for (let i = 0; i < 3; i++) { const dx = (i - 1) * 45; c.add(`<ellipse cx="${x + dx}" cy="${y + 45}" rx="4" ry="12" fill="#8a6a3a"/><line x1="${x + dx}" y1="${y + 33}" x2="${x + dx}" y2="${y - 5}" stroke="${INK}" stroke-width="0.8"/>`); for (let k = 0; k < 12; k++) { const a = -170 + k * 160 / 11; c.add(`<line x1="${x + dx}" y1="${y - 5}" x2="${f(x + dx + Math.cos(a * Math.PI / 180) * 28)}" y2="${f(y - 5 + Math.sin(a * Math.PI / 180) * 28)}" stroke="${INK}" stroke-width="0.5"/>`); } }
      break;
    case 'doppelachaene':
      for (const dx of [-25, 25]) { c.add(`<ellipse cx="${x + dx}" cy="${y}" rx="14" ry="34" fill="#b49a62" stroke="${INK}" stroke-width="1"/>`); for (let k = -2; k <= 2; k++) c.add(`<line x1="${x + dx + k * 4}" y1="${y - 30}" x2="${x + dx + k * 4}" y2="${y + 30}" stroke="${INK}" stroke-width="0.6"/>`); }
      break;
    case 'schote':
      c.add(`<path d="M${x - 60},${y + 30} C${x - 20},${y + 10} ${x + 20},${y - 10} ${x + 60},${y - 40}" stroke="#9a8a4a" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M${x - 60},${y + 30} C${x - 20},${y + 10} ${x + 20},${y - 10} ${x + 60},${y - 40}" stroke="${INK}" stroke-width="0.8" fill="none"/>`);
      break;
    case 'herzschote':
      for (const [dx, dy] of [[-30, 20], [30, -20]]) c.add(`<path d="M${x + dx},${y + dy + 25} L${x + dx - 26},${y + dy - 15} Q${x + dx - 14},${y + dy - 28} ${x + dx},${y + dy - 14} Q${x + dx + 14},${y + dy - 28} ${x + dx + 26},${y + dy - 15} Z" fill="#a9b77a" stroke="${INK}" stroke-width="1"/>`);
      break;
    case 'kapsel':
      c.add(`<path d="M${x},${y - 45} C${x + 38},${y - 30} ${x + 38},${y + 30} ${x},${y + 45} C${x - 38},${y + 30} ${x - 38},${y - 30} ${x},${y - 45} Z" fill="#b8a46e" stroke="${INK}" stroke-width="1.1"/><path d="M${x},${y - 45} L${x},${y + 45} M${x - 20},${y - 35} Q${x - 30},${y} ${x - 20},${y + 35} M${x + 20},${y - 35} Q${x + 30},${y} ${x + 20},${y + 35}" stroke="${INK}" stroke-width="0.7" fill="none"/>`);
      break;
    case 'beere':
      for (const [dx, dy] of [[-20, 0], [18, -10], [5, 22]]) c.add(`<circle cx="${x + dx}" cy="${y + dy}" r="20" fill="#9b2f2f" stroke="${INK}" stroke-width="1"/><circle cx="${x + dx - 6}" cy="${y + dy - 6}" r="4" fill="#ffffff" fill-opacity="0.5"/>`);
      break;
    default: // Nüsschen/Samen
      for (let i = 0; i < 5; i++) c.add(`<ellipse cx="${x - 40 + i * 20}" cy="${y + (i % 2) * 14 - 7}" rx="8" ry="12" fill="#8a6f45" stroke="${INK}" stroke-width="0.9" transform="rotate(${i * 20 - 40} ${x - 40 + i * 20} ${y})"/>`);
  }
}

function label(c, x1, y1, ly, text) {
  const x2 = 640;
  c.add(`<path d="M${f(x1)},${f(y1)} L${x2 - 10},${f(ly)}" stroke="${INK}" stroke-width="0.9" stroke-dasharray="3,2" fill="none"/>`);
  c.add(`<circle cx="${f(x1)}" cy="${f(y1)}" r="2.4" fill="${INK}"/>`);
  // in Zeilen von höchstens ~26 Zeichen umbrechen, damit nichts über den Rand läuft
  const words = text.split(' '), lines = [''];
  for (const w of words) { if ((lines[lines.length - 1] + ' ' + w).trim().length > 26 && lines[lines.length - 1]) lines.push(w); else lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + w).trim(); }
  const spans = lines.map((l, i) => `<tspan x="${x2 - 4}" dy="${i ? 24 : 0}">${l}</tspan>`).join('');
  c.add(`<text x="${x2 - 4}" y="${f(ly + 6)}" font-family="${FONT}" font-size="20" font-style="italic" fill="${INK}">${spans}</text>`);
}

function zeichne(z) {
  const c = new Canvas(z.name);
  c.add(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  c.add(`<rect width="${W}" height="${H}" fill="${PAPER}"/>`);
  c.add(`<rect x="22" y="22" width="${W - 44}" height="${H - 44}" fill="none" stroke="${INK}" stroke-width="1.5"/><rect x="30" y="30" width="${W - 60}" height="${H - 60}" fill="none" stroke="${INK}" stroke-width="0.6"/>`);
  const istZweig = z.wuchs === 'zweig';
  if (!istZweig) {
    c.add(`<path d="M60,${GROUND} C220,${GROUND - 5} 420,${GROUND + 4} 620,${GROUND - 2}" fill="none" stroke="${INK}" stroke-width="1.3"/>`);
    for (let i = 0; i < 38; i++) c.add(`<line x1="${70 + i * 14.5}" y1="${GROUND + 4}" x2="${62 + i * 14.5}" y2="${GROUND + 13}" stroke="${INK}" stroke-width="0.6" stroke-opacity="0.45"/>`);
  }
  const pts = istZweig ? zweig(c, z) : plant(c, z);
  // Beschriftungen in der rechten Spalte
  const L = z.labels || {};
  const items = [
    ['bluete', L.bluete || 'Blüte'],
    ['blatt', L.blatt || 'Blatt'],
    ['stengel', L.stengel || (istZweig ? 'Zweig und Rinde' : 'Stängel')],
    ['wurzel', istZweig ? (L.frucht || 'Frucht') : (L.wurzel || 'Wurzel')],
  ].filter(([k]) => pts[k]);
  const slots = istZweig ? [130, 340, 550, 760] : [140, 380, 620, 960];
  if (istZweig) items.sort((a, b) => pts[a[0]][1] - pts[b[0]][1]);
  items.forEach(([k, t], i) => label(c, pts[k][0], pts[k][1], slots[i], t));
  // Detailkreise unten
  const R = 92, Y = 1150;
  if (istZweig && !z.bluete) inset(c, 190, Y, R, z.detail1 || 'Rinde', () => rinde(c, z.rinde || 'schuppig', 190, Y));
  else inset(c, 190, Y, R, z.detail1 || 'Blüte, vergrößert', () => {
    if (z.detailbluete === 'kaetzchen' || (istZweig && z.bluete === 'kaetzchen')) { c.flower('kaetzchen', 190, Y - 70, 130, z.farbe || '#c8b46a'); return; }
    if (istZweig && z.bluete === 'dolde') { c.inflorescence('dolde', 190, Y + 30, 110, z.farbe || '#f4f1e6'); return; }
    const kind = z.detailbluete || (z.wuchs === 'dolde' ? 'dolde' : (z.bluete === 'aehre' || z.bluete === 'rispe' || z.bluete === 'traube') ? (z.einzelbluete || 'fuenf') : (z.bluete || 'fuenf'));
    if (kind === 'dolde') c.inflorescence('dolde', 190, Y + 30, 110, z.farbe || '#f4f1e6');
    else c.flower(kind, 190, Y + (kind === 'glocke' ? -50 : kind === 'lippe' ? 10 : 0), kind === 'lippe' ? 70 : 72, z.farbe || '#f4f1e6', z.mitte || '#e9c33b');
  });
  inset(c, 500, Y, R, z.detail2 || 'Blatt', () => {
    const sh = z.blatt || 'eifoermig';
    if (sh === 'nadel') { for (let i = 0; i < 9; i++) c.leaf(440 + i * 3, Y + 50 - i * 12, -30 + (i % 2) * 60, 70, 6, 'nadel'); c.add(`<path d="M440,${Y + 60} L470,${Y - 60}" stroke="#7a6a4a" stroke-width="4"/>`); }
    else if (sh === 'roehre') c.leaf(430, Y + 40, -40, 170, 18, 'roehre');
    else c.leaf(420, Y + 30, -25, sh === 'handfoermig' || sh === 'schild' ? 150 : 170, (z.blattbreite || 48) * 0.9 + 6, sh, z.rand || 'gesaegt');
  });
  inset(c, 810, Y, R, z.detail3 || 'Frucht / Samen', () => {
    if (z.frucht === 'wurzel') roots(c, z.wurzel || 'pfahl', 810, Y - 70);
    else drawFruit(c, z.frucht || 'nuesschen', 810, Y + 5, istZweig ? 1.25 : 1, z.fruchtfarbe);
  });
  c.add(`<text x="${W / 2}" y="${H - 88}" text-anchor="middle" font-family="${FONT}" font-size="40" fill="${INK}">${z.name}</text>`);
  c.add(`<text x="${W / 2}" y="${H - 52}" text-anchor="middle" font-family="${FONT}" font-size="24" font-style="italic" fill="${INK}">${z.botanisch}</text>`);
  c.add('</svg>');
  return c.o.join('\n');
}

module.exports = { zeichne };
