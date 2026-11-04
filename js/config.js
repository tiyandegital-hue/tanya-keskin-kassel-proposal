/* ============================================================
   HAIR & DREAMS — Konzept-Entwurf von Tiyan Digital
   EINE einzige Quelle für alle Business-Daten.
   Für den echten Einsatz: nur HIER ändern, Rest folgt automatisch.
   ============================================================ */
const BUSINESS = {
  name: "Hair & Dreams",
  owner: "Tanya Keskin",
  street: "Holländische Straße 26",
  zip: "34127",
  city: "Kassel",
  country: "Deutschland",
  phoneDisplay: "+49 561 896644",
  phoneHref: "+49561896644",
  whatsappDisplay: "+49 176 82290379",
  whatsappHref: "4917682290379",
  email: "Tanyasafaryan79@gmail.com",
  instagram: "@salon_tanya_keskin",
  instagramUrl: "https://www.instagram.com/salon_tanya_keskin",
  website: "hairanddreams.de",
  // Demo-Hinweis: Alle Chat-Namen, Zeiten und Preise auf dieser
  // Konzept-Seite sind Beispiele und keine echten Kundendaten.
  demoNote: "Alle Namen, Zeiten und Preise in den Chat-Beispielen sind frei erfunden und dienen nur der Demonstration."
};

// Kleine Helper: [data-biz] Platzhalter im HTML automatisch füllen
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-biz]").forEach((el) => {
    const key = el.getAttribute("data-biz");
    if (BUSINESS[key] !== undefined) el.textContent = BUSINESS[key];
  });
  document.querySelectorAll("[data-biz-href]").forEach((el) => {
    const key = el.getAttribute("data-biz-href");
    if (key === "whatsapp")
      el.href = "https://wa.me/" + BUSINESS.whatsappHref;
    else if (key === "phone") el.href = "tel:" + BUSINESS.phoneHref;
    else if (key === "email") el.href = "mailto:" + BUSINESS.email;
    else if (key === "instagram") el.href = BUSINESS.instagramUrl;
  });
  const y = document.querySelectorAll("[data-year]");
  y.forEach((el) => (el.textContent = new Date().getFullYear()));
});
