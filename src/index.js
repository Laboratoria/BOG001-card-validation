import validator from "./validator.js";


// Toma los elementos con la clase pantallas y los almacena en un array en la variable pantalla

var i, pantallas;
pantallas = document.getElementsByClassName("pantallas");

for (i = 1; i < pantallas.length; i++) {
  pantallas[i].classList.add("oculta");
}

// En las clases del elemento padre donde se dio el evento quitar la clase activa y colocar la clase oculta para ocultar esta pantalla. 

function FunctionPreg(evento, link) {

  evento.target.parentElement.classList.remove("activa");
  evento.target.parentElement.classList.add("oculta");
 // Tomar el elemento div hacia donde nos lleva el boton, con la ID. A este elemento se le coloca la clase activa y se le quita la oculta para mostrarlo en la pantalla

  var next = document.getElementById(link);
  //console.log(next);
  next.classList.add("activa");
  next.classList.remove("oculta");
}


// ----> Funcion para tomar el nombre de la persona que juega y colocarlo en la pantalla de categorias.
// Selecciona el valor o contenido del elemento con el ID name (recuadro donde se escribe el nombre) y lo guarda en la variable nombre.
// Y en el elemento con el ID frase (etiqueta h2 en categorias) coloca la frase con el nombre que el usuario ingreso.

function myFunction() {
  var nombre = document.getElementById("name").value;
  //console.log(nombre)
  document.getElementById('frase').innerHTML = "¡Felicidades " + nombre + " tu transacción fue exitosa!";
}



const objectdata = document.getElementById("formulario1");
ingresar = document.getElementById('ingresar');
ingresar.addEventListener("click",pagar);
const objectdata = document.getElementById("formulario1");
objectdata.addEventListener("submit", enmascarar); 
//objectdata.addEventListener("submit", validar);        //addEventListener

    //var sumatoria=0;
//var dato="fsdfsdf90";
    //alert(validator.maskify(dato));
//console.log(validator.maskify("datonumero"));


function enmascarar(){
    const datonumero = document.getElementById("number").value;
    alert ("Su número de tarjeta es " + validator.maskify(datonumero) + "\n" + validator.isValid(datonumero))
    
}

/*function validar(){
    const datonumero = document.getElementById("number").value;
    alert (validator.isValid(datonumero))

}*/
///Console.log(validator.maskify(datonumero)); //variable, funcion, metodo
//console.log(validator.isValid(30630138407745)) ; 