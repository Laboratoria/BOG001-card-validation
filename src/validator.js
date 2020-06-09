//Obtener el input de la tdc
const inputNumberCard = document.getElementById('inputNumberCard');

//validator.isValid(creditCardNumber)
const validator = {
  isvalid: function(cardNumber){
    //Convertir el numero de la tdc en array y obtener el inverso
    let cardNumberReverse = cardNumber.split('').reverse();
    console.log(cardNumberReverse);
<<<<<<< HEAD
    //for each
=======

>>>>>>> a8ca7198c73973c9d16f1f90997baaf71c73313e
    //seleccionar los numeros en las posiciones pares del array
    let arrayPairsNumbers =[cardNumberReverse[1],cardNumberReverse[3],cardNumberReverse[5],cardNumberReverse[7],cardNumberReverse[9],cardNumberReverse[11],cardNumberReverse[13],cardNumberReverse[15]];
    console.log(arrayPairsNumbers);

    /*Mapear un array de números usando una función con un argumento
      (Multiplica cada uno de los numeros del array de pares por 2)*/
    var doubles = arrayPairsNumbers.map(function(x){
      return x * 2;
    })
    console.log(doubles);

    // let digitSum = doubles
    // function sum(number) {
    //   let res = 0;
    //   number.split('').forEach(c => res += parseInt(c));
    //   return res;
    // }
    // arrayPairsNumbers.forEach(function multi(){
    //   let i=0;
    //   var arrayMultiplication = arrayPairsNumbers[i] * 2;
    //   i ++;
    //   return arrayMultiplication
    // })
    // let arrayMultiplication = []
    // for (let i = 0; i <= arrayPairsNumbers.length - 1; i++){
    //   arrayMultiplication = arrayMultiplication + arrayPairsNumbers[i]* 2 ;
    //   arrayMultiplication = arrayMultiplication + arrayPairsNumbers[i]* 2 ;
    // }


    //return =
  }
};

inputNumberCard.addEventListener('blur', function(){
  validator.isvalid(inputNumberCard.value)
});


export default validator;
