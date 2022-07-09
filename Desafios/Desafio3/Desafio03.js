const codeForcesIO = require("@ip-algorithmics/codeforces-io");
const gets = codeForcesIO.readline;
const print = codeForcesIO.print;

let input = gets();
let qtdEntradas = parseInt(input);
let arr = [];
let melhor = 0;
for (let i = 0; i < qtdEntradas; i++) {
  let x = gets();
  arr.push(parseFloat(x));
}
melhor = Math.min(...arr);
print(melhor);
