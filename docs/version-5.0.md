# Version 5.0 – Alle acht Etappen als Arbeitsblatt

**Stand:** 18.11.2026 · Branch `fassung-5-alle-etappen` (baut auf `fassung-4-a4-blatt` auf) · Entwurf, noch nicht im Unterricht erprobt.

## Auftrag und Lesart

Entschieden am 18.11.2026:
- Die Szene bleibt oben, als begründete Ausnahme von First-Action.
- Die beiden Extras passen zu den Praxisstellen.
- Die Hinweise für die Lehrkraft bleiben offen, solange keine Erwartungshorizonte dazukommen.

Dann kam der Auftrag: Baue die Etappen 2, 5, 4, 7, 6 und 8 jetzt alle.

So habe ich den Zuschnitt gelesen (*Einschätzung*):

- **Je Etappe ein Arbeitsblatt für eine Doppelstunde** – die erste und tragende Stunde der Etappe. Die weiteren Stunden, die das Curriculum vorsieht, stehen weiter als »kommt im Lauf des Jahres« im Kompass.
- **Etappe 4** trägt Macht und Haltung (Curriculum, Einheit 6: »persönliche Handlungsleitlinie«). Vielfalt und Anti-Bias kommen als Ausblick; sie bekommen eigene Stunden, mit dem Workshop »Stell dich nicht so an«.
- **Etappe 5** übernimmt DS 4 »Kinder beteiligen – aber wie?« mit dem Fall Matschhose.
- **Etappe 7** trägt die Gesprächsführung (Curriculum, Einheiten 21 bis 24): die Grenze der Kontroverse, Fakten mit Stand und das Gespräch in fünf Schritten. Diskriminierungsformen, Populismus und Desinformation bekommen eigene Stunden.
- **Etappe 8** ist die erste Stunde der Projektwerkstatt. Der Leistungsnachweis ist weiter offen; der Steckbrief passt zu den Varianten Praxisprojekt und Konzeptprodukt.

## Der gemeinsame Bogen

Alle neuen Blätter folgen dem Bogen von Etappe 1 und 3:

1. **erinnern** – drei Abruffragen zur vorigen Etappe
2. **die Szene** aus dem Impulsvortrag, mit Festlegung
3. **eigene Position** auf der Linie
4. **erarbeiten**, meist im Gruppenpuzzle
5. **üben**
6. **eigenes Produkt**, mit Kriterien erst nach dem Text
7. **Rückblick**: Rückkehr zur ersten Position, Lernspur und »Das kann ich«
8. **Zusammenfassung** auf zwei Seiten
9. **Extra** für die Praxisstelle

| Etappe | Arbeitsblatt | Erarbeiten und üben | Produkt |
| --- | --- | --- | --- |
| 2 | Warum gerade die Kita? | vier Gründe (entwicklungs-, sozial-, lernpsychologisch, praktisch) an der Szene geprüft · drei Einwände | Antwort für den Elternabend |
| 4 | Macht und Haltung | das Machtgefälle · neun Alltagssätze umformen · vier Merkmale demokratischer Haltung | persönliche Handlungsleitlinie |
| 5 | Kinder beteiligen – aber wie? | Fall Matschhose in vier Ecken · drei Stufen der Beteiligung · Kinderkonferenz, Beschwerdeweg, Kita-Verfassung · den Fall neu lösen | Beteiligungsformat mit Ampel |
| 6 | Demokratie im Alltag | vier Orte: Mahlzeiten, Wickeln, Schlafen, Morgenkreis · Fassade oder Willkür | Beteiligungscheck mit Ampel und eine Veränderung |
| 7 | Haltung zeigen | die Grenze der Kontroverse · Fakten statt Pauschalurteil · fünf Schritte im Rollenspiel | Antwort in fünf Sätzen |
| 8 | Ihr Praxisprojekt | sieben Fähigkeiten an Szenen · drei Projektideen prüfen | Steckbrief des eigenen Projekts |

**Neue Bausteine** in `src/blatt-bausteine.js`:
- Kartenrunde: links wählen, rechts lesen und festlegen
- Legen in Spalten, danach der Vorschlag mit Begründung
- Umformen: erst der eigene Satz, dann der Vorschlag und eine Selbstprüfung
- Ampel: Prüffragen mit »ja · teils · nein«, das Ergebnis steht als Wort
- Produkt in mehreren Feldern mit Kriterien
- noch einmal festlegen, mit Vergleich zur ersten Wahl
- Zusammenfassung aus Daten

**Übernahme alter Stände:** Die Szene behält den Schlüssel des früheren Einstiegsblatts (`eN.szene`). Die Notiz »In Ihrer Kita« (`eN.kita`) steht auf der Seite des Extras. Das ist geprüft mit einem Stand aus Fassung 4.0.

## Inhalte und Quellen

- **Aus dem Impulsvortrag:**
  - Etappe 2: Kapitel 3
  - Etappe 4: Kapitel 13
  - Etappe 5: Kapitel 6 und 10
  - Etappe 6: Kapitel 11 und 12
  - Etappe 8: Kapitel 14 und 15
- **Aus dem Curriculum (09.09.2026):** das Gesprächsmodell in fünf Schritten und die Gesprächskarten (Etappe 7, sprachlich leicht angepasst), die Leistungsnachweise.
- **Aus DS 4 (28.10.2026):** der Fall Matschhose, die vier Ecken, die Prüffragen und Merksätze der Expertengruppen, der Beispielsatz an das Kind und die Merkmale eines gelungenen Beteiligungsformats.
- **Aus dem Workshop »Stell dich nicht so an«:** die vier Ziele vorurteilsbewusster Bildung (Etappe 4, Ausblick).
- **Neu am Original geprüft (18.11.2026):**
  - Art. 1 Abs. 1, Art. 3 Abs. 3 Satz 1 und Art. 79 Abs. 3 GG, am Gesetzestext (gesetze-im-internet.de)
  - die drei Grundsätze des Beutelsbacher Konsenses (bpb.de)
- **Aktuelle Daten, Stand 18.11.2026, je mit Quelle:**
  - Landtagswahl Baden-Württemberg 2026: Pressemitteilung des Landes, vorläufiges amtliches Ergebnis; bpb
  - Landtagswahl Sachsen-Anhalt 2026: Ergebnis der Landeswahlleiterin über wahlrecht.de; LTO
  - Beschluss des VG Köln vom 26.02.2026 (13 L 1109/25): nach ZDF und LTO
  - Termin der Verhandlung im Hauptsacheverfahren (März 2027): nach beck-aktuell, 12.11.2026
- **Bewusst nicht übernommen:** die Zahlen der BilDe-Studie zu Mahlzeiten, solange sie nicht am Original geprüft sind.
- **Ausgedacht und so gekennzeichnet:** alle neuen Fälle, Momente, Einwände, Projektideen und Szenen in den Kartenrunden.

## Messungen (Chromium, 18.11.2026)

- **Durchlauf wie eine Lernende:** alle acht Blätter fertig. Etappe 5 zusätzlich bei 390 × 844, Etappe 7 bei 820 × 1180. Keine Fehler in der Konsole.
- **Rahmenprüfung** bei 1440 × 900, 1280 × 720, 1180 × 820, 1024 × 768, 820 × 1180 und 390 × 844, auf allen Seiten der neuen Blätter und auf der Startseite (alle acht Etappen gewählt): kein waagrechter Überlauf, keine Schrift unter 16 px, kein Ziel unter 44 px, keine doppelten IDs, alle Felder beschriftet.
- **Druck:**
  - je eine Seite: alle acht Deckblätter, alle Schreibblätter (auch der Steckbrief mit acht Feldern), Plakat
  - je zwei Seiten: alle acht Zusammenfassungen
  - Lernspur mit acht Etappen: zwei Seiten mit Sätzen üblicher Länge, drei mit sehr langen Testsätzen
- **First-Action:** Bei 1280 × 720 liegt der erste Knopf auf den Szenenseiten (Etappe 1, Auftrag 1; Etappen 2 und 4–8, Auftrag 2) unter dem ersten Bildschirm – die entschiedene Ausnahme. Bei 1180 × 820 betrifft es nur Etappe 1, Auftrag 1, und Etappe 2, Auftrag 2.

**Zeitdiagnose** am vollen Stand, Kartenrunden mit allen Karten, 150 Wörter pro Minute:

| Etappe | geplant | Wörter | Lesezeit |
| --- | --- | --- | --- |
| 2 | 70 + 3 Min. | 2.416 | etwa 16 Min. |
| 4 | 76 + 3 Min. | 2.858 | etwa 19 Min. |
| 5 | 78 + 3 Min. | 3.038 | etwa 20 Min. |
| 6 | 74 + 3 Min. | 2.466 | etwa 16 Min. |
| 7 | 76 + 3 Min. | 2.841 | etwa 19 Min. |
| 8 | 74 + 3 Min. | 2.245 | etwa 15 Min. |

Schätzung, nicht erprobt.

## Beim Bau gefunden und behoben

Übernommen in »kidu-bau« 0.9.1 (18.11.2026), zusammen mit den sieben Vorschlägen aus `docs/version-4.0.md`, Abschnitt 11.

1. **Zusammenfassung auf dem Telefon:** Eine Tabelle mit drei Spalten und langen Wörtern war so breit wie ihr längstes Wort und schob die ganze Seite über den Rand. Abhilfe: `table-layout: fixed` und Umbruch in den Zellen. Die Zusammenfassung jedes Blatts bei 390 Pixeln prüfen.
2. **Schreibblatt mit vielen Feldern:** Es druckte auf zwei Seiten, weil jedes leere Feld sechs Linien bekam. Abhilfe: Ab vier Feldern teilen sich die Felder die Linien. Die Seitenzahl je Schreibblatt messen.
3. **Kurze Knöpfe:** Ein Knopf mit dem Wort »ja« war 43 Pixel breit. Abhilfe: Mindestbreite 44 Pixel für kleine Knöpfe, nicht nur Mindesthöhe.
4. **Lange Wörter in der Kartenliste:** »entwicklungspsychologisch« lief unter die Karte daneben. Abhilfe: Umbruch und Silbentrennung, `min-width: 0` in Rasterspalten, einspaltig nach der Breite des Blatts.
5. **Wörter zählen mit Freigaben:** Freigaben auf Ansage gelten nur für die Sitzung. Eine Zählung mit geladenem Stand maß deshalb die Sperrseite (»Wo steckt die Macht?« mit 44 statt 264 Wörtern). Abhilfe: Für Messungen alle Aufträge freigeben.
6. **Wörter in Kartenrunden zählen:** Die Zählung sah nur die sichtbare Karte. Abhilfe: alle Karten anklicken und mitzählen (beim Gruppenpuzzle von Etappe 2: 219 → 671 Wörter).
7. **Lernspur wächst mit dem Jahr:** Mit acht Etappen druckte sie auf sechs Seiten. Abhilfe: eigene kompakte Druckregeln; mit Sätzen üblicher Länge und mit sehr langen Sätzen messen.
8. **Ein Blatt ersetzt ein anderes:** Die Notizen des alten Einstiegsblatts hätten keinen Platz mehr gehabt. Abhilfe: vor dem Ersetzen nach den alten Schlüsseln suchen und ihnen auf der neuen Seite einen Ort geben.
9. **Lieferung auf den Rechner:** Die Datei für den WPB-Ordner wurde unter demselben Ausgabe-Pfad wie am Vortag geschrieben. Gemeldet war »geschrieben«, auf dem Rechner lag danach aber die Fassung vom Vortag. Abhilfe: für jede Lieferung einen neuen Dateinamen nehmen, die Datei danach erneut vom Rechner holen und die Prüfsumme vergleichen.

## Nur du kannst das

- Safari auf dem iPad, hoch und quer: ein neues Blatt durcharbeiten, Freigaben auf Ansage, Kartenrunde, Legen.
- Echt drucken: ein Deckblatt, den Steckbrief als Schreibblatt, eine Zusammenfassung und die Lernspur. Einmal als PDF nach GoodNotes.
- **Etappe 7 vor der Stunde:** die Zahlen und die Einstufung neu prüfen. Das Ergebnis in Baden-Württemberg ist auf der Seite als vorläufig bezeichnet; das endgültige Ergebnis habe ich nicht gesehen. Eine Beratungsstelle vor Ort nennen.
- Den Leistungsnachweis festlegen (Etappe 8).
- `hier` in `src/daten-jahr.js` umstellen, wenn die Klasse weiterzieht.

## Vor dem Kopieren prüfen

- **Angaben aus dem Vortrag, nicht am Original geprüft:**
  - die Bedingungen der Kontakthypothese (Allport 1954)
  - Dewey 1916 (im Vortrag nach Dewey 2011, S. 121)
  - Selk und Jörke (2012)
  - Alemzadeh (2023): partizipatorische Eingewöhnung
  - Bartosch u. a. (2014, S. 14)
  - Stärck, Wach und Zankl (2019)
  - die Befunde nach Hansen, Knauer und Sturzenhecker
  - die sieben Fähigkeiten
  - die Szenen Mopslied, Erbsen und Mülleimer
- **Stufen der Beteiligung:** vereinfacht nach Hart (1992) und Schröder (1995). Der Begriff »Dekoration« folgt Schröder.
- **Alle Rückmeldetexte und Einstufungen** sind ein Vorschlag.
