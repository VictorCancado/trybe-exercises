const readline = require('readline-sync');

const peso = readline.questionFloat('Quel é seu peso? ');
const altura = readline.questionFloat('Qual é sua altura? ');
const imc = (peso / Math.pow(altura, 2)).toFixed(2);
const situacao = "";

console.log(`Seu IMC é ${imc}`);

if (imc < 18.5) {
  console.log("Situação: Abaixo do peso (magreza)");
  return;
} else if (imc >= 18.5 && imc < 25) {
  console.log("Situação: Peso normal");
  return;
} else if (imc >= 25 && imc < 30) {
  console.log("Situação: Acima do peso (sobrepeso)");
  return;
} else if (imc >= 30 && imc < 35) {
  console.log("Situação: Obesidade grau I");
  return;
} else if (imc >= 35 && imc < 40) {
  console.log("Situação: Obesidade grau II");
  return;
} else {
  console.log("Situação: Obesidade graus III e IV");
  return;
}
