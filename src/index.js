import validator from './validator.js';

document.getElementById('validarBoton').addEventListener("click", validar);
//console.log(tarjeta);
function validar(){
   let numeroTarjeta = document.getElementById('creditCardNumber').value;
   //console.log('hola'); //lo usamos para probar el boton
   if (numeroTarjeta === '') {
      alert('Estimado usuario, por favor digite su nùmero de Tarjeta de Crédito');
   }else{
      let valida = validator.isValid(numeroTarjeta);
      if (valida) {
         document.getElementById('creditCardNumber');
         alert('Estimado usuario su Tarjeta de Crédito es VALIDA');
      } else{
         document.getElementById("creditCardNumber");
         alert('Estimado usuario su Tarjeta de Crédito es  NO VALIDA');
      }
   }
};
//console.log(numeroTarjeta);

//console.log(validator);