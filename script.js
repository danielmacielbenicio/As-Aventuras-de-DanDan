window.onload = () => {
  escrever()
}

const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventListener('click', function() {
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
    escrever()
  })
})

var app = document.getElementById('app')

const arrText = [
  [
    'Quando nasci,em um planeta muito distante da Terra, meus pais me deram o nome de Dandan... ',
    ' e desde então,estou decidido à explorar outros  planetas.',
    ' Eu tenho a escolha de começar pelo planeta de minha mãe ou de meu pai. ',
    'Qual devo escolher?'
  ],
  [
    'Eu comecei minha jornada em Marte, e encontrei um homem chamado Leon. Ele me disse que estava em busca de ficar invisível.',
    'E que apenas UMA FÓRMULA poderia fazer esta proeza...',
    'A fórmula criada por Tokinho,',
    'uma entidade cósmica que vivia aos redores de Marte'
  ]
]

var Typewriter = new Typewriter(app, { 
  loop: false,
  delay: 75,
});

function escrever() {
  
  Typewriter
  .pauseFor(1000)
  .typeString(arrText[0][0])
  .pauseFor(150)
  .typeString(arrText[0][1])  
  .pauseFor(300)
  .typeString(arrText[0][2])
  .pauseFor(300)
  .typeString(arrText[0][3])
  .pauseFor(300)
  .start()
}




