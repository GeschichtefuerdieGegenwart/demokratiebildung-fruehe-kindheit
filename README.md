# Demokratiebildung in der frühen Kindheit

Digitaler Leitfaden für das Wahlfach »Demokratie, jetzt und in Zukunft: Demokratiebildung in der frühen Kindheit« (Fachschule für Sozialpädagogik, Abschlussklasse, Tablet-Klasse).

**Stand:** Version 2.1 vom 11.11.2026. Entwurf, noch nicht im Unterricht erprobt.

## Was hier liegt

`index.html` ist die ganze Seite in einer Datei. Sie läuft ohne Netz und lädt nichts von fremden Servern.

| Bereich | Adresse | Inhalt |
| --- | --- | --- |
| Jahreskompass | `#start` | Acht Etappen durch das Schuljahr, in der Mitte die Kinderrechte. Darunter der rote Faden: der Impulsvortrag vom Fachtag (29.04.2026) in drei Teilen. |
| Etappen | `#etappe-1` bis `#etappe-8` | Zweigeteiltes Fenster: an der Seite »Ihr Weg durch diese Etappe« (Einstieg und Stationen, je mit Zweck, Dauer und Stand, dazu »Fertig sind Sie hier, wenn …«); im Fenster der Einstieg in drei Schritten – Szene mit Festlegung, Kern und Begriffe, Auftrag für die eigene Kita. |
| Lernseite | `#heute` | »Drei Formen – ein Ganzes« (Etappe 1) in fünf Schritten: Szene und Position, lesen und markieren, Begriffsnetz legen, Kita-Fall mit dem Dreibein prüfen, eigener Satz. |
| Ausstellung | `#ausstellung` | »Kinderrechte im Kita-Alltag« (Etappe 3): sechs Plakate mit Szene und Prüfstein, sechs Alltagskarten, eigenes Plakat für die Kita. |

## Die acht Etappen

Der Vortrag ist das Kerncurriculum. Die Etappen 1 bis 6 und 8 folgen seinen Kapiteln; Etappe 7 nimmt das erste Kapitel (»Was steht auf dem Spiel?«) wieder auf und bündelt die Curriculum-Einheiten zu Diskriminierung und Gesprächsführung.

| Nr. | Etappe | Szene | Im Vortrag |
| --- | --- | --- | --- |
| 1 | Demokratie verstehen | Drei Kinder am Fenster (Bürgermeister) | Teil I |
| 2 | Warum gerade die Kita? | »Wir brauchen einen Chef« | Teil II, Kapitel 3 |
| 3 | Kinder haben Rechte | Korczak zeigt sich selbst an | Teil II, Kapitel 4–5 |
| 4 | Macht und Haltung | »Wollt ihr heute rausgehen?« | Teil III, Kapitel 13 |
| 5 | Strukturen, die verlässlich sind | Das Mopslied | Teil II, Kapitel 6 · Teil III, Kapitel 10 |
| 6 | Demokratie im Alltag | »Erbsen esse ich nicht!« | Teil III, Kapitel 11–12 |
| 7 | Haltung zeigen | Beim Abholen | Teil I, Kapitel 1 – weitergedacht |
| 8 | Ihr Praxisprojekt | Der Mülleimer | Teil III, Kapitel 14–15 |

## Entscheidungen

- **Nationalismus-Teil entfernt.** Die drei Schritte »Erinnern«, »Festlegen« (These zum Volk) und »Welches Volk?« sind gestrichen; die Einheit ist mit der Klassenarbeit abgeschlossen. Damit stehen auch keine Antworten der Klasse mehr im Repository.
- **Umfang:** Jahreskompass und Etappenseiten sind Orientierung für wenige Minuten am Stundenbeginn. Lernseite und Ausstellung tragen je eine Phase oder Stunde, gemeinsam geführt am Smartboard. Positionslinie, Rundgang und Plenum bleiben ohne Gerät.
- **Anrede:** »Sie« (erwachsene Lernende).
- **Interaktionsmuster** (höchstens drei je Bereich): Einfachwahl mit Erklärung je Option und eigener Begründung (Etappen, Ausstellung) · Aufdecken nach Festlegung (Alltagskarten) · Satzanfang mit Kriterienvergleich (eigener Satz, eigenes Plakat). In der Lernseite zusätzlich Markieren im Text, Zuordnen mit Begründung und Regler mit sichtbarer Folge (Dreibein).
- **Freigaben:** Kern, Begriffe und Rückmeldung öffnen sich erst nach der eigenen Festlegung. In der Lernseite öffnet `index.html#heute-alle` alle Schritte für das Smartboard. Das ist kein Schutz, nur eine Bremse gegen Vorblättern.
- **Fortschritt** (Version 2.1, nach dem Vorbild der Politik-Werkstatt): ein Balken je Etappe, in der Lernseite und in der Ausstellung, immer mit Satz daneben. Er zählt erledigte Festlegungen und Produkte, keine Klicks: Einstieg = Festlegung getroffen · Lernseite = alle fünf Schritte abgeschlossen · Ausstellung = drei Plakate festgelegt und eigenes Plakat verglichen. Stationen, die noch kommen, zählen nicht mit. Der Kompass zeigt den Stand je Etappe (»1/2« oder ✓).
- **Bewegung:** nur nach einer Handlung (Nadel des Kompasses, Öffnen einer Freigabe, Dreibein). Dauern 100 bis 420 ms; die Nadel dreht 800 ms. Bei »weniger Bewegung« im System steht alles still.
- **Speichern:** Auswahl und Legebild im `localStorage` (Schlüssel `wpb-demokratie-leitfaden:v3`, nur Kennungen und Zahlen), Texte im `sessionStorage` bis zum Schließen des Tabs. »Eingaben löschen« steht im letzten Schritt der Lernseite und löscht alles.

## Status der Inhalte

- **Vorschlag, noch nicht geprüft:** Zuschnitt und Reihenfolge der acht Etappen, Zuordnung zu den vier Blickrichtungen, alle Rückmeldetexte, die Einstufung »zentral · lässt sich begründen · passt kaum«, die Zuordnung der Plakate zu den Prüfsteinen.
- **Ausgedacht und so gekennzeichnet:** die Kita-Fälle A–F, die sechs Szenen und sechs Alltagskarten der Ausstellung, die Szenen der Etappen 2, 4 und 7.
- **Aus dem Vortrag übernommen, am Original noch zu prüfen:** Bürgermeister-Szene, Korczak (Sämtliche Werke, Band 4), Mopslied (nach Sturzenhecker), Erbsen-Szene (Doll/Herrmann u. a. 2020), Mülleimer-Szene (Film 2008), Allport 1954, Dewey, Himmelmann 2004, Hansen/Knauer 2015.
- **Am Gesetzestext geprüft:** § 45 Abs. 2 Satz 2 Nr. 4 SGB VIII, § 8 Abs. 1 SGB VIII (Abgleich vom 01.11.2026), § 1631 Abs. 2 BGB (Fassung seit 01.01.2023, geprüft 11.11.2026).
- **Sinngemäß wiedergegeben, Wortlaut nicht abgeglichen:** UN-Kinderrechtskonvention, Präambel und Artikel 2, 12, 19, 31.
- Zahlen aus der BilDe-Studie stehen bewusst nicht auf der Seite, solange sie nicht am Original geprüft sind.

## Bauen

```
python3 build.py
```

setzt `src/seite.html`, `src/seite.css`, `src/daten.js` (Lernseite), `src/leitfaden.js` (Etappen und Ausstellung), `src/logik.js` und die Schriften aus `fonts/` zu `index.html` zusammen.

## Geprüft und nicht geprüft

- **Gelaufen (automatisch, Chromium, 11.11.2026):** Kompass mit Maus und Tastatur, eine Etappe mit Festlegung, Ausstellung mit drei Plakaten, Alltagskarte und eigenem Plakat, Lernseite durch alle fünf Schritte, Stand nach Neuladen, »Eingaben löschen«, Breiten 390, 820, 1180 und 1280 px ohne Überlauf, keine Abrufe von fremden Servern, keine Fehler in der Konsole. Bildschirmfotos von Start, Etappe 3 und Ausstellung angesehen.
- **Nicht gelaufen:** Safari auf einem echten iPad, VoiceOver, Zoom 200 %, Beamer, Moodle, axe, Impeccable und Taste Skill (Plugins fehlen).
- **Bekannt:** Ohne JavaScript bleiben Kompass, Etappen und Ausstellung leer. Die Druckfassung der Lernseite hat sieben Seiten, die der Ausstellung zwei; eine Merkseite auf zwei Seiten fehlt. Eine Zeitmessung am vollen Stand (150 Wörter pro Minute) steht aus.

## Schriften

Lora und Inter, SIL Open Font License 1.1 – siehe `fonts/LIZENZ.md`.
