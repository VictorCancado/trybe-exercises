let salarioBruto = 2800;
let contribInss;
let contribIr;


if (salarioBruto <= 1556.94) {
    contribInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    contribInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    contribInss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    contribInss = (570.88);
}

let salarioBase = salarioBruto - contribInss;

if (salarioBase <= 1903.98) {
    contribIr = 0;
} else if (salarioBase <= 2826.65) {
    contribIr = salarioBase * 0.075 - 142.8;
} else if (salarioBase <= 3751.05) {
    contribIr = salarioBase * 0.15 - 354.8;
} else if (salarioBase <= 4664.68) {
    contribIr = salarioBase * 22.5 - 636.13;
} else if (salarioBase > 4664.68) {
    contribIr = salarioBase * 27.5 - 869.36;
}

console.log(salarioBase);
console.log(contribIr);
console.log(salarioBase - contribIr);

/*Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto*/ 
