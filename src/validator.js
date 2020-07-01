const validator = {

  isValid:(tc) => {
     
  var ntc = [];
  
  var tc = (tc + "");
        
  var cadena = tc.split("");
    
  for (var i= cadena.length-1; i >= 0; i--){
    
  ntc.push(cadena[i]);
  
  }  
  
  var tcnum = ntc.map(function (x){return parseInt(x,10)});
  
  var par = [];
  
  var impar = [];
  
  var sumimpar = 0;
  
  var sumpar = 0;
  
  var sumtotal = 0;
  
  var totalmodul = 0;
  
  for ( i= 0 ; i <= tcnum.length-1; i++){
  
  
  if ( i % 2 === 0)
    { 
    par.push(tcnum[i]);
    sumpar = sumpar + tcnum[i];
  
    }
    else
    {
    impar[i] = tcnum[i] * 2 ;
  
    if (impar[i] >= 10)
    {
    impar[i] = impar[i] - 9;
    } 
    sumimpar = sumimpar + impar[i];
    }
  }
  
  sumtotal = sumpar + sumimpar;
  totalmodul = sumtotal % 10;
   if (totalmodul === 0 ){
      
      console.log("la tarjeta es válida");
        return true;
      } 
  
    else {
       console.log("la tarjeta es inválida");
        return false;
    }
   },
  
   maskify:(tc) => {
  
    var tc = (tc + "");
        
    var cadena1 = tc.split("");
  
    var ultdigito = [];
  
    var maskifytc = '';
  
    var sultdigito = '';
    
    ultdigito = cadena1.slice (-4);
  
    var maskSymbol = "#";
  
    sultdigito = ultdigito.join('');
  
    maskifytc = maskSymbol.repeat(cadena1.length-4) + sultdigito;
  
    return maskifytc;
  
   }
  
  
  };
  
  export default validator;
  