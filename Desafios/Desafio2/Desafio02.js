const codeForcesIO = require("@ip-algorithmics/codeforces-io");
const gets = codeForcesIO.readline;
const print = codeForcesIO.print;

function somaIntervalo(soma, x) {
  const interv = [];
  let total = 0;
  if (soma !== 0) {
    for (let i = 0; i < x; i++) {
      interv.push(soma + i);
      total += interv[i];
    }
  } else {
    total = x;
  }
  return total;
}

const A = parseInt(gets());
const B = parseInt(gets());
const total = somaIntervalo(A, B);
print(total);
