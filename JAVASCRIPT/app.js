//window.onload = function () {
//}
let titulo = document.getElementById("inicio-h1");

let image = document.getElementById("img-top");

let boxTitle1 = document.querySelector(".cont-div1 h3");
let boxTitle2 = document.querySelector(".cont-div2 h3");
let boxTitle3 = document.querySelector(".cont-div3 h3");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");

titulo.innerHTML = "Duplo clique aqui";

titulo.onclick = function () {
  titulo.style.boxShadow = "3px 4px 5px #8A2BE2";
};

botao1.addEventListener("click", function () {
  input1.value = "Texto";
});
botao2.addEventListener("click", function () {
  boxTitle2.style.backgroundColor = "#a9a9a9";
});

botao3.addEventListener("click", function () {
  input1.value = "";
  boxTitle2.style.backgroundColor = "#f0f0";
});

titulo.addEventListener("dblclick", function (t1) {
  titulo.style.boxShadow = "3px 4px 5px #FF4500";
});

image.onclick = function () {
  this.style.transform = "scale(0.5)";
};

image.ondblclick = function () {
  this.style.transform = "scale(1)";
};
