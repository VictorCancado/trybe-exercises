function mathOperation(a, b, c) {

  const promise = new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
      reject(Error("Informe apenas números"));

    const operation = (a + b) * c;
    resolve(operation);
  })

  return promise;
}

mathOperation(3, '2', 5)
  .then(result => console.log(`Sucesso: ${result}`))
  .catch(err => console.log(`Erro: ${err.message}`))