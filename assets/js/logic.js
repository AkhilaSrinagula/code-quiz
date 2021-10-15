
//declared variables
var wrapper = document.querySelector("#wrapper");
var timer = document.querySelector("#startBtn");
var codeQuiz = document.querySelector("#codeQuiz");
var currentTime = document.querySelector("#currentTime"); 
var ulCreate = document.createElement("ul");


var questionIndex = 0;
var score = 0;
var timeLeft = 76;
var holdInterval = 0;
var penalty = 10;

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Timer :" + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    exhibit(questionIndex);
});

function exhibit(startGame) {
    codeQuiz.html = "";
    ulCreate.html = "";
    for (var i = 0; i < myQuestions.length; i++) {
        var userQuestion = myQuestions[startGame].prompt;
        var userChoices = myQuestions[startGame].choices;
        codeQuiz.textContent = userQuestion
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        codeQuiz.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if(element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == codeQuiz[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is: " + codeQuiz[questionIndex].answer;
        } else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is: " + codeQuiz[questionIndex].answer;
        }
    }
    questionIndex++;

    if (questionIndex >= myQuestions.length) {
        allDone();
        createDiv.textContent = "End of Quiz!" + "" + "You got " + score + "/" +myQuestions.length + "Correct!";
    } else {
        exhibit(questionIndex);
    }
    codeQuiz.appendChild(createDiv);
}


