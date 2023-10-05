var timerElement = document.querySelector(".time");
var startTimer = document.querySelector("start-btn");
var highScore = document.querySelector("high-score");
// var lose = document.querySelector(".lose");
var playerName = document.querySelector("player-name");

var showQuiz;
var buildQuiz;
var allQuestions;
var createElement;
var getAttribute;
var secondsLeft;
var gameState;
var isWin = false;
var timer;
var timerCount;
var startButtonEl = document.getElementById("start-btn");
var screenEndUiEl = document.querySelector(".screen-end-ui");
var counter;



startButtonEl.addEventListener("click", function(){
  screenEndUiEl.style.display = "none";
})

(function() {
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
  
  
  var quizContainer = document.getElementById("quiz");
  var myQuestions = [{
      question: "Who the Timberwolves Head Coach?",
      answers: {
        a: "Kevin O'Connell",
        b: "Phil Jackson",
        c: "Chris Finch"
      },
      correctAnswer: "c"
    },
    {
      question: "Who currently wears number 5 for the Minnesota Timberwolves?",
      answers: {
        a: "Anthony Edwards",
        b: "Karl Anthony Towns",
        c: "Kobe Bryant"
      },
      correctAnswer: "a"
    },
    {
      question: "Will the Timberwolves win a championship!?",
      answers: {
        a: "DUHHHHH",
        b: "Minnesota Sports is Misery",
        c: "No!"
      },
      correctAnswer: "a"
    }
  ];
    document.getElementById('showQuiz').addEventListener('click',buildQuiz);
  }());



function startTimer(){
  var counter = 5;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    document.getElementById("count").style="color:green;";
    startTimer();
};



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
