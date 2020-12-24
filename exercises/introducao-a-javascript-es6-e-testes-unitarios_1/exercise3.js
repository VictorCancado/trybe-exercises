const fatorial = (numero) => {
    let arr = [];
    for (let index = numero; index >= 1; index--) {
        arr.push(index);
    }
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return arr.reduce(reducer);
}

console.log(fatorial(5));
