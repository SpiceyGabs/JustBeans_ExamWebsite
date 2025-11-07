let cart = [];

function addToCart(productName, price) {
  const item = { productName, price };
  cart.push(item);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.querySelector(".cartItems");
  const totalEl = document.getElementById("cartTotal");
  
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("cartItem");
    itemEl.textContent = `${item.productName} - R${item.price.toFixed(2)}`;
    cartContainer.appendChild(itemEl);
    total += item.price;
  });

  totalEl.textContent = total.toFixed(2);
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert("Thank you for testing! Your total is R0.00. Checkout successful.");
  cart = [];
  updateCartDisplay();
});
