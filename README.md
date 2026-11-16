# ruefenacht.net

Persoenliche Website von Simon Ruefenacht mit Schwerpunkten rund um Informatik, Cyber Security, Digitalisierung, gesellschaftliches Engagement und Fotografie.

**Live:** https://ruefenacht.net

## Seiten

- `index.html` - Startseite und Einstieg
- `ueber-mich.html` - persoenlicher und beruflicher Hintergrund
- `portfolio.html` - Portfolio und kuenftige Projekte
- `kontakt.html` - Kontakt per E-Mail und LinkedIn
- `impressum.html` - Impressum und Datenschutz
- `404.html` - benutzerdefinierte Fehlerseite

## Projektstruktur

```text
ruefenacht.net/
├── index.html
├── ueber-mich.html
├── portfolio.html
├── kontakt.html
├── impressum.html
├── 404.html
├── CNAME
└── assets/
    ├── css/
    │   ├── style.css
    │   └── page-styles.css
    ├── images/
    │   ├── IMG_0602.JPG
    │   ├── social-preview.jpg
    │   ├── favicon.ico
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon-192x192.png
    │   ├── favicon-512x512.png
    │   └── apple-touch-icon.png
    └── js/
        └── main.js
```

## Technik

Die Website ist bewusst als schlanke statische Website umgesetzt:

- HTML5
- CSS mit Responsive Design und Dark Mode
- Vanilla JavaScript
- Git und GitHub fuer Versionsverwaltung
- GitHub Pages fuer die Auslieferung
- Cloudflare fuer Domain/DNS und Proxy

Es werden keine JavaScript-Frameworks und kein Build-System benoetigt.

## Lokale Entwicklung

Repository klonen:

```bash
git clone https://github.com/simonrue/ruefenacht.net.git
cd ruefenacht.net
```

Lokalen Webserver starten:

```bash
python3 -m http.server 8000
```

Danach ist die Website unter `http://localhost:8000` erreichbar.

## Arbeiten auf mehreren Geraeten

Vor Beginn der Arbeit den aktuellen Stand holen:

```bash
git pull
```

Nach Aenderungen:

```bash
git status
git add .
git commit -m "Beschreibung der Aenderungen"
git push
```

GitHub dient dabei als zentraler Stand zwischen den verschiedenen Arbeitsgeraeten.

## Design und Funktionen

- Responsive Layout fuer Desktop, Tablet und Smartphone
- Mobile Navigation
- heller und dunkler Darstellungsmodus
- individuelle SR-Favicons
- Open-Graph-/Social-Preview-Bild
- Canonical URLs und grundlegende SEO-Metadaten
- eigene 404-Seite
- Impressum und Datenschutzerklaerung

## Social Preview

Das Vorschaubild fuer geteilte Links befindet sich unter:

```text
assets/images/social-preview.jpg
```

Die HTML-Seiten referenzieren dieses Bild ueber Open Graph und Social-Card-Metadaten.

## Deployment

Aenderungen am veroeffentlichten Branch werden ueber GitHub Pages bereitgestellt. Die produktive Domain lautet:

https://ruefenacht.net

## Geplante Weiterentwicklung

Die technische Basis der Website ist bewusst erweiterbar gehalten. Als naechste inhaltliche Schritte sind unter anderem echte Portfolio-Inhalte und ausgewaehlte Projekte vorgesehen.

## Kontakt

**Simon Ruefenacht**  
Langenthal, Schweiz  
E-Mail: simon@ruefenacht.net  
LinkedIn: https://www.linkedin.com/in/simon-ruefenacht

---

© Simon Ruefenacht
