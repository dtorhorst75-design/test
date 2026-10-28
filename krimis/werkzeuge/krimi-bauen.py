#!/usr/bin/env python3
"""Baut aus den Kapiteltexten eines Falls zwei Word-Dateien:
die Lesefassung (Buch) und die Sprecherfassung (Hörbuch-Skript).

Aufruf: python3 krimi-bauen.py ../gardinen-01-wollseifen

Textformat der Kapitel (text/01.txt …):
  # Kapiteltitel           erste Zeile
  Absätze durch Leerzeilen getrennt
  @NAME Absatz            Dialog: Text in „…“ spricht NAME, der Rest ist Erzählung (Jo)
  @@NAME Absatz           der ganze Absatz wird von NAME gesprochen (Briefe)
  § Text                  Eintrag aus Jos Spesenbuch
"""
import glob
import json
import os
import re
import subprocess
import sys
import tempfile

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Mm, Pt, RGBColor

SOFFICE = '/mnt/skills/public/docx/scripts/office/soffice.py'
SCHRIFT = 'Georgia'
GRAU = RGBColor(0x6B, 0x6B, 0x6B)
FARBEN = {'JO': RGBColor(0x22, 0x22, 0x22), 'KONRAD': RGBColor(0x1F, 0x4E, 0x8C), 'BENNY': RGBColor(0x2E, 0x7D, 0x32)}
GASTFARBE = RGBColor(0x7B, 0x1F, 0xA2)
QUOTE = re.compile(r'„[^“]*“')


def lade_kapitel(ordner):
    kapitel = []
    for f in sorted(glob.glob(os.path.join(ordner, 'text', '*.txt'))):
        roh = open(f, encoding='utf-8').read().strip()
        kopf, _, rest = roh.partition('\n')
        absaetze = [a.strip() for a in rest.split('\n\n') if a.strip()]
        kapitel.append((kopf.lstrip('# ').strip(), absaetze))
    return kapitel


def zerlege(absatz):
    """Gibt (art, sprecher, text) zurück: art ist 'erzaehlung', 'dialog', 'ganz' oder 'spesen'."""
    if absatz.startswith('§'):
        return 'spesen', 'JO', absatz[1:].strip()
    m = re.match(r'@@([A-ZÄÖÜ]+)\s+(.*)', absatz, re.S)
    if m:
        return 'ganz', m.group(1), m.group(2)
    m = re.match(r'@([A-ZÄÖÜ]+)\s+(.*)', absatz, re.S)
    if m:
        return 'dialog', m.group(1), m.group(2)
    return 'erzaehlung', 'JO', absatz


def grundlayout(doc):
    s = doc.sections[0]
    s.page_width, s.page_height = Mm(148), Mm(210)
    s.left_margin = s.right_margin = Mm(17)
    s.top_margin, s.bottom_margin = Mm(18), Mm(18)
    st = doc.styles['Normal']
    st.font.name = SCHRIFT
    st.element.rPr.rFonts.set(qn('w:eastAsia'), SCHRIFT)
    st.font.size = Pt(11)
    pf = st.paragraph_format
    pf.space_after = Pt(0)
    pf.line_spacing = 1.25
    # Seitenzahl unten in der Mitte
    fp = s.footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    feld(fp, 'PAGE', '1', Pt(9))


def feld(p, code, wert, groesse=None):
    r = p.add_run()
    if groesse:
        r.font.size = groesse
    for typ, text in (('begin', None), (None, f' {code} '), ('separate', None), (None, wert), ('end', None)):
        if typ:
            el = OxmlElement('w:fldChar')
            el.set(qn('w:fldCharType'), typ)
            r._r.append(el)
        elif text.startswith(' '):
            el = OxmlElement('w:instrText')
            el.set(qn('xml:space'), 'preserve')
            el.text = text
            r._r.append(el)
        else:
            el = OxmlElement('w:t')
            el.text = text
            r._r.append(el)


def absatz(doc, text, einzug=True, kursiv=False, farbe=None, groesse=None, vor=0, nach=0, ausrichtung=None):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    if einzug:
        pf.first_line_indent = Mm(5)
    pf.space_before, pf.space_after = Pt(vor), Pt(nach)
    if ausrichtung is not None:
        p.alignment = ausrichtung
    for zeile_i, zeile in enumerate(text.split('\n')):
        if zeile_i:
            p.add_run().add_break()
        for i, teil in enumerate(re.split(r'\*\*', zeile)):
            if not teil:
                continue
            r = p.add_run(teil)
            r.bold = i % 2 == 1
            r.italic = kursiv
            if farbe:
                r.font.color.rgb = farbe
            if groesse:
                r.font.size = groesse
    return p


def seitenumbruch(doc):
    doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)


def titelseite(doc, fall, untertitel=None):
    for _ in range(6):
        doc.add_paragraph()
    absatz(doc, fall['reihe'], einzug=False, groesse=Pt(13), farbe=GRAU, ausrichtung=WD_ALIGN_PARAGRAPH.CENTER, nach=10)
    absatz(doc, fall['titel'], einzug=False, groesse=Pt(24), ausrichtung=WD_ALIGN_PARAGRAPH.CENTER, nach=6)
    absatz(doc, f"{fall['fall']} · Ein Krimi", einzug=False, kursiv=True, groesse=Pt(12), ausrichtung=WD_ALIGN_PARAGRAPH.CENTER, nach=40)
    if untertitel:
        absatz(doc, untertitel, einzug=False, groesse=Pt(12), farbe=GASTFARBE, ausrichtung=WD_ALIGN_PARAGRAPH.CENTER, nach=20)
    absatz(doc, fall['autorin'], einzug=False, groesse=Pt(14), ausrichtung=WD_ALIGN_PARAGRAPH.CENTER)
    seitenumbruch(doc)


def impressum(doc, fall):
    for _ in range(14):
        doc.add_paragraph()
    for z in [
        f"**{fall['reihe']} – {fall['fall']}: {fall['titel']}**",
        '© 2026 Diana [Nachname]. Alle Rechte vorbehalten.',
        'Herausgeberin: Diana [Nachname], [Straße Hausnummer], [PLZ Ort]',
        'Kontakt: [E-Mail-Adresse]',
        'ISBN: [wird bei der Veröffentlichung vergeben]',
        '',
        'Dieser Roman ist frei erfunden. Die Handlung spielt an realen Orten, alle Figuren, Firmen, Vereine und Ereignisse sind jedoch erfunden. Ähnlichkeiten mit lebenden oder verstorbenen Personen sind zufällig und nicht beabsichtigt.',
        'Der Text wurde mit Unterstützung künstlicher Intelligenz erstellt und von der Autorin überarbeitet.',
    ]:
        absatz(doc, z, einzug=False, groesse=Pt(8.5), nach=3)
    seitenumbruch(doc)


def inhaltsverzeichnis(doc, kapitel, seiten, extra):
    absatz(doc, 'Inhalt', einzug=False, groesse=Pt(18), nach=14)
    eintraege = [(f'{i}  {t}', t) for i, (t, _) in enumerate(kapitel, 1)] + [(t, t) for t in extra]
    for anzeige, schluessel in eintraege:
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(4)
        p.paragraph_format.tab_stops.add_tab_stop(Mm(114), alignment=2, leader=1)  # rechts, Punkte
        p.add_run(anzeige)
        p.add_run('\t' + str(seiten.get(schluessel, '')))
    seitenumbruch(doc)


def kapitelkopf(doc, nummer, titel):
    for _ in range(3):
        doc.add_paragraph()
    absatz(doc, f'Kapitel {nummer}', einzug=False, groesse=Pt(10), farbe=GRAU, ausrichtung=WD_ALIGN_PARAGRAPH.CENTER, nach=4)
    absatz(doc, titel, einzug=False, groesse=Pt(18), ausrichtung=WD_ALIGN_PARAGRAPH.CENTER, nach=24)


def lesefassung(fall, kapitel, seiten, ziel):
    doc = Document()
    grundlayout(doc)
    titelseite(doc, fall)
    impressum(doc, fall)
    inhaltsverzeichnis(doc, kapitel, seiten, [f"{fall['ort']} wirklich besuchen"])
    for n, (titel, absaetze) in enumerate(kapitel, 1):
        kapitelkopf(doc, n, titel)
        erster = True
        for a in absaetze:
            art, sprecher, text = zerlege(a)
            if art == 'spesen':
                absatz(doc, 'Aus Jos Spesenbuch: ' + text, einzug=False, kursiv=True, farbe=GRAU, groesse=Pt(10), vor=10)
            elif art == 'ganz':
                absatz(doc, text, einzug=False, kursiv=True, nach=6)
            else:
                absatz(doc, text, einzug=not erster)
            erster = False
        seitenumbruch(doc)
    absatz(doc, f"{fall['ort']} wirklich besuchen", einzug=False, groesse=Pt(18), nach=14)
    for t in fall['besuchen']:
        absatz(doc, t, einzug=False, nach=8)
    doc.save(ziel)


def seiten_ermitteln(docx_pfad, kapitel, extra):
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run([sys.executable, SOFFICE, '--headless', '--convert-to', 'pdf', '--outdir', tmp, docx_pfad],
                       check=True, capture_output=True)
        pdf = glob.glob(os.path.join(tmp, '*.pdf'))[0]
        txt = subprocess.run(['pdftotext', '-layout', pdf, '-'], check=True, capture_output=True, text=True).stdout
    seiten = txt.split('\f')
    ergebnis, start = {}, 0
    for i, s in enumerate(seiten):
        if re.search(r'^\s*Inhalt\s*$', s, re.M):
            start = i + 1
            break
    for titel in [t for t, _ in kapitel] + extra:
        for i in range(start, len(seiten)):
            muster = r'^\s*' + r'\s+'.join(map(re.escape, titel.split())) + r'\s*$'
            if re.search(muster, seiten[i], re.M):
                ergebnis[titel] = i + 1
                start = i
                break
    return ergebnis


def sprecherfassung(fall, kapitel, ziel):
    doc = Document()
    grundlayout(doc)
    titelseite(doc, fall, 'Sprecherfassung für das Hörbuch')
    absatz(doc, 'So liest du diese Fassung', einzug=False, groesse=Pt(16), nach=10)
    for t in [
        'Jeder Abschnitt beginnt mit dem Namen der Stimme in eckigen Klammern. **[JO]** ist die Erzählerin, auch für alles, was zwischen den Dialogen steht („sagte Konrad“). Wörtliche Rede steht bei der Figur, die spricht.',
        'Die Farben helfen beim Finden: Jo schwarz, Konrad blau, Benny grün, alle Nebenfiguren und Briefe lila.',
        'Wenn du allein liest, sprichst du alles selbst und veränderst nur die Stimme. Mit drei Sprechern teilt ihr die Rollen nach der Liste unten auf.',
        'Spesenbuch-Einträge am Kapitelende liest Jo etwas trockener, als kleine Pointe.',
    ]:
        absatz(doc, t, einzug=False, nach=6)
    absatz(doc, 'Rollen', einzug=False, groesse=Pt(14), vor=10, nach=6)
    for k, (name, wer) in fall['sprecher'].items():
        absatz(doc, f'**[{k}]** {name} – {wer}', einzug=False, nach=2)
    absatz(doc, 'Aussprache', einzug=False, groesse=Pt(14), vor=10, nach=6)
    for z in fall['aussprache']:
        absatz(doc, z, einzug=False, nach=2)
    seitenumbruch(doc)

    def zeile(sprecher, text, kursiv=False):
        farbe = FARBEN.get(sprecher, GASTFARBE)
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(5)
        p.paragraph_format.left_indent = Mm(4)
        p.paragraph_format.first_line_indent = Mm(-4)
        r = p.add_run(f'[{sprecher}] ')
        r.bold = True
        r.font.color.rgb = farbe
        r.font.size = Pt(9)
        for i, teil in enumerate(re.split(r'\*\*', text)):
            if teil:
                r = p.add_run(teil)
                r.bold = i % 2 == 1
                r.italic = kursiv
                r.font.color.rgb = farbe

    for n, (titel, absaetze) in enumerate(kapitel, 1):
        absatz(doc, f'Kapitel {n}', einzug=False, groesse=Pt(10), farbe=GRAU, nach=2)
        absatz(doc, titel, einzug=False, groesse=Pt(16), nach=4)
        zeile('JO', f'Kapitel {n}. {titel}.')
        for a in absaetze:
            art, sprecher, text = zerlege(a)
            if art == 'spesen':
                zeile('JO', 'Aus Jos Spesenbuch: ' + text, kursiv=True)
            elif art == 'ganz':
                zeile(sprecher, text, kursiv=True)
            elif art == 'erzaehlung':
                zeile('JO', text)
            else:
                pos = 0
                for m in QUOTE.finditer(text):
                    davor = text[pos:m.start()].strip(' ,')
                    if davor:
                        zeile('JO', davor)
                    zeile(sprecher, m.group(0))
                    pos = m.end()
                rest = text[pos:].strip(' ,')
                if rest:
                    zeile('JO', rest)
        seitenumbruch(doc)
    zeile('JO', f"{fall['ort']} wirklich besuchen.")
    for t in fall['besuchen']:
        zeile('JO', t)
    doc.save(ziel)


def main():
    ordner = os.path.abspath(sys.argv[1])
    fall = json.load(open(os.path.join(ordner, 'fall.json'), encoding='utf-8'))
    kapitel = lade_kapitel(ordner)
    extra = [f"{fall['ort']} wirklich besuchen"]
    lese = os.path.join(ordner, fall['datei'] + '.docx')
    lesefassung(fall, kapitel, {}, lese)
    seiten = seiten_ermitteln(lese, kapitel, extra)
    lesefassung(fall, kapitel, seiten, lese)
    fehlend = [t for t, _ in kapitel if t not in seiten]
    sprecher = os.path.join(ordner, fall['datei'] + '-Sprecherfassung.docx')
    sprecherfassung(fall, kapitel, sprecher)
    worte = sum(len(re.sub(r'^@@?[A-ZÄÖÜ]+\s', '', a).split()) for _, abs_ in kapitel for a in abs_)
    print(f'{len(kapitel)} Kapitel, {worte} Wörter (etwa {worte / 150:.0f} Minuten Hörzeit)')
    print('Seiten:', seiten)
    if fehlend:
        print('FEHLEND im Inhaltsverzeichnis:', fehlend)
    print(lese)
    print(sprecher)


if __name__ == '__main__':
    main()
