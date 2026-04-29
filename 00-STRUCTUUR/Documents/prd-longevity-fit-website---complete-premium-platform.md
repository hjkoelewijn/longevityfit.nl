# Longevity Fit Website - Complete Premium Platform

## Introduction/Overview

Een complete premium website voor **Longevity Fit** - het eerste longevity programma van Nederland en België voor 40+ vrouwen. De huidige lanceringspagina wordt vervangen door een volwaardige website die bezoekers direct kan converteren naar betalende klanten voor de start op 11 mei 2025. De site moet premium uitstraling hebben, vertrouwen opbouwen, en gekwalificeerde prospects naar intake gesprekken leiden.

**Gebaseerd op:** Bestaande positionering en PRD, maar nu gericht op directe verkoop i.p.v. lancering-inschrijvingen.

---

## Goals

1. Gekwalificeerde intake gesprekken genereren voor programma start 11 mei 2025
2. Longevity Fit positioneren als premium longevity platform voor 40+ vrouwen (NL/BE)  
3. Vertrouwen opbouwen door premium uitstraling en duidelijke expertise
4. Conversie naar betaalde deelname Fase 1 (Reset programma)
5. Fundament leggen voor toekomstige fases en masterclasses

---

## User Stories

- Als 40+ vrouw wil ik begrijpen wat Longevity Fit is en waarom dit anders is dan andere programma's, zodat ik kan beoordelen of dit bij mij past
- Als potentiële deelnemer wil ik een intake gesprek kunnen inplannen zonder gedoe, maar wel het gevoel hebben dat dit exclusief en premium is
- Als drukke professional wil ik snel kunnen zien wat het programma inhoudt en direct actie kunnen ondernemen
- Als bezoeker wil ik duidelijkheid over wat Fase 1 is en dat er meer komt, zonder overweldigd te raken
- Als klant wil ik makkelijk toegang tot AVW en Privacy Policy bij betaling

---

## Functional Requirements

### 1. Homepage (vervangt huidige lanceringspagina)

**Doel:** Premium positionering + directe conversie naar intake gesprek

**Content structuur:**
1. **Hero sectie:** "Welkom in de beste helft van je leven" + krachtige headline over Longevity Fit
2. **Positionering:** Kern-boodschap uit positionering document (longevity betekenis, niet terug naar 25e)
3. **Wat we optimaliseren:** Energie, kracht, mindset voor 40+ vrouwen
4. **Drie-stappenplan:** Trainen, celniveau aanpak, mentale shift
5. **Fase 1 focus:** "Dit is Fase 1: Reset (8 weken)" - met resultaten/quotes
6. **Urgentie:** "Start 11 mei 2025" prominent zichtbaar
7. **Primaire CTA:** "Plan je intake gesprek" (naar intake pagina)
8. **Secundaire CTA:** "Lees meer over onze aanpak" (naar Over Ons)

**Technisch:** 
- Mobile-first responsive
- Lading onder 3 seconden
- Premium design met witruimte
- Krachtige beelden (geen fitness clichés)

### 2. Intake Gesprek Pagina

**Doel:** Kwalificatie + afspraak inplannen

**Content:**
- Wat gebeurt er in het intake gesprek
- Voor wie is dit geschikt (40+, commitment to change)
- Wat je kunt verwachten (duur, proces)
- "Dit is geen gratis coaching sessie maar een kwalificatie gesprek"

**Kwalificatie formulier:**
- Voornaam, achternaam (verplicht)
- E-mailadres, telefoonnummer (verplicht)
- Leeftijd dropdown (35-39, 40-45, 45-50, 50+)
- "Wat is je grootste uitdaging qua energie/kracht?" (tekstvak)
- "Ben je bereid om 8 weken te investeren in jezelf?" (ja/nee)
- "Hoe snel wil je starten?" (Mei 2025, later dit jaar, nog niet zeker)

**Na formulier:** Directe doorverwijzing naar Calendly-achtige tool voor afspraak inplannen

**Technisch:** Formulier koppeling met CRM/e-mail tool voor opvolging

### 3. Masterclass Pagina (voorbereid, maar optioneel live)

**Doel:** Gratis waardetoevoeging + warme leads genereren

**Content structuur:**
- "Gratis Masterclass: [Titel]" 
- Wat je gaat leren (3-4 concrete punts)
- Voor wie (40+ vrouwen die meer energie willen)
- Wanneer/waar (online)
- Inschrijfformulier (naam, email)
- "Na de masterclass kun je een intake gesprek inplannen"

**Technisch:** Aparte e-mail sequence voor masterclass deelnemers

### 4. Over Ons Pagina

**Doel:** Vertrouwen opbouwen + expertise tonen

**Content:**
- Filosofie Longevity Fit
- Waarom dit programma ontstond
- Team achtergrond (kort, premium)
- "Dit is Fase 1 van ons platform - er komt meer"
- Secundaire CTA naar intake gesprek

### 5. Algemene Voorwaarden Pagina

**Content:** Volledige AVW voor programma deelname en betalingen
**Technisch:** Vanuit betaalpagina (Plug&Pay) linkbaar

### 6. Privacy Policy Pagina  

**Content:** Privacy beleid conform GDPR
**Technisch:** Footer link, vanuit formulieren linkbaar

### 7. Navigatie & Footer

**Hoofdmenu:** Home | Over Ons | Intake Gesprek | [Masterclass]
**Footer:** AVW | Privacy Policy | Contact

---

## Technical Requirements

### Performance & Hosting
- Pagina laadtijd onder 3 seconden
- Mobile-first responsive design
- SSL certificaat
- Backup en security basics

### CMS & Beheer
- WordPress (of huidig systeem) voor content beheer
- Eenvoudig teksten kunnen aanpassen
- Formulieren koppelen aan bestaande e-mail/CRM tool

### Analytics & Tracking
- Google Analytics of alternatief
- Conversie tracking: formulier submissions, intake gesprekken geboekt
- Heatmaps voor optimalisatie (optioneel)

### Integraties
- Calendly-achtige tool voor afspraak planning
- E-mail marketing tool (Enormail of huidig systeem)
- Plug&Pay betaalsysteem (links naar AVW/Privacy)

---

## Design Requirements

### Visual Identity
- Premium, minimalistisch design
- Veel witruimte, krachtige typografie
- Kleuren: zwart, wit, warme accenten (goud/geel)
- Geen fitness clichés of standaard stockfoto's
- Professionele fotografie van sterke 40+ vrouwen

### User Experience  
- Duidelijke informatie hiërarchie
- Krachtige, actie-gerichte CTA's
- Premium gevoel zonder opzichtig te zijn
- Makkelijke navigatie, ook op mobiel

### Tone of Voice
- Premium maar toegankelijk
- Krachtig en empowerend
- Urgentie (11 mei start) zonder druk
- Leadership en expertise uitstralen

---

## Non-Goals (Out of Scope)

- Directe online betaling op website (gebeurt via Plug&Pay)
- Uitgebreide blog/content sectie (kan later)
- Community/forum functionaliteit  
- Voor/na foto's of testimonials (nog geen resultaten)
- Meertaligheid (v1: Nederlands)
- Uitgebreide FAQ sectie (kan later bij veel vragen)
- Partner/affiliate pagina's (Lois Lee, Skin Sis etc. - later)

---

## Success Metrics

### Primary Metrics
- Aantal intake gesprekken geboekt per week
- Conversie van website bezoeker naar intake gesprek (target: >3%)
- Conversie van intake gesprek naar betaalde deelname

### Secondary Metrics  
- Gemiddelde tijd op homepage (target: >2 minuten)
- Bounce rate homepage (target: <60%)
- Mobiel vs desktop gebruik
- Formulier completion rate

### Technical Metrics
- Pagina laadtijd (target: <3 seconden)
- Uptime (target: >99%)
- Formulier/booking systeem functionaliteit

---

## Timeline & Priority

### Phase 1 (Immediate - voor 11 mei)
1. Homepage (vervangt lanceringspagina)
2. Intake gesprek pagina + booking systeem
3. Over Ons pagina  
4. AVW en Privacy Policy pagina's
5. Basic responsive design en technical setup

### Phase 2 (Later, optioneel)
1. Masterclass pagina (als masterclasses worden gegeven)
2. Design optimalisaties
3. Extra content/FAQ als nodig

---

## Open Questions

1. **Exacte CRM/e-mail tool** voor formulier integratie (Enormail of ander?)
2. **Calendly-alternatief** voorkeur voor intake gesprek booking
3. **Huidige hosting/CMS** - blijft dit hetzelfde of overstappen?
4. **Contact gegevens** - telefoonnummer/adres voor website footer?
5. **Masterclass timing** - wanneer wordt besloten of deze er komt?
6. **Betaallink teksten** - exacte CTA tekst voor doorverwijzing naar Plug&Pay
7. **AVW en Privacy Policy** - heeft dit juridische review nodig?