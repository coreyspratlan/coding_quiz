# coding_quiz

I am creating a quiz with the following criteria:

    *    GIVEN I am taking a code quiz
    *    WHEN I click the start button
    *    THEN a timer starts and I am presented with a question
    *    WHEN I answer a question
    *    THEN I am presented with another question
    *    WHEN I answer a question incorrectly
    *    THEN time is subtracted from the clock
    *    WHEN all questions are answered or the timer reaches 0
    *    THEN the game is over
    *    WHEN the game is over
    *    THEN I can save my initials and score

Initially, I set up the home page (index.html), my high score page (hightscore.html), my visual appearance file (style.css), and three javascript files (game.js, score.js, and questions.js).

After creating questions, I started with two to start small and test the code.  I named a variable questions as an object array and created two questions sets containing question, title, and answer.

I pulled a "jumbotron" from Bootstrap to display the questions, answers, and a submit answer button.


I organized my javascript files in this order:

// set global variables
// Make helper functions
// Create Elements to be used
// Make the text content for each element
// Append elements to the document 
// make functions to run the program
// add the events that need to happen


I began setting up functions based on the criteria.  I began setting up the syntax for eventListeners for button "clicks."  