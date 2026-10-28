#!/usr/bin/env python3
"""Fügt Bildmarken („! n“) nach Absätzen ein, die mit einem bestimmten Text beginnen.
Aufruf: python3 bild-einfuegen.py <ordner> <kapitelnr> <nr> "<Anfang des Absatzes>" """
import os, sys
ordner, kap, nr, anfang = sys.argv[1:5]
f = os.path.join(ordner, 'text', f'{int(kap):02d}.txt')
teile = open(f, encoding='utf-8').read().split('\n\n')
if any(t.strip() == f'! {nr}' for t in teile):
    sys.exit(f'Bild {nr} ist schon drin')
for i, t in enumerate(teile):
    if t.lstrip('@ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ ').startswith(anfang) or t.startswith(anfang):
        teile.insert(i + 1, f'! {nr}')
        open(f, 'w', encoding='utf-8').write('\n\n'.join(teile))
        print(f'Bild {nr} nach Kapitel {kap}: {t[:50]}')
        break
else:
    sys.exit(f'Nicht gefunden: {anfang}')
