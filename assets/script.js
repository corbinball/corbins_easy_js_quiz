//variable of questions and answers
var questionGroup = [
    { 
        question: 'what is Javascripts default behavior of moving declartaions to the top?',
        answers: [
            {text: 'hoisting', correct: true },
            {text: 'hosting', correct: false},
            {text: 'hostess', correct: false},
            {text: 'hooters', correct: false},
        ],
    },
    { 
        question: 'what is used to store multiple values in a single variable?',
        answers: [
            {text: 'sting ray ', correct: false},
            {text: 'manta ray', correct: false},
            {text: 'arrays', correct: true},
            {text: 'sunrays', correct: false},
        ],
    },
    { 
        question: 'what executes a block of code a number of times?',
        answers: [
            {text: 'fruit loops', correct: false},
            {text: 'hula hoops', correct: false},
            {text: 'for loops', correct: true},
            {text: 'loopty loops', correct: false} 
        ],
    },
    { 
        question: 'what is used for storing and manipulating text?',
        answers: [
            {text: 'strings', correct: true},
            {text: 'rope', correct: false},
            {text: 'thread', correct: false},
            {text: 'twine', correct: false},
        ],
    },
];
var timerRun;
var score = 0;
var userChoice;
var theChoice;

var timer = document.getElementById(".timer");
var timeLeft = 50;
var scoreContainer = document.getElementById("score");
var anwOptions = document.getElementById("answer-buttons");
var anwHere = document.getElementById("btn")
var currentQuestion = document.getElementById("questionHere");
var startBtn = document.getElementById("start-button");
var scoreTime = document.getElementById("scoreBox");
var finalScore = document.getElementById("score");

function startQuiz () {
    startTimer;
    questionUp;
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        console.log(timeLeft);
            if (timeLeft >= 0) {
                document.getElementById("timer").innerHTML = timeLeft;
                questionUp;

            }
            if (timeLeft === 0) {
                clearInterval(timer);
            }
    },
 1000,)
};

function questionUp() {
    document.getElementById("questionHere").innterHTML = question;
    document.getElementById("answer-buttons").innerHTML = answers;
    document.getElementById("btn").innerHTML = text;

   
    
}


function score () {

}


function endQuiz () {

}

startBtn.addEventListener("click", startTimer);