//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 18;
let b = 23;
let c = 15;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}