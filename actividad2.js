class CuentaBancaria {
  #saldo;

  constructor(titular, saldo) {
    this.titular = titular;
    this.#saldo = saldo >= 0 ? saldo : 0;
  }
  depositar(monto) {
    this.#saldo += monto;
  }
  extraer(monto) {
    if (monto <= this.#saldo) {
      this.#saldo -= monto;
    } else {
      console.log("Fondos insuficientes");
    }
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldo = nuevoSaldo;
    } else {
      console.log("El saldo no puede ser negativo");
    }
  }
  consultarSaldo() {
    console.log(`Saldo actual: $${this.#saldo}`);
  }
}
const micuenta = new CuentaBancaria("Pepe", 1000)

micuenta.consultarSaldo()       
micuenta.depositar(500)
micuenta.consultarSaldo()      
micuenta.extraer(200)
micuenta.consultarSaldo()       

console.log(micuenta.saldo)    
micuenta.saldo = 2000           
console.log(micuenta.saldo)     
micuenta1.saldo = -500           
console.log(micuenta.saldo)     
