# Static Site Generator
Gemäss der Recherche im Internet
- https://www.reddit.com/r/webdev/comments/1c8z739/what_is_your_favorite_static_site_generator/

Die bekanntesten Static-Site-Generatoren  
Hugo, 11ty, Jekyll, Astro, Nuxt

## Analyse
Folgender Prompt gemäss ChatGPT:  
wir müssen eine Website machen aus Markdown-Files.  
Die bekanntesten Static-Site-Generatoren  
Hugo, 11ty, Jekyll, Astro, Nuxt

erzähl mir was über diese Static-Site-Generatoren und sag mir, welche ich verwenden sollte

### 1. Hugo
**Sprache:** Go

**Key Features:**
- Extrem schnell beim Build (auch bei Tausenden von Seiten).
- Viele eingebaute Themes und sehr flexible Daten-Templates (Data-Files, Taxonomien).
- Keine externe Laufzeit nötig: Hugo ist ein einzelnes ausführbares Binary.

**Ideal für:** sehr grosse Sites, bei denen Build-Performance und Multi-Language wichtig sind.

### 2. Eleventy (11ty)
**Sprache:** JavaScript (Node.js)

**Key Features:**
- Super-leichtgewichtiger Core: aus Markdown, Nunjucks, Liquid, JavaScript-Templates usw. generiert es HTML.
- Kein Framework-Lock-in: ihr könnt eure eigene Template-Engine wählen.
- Sehr feines Cache-System und schnelle Rebuilds.

**Ideal für:** Entwickler, die volle Kontrolle über Templates wollen und bereits in JS zuhause sind.

### 3. Jekyll
**Sprache:** Ruby

**Key Features:**
- Der Klassiker und nativ auf GitHub Pages unterstützt (keine CI-Konfiguration nötig).
- Gut dokumentiert, grosse Community und zahllose Plugins.
- Liquid-Templates (wie Shopify) für einfache Logik.

**Ideal für:** kleine bis mittelgrosse Blogs oder Dokumentationsseiten, wenn ihr Ruby kennt oder GitHub Pages nutzt.

### 4. Astro
**Sprache:** JavaScript/TypeScript

**Key Features:**
- Island Architecture: ihr erstellt statisches HTML und ladet JavaScript-„Inseln“ nur dort, wo Interaktivität gebraucht wird.
- Mix aus Markdown-Content und React/Vue/Svelte-Komponenten möglich.
- Sehr performant durch minimales Payload und Partial-Hydration.

**Ideal für:** Content-reiche Seiten (Blogs, Docs, Marketing), bei denen ihr moderne JS-Frameworks verwenden möchtet, ohne grosse Client-Bundles auszuliefern.

### 5. Nuxt (Static Mode)
**Sprache:** JavaScript/TypeScript (Vue.js)

**Key Features:**
- Vollwertiges Vue-Framework mit allem Drum und Dran (Routing, Store, Middleware).
- `nuxt generate` produziert statische Seiten aus euren Markdown-Inhalten (meist über ein Modul wie `@nuxt/content`).
- Integriertes Image-Optimizing, i18n, PWA-Support usw.

**Ideal für:** komplexere Apps, bei denen ihr bereits mit Vue/Nuxt arbeitet und ssR/SPA-Features statisch prerendern wollt.

## Empfehlung
- Wenn ihr maximale Geschwindigkeit und ein kompaktes Setup wollt → **Hugo**
- Wenn ihr in JavaScript bleibt, volle Template-Kontrolle braucht und schlank starten wollt → **Eleventy (11ty)**
- Wenn ihr schnell auf GitHub Pages deployen möchtet und keine grosse JS-Toolchain aufsetzen wollt → **Jekyll**
- Wenn ihr moderne Framework-Komponenten (React/Vue/Svelte) mischen möchtet und super performante Seiten anstrebt → **Astro**
- Wenn ihr bereits ein Vue/Nuxt-Projekt habt oder eine komplexe Site mit vielen Features plant → **Nuxt**

Für eine reine Markdown-Content-Site, bei der es vor allem auf einfache Einrichtung, schnelle Rebuilds und wenig Overhead ankommt, empfehle ich **Eleventy (11ty)**.

Ihr braucht nur Node.js, installiert `@11ty/eleventy`, legt eure Markdown-Dateien in `content/` ab und schreibt minimalen Config-Code.

Der Einstieg ist sehr niedrigschwellig, und ihr könnt später jederzeit auf grössere Framework-Features umsteigen.

Wenn ihr hingegen höchsten Fokus auf Performance und sehr grosse Content-Bestände habt, ist **Hugo** eine exzellente Wahl.

## Unsere Wahl
Gemäss Dozent Fabian Hirter: Hugo ist zu kompliziert. Er selber hatte mehrere Stunden gebraucht, um sich einzuarbeiten.  
Gemäss ChatGPT nehmen wir 11ty, weil es scheinbar einfach einzurichten ist und wir Node.js schon installiert haben.  
Am Ende des Unterrichts am 16.06.2025 hat Fabian Hirter gesagt, wir sollen Eleventy benutzen.  
