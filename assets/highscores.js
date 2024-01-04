document.addEventListener("DOMContentLoaded", function () {
    const highscoreForm = document.getElementById("highscoreForm");
    const highscoreList = document.getElementById("highscoreList");
    var restartBtnEl = document.querySelector("#restartBtn");
    // var score = this.documentElement.querySelector("#score"); // Remove this line
    // let currentScore = timeLeft;

    var totalScore = timeLeft;

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highscoreForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const initialsInput = document.getElementById("initials");
        const initials = initialsInput.value.toUpperCase();

        // Add the new score to the high scores array
        highScores.push({ initials, score: totalScore });

        // Sort high scores in descending order
        highScores.sort((a, b) => b.score - a.score);

        // Keep only the top 5 high scores
        highScores.splice(5);

        // Save the updated high scores to local storage
        localStorage.setItem("highScores", JSON.stringify(highScores));

        // Display the updated high scores
        displayHighScores();

        // Restart the quiz after submitting the high score
        restartQuiz();
    });

    // Display initial high scores
    displayHighScores();

    function displayHighScores() {
        // Display high scores in the highscoreList element
        highscoreList.innerHTML = "";
        highScores.forEach((score) => {
            const li = document.createElement("li");
            li.textContent = `${score.initials}: ${score.score}`;
            highscoreList.appendChild(li);
        });
    }

    function showScore(finalScore) {
        // Display the high scores page
        quizContainerEl.style.display = "none"; // Hide the quiz container
        highscoreForm.style.display = "block"; // Show the high score form
    
        alert("QUIZ IS OVER. Your final score is: " + totalScore);
    
        // Call the function to restart the quiz
        startQuiz();
    }
 
    function restartQuiz() {
        // Reset variables and display the quiz container
        currentQuestionIndex = 0;
        currentScore = 0;
        totalTime = 75;

        // Clear the existing interval before starting a new one
        clearInterval(quizInterval);

        // Display the restart button
        restartBtnEl.style.display = "block";

        // Hide the high score form
        highscoreForm.style.display = "none";
    }

    // Add an event listener for the restart button
    restartBtnEl.addEventListener("click", function () {
        // Hide the restart button
        restartBtnEl.style.display = "none";

        // Call the restart function
        restart();
    });

    function restart() {
        window.location.href = "./index.html";
    }
    
});


