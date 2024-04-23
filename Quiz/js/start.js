// GAURAV


const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{
    question: "Inside which HTML element do we put the JavaScript??",
    choice1:"<script>",
    choice2:"<javascript>",
    choice3:"<js>",
    choice4: "<scripting",
    answer: 1
},
{
    question: "what is the extension for the java script file",
    choice1:"javas",
    choice2:"jshtml",
    choice3:"js",
    choice4: "css",
    answer: 3
},

{
    question: "what we use to get the input from the user",
    choice1:"alert",
    choice2:"prompt",
    choice3:"console.log",
    choice4: "giveinput",
    answer: 2
},

{
    question: "what is the purpose of getelementbyid",
    choice1:"to call the html tags",
    choice2:"to call the html clases ",
    choice3:"to call the html ID",
    choice4: "to call the footer ",
    answer: 3
},]
const CORRECT_BONUS = 10;
const  MAX_QUESTIONS = 3;

startgame = () => {
    questionCounter = 0;
    score = 0;
    //after starting the game all the questions will be inserted into availableQuestions array
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () =>{
    if(availableQuestions.length === 0  || questionCounter >= MAX_QUESTIONS){

        //using localstorage for quiz scores
        localStorage.setItem("mostRecentScore", score);

       //going to the end of the page if there are no quiz questions
        return window.location.assign("end.html");
    }
    //changing the question number on the page dynamically
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    // changing the width of the progressbarfull 
    progressBarFull.style.width = `${((questionCounter-1)/MAX_QUESTIONS) * 100}%`; 
    
    //at every single try random questions
   const questionIndex =  Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

        choices.forEach( choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });

        availableQuestions.splice(questionIndex,1);
        acceptingAnswers = true;
   
};
//using for each loop to to acess the answer option then coparing them with the correct answer
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer == currentQuestion.answer);

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
//if the answer is correct then inrementing score by 10
        if  (classToApply === "correct"){
            incrementScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);
//after selecting going for the new question with 1 second delay 
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};
startgame();