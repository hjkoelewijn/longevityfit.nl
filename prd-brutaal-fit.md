# Longevity Fit — Product Requirements Document

## Introduction/Overview

Een premium website voor **Longevity Fit** — het eerste longevity programma van Nederland en België voor 40+ vrouwen. Het doel is bezoekers te informeren over de positionering en ze te laten inschrijven voor de lancering. De site straalt premium, kracht en helderheid uit: geen dieet-cultuur of lifestyle-blog, wel leadership en verantwoordelijkheid voor je eigen jaren.

**Bron voor positionering:** `positionering-longevity-fit.md`

---

## Goals

1. Lancering-inschrijvingen genereren via duidelijke copy en CTA
2. Longevity Fit positioneren als eerste en grootste longevity platform voor 40+ vrouwen (NL/BE)
3. Onderscheid creëren t.o.v. typische 40+ programma’s door longevity-focus (niet “terug naar 25”, wel krachtiger leven)
4. Schaalbaar fundament voor latere programma’s en content (Reset, Build, Lock it in)

---

## User Stories

- Als 40+ vrouw wil ik begrijpen wat Longevity Fit is en waarom de aanpak anders is, zodat ik kan beslissen of dit bij mij past
- Als potentiële deelnemer wil ik me eenvoudig aanmelden voor de lancering (naam, email, telefoon) zonder ingewikkelde formulieren
- Als bezoeker wil ik de kern van het programma en de drie fases (Reset, Build, Lock it in) zien
- Als drukke professional wil ik een snelle, mobielvriendelijke site zodat ik op elk device kan kijken en inschrijven

---

## Paginastructuur (meerdere pagina’s)

### 1. Homepage

- **Doel:** Positionering en vertrouwen; primaire CTA naar de lancering.
- **Content:** De positioneringstekst uit `positionering-longevity-fit.md` (kern, wat longevity betekent, wat we optimaliseren, drie manieren, drie fases). Geen volledige sales-pagina; wel de boodschap “beste helft van je leven” en heldere differentiatie.
- **CTA:** “Meld je aan voor de lancering” (link naar de Lanceringspagina).
- **Tone:** Premium, eerlijk, empowerend; geen confrontatie om de confrontatie.

### 2. Lanceringspagina

- **Doel:** Bezoekers laten inschrijven voor de lancering (9 april 2026).
- **Content:** Tekst van de uitnodiging (voor- en achterkant):
  - Welkom in de beste helft van je leven
  - 9 april 2026 — Inloop 19:15 | Start 19:30
  - Waarom deze avond, wat ze ontdekken (bullets), voor wie het is, plek voor 100 vrouwen, etc.
- **Formulier:** Verplichte velden:
  - Voornaam
  - Achternaam
  - E-mailadres
  - Telefoonnummer
- **CTA op de pagina:** “Schrijf je in” / “Claim je plek” (submit van het formulier).
- **Technisch:** Inschrijvingen koppelen aan Enormail (of gekozen e-mail/CRM); bevestigingsmail na inschrijving.

### 3. Over ons

- **Doel:** Achtergrond bij de methode en het team; vertrouwen en herkenning.
- **Content:** Filosofie, waarom Longevity Fit, evt. korte team-/oprichtersverhaal. Kan later uitgebreid worden met foto’s en partners (Lois Lee, Skin Sis, etc.).
- **CTA:** Secundair “Meld je aan voor de lancering” naar lanceringspagina.

### 4. Toekomstige pagina’s (optioneel, later)

- **Programma / Methode** — Uitgebreide uitleg van Reset, Build, Lock it in (voor na de lancering).
- **Masterclass** — Als er een aparte (gratis) masterclass komt, eigen pagina met eigen inschrijfformulier.
- **Contact** — Contactformulier of contactgegevens.
- **Blog / Artikelen** — Longevity, 40+, training, mindset (SEO en autoriteit).
- **Partners** — Logo’s en korte beschrijvingen (Lois Lee, Skin Sis, etc.).
- **FAQ** — Veelgestelde vragen over programma en lancering.

Deze staan in de PRD als opties; prioriteit en scope bepalen we per release.

---

## Functionele eisen

### Inschrijfformulier lancering

- Velden: voornaam, achternaam, e-mailadres, telefoonnummer (allemaal verplicht).
- Integratie met Enormail (of alternatief) voor opslag en e-mailworkflows.
- Automatische bevestigingsmail na inschrijving.
- Data veilig opslaan en toegankelijk voor organisatie.

### Content

- Homepage: positionering uit `positionering-longevity-fit.md`; CTA “Meld je aan voor de lancering”.
- Lanceringspagina: volledige tekst van de uitnodiging + inschrijfformulier.
- Over ons: basis “Over ons”-tekst; uitbreidbaar.

### Technisch

- Responsive (mobile-first).
- Paginalaadtijd onder 3 seconden.
- WordPress (of gekozen CMS) voor beheer van pagina’s en teksten.
- SEO: duidelijke structuur, meta titles/descriptions per pagina.
- Google Analytics (of alternatief) voor conversie en gedrag.
- SSL en basis security.

### Design

- Premium, minimalistisch; veel witruimte.
- Kleuren: zwart, wit, warme accenten (bijv. goud/geel zoals in huidige huisstijl).
- Typografie: strakke, krachtige fonts (bijv. Bebas Neue voor koppen).
- Geen fitnessclichés, geen standaard stockfoto’s; eigen fotografie waar mogelijk (sterke vrouwen, 40+).
- Professioneel, leadership-achtig; aansluitend bij positionering.

---

## Non-Goals (voor nu)

- Directe verkoop van programma’s (focus: lancering-inschrijvingen).
- Gratis leadmagneten (downloads) als eerste stap.
- Intakeformulieren vóór inschrijving lancering.
- Community/platform-functionaliteit.
- Voor/na-galerij; testimonials kunnen later.
- Meertaligheid (v1: Nederlands/Vlaams).

---

## Success metrics

- Conversieratio lancering-inschrijvingen (t.o.v. unieke bezoekers).
- Paginasnelheid onder 3 secondes.
- Mobiel gebruik en responsiveness.
- E-mailbezorging en open rate bevestigingsmail.
- Lage bounce rate op homepage en lanceringspagina.

---

## Open questions

1. Exacte Enormail (of andere tool) specificaties en API voor formulierkoppeling.
2. Definitieve huisstijl en logo (Longevity Fit).
3. Beeldmateriaal: owned photography en eventuele partnerlogo’s.
4. Eventuele countdown of “plek voor 100 vrouwen”-indicator op lanceringspagina.
5. Google Analytics (of alternatief) en conversiedoelen voor lancering.
