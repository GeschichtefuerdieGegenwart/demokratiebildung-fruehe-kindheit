/* ===== Start: Ansicht nach der Adresse =====
   #start · Kompass · #e1 … #e8 · Deckblatt eines Blatts · #e3/a5 · ein Auftrag · #e3/lk · Hinweise für die Lehrkraft
   Alte Adressen aus Version 2 führen weiter: #heute → #e1, #heute-alle → #e1 mit allen Freigaben, #ausstellung → #e3/a5, #etappe-3 → #e3 */
(function () {
  document.documentElement.classList.add("js");
  if (S.ruhig) document.documentElement.setAttribute("data-bewegung", "weniger");
  function ansicht() {
    var hsh = decodeURIComponent(location.hash.replace(/^#/, ""));
    var alt = { "heute": "e1", "ausstellung": "e3/a5" };
    if (hsh === "heute-alle") { BS("e1").alle = true; speichere(); location.replace("#e1"); return; }
    if (alt[hsh]) { location.replace("#" + alt[hsh]); return; }
    var m0 = /^etappe-([1-8])$/.exec(hsh); if (m0) { location.replace("#e" + m0[1]); return; }
    var m = /^(e[1-8])(?:\/([a-zA-Z0-9]+))?$/.exec(hsh);
    if (m && BLAETTER[m[1]]) { zeigeBlatt(m[1], m[2] || null); return; }
    if (hsh === "faden" || hsh === "sichern") { zeigeKompass(); var z = document.getElementById(hsh); if (z) z.scrollIntoView(); return; }
    zeigeKompass();
  }
  window.addEventListener("hashchange", ansicht);
  sichernBauen();
  ansicht();
})();
