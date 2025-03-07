# Finanzverwaltung mit EasyFinance

## Übersicht zur Webanwendung:
1. Allgemeine Infos:
2. Beschreibung der Anwendung mit Screenshots
3. Technologien
4. Anleitung zur Installation
5. Lizenz
6. Kontakt

## 1. Allgemeine Infos:
EasyFinanz ist eine Webanwendung,
die im Kurs Webtechnologien 2024/25
unter der Leitung von Prof. Freiheit
von Maryam Mirza entwickelt wurde.
Die Anwendung wurde mit Render deployed und ist unter https://backendwebtech.onrender.com
ereichbar.

Die Webanwendung wurde mit Angular, Node.js und PostgreSQL gebaut.

## 2. Beschreibung der Anwendung mit Screenshots:

EasyFinanz ist an diejenigen gerichtet die einen Überblick über ihre Finanzen erhalten wollten.
Die Idee ist einfach Ausgaben und Einnahmen eintragen zu können und mit Wichtigkeitslabels
und einer Filterfunktion so unnötige und hohe Ausgaben direkt zu entdecken.
Alle Transaktionen werden in einer Datenbank verwaltet.
Praktisch ist auch, dass hier auch Bar Einnahmen und Ausgaben erfasst werden können, was
bei einem herkömmlichen Kontoauszug nicht erfasst wird.

### 2.1 Feature 1: 
Transaktion hinzufuegen
HIER NOCH FOTO ENFUEGEN

### 2.2 Feature 2:
Transaktion löschen
HIER NOCH FOTO ENFUEGEN

### 2.6 Extra Feature:
Per Wichtigkeitslabel lassen sich unnötige Ausgaben so schnell entdecken.
Damit erhält die Nutzer:in leicht einen Überblick, wo sie einfach einsparen könnte.

## 3. Technologien:

Entwicklungsumgebung: IntelliJ IDEA 2024.2.4 (Ultimate Edition)

Datenbank: PosgreSQL

Backend: Node.js, Express

Frontend: Angular [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.,
HTML, CSS, Typescript

Server: Render https://render.com/

## 🛠️ 4. Anleitung zur Installation:

## Wichtiger Hinweis
Die Anwendung wurde mit Render deployed und ist unter https://backendwebtech.onrender.com
bis zum 06.04.2025 erreichbar. Danach wird sie von Server genommen, sie ist aber weiter lokal unter http://localhost:4200/ ereichbar.
Da die Datenbank auch über Render erstellt wurde, muss diese dann auch nach dem Ablaufdatum angepasst werden.
Die Umgebungsvariablen in der .env Datei müssten dann wieder an die "alte Datenbank" angepasst werden.
Dafür dann bei ocean nachschauen und die Userwerte etc. eintragen.


## Voraussetzungen:
HIER NOCH EINTRAGEN

## Repository klonen (Frontend und Backend)

```bash
git clone https://gitlab.rz.htw-berlin.de/s0591690/webtechnologien_frontend.git
```
```bash
git clone https://gitlab.rz.htw-berlin.de/s0591690/webtechnologien_backend.git
```

In das entsprechende Projektverzeichnis mit der Bash wechseln:
Beispielweise:
```bash
cd webtechnologien_frontend
```
```bash
cd webtechnologien_backend
```

## Abhängigkeiten installieren
*  mvn clean install
*  npm install (nur Frontend)

### VPN verbinden

### Backend starten mit
```bash
node serve.js
```

### Frontend starten mit
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


## 📝 5. Lizenz
Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen findest du in der LICENSE-Datei.

## 📞 6. Kontakt
Falls du Fragen hast, kontaktier mich unter:
Maryam.Mirza@Student.HTW-Berlin.de
