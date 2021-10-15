//var for questions
var myQuestions = [{
    prompt: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>","<scripting>","<script>","<js>"],
    answer: "<script>"
},{
    prompt: "How does a FOR loop start?",
    choices: ["for(i=0;i<=5;i++)","for(i=0;i<=5)","fori=1to5","for(i<=5;i++"],
    answer: "for(i=0;i<=5;i++)"
},{
    prompt: "How do you round the number 7.25, to the nearest integer?",
    choices: ["Math.rnd(7.25)","round(7.25)","rnd(7.25)","Math.round(7.25)"],
    answer: "Math.round(7.25)"
},{
    prompt: "Which event occurs when the user clicks on an HTML element??",
    choices: ["onclick","onmouseover","onchange","onmouseclick"],
    answer: "onclick"
},{
    prompt: "How do you find the number with the highest value of x and y?",
    choices: ["Math.max(x,y)","top(x, y)","ceil(x, y)","Math.ceil(x, y)"],
    answer: "Math.max(x, y)"
}];

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

var myQuiz = new codeQuiz(myQuestions);