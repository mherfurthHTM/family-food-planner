# Family Food Planner – Migros (Version 1.1)

Kostenlose Web-App auf GitHub Pages für 7 Tage × Frühstück, Mittag- und Abendessen, frei wählbares Wochenbudget und Personenzahl sowie eine Migros-Einkaufsliste.

**Online:** https://mherfurthhtm.github.io/family-food-planner/

## Wochenplanung

- Auf der Startseite lassen sich **Budget (CHF 0.05 bis 1'000'000)** und **Personen (1 bis 100)** direkt anpassen.
- Klick auf **Neu berechnen** erstellt den Wochenplan für die gewählte Anzahl Personen und das Budget neu.
- Unter **Einstellungen** sind diese und andere Optionen ebenfalls verfügbar.
- Keine spezielle Diät ist vorgegeben: Zwiebeln, Rahm, Lachs und Eiweisspräferenz sind standardmässig nicht ausgeschlossen. Diese Einstellungen sind optional.
- Eine Budgetüberschreitung wird klar angezeigt; die Software kann bei unrealistisch tiefen Budgets keine Einhaltung garantieren.

## Meine Kochbücher

Unter **Bücher** (mobil) bzw. **Meine Kochbücher** (Desktop):

1. Rezeptdateien als **JSON** importieren, auch aus mehreren Kochbüchern.
2. Die Rezepte werden **ausschliesslich lokal auf dem verwendeten Gerät** gespeichert.
3. Importierte Rezepte können bei der Menüplanung priorisiert und einzeln entfernt werden.
4. Über **Meine Kochbücher sichern** eine Sicherung als JSON herunterladen; später wieder importieren.
5. Mit **Beispiel-Datei** eine korrekt formatierte Importdatei herunterladen.

Die App kann Kochbücher **noch nicht selbst aus PDFs oder Fotos auslesen**. Fotos/PDFs können zunächst im Chat in eine strukturierte Rezeptdatei umgewandelt und anschliessend in die App importiert werden. Das Buchmaterial gehört nicht in das **öffentliche** GitHub-Repository. Nur Rezepte mit Zutaten aus dem lokalen Migros-Richtpreis-Katalog können importiert werden; bisherige Produkt-IDs sind beispielsweise `rice`, `chicken`, `carrot`, `eggs`, `oil`.

### JSON-Beispiel

```json
{
  "book": "Familienrezepte",
  "recipes": [
    {
      "name": "Gemüsereis mit Ei",
      "type": "lunch",
      "servings": 3,
      "minutes": 25,
      "ingredients": [["rice", 330], ["eggs", 5], ["carrot", 320], ["peas", 240]],
      "steps": ["Reis kochen.", "Gemüse garen.", "Eier zugeben und mit Reis vermischen."]
    }
  ]
}
```

`type`: `breakfast`, `lunch` oder `dinner`. Bei Zutaten `[Produkt-ID, Menge]` und die Produkteinheit aus dem Katalog (g, ml oder Stk.) benutzen. Die `servings` bestimmen die Ausgangsportionen, die App passt die Mengen automatisch an die eingestellte Personenzahl an. Jede Rezeptdatei kann mehrere Rezepte enthalten und optional `source` pro Rezept setzen.

## GitHub Pages / Kosten

- Repository: https://github.com/mherfurthHTM/family-food-planner
- GitHub → Settings → Pages → Deploy from a branch → main / (root)
- Die Anwendung benötigt **keinen kostenpflichtigen Dienst, keine Datenbank und keine KI-API**.
- Lokale Browser-Daten sind nicht zwischen Geräten synchronisiert. Gelöschte Website-Daten löschen Pläne und gespeicherte Kochbuchrezepte; deshalb regelmässig exportieren.
- **Migros-Preise sind nur hinterlegte Schätzwerte und nicht live**. Budgetzusagen, aktuelle Angebote, tatsächliche Sortimente und automatische Migros-Bestellungen sind derzeit nicht möglich.
- Die App kombiniert die hinterlegten Rezepte algorithmisch. Eine fortlaufende KI, die neue Gerichte aus ganzen PDF-Kochbüchern generiert, ist bei dieser rein statischen Gratisversion **nicht** enthalten.
