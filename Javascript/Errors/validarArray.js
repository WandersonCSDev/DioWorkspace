function validaArray(array, num) {
  try {
    if (!array && !num) throw new ReferenceError("Não há parâmetros!");

    if (typeof array !== "object")
      throw new TypeError("Elementos não são do tipo object!");

    if (typeof num !== "number")
      throw new TypeError("Elementos não são do tipo Number!");

    if (array.length !== num) throw new RangeError("Tamanho inválido!");
    // Retornamos Array caso seja válido
    return array;
  } catch (erro) {
    if (erro instanceof ReferenceError) {
      console.log("Erro do tipo ReferenceError!");
      console.log(erro.stack);
    } else if (erro instanceof RangeError) {
      console.log("Erro do tipo RangeError!");
      console.log(erro.stack);
    } else if (erro instanceof TypeError) {
      console.log("Erro do tipo TypeError!");
      console.log(erro.stack);
    } else {
      console.log("Houve um erro inesperado!");
      console.log(erro.stack);
    }
  }
}

//console.log(validaArray(1, 3));

//console.log(validaArray([], "3"));

//console.log(validaArray());

//console.log(validaArray([], 5));

//console.log(validaArray(["3", "6", "9"], 1));

//console.log(validaArray(["3", "6", "9"], 3));
