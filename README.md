# Family Food Planner – Migros (Version 1.0)

Kostenlose Web-App für eine 7-Tage-Ernährungsplanung mit Frühstück, Mittag- und Abendessen, Rezepten, Budgetprüfung und Migros-Einkaufsliste. Sie funktioniert auf iPhones, Android-Geräten und Computern.

## Kostenlos mit GitHub Pages veröffentlichen

1. Auf https://github.com/new ein **öffentliches** Repository `family-food-planner` erstellen. GitHub Free und GitHub Pages sind für öffentliche Repositories kostenlos.
2. Falls du einen Assistenten für die Programmdateien verwendest, gib ihm den Link zum neuen Repository. Er kann die Dateien im Hauptverzeichnis hochladen. Alternativ die Dateien aus dem ZIP entpacken und über **Add file > Upload files** ins **Hauptverzeichnis** des Repositories hochladen. Wichtig: `index.html` muss direkt im Hauptverzeichnis liegen, nicht in einem zusätzlichen Ordner.
3. Im Repository zu **Settings > Pages** gehen. Bei **Build and deployment / Source** `Deploy from a branch` wählen. `main` und `/(root)` auswählen, anschliessend **Save**.
4. Nach der Veröffentlichung die App auf `https://mherfurthHTM.github.io/family-food-planner/` öffnen.
5. Auf dem iPhone in Safari **Teilen > Zum Home-Bildschirm** wählen.

Die App benötigt weder API-Schlüssel noch ein bezahltes Hosting, eine Datenbank oder ein Konto bei Migros. Die Dateien sind statisch (HTML/CSS/JavaScript) und verlinken alles über relative Pfade, sodass GitHub Pages funktioniert.

## Was die App kann

- 7 Tage mit je 3 Mahlzeiten (21 Gerichte), Rezepte und Zubereitung
- Haushaltsgrösse und Budget frei anpassen, Voreinstellung 3 Personen und CHF 180
- Ganze Einkaufspackungen zusammenrechnen, Einkäufe nach Kategorie gruppieren
- Ungewünschte Gerichte austauschen und Kosten neu berechnen
- Zwiebeln, Rahm und Lachs ausschliessen; proteinreiche Gerichte bevorzugen
- Vorhandenen Grundvorrat (Öl, Gewürze) berücksichtigen
- Einkaufsliste abhaken, zusätzliche Produkte mit geschätztem Preis ergänzen, kopieren und drucken
- Offline-Fähigkeit nach erstem erfolgreichem Laden über HTTPS, lokale Datenspeicherung im Browser

## Wichtige Grenzen

**Die hinterlegten Migros-Preise sind unverbindliche Schätzwerte.** Es besteht keine Live-Migros-Schnittstelle. Produkte, Angebote, Preise, Packungsgrössen und Verfügbarkeit unterscheiden sich je nach Zeitpunkt und Filiale. Ein Einhalten des angezeigten Budgets garantiert keinen entsprechenden Kassenbetrag. Es findet keine automatische Bestellung bei Migros statt. Der Menüplan ist eine automatisierte heuristische Auswahl; bei sehr kleinen Budgets kann das Limit überschritten werden, und die App zeigt dann eine Warnung.

Die Daten verbleiben im Browser des verwendeten Geräts. Sie werden nicht automatisch zwischen Geräten synchronisiert. Nach Löschen der Browserdaten können gespeicherte Einstellungen verloren gehen.

## Dateien

- `index.html`: Einstiegspunkt
- `app.js`: Rezepte, Planung, Preis- und Packungsberechnung, Einkaufsliste
- `styles.css`: Desktop- und Mobilansichten
- `manifest.webmanifest`, `icon.svg`, `sw.js`: Installierbare Web-App und Offline-Cache
- `.nojekyll`: deaktiviert Jekyll-Verarbeitung auf GitHub Pages

## Technik / laufende Kosten

Keine Framework-Abhängigkeiten, keine Datenbank, kein Cloud-KI-API-Aufruf, keine bezahlten Komponenten. GitHub Pages ist für öffentliche GitHub-Free-Repositories gratis, im Rahmen der geltenden Nutzungsgrenzen.