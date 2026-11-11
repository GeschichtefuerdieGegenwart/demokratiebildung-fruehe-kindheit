# Demokratiebildung in der frühen Kindheit

Lernseiten für das Wahlfach »Demokratie, jetzt und in Zukunft: Demokratiebildung in der frühen Kindheit« (Fachschule für Sozialpädagogik, Abschlussklasse, Tablet-Klasse).

**Stand:** Entwurf, noch nicht im Unterricht erprobt.

## Was hier liegt

`index.html` ist die ganze Seite in einer Datei. Sie läuft ohne Netz und lädt nichts von fremden Servern.

- **Jahreskompass** (Startseite): acht Etappen durch das Schuljahr, in der Mitte die Kinderrechte. Die Nadel zeigt auf die gewählte Etappe.
- **Heute** – Doppelstunde »Welches Volk meint die Demokratie?« in sieben Schritten: erinnern, sich festlegen, *demos* und *ethnos* unterscheiden, lesen und markieren, Begriffsnetz legen, einen Kita-Fall mit dem Dreibein prüfen, den eigenen Satz schreiben.

## Entscheidungen

- **Umfang:** ganze Doppelstunde, gemeinsam geführt – die Lehrkraft geht am Smartboard mit, die Lernenden arbeiten am eigenen Gerät. Positionslinie, Plenum und Demokratie-Ampel bleiben ohne Gerät.
- **Anrede:** »Sie« (erwachsene Lernende).
- **Freigaben:** Ein Schritt öffnet sich, wenn der vorige erledigt ist. Für das Smartboard öffnet `index.html#heute-alle` alle Schritte. Das ist kein Schutz, nur eine Bremse gegen Vorblättern.
- **Dreibein:** ein Modell, es misst nichts. Sechs Prüffragen (je zwei für Herrschafts-, Gesellschafts- und Lebensform) bestimmen die Länge der Beine.
- **Speichern:** Auswahl und Legebild im `localStorage` (Schlüssel `wpb-demokratie-ds3:v2`, nur Kennungen und Zahlen), Texte im `sessionStorage` bis zum Schließen des Tabs. »Eingaben löschen« steht im letzten Schritt.

## Status der Inhalte

- Kita-Fälle A–F: ausgedacht.
- Lesetext: aus dem Arbeitsblatt der ersten Stunde; die Literaturangaben dort sind noch am Original zu prüfen.
- Rückmeldetexte zu den zwölf Begriffen und zu den Fällen: neu formuliert, noch nicht geprüft.
- Zuordnung der acht Etappen zu den vier Blickrichtungen: Vorschlag.
- Antworten der Klasse in Schritt 2: ohne Namen.

## Bauen

```
python3 build.py
```

setzt `src/seite.html`, `src/seite.css`, `src/daten.js`, `src/logik.js` und die Schriften aus `fonts/` zu `index.html` zusammen. Inhalte stehen in `src/daten.js`, getrennt von der Logik.

## Geprüft und nicht geprüft

- Gelaufen (automatisch, Chromium): Durchlauf aller sieben Schritte, Neuladen, Löschen, Breiten 390, 820 und 1180 px ohne Überlauf, keine Abrufe von fremden Servern, keine Fehler in der Konsole.
- Nicht gelaufen: Safari auf einem echten iPad, VoiceOver, Beamer, Moodle.
- Bekannt: Ohne JavaScript bleibt der Jahreskompass leer. Die Druckfassung hat rund 13 Seiten; eine kurze Lernmappe fehlt.

## Schriften

Lora und Inter, SIL Open Font License 1.1 – siehe `fonts/LIZENZ.md`.
