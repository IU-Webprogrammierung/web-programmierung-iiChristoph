# 🌌 Grundlagen der Webprogrammierung - Portfolio Webseite

Dieses Projekt wird ihm Rahmen des Creative Labs der IU Internationalen Hochschule durchgeführt. Die Webseite beinhaltet eine beispielhafte Portfoliowebseite von mir selbst.

## 🔧 Verwendeter Technologiestack

- **HTML**
- **CSS**
- **JavaScript**

## 📚 Verwendete Libraries

- **jQuery**
- **Vanta.js**
- **three.js** (Plichtabhängigkeit von Vanta.js)

## 🗿 Barrierefreiheit

Für die Barrierefreheit wurde weitgehend **rem** verwendet, es wurde ein Theme-Toggle implementiert, zudem wurde sichergestellt, das mit der Tastatur navigiert werden kann **tabindex**.
Es wurde mit auch mit **aria-labels** gearbeitet.

Die Barrierefreiheit wurde mit dem in den Entwicklertools verfügbarem Lighthouse-Analysetool evaluiert, das Ergebnis bezog sich auf **100%**.
Auch die SEO sowie Best Practices waren bei **100%**. Die Performance wurde nicht evaluiert. Als Browser wurder Google Chrome verwendet.

## 📑 Verzeichnisstruktur

    📦 web-programmierung-iiChristoph
    ┣ 📁 images
    ┣ 📁 js
    ┣ 📁 style
    ┣ 📄 index.html
    ┣ 📄 impressum.html
    ┣ 📄 quotes.json
    ┣ 📄 README.md
    ┗ 📄 .gitignore

## 📱 Responsives Design

Dieses Projekt verwendet zwei Breakpoints für das responsive Design:

- **768px** Anpassungen für Tablets und mittelgroße Bildschirme
- **600px** Optimierungen für Smartphones

## 🌈 Themes

Die Website verfügt über einen Dark- und Lightmode. Bei der Umsetzung wurden erst zwei CSS Dateien erstellt, die über einen Toggle-Switch ausgetauscht werden. Jetzt wird aber nur eine CSS verwendet, bei der einfach die Farbvariablen ausgetauscht werden. Diese Änderung sorgt dafür das man keinen doppelten Code hat und nichts doppelt ändern muss. Zudem wurde noch programmiert, das das letzte Theme im Cache gespeichert wird und sich nicht beim Reload zurücksetzt.

- 🌞 🌑 style.css

## ☑️ Anforderungen des Projekts

- Responsives Design (Nutzung von Breakpoints)
- Beachtung der Barrierefreiheit
- Versionsverwaltung mit GIT
- Mindestens 4 Seiten oder 4 Bereiche im One-Pager
- Nutzung von Flexbox oder Grid
- Optional Javascript Features z.B. Animationen

## ✅ Zusätzliche Features

- Theme - Switch für ein Dark- und Light-Mode und die Speicherung des Modes im Cache
- Dynamischer Splashscreen der auf Bewegungen der Maus reagiert
- Up-Animation
- Laden der Zitate über eine ausgelagerte JSON Datei
- Skip Link für um direkt auf den Content zu kommen
- Hobby Icon Spin Animationen
- CSS Variablen für leichtere Anpassung von Code

## 💽 Installation des Projekts

1. Klonen des Repositories über folgenden Befehl:

```bash
   git clone https://github.com/IU-Webprogrammierung/web-programmierung-iiChristoph.git
```

2. Projektordner in VSCode öffnen und über ein Liveserver-Plugin starten

## Making Of

In Phase 1 stand die Auseinandersetzung mit der Entwicklungsumgebung (IDE) sowie den grundlegenden Tools und Sprachen der Webentwicklung im Fokus. Aufgrund vorhandener Vorkenntnisse fiel mir der Einstieg relativ leicht. Ich habe mich schnell dafür entschieden eine Portfoliowebseite über mich selbst zu machen und konnte zügig mit der Konzeption beginnen, wobei ich bewusst auf ein schlichtes, aber zugleich abwechslungsreiches Design achtete, um den einzelnen Bereichen eine klare visuelle Trennung zu ermöglichen. Das positive Feedback zu meinem Konzept bestätigte diesen Ansatz, sodass ich in Phase 2 mit dem Styling fortfuhr. Dabei eignete ich mir neue Kenntnisse an; insbesondere die Nutzung von CSS-Variablen stellte sich für mich als besonders hilfreich heraus.
Im Hinblick auf Barrierefreiheit informierte ich mich über geeignete HTML-Tags und wählte meine Features bewusst so, dass sie auch unter diesem Aspekt sinnvoll einsetzbar sind. In der abschließenden Phase optimierte ich meinen Code, ergänzte zusätzliche Funktionen und dokumentierte sämtliche Schritte in der README-Datei meines Git-Repositories. Dadurch ist eine transparente Nachverfolgbarkeit der implementierten Features gewährleistet. Am Konzept musste ich nichts Anpassen.

Meine zusätzlichen Features, die ich implementiert habe:

- Theme-Switch für einen Dark- und Light-Mode sowie Speicherung des Modus im Cache
- Dynamischer Splashscreen, der auf Mausbewegungen reagiert
- Up-Animation
- Laden der Zitate über eine ausgelagerte JSON-Datei
- Skip-Link, um direkt zum Content zu springen
- Spin-Animationen für Hobby-Icons
- CSS-Variablen für leichtere Codeanpassungen

Während des gesamten Entwicklungsprozesses arbeitete ich mit Branches, was reibungslos funktionierte. Insgesamt hat mir das Lab-Projekt viel Freude bereitet. Ich konnte neue, praxisnahe Kenntnisse erwerben, die mir in zukünftigen Webentwicklungsprojekten von großem Nutzen sein werden. Mit dem finalen Ergebnis der Webseite bin ich sehr zufrieden das Ziel das ich mir gesetzt habe konnte Ich erreichen. Die Darstellung habe ich abschließend noch einmal in GitHub Pages überprüft – dort passt alles. Screenshots sind der Abgabe beigefügt. Als Standardbrowser habe ich Chrome verwendet und konnte über die Lighthouse Evaluation bei Accessibility, SEO und Best Practices jeweils 100 % erreichen.



Link zur GitHub Page: https://iu-webprogrammierung.github.io/web-programmierung-iiChristoph/
Zum Repository: https://github.com/IU-Webprogrammierung/web-programmierung-iiChristoph/tree/master
