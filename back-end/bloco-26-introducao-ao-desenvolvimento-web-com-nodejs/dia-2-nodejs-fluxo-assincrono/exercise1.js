function mathOperation(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
      reject(Error("Informe apenas números"));

    const operation = (a + b) * c;

    if (operation < 50) {
      return reject(Error("Valor muito baixo"))
    }

    resolve(operation);
  });
}

// mathOperation(3, 2, 5)
//   .then(result => console.log(`Sucesso: ${result}`))
//   .catch(err => console.log(`Erro: ${err.message}`));

module.exports = mathOperation;