var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var scoreBoard = document.querySelector(".scoreboard");
var finalScore = document.querySelector(".score");
var quizDisplay = document.querySelector("#quiz");
var questionDisplay = document.querySelector("#question");
var answersDisplay = document.querySelector("#answers");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var secondsLeft = 60;
var timerCount;
var timer;
var letter;
var qIndex = 0;
var isWin = false;
var winCounter = 0;
var loseCounter = 0;

var startButtonEl = document.getElementById("start-button");
var screenEndUiEl = document.querySelector(".screen-end-ui");


startButtonEl.addEventListener("click", function () {
  screenEndUiEl.style.display = "none";
})

function init() {
  getWins();
  getlosses();
}

function startGame() {
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;
  startTimer()
}

function winGame() {
  quizDisplay.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

function loseGame() {
  quizDisplay.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

var quizDisplay = [
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

    function sendMessage() {
      timeEl.textContent = "Game Over!";
      mainEl.appendChild(finalScore);
    }

function checkWin(){
  if (answersDisplay === answers.join("")){
    isWin = true;
  }
}

  function questionDisplay() {

    document.getElementById("#quiz").style.visibility = "hidden"
    const output = [];

    questionDisplay.forEach((currentQuestion, questionNumber) => {
      const options = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }






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

// Attach event listener to start button to call startGame function on click
startQuiz.addEventListener("click", startGame);

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
