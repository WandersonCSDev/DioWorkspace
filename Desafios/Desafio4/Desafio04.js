const codeForcesIO = require("@ip-algorithmics/codeforces-io");
const gets = codeForcesIO.readline;
const print = codeForcesIO.print;

var array = [2, 3, 5, 7, 11, 13, 18, 34];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    print(array[i]);
  }
}
