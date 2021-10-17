const userName = document.getElementById("userName");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

const MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

userName.addEventListener("keyup", () => {
saveScoreBtn.disabled = !userName.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    constscore = {
        score: Math.floor(Math.random() * 100),
        name: userName.value
    };
    highScores.push(score);

    highScores.sort( (a,b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "index.html";
    console.log(highScores);
};