import validator from './validator.js';

const botonComprar1 = document.getElementById ('comprar1');
botonComprar1.addEventListener("click",mostrar);

const botonComprar2 = document.getElementById ('comprar2');
botonComprar2.addEventListener("click",mostrar);

//Vamos a ejecutar una función que se va a llamar mostrar y me va a capturar lo que tenemos como Mostrarform en el html, y me lo va a mostrar con block
function mostrar(){
    document.getElementById('catalogo').style.display="none";
    document.getElementById('formulario').style.display="block";
 }

const botonValidar = document.getElementById ("tarjeta");
botonValidar.addEventListener("click",varImportante);

function varImportante(){
    document.getElementById('formulario').style.display="none";
    document.getElementById('resultado').style.display="block";
    
    let tc = document.getElementById ('tarjetacredito').value;
    let validation = validator.isValid(tc);
    let mask = validator.maskify(tc);
      if (validation === true){
          document.getElementById('mensaje').innerHTML = "Tu tarjeta de crédito No: " + mask + " es válida";
        } 
      else {
          document.getElementById('mensaje').innerHTML = "Tu tarjeta de crédito No: " + mask + " NO es válida";
        }

    }
