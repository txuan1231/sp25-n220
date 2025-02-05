//Price, sales tax, and discount rate is const as 
// these are not changing in this scenario.
const itemPrice = 40.99;

const salesTax = 0.07;

const discountPercent = 0.10;

//Let because equations can have their variables change.
let totalAftertax = itemPrice * (1 + salesTax)

let discountTotalafterTax = itemPrice * (1 + salesTax) * (1 - discountPercent);

//Messages to show total after tax and discounted total after tax.
//Used .toFixed function to round values to appropriate for dollar prices.
console.log("Total after tax:", totalAftertax.toFixed(2));

console.log("Discounted total after tax:", discountTotalafterTax.toFixed(2));

//Boolean to show that item price has to be over 50 in order to quality for the discount rate.
let qualify =  Boolean(itemPrice > 50);

//Message to show if item qualifies for discount, that being if the item is over 50.
console.log("Qualify for discount:", qualify);
