 


var allQuestions = [
    "What year was Mozart born?", 
    "What was Mozart's father's name?",
    "What was Mozart's sister's nickname?",
    "How many symphonies did Mozart compose?",
    "Mozart was a free mason?",
    "Which of Mozart's operas had subtle political undetones?",
    "What three keys did Mozart favor?",
    "What was Mozart's wife's name?",
    "How many violin concertos did Mozart compose?",
    "Mozart died while composing his Requiem?"
]

var allChoices = [
    ["1980","1645","1756","1812"],
    ["Ted", "Leopold", "Larry", "Ludwig"],
    ["Junebug", "Sweetie", "Nanneral", "Fancy"],
    ["101", "41", "9", "2029"],
    ["true", "false"],
    ["The Marriage Of Figaro", "Cosi Fan Tutte", "The Magic Flute", "Don Giovanni"],
    ["A-flat Major, D Minor, D Major", "C Major, E-flat Major, G Minor" , "G Major, E Major, A Major" , "F Major, B-flat Major, D-flat Major"],
    ["Debbie", "Hilda", "Paula", "Constanze"],
    ["80", "5", "2", "none"],
    ["true", "false"]

]

var allAnswers = [
    "1756",
    "Leopold",
    "Nanneral",
    "41",
    "true",
    "The Magic Flute",
    "C Major, E-flat Major, G Minor",
    "Constanze",
    "5",
    "true"
]

var i = -1

    //Do I append this to my array? = array[questions];
    function questions () {
        i++;

    document.getElementById("questions").textContent=allQuesitons[i];
    myQuestions = document.getElementById([questions]);
    myQuestions = document.getElementById([questions]);
    console.log("running");
    }
 
    questions();


/*
 
 var questions = [
    {
        question: "What year was Mozart born?",
        choices: ["1980","1645","1756","1812"],
        answer: "1756"
    },

    {
        question: "What was Mozart's father's name?",
        choices: ["Ted", "Leopold", "Larry", "Ludwig"],
        answer: "Leopold"
    },

    {
        question: "What was Mozart's sister's nickname?",
        choices: ["Junebug", "Sweetie", "Nanneral", "Fancy"],
        answer: "Nanneral"
    },

    {
        question: "How many symphonies did Mozart compose?",
        choices: [101, 41, 9, 2029],
        answer: 41
    },

    {
        question: "Mozart was a free mason?",
        choices: [true, false],
        answer: true,
    },

    {
        question: "Which of Mozart's operas had subtle political undetones?",
        choices: ["The Marriage Of Figaro", "Cosi Fan Tutte", "The Magic Flute", "Don Giovanni"],
        answer: "The Magic Flute",
    },

    {
        question: "What three keys did Mozart favor?",
        choices: ["A-flat Major, D Minor, D Major", "C Major, E-flat Major, G Minor" , "G Major, E Major, A Major" , "F Major, B-flat Major, D-flat Major"],
        answer: "C Major, E-flat Major, G Minor",
    },

    {
        question: "What was Mozart's wife's name?",
        choices: ["Debbie", "Hilda", "Paula", "Constanze"],
        answer: "Constanze",
    },

    {
        question: "How many violin concertos did Mozart compose?",
        choices: [80, 5, 2, none],
        answer: 5
    },

    {
        question: "Mozart died while composing his Requiem?",
        choices: [true, false],
        answer: true,
    }]
*/
    