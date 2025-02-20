const instruments = [
  "Piano",
  "Guitar",
  "Violin",
  "Drums",
  "Saxophone",
  "Flute",
];

const ulRef = document.getElementById("instrument-list");

for (let i = 0; i < instruments.length; i++) {
  console.log("For Loop:", instruments[i]);
  ulRef.innerHTML += "<li>" + instruments[i] + "</li>";
}
ulRef.innerHTML + "";