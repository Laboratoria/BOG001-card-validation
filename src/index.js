import validator from './validator.js';

const botonComprar1 = document.getElementById ('comprar1');
botonComprar1.addEventListener("click",mostrar);

const botonComprar2 = document.getElementById ('comprar2');
botonComprar2.addEventListener("click",mostrar);

//Vamos a ejecutar una función que se va a llamar mostrar y me va a capturar lo que tenemos como Mostrarform en el html, y me lo va a mostrar con block
function mostrar(){
     document.getElementById('catalogo').classList.add('hidden');
     document.getElementById('formulario').classList.remove('hidden');
    

    const botonValidar = document.getElementById ('tarjeta');
    botonValidar.addEventListener("click",varImportante);
}
function varImportante(){

     document.getElementById('formulario').classList.add('hidden');
      let tc = document.getElementById ('tarjetacredito').value;
      let validation = validator.isValid(tc);
      let mask = validator.maskify(tc);
      document.getElementById('resultado').classList.remove('hidden');

      if (validation === true){
      /* document.getElementById('resultado').classList.remove('hidden'); */
        document.getElementById('resultado').innerHTML = "Tu tarjeta de crédito No: " + mask + " es válida";
      /*alert ("Tu tarjeta de crédito No: " + mask + " es válida");*/
        } 
    
      else {
      /*  document.getElementById('resultado').classList.remove('hidden'); */
        document.getElementById('resultado').innerHTML = "Tu tarjeta de crédito No: " + mask + " NO es válida";
        /*alert ("Tu tarjeta de crédito No: " + mask + " NO es válida");*/
        }
      
      
      /* const botonContinuar=document.getElementById('siguiente');
      botonContinuar.addEventListener("click",seguir); */

      }


     


     /* const botonContinuar=document.getElementById('siguiente');
     botonContinuar.addEventListener("click",seguir);
     
     }

      function seguir(){
        document.getElementById('catalogo').classList.remove('hidden');
      }
      */
