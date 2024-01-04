
var startButtonEl = document.querySelector("#startBtn");
var quizContainerEl = document.querySelector(".quizContainer");
var quizEl = document.querySelector("#quiz");
var questionTextEl = document.querySelector("#question-text");
var questionAnswersEl = document.querySelector("#question-answers");
var timeLeftEl = document.querySelector("#timeLeft");
var paragraphEl = document.querySelector("#paragraphId");

var currentQuestionIndex = 0;
var score = 0;
var totalTime = 75;
var quizInterval;
var pointsOff = 10;

function startQuiz() {
    paragraphEl.style.display = "none";
    startButtonEl.style.visibility = "hidden";
    quizInterval = setInterval(function () {
        displayTime();
        displayNextQuestion();
    }, 1000);
}

function displayTime() {
    totalTime--;
    timeLeftEl.textContent = totalTime;
    if (totalTime <= 0) {
        clearInterval(quizInterval);
        showScore();
    }
}

function showScore() {
    window.location.href = "./highscores.html";
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTextEl.textContent = currentQuestion.questionIndex;
    questionAnswersEl.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = document.createElement("button");
        option.textContent = currentQuestion.options[i];
        option.setAttribute("class", "answer-btn");
        questionAnswersEl.appendChild(option);
    }
}

function answerClick(event) {
    var currentQuestion = questions[currentQuestionIndex];
    if (event.target.textContent === currentQuestion.answer) {
        score++;
    } else {
        totalTime -= pointsOff;
    }
    currentQuestionIndex++;
    displayNextQuestion();
}

function displayNextQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    if (currentQuestionIndex < questions.length) {
        getQuestion();
    } else {
        clearInterval(quizInterval);
        showScore();
    }
}

var questions = [
    {
        questionIndex: "Commonly used data types DO NOT include",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "booleans",
        correctIndex: 1,
    },
    {
        questionIndex: "The condition in an if / else statement is enclosed with ______?",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis",
        correctIndex: 2,
    },
    {
        questionIndex: "Arrays in JavaScript can be used to store _____?",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
        correctIndex: 3
    },
    {
        questionIndex: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes",
        correctIndex: 2,
    },
    {
        questionIndex: "A very useful tool used during development and debugging for printing content to the debugger is?",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
        correctIndex: 3,
    },
];

function init() {
    startButtonEl.addEventListener("click", startQuiz);
    questionAnswersEl.addEventListener("click", answerClick);
}

init();
