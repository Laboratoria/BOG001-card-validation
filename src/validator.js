const validator = {

  isValid: function (cardNumber) {

    //aquí definimos que los numeros se separen y luego aparezcan en una misma cadena.

    cardNumber.split(" ").join(""); 

    if (parseInt(cardNumber) <= 0 || cardNumber.length > 16) {

      return false;

    }

    //en éste array definimos el ciclo for, en donde se va a iterar para que vayan agregando los elementos al

    var anotherArray = new Array(); 

    for (var i = 0; i < cardNumber.length; i++) {

      // Con el reverse se voltea el arreglo

      anotherArray.reverse(); 

      var sum = 0;

      for (var i = 0; i < anotherArray.length; i++) {

        var paramet = anotherArray[i];

        if (i % 2 != 0) {

          //Se dobla el dígito como dice la fórmula y si es digferente de 0...

          paramet *= 2; //se multiplican los dígitos x2

          if (paramet > 9) {

            paramet -= 9; //Si los números son mayores a 9 se restan por ese valor
          }
        }
        sum += paramet; //Finalmente se suma la var sum con la var paramet.
      }
      return sum % 10 == 0; //se divide entre 10 y si quedan en 0, es una tarjeta válida
    }
  },
};

export default validator;
