function print(string) {
  if (string) {
    console.log(string, "\n");
  }
  return;
}

let entradas = [3, 8001, 100, 200];
let input = entradas;
let qtdEntradas = parseInt(entradas[0]);
let nivelEnergia = input;

for (let i = 1; i <= qtdEntradas; i++) {
  if (input[i] <= 8000) {
    print("Inseto!");
  } else {
    print("Mais de 8000!");
  }
}
