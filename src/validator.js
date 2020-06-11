//Obtener el input de la tdc
const inputNumberCard = document.getElementById('inputNumberCard');

const validator = {
  isvalid: function(cardNumber){
    //Convertir el numero de la tdc en array y obtener el inverso
    let algorithmArray = cardNumber.split('').reverse();
    
//----------------------------- forEach ----------------------------------------------
    algorithmArray.forEach((element, index) => {

    //Obtener numeros en las posiciones par y multiplicarlos por 2
     if (index & 1) {
      element = element * 2

      //A numeros mayores o iguales a 10, convertirlos en string y separar los dos digitos con split 
      if (element >= 10) {
        element = element.toString().split('');

        //Convertir los digitos en numeros y sumarlos entre si
        element = parseInt(element[0]) + parseInt(element[1]);
      }
    } 

    //Colocar lo numeros que quedan en cada posicion del array
    algorithmArray[index] = parseInt(element);

    //Sumar todos los elementos del array
    let sum = algorithmArray.reduce(function(x,y){
      return x+y;
    });
    
    //Declarar el residuo de la division entre 10
    let residue = sum % 10;
    
    //Si el residuo es igual a 0 la tarjeta es valida, sino, es invalida
    if (residue = 0) {
      return true;
    } else {
      return false;
    }     
    });
  }
};

//----------------------- Codigo para pruebas ----------------------------------------
// inputNumberCard.addEventListener('blur', function(){
//   validator.isvalid(inputNumberCard.value)
// });

export default validator;
