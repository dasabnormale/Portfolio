# Vergleichstabelle: Statisches Hosting – Übersicht

| Anbieter              | Preis (Free-Tier)                         | CI/CD integriert                 | Custom Domain         | HTTPS | Serverlose Funktionen             | Performance / CDN               | Einschränkungen                                |
|----------------------|-------------------------------------------|----------------------------------|------------------------|--------|------------------------------------|----------------------------------|------------------------------------------------|
| **Netlify**          | Ja (sehr großzügig)                       | Ja                               | Ja                     | Ja     | Ja (Functions, Edge)               | Global CDN                      | Begrenzte Build-Zeit im Free-Tier              |
| **GitHub Pages**     | Ja                                        | Teilweise (über Actions)         | Ja (mit DNS-Einrichtung) | Ja     | Nein                               | Gut (aber begrenzter CDN)       | Keine serverseitige Logik                      |
| **GitLab Pages**     | Ja                                        | Ja                               | Ja                     | Ja     | Nein                               | Gut                              | Komplexere Einrichtung                         |
| **Cloudflare Pages** | Ja                                        | Ja                               | Ja                     | Ja     | Ja (Edge Functions)                | Exzellent (Cloudflare CDN)       | Kein Support für dynamisches Backend           |
| **Google Cloud Storage** | Nein (30 GB im Monat für 90 Tage)     | Nein                             | Ja                     | Ja     | Über Cloud Functions kombinierbar | Schnell, aber selbst konfigurierbar | Technisch komplexer                        |
| **Amazon S3**        | Nein (freies Kontingent 12 Monate)       | Nein                             | Ja                     | Ja     | Kombinierbar mit Lambda            | Hochperformant                   | Komplexer Setup, keine CI/CD                   |

---

# 🥇 Empfehlung nach Anwendungsfall:

## 1. Einfache persönliche oder Projekt-Webseite
- ✅ **Netlify oder Cloudflare Pages**
    - **Vorteil:** Schneller Setup, kostenlos, CI/CD inklusive, automatische Deployments.
    - **Empfehlung:** Netlify hat bessere Dev-Tools und UI, Cloudflare bessere Performance.

## 2. GitHub-basierte Projektseite (Open Source, Portfolio)
- ✅ **GitHub Pages**
    - **Vorteil:** Nahtlose Integration mit Repositories, sehr einfache Einrichtung.
    - **Einschränkung:** Weniger flexibel bei CI/CD und Build-Prozessen.

## 3. Selbstgehostete statische Seiten mit voller Kontrolle
- ✅ **Amazon S3 oder Google Cloud Storage**
    - **Vorteil:** Sehr skalierbar, gute Kontrolle über Berechtigungen, Lifecycle Policies.
    - **Einschränkung:** Komplexer Setup, CI/CD muss extern hinzugefügt werden.

## 4. Unternehmenswebsite oder größere Webanwendung
- ✅ **Netlify (Premium) oder Cloudflare Pages + Workers**
    - **Vorteil:** Globale Performance, serverlose Funktionen, Custom Routing, A/B Testing.

---

# 💡 Fazit

Für die meisten Entwickler oder kleine Teams ist **Netlify** derzeit der beste Allrounder:
- Einfache Einrichtung
- Guter Free-Tier
- Unterstützung für Serverless-Functions
- Automatisches Deployment über Git

**Alternativ** ist **Cloudflare Pages** besonders attraktiv für Performance-orientierte Projekte mit CDN-Fokus und Edge-Funktionen.

---