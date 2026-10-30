# Family Food Planner – Migros (Version 1.0)

Kostenlose, mobilfreundliche Web-App für die Wochenplanung: 7 Tage × Frühstück, Mittagessen und Abendessen, Rezepte, Budget und Migros-Einkaufsliste.

## App kostenlos mit GitHub Pages veröffentlichen

1. Öffne [Settings → Pages](https://github.com/mherfurthHTM/family-food-planner/settings/pages).
2. Unter **Build and deployment → Source** wähle **Deploy from a branch**.
3. Als Branch wähle **main**, als Ordner **/(root)** und klicke **Save**.
4. Die App ist danach unter https://mherfurthhtm.github.io/family-food-planner/ erreichbar, sobald GitHub Pages die Veröffentlichung abgeschlossen hat.
5. Auf dem iPhone in Safari die Website öffnen, dann **Teilen → Zum Home-Bildschirm**.

## Funktionen

- Automatische Menüplanung für 7 Tage und 3 Mahlzeiten pro Tag
- Anzahl Personen und Wochenbudget frei anpassen (Standard: 3 Personen, CHF 180)
- Rezepte mit Zutaten und Kochanleitungen
- Wiederverwendung gemeinsamer Zutaten und Berechnung ganzer Einkaufspackungen
- Einkaufsliste nach Kategorien; abhaken, ergänzen, kopieren und drucken
- Gerichte austauschen und Wochenkosten neu berechnen
- Einstellungen für Zwiebeln, Rahm, Lachs, proteinreiche Mahlzeiten und Grundvorrat
- Lokale Speicherung im Browser, ohne Benutzerkonto
- Installierbare Web-App mit Offline-Unterstützung nach dem ersten Laden

## Projektdateien

- `index.html`: **Vollständige Anwendung** samt JavaScript und CSS (keine externen Abhängigkeiten)
- `manifest.webmanifest`, `icon.svg`: App-Icon und Installation zum Home-Bildschirm
- `sw.js`: Offline-Cache für statische Dateien
- `.nojekyll`: für GitHub Pages
- `README.md`: diese Anleitung

## Kosten und wichtige Einschränkungen

**Der Betrieb auf GitHub Pages ist für ein öffentliches Repository im kostenlosen GitHub-Free-Tarif gratis, innerhalb der GitHub-Nutzungsgrenzen.** Es braucht keine kostenpflichtige API, keinen Server und keine Datenbank.

**Achtung: Preise und Produkte sind nur Schätzwerte, keine Live-Migros-Daten.** Die App garantiert keinen tatsächlichen Einkauf für den geplanten Betrag und prüft keine Filialverfügbarkeit oder Aktionen. Es wird nichts bei Migros bestellt.

Alle Einstellungen, Pläne und Häkchen werden nur im Browser auf deinem Gerät gespeichert. Es gibt keine automatische Synchronisierung. Wenn Browserdaten gelöscht werden, können die Daten verloren gehen.
