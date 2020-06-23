// set global variables



var timer = 
var seconds = 
var timeElapsed = 
var endTime = 
var countSpan = 
var h1El = 
var pTag = 
var submitButton = 
var choices = 
var answers = 



// Make helper functions

functions () {}
functions () {}
functions () {}





// Create Elements to be used
var h1El = document.createElement("h1");
var p1El = document.createElement("p1");
var p2El = document.createElement("p2");
var p3El = document.createElement("p3");
var p4El = document.createElement("p4");
var p5El = document.createElement("p5");

var submitButton = doucument.createElement("submitButton");
var timerEl = document.querySelector



// Make the text content for each element
h1El.textContent = "Mozart Quiz";
p1El.textContent = "Questions";
p2El.textContent = "Answer Option #1";
p3El.textContent = "Answer Option #2";
p4El.textContent = "Answer Option #3";
p5El.textContent = "Answer Option #4";

timerEl.textContent = "Sumit Answer";




// Style the Elements

H1El.setAttribute("style", "text-decoration: underline ; font-size: 20px");
p1El.setAttribute("style", "font-size: 15px");
p2El.setAttribute("style", "font-size: 15px");
p3El.setAttribute("style", "font-size: 15px");
p4El.setAttribute("style", "font-size: 15px");
p5El.setAttribute("style", "font-size: 15px");



// Append elements to the document 

h1El.appendChild(h1El);
p1El.appendChild(p1El);
p2El.appendChild(p2El);
p3El.appendChild(p3El);
p4El.appendChild(p4El);
p5El.appendChild(p5El);

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
submitButton.addEventListener("click", startTimer);

function //cycle to next question once the previous question is answered




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