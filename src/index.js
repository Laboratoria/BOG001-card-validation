'use strict'

import validator from './validator.js';

let boton = document.getElementById('boton');
var numero = document.getElementById("numero");
var bienvenido = document.getElementById("bienvenido");
var mensaje = document.getElementById("mensaje");
var tarjeta = document.getElementById("card");
var ingresar = document.getElementById("ingresar");


boton.addEventListener('click', () => {
    numero.style.display = "block";
    bienvenido.style.display = "none";
});

ingresar.addEventListener('click', () => {

    let valor = validator.isValid(tarjeta.value)

    if (valor) {
        alert(validator.maskify(tarjeta.value));
        numero.style.display = "none";
        mensaje.style.display = "block";
    } else {
        alert("no valido");
    }
});