class CuentaBancaria {
  #saldo;

  constructor(titular, saldo) {
    this.titular = titular;
    this.#saldo = saldo >= 0 ? saldo : 0;
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

  set extraer(monto) {
    if(monto <= this.saldo){
      this.#saldo -=monto
    }else{
      console.log("Fondos insuficientes")
    }
  }
}
const micuenta = new CuentaBancaria("Pepe", 1000)
    

console.log(micuenta.saldo)      
micuenta.saldo = 2000
console.log(micuenta.saldo)
micuenta.extraer = 400
console.log(micuenta.saldo)     
micuenta.saldo = -500           
console.log(micuenta.saldo)     
