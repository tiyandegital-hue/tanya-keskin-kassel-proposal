/* Haupt-Interaktionen: Nav, Reveal, FAQ, Demo-Formular */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  /* Mobile Nav */
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  /* Reveal on scroll */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (e.target.dataset.delay || 0) + "ms";
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* FAQ */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });

  /* Demo-Formular: sendet bewusst NICHTS */
  const form = document.getElementById("demo-form");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const ok = document.getElementById("form-ok");
      if (ok) ok.style.display = "block";
      form.querySelector("button[type=submit]").disabled = true;
      ok.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* Aktiver Nav-Link */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
});
