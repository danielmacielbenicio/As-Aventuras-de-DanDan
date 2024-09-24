const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventListener('click', function() {
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
  })
})





var app = document.getElementById('app')

var Typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});


Typewriter
  .pauseFor(1000)
  .typeString('Quando nasci,em um planeta muito distante da Terra, meus pais me deram o nome de Dandan... ')
  .pauseFor(150)
  .typeString(' e desde então,estou decidido à explorar outros planetas.')
  .pauseFor(300)
  .typeString(' Eu tenho a escolha de começar pelo planeta de minha mãe ou de meu pai. ')
  .pauseFor(300)
  .typeString('Qual devo escolher?')
  .pauseFor(300)
  .start()
