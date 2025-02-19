function letsGo() {
  console.log("Function Time!");
}

letsGo();

function calculateTotal(itemPrice, taxRate = 0.07, discountRate = 0.1) {

    const groupsOfTwenty = Math.floor(itemPrice / 20);

    switch(groupsOfTwenty) {
        case 1:
            discount = 0;
            break;
        case 2:
            discount = discountRate * 0.5;
            break;
        case 3:
            discount = discountRate;
            break;
        case 4:
            discount = discountRate * 2;
            break;
        case 5:
            discount = discountRate * 4;
        
    }

    return (itemPrice * (1 + taxRate) * (1 - discount)).toFixed(2);

  if (itemPrice > 100) {
    return itemPrice * (1 + taxRate) * (1 - discountRate * 2);
  } else if (itemPrice > 50)
    if (itemPrice > 50) {
      return itemPrice * (1 + taxRate) * (1 - discountRate);
    } else {
      return itemPrice * (1 + taxRate);
    }
  return itemPrice * (1 + taxRate);
}
console.log("Kidney = $20, Tax Rate = 40%:", calculateTotal(20, 0.4));

const items = [18, 24, 17, 3];

function showItems() {
  const newSection = document.createElement("section");
  newSection.innerHTML = "<h4>Items</h4>";
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    newSection.innerHTML += "<p>$" + items[i] + "</p>";
    total += items[i];
  }
  newSection.innerHTML += "<hr />";
  newSection.innerHTML += "<p>$" + calculateTotal(total) + "</p>";
  document.body.appendChild(newSection);
}

showItems();
