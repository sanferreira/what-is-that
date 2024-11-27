const quizData = {
    questions: [
        {
            text: "O que é um array?",
            options: [
                { text: "Uma estrutura de dados que armazena uma coleção ordenada de elementos.", correct: true },
                { text: "Uma função que ordena números.", correct: false },
                { text: "Um tipo de variável que pode armazenar qualquer valor.", correct: false }
            ],
            id: "1"
        },
        {
            text: "Qual método adiciona um novo elemento ao final de um array?",
            options: [
                { text: "append()", correct: false },
                { text: "push()", correct: true },
                { text: "insert()", correct: false }
            ],
            id: "2"
        },
        {
            text: "O que o método pop() faz?",
            options: [
                { text: "Remove o primeiro elemento do array.", correct: false },
                { text: "Remove e retorna o último elemento do array.", correct: true },
                { text: "Insere um novo elemento no início do array.", correct: false }
            ],
            id: "3"
        },
        {
            text: "Como você ordena um array em ordem crescente?",
            options: [
                { text: "sort()", correct: true },
                { text: "reverse()", correct: false },
                { text: "order()", correct: false }
            ],
            id: "4"
        },
        {
            text: "O que o método shift() faz?",
            options: [
                { text: "Remove o primeiro elemento do array.", correct: true },
                { text: "Remove o último elemento do array.", correct: false },
                { text: "Adiciona um elemento ao início do array.", correct: false }
            ],
            id: "5"
        },
        {
            text: "O que faz o método concat()?",
            options: [
                { text: "Concatena dois ou mais arrays.", correct: true },
                { text: "Remove elementos de um array.", correct: false },
                { text: "Ordena os elementos de um array.", correct: false }
            ],
            id: "6"
        },
        {
            text: "Como você pode inverter um array?",
            options: [
                { text: "reverse()", correct: true },
                { text: "invert()", correct: false },
                { text: "flip()", correct: false }
            ],
            id: "7"
        },
    
        {
            text: "Qual método remove um elemento de um array em um índice específico?",
            options: [
                { text: "remove()", correct: false },
                { text: "splice()", correct: true },
                { text: "delete()", correct: false }
            ],
            id: "8"
        }
    ]
};

function buildQuiz() {
    const quizContainer = document.getElementById('quiz-questions');
    quizData.questions.forEach((question, index) => {
        let questionHtml = `
            <div class="question-container">
                <h3>Pergunta ${index + 1}: ${question.text}</h3>
                <div>
        `;
        question.options.forEach(option => {
            questionHtml += `
                    <div>
                        <input type="radio" name="${question.id}" id="${question.id}-${option.correct}" value="${option.correct}">
                        <label for="${question.id}-${option.correct}">${option.text}</label>
                    </div>
            `;
        });
        questionHtml += `</div></div>`;
        quizContainer.innerHTML += questionHtml;
    });
}

function showResults() {
    let score = 0;
    const incorrectAnswers = [];

    for (const question of quizData.questions) {
        const userAnswer = document.querySelector(`input[name="${question.id}"]:checked`);
        if (userAnswer && userAnswer.value === "true") {
            score++;
            userAnswer.parentNode.classList.add('correct');
        } else if (userAnswer) {
            userAnswer.parentNode.classList.add('incorrect');
            incorrectAnswers.push({
                questionId: question.id,
                questionText: question.text,
                userAnswer: userAnswer.nextElementSibling.innerText,
                correctAnswer: question.options.find(option => option.correct).text
            });
        }
    }

    let resultText = `Você acertou ${score} de ${quizData.questions.length} perguntas.`;
    let incorrectQuestionsText = "";

    if (incorrectAnswers.length > 0) {
        incorrectQuestionsText = "Respostas incorretas:\n";
        incorrectAnswers.forEach(answer => {
            console.log(answer);
            incorrectQuestionsText += `Pergunta ${parseInt(answer.questionId)}: "${answer.questionText}"\n`;
            incorrectQuestionsText += `Sua resposta: "${answer.userAnswer}"\n`;
            // incorrectQuestionsText += `Resposta correta: "${answer.correctAnswer}"\n\n`;
        });
    } else {
        incorrectQuestionsText = 'Parabéns! Você acertou todas as questões.';
    }

    document.getElementById('resultText').innerText = resultText;
    document.getElementById('incorrectQuestions').innerText = incorrectQuestionsText;
    $('#resultModal').modal('show');
}

buildQuiz();
document.getElementById('quizForm').addEventListener('submit', (event) => {
    event.preventDefault();
    showResults();
});