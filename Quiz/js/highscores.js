// GAURAV
const highScoresList = document.getElementById("highScoresList");

  //using localstorage for quiz scores to acess
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
.map(score => {
   return`<li class ="high-score">${score.name}-${score.score}</li>`;
})
.join("");