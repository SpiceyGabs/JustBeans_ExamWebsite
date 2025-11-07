const products = [
  { id: 1, name: "Brazilian Sunrise", keywords: ["brazil","sunrise", "smooth","amazon","south america", "nutty"] },
  { id: 2, name: "Kenyan Heritage", keywords: ["kenya","heritage", "bold","africa", "citrus"] },
  { id: 3, name: "Rwandan Gold", keywords: ["rwanda","gold","africa", "rich", "chocolate"] },
];

document.getElementById("searchInput").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  const results = products.filter((product) =>
    product.keywords.some((keyword) => keyword.includes(searchTerm)) ||
    product.name.toLowerCase().includes(searchTerm)
  );

  results.forEach((product) => {
    const resultItem = document.createElement("p");
    resultItem.textContent = product.name;
    resultsContainer.appendChild(resultItem);
  });

  if (results.length === 0 && searchTerm !== "") {
    resultsContainer.innerHTML = "<p> Oopsie! No results found :( </p>";
  }
});
