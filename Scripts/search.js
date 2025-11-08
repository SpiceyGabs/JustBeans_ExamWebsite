class ProductSearch {
    constructor() {
        this.products = [
            { name: 'Fog Valley Bean', type: 'coffee', price: 160, category: 'beans' },
            { name: 'Sunrise Blend', type: 'coffee', price: 120, category: 'beans' },
            { name: 'Espresso Machine', type: 'equipment', price: 3500, category: 'machines' },
            { name: 'Milk Jug', type: 'equipment', price: 180, category: 'accessories' },
            { name: 'Manual Coffee Grinder', type: 'equipment', price: 850, category: 'grinders' }
        ];
        this.init();
    }

    init() {
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => this.performSearch());
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.performSearch();
            });
        }
    }

    performSearch() {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const results = this.products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.type.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        this.displayResults(results);
    }

    displayResults(results) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No products found. Try different keywords.</p>';
            return;
        }

        resultsContainer.innerHTML = results.map(product => `
            <div class="productCard">
                <h3>${product.name}</h3>
                <p>Type: ${product.type}</p>
                <p>Price: R${product.price}</p>
                <button class="addToCartBtn" data-product="${product.name}" data-price="${product.price}">
                    Add to Cart
                </button>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProductSearch();
});