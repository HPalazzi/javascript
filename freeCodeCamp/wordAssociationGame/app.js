const scoreDisplay = document.querySelector("#score-display");
const questionDisplay = document.querySelector("#question-display");

const question = [
    {
        quiz: ['valor', 'preço', 'quantia'],
        options: ['montante', 'poltronaria'],
        correct: 1
    },
    {
        quiz: ['perspicaz', 'fino', 'astucioso'],
        options: ['obtuso', 'vivo'],
        correct: 2
    },
    {
        quiz: ['ignorante', 'primitivo', 'boçal'],
        options: ['descarado', 'panaca'],
        correct: 1
    },
    {
        quiz: ['desenvolvimento', 'difusão', 'aditamento'],
        options: ['apoucamento', 'engrandecimento'],
        correct: 2
    },
    {
        quiz: ['revista', 'análise', 'prova'],
        options: ['vistoria', 'síntese'],
        correct: 1
    }
]

let score = 0
let clicked = [];

scoreDisplay.textContent = score;

function populateQuestions() {
    question.forEach(question =>{
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "✏"
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip =>{
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            questionButton.addEventListener('click', () => checkAnswser(questionBox, questionButton, option, optionIndex + 1, question.correct))

            questionButtons.append(questionButton)

        })

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')

        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswser(questionBox, questionButton, option, optionIndex, correctAnswer){
    console.log('option', option);
    console.log('optionIndex', optionIndex);

    if(optionIndex === correctAnswer){
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, "Correto!", 'correct')
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, "Incorreto!", 'incorrect')

    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
};

function addResult(questionBox, answser, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('incorrect')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answser
}