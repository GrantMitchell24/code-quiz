var startButton = document.querySelector(".start-button"); 
var timerCount = document.querySelector(".timer-count");
var scoreBoard = document.querySelector("#scoreboard");
var finalScore = document.querySelector("#score");
var submitButton = document.querySelector("#submit-button");
var pointsTally = 0;
var quizDisplay = document.querySelector("#quiz");
var questionDisplay = document.querySelector("#question");
var optionsDisplay = document.querySelector("#options");
var secondsLeft = 60;
var timerInterval;
var qIndex = 0;
var quizQuestions = [
  {
    question: "Who is the head coach of the Minnesota Timberwolves?",
    answers: ["Bernie Ward", "Phil Jackson", "Mike Finch", "Ryan Saunders"],
    correct: "Mike Finch"
  },
  {
    question: "What jersey number does Anthony Edwards wear?",
    answers: ["5", "11", "32", "4"],
    correct: "5"
  },
  {
    question: "Who is the starting Point Guard for the Minnesota Timberwolves?",
    answers: ["D'Angelo Russell", "John Stockton", "Mike Conley", "Rudy Gobert"],
    correct: "Mike Conley"
  },
  {
    question: "What is the name of the Minnesota Timberwolves arena?",
    answers: ["US Bank Stadium", "Target Center", "Madison Square Garden", "Staples Center"],
    correct: "Target Center"
  }
]

startButton.addEventListener("click", startQuiz)

function startQuiz() {
  console.log("Start Quiz Worked")
  if (startButton.style.visibility = 'visible') {
      startButton.style.visibility = 'hidden';
  }


  quizDisplay.removeAttribute("class");

  timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.textContent = secondsLeft;

  if (secondsLeft === 0){
    clearInterval(timerInterval);
    quizDisplay.setAttribute("class", "hide")
    endQuiz();

  }
  }, 1000);
  
populateQuestion();

};


function populateQuestion() {
  var curQuestion = quizQuestions[qIndex]
  questionDisplay.textContent = curQuestion.question; 

  optionsDisplay.innerHTML = "";

  for (let i = 0; i < curQuestion.answers.length; i++) {
    const option = curQuestion.answers[i];

  var btnEl = document.createElement("button");
  btnEl.setAttribute("class", "option");
  btnEl.setAttribute("value", option);
  btnEl.textContent = i + 1 + ". " + option;
  optionsDisplay.appendChild(btnEl);
}
}

optionsDisplay.addEventListener("click", userChoice)

function userChoice(event) {
  var userGuess = event.target;
  var curQuestion = quizQuestions[qIndex];
  var rightAnswer = curQuestion.correct;
  var lastAnswer = quizQuestions[3].correct;

  if (qIndex === 3 || secondsLeft ===0) {
    quizDisplay.setAttribute("class", "hide");

    if (userGuess = lastAnswer) {
      pointsTally++;
      clearInterval(timerInterval);
    }

    endQuiz();

  }else {
    if (userGuess.value !== rightAnswer){
      console.log("Wrong!")
      secondsLeft -= 10;

      if (secondsLeft < 0){
        secondsLeft = 0;
      }
    }

    if (userGuess.value === rightAnswer) {
      console.log("Correct!")
      pointsTally++
      qIndex++
      populateQuestion();
    }
  }
};

renderEndQuiz();

function displayMessage(type, message) {
  scoreBoard.textContent = message;
  scoreBoard.setAttribute("class", type);
}

function endQuiz() {
var scoreText = `End of quiz! Your score is ${pointsTally}/4, with ${secondsLeft} seconds remaining!`;
var initialBox = window.localStorage.getItem("initials");
var finalScore = window.localStorage.getItem("score");
userInitialSpan.textContent = initialBox;
userFinalScore.textContent = scoreBoard;
}

submitButton.addEventListener.apply("click", function(event){
  event.preventDefault();

var initialBox = document.setAttribute("#initials").value;
var scoreBoard= document.querySelector("score").value;

if (initialBox === "") {
  displayMessage("error", "Initials cannot be blank");
} else {
  displayMessage("success", "Registered successfully");

window.localStorage.setItem("#initials", initialBox);
window.localStorage.setItem("#score", finalScore);
endQuiz();
}
});