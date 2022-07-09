const codeForcesIO = require("@ip-algorithmics/codeforces-io");
const gets = codeForcesIO.readline;
const print = codeForcesIO.print;

let times = gets();
let n = parseInt(times);
let partidas = 0;
let totalPartidas = 0;
while (n > 1) {
  n--;
  if (n % 2 == 0) {
    print(n / 2);
  } else if (n % 2 !== 0) {
    print((n - 1) / 2);
  }
}
