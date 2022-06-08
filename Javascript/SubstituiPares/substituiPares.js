function substituiNumerosPares(array) {
  if (!array.length) return console.log(-1);

  const noZero = (num) => num !== 0;
  const numPar = (num) => num % 2 === 0;

  for (let i = 0; i < array.length; i++) {
    if (numPar(array[i]) && noZero(array[i])) {
      console.log(`substituído ${array[i]} por 0...`);
      array[i] = 0;
    } else if (!noZero(array[i])) {
      array[i] = "*";
      console.log("Valor é 0!");
    }
  }
  console.log(array);
}

substituiNumerosPares([
  2, 0, 3, 5, 9, 12, 0, 7, 4, 6, 2, 0, 0, 0, 2, 4, 6, 8, 10,
]);
