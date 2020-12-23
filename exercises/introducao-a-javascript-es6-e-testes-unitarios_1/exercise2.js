const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

oddsAndEvens.sort(function(a, b) {
    return a - b;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);