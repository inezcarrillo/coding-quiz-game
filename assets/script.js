//DOM HTMl elements
//var startButton = document.querySelector("#btn.start");
//var quizContainer = document.querySelector("#quizContainer");
//var quiz = document.querySelector("quiz");
//var questionText = document.querySelector("#question-text");
//var questionAnswers = document.querySelector("#question-ansers");
//var timeLeft = document.querySelector("#timeLeft");

//initial variable 
//var currentQuection = 0;
//var score = 0;
//var totalTime = 75;
//var quizQuestions;
//var pointsOff = 10;


//event listener for start button 
//startButton.addEventListener('click', startQuiz);

//function to  start button 
//function startQuiz () {
    //startButton.style.visiability = "hidden";
    
    //quizQuestions = setInterval(quizQuestions, 1000);
//}

//function to start timer 
//function displayTime() {
    //totalTime--;
    //timeLeft.textContent = totalTime;
//}

//function showScore(){
    //alert("QUIZ IS OVER");
//}

//function quizQuestions () {
    //if (timeLeft){
    //displayTime();
    //displayNextQuestion();
    //} else {
        //clearInterval(quizQuestions);
        //showScore();
    //}
//}

//function to call questions 
//unction getQuestion() {
    //var currentQuestion = questions[currentQuestion];
    //questionText.textContent = currentQuestion.questionIndex;
    //questionAnswers.innerHTML = "";
  
    //for (var i = 0; i < currentQuestion.options.length; i++) {
      //var option = document.createElement("button");
      //option.textContent = currentQuestion.options[i];
      //option.setAttribute("class", "answer-btn");
      //questionAnswers.appendChild(option);
    //}
  //}

//function answerClick(event) {
    //if (event.target.matches(answerIndex)) {
        //answerIndex++;
        //displayNextQuestion();
    //}
//}

//function displayNextQuestion() {
    //questionAnswers.innerHTML = " ";

    //var question = questions[questionIndex];
   // questionText.textContent = question.text;
//}

//var questions = [
    //{
        //questionIndex: "Commonly used data types DO NOT include" ,
        //options: "stings, booleans, alerts, numbers" ,
        //answerIndex: "booleans"
    //}, 
    //{
        //questionIndex: "The condition in an if / else statement is enclosed with ______?" ,
        //options: "quotes, curly brackets, parenthesis, square brackets" ,
        //answerIndex: "parenthesis"
    //},
    //{
        //questionIndex: "Arrays in JavaScript can be used to store _____?" ,
        //options: "numbers and strings, other arrays, booleans, all of the above" , 
        //answerIndex: "all of the above" ,
    //}, 
    //{
        //questionIndex: "String values must be enclosed withing _____ when being assigned to variables." , 
        //options: "commas, curly brackets, quotes, parenthesis" ,
        //ansrIndex: "curly brackets" ,
    //},
    //{
        //questionIndex: "A very useful tool used during development and debugging for printing content to the debugger is?" , 
        //options: "JavaScript, terminal/bash, for loops, console.log" ,
        //answerIndex: "for loops",
    //}
//];

//function to initiate 
//function init() {
    //startButton.addEventListener("click", startQuiz);
    //questionAnswers.addEventListener('click' , answerClick);
//}


var startButtonEl = document.querySelector("#btn-start");
var quizContainerEl = document.querySelector("#quizContainer");
var quizEl = document.querySelector("quiz");
var questionTextEl = document.querySelector("#question-text");
var questionAnswersEl = document.querySelector("#question-anwsers");
var timeLeftEl = document.querySelector("#timeLeft");

var currentQuestionIndex = 0;
var score = 0;
var totalTime = 75;
var quizQuestions;
var pointsOff = 10;

function startQuiz() {
  startButton.style.visibility = "hidden";
  quizQuestions = setInterval(displayNextQuestion, 1000);
  setTimeout(function (){
    displayTime();
    displayNextQuestion();
    }, 1000);
}

function displayTime() {
  totalTime--;
  timeLeft.textContent = totalTime;
}

function showScore() {
  alert("QUIZ IS OVER");
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
    if (event.target.textContent === currentQuestion.answerIndex) {
      score++;
    } else {
      totalTime -= pointsOff;
    }
    currentQuestionIndex++;
    displayNextQuestion();
  }

  function displayNextQuestion() {
    questionAnswersEl = questions[questionIndex];
    questionTextEl.textContent = questions.text;
    if (currentQuestionIndex < questions.length) {
      getQuestion();
    } else {
      clearInterval(quizQuestionsInterval);
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
    startButton.addEventListener("click", startQuiz);
    questionAnswersEl.addEventListener(" ");
  }
  
  init();