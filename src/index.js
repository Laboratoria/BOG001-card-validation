import validator from './validator.js';

document.getElementById('validarBoton').addEventListener("click", validar);

nombre.addEventListener('keyup', (e) => {// (e) es un objeto de tipo evento
   //console.log(e);
   let nombreInput = e.target.value;
   nombre.value = nombreInput
   .replace (/[0-9]/g, '')//Nos elimina los numeros
});

creditCardNumber.addEventListener("keyup",(e)=> {// keyup para que realice funcion cada que se presiona una tecla
   //console.log(e);
   let numeroTarjeta= e.target.value;
   creditCardNumber.value= numeroTarjeta
   .replace(/\s/g, '')//Eliminamos espacios en blanco (es una expresion)
   .replace(/\D/g, '')// Elimina las letras
	.trim();//Elimina el ultimo espacio en blanco
});

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
   let numeroEnmascarado = validator.maskify(numeroTarjeta);
   
   console.log(numeroEnmascarado);
   
};
//console.log(numeroTarjeta);

//console.log(validator);