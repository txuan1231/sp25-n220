//Password is const because this is the only password used in this scenario.
const password = "(d0nteatTheScript)";

//Let is used because while password is constant, if redeclared the status of each "rule" would change.
let startWithspace = password.startsWith("");

let eightCharacters = password.length >= 8;

let containsWord = password.includes("eat");

//Message to declare whether each password rule is followed using boolean.
console.log("Password starts with a space:", startWithspace);

console.log("Password has at least 8 characters:", eightCharacters);

console.log("Password has the word eat:", containsWord);
