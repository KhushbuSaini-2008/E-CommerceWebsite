const cartContainer = document.querySelector("#cartContainer");
const totalPriceEl = document.querySelector("#totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach((item) => {
  const div = document.createElement("div");

  const itemTotal = item.price * item.quantity;
  total += itemTotal;

  div.innerHTML = `
    <img src="${item.image}" width="100">
    <h3>${item.name}</h3>
    <p>Price: ₹${item.price}</p>
    <p>Quantity: ${item.quantity}</p>
    <p>Total: ₹${itemTotal}</p>
    <hr>
  `;

  cartContainer.appendChild(div);
});

totalPriceEl.textContent = `Grand Total: ₹${total}`;