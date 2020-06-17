import validator from './validator.js';
// Llamamos a los atributos
const tarjeta = document.getElementById('name');
const numeroTarjeta = document.getElementById('creditCardNumber').value;
document.getElementById('validarBoton').addEventListener("click", validar);
console.log(tarjeta);
function validar(){
   // console.log('hola'); lo usamos para probar el boton
   validator.isValidCard(numeroTarjeta)
};

//invocamos a la función para validar la tarjeta de crédito que brinde el usuario
//validator.isVadilCard()
//console.log(numeroTarjeta);

//console.log(validator);