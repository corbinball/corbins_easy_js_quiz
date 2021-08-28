var questionGroup = [
    { 
        question: 'what is Javascripts default behavior of moving declartaions to the top?',
        answers: {
            a: 'hoisting',
            b: 'hosting',
            c: 'hostess',
            d: 'hooters'
        },
        correctAnswer: 'a'
    },
    { 
        question: 'what is used to store multiple values in a single variable?',
        answers: {
            a: 'sting ray ',
            b: 'manta ray',
            c: 'arrays',
            d: 'sunrays'
        },
        correctAnswer: 'c'
    },
    { 
        question: 'what executes a block of code a number of times?',
        answers: {
            a: 'fruit loops',
            b: 'hula hoops',
            c: 'for loops',
            d: 'loopty loops,'
        },
        correctAnswer: 'c'
    },
    { 
        question: 'what is used for storing and manipulating text?',
        answers: {
            a: 'strings',
            b: 'rope',
            c: 'thread',
            d: 'twine'
        },
        correctAnswer: 'a'
    },
   
];

var scores = [];

var timer = document.getElementById(".timer");
var timeLeft = 120;

startBtn = document.getElementById("start-button");

questionEl = document.getElementById('question');
answerEl = document.getElementById('anw-group');

function startQuiz() {
    var timeLeft = 120;
    setInterval(function() {
        timeLeft--;
        console.log(timeLeft);
            if (timeLeft >= 0) {
                document.getElementById("timer").innerHTML = timeLeft;

                questionUp()
            }
            if (timeLeft === 0) {
                alert("Game Over");
                clearInterval(timeLeft);
            }
                //function gameLost();
    },
 1000,)
};

function questionUp() {
    var choice = [];

    questionGroup



}

function correctAnw () {
   
}


function wrongAnw () {
  

}

function score () {

}


function endQuiz () {

}

startBtn.addEventListener("click", startQuiz);