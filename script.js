const questions = [
  {
      question: "Quelle est la plus grande planète du système solaire ?",
      answers: ["Jupiter", "Saturne", "Terre", "Mars"],
      correct: 0
  },
  {
      question: "Quelle planète est connue comme la planète rouge ?",
      answers: ["Venus", "Mars", "Mercure", "Uranus"],
      correct: 1
  },
  {
      question: "Combien de planètes composent le système solaire ?",
      answers: ["7", "8", "9", "10"],
      correct: 1
  },
  {
      question: "Quelle planète est la plus proche du Soleil ?",
      answers: ["Mars", "Mercure", "Venus", "Terre"],
      correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");
const restartButton = document.getElementById("restart");

function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.question;
  answerButtons.forEach((button, index) => {
      button.textContent = current.answers[index];
      button.onclick = () => checkAnswer(index);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
      score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = `Score : ${score}/${questions.length}`;
}

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion();
});

loadQuestion();