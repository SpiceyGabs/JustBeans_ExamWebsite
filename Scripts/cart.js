document.addEventListener("DOMContentLoaded", () => {
const cart = [];
const cartContainer = document.querySelector(".cartItems");
const totalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
  
// Grab ALL buttons across the site with this class annnndd attaches event listeners to all the add-to-cart buttons
const addButtons = document.querySelectorAll(".addToCartBtn");

addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
    const productName = btn.dataset.product;
    const productPrice = parseFloat(btn.dataset.price);
 addToCart(productName, productPrice);
    });
    } 

     // Add to cart logic
function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    updateCartDisplay();
  }

   // Update cart display
function updateCartDisplay() {
    if (!cartContainer) return;        //Prevent errors on pages without a cart
    cartContainer.innerHTML = "";
    let total = 0;

cart.forEach((item) => {
      const itemEl = document.createElement("div");
      itemEl.classList.add("cartItem");
      itemEl.textContent = `${item.productName} - R${item.price.toFixed(2)}`;
      cartContainer.appendChild(itemEl);
      total += item.price;
    });

if (totalEl) totalEl.textContent = total.toFixed(2);
  }

 // Add event listeners to all buttons,again
addButtons.forEach((btn) => {
btn.addEventListener("click", () => {
    const productName = btn.dataset.product;
    const productPrice = parseFloat(btn.dataset.price);
    addToCart(productName, productPrice);
    });
  });

  // Checkout button
if (checkoutBtn) {
checkoutBtn.addEventListener("click", () => {
    handlePayment();
    });
  }

//If the card declines or is invalid????????math.random????PAYMENT API'S BRUHHH omg
