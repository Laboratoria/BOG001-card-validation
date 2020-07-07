import validator from './validator.js';
let nombre = document.getElementById('nombre');
let creditCardNumber = document.getElementById('creditCardNumber')
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
const validar = () => {
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
         textcontent('Estimado usuario su Tarjeta de Crédito es  NO VALIDA');
      }
   }
   let numeroEnmascarado = validator.maskify(numeroTarjeta);
   console.log(numeroEnmascarado);
}