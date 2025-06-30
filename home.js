const questions = [
  {
    question: "Which tag links a CSS file in HTML?",
    choices: [
      "<script src='style.css'>",
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'>",
      "<css>style.css</css>"
    ],
    correctAnswer: 1
  },
  {
    question: "Which CSS property sets the background color?",
    choices: [
      "color",
      "font-color",
      "background-color",
      "text-color"
    ],
    correctAnswer: 2
  },
  {
    question: "How do you declare a variable in JavaScript?",
    choices: [
      "v = 5;",
      "var x = 5;",
      "int x = 5;",
      "variable x = 5;"
    ],
    correctAnswer: 1
  },
  {
    question: "Which HTML tag makes an unordered list?",
    choices: [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
    ],
    correctAnswer: 1
  },
  {
    question: "What CSS rule centers an element horizontally?",
    choices: [
      "margin: auto;",
      "align: center;",
      "padding: center;",
      "text-center"
    ],
    correctAnswer: 0
  },
  {
    question: "Which JavaScript method is used to output to the browser console?",
    choices: [
      "console.print()",
      "console.log()",
      "print.console()",
      "log.console()"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    choices: [
      "<br>",
      "<lb>",
      "<break>",
      "<newline>"
    ],
    correctAnswer: 0
  },
  {
    question: "How do you write a comment in CSS?",
    choices: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "<!-- This is a comment -->"
    ],
    correctAnswer: 1
  },
  {
    question: "Which event occurs when a user clicks on an HTML element?",
    choices: [
      "onchange",
      "onclick",
      "onmouseover",
      "onmouseclick"
    ],
    correctAnswer: 1
  },
  {
    question: "How do you select an element with id 'demo' in JavaScript?",
    choices: [
      "document.getElement('demo')",
      "document.getElementById('demo')",
      "document.querySelector('#demo')",
      "Both 2 and 3"
    ],
    correctAnswer: 3
  }
];

let currentQuestion = 0;
let score = 0;

const questionTitle = document.getElementById("question-title");
const choicesDiv = document.getElementById("choices");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionTitle.textContent = q.question;
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice-btn";
    btn.onclick = () => {
      checkAnswer(index);
      nextBtn.disabled = false;
    };
    choicesDiv.appendChild(btn);
  });

  restartBtn.style.display = "none";
  scoreText.textContent = "";

  nextBtn.disabled = true;
  nextBtn.style.display = "inline-block";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correctAnswer;
  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correct) {
      btn.classList.add("correct");
    }
    if (index === selected && selected !== correct) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionTitle.textContent = "Quiz Finished!";
    choicesDiv.innerHTML = "";
    scoreText.textContent = `Your score: ${score} out of ${questions.length}`;
    restartBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
  restartBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

window.onload = showQuestion;
