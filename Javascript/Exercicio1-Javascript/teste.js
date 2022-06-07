function Nums(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push([i]);
  }
  return array;
}

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
console.log("Números até 100 = ", Nums(100));

console.log("Números Pares = ", EvenValues(array));

console.log("Números Ímpares = ", OddNums(array));
//refatorar depois;
