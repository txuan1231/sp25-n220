const menuList = document.querySelector("#menu");
const cartTable = document.querySelector("#cart");
const noItemsMessage = document.querySelector("#no-items");

const menu = [
  { name: "Hamburger", price: 2.99 },
  { name: "Cheeseburger", price: 3.99 },
  { name: "Cheese Pizza", price: 3.99 },
  { name: "Pepperoni Pizza", price: 4.99 },
  { name: "Sausage Pizza", price: 4.99 },
  { name: "Caesar Salad", price: 3.99 },
  { name: "Fries", price: 1.99 },
  { name: "Onion Rings", price: 2.49 },
];

let cart = [];

function displayMenu() {
  menu.forEach((menuItem) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${menuItem.name} - $${menuItem.price.toFixed(2)}`;

    const addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.dataset.name = menuItem.name;
    addButton.dataset.price = menuItem.price;
    addButton.onclick = addToCart;

    newLi.appendChild(addButton);
    menuList.appendChild(newLi);
  });
}

function updateCart() {
  cartTable.innerHTML = `
    <tr>
      <th>Item Name</th>
      <th>Price</th>
      <th>Special Request</th>
      <th>Actions</th>
    </tr>
  `;

  if (cart.length === 0) {
    noItemsMessage.style.display = "table-row";
    return;
  } else {
    noItemsMessage.style.display = "none";
  }

  let total = 0;

  cart.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td><textarea onchange="updateSpecialRequest(${index}, this.value)">${
      item.specialRequest
    }</textarea></td>
      <td><button onclick="removeItem(${index})">Remove</button></td>
    `;

    cartTable.appendChild(row);
    total += item.price;
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td colspan="3">$${total.toFixed(2)}</td>
  `;
  cartTable.appendChild(totalRow);
}

function addToCart(e) {
  const itemName = e.target.dataset.name;
  const itemPrice = parseFloat(e.target.dataset.price);

  cart.push({ name: itemName, price: itemPrice, specialRequest: "" });
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateSpecialRequest(index, newRequest) {
  cart[index].specialRequest = newRequest;
}

displayMenu();
updateCart();
