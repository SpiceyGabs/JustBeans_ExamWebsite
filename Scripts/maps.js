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
