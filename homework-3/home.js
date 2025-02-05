//Radius is const it will always be 5 in this context.
const radius = 5;

//Having area and perimeter be let as the total can vary depending on radius.
let area = Math.PI * (radius ** 2);

let perimeter = 2 * Math.PI * radius;

//Message to show area and perimeter in console cleanly.
console.log("Area of circle:", area);

console.log("Perimeter of circle:", perimeter);