const mathOperation = require('./exercise1');

function generateRandomNumbers() {
  return Math.floor(Math.random() * 100 + 1);
}

function createArrayOfNumbers() {
  const arrayOfNumebers = Array.from({ length: 3 }).map(generateRandomNumbers);
  console.log(arrayOfNumebers)

  mathOperation(...arrayOfNumebers)
    .then(result => console.log(`Tudo certo, resultado é: ${result}`))
    .catch(err => console.log(`Erro: ${err.message}`));
}

createArrayOfNumbers();