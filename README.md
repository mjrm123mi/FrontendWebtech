# Finanzverwaltung mit EasyFinance

## Übersicht zur Webanwendung:

## 1. Allgemeine Infos:
EasyFinanz ist an diejenigen gerichtet die einen Überblick über ihre Finanzen erhalten wollten.
Die Idee ist einfach Ausgaben und Einnahmen eintragen zu können und mit Wichtigkeitslabels
und einer Filterfunktion so unnötige und hohe Ausgaben direkt zu entdecken.
Alle Transaktionen werden in einer Datenbank verwaltet.

## 2. Beschreibung der Anwendung mit Screenshots:

### 2.1 Feature 1: 
Transaktion hinzufuegen
HIER NOCH FOTO ENFUEGEN

### 2.2 Feature 2:
Transaktion löschen
HIER NOCH FOTO ENFUEGEN

### 2.6 Extra Feature:
Per Wichtigkeitslabel lassen sich besonders hohe Ausgaben so schnell entdecken, falls
eine Analyse gemacht wird.

### 2.7 Extra Feature:
Über eine Filterfunktion können sich auch nur die Ausgaben vom gewünschten Monat angezeigt werden.

### 2.8 Extra Feature:
Über eine weitere Filterfunktion kann sich angezeigt werden, was die teuresten Ausgaben waren.

## 3. Technologien:
Entwicklungsumgebung: IntelliJ IDEA 2024.2.4 (Ultimate Edition)

Datenbank: PosgreSQL

Backend: Node.js, Express

Frontend: Angular [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.,
HTML, CSS, Typescript

## 4. Anleitung zur Installation:

### 4.1 VPN verbinden

### 4.2 Backend starten mit
```bash
node serve.js
```

### 4.3 Frontend starten mit
```bash
ng serve
```
Sobald der Server läuft, öffne deinen Browser und gehe zu `http://localhost:4200/`. 
Die Applikation wird automatisch neu laden wenn du die source files veränderst.


## Code-Gerüstbau

Angular CLI enthält leistungsstarke Werkzeuge zur Codeerstellung. Um eine neue Komponente zu erzeugen, führe folgendes aus:
```bash
ng generate component component-name
```

Für eine vollständige Liste der verfügbaren Schemata (wie `components`, `directives`, oder `pipes`), führe folgends aus:

```bash
ng generate --help
```

## Bauen

Um das Projekt zu bauen, führen aus:

```bash
ng build
```

Dies kompiliert Ihr Projekt und speichert die Build-Artefakte im Verzeichnis `dist/`. 
Standardmäßig optimiert der Produktions-Build die Anwendung für Leistung und Geschwindigkeit.

##  Ausführen von Unit-Tests

Um Unit-Tests mit dem [Karma](https://karma-runner.github.io) Test Runner auszuführen, verwende folgenden Befehl:

```bash
ng test
```

## Ausführen von Ende-zu-Ende-Tests

Für Ende-zu-Ende (e2e) Tests, führe aus:

```bash
ng e2e
```

Angular CLI wird standardmäßig nicht mit einem End-to-End-Testframework ausgeliefert. Du kannst eines auswählen, das deinen Anforderungen entspricht.
## Zusätzliche Ressourcen

Weitere Infos zur Verwendung der Angular CLI, einschließlich detaillierter Befehlsreferenzen, findest du hier: [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
