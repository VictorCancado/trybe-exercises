let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*Utilizando for, descubra qual o maior valor contido no array e imprima-o;*/

let biggestNumber = 0;

for(var index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
        biggestNumber = numbers[index];
    }
}
console.log(biggestNumber);