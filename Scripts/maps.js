// Initialize map
const map = L.map('worldMap').setView([0, 20], 2);

// Add tiles (map styling)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 6,
}).addTo(map);

// Add bean origin markers
const origins = [
  { name: "Brazil", coords: [-14.2, -51.9] },
  { name: "Kenya", coords: [0.0236, 37.9062] },
  { name: "Rwanda", coords: [-1.9403, 29.8739] }
];

// Loop through and place markers
origins.forEach(origin => {
  L.marker(origin.coords)
    .addTo(map)
    .bindPopup(`<b>${origin.name}</b><br>Source of our beans`);
});

//FOR MAP 2: LOCAL MAP
const map2 = L.map('worldMap2').setView([-28.4793, 24.6727], 5); // centered roughly over South Africa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 12,
}).addTo(map2);

const distributors = [
  { name: "Woolworths Sandton City Mall", coords: [-26.1074, 28.0567] },
  { name: "Woolworths Bryanston", coords: [-26.0563, 28.0166] },
  { name: "Spar Hartebeespoort", coords: [-25.7339, 27.8903] },
  { name: "Woolworths Menlyn Mall", coords: [-25.7843, 28.2775] },
  { name: "Woolworths Knysna", coords: [-34.0358, 23.0469] },
  { name: "Woolworths V&A Waterfront", coords: [-33.9076, 18.4206] }
];

//Place markers 
distributors.forEach(store => {
  L.marker(store.coords)
    .addTo(map2)
    .bindPopup(`<b>${store.name}</b><br>JustBeans stocked here!`);
});
