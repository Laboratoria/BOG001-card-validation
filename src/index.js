import validator from './validator.js';

console.log(validator);

function Almacenar (){//Definiendo funcion de Almacenar
  canu=document.getElementById("numtdc").value;
  var mod = 0;//Declarando la variable para el módulo
  var capi=0;//declarando contador del ciclo for para llenar el arreglo
  var bon=[];//arreglo para los elementos del numero TDC
  var car=0;//variable para transformar elementos del texto al array
  console.log("Número de tarjeta es: " + canu);//Imprimir el número en consola
  for (capi=0; capi<=canu.length-1; capi++) {//declaro el ciclo
  car=parseInt(canu.charAt(canu.length-1-capi));//
  bon[capi]=car;
  console.log("El elemento "+(capi+1)+" del arreglo es: " + bon[capi]);//Imprimir cada elemento del array
  }//Cerrar el ciclo
  console.log("El arreglo invertido es: " + bon);//incluido dentro de la función
  var sumi=0;//Declarando el acumulador para la suma de números en posiciones impares del arreglo bON
  var isi=0;//Declarando el contador para el índice de los elementos del arreglo que van a ser sumados. Arranca en cero y se incrementa en +2 unidades
  for (isi=0; isi<=canu.length-1; isi+=2){//Declarando el ciclo para sumar los elememntos del arreglo bon en posiciones impares; el tercer parámetro indica el incremento positivo, yeeeiiii)
  sumi = sumi + bon[isi]; //Acumulador de la sumatoria de dígitos en posiciones impares
  console.log("Elemento " + (isi+1) + " es: " + bon [isi]);
  }//fin del ciclo
  console.log(sumi);
  var sump=0;//Declarando el acumulador para la suma de números en posiciones pares del arreglo bon
  var isp=0;//Declarando el contador para el índice de los elementos del arreglo que van a ser sumados. Arranca en 1 y se incrementa en +2 unidades
  var dup=[];//Declarando un array para almacenar los elementos duplicados del array
  for (isp=1; isp<=canu.length-1; isp+=2) {//Declarando el ciclo para sumar los elememntos del arreglo bon en posiciones impares; el tercer parámetro indica el incremento positivo, yeeeiiii)
  console.log("Elemento " + (isp+1) + " es: " + bon [isp]);
  dup[isp]=(2*bon[isp]); //Declarando un array de duplicados de las posiciones pares
  if (2*bon[isp]>10) 
  {//Inicio del if de reducción de los dos dígitos del duplicado
  dup[isp]=2*bon[isp]-9;//"Suma de los dos dígitos de un duplicado mayor a 10"
  }//Fin del primer if
  else
  {
  dup[isp]=2*bon[isp];
  }//Fin del else de reducción
  
  console.log("Elemento " + isp + " duplicado es: " + dup [isp]);
  sump=sump+dup[isp];//Acumulador de elementos en posiciones pares
  }//Fin del ciclo for de sumas pares
  console.log(sump);
  tot = sumi+sump;
  console.log("Suma de Impares + Pares modificados = " + tot);
  mod = tot % 10;
  console.log ("El módulo de la suma es: " + mod);
  if (mod === 0){//Inicio del if de validación
  console.log("El número es múltiplo de 10 ==> Tarjeta Válida")
  }
  else
  {
  console.log("El número no es múltipo de 10 ==> Tarjeta Inválida")
  }//Fin del else de validación
  } //Fin de la función