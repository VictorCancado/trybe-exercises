let cpv = 500;
let valorVenda = 1000;
let imposto = cpv * 0.2;
let valorCustoTotal = cpv + imposto;
let lucroUnitario = valorVenda - valorCustoTotal;
let quantidadeVendida = 1000;
let lucroTotal = lucroUnitario * quantidadeVendida;

if (cpv >= 0 || valorVenda >= 0 || imposto >= 0 || quantidadeVendida >= 0) {
    console.log(lucroTotal);
} else {
    console.log("Erro, algum valor está errado");
}



