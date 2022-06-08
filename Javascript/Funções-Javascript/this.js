function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "Amelia",
  idade: 23,
};

const pessoa2 = {
  nome: "Márcia",
  idade: 20,
};

const pessoa3 = {
  nome: "Jonas",
  idade: 13,
};

const pessoa4 = {
  nome: "Big Dad",
  idade: 73,
};

const pessoa5 = {
  nome: "Manoel",
  idade: 65,
};

const pessoa6 = {
  nome: "Daniel",
  idade: 13,
};

console.log(calculaIdade.call(pessoa5, 15));
console.log(calculaIdade.apply(pessoa6, [25]));
