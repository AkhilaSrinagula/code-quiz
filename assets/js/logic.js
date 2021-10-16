//declared variables
var wrapper = document.querySelector("#wrapper");
var timer = document.querySelector("#startBtn");
var codeQuiz = document.querySelector("#codeQuiz");
var currentTime = document.querySelector("#currentTime"); 
var start =document.querySelector("#start");

var startGame = 0;
var score = 0;
var timeLeft = 75;
var holdInterval =0;
var penalty = 10;

var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Timer :" + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                gameOver();
                currentTime.textContent = "Time up!";
            }
        }, 1000);
    }
    exhibit(startGame);
});

function exhibit(startGame) {
    codeQuiz.innerHTML = "";
    ulCreate.innerHTML = "";
    start.style.display = "none";
 
        var prompth1 = document.createElement("h1");
        var userQuestion = myQuestions[startGame].prompt;
        prompth1.classList.add("promptTitle");
        prompth1.textContent = userQuestion;
        var userChoices = myQuestions[startGame].choices;
        codeQuiz.appendChild(prompth1)
    

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.classList.add("answeritem")
        listItem.textContent = newItem;
        codeQuiz.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", compare);
    })
}

function compare(event) {
    var element = event.target;
console.log(element);
    if(element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == myQuestions[startGame].answer) {
            score++;
            createDiv.textContent = "Correct!" ;
        } else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is: " + myQuestions[startGame].answer;
        }
    }
    startGame++;

    if (startGame >= myQuestions.length) {
        gameOver();
        createDiv.textContent = "End of Quiz!" + "" + "You got " + score + "/" +myQuestions.length + "Correct!";
    } else {
        exhibit(startGame);
    }
    codeQuiz.appendChild(createDiv);
}

function gameOver() {
    codeQuiz.innerHTML = "";
    currentTime = "";

    var createHeading = document.createElement("h1");
    createHeading.setAttribute("id", "createHeading");
    createHeading.textContent = "Game Over!"

    codeQuiz.appendChild(createHeading);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    codeQuiz.appendChild(createP);

    if (timeLeft >=0) {
        var secondsRemaining = timeLeft;
        var createP2 = document.createElement("p")
        clearInterval(holdInterval);
        createP.textContent = "Your Final Score is: " + secondsRemaining;
        
        codeQuiz.appendChild(createP2);
    }
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter Your Initials: ";

    codeQuiz.appendChild(createLabel);

    var createInput = document.createElement("Input");
    createInput.setAttribute("id", "createInput");
    createInput.textContent= "";

    codeQuiz.appendChild(createInput);

    var createSubmit = document.createElement("button");
    
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    codeQuiz.appendChild(createSubmit);
    


    createSubmit.addEventListener("click", function() {
        var initials = createInput.value;

    if (initials === null) {
        console.log("No Value Entered");

    } else {
        var finalScore = {
            initials: initials,
            score: secondsRemaining
        }
        console.log(finalScore);
        window.location.href='highscores.html';
        var allScores = localStorage.getitem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allscores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(areplacellScores);
        localStorage.setItem("allscores", newScore);
        
    }
    });

    var createGoBack = document.createElement("button");
    createGoBack.setAttribute("id", GoBack);
    createGoBack.textContent = "Go Back";

    codeQuiz.appendChild(createGoBack);

    createGoBack.addEventListener("click", function() {
        
    })
}
