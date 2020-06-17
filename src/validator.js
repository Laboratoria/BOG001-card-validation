const validator = {
//creamos función para validar si una tarjeta de crédito es válida
isValidCard:(creditCardNumber) => {
  
  //Condicionamos a que e usuario no deje el campo el blanco y que no ingrese dígitos que no sean números.
  while (creditCardNumber === ''|| !creditCardNumber.match(creditCardNumber)) {
    creditCardNumber = prompt('Escribe un número de tarjeta válido')
  };

  //Este array va a contener los números del cardNumber.
  var arr = [];
  //Recorre los números del string y los almacena en el array vacío.
  for (var i = 0; i < creditCardNumber.length; i++) {
    arr.push(parseInt(creditCardNumber[i]))
  };

  //ponemos los números de la tarjeta que estan en un array en orden inverso
  var reverseCreditCardNumber = arr.reverse();

  for (var j = 0; j < reverseCreditCardNumber.length; j++); {
    //buscamos los números en posiciones impares del arreglo
    //if(j%2!=0) --->otra forma de buscar impares
    if (j % 2 === 1) {
      //aquellos en posiciones impares los multiplicamos por 2
      var duplicate = reverseCreditCardNumber[j] * 2;
      //de cada uno de aquellos multiplicados cuyo producto sea de dos dígitos vamos a sumar sus dígitos y los vamos poniendo el array inverso en sus posiciones correspondientes
      reverseCreditCardNumber[j] = parseInt(duplicate / 10) + duplicate % 10;
    };
  //creamos varianle sum donde vamos a sumar los elementos del array inverso
  var sum = 0;{
  //vamos a recorrer el array inverso para poder sumar sus elementos
  for (var k = 0; k < reverseCreditCardNumber.length; k++) 
    //sumamos cada uno de los elementos del array inverso
    sum += reverseCreditCardNumber[k];
  
  //retornamos TARJETA VALIDA  si el residuo de 10 de la suma es igual a 0 y TARJETA INVALIDA si eso es falso.
  return sum % 10 === 0 ? alert('tarjeta valida') : alert('tarjeta invalida');
}
  }

},
// Enmascaramos los numeros de la tarjeta
maskify(creditCardNumber){
//Ponemos la condición de que si tiene menos de 4 numeros nos retorne el mismo número
    if(creditCardNumber.length < 4){
      return creditCardNumber;
    }
// Si no, creamos variables que nos ayudan a enmascarar sin importar la mayor longitud los numeros
    else {var cantidadNumeros = creditCardNumber.length; 
      var lastDigit = creditCardNumber.slice(- 4);
      var masked = "#".repeat(cantidadNumeros - 4); 
      return masked+lastDigit
    };
},
};
    
export default validator;
