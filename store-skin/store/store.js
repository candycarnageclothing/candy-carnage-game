/* CANDY CARNAGE · STORE SKIN SCRIPT
   Loaded from GitHub via Integration Code > Body. */
(function () {
  "use strict";
  if (window.__ccStore) return; window.__ccStore = true;

  /* ---- edit these ---- */
  var BAR_TEXT = [
    "<b>CANDEMONIUM</b> PRE-ORDERS NOW OPEN",
    "RASPBERRY RAPTURE &amp; NUCLEAR NECTAR",
    "LIMITED SIZES",
    "NO RESTOCKS",
    "BE KIND. <b>REWIND.</b>"
  ];
  var BACK_LABEL = "BACK TO THE GAME";

  var onGame = !!document.getElementById("cc-game");   // the home page is the game itself
  if (onGame) return;

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  // scrolling bar at the top
  var items = BAR_TEXT.map(function (t) { return "<span>" + t + "</span>"; }).join("");
  var bar = el("div", "cc-bar"); bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Announcement");
  var sr = el("span", null, BAR_TEXT.join(". ").replace(/<[^>]+>/g, "")); sr.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)";
  var track = el("div", "cc-bar-track", items + items + items + items); track.setAttribute("aria-hidden", "true");
  bar.appendChild(sr); bar.appendChild(track);
  document.body.insertBefore(bar, document.body.firstChild);

  // CRT lines
  var crt = el("div", "cc-crt"); crt.setAttribute("aria-hidden", "true"); document.body.appendChild(crt);

  // back to the game
  var back = el("a", "cc-back", BACK_LABEL); back.href = "/"; document.body.appendChild(back);
})();
