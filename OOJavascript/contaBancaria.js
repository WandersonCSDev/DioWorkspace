class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }
  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Operação Cancelada! Saldo insuficiente.");
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
  get saldo() {
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada! Excede Limite.";
    }

    if (valor > this._saldo) {
      return "Operação cancelada! Saldo Insuficiente.";
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}

const cc01 = new ContaCorrente(1, 555, true);
const cp01 = new ContaPoupanca(1, 222);
const ccuni01 = new ContaUniversitaria(2, 333);

console.log(cc01.saldo);
console.log(ccuni01.saldo);

cc01.depositar(1000);

console.log("Saldo após depósito: ", cc01._saldo);

console.log();

cc01.sacar(400);

console.log("Saldo após saque: ", cc01._saldo);

cc01.depositar(1800);

console.log("Saldo após depósito: ", cc01._saldo);
