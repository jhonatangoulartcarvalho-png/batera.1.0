// =========================
// QUIZ
// =========================

const questions = [
    {
        question: "Qual peça da bateria geralmente produz um som grave?",
        answers: ["Caixa", "Bumbo", "Chimbal", "Prato"],
        correct: 1
    },
    {
        question: "Qual peça é normalmente tocada com uma baqueta e possui um som característico?",
        answers: ["Caixa", "Banco", "Pedal", "Baqueta"],
        correct: 0
    },
    {
        question: "O que é uma virada na bateria?",
        answers: [
            "Um tipo de prato",
            "Uma sequência de batidas",
            "Uma marca de bateria",
            "Um tipo de baqueta"
        ],
        correct: 1
    },
    {
        question: "Qual destas peças pertence a uma bateria?",
        answers: ["Violino", "Tom", "Flauta", "Teclado"],
        correct: 1
    },
    {
        question: "Para que serve o chimbal?",
        answers: [
            "Produzir diferentes sons metálicos",
            "Afinar a guitarra",
            "Aumentar o volume",
            "Segurar o bumbo"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;


function startQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz-start").classList.add("hidden");
    document.getElementById("quiz-result").classList.add("hidden");
    document.getElementById("quiz-game").classList.remove("hidden");

    showQuestion();
}


function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `PERGUNTA ${currentQuestion + 1} DE ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.classList.add("answer");

        button.textContent = answer;

        button.onclick = () => checkAnswer(index);

        answersContainer.appendChild(button);

    });
}


function checkAnswer(answerIndex) {

    const question = questions[currentQuestion];

    if (answerIndex === question.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


function showResult() {

    document.getElementById("quiz-game").classList.add("hidden");

    document.getElementById("quiz-result").classList.remove("hidden");

    const percentage =
        Math.round((score / questions.length) * 100);

    let message = "";

    if (percentage === 100) {
        message = "👑 LENDA DA BATERIA!";
    } else if (percentage >= 70) {
        message = "🥇 MESTRE DAS BAQUETAS!";
    } else if (percentage >= 50) {
        message = "🥈 GUARDIÃO DO RITMO!";
    } else {
        message = "🥉 CONTINUE PRATICANDO!";
    }

    document.getElementById("score").innerHTML =
        `Você acertou <strong>${score}</strong> de ${questions.length}!<br><br>
         ${message}`;
}


function restartQuiz() {
    startQuiz();
}


// =========================
// LABORATÓRIO
// =========================

const drumPieces = document.querySelectorAll(".drum-piece");


drumPieces.forEach(piece => {

    piece.addEventListener("click", () => {
        playDrum(piece);
    });

});


document.addEventListener("keydown", event => {

    let key = event.key.toLowerCase();

    if (event.code === "Space") {
        key = "space";
    }

    const piece = document.querySelector(
        `[data-key="${key}"]`
    );

    if (piece) {

        if (key === "space") {
            event.preventDefault();
        }

        playDrum(piece);
    }

});


function playDrum(piece) {

    piece.classList.add("active");

    setTimeout(() => {
        piece.classList.remove("active");
    }, 150);

}


// =========================
// BOTÕES DE RITMOS
// =========================

const rhythmButtons =
    document.querySelectorAll(".rhythm button");


rhythmButtons.forEach(button => {

    button.addEventListener("click", () => {

        const rhythm =
            button.parentElement.querySelector("h3").textContent;

        alert(
            `🎵 Você selecionou o ritmo: ${rhythm}\n\nEm breve você poderá ouvir e praticar essa batida!`
        );

    });

});


// =========================
// BOTÕES DA ACADEMIA
// =========================

const levelButtons =
    document.querySelectorAll(".level button");


levelButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "🥁 Aula selecionada! Em breve o conteúdo completo será aberto."
        );

    });

});
