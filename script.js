// =====================================
// SUBSCRIBE FEATURE (ALL PAGES)
// =====================================
function subscribe() {
  alert("Thank you for subscribing.");
}

// =====================================
// SHOPPING CART (SESSION STORAGE)
// =====================================

// Get cart from sessionStorage
function getCart() {
  let cart = sessionStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// Save cart to sessionStorage
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart
function addToCart(item) {
  let cart = getCart();
  cart.push(item);
  saveCart(cart);
  alert("Item added to the cart");
}

// View cart (Modal Window Simulation via Alert)
function viewCart() {
  let cart = getCart();

  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    let message = "Items in your cart:\n";
    cart.forEach((item, index) => {
      message += (index + 1) + ". " + item + "\n";
    });
    alert(message);
  }
}

// Clear cart
function clearCart() {
  let cart = getCart();

  if (cart.length > 0) {
    sessionStorage.removeItem("cart");
    alert("Cart cleared");
  } else {
    alert("No items to clear");
  }
}

// Process order
function processOrder() {
  let cart = getCart();

  if (cart.length > 0) {
    sessionStorage.removeItem("cart");
    alert("Thank you for your order");
  } else {
    alert("Cart is empty.");
  }
}

// =====================================
// CUSTOM ORDER FORM (LOCAL STORAGE)
// =====================================
function submitForm(event) {
  event.preventDefault();

  const customerInfo = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    order: document.getElementById("message").value
  };

  localStorage.setItem("customOrder", JSON.stringify(customerInfo));

  alert("Thank you for your message");
  event.target.reset();
}
