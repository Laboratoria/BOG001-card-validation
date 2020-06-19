import validator from './validator.js';
// Llamamos a los atributos
const numeroTarjeta = document.getElementById('creditCardNumber').value;
document.getElementById('validarBoton').addEventListener("click", validar);
//console.log(tarjeta);
function validar(){
   //console.log('hola'); //lo usamos para probar el boton
   validator.isValid(numeroTarjeta)
   if(validator.isValid(numeroTarjeta) === true){
      alert("Señor usuario su Tarjeta de Crédito es: Valida")
   }else {
      alert("Señor usuario su Tarjeta de crédito es: No Valida")
   }
}
//console.log(numeroTarjeta);

//console.log(validator);