const codeForcesIO = require("@ip-algorithmics/codeforces-io");
const gets = codeForcesIO.readline;
const print = codeForcesIO.print;

const A = parseInt(gets());
const B = parseInt(gets());

function soma(B) {
  if (B % 2 == 0) return (B * (B + 1)) / 2;
  else return ((B + 1) / 2) * B;
}
function somaInter(A, B) {
  return soma(B) - soma(A - 1);
}

print(somaInter(A, B));

/*
const total = somaInter(A, B);
print(total);
*/
