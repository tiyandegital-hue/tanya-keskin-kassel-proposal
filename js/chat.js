/* ============================================================
   WhatsApp Bot-Demo: Szenario-Player
   Alle Dialoge sind BEISPIELE (fiktive Namen/Zeiten/Preise).
   Kein Netzwerk, keine echten Daten — reine Front-End-Demo.
   ============================================================ */

const SCENARIOS = {
  buchen: {
    label: "Termin buchen",
    script: [
      { from: "user", text: "Hallo! Ich hätte gern einen Termin für Schneiden + Strähnen. Geht es Freitag Nachmittag?", time: "14:02" },
      { from: "bot", text: "Hallo und herzlich willkommen bei Hair & Dreams! 💛 Für Freitag, den 6. November hätte ich noch 14:30 Uhr oder 16:00 Uhr frei. Was passt Ihnen besser?", time: "14:02" },
      { from: "user", text: "16:00 Uhr passt super!", time: "14:03" },
      { from: "bot", text: "Perfekt! Ich trage ein: Strähnen + Schnitt, Freitag, 6. November, 16:00 Uhr. Wie heißen Sie, damit ich die Buchung speichern kann?", time: "14:03" },
      { from: "user", text: "Lisa Berger", time: "14:04" },
      { from: "bot", text: "Danke, Lisa! Ihr Termin ist gebucht. Am Vortag erhalten Sie von mir eine kurze Erinnerung per WhatsApp. Wir freuen uns auf Sie! ✨", time: "14:04" }
    ]
  },
  umbuchen: {
    label: "Umbuchen",
    script: [
      { from: "user", text: "Hallo, ich muss meinen Termin morgen leider verschieben.", time: "18:20" },
      { from: "bot", text: "Kein Problem! Ich habe Ihre Buchung gefunden: morgen, 5. November, 10:00 Uhr – Farbe + Schnitt. Auf welchen Tag darf ich umbuchen?", time: "18:20" },
      { from: "user", text: "Geht es nächste Woche Dienstag?", time: "18:21" },
      { from: "bot", text: "Dienstag, 10. November – da wären 9:30, 11:00 oder 15:30 Uhr frei.", time: "18:21" },
      { from: "user", text: "11:00 Uhr bitte", time: "18:22" },
      { from: "bot", text: "Erledigt! Neuer Termin: Dienstag, 10. November, 11:00 Uhr. Der alte Termin ist storniert. 👍", time: "18:22" }
    ]
  },
  preis: {
    label: "Preisfrage",
    script: [
      { from: "user", text: "Hallo! Was kostet bei euch Balayage?", time: "11:15" },
      { from: "bot", text: "Hallo! Balayage gibt es bei uns ab 120 € – der genaue Preis hängt von der Haarlänge ab. Dazu beraten wir Sie vorher gern kostenlos. Soll ich Ihnen einen Beratungstermin vorschlagen?", time: "11:15" },
      { from: "user", text: "Ja, gern nächste Woche.", time: "11:16" },
      { from: "bot", text: "Sehr gern! Nächste Woche hätte ich Mittwoch, 11. November um 14:00 Uhr oder Donnerstag, 12. November um 10:30 Uhr frei. Was passt?", time: "11:16" },
      { from: "user", text: "Donnerstag 10:30 Uhr", time: "11:17" },
      { from: "bot", text: "Notiert: Beratung Balayage, Donnerstag, 12. November, 10:30 Uhr. Bis dann! 💛", time: "11:17" }
    ]
  },
  erinnerung: {
    label: "Erinnerung",
    script: [
      { from: "bot", text: "Hallo Lisa! Kurze Erinnerung: Morgen, 6. November um 16:00 Uhr haben Sie Ihren Termin bei Hair & Dreams (Strähnen + Schnitt). Antworten Sie bitte mit JA zum Bestätigen oder NEIN zum Umbuchen.", time: "09:00" },
      { from: "user", text: "JA", time: "09:12" },
      { from: "bot", text: "Danke für die Bestätigung! Wir freuen uns auf Sie. 💛", time: "09:12" }
    ]
  }
};

(function () {
  const body = document.getElementById("chat-body");
  const tabs = document.querySelectorAll(".scenario-tabs button");
  const playBtn = document.getElementById("chat-play");
  const resetBtn = document.getElementById("chat-reset");
  if (!body) return;

  let timers = [];
  let current = "buchen";

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function addMsg(m) {
    const div = document.createElement("div");
    div.className = "msg " + (m.from === "bot" ? "in" : "out");
    const safe = m.text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    div.innerHTML = safe + '<span class="time">' + m.time + "</span>";
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement("div");
    t.className = "typing";
    t.innerHTML = "<i></i><i></i><i></i>";
    t.id = "typing-bubble";
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }

  function hideTyping() {
    const t = document.getElementById("typing-bubble");
    if (t) t.remove();
  }

  function playScenario(key) {
    clearTimers();
    body.innerHTML = "";
    current = key;
    tabs.forEach((b) => b.classList.toggle("active", b.dataset.scenario === key));
    const script = SCENARIOS[key].script;
    let delay = 500;
    script.forEach((m) => {
      if (m.from === "bot") {
        timers.push(setTimeout(showTyping, delay));
        delay += 900;
        timers.push(
          setTimeout(() => {
            hideTyping();
            addMsg(m);
          }, delay)
        );
      } else {
        timers.push(setTimeout(() => addMsg(m), delay));
      }
      delay += 1100;
    });
  }

  tabs.forEach((b) =>
    b.addEventListener("click", () => playScenario(b.dataset.scenario))
  );
  if (playBtn) playBtn.addEventListener("click", () => playScenario(current));
  if (resetBtn)
    resetBtn.addEventListener("click", () => {
      clearTimers();
      body.innerHTML = "";
    });

  // Autostart beim ersten Sichtbarwerden
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          playScenario("buchen");
          io.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  io.observe(body);
})();
