# Lanceringspagina online zetten

Je hebt nu een map met o.a. `lancering.html`, `css/`, `js/`, `images/`. Om dit op een echte webpagina te krijgen die je kunt delen, heb je **hosting** (een plek op het internet waar de bestanden staan) nodig.

---

## Optie 1: Bestaande hosting (eigen domein bv. longevityfit.nl)

Als je al een domein en hosting hebt (bijv. bij **TransIP**, **One.com**, **Strato**, **Hostnet**, **Antagonist**):

1. Log in op je hosting (cPanel, Plesk of hun eigen beheer).
2. Ga naar **Bestanden** / **File Manager** of gebruik **FTP** (FileZilla, Cyberduck).
3. Upload de bestanden naar de **public** map (vaak `public_html`, `www` of `htdocs`):
   - `lancering.html`
   - de map `css/` (met alle bestanden erin)
   - de map `js/` (met alle bestanden erin)
   - de map `images/` (met o.a. `hero.jpg`)
4. Zorg dat de mappenstructuur hetzelfde blijft (lancering.html in de root, daarnaast de mappen css, js, images).

**Link om te delen:**  
`https://longevityfit.nl/lancering.html`  
(of `https://longevityfit.nl/lancering` als je een “mooie URL” instelt op je hosting)

---

## Optie 2: Gratis hosting (Netlify of Vercel)

Geen hosting? Dan kun je gratis **static hosting** gebruiken:

### Netlify (aanrader)

1. Ga naar [netlify.com](https://www.netlify.com) en maak een gratis account.
2. Sleep de **hele projectmap** (BrutaalFit, met daarin o.a. lancering.html, css, js, images) naar het vak **“Drag and drop your site here”** op het dashboard.
3. Netlify geeft je direct een link, bijv. `https://random-naam-123.netlify.app/lancering.html`.
4. (Optioneel) In **Domain settings** kun je later je eigen domein (longevityfit.nl) koppelen.

### Vercel

1. Ga naar [vercel.com](https://vercel.com), maak een account.
2. **Add New** → **Project** → upload de map of koppel een Git-repo.
3. Je krijgt een URL zoals `https://jouw-project.vercel.app/lancering.html`.

---

## Wat je moet uploaden (minimaal voor alleen de lanceringspagina)

- `lancering.html`
- map `css/` (hele map)
- map `js/` (hele map)
- map `images/` met daarin `hero.jpg` (en evt. andere afbeeldingen die je gebruikt)

De **link** die je deelt is dan:  
`https://jouwdomein.nl/lancering.html`  
(of de URL die Netlify/Vercel geeft).

---

## QR-code en uitnodiging

De QR-code in jullie uitnodiging wijst naar `https://longevityfit.nl/lancering`. Zorg dus dat op die URL de lanceringspagina te zien is (bijv. door `lancering.html` daar te plaatsen of een “mooie URL” in te stellen die naar dat bestand gaat).
