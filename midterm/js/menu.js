const menuList = document.querySelector("#menu");
const cartTable = document.querySelector("#cart");
const removeItemBtn = document.querySelector("#remove-item");
const noItemsMessage = document.querySelector("#no-items");

const menu = [
  "Hamburger - $2.99",
  "Cheeseburger - $3.99",
  "Cheese Pizza - $3.99",
  "Pepperoni Pizza - $4.99",
  "Sausage Pizza - $4.99",
  "Caesar Salad - $3.99",
  "Fries - $1.99",
  "Onion Rings - $2.49",
];
const cart = [];

function removeItemFromCart() {
  if (cart.length > 0) {
    cart.shift();
    showCart();
  }
}
function showCart() {
  cartTable.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = cart[i];
    cartTable.appendChild(newLi);
  }
  if (cart.length === 0) {
    noItemsMessage.style.display = "block";
  } else {
    noItemsMessage.style.display = "none";
  }
  removeItemBtn.disabled = cart.length === 0;
}
function addMenuItem(e) {
  cart.push(e.target.data.name);
  showCart();
}
for (let i = 0; i < menu.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = menu[i];
  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.name = menu[i];
  newBtn.onclick = addMenuItem;
  newLi.appendChild(newBtn);
  menuList.appendChild(newLi);
}
removeItemBtn.onclick = removeItemFromCart;
showCart();
