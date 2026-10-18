# Collage

Einfache Collage-App als Web-App (PWA). Läuft komplett im Browser, die Fotos verlassen das Gerät nicht.

## Funktionen

- Bis zu 12 Fotos aus der Mediathek wählen
- Automatisch passende Layouts (Zeilen, Spalten, ein großes Foto plus kleine)
- Format: 1:1, 4:5, 3:4, 9:16, 16:9, 3:2, 2:3
- Abstand, Rand, runde Ecken, Hintergrundfarbe
- Pro Foto: verschieben, zoomen (Zwei-Finger-Geste oder Regler), tauschen, entfernen
- Beschriftung mit Ort und Datum pro Foto: Aufnahmedatum und GPS-Standort werden aus den Foto-Metadaten gelesen (EXIF), alles lässt sich von Hand ändern. Der Ortsname wird auf Wunsch über OpenStreetMap (Nominatim) aus den Koordinaten ermittelt – dabei werden nur Koordinaten gesendet, nie Fotos.
- Ort und Datum sind pro Foto an- und abwählbar und lassen sich zusätzlich einmalig in einem eigenen Bereich (Streifen oben oder unten) zeigen: automatisch aus allen Orten und dem Zeitraum oder mit eigenem Text
- Formen: einzelne Fotos oder die ganze Collage als Kreis, Herz, Stern, Raute, Sechseck, Dreieck oder Blüte
- Freie Texte: beliebig viele, mit dem Finger verschiebbar, mit Schrift, Größe, Farbe, Drehung und Kontur
- „Neu" entfernt alle Fotos und beginnt eine neue Collage; einzelne Fotos lassen sich im Tab „Foto" entfernen
- Export als JPG oder PNG (1080 / 2160 / 3000 px) über das iOS-Teilen-Menü
- Funktioniert offline, sobald sie einmal geladen wurde

## Auf dem iPhone installieren

1. Link in **Safari** öffnen
2. Teilen-Symbol → **Zum Home-Bildschirm**

## Veröffentlichen mit GitHub Pages

Repo → Settings → Pages → Source: *Deploy from a branch* → Branch `main`, Ordner `/ (root)`.
Die App ist dann unter `https://<benutzername>.github.io/<repo-name>/` erreichbar.

## Lokal testen

```
npx serve .
```
