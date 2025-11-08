// safe initialization for two Leaflet maps
// Helper to create a tile layer with attribution (avoids console warning)
function createTileLayer() {
  return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
}

// MAP 1: World origins (div id = worldMap)
(function initWorldMap() {
  const el = document.getElementById('worldMap');
  if (!el) return; // if not on this page, skip safely

  // Create map centered over the world
  const map = L.map(el).setView([0, 10], 2);

  // Add tiles
  createTileLayer().addTo(map);

  // Add markers
  const origins = [
    { name: "Brazil", coords: [-14.2, -51.9] },
    { name: "Kenya", coords: [0.0236, 37.9062] },
    { name: "Rwanda", coords: [-1.9403, 29.8739] }
  ];

  origins.forEach(o => {
    L.marker(o.coords).addTo(map).bindPopup(`<b>${o.name}</b><br>Source of our beans`);
  });

  // Optional: fit bounds if you want them zoomed to markers
  const originCoords = origins.map(o => o.coords);
  const bounds = L.latLngBounds(originCoords);
  map.fitBounds(bounds, { padding: [40, 40], maxZoom: 6 });
})();


// MAP 2: Local distributors in South Africa (div id = worldMap2)
(function initLocalMap() {
  const el2 = document.getElementById('worldMap2');
  if (!el2) return;

  // Create map focused over South Africa
  const map2 = L.map(el2).setView([-28.4793, 24.6727], 5);

  // Add tiles
  createTileLayer().addTo(map2);

  // Stores
  const distributors = [
    { name: "Woolworths Sandton City Mall", coords: [-26.1074, 28.0567] },
    { name: "Woolworths Bryanston", coords: [-26.0563, 28.0166] },
    { name: "Spar Hartebeespoort", coords: [-25.7339, 27.8903] },
    { name: "Woolworths Menlyn Mall", coords: [-25.7843, 28.2775] },
    { name: "Woolworths Knysna", coords: [-34.0358, 23.0469] },
    { name: "Woolworths V&A Waterfront", coords: [-33.9076, 18.4206] }
  ];

  distributors.forEach(store => {
    L.marker(store.coords).addTo(map2)
      .bindPopup(`<b>${store.name}</b><br>JustBeans stocked here!`);
  });

  // Fit bounds to markers for a good zoom
  const coords = distributors.map(d => d.coords);
  const bounds2 = L.latLngBounds(coords);
  map2.fitBounds(bounds2, { padding: [40, 40], maxZoom: 12 });
})();
