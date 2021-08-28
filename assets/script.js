var questionGroup = "put questions one here";

var anwOne = "correct here";
var wrongOne = ["wrongs here"];


var scores = [];

var timer = document.getElementById(".timer");
var timeLeft = 120;

var startBtn = document.getElementById("start-button");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    var timeLeft = 120;
    setInterval(function() {
        timeLeft--;
        console.log(timeLeft);
            if (timeLeft >= 0) {
                
                questionUp()

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

function questionUp() {

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

