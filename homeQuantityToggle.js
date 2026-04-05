export const homeQuantityToggle = (event, id, stock) => {
  const card = event.target.closest(".cards");
  const quantityEl = card.querySelector(".productQuantity");

  let quantity = Number(quantityEl.textContent);

  if (event.target.classList.contains("cartIncrement")) {
    if (quantity < stock) quantity++;
  }

  if (event.target.classList.contains("cartDecrement")) {
    if (quantity > 1) quantity--;
  }

  quantityEl.textContent = quantity;
};