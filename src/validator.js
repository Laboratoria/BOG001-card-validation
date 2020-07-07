const validator = {
  isValid: ( creditCardNumber ) => {
    let valor = creditCardNumber.split('').reverse();
    let guardar = 0; //Guardamos la suma de los calculos
    let posicionArray = 1; //Comenzaremos desde la posición 1 del arreglo
    
    valor.forEach(creditCardNumber => {// Invocamos un array para que ejecute una funcion para cada elemento
      let pares = ( posicionArray % 2 ); // Aplicamos módulo de dos para saber si el # es par o impar
      if (pares == 0) {// Si es par el modulo dara cero
        let resultadoParcial = ( Number ( creditCardNumber ) * 2);//Convertimos el número y lo multiplicamos por dos
        if (resultadoParcial >= 10) {// Damos parametros para seguir con las operaciones 
          let parcial = resultadoParcial.toString();// Creamos una cadena 
          let numeritos = parcial.split('');
          let cuenta = 0;
          numeritos.forEach( creditCardNumber => {
            cuenta += Number ( creditCardNumber );
          });
          guardar += cuenta;
        }
        else { 
          guardar += resultadoParcial;
        }
      } else {
        guardar += Number (creditCardNumber);
      }
      posicionArray++;
    });
    return ( (guardar % 10 ) == 0 ) 
  },
  
  maskify: (creditCardNumber) => {
    let enmascarado = '#';
    if (creditCardNumber.length >= 4) {
      let lastDigit = creditCardNumber.slice(-4);
      let enmascaradoStr = enmascarado
      .repeat(creditCardNumber.length -4)+lastDigit;
      return creditCardNumber = enmascaradoStr;
    } else {
      return creditCardNumber;
    }
},
};
export default validator;