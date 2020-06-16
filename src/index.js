/*import validator from './validator.js';

console.log(validator);*/

function mostrarNumero(){
    document.getElementById("numero").style.display = "block";
    document.getElementById("bienvenido").style.display = "none";
}
function mostrarValidacion(){
    document.getElementById("numero").style.display = "none";
    document.getElementById("validacion").style.display = "block";
}
function mostrarMensaje(){
    document.getElementById("validacion").style.display = "none";
    document.getElementById("mensaje").style.display = "block";
}

