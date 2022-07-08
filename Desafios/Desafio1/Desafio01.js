const codeForcesIO = require("@ip-algorithmics/codeforces-io");
const gets = codeForcesIO.readline;
const print = codeForcesIO.print;

let input = gets();

let qtdEntradas = parseInt(input);

let arr = [];
for (let i = 0; i < qtdEntradas; i++) {
  let x = gets();
  arr.push(parseInt(x));
}
for (let i = 0; i < arr.length; i++) {
  const nivelEnergia = arr[i];
  if (nivelEnergia <= 8000) {
    print("Inseto!");
  } else {
    print("Mais de 8000!");
  }
}
