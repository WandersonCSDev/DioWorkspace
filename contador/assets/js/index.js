let currentNumberWrapper = document.getElementById("currentNumber");
let frase = document.getElementById("p");
let btn_mais = document.getElementById("adicionar");
let btn_menos = document.getElementById("subtrair");

let buttons = document.querySelectorAll("button");

let currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.value = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.value = currentNumber;
}

/*
Aumentar e encolher os botões conforme
movimenta o mouse sobre eles.
*/

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onmouseover = function () {
    this.classList.remove("shrink");
    this.classList.add("grow");
  };
  buttons[i].onmouseout = function () {
    this.classList.remove("grow");
    this.classList.add("shrink");
  };
}
