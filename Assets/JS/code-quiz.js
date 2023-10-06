var timerElement = document.querySelector(".time");
var setTime = document.querySelector(".start-btn");
var highScore = document.querySelector(".high-score");
var playerName = document.querySelector("player-name");

var mainEl = document.getElementById("main");

var showQuiz;
var buildQuiz;
var allQuestions;
var createElement;
var getAttribute;
var secondsLeft = 60;
var gameState;
var isWin = false;
var timer;
var timerCount;
var startButtonEl = document.getElementById("start-btn");
var screenEndUiEl = document.querySelector(".screen-end-ui");
var counter;
var userChoices;
var quizContainer;
var options;



startButtonEl.addEventListener("click", function () {
  screenEndUiEl.style.display = "none";
})

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until Quiz ends!";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Game Over!";
  mainEl.appendChild(highScore);
}

setTime();


(function () {
  function buildQuiz() {

    document.getElementById("showQuiz").style.visibility = "hidden"
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

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

  var userChoices = document.getElementsByTagName('input[type:radio]');
  var questions =
    [
      {
        question: "Who is the head coach of the Minnesota Timberwolves?",
        choices: ["Phil Jackson", "Chris Finch", "Ryan Saunders", "Bernie Ward"],
        answer: 2
      },

      {
        question: "What jersey number is Anthony Edwards?",
        choices: ["5", "11", "8", "24"],
        answer: 1
      },

      {
        question: "Who is the starting Point Guard for the 2023-2024 Minnesota Timberwolves?",
        choices: ["Mike Conley", "D'Angelo Russell", "Naz Reid", "Kyle Anderson"],
        answer: 1
      },

      {
        question: "What is the name of the Minnesota Timberwolves Arena?",
        choices: ["Madison Square Garden", "US Bank Stadium", "Staples Center", "Target Center"],
        answer: 4
      }

    ];

  for (var i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    document.write(question);
    var options = questions[i].choices;
    for (var opt in options) {
      for (var radios in userChoices) {
        userChoices[radios].value = options[opt];

      }
    }

  }

  ;
  document.getElementById('showQuiz').addEventListener('click', buildQuiz);
}());



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

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame)
