// GAURAV
const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    //if no value in user name box then save button will be disabled
    saveScoreButton.disabled = !username.value;
});

saveScoreButton.addEventListener("click", (event) => {
    console.log(username.value);
   event.preventDefault();
   saveHighScore();
});
//using event listener to save button to store the recent results
 saveHighScore = e =>{
    console.log("clicked the save button!");

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    //pushing the most recent result into the high score array
    highScores.push(score);
//sorting the highest scores
    highScores.sort((a,b) => b.score - a.score);

    highScores.splice(5);

    //adding the scores into localstorage of the computer
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("highscores.html");
    console.log(highScores);
};








