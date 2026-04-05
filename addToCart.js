export const addToCart = (event, id, stock) => {
  const card = event.target.closest(".cards");

  if (!card) return;

  const name = card.querySelector(".productName").textContent;
  const price = Number(
    card.querySelector(".productPrice").textContent.replace("₹", "").trim()
  );
  const quantity = Number(
    card.querySelector(".productQuantity").textContent.trim()
  );
  const image = card.querySelector(".productImage").src;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    if (existingProduct.quantity + quantity > stock) {
      alert("Not enough stock available");
      return;
    }

    existingProduct.quantity += quantity;
  } else {
    if (quantity > stock) {
      alert("Not enough stock available");
      return;
    }

    cart.push({
      id,
      name,
      price,
      quantity,
      image,
      stock,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  const cartValue = document.querySelector("#cartValue");
  if (cartValue) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartValue.innerHTML = `<i class="fa-solid fa-cart-arrow-down"></i> ${totalItems}`;
  }

  const updatedProduct = cart.find((item) => item.id === id);
  const usedQuantity = updatedProduct ? updatedProduct.quantity : 0;
  const remainingStock = stock - usedQuantity;

  const stockElement = card.querySelector(".productStock");
  if (stockElement) {
    stockElement.textContent = remainingStock;
  }

  card.querySelector(".productQuantity").textContent = 1;

  alert("Added to cart ✅");
};