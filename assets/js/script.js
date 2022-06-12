var operadores = ['+', '-', '*', '/'];
var resultado = null;
const sortearDesafio = document.querySelector('#sortearDesafio');
var aumentarPontos = null;

sortearDesafio.addEventListener('click', function (e) {
  e.preventDefault();
  
  let valorUm = document.querySelector('#botaoUm');
  let sorteioUm = Math.floor(Math.random()*99)
  valorUm.value = sorteioUm;

  let valorDois = document.querySelector('#botaoDois');
  let sorteioDois = Math.floor(Math.random()*99)
  valorDois.value = sorteioDois;

  let operador = document.querySelector('#operador');
  let sorteioOperador = Math.floor(Math.random()*4)
  operador.value = operadores[sorteioOperador]
  let valorOperador = operador.value
  console.log(operador.value);

  if (valorOperador == '+') {
     resultado = sorteioUm + sorteioDois
} else if (valorOperador == '*') {
     resultado = sorteioUm * sorteioDois
} else if (valorOperador == '/') {
     resultado = sorteioUm / sorteioDois
} else if (valorOperador == '-') {
     resultado = sorteioUm - sorteioDois
}
console.log(resultado);
})

const validar = document.querySelector('#validar');

validar.addEventListener('click', function (e) {
  e.preventDefault(); 
    let resultadoInput = document.querySelector('#result')
    let respostaUsuario = resultadoInput.value;
    console.log(respostaUsuario);

    if (respostaUsuario == resultado) {
          aumentarPontos = Number(aumentarPontos) + 10;

        let textoPontos = document.getElementById('pontos');
        textoPontos.textContent = `Você tem ${aumentarPontos} pontos!`
        console.log(resultado)
        console.log('Você acertou')
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Você acertou!',
          showConfirmButton: false,
          timer: 1500
        })

    }
    else{
        console.log('errou')
        console.log(resultado)
        Swal.fire({
          icon: 'error',
          title: 'Você errou!',
        })
        
    }

})

const novoJogo = document.querySelector('#novoJogo');

novoJogo.addEventListener('click', function (e) {
  e.preventDefault(); 

  let valorUm = document.querySelector('#botaoUm');
  valorUm.value = ''

  let valorDois = document.querySelector('#botaoDois');
  valorDois.value = ''

  let operador = document.querySelector('#operador');
  

  let resultadoInput = document.querySelector('#result')
  resultadoInput.value = ''

  let textoPontos = document.getElementById('pontos');
  textoPontos.textContent = `Você tem 0 pontos!`
  
  Swal.fire({
    title: 'Novo jogo!',
  })
})
