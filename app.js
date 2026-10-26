const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// Home tiles
$("#tiles").innerHTML = SECTIONS.map((s) =>
  `<button class="tile" data-id="${s.id}"><span class="icon">${s.icon}</span><span class="name">${esc(s.name)}</span><span class="blurb">${esc(s.blurb)}</span></button>`
).join("");
$("#tiles").addEventListener("click", (e) => {
  const t = e.target.closest(".tile");
  if (t) location.hash = t.dataset.id;
});
$("#close").addEventListener("click", () => { location.hash = ""; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") location.hash = ""; });

let map = null;

function card(title, sub, imgId, tall) {
  return `<div class="card${tall ? " tall" : ""}"><div class="art" id="${imgId}">${esc(title)}</div><div class="t">${esc(title)}</div><div class="s">${esc(sub || "")}</div></div>`;
}
function setImg(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.innerHTML = `<img src="${url}" alt="" loading="lazy">`;
}

async function loadAlbumArt(list) {
  list.forEach(async (a, i) => {
    try {
      const r = await fetch("https://itunes.apple.com/search?entity=album&limit=1&term=" + encodeURIComponent(a.artist + " " + a.title));
      const j = await r.json();
      const u = j.results && j.results[0] && j.results[0].artworkUrl100;
      if (u) setImg("m" + i, u.replace("100x100", "600x600"));
    } catch (e) { /* keep text fallback */ }
  });
}
async function loadBookCovers(list) {
  list.forEach(async (b, i) => {
    try {
      const r = await fetch("https://openlibrary.org/search.json?limit=1&fields=cover_i&q=" + encodeURIComponent(b.title + " " + b.author));
      const j = await r.json();
      const c = j.docs && j.docs[0] && j.docs[0].cover_i;
      if (c) setImg("b" + i, `https://covers.openlibrary.org/b/id/${c}-L.jpg`);
    } catch (e) {}
  });
}

const VIEWS = {
  music() {
    $("#panel-body").innerHTML = `<div class="grid">${MUSIC.map((a, i) => card(a.title, a.artist, "m" + i)).join("")}</div>`;
    loadAlbumArt(MUSIC);
  },
  travels() {
    $("#panel-body").innerHTML = `<div id="map"></div>`;
    map = L.map("map", { worldCopyJump: true }).setView([25, 10], 2);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "© OpenStreetMap contributors © CARTO", maxZoom: 18
    }).addTo(map);
    TRAVELS.forEach((p) =>
      L.circleMarker([p.lat, p.lng], { radius: 7, color: "#d97757", fillColor: "#d97757", fillOpacity: .85 })
        .addTo(map).bindPopup(`<b>${esc(p.place)}</b><br>${esc(p.note || "")}`));
  },
  games() {
    $("#panel-body").innerHTML = `<div class="grid">${GAMES.map((g, i) => card(g.title, g.note, "g" + i)).join("")}</div>`;
  },
  books() {
    $("#panel-body").innerHTML = `<div class="grid">${BOOKS.map((b, i) => card(b.title, b.author, "b" + i, true)).join("")}</div>`;
    loadBookCovers(BOOKS);
  },
  finance() {
    $("#panel-body").innerHTML = `<table><thead><tr><th>Topic</th><th>Why</th></tr></thead><tbody>${FINANCE.map((f) => `<tr><td>${esc(f.item)}</td><td>${esc(f.why)}</td></tr>`).join("")}</tbody></table>`;
  }
};

function route() {
  const id = location.hash.slice(1);
  const sec = SECTIONS.find((s) => s.id === id);
  if (map) { map.remove(); map = null; }
  if (!sec) { $("#panel").hidden = true; document.body.style.overflow = ""; return; }
  $("#panel-title").textContent = sec.name;
  VIEWS[sec.id]();
  $("#panel").hidden = false;
  $("#panel").scrollTop = 0;
  document.body.style.overflow = "hidden";
}
window.addEventListener("hashchange", route);
route();
