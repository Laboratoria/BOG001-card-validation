const validator = {
  isValid:(creditCardNumber) => {
    let valor = creditCardNumber.split("").reverse()
    let guardar= 0;
    let posicionArray = 1;
    valor.forEach( numerito => { 
      let pares  = (posicionArray % 2);
      if (pares == 0) {
        let resultadoParcial = (Number(numerito)*2);
        if (resultadoParcial >= 10) {
          let parcialValueString = resultadoParcial.toString();
          let arrayNumeritos = parcialValueString.split("");
          let resultadoCuenta = 0;
          arrayNumeritos.forEach((numerito) => {
          resultadoCuenta += Number(numerito);
        });
        guardar += resultadoCuenta;
      
      } else {
          guardar += resultadoParcial;
        }
      } else {
        guardar +=  Number(numerito);
      }
      posicionArray++;
    })
    return((guardar %10) == 0);
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
      }
  },
  };


  export default validator;

  