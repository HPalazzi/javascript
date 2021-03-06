const game = document.querySelector("#game");
const scoreDisplay =  document.querySelector("#score");

const jeopardyCategories = [
    {
      genre: 'QUEM',
      questions: [
        {
                question: 'Quem escreveu os livros da saga Harry Potter?',
                answers: ['JK Rowling', 'JRR Tolkien'],
                correct: 'JK Rowling',
                level: 'facil',
        },
        {
                question: 'Quem nasceu em Krypton?',
                answers: ['Aquaman', 'Superman'],
                correct: 'Superman',
                level: 'medio',
        },
        {
                question: 'Você tem medo da morte?',
                answers: ['Sim', 'Não'],
                correct: 'Não',
                level: 'dificil',
        },
      ],
    },
    {
      genre: 'ONDE',
      questions: [
        {
                question: 'Onde fica situado o palacio de Buckingham?',
                answers: ['Richmond', 'London'],
                correct: 'London',
                level: 'facil',
        },
        {
                question: 'Onde fica o Colosseu?',
                answers: ['Roma', 'Milan'],
                correct: 'Roma',
                level: 'medio',
        },
        {
                question: 'Por que você sempre foge de seus problemas?',
                answers: ['?', 'O que?'],
                correct: '?',
                level: 'dificil',
        },
      ],
    },
    {
      genre: 'QUANDO',
      questions: [
        {
                question: 'Quando ocorre o Natal?',
                answers: ['30/12', '24/12 e 25/12'],
                correct: '24/12 e 25/12',
                level: 'facil',
        },
        {
                question: 'Você está sozinha agora?',
                answers: ['Sim', 'Não'],
                correct: 'Não',
                level: 'medio',
        },
        {
                question: 'Quando hitler morreu?',
                answers: ['1945', '1961'],
                correct: '1945',
                level: 'dificil',
        },
      ],
    },
    {
      genre: 'QUAL',
      questions: [
        {
                question: 'Qual é a unidade de medida de tempo utilizada pelo SI',
                answers: ['Segundos', 'Minutos'],
                correct: 'Segundos',
                level: 'facil',
        },
        {
                question: 'Qual a capital da Arabia Saudita?',
                answers: ['Jeddah', 'Riyadh'],
                correct: 'Riyadh',
                level: 'dificil',
        },
        {
                question: 'Qual o nome da pessoa atrás de você?',
                answers: ['Boa tentativa', '?'],
                correct: '?',
                level: 'medio',
        },
      ],
    },
    {
      genre: 'QUANTOS',
      questions: [
        {
                question: 'Quantos jogadores tem em um time de futebol?',
                answers: ['15', '11'],
                correct: '11',
                level: 'facil',
        },
        {
                question: 'Quantos segundos tem numa hora?',
                answers: ['36000', '3600'],
                correct: '3600',
                level: 'medio',
        },
        {
                question: 'Olhe de novo, em baixo da mesa...',
                answers: ['=]', '=['],
                correct: '=]',
                level: 'dificil',
        },
      ],
    },
  ]

let score = 0;

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.append(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div');
        card.classList.add('card')
        column.append(card)

        if(question.level === 'facil'){
            card.innerHTML = 100
        }
        if(question.level === 'medio'){
            card.innerHTML = 200
        }
        if(question.level === 'dificil'){
            card.innerHTML = 300
        }

        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    })
}

jeopardyCategories.forEach((category) => addCategory(category))

function flipCard (){
        this.innerHTML = ""
        this.style.fontSize = "15px"
        this.style.lineHeight = "30px"
        const textDisplay = document.createElement('div')
        textDisplay.classList.add('card-text')
        textDisplay.innerHTML = this.getAttribute('data-question')
        const firstButton =  document.createElement('button')
        firstButton.classList.add('first-button')
        const secondButton =  document.createElement('button')
        secondButton.classList.add('second-button')
        firstButton.innerHTML = this.getAttribute('data-answer-1')
        secondButton.innerHTML = this.getAttribute('data-answer-2')
        firstButton.addEventListener('click', getResult)
        secondButton.addEventListener('click', getResult)
        this.append(textDisplay,firstButton,secondButton)

        const allCards = Array.from(document.querySelectorAll('.card'))
        allCards.forEach(card => card.removeEventListener('click', flipCard))
}

function getResult() {
        const allCards = Array.from(document.querySelectorAll('.card'))
        allCards.forEach((card) => card.addEventListener('click', flipCard))
      
        const cardOfButton = this.parentElement
      
        if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
          score = score + parseInt(cardOfButton.getAttribute('data-value'))
          scoreDisplay.innerHTML = score
          cardOfButton.classList.add('correct-answer')
          setTimeout(() => {
            while (cardOfButton.firstChild) {
              cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
          }, 100)
        } else {
          cardOfButton.classList.add('wrong-answer')
          setTimeout(() => {
            while (cardOfButton.firstChild) {
              cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
          }, 100)
        }
        cardOfButton.removeEventListener('click', flipCard)
      }