const codeForcesIO = require("@ip-algorithmics/codeforces-io");
const gets = codeForcesIO.readline;
const print = codeForcesIO.print;

let x = gets();

function soma(x) {
  while (x >= 1) {
    if (x % 2 == 0) x = (x - 1) / 2;
    else x = (x - 1) / 2;
  }
  return x
}

print(soma(x));
