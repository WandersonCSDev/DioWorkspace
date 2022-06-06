let currentNumberWrapper = document.getElementById("currentNumber");
let frase = document.getElementById("p");
let btn_mais = document.getElementById("adicionar");
let btn_menos = document.getElementById("subtrair");

let buttons = document.querySelectorAll("button");

let num = parseFloat(document.currentNumberWrapper.value);

let count = 0;

function increment() {
  count = count + 1;
  currentNumberWrapper.value = count;
}

function decrement() {
  count = count - 1;
  currentNumberWrapper.value = count;
}

currentNumberWrapper.addEventListener("click", function () {
  currentNumberWrapper.disabled = true;
});

/*
Aumentar e encolher os botões conforme
movimenta o mouse sobre eles. 
Animação configurada no arquivo .css
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
