const scores = [
    95, 
    72, 
    88, 
    45, 
    60, 
    79, 
    82, 
    91, 
    50, 
    38
];
const ul = document.querySelector("ul");

const avgScore = document.getElementById("myScores");

const ulRef = document.getElementById("myScores");

for (let i = 0; i < scores.length; i++) {
  console.log("For Loop:", scores[i]);
  ulRef.innerHTML += "<li>" + scores[i] + "</li>";
}
let totalScore = 0;
for (let i=0; i < scores.length; i++){
    totalScore += scores[i]
}
const averageScore = totalScore / scores.length;
avgScore.innerText = `Average Score: ${averageScore.toFixed(2)}`;
