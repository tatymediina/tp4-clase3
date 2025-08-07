String.prototype.concatenarPalabra = function (string2) {
    return `${this} ${string2}`
}
const palabra = "Buenos"
console.log(palabra.concatenarPalabra("días"))