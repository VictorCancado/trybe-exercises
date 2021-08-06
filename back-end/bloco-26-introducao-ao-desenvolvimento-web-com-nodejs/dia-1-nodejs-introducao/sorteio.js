const readline = require('readline-sync');

function escolherNumero(numero, sorteio) {
  if (numero === sorteio) {
    console.log('Parabéns, número correto!');
    return;
  }
  return console.log(`Opa, não foi dessa vez. O número era ${sorteio}`);
}

function sortear() {
  const sorteio = Math.floor(Math.random() * 10);
  const numero = readline.questionInt('Qual é seu número? ');
  
  escolherNumero(numero, sorteio);
  
  const jogarNovamente = readline.question('Deseja jogar novamente? [s/n] ');

  if (jogarNovamente === "s" || jogarNovamente === "S") {
    sortear();
  }

}

sortear();







