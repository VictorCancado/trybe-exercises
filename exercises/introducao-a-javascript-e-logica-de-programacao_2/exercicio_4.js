let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let mediaAritmetica = 0;

let soma = 0;

let valor = "";

for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    mediaAritmetica = soma / numbers.length;
    if (mediaAritmetica > 20) {
        valor = "valor maior que 20";
    } else {
        valor = "valor menor ou igual a 20";
    }
}
console.log(valor);
