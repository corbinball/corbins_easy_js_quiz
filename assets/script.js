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
var timeLeft = 20;
var timerRun;
var score = 0;
var userChoice

var timer = document.getElementById(".timer");
var timeLeft = 120;
var scoreContainer = document.getElementById("score");
var userChoice = document.getElementById("anwBtn");
var currentQuestion = document.getElementById("questionHere");
var startBtn = document.getElementById("start-button");



function startQuiz() {
    var timeLeft = 20;
    setInterval(function() {
        timeLeft--;
        console.log(timeLeft);
            if (timeLeft >= 0) {
                document.getElementById("timer").innerHTML = timeLeft;
                questionUp;

            }
            if (timeLeft === 0) {
                clearInterval(timeLeft);
            }
                //function gameLost();
    },
 1000,)
};

function questionUp() {
    for(var i=0; i < question.length; i++){
        var choice = userChoice(question[i].answers)
        if (choice == question[i].correctAnswer){
            timeLeft + 5;
        } else {
            timeLeft - 5;
        }
    }
}


function score () {

}


function endQuiz () {

}

startBtn.addEventListener("click", startQuiz);