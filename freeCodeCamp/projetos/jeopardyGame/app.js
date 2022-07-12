const game = document.querySelector("#game");
const score =  document.querySelector("#score");

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
                answers: ['?', 'Do que você está falando?'],
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
                answers: ['30/12', 'entre 24/12 e 25/12'],
                correct: 'entre 24/12 e 25/12',
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
  
function addCategory(category) {
const column = document.createElement('div')
column.classList.add('genre-column')

const genreTitle = document.createElement('div')
genreTitle.classList.add('genre-title')
genreTitle.innerHTML = category.genre

column.append(genreTitle)
game.append(column)
}
jeopardyCategories.forEach((category) => addCategory(category))