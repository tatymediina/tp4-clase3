class CuentaBancaria {
  #saldo

  constructor(titular, saldo = 0) {
    this.titular = titular
    this.#saldo = saldo >= 0 ? saldo : 0
  }

  get saldo() {
    return this.#saldo
  }

  depositar(monto) {
    if (typeof monto !== 'number' || monto <= 0) {
      console.log("Monto inválido")
      return false
    }
    this.#saldo += monto
    console.log(`Depósito de $${monto} realizado. Saldo actual: $${this.#saldo}`)
    return true
  }

  extraer(monto) {
    if (typeof monto !== 'number' || monto <= 0) {
      console.log("Monto inválido ")
      return false
    }
    if (monto > this.#saldo) {
      console.log("Fondos insuficientes")
      return false
    }
    this.#saldo -= monto
    console.log(`Extracción de $${monto} realizada. Saldo actual: $${this.#saldo}`)
    return true;
  }
}

const cuenta1 = new CuentaBancaria("Pepe", 1000);

console.log(`Saldo inicial: $${cuenta1.saldo}`);

cuenta1.depositar(500);
cuenta1.extraer(200);
cuenta1.extraer(2000);  
cuenta1.depositar(-50); 
console.log(`Saldo final: $${cuenta1.saldo}`);
