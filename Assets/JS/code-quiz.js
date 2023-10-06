var startButton = document.querySelector(".start-button"); 
var timerCount = document.querySelector(".timer-count");
var scoreBoard = document.querySelector("#scoreboard");
var finalScore = document.querySelector("#score");
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
}

function endQuiz () {
  console.log("end quiz function");
  console.log(pointsTally);

  var scoreText = `End of Quiz! Here is your score ${pointsTally}/4 with ${secondsLeft} seconds remaining!`;
  var initialDiv = document.querySelector("#initials");
  var initialBox = document.createElement("input");
  initialBox.setAttribute("type", "text")
  var timerBox = document.querySelector("timer-container");

  // timerBox.setAttribute("class", "hide");

  scoreBoard.removeAttribute("class");
  finalScore.textContent = scoreText.toString();

  initialDiv.appendChild(initialBox);
  initialBox.appendChild("class", "save-initials");
};

startButton.addEventListener("click", startQuiz)


// promptContainer.textContent = "Thanks for taking the quiz! Enter initials then click 'SUBMIT'";

// // render Input Field
// var newElement = document.createElement("input");
// newElement.setAttribute("type", "text");
// newElement.setAttribute("placeholder", "Enter Initials...");
// newElement.setAttribute("name", "player-name");
// newElement.setAttribute("id", "player-name");
// buttonContainer.appendChild(newElement);

// // Render Submit button
// var newElement = document.createElement("button");
// newElement.setAttribute("data-answer", "end");
// newElement.setAttribute("data-points", "0");
// newElement.setAttribute("style", "font-size:3rem");
// newElement.addEventListener("click", function(){
//   var inputField = document.querySelector("#player-name")
//   console.log(inputeField.value)
// })

// newElement.textContent = "SUBMIT";
// buttonContainer.appendChild(newElement);

// gameState = "start";
// console.log(`Re-starting game... gameState: ${gameState}`);
// break;

// renderMainContainer();

// function highScore() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function checkWin() {
// }

// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
// });



// // Calls init() so that it fires when page opened
// init();

// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
  
//   set.highScore()

// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame)    
