// ===== EDIT THIS FILE to change the site. Everything below is placeholder content. =====

const SECTIONS = [
  { id: "music",  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',  name: "Music",       blurb: "Albums on repeat" },
  { id: "travels",icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>',  name: "Travels",     blurb: "Places I've been" },
  { id: "games",  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 8h11a4 4 0 0 1 3.9 3.1l.9 4.2a2.6 2.6 0 0 1-4.4 2.3L16 16H8l-2 1.6a2.6 2.6 0 0 1-4.4-2.3l.9-4.2A4 4 0 0 1 6.5 8z"/><path d="M7 10.5v3M5.5 12h3"/><circle cx="15.5" cy="11.5" r=".6" fill="currentColor"/><circle cx="17.5" cy="13" r=".6" fill="currentColor"/></svg>',  name: "Video Games", blurb: "Worth the hours" },
  { id: "books",  icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M9 7h7"/></svg>',  name: "Books",       blurb: "Read and re-read" },
  { id: "finance",icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/><path d="M15 7h5v5"/></svg>',  name: "Finance",     blurb: "What I'm following" }
];

// Album covers are fetched automatically from Apple's free iTunes Search API.
const MUSIC = [
  { title: "Blonde", artist: "Frank Ocean" },
  { title: "Currents", artist: "Tame Impala" },
  { title: "In Rainbows", artist: "Radiohead" },
  { title: "To Pimp a Butterfly", artist: "Kendrick Lamar" },
  { title: "Random Access Memories", artist: "Daft Punk" },
  { title: "Rumours", artist: "Fleetwood Mac" }
];

// lat/lng pins. Find coordinates by right-clicking a spot in Google Maps.
const TRAVELS = [
  { place: "Mumbai, India",        lat: 19.076, lng: 72.878,  note: "Home region" },
  { place: "Boston, USA",          lat: 42.360, lng: -71.058, note: "Current base" },
  { place: "Paris, France",        lat: 48.857, lng: 2.352,   note: "Placeholder" },
  { place: "Tokyo, Japan",         lat: 35.676, lng: 139.650, note: "Placeholder" }
];

const GAMES = [
  { title: "The Legend of Zelda: Breath of the Wild", note: "Placeholder" },
  { title: "Hades", note: "Placeholder" },
  { title: "Elden Ring", note: "Placeholder" },
  { title: "Celeste", note: "Placeholder" }
];

// Covers are fetched automatically from Open Library by title.
const BOOKS = [
  { title: "Dune", author: "Frank Herbert" },
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { title: "The Psychology of Money", author: "Morgan Housel" }
];

const FINANCE = [
  { item: "Index funds", why: "Placeholder: simple, low-cost, long-term" },
  { item: "Reading list", why: "Placeholder: annual letters and books I like" },
  { item: "Models", why: "Placeholder: little spreadsheets I build for fun" }
];
