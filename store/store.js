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

  // credits page: Big Cartel's page editor won't take HTML, so the credits are drawn here
  var CREDITS = [
    ["Moth Character Design", "Kiplik", "https://www.fiverr.com/falahzaidan511"],
    ["3D Deadheart Model", "Zeeshan Mahmood", "https://www.fiverr.com/zeesh4n_mehmood"],
    ["Game Theme \u201CSugar Rush\u201D", "Handanu", "https://www.fiverr.com/handanu"],
    ["PS1 Paranormal Soundtrack & Shop Theme", "Bert, Bit by Bit Sound", "https://bit-by-bit-sound.itch.io/"],
    ["Console, Game Disc & Other Assets", "Candy Carnage Clothing", "", "Deadheart sugar crystals, color and animation"],
    ["Created & Directed By", "Candy Carnage Clothing", ""],
    ["Programming", "", "", "Built with AI assistance (Claude)"]
  ];
  var CREDITS_INTRO = "Candy Carnage: The Game was made with a lot of help. Every piece of art, music and character design in the shop was made by these human artists. Go show them some love.";
  if (document.body.id === "credits") {
    var box = document.querySelector(".custom-page .page-content") || document.querySelector(".page-content");
    // only fill an empty page: if credits were pasted into the page editor, those win
    if (box && box.textContent.replace(/\s+/g, "").length < 40) {
      var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
      var html = '<div class="cc-credits"><p class="cc-credits-intro">' + esc(CREDITS_INTRO) + "</p>";
      CREDITS.forEach(function (c) {
        html += "<h2>" + esc(c[0]) + "</h2>";
        if (c[1]) html += "<p>" + (c[2] ? '<a href="' + esc(c[2]) + '" target="_blank" rel="noopener">' + esc(c[1]) + "</a>" : esc(c[1])) + "</p>";
        if (c[3]) html += "<p><small>" + esc(c[3]) + "</small></p>";
      });
      box.innerHTML = html + "</div>";
    }
  }

  // back to the game
  var back = el("a", "cc-back", BACK_LABEL); back.href = "/"; document.body.appendChild(back);
})();
