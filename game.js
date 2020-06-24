// set global variables
var questionTimer =
var endTimer =  
var startButton = 
var questions
var choices = 
var answers = 
var userChoices = 

// Make helper functions


// When the start button is clicked, it disappears and the timer begins.

// Timer Function to countdown

    var timeleft = 70;
    var questionTimer = setInterval(function(){
    timeleft--;
    document.getElementById("timer");
    if(timeleft <= 0)
        clearInterval(questionTimer);
    },1000);



functions startTimer () {}

functions () {}


// Create Elements to be used


var startButton = doucument.querySelector("startButton");

var timer = document.querySelector

var jumbotronDiv = document.getElementById("jumbotron");



// Make the text content for each element


jumbotronDiv.textContent =


// Style the Elements

// H1El.setAttribute("style", "text-decoration: underline ; font-size: 20px");
// liEl.setAttribute("style", "font-size: 15px");



// Append elements to the document 

// h1El.appendChild(h1El);
// liEl.appendChild(liEl);


//append button to the DOM




// make functions to run the program

function startQuiz() {
  //start timer function
}

function setInterval () {

}

function getQuetions() {
  //get new question from the question array in questions.js based on the current question
  // update the DOM with the current question (JSON localStorage)
  // clear out any old questions ... setDefault();
  // upate the DOM with current answer choices
  // a for loop that goes through the answer choices

  // WHEN I answer a question, I am present with another question
  // WHEN I answer a question incorrectly, time is subtracted from the timer
  // WHEN submits an answer, a new question from the questions array appears.
}

function timerSpan () {

}

function setTimer () {

}

function () {
  // after an answer is chosen, 
  // if the question is incorrect, subtract time from the timer and display the new time to the page. let the player know they are incorrect
  // else let the playwer know they are correct, check if the questions have cycled through
}


document.getElementById("button").addEventListener("click", displayTime);


//append questions after submit button is clicked


// add the events that need to happen

// when the submit button is pressed, the timer starts and the first question appears
startButton.addEventListener("click", startTimer);

 //cycle to next question once the previous question is answered
function () {}



// Update the count down every 1 second
var timer = setInterval(function() {
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("jumbotron").innerHTML = seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("jumbotron").innerHTML = "Your time is up!";
  }
}, 1000);