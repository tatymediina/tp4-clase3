function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular
  this.saldo = saldoInicial
}
CuentaBancaria.prototype.depositar = function(monto) {
  this.saldo += monto
}

CuentaBancaria.prototype.extraer = function(monto) {
  if (monto <= this.saldo) {
    this.saldo -= monto
  } else {
    console.log("Fondos insuficientes")
  }
}

CuentaBancaria.prototype.consultarSaldo = function() {
  console.log(`Saldo actual: $${this.saldo}`)
}
const cuenta1 = new CuentaBancaria("Tati", 2000)

cuenta1.consultarSaldo()   
cuenta1.depositar(3000)     
cuenta1.consultarSaldo()   
cuenta1.extraer(4000)      
cuenta1.consultarSaldo()   
cuenta1.extraer(2000)   