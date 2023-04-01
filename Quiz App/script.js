const questions = [
  {
    questionText: "In 1768, Captain James Cook set out to explore which ocean?",
    options: [
      "1. Pacific Ocean",
      "2. Atlantic Ocean",
      "3. Indian Ocean",
      "4. Arctic Ocean",
    ],
    answer: "1. Pacific Ocean",
  },
  {
    questionText:
      "Which of the following is not an international organisation?",
    options: ["1. FIFA", "2. NATO", "3. ASEAN", "4. FBI"],
    answer: "4. FBI",
  },
  {
    questionText:
      "Which of the following disorders is the fear of being alone?",
    options: [
      "1. Agoraphobia",
      "2. Aerophobia",
      "3. Acrophobia",
      "4. Arachnophobia",
    ],
    answer: "1. Agoraphobia",
  },
  {
    questionText: " What is the speed of sound?",
    options: ["1. 120 km/h", "2. 1200 km/h", "3. 400 km/h", "4. 700 km/h"],
    answer: "2. 1200 km/h",
  },
  {
    questionText: "Which is the easiest way to tell the age of many trees?",
    options: [
      "1. To measure the width of the tree",
      "2. To count the rings on the trunk",
      "3. To count the number of leaves",
      "4. To measure the height of the tree",
    ],
    answer: "2. To count the rings on the trunk",
  },
  {
    questionText: "What do we call a newly hatched butterfly?",
    options: ["1. A moth", "2. A butter", "3. A caterpillar", "4. A chrysalis"],
    answer: "3. A caterpillar",
  },
  {
    questionText:
      "What was the first country to use tanks in combat during World War I?",
    options: ["1. France", "2. Japan", "3. Britain", "4. Germany"],
    answer: "3. Britain",
  },
  {
    questionText: "What is the main component of the sun?",
    options: ["1. Liquid lava", "2. Gas", "3. Molten iron", "4. Rock"],
    answer: "2. Gas",
  },
  {
    questionText:
      "Which two months are named after Emperors of the Roman Empire?",
    options: [
      "1. January and February",
      "2. March and April",
      "3. May and June",
      "4. July and August",
    ],
    answer: "4. July and August",
  },
  {
    questionText: "Which of the following animals can run the fastest?",
    options: ["1. Cheetah", "2. Leopard", "3. Tiger", "4. Lion"],
    answer: "1. Cheetah",
  },
  {
    questionText: "Where did the powers of Spiderman come from?",
    options: [
      "1. He was born with them",
      "2. He was bitten by a radioactive spider",
      "3. He went through a scientific experiment",
      "4. He woke up with them after a dream",
    ],
    answer: "2. He was bitten by a radioactive spider",
  },
  {
    questionText:
      "Which of the following actors was the first one to play James Bond?",
    options: [
      "1. Timothy Dalton",
      "2. Roger Moore",
      "3. Sean Connery",
      "4. George Lazenby",
    ],
    answer: "3. Sean Connery",
  },
  {
    questionText: "In which country is Transylvania?",
    options: ["1. Bulgaria", "2. Romania", "3. Croatia", "4. Serbia"],
    answer: "2. Romania",
  },
  {
    questionText:
      "Which of the following songs was the top-selling hit in 2019?",
    options: [
      "1. Someone You Loved",
      "2. Old Town Road",
      "3. I Don’t Care",
      "4. Bad Guy",
    ],
    answer: "1. Someone You Loved",
  },
  {
    questionText: "Which football club does Jordan Henderson play for?",
    options: [
      "1. Liverpool",
      "2. Manchester City",
      "3. Tottenham Hotspur",
      "4. Chelsea",
    ],
    answer: "1. Liverpool",
  },
  {
    questionText:
      "The phrase: ”I think, therefore I am” was coined by which philosopher?",
    options: ["1. Socrates", "2. Plato", "3. Aristotle", "4. Descartes"],
    answer: "4. Descartes",
  },
  {
    questionText: "Which company is known for publishing the Mario video game?",
    options: ["1. Xbox", "2. Nintendo", "3. SEGA", "4. Electronic Arts"],
    answer: "2. Nintendo",
  },
  {
    questionText: "Cu is the chemical symbol for which element?",
    options: ["1. Oxygen", "2. Copper", "3. Zinc", "4. Helium"],
    answer: "2. Copper",
  },
  {
    questionText:
      "Neil Armstrong was the first astronaut in the world to step foot on the moon. Who was the second?",
    options: [
      "1. Yuri Gagarin",
      "2. James Irwin",
      "3. Alan Bean",
      "4. Buzz Aldrin",
    ],
    answer: "4. Buzz Aldrin",
  },
  {
    questionText: "How many time zones are there in total in the world?",
    options: ["1. '8'", "2. '16'", "3. '24'", "4. '32'"],
    answer: "3. '24'",
  },
  {
    questionText:
      " Which was the first film by Disney to be produced in colour?",
    options: [
      "1. Toy Story",
      "2. Sleeping Beauty",
      "3. Snow White and the Seven Dwarfs",
      "4. Cinderella",
    ],
    answer: "3. Snow White and the Seven Dwarfs",
  },
  {
    questionText:
      "We often use sodium bicarbonate in the kitchen. What is its other name?",
    options: ["1. Vinger", "2. Sugar", "3. Salt", "4. Baking soda"],
    answer: "4. Baking soda",
  },
  {
    questionText:
      "The two biggest exporters of beers in Europe are Germany and ...",
    options: ["1. Spain", "2. France", "3. Italy", "4. Belgium"],
    answer: "4. Belgium",
  },
  {
    questionText: "What is the rarest type of blood in the human body?",
    options: [
      "1. AB negative",
      "2. O positive",
      "3. B negative",
      "4. A positive",
    ],
    answer: "1. AB negative",
  },
  {
    questionText: "Which did Viking people use as money?",
    options: ["1. Rune stones", "2. Jewellery", "3. Seal skins", "4. Wool"],
    answer: "2. Jewellery",
  },
];

const quizApp = document.querySelector(".quiz_app");
const quizStartMenu = document.querySelector(".quiz_start_menu");
const btnStart = document.querySelector(".btn_start");
const questionContainer = document.querySelector(".question-container");
const btnNext = document.querySelector(".btn_next");
const optionsEl = document.querySelector(".options");
const btnOption = document.querySelectorAll(".btn-option");
const quizEndMenu = document.querySelector(".quiz_end_menu");
const btnSubmit = document.querySelector(".btn_submit");
const btnReset = document.querySelector(".btn_reset");
const btnBack = document.querySelector(".btn_back");
const questionEl = document.querySelector(".question");
const scoreEl = document.querySelector("#score");
const scoreCardEl = document.querySelector(".score_card");
const nameEl = document.getElementById("name_initials");
const listPlayers = document.querySelector(".list_players");
const btnHighScore = document.querySelector("#leaderboard");
const btnClear = document.querySelector(".clear_btn");
const timerEl = document.querySelector(".timer");

let score = 210,
  currentQuestion = 0;
let playerNum = 0;
let scoreCard = [];
let id;

function reset() {
  btnHighScore.disabled = false;
  timerEl.innerText = 210;
  clearInterval(id);
  quizStartMenu.classList.remove("hide");
  questionContainer.classList.add("hide");
  quizEndMenu.classList.add("hide");
  scoreCardEl.classList.add("hide");
}

function start() {
  currentQuestion = 0;
  score = 210;
  timerEl.innerText = 210;
  quizStartMenu.classList.add("hide");
  questionContainer.classList.remove("hide");
  id = setInterval(setTimer, 1000);
  showQuestion();
}

function resetState() {
  while (optionsEl.firstChild) {
    optionsEl.removeChild(optionsEl.firstChild);
  }
}

function showQuestion() {
  btnHighScore.disabled = true;
  btnNext.style.opacity = "0%";
  btnNext.style.pointerEvents = "none";
  if (currentQuestion < questions.length) {
    resetState();
    questionEl.innerText = questions[currentQuestion].questionText;
    questions[currentQuestion].options.forEach((answer) => {
      const answerBtn = document.createElement("button");
      answerBtn.innerText = answer;
      answerBtn.classList.add("btn-option");
      optionsEl.appendChild(answerBtn);
      if (questions[currentQuestion].answer === answerBtn.innerText) {
        answerBtn.dataset.ans = "correct";
      } else {
        answerBtn.dataset.ans = "incorrect";
      }
      answerBtn.addEventListener("click", checkAnswer);
    });
  } else {
    questionContainer.classList.add("hide");
    quizEndMenu.classList.remove("hide");
    scoreEl.innerText = score;
    clearInterval(id);
  }
  currentQuestion++;
}

function checkAnswer(e) {
  const selectedOption = e.target;
  console.log(e.target);
  if (selectedOption.dataset.ans === "correct") {
    selectedOption.classList.add("correct");
  } else if (selectedOption.dataset.ans === "incorrect") {
    selectedOption.classList.add("wrong");
    score -= 5;
  }
  Array.from(optionsEl.children).forEach((btn) => {
    if (btn.dataset.ans === "correct") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  btnNext.style.opacity = "100%";
  btnNext.style.pointerEvents = "all";
}

function displayScoreCard() {
  btnHighScore.disabled = false;
  clearInterval(id);
  quizStartMenu.classList.add("hide");
  quizEndMenu.classList.add("hide");
  scoreCardEl.classList.remove("hide");
  timerEl.innerText = 210;
}
function submit() {
  const user = nameEl.value;
  const playerDetails = new Object();
  playerDetails.name = user;
  playerDetails.points = score;
  scoreCard.push(playerDetails);
  sortleaderBoard();
  listPlayers.innerHTML = "";
  scoreCard.forEach((obj) => {
    const player = document.createElement("li");
    const { name, points } = obj;
    player.innerText = `${name}  ${points}`;
    player.classList.add("player_name");
    listPlayers.appendChild(player);
  });
  playerNum++;
  displayScoreCard();
}
function sortleaderBoard() {
  scoreCard.sort((a, b) => {
    return b.points - a.points;
  });
  console.log(scoreCard);
}

function clearHighScore() {
  while (scoreCard.length !== 0) {
    scoreCard.pop();
    listPlayers.removeChild(listPlayers.firstChild);
  }
  playerNum = 0;
  score = 210;
  scoreCard = [];
}

btnStart.addEventListener("click", start);
btnNext.addEventListener("click", showQuestion);
btnSubmit.addEventListener("click", submit);
btnHighScore.addEventListener("click", displayScoreCard);
btnBack.addEventListener("click", function () {
  quizStartMenu.classList.remove("hide");
  scoreCardEl.classList.add("hide");
});
btnClear.addEventListener("click", clearHighScore);
btnReset.addEventListener("click", reset);

// Timer Implementation

const setTimer = () => {
  score--;
  if (score <= 0) {
    clearInterval(id);
    questionContainer.classList.add("hide");
    quizEndMenu.classList.remove("hide");
    quizStartMenu.classList.add("hide");
    scoreEl.innerText = score;
  }
  timerEl.innerText = `${score}`;
};
