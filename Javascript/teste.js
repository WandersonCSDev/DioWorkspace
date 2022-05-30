function Nums(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = i + 1;
  }
  return array;
}

console.log(Nums(100));

console.log(
  "*****************************************************************"
);

var array = Nums(100);

function EvenValues(array) {
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    }
  }
  return evenNums;
}

function OddNums(array) {
  let oddNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNums.push(array[i]);
    }
  }
  return oddNums;
}
console.log("Pares = ", EvenValues(array));
console.log(
  "=========================================================================="
);
console.log("Ímpares = ", OddNums(array));
//refatorar depois;
