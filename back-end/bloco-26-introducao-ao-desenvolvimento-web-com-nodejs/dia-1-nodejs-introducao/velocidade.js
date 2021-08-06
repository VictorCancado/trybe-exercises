const readline = require('readline-sync');

const distancia = readline.questionInt('Qual é a distância precorrida? (em metros) ');
const tempo = readline.questionInt('Qual é o tempo gasto para percorrer tal distância? (em segundos) ');

const velociMed = distancia / tempo;

console.log(`A velocidade média é de: ${velociMed} m/s`);