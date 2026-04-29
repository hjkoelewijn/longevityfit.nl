# QR-code werkend maken

De QR-code op de uitnodiging linkt naar jullie lancerings-/inschrijfpagina.

**Wat je moet doen:**

1. Zet jullie website online (bijv. op longevityfit.nl of jullie eigen domein).
2. Zorg dat de lanceringspagina bereikbaar is op een vaste URL (bijv. `https://julliedomein.nl/lancering`).
3. Vervang in **beide** bestanden (`uitnodiging-partners.html` en `uitnodiging-deelnemers.html`) overal:
   - `https://longevityfit.nl/lancering` → jullie echte URL (in de `<a href="...">` en in de `<img src="...">` van de QR).

**In de QR-afbeelding** staat de URL in de `data=` parameter, URL-gecodeerd. Voorbeeld:  
`data=https%3A%2F%2Flongevityfit.nl%2Flancering` = `https://longevityfit.nl/lancering`.  
Als jullie URL bijvoorbeeld `https://longevityfit.nl/lancering` is, hoef je niets te veranderen. Is het een andere URL, zoek dan op `longevityfit.nl` en vervang die door jullie domein; voor speciale tekens in de URL: zoek op "url encode" om de juiste code te krijgen voor de `data=` in de img src.

**Hoe het werkt:** Iemand scant de QR met de telefoon → de camera/app opent de opgeslagen URL → jullie inschrijfpagina opent. De QR wordt gegenereerd door api.qrserver.com; bij printen staat de afbeelding gewoon op de kaart.
