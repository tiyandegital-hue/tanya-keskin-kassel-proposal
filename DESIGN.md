# DESIGN.md — Hair & Dreams · WhatsApp Buchungsassistent (Konzept)

---
tokens:
  paper: "#FAF7F1"
  paper-deep: "#F3EEE4"
  ink: "#201914"
  gold: "#B3862C"
  gold-deep: "#8A671F"
  line: "rgba(32,25,20,.14)"
  radius: 14px
  display: "Cormorant Garamond, Georgia, serif"
  text: "Inter, system sans"
  wa-bg: "#0B141A"
  wa-out: "#D9FDD3"
mood: "warm · editorial · selbstbewusst"
market: "Friseursalon, Kassel, Deutschland"
audience: "Tanya Keskin (Inhaberin) — sie soll den Bot kaufen"
---

## Overview
Konzept-Entwurf (deutschsprachig) für einen WhatsApp-Buchungsassistenten des
Friseursalons Hair & Dreams in Kassel. Die Seite verkauft nicht an Endkundinnen,
sondern an die Inhaberin: Sie soll sehen, wie der Bot *ihren* Salonalltag
(Buchung, Umbuchung, Preisfragen, Erinnerungen) auf Deutsch meistert.
Ehrlich als KONZEPT markiert (Top-Bar, Footer, Impressum-Muster).

## Colors
- 1 Background: ivory paper #FAF7F1 (+ #F3EEE4 für Sektionen)
- 1 Foreground: espresso ink #201914
- 1 Akzent: antique gold #B3862C — NUR für CTAs, Eyebrows, aktive States
- WhatsApp-Grün (#25D366) ausschließlich innerhalb des Chat-Mocks (Produkt-UI)
- Keine Gradients, keine Glow-Orbs, keine Blobs (§18/§9)

## Typography
- Display: Cormorant Garamond 500, clamp(2.4rem, 5.2vw, 4.4rem), lh 1.02, tracking -0.02em
- Body: Inter 16px, lh 1.65, max 62ch
- Labels: 11px, uppercase, +0.22em tracking, gold-deep
- Max 2 Familien (§18)

## Layout
- 1140px Container, 8pt-Raster, Sektionen 96–128px Desktop / 56–72px Mobile
- Hero: 2-Spalten (Copy links, Phone-Mock rechts) + Ghost-Word "Buchungen"
- Steps: Editorial-Nummern 01–04 mit hairline-Trennlinien
- Preise: 3 Karten, mittlere mit Gold-Rahmen + "Empfehlung"-Flag

## Signature ideas (eine pro Seite)
- index: animierter WhatsApp-Mini-Chat im Hero (Autoplay, Tipp-Animation)
- bot-demo: interaktiver Szenario-Player mit 4 Tabs + Play/Reset
- so-funktioniert-es: übergroße Serifen-Nummern 01–04
- preise: hervorgehobene Mittelkarte mit ehrlichem Beispielpreis-Hinweis
- kontakt: dunkle Kontaktkarte (echte Daten) + Demo-Formular mit Consent

## Components
- Buttons: pill, gold (primär) / ghost (sekundär); min-height 48px; active scale .97
- Phone-Mock: 340px, 38px Radius, Notch, dunkler WA-Header, Tipp-Indikator
- FAQ: Akkordeon mit max-height-Transition
- Formular: Labels (kein Placeholder-only), Fokus-Ring gold, Consent-Checkbox, Demo-Hinweis

## Shapes / Elevation
- Radius 14px Karten, 18px Preis-/Kontaktkarten, pill Buttons
- Schatten sparsam: Karten-Hover 0 18px 44px rgba(32,25,20,.10); Phone 0 30px 70px

## Motion
- Entrance: opacity 0→1 + translateY 26px, 0.8s cubic-bezier(0.16,1,0.3,1), stagger 80–240ms
- Chat: Nachrichten 0.45s ease-out, Tipp-Punkte 1s-Loop
- prefers-reduced-motion: alles statisch; ohne JS bleibt alles sichtbar (.reveal default sichtbar)

## Do's and Don'ts
- DO: ehrliche KONZEPT-Kennzeichnung überall; Beispielpreise als solche markiert
- DO: echte Kontaktdaten des Salons (verifiziert, siehe LEAD.md)
- DO: Impressum + Datenschutz (Muster, DE-Pflicht)
- DON'T: keine erfundenen Statistiken/Reviews; keine Stock-Fotos als "Kundinnen"

## Known Gaps (ehrlich)
- Keine echten Salon-Fotos (Platzhalter: Typografie + Chat-Mock statt Bildwelt)
- Kein echtes Logo (Wortmarke in Serif als Platzhalter)
- Preise sind Beispielpreise — finale Kalkulation fehlt
- Google Fonts = einziger externer Embed (in Datenschutz offengelegt)
- Kein Backend: Formular und Chat sind reine Front-End-Demos
