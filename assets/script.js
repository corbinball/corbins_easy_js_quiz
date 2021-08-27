var questOne = "put question one here";

var questTwo = "put question two here";

var questThree = "put question three here";

var questFour = "put question four here";

var anwOne = "correct here";
var wrongOne = ["wrongs here"];

var anwTwo = "correct here";
//wrong answers here
var wrongTwo = [];

var anwThree = "correct here";
var wrongThree = ["wrongs here"];

var anwFour = "correct here";
var wrongFour = ["wrongs here"];

var scores = [];

var timer = document.getElementById(".timer");
var timeLeft = 120;

var startBtn = document.getElementById("start-button");


function startQuiz() {
    var timeLeft = 120;
    setInterval(function() {
        timeLeft--;
        console.log(timeLeft);
            if (timeLeft >= 0) {
                
                //function questionOne();
                //function questionTwo();
                //function questionThree();
                //function quesionFour();
                document.getElementById("timer").innerHTML = timeLeft;
            }
            if (timeLeft === 0) {
                alert("Game Over");
                clearInterval(timeLeft);
            }
                //function gameLost();
    },
 1000,)
};

function questionOne() {

}

function questionTwo () {

}

function questionThree () {

}

function quesionFour () {

}

function correctAnw () {
    //if (correctAnw.click)
        //display(question)
}


function wrongAnw () {
    //if (wrongAnw.click)
        //timeLeft - 5;

}

function score () {

}

function gameLost () {

}

function endQuiz () {

}

startBtn.addEventListener("click", startQuiz)